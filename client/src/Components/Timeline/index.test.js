import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Timeline from './index';

test('Natural', () => {
  const timeline = renderer
    .create(
      <BrowserRouter>
        <Timeline />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(timeline).toMatchSnapshot();
});
