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
    imgPermission: false,
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
    const { radio, tags, category, infoTrue, imgPermission } = this.state;
    return (
      <main>
        <ContactInfo />
        <form>
          <Details radio={radio} radioChange={this.radioChange} />
          <Post
            imgPermission={imgPermission}
            checkboxChange={this.checkboxChange}
          />
          <AdditionalInfo
            tags={tags}
            category={category}
            infoTrue={infoTrue}
            tagsChange={this.tagsChange}
            categoryChange={this.categoryChange}
            checkboxChange={this.checkboxChange}
          />
        </form>
      </main>
    );
  }
}

export default Form;
