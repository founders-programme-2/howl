import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Archive from './index';

test('Natural', () => {
  const archive = renderer
    .create(
      <BrowserRouter>
        {' '}
        <Archive />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(archive).toMatchSnapshot();
});
