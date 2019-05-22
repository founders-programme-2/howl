import React, { Fragment } from 'react';

const Entry = ({ title, details }) => {
  const shortenDetails = storyDetails => {
    const splitDetails = storyDetails.split(' ');
    const newArr = splitDetails.slice(0, 29);
    newArr.push('...');
    const bodyString = newArr.join(' ');
    return bodyString;
  };

  return (
    <Fragment>
      <h3>{title}</h3>
      <p>{shortenDetails(details)}</p>
    </Fragment>
  );
};

export default Entry;
