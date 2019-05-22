import React, { Fragment, Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../Common/Footer';
import navigationUrls from '../../constants/navigationUrls';
import Entry from './Entry/index';

const data = [
  {
    title: 'Avengers: Infinity War',
    year: '2018',
    description:
      'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality.',
  },
  {
    title: 'Bohemian Rhapsody',
    year: '2018',
    description:
      'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet.',
  },
  {
    title: 'The Incredibles 2',
    year: '2018',
    description:
      'Everyone’s favorite family of superheroes is back in “Incredibles 2” – but this time Helen is in the spotlight, leaving Bob at home with Violet and Dash to navigate the day-to-day heroics of “normal” life.',
  },
];

class Archive extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    axios.get('/archive/feed').then(response => {
      // handle success
      console.log(response);
    });
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
            Prefer a viusal approach? Don&#39;t worry our{' '}
            <Link to={TIMELINE_URL}>timeline</Link> is coming soon!
          </p>
          <h2>Recent contributions</h2>
          {data.map(entry => (
            <Entry {...entry} />
          ))}
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default Archive;
