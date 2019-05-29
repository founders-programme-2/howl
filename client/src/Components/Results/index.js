import React, { Fragment } from 'react';
import Footer from '../Common/Footer';

const Results = ({ footerProp, results }) => {
  const renderResults = res => {
    return res.map(story => <p>{story}</p>);
  };

  return (
    <Fragment>
      <h1>Hello Results page!</h1>
      {renderResults(results)}
      <Footer updateResults={footerProp} />
    </Fragment>
  );
};

export default Results;
