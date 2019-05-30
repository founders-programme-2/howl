import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Help from './index';

test('Natural', () => {
  const help = renderer
    .create(
      <BrowserRouter>
        {' '}
        <Help />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(help).toMatchSnapshot();
});
