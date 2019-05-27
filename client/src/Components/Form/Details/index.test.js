import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Details from './index';

test('Natural', () => {
  let state = {};
  const props = {
    radio: '',
    radioChange: event => {
      state = { ...state, radio: event.target.value };
    },
    location: '',
    selectedDate: new Date(),
    textChange: name => event => {
      state = { ...state, [name]: event.target.value };
    },
    handleDateChange: date => {
      const options = {
        year: 'numeric',
        month: 'long',
      };
      const dateModified = date.toLocaleDateString('en-US', options);
      const splitted = dateModified.split(' ');
      state = { ...state,
        selectedDate: dateModified,
        month: splitted[0],
        year: splitted[1],
      }
    },
    dropdownChange: event => {
      state = { ...state, [event.target.name]: event.target.value };
    }
  }
  const details = renderer.create(<BrowserRouter> <Details { ...props } /> </BrowserRouter>).toJSON();
  expect(details).toMatchSnapshot();
});
