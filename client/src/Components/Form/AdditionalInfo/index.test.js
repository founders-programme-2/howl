import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import AdditionalInfo from './index';

test('Natural', () => {
  let state = {};
  const props = {
    tags: [],
    category: '',
    infoTrue: false,
    wlmConnection: '',
    additionalComments: '',
    tagsChange: event => {
      state = { ...state, tags: event.target.value };
    },
    dropdownChange: event => {
      this.setState({ [event.target.name]: event.target.value });
    },
    checkboxChange: name => event => {
      state = { ...state, [name]: event.target.checked };
    },
    textChange: name => event => {
      state = { ...state, [name]: event.target.value };
    },
  };

  const additionalInfo = renderer
    .create(
      <BrowserRouter>
        {' '}
        <AdditionalInfo {...props} />{' '}
      </BrowserRouter>
    )
    .toJSON();
  expect(additionalInfo).toMatchSnapshot();
});
