import React, { Fragment } from 'react';
import resourcesData from './resourcesData';
import bibliographyData from './bibliographyData';
import { Sh2, Sp } from './Resources.style';
import Footer from '../Common/Footer';

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

  // maps over books in data.json and renders bibliography
  const renderBibliography = bibliographyData.books.map(book => {
    return (
      <article key={book.title}>
        <Sh2>Title: {book.title}</Sh2>
        <Sp>Author: {book.author}</Sp>
        <Sp>Date: {book.date}</Sp>
        <Sp>Description: {book.description}</Sp>
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
        <h2>Bibliography</h2>
        {renderBibliography}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Resources;
