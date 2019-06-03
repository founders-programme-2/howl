import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Post from './index';

test('Natural', () => {
  let state = {};
  const props = {
    title: '',
    details: '',
    imageCap: '',
    imgPermission: false,
    checkboxChange: name => event => {
      this.setState({ [name]: event.target.checked });
    },
    textChange: name => event => {
      this.setState({ [name]: event.target.value });
    },
    handleUploadFile: event => {
      const img = new FormData();
      img.append('uploadedImg', event.target.files[0]);
      this.setState({ uploadFlag: true, imageFlag: false }, () => {
        axios.post('/upload', img).then(({ data }) => {
          if (data.success) {
            state = {
              ...state,
              uploadFlag: false,
              imgLink: data.image,
              message: 'Image uploaded successfully!',
            };
          } else {
            state = {
              ...state,
              uploadFlag: false,
              imageFlag: true,
              imgLink: 'no url was retrieved',
              message: 'Something went wrong, please try again.',
            };
          }
        });
      });
    },
    radio: 'textPost',
    imgLink: 'https://s3.envato.com/files/255314612/pre80.png',
    message: '',
    uploadFlag: false,
    imageFlag: true,
  };
  const post = renderer
    .create(
      <BrowserRouter>
        <Post {...props} />
      </BrowserRouter>
    )
    .toJSON();
  expect(post).toMatchSnapshot();
});
