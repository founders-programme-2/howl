import React, { Fragment } from 'react';

const Entry = ({ title, year, description, imageURL }) => {
  return (
    <Fragment>
      <h3>{title}</h3>
      <p>{year}</p>
      <p>{description}</p>
    </Fragment>
  );
};

export default Entry;
