import React from 'react';
import renderer from 'react-test-renderer';
import DatePicker from './index';

test('Natural', () => {
  let state = {};
  const props = {
    selectedDate: new Date(),
    handleDateChange: date => {
      const options = {
        year: 'numeric',
        month: 'long',
      };
      const dateModified = date.toLocaleDateString('en-US', options);
      const splitted = dateModified.split(' ');
      state = {
        ...state,
        selectedDate: dateModified,
        month: splitted[0],
        year: splitted[1],
      };
    },
  };
  const datePicker = renderer.create(<DatePicker {...props} />).toJSON();
  expect(datePicker).toMatchSnapshot();
});
