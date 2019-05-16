import React, { Fragment } from 'react';
import resourcesData from './resourcesData';
import { Sh2, Sp } from './Resources.style'

const Resources = () => {
  // maps over data and renders resources on page
  const renderResources = resourcesData.map(resource => {
    return (
      <article key={resource.id}>
        <a href={resource.link} target="_blank" rel="noopener noreferrer">
          <Sh2>{resource.title}</Sh2>
        </a>
          <Sp>{resource.info}</Sp>
      </article>
    );
  });

  return (
    <Fragment>
      <main>
        <header>
          <h1>Feminist Resources</h1>
        </header>
        <p>
          While HOWL exists to fill a gap in the archival and sharing of
          personal stories, many other thorough and valuable feminist resources
          exist. If you are looking to learn more, please have a look at the
          following:
        </p>
        {renderResources}
      </main>
    </Fragment>
  );
};

export default Resources;
