import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('Natural', () => {
  const app = renderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
});
