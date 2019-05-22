import React, { Fragment } from 'react';

const Entry = ({ title, details }) => {
  const shortenDetails = storyDetails => {
    const shortenP = storyDetails.split(' ').slice(0, 29);
    shortenP.push('...');
    const shortenedBody = shortenP.join(' ');
    return shortenedBody;
  };

  return (
    <Fragment>
      <h3>{title}</h3>
      <p>{shortenDetails(details)}</p>
    </Fragment>
  );
};

export default Entry;
