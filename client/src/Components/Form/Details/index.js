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
import styles from './muiStyles';

const Details = ({
  classes,
  radio,
  radioChange,
  location,
  textChange,
  selectedDate,
  handleDateChange,
}) => {
  return (
    <Fragment>
      <h2>Your Contribution</h2>
      <p>
        Collecting personal stories, pictures and artifacts from real women is
        hugely important to us at HOWL. We value everyone&#39;s input and thank
        you in advance for sharing with us. We will now go through and ask you a
        series of questions about the story or image that you&#39;d like to
        contribute. Don&#39;t worry if you can&#39;t remember something exactly.
        Answer to the best of your ability and put any comments in the
        &#39;Additional comments&#39; section at the end of the form.
      </p>
      <p>Where did this event occur?</p>
      <TextField
        id="location"
        label="Location"
        name="location"
        value={location}
        placeholder="Where did this happen?"
        className={classes.textField}
        margin="normal"
        onChange={textChange('location')}
      />
      <p>Approximately when did this event occur?</p>
      <DateFun
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
      <p>What kind of contribution would you like to make?</p>
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
