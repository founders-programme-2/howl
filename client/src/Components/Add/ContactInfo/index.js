import React, { Fragment } from 'react';
import { AddHead, AddSub, Para, Form } from './ContactInfo.style';
import { withStyles, TextField } from '../../muIndex';
import styles from './muiStyles';

const ContactInfo = ({ classes }) => {
  return (
    <Fragment>
      <AddHead>Submit your story from the Women Liberation Movement</AddHead>
      <AddSub>Contact Info</AddSub>
      <Para>
        How might we get in touch with you if we have any questions about your
        input?
      </Para>
      <Form>
        <TextField
          id="name"
          label="Name"
          placeholder="Enter your name..."
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="email"
          label="Email"
          placeholder="Enter your email..."
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="phoneNum"
          label="Phone Number"
          placeholder="Enter your phone number..."
          className={classes.textField}
          helperText="e.g:(+44 20 7946 0009)"
          margin="normal"
        />
      </Form>
    </Fragment>
  );
};

export default withStyles(styles)(ContactInfo);
