import React, { Component } from 'react';
import axios from 'axios';
import ContactInfo from './ContactInfo';
import Details from './Details';
import Post from './Post';
import AdditionalInfo from './AdditionalInfo';
import { MuiThemeProvider } from '../muIndex';
import { FormTheme, ErrMsg, FormMsg } from './Form.style';
import Buttons from './Buttons';
import validateFunc from './validation';

class Form extends Component {
  state = {
    radio: 'textPost',
    tags: [],
    category: '',
    infoTrue: false,
    name: '',
    email: '',
    phone: '',
    location: '',
    selectedDate: new Date(),
    year: '',
    month: '',
    title: '',
    details: '',
    imageCap: '',
    imgPermission: false,
    imgLink: '',
    wlmConnection: '',
    additionalComments: '',
    message: '',
    uploadFlag: false,
    imageFlag: true,
    formErr: null,
    tagsErr: null,
    categoryErr: null,
    infoTrueErr: null,
    nameErr: null,
    emailErr: null,
    phoneErr: null,
    locationErr: null,
    selectedDateErr: null,
    titleErr: null,
    detailsErr: null,
    imageCapErr: null,
    imgPermissionErr: null,
    imgLinkErr: null,
    wlmConnectionErr: null,
    additionalCommentsErr: null,
    formSuccess: null,
  };

  inputsArray = [
    'form',
    'tags',
    'category',
    'infoTrue',
    'name',
    'email',
    'phone',
    'location',
    'selectedDate',
    'title',
    'details',
    'imageCap',
    'imgPermission',
    'imgLink',
    'wlmConnection',
    'additionalComments',
  ];

  radioChange = event => {
    this.setState({ radio: event.target.value });
  };

  tagsChange = event => {
    this.setState({ tags: event.target.value });
  };

  dropdownChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  checkboxChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  textChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleDateChange = date => {
    const options = {
      year: 'numeric',
      month: 'long',
    };
    const dateModified = date.toLocaleDateString('en-US', options);
    const splitted = dateModified.split(' ');
    this.setState({
      selectedDate: dateModified,
      month: splitted[0],
      year: splitted[1],
    });
  };

  handleUploadFile = event => {
    const img = new FormData();
    img.append('uploadedImg', event.target.files[0]);
    this.setState({ uploadFlag: true, imageFlag: false }, () => {
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
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    validateFunc({ ...this.state })
      .then(() => {
        this.setState({ formSuccess: true }, () => {
          const submittedData = { ...this.state };
          axios.post('/posts/create', submittedData).then(() => {
            const { history } = this.props;
            setTimeout(() => {
              history.push('/archive');
            }, 3000);
          });
        });
      })
      .catch(err => {
        this.inputsArray.forEach(ele => {
          const errName = `${ele}Err`;
          this.setState({ [errName]: null });
        });
        const errorsArray = err.inner;
        errorsArray.forEach(ele => {
          const errName = `${ele.path}Err`;
          this.setState({ [errName]: [ele.message][0] });
        });
        this.setState({ formErr: true });
      });
  };

  render() {
    const {
      radio,
      tags,
      category,
      infoTrue,
      name,
      email,
      phone,
      location,
      selectedDate,
      title,
      details,
      imageCap,
      imgPermission,
      wlmConnection,
      additionalComments,
      message,
      imgLink,
      uploadFlag,
      imageFlag,
      formErr,
      tagsErr,
      categoryErr,
      infoTrueErr,
      nameErr,
      emailErr,
      phoneErr,
      locationErr,
      selectedDateErr,
      titleErr,
      detailsErr,
      imageCapErr,
      imgPermissionErr,
      imgLinkErr,
      wlmConnectionErr,
      additionalCommentsErr,
      formSuccess,
    } = this.state;
    return (
      <MuiThemeProvider theme={FormTheme}>
        <main>
          <header>
            <h1>Add to HOWL</h1>
          </header>
          <form>
            <ContactInfo
              name={name}
              email={email}
              phone={phone}
              textChange={this.textChange}
              nameErr={nameErr}
              emailErr={emailErr}
              phoneErr={phoneErr}
            />
            <Details
              radio={radio}
              radioChange={this.radioChange}
              location={location}
              selectedDate={selectedDate}
              handleDateChange={this.handleDateChange}
              dropdownChange={this.dropdownChange}
              locationErr={locationErr}
              selectedDateErr={selectedDateErr}
            />
            <Post
              title={title}
              details={details}
              imageCap={imageCap}
              imgPermission={imgPermission}
              checkboxChange={this.checkboxChange}
              textChange={this.textChange}
              handleUploadFile={this.handleUploadFile}
              radio={radio}
              imgLink={imgLink}
              message={message}
              uploadFlag={uploadFlag}
              imageFlag={imageFlag}
              titleErr={titleErr}
              detailsErr={detailsErr}
              imageCapErr={imageCapErr}
              imgPermissionErr={imgPermissionErr}
              imgLinkErr={imgLinkErr}
            />
            <AdditionalInfo
              tags={tags}
              category={category}
              infoTrue={infoTrue}
              tagsChange={this.tagsChange}
              dropdownChange={this.dropdownChange}
              checkboxChange={this.checkboxChange}
              wlmConnection={wlmConnection}
              additionalComments={additionalComments}
              textChange={this.textChange}
              tagsErr={tagsErr}
              categoryErr={categoryErr}
              infoTrueErr={infoTrueErr}
              wlmConnectionErr={wlmConnectionErr}
              additionalCommentsErr={additionalCommentsErr}
            />
            {formErr ? (
              <ErrMsg>
                Oops! Make sure you filled all required fields with
                correct/appropriate data.
              </ErrMsg>
            ) : null}
            {formSuccess ? (
              <FormMsg>
                Your form has been submitted! Its entered the moderation process
                and can take up to a week to get approved/rejected.
              </FormMsg>
            ) : null}
            <Buttons handleSubmit={this.handleSubmit} />
          </form>
        </main>
      </MuiThemeProvider>
    );
  }
}

export default Form;
