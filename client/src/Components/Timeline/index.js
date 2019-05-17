import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Common/Footer';
import navigationUrls from '../../constants/navigationUrls';

const Timeline = () => {
  const { ARCHIVE_URL } = navigationUrls;
  return (
    <Fragment>
      <main>
        <header>
          <h1>The HOWL Timeline</h1>
        </header>
        <p>
          Browse our timeline by using the controls at the bottom of this page
          to filter your results by category, location, tags or year. Above the
          search controls, you'll find a yellow bar of dates. This allows you to
          view stories from between a time span of four to five years.
        </p>

        <p>
          Prefer a simpler approach? Take a look at the{' '}
          <Link to={ARCHIVE_URL}>archive</Link> for a text-based experience.
        </p>
        <Footer />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Timeline;
