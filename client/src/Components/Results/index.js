import React, { Fragment } from 'react';
import Footer from '../Common/Footer';

const Results = ({ setFilters, filters }) => {
  const renderResults = res => {
    return res.map(story => <p>{story}</p>);
  };

  return (
    <Fragment>
      <h1>Hello Results page!</h1>
      {renderResults(filters)}
      <Footer setFilters={setFilters} />
    </Fragment>
  );
};

export default Results;
