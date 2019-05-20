import React, { Fragment } from 'react';
import { withStyles, TextField } from '../../muIndex';
import styles from './muiStyles';

const ContactInfo = ({ classes, name, email, phone, textChange }) => {
  return (
    <Fragment>
      <h2>Contact Info</h2>
      <p>
        Our team of moderators will need to approve your story before it is
        published publicly. If we have any questions or concerns about your
        content, we will get in touch using your contact details. We will not
        use your details to send you spam mail.
      </p>

      <TextField
        id="name"
        name="name"
        value={name}
        label="Name"
        placeholder="Enter your name..."
        className={classes.textField}
        margin="normal"
        onChange={textChange('name')}
        InputProps={{
          disableUnderline: true,
        }}
        InputLabelProps={{
          className: classes.label,
        }}
      />
      <TextField
        id="email"
        name="email"
        value={email}
        label="Email"
        placeholder="Enter your email..."
        className={classes.textField}
        margin="normal"
        onChange={textChange('email')}
        InputProps={{
          disableUnderline: true,
          classes: {
            input: classes.input,
          },
        }}
        InputLabelProps={{
          className: classes.label,
        }}
      />
      <TextField
        id="phoneNum"
        name="phone"
        value={phone}
        label="Phone Number"
        placeholder="Enter your phone number. e.g:(+44 20 7946 0009)"
        className={classes.textField}
        margin="normal"
        onChange={textChange('phone')}
        InputProps={{
          disableUnderline: true,
          classes: {
            input: classes.input,
          },
        }}
        InputLabelProps={{
          className: classes.label,
        }}
      />
    </Fragment>
  );
};

export default withStyles(styles)(ContactInfo);
