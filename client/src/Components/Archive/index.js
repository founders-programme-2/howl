import React from 'react';
import Footer from '../Common/Footer';
import { Link } from 'react-router-dom';
import navigationUrls from '../../constants/navigationUrls';


const Archive = () => {
  const { TIMELINE_URL } = navigationUrls;
  return (
    <main>
      <header>
        <h1>The HOWL Archive</h1>
      </header>
      <p>
        Browse our story and photo archive by using the archive controls at the bottom of this page to
        filter your results by category, location, tags or year. Above the search controls, you'll find
        a yellow bar of dates. This allows you to view stories from between a time span of four to five
        years.
      </p>

      <p>
        Prefer a visual approach? Take a look at the <Link to={TIMELINE_URL}>timeline</Link>.
      </p>
      <Footer />
    </main>
  );
};

export default Archive;
