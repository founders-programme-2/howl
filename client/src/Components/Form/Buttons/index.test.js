import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Buttons from './index';

test('Natural', () => {
  let state = {};
  const props = {
    handleUploadFile: event => {
      const img = new FormData();
      img.append('uploadedImg', event.target.files[0]);
      state = { ...state, uploadFlag: true, imageFlag: false };
      axios.post('/upload', img).then(({ data }) => {
        if (data.success) {
          this.setState({
            uploadFlag: false,
            imgLink: data.image,
            message: 'Image uploaded successfully!',
          });
        } else {
          this.setState({
            uploadFlag: false,
            imageFlag: true,
            imgLink: 'no url was retrieved',
            message: 'Something went wrong, please try again.',
          });
        }
      });
    },
  };

  const buttons = renderer
    .create(
      <BrowserRouter>
        <Buttons />
      </BrowserRouter>
    )
    .toJSON();
  expect(buttons).toMatchSnapshot();
});
