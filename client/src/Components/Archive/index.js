import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Common/Footer';
import navigationUrls from '../../constants/navigationUrls';
import Entry from './Entry/index';
import BounceLoaderComponent from '../BounceLoader';
import BouncerContainer from './Archive.style';

class Archive extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    results: [],
    selectedPostId: '',
    loadingFlag: false,
  };

  componentDidMount() {
    this.setState({ loadingFlag: true }, () => {
      axios.get('/archive/feed').then(response => {
        this.setState({ results: response.data.data, loadingFlag: false });
      });
    });
  }

  viewFullPost = id => () => {
    this.setState({ selectedPostId: id }, () => {
      const { history } = this.props;
      const { selectedPostId } = this.state;
      history.push(`/story/${selectedPostId}`);
    });
  };

  render() {
    const { TIMELINE_URL } = navigationUrls;
    const { results, loadingFlag } = this.state;
    const { setFilters } = this.props;
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
        <Footer setFilters={setFilters} />
      </Fragment>
    );
  }
}

export default Archive;
