import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Form from './index';

test('Natural', () => {
  const form = renderer.create(<BrowserRouter> <Form /> </BrowserRouter>).toJSON();
  expect(form).toMatchSnapshot();
});
