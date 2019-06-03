import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Footer from '../Common/Footer';
import Entry from '../Archive/Entry';
import navigationUrls from '../../constants/navigationUrls';
import Smain from './Results.style';

class Results extends Component {
  state = {
    selectedPostId: '',
    data: [],
  };

  // makes the api call when navigating to the page
  componentDidMount() {
    this.apiCall();
  }

  // makes the api call when props are passed down from a new search
  componentWillReceiveProps() {
    this.apiCall();
  }

  viewFullPost = id => () => {
    this.setState({ selectedPostId: id }, () => {
      const { history } = this.props;
      const { selectedPostId } = this.state;
      history.push(`/story/${selectedPostId}`);
    });
  };

  // queries the backend for searches from the footer
  apiCall = () => {
    const { filters, history } = this.props;
    const { tags, category, year, location, search } = filters;
    const { ARCHIVE_URL } = navigationUrls;

    // if nothing is selected, redirects to the archive feed
    if (!tags && !category && !year && !location && !search) {
      history.push(ARCHIVE_URL);
    } else {
      // makes api call and sets results as state
      axios.post('/search', filters).then(res => {
        const { data } = res.data;
        this.setState({ data });
      });
    }
  };

  // renders state (returned data from api call) on the page
  renderResults = dataToRender => {
    if (dataToRender.length === 0) {
      return <h2>No stories found. Please try again.</h2>;
    }
    return dataToRender.map(story => (
      <Entry
        key={story.id}
        id={story.id}
        title={story.fields.title}
        year={story.fields.year}
        category={story.fields.category}
        details={story.fields.details}
        tags={story.fields.tags}
        viewFullPost={this.viewFullPost}
      />
    ));
  };

  render() {
    const { data } = this.state;
    const { setFilters } = this.props;
    return (
      <Fragment>
        <Smain>
          <header>
            <h1>Search Results</h1>
          </header>
          {this.renderResults(data)}
        </Smain>
        <Footer setFilters={setFilters} />
      </Fragment>
    );
  }
}

export default Results;
