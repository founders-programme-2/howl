import React, { Component } from 'react';
import ContactInfo from './ContactInfo';
import Details from './Details';
import Post from './Post';
import AdditionalInfo from './AdditionalInfo';

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
    selectedDate: '',
    title: '',
    details: '',
    imageCap: '',
    imgPermission: false,
    wlmConnection: '',
  };

  radioChange = event => {
    this.setState({ radio: event.target.value });
  };

  tagsChange = event => {
    this.setState({ tags: event.target.value });
  };

  categoryChange = event => {
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
    } = this.state;
    return (
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
        />
          <Details
            radio={radio}
            radioChange={this.radioChange}
            location={location}
            selectedDate={selectedDate}
            textChange={this.textChange}
            handleDateChange={this.handleDateChange}
          />
          <Post
            title={title}
            details={details}
            imageCap={imageCap}
            imgPermission={imgPermission}
            checkboxChange={this.checkboxChange}
            textChange={this.textChange}
            radio={radio}
          />
          <AdditionalInfo
            tags={tags}
            category={category}
            infoTrue={infoTrue}
            tagsChange={this.tagsChange}
            categoryChange={this.categoryChange}
            checkboxChange={this.checkboxChange}
            wlmConnection={wlmConnection}
            textChange={this.textChange}
          />
        </form>
      </main>
    );
  }
}

export default Form;
