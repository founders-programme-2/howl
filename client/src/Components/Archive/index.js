import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import Footer from '../Common/Footer';
import navigationUrls from '../../constants/navigationUrls';
import Entry from './Entry/index';
import BounceLoaderComponent from '../BounceLoader';
import { BouncerContainer, ScrollButton } from './Archive.style';

class Archive extends Component {
  state = {
    results: [],
    selectedPostId: '',
    loadingFlag: false,
    jumpButton: 'Jump To Search',
  };

  componentDidMount() {
    this.setState({ loadingFlag: true }, () => {
      axios.get('/archive/feed').then(response => {
        this.setState({ results: response.data.data, loadingFlag: false });
      });
    });

    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  doScroll = () => {
    const { jumpButton } = this.state;
    const jumpOptions = {
      duration: 1500,
      delay: 100,
      smooth: true,
    };
    if (jumpButton === 'Jump To Search') {
      animateScroll.scrollToBottom(jumpOptions);
    } else {
      animateScroll.scrollToTop(jumpOptions);
    }
  };

  isBottom = () => {
    return (
      document.body.offsetHeight === window.pageYOffset + window.innerHeight
    );
  };

  isTop = () => {
    return window.pageYOffset === 0;
  };

  trackScrolling = () => {
    const footerElement = document.getElementsByTagName('Footer')[0];
    if (this.isBottom(footerElement)) {
      this.setState({ jumpButton: 'Jump To Top' });
    } else if (this.isTop()) {
      this.setState({ jumpButton: 'Jump To Search' });
    }
  };

  viewFullPost = id => () => {
    this.setState({ selectedPostId: id }, () => {
      const { history } = this.props;
      const { selectedPostId } = this.state;
      history.push(`/story/${selectedPostId}`);
    });
  };

  render() {
    const { TIMELINE_URL } = navigationUrls;
    const { results, loadingFlag, jumpButton } = this.state;
    const renderResultsAsEntries = results
      ? results.map(result => (
          <Entry
            key={result.id}
            id={result.id}
            title={result.fields.title}
            year={result.fields.year}
            category={result.fields.category}
            details={result.fields.details}
            tags={result.fields.tags}
            viewFullPost={this.viewFullPost}
          />
        ))
      : null;

    const EntriesOrLoader = loadingFlag ? (
      <BouncerContainer>
        <BounceLoaderComponent loadingFlag={loadingFlag} />
      </BouncerContainer>
    ) : (
      <Fragment>{renderResultsAsEntries}</Fragment>
    );
    return (
      <Fragment>
        <main>
          <header>
            <h1>The HOWL Archive</h1>
          </header>
          <p>
            Browse our story and photo archive by using the archive controls at
            the bottom of this page to filter your results by category,
            location, tags or year.
          </p>
          <p>
            Prefer a visual approach? Don&#39;t worry our{' '}
            <Link to={TIMELINE_URL}>timeline</Link> is coming soon!
          </p>
          <h2>Recent contributions</h2>
          {EntriesOrLoader}
        </main>
        <ScrollButton onClick={this.doScroll}> {jumpButton} </ScrollButton>
        <Footer />
      </Fragment>
    );
  }
}

export default Archive;
