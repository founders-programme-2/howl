import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Story from './index';

test('Natural', () => {
  const story = renderer
    .create(<BrowserRouter> <Story match={{ params: { id: 'recrmXEbjl4FKiCq1' } }} /> </BrowserRouter>).toJSON();
  expect(story).toMatchSnapshot();
});
