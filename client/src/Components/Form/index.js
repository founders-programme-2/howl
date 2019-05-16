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
    selectedDate: new Date('January 1960'),
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
    this.setState({ tags: event.target.value }, () => {
      console.log(this.state.tags);
    });
  };

  categoryChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log(this.state[event.target.name]);
    });
  };

  checkboxChange = name => event => {
    this.setState({ [name]: event.target.checked }, () => {
      console.log(this.state[name]);
    });
  };

  textChange = name => event => {
    this.setState({ [name]: event.target.value }, () => {
      console.log(this.state[name]);
    });
  };

  handleDateChange = date => {
    const options = {
      year: 'numeric',
      month: 'long',
    };
    const dateModified = date.toLocaleDateString('en-US', options);
    this.setState({ selectedDate: dateModified }, () => {
      console.log(this.state.selectedDate);
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
        <ContactInfo
          name={name}
          email={email}
          phone={phone}
          textChange={this.textChange}
        />
        <form>
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
