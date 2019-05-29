import React, { Fragment } from 'react';
import { months, locations } from '../../data.json';
import ErrMsg from './Details.style';

import {
  withStyles,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  RadioGroup,
  InputLabel,
  Select,
  MenuItem,
} from '../../muIndex';
import styles from './muiStyles';

const Details = ({
  classes,
  radio,
  radioChange,
  location,
  dropdownChange,
  locationErr,
  yearErr,
  year,
  month,
}) => {
  const locationQuestion = locationErr ? (
    <ErrMsg>{locationErr}</ErrMsg>
  ) : (
    <p>Where did this event occur?</p>
  );

  const DateQuestion = yearErr ? (
    <ErrMsg>{yearErr}</ErrMsg>
  ) : (
    <p>
      Approximately when did this event occur? If the event spans multiple
      years, select the year when it started.
    </p>
  );

  const yearsGenerator = () => {
    const years = [];
    for (let i = 1960; i <= 1990; i += 1) {
      years.push(i);
    }
    return years;
  };

  const renderSelectItems = items => {
    return items.sort().map(item => (
      <MenuItem key={item} value={item}>
        {item}
      </MenuItem>
    ));
  };

  return (
    <Fragment>
      <h2>Your Contribution</h2>
      <p>
        Collecting personal stories, pictures and artifacts from real women is
        hugely important to us at HOWL. We value everyone&#39;s input and thank
        you in advance for sharing with us. We will now go through and ask you a
        series of questions about the story or image that you&#39;d like to
        contribute. Don&#39;t worry if you can&#39;t remember something
        perfectly. Answer to the best of your ability and put any comments in
        &#39;Additional comments&#39; section at the end of the form.
      </p>
      {locationQuestion}
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="location" className={classes.label}>
          Location (required)
        </InputLabel>
        <Select
          inputProps={{
            name: 'location',
            id: 'location',
          }}
          aria-label="location"
          value={location}
          onChange={dropdownChange}
          disableUnderline
          className={classes.selectDropdown}
        >
          {renderSelectItems(locations)}
        </Select>
      </FormControl>
      {DateQuestion}
      <FormControl className={classes.formControlDate}>
        <InputLabel htmlFor="month" className={classes.label}>
          Month (optional)
        </InputLabel>
        <Select
          inputProps={{
            name: 'month',
            id: 'month',
          }}
          aria-label="month"
          value={month}
          onChange={dropdownChange}
          disableUnderline
          className={classes.selectDropdown}
        >
          {months.map(monthEle => {
            return (
              <MenuItem key={monthEle} value={monthEle}>
                {monthEle}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl
        className={`${classes.formControlDate} ${classes.formControlYear}`}
      >
        <InputLabel htmlFor="year" className={classes.label}>
          Year (required)
        </InputLabel>
        <Select
          inputProps={{
            name: 'year',
            id: 'year',
          }}
          aria-label="year"
          value={year}
          onChange={dropdownChange}
          disableUnderline
          className={classes.selectDropdown}
        >
          {renderSelectItems(yearsGenerator())}
        </Select>
      </FormControl>
      <p>What kind of contribution would you like to make?</p>
      <FormControl className={classes.formControlRadio}>
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
