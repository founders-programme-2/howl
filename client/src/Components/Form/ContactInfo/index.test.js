import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import ContentInfo from './index';

test('Natural', () => {
  let state = {};

  const props = {
    name: '',
    email: '',
    phone: '',
    textChange: name => event => {
      state = { ...state, [name]: event.target.value };
    },
  };
  const contentInfo = renderer
    .create(
      <BrowserRouter>
        <ContentInfo {...props} />
      </BrowserRouter>
    )
    .toJSON();
  expect(contentInfo).toMatchSnapshot();
});
