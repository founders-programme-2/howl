import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Results from './index';

test('Natural', () => {
  const results = renderer
    .create(
      <BrowserRouter>
        {' '}
        <Results />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(results).toMatchSnapshot();
});
