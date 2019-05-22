import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Resources from './index';

test('Natural', () => {
  const resources = renderer.create(<BrowserRouter> <Resources /> </BrowserRouter>).toJSON();
  expect(resources).toMatchSnapshot();
});
