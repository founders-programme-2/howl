import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Loader from './index';

test('Natural', () => {
  const props = {
    uploadFlag: false,
  };
  const loader = renderer
    .create(
      <BrowserRouter>
        <Loader {...props} />
      </BrowserRouter>
    )
    .toJSON();
  expect(loader).toMatchSnapshot();
});
