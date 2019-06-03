import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from './index';

test('Natural', () => {
  const header = renderer
    .create(
      <BrowserRouter>
        {' '}
        <Header />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(header).toMatchSnapshot();
});
