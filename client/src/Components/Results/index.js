import React, { Fragment } from 'react';
import Footer from '../Common/Footer';

const Results = ({ setFilters, filters }) => {
  const renderResults = res => {
    // Axios request should be here, this is a stupid initial render.
    return Object.keys(res).map(el => <p>{el}</p>);
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
