import React, { Fragment } from 'react';
import Footer from '../Common/Footer';

const Results = ({ footerProp }) => {
  return (
    <Fragment>
      <h1>Hello Results page!</h1>
      <Footer updateResults={footerProp} />
    </Fragment>
  );
};

export default Results;
