import React, { Fragment } from 'react';

const Entry = ({ title, details }) => {
  const shortenDetails = bodyP => {
    const splitDetails = bodyP.split(' ');
    const newArr = splitDetails.slice(0, 30);
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
