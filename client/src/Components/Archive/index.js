import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Common/Footer';
import navigationUrls from '../../constants/navigationUrls';
import Entry from './Entry/index';

class Archive extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    axios.get('/archive/feed').then(response => {
      this.setState({ results: response.data.data });
      console.log(this.state.results, 'results-in');
    });
    console.log(this.state.results, 'results');
  }

  // renders all titles on the archive page as a feed
  renderResultsAsEntry() {
    const { results } = this.state;
    console.log('results are : ', results);
    return results.map(result => (
      <Entry
        key={result.id}
        title={result.fields.title}
        year={result.fields.year}
        category={result.fields.category}
        details={result.fields.details}
        tags={result.fields.tags}
      />
    ));
  }

  render() {
    const { TIMELINE_URL } = navigationUrls;
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
          {this.renderResultsAsEntry()}
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Archive;
