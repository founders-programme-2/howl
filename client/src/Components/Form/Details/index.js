import React, { Fragment } from 'react';
import DateFun from './DatePicker';

import {
  withStyles,
  TextField,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  RadioGroup,
} from '../../muIndex';
import { styles } from './muiStyles';

const Details = ({ classes, radio, radioChange }) => {
  return (
    <Fragment>
      <h2>Your Contribution</h2>
      <p>
        Collecting personal stories, pictures and artifcats from real women is
        hugely important to us at HOWL. We value everyone’s input and thank you
        in advance for sharing with us.
      </p>
      <TextField
        id="location"
        label="Location"
        placeholder="Where did this happen?"
        className={classes.textField}
        margin="normal"
      />
      <DateFun />
      <FormControl className={classes.formControl}>
        <FormLabel component="legend">I would like to share:</FormLabel>

        <RadioGroup
          name="storyType"
          className={classes.group}
          value={radio}
          onChange={radioChange}
        >
          <FormGroup row>
            <FormControlLabel
              value="textPost"
              control={<Radio />}
              label="Text Post"
            />
            <FormControlLabel
              value="imagePost"
              control={<Radio />}
              label="Image Post"
            />
            <FormControlLabel value="both" control={<Radio />} label="Both" />
          </FormGroup>
        </RadioGroup>
      </FormControl>
    </Fragment>
  );
};

export default withStyles(styles)(Details);
