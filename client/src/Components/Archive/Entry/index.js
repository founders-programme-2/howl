import React, { Fragment } from 'react';

const Entry = ({ title, year, category, details, tags }) => {
  const shortenDetails = storyDetails => {
    const shortenP = storyDetails.split(' ').slice(0, 29);
    let shortenedBody = shortenP.join(' ');
    shortenedBody += '...';
    return shortenedBody;
  };

  const renderTags = incomingTags => {
    return incomingTags.map(tag => <p key={tag}>{tag}</p>);
  };

  return (
    <Fragment>
      <h3>{title}</h3>
      <h4>Date of story:</h4>
      <p>{year}</p>
      <h4>Category:</h4>
      <p>{category}</p>
      <h4>Details:</h4>
      <p>{shortenDetails(details)}</p>
      <h4>Tags:</h4>
      {renderTags(tags)}
    </Fragment>
  );
};

export default Entry;
