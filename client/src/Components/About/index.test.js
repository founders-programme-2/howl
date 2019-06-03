import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import About from './index';

test('Natural', () => {
  const about = renderer
    .create(
      <BrowserRouter>
        {' '}
        <About />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(about).toMatchSnapshot();
});
