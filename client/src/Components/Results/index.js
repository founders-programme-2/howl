import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Footer from '../Common/Footer';
import Entry from '../Archive/Entry';

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
    const { filters } = this.props;
    axios.post('/search', filters).then(res => {
      const dataToRender = res.data.data;
      this.setState({ data: dataToRender });
    });
  }

  render() {
    const { data } = this.state;
    const { setFilters } = this.props;
    return (
      <Fragment>
        <main>
          <h1>Hello Results page!</h1>
          {this.renderResults(data)}
        </main>
        <Footer setFilters={setFilters} />
      </Fragment>
    );
  }
}

export default Results;
