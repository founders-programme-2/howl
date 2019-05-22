import React, { Fragment } from 'react';

const Entry = ({ title, details }) => {
  return (
    <Fragment>
      <h3>{title}</h3>
      <p>{details}</p>
    </Fragment>
  );
};

export default Entry;
