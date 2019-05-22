import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Wlm from './index';

test('Natural', () => {
  const wlm = renderer.create(<BrowserRouter> <Wlm /> </BrowserRouter>).toJSON();
  expect(wlm).toMatchSnapshot();
});
