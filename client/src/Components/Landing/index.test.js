import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Landing from './index';

test('Natural', () => {
  const landing = renderer
    .create(
      <BrowserRouter>
        {' '}
        <Landing />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(landing).toMatchSnapshot();
});
