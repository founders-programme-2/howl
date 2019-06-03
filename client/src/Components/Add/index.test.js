import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Add from './index';

test('Natural', () => {
  const add = renderer
    .create(
      <BrowserRouter>
        {' '}
        <Add />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(add).toMatchSnapshot();
});
