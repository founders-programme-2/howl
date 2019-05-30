import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Main from './index';

test('Natural', () => {
  const main = renderer
    .create(
      <BrowserRouter>
        {' '}
        <Main />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(main).toMatchSnapshot();
});
