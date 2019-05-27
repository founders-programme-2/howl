import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Error404 from './index';

test('Natural', () => {
  const error404 = renderer.create(<BrowserRouter> <Error404 /> </BrowserRouter>).toJSON();
  expect(error404).toMatchSnapshot();
});
