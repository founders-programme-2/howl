import React, { Component } from 'react';
import ContactInfo from './ContactInfo';
import Details from './Details';
import Post from './Post';
import AdditionalInfo from './AdditionalInfo';

class Form extends Component {
  state = {
    radio: '',
    tags: [],
    category: '',
    infoTrue: false,
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

  checkboxChange = event => {
    this.setState({ [event.target.value]: event.target.checked });
  };

  render() {
    const { radio, tags, category, infoTrue } = this.state;
    return (
      <main>
        <ContactInfo />
        <Details radio={radio} radioChange={this.radioChange} />
        <Post />
        <AdditionalInfo
          tags={tags}
          category={category}
          infoTrue={infoTrue}
          tagsChange={this.tagsChange}
          categoryChange={this.categoryChange}
          checkboxChange={this.checkboxChange}
        />
      </main>
    );
  }
}

export default Form;
