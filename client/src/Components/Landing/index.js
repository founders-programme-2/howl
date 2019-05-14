import React, { Fragment } from 'react';

const Landing = () => {
  return (
    <Fragment>
      <main>
        <header>
          <h4>Welcome to Howl:</h4>
          <h1>A History of Women&#39;s Liberation</h1>
        </header>
        <section>
          <h2>Who are we?</h2>
          <p>
            Howl is a group of UK-based women who are interested in building an
            archive of memories, ephemera and resources relating to the
            Women&#39;s Liberation Movement in the United Kingdom between 1960
            and 1990. We welcome any sister with a memory relating to the
            movement to add their story, photos or ephemera to our archive.
          </p>
        </section>
        <section>
          <h2>Navigation</h2>
          <p>
            Browse our our story and photo archive by using the archive controls
            at the bottom of this page to filter your results by category,
            location, tags or year. The yellow bar of dates allows you to search
            for stories within a 4-5 year span. All other information is
            accessible from the black banner at the top of the page. From there,
            you can navigate to other parts of the project, including more
            information about Howl, the Women&#39;s Liberation Movement and
            other resources.
          </p>
        </section>
      </main>
    </Fragment>
  );
};

export default Landing;
