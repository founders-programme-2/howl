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

  componentDidMount() {
    this.apiCall();
  }

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

  renderResults = dataToRender => {
    console.log('D2R: ', dataToRender);
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

  apiCall() {
    const { filters, history } = this.props;
    const { tags, category, year, location, search } = filters;
    const { ARCHIVE_URL } = navigationUrls;
    console.log(tags, category, year, location, search);
    if (!tags && !category && !year && !location && !search) {
      history.push(ARCHIVE_URL);
    } else {
      axios.post('/search', filters).then(res => {
        const dataToRender = res.data.data;
        this.setState({ data: dataToRender });
      });
    }
  }

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
