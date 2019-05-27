import React, { Component } from 'react';
import axios from 'axios';
import ContactInfo from './ContactInfo';
import Details from './Details';
import Post from './Post';
import AdditionalInfo from './AdditionalInfo';
import { MuiThemeProvider } from '../muIndex';
import { FormTheme, CntrForm } from './Form.style';
import Buttons from './Buttons';

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
  };

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
    const submittedData = { ...this.state };
    axios.post('/posts/create', submittedData).then(() => {
      const { history } = this.props;
      history.push('/story');
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const submittedData = { ...this.state };
    axios.post('/posts/create', submittedData).then(res => {
      const { history } = this.props;
      history.push('/story');
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const submittedData = { ...this.state };
    axios.post('/posts/create', submittedData).then(() => {
      const { history } = this.props;
      history.push('/story');
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
    } = this.state;
    return (
      <MuiThemeProvider theme={FormTheme}>
        <main>
          <header>
            <h1>Add to HOWL</h1>
          </header>
          <CntrForm>
            <ContactInfo
              name={name}
              email={email}
              phone={phone}
              textChange={this.textChange}
            />
            <Details
              radio={radio}
              radioChange={this.radioChange}
              location={location}
              selectedDate={selectedDate}
              textChange={this.textChange}
              handleDateChange={this.handleDateChange}
              dropdownChange={this.dropdownChange}
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
            />
            <Buttons handleSubmit={this.handleSubmit} />
          </CntrForm>
        </main>
      </MuiThemeProvider>
    );
  }
}

export default Form;
