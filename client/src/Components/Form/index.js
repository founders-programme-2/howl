import React, { Component } from 'react';
import ContactInfo from './ContactInfo';
import Details from './Details';

class Form extends Component {
  state = {
    radio: '',
  };

  radioChange = event => {
    this.setState({ radio: event.target.value });
  };

  render() {
    const { radio } = this.state;
    return (
      <main>
        <ContactInfo />
        <Details radio={radio} radioChange={this.radioChange} />
      </main>
    );
  }
}

export default Form;
