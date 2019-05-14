/* eslint-disable react/forbid-prop-types */
import React, { Fragment, Component } from 'react';
import attach from './attach.png';
import styles from './muiStyles';
import {
  withStyles,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Input,
  InputLabel,
  MenuItem,
  ListItemText,
  Select,
  Checkbox,
  Chip,
  PropTypes,
} from '../muindex';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'sexual assault',
  'LGTBQ+',
  'domestic violence',
  'wage gap',
  'violence against women',
  'abortion',
  'sexual assault1',
  'LGTBQ+1',
  'domestic violence1',
  'wage gap1',
  'violence against women1',
  'abortion1',
  'sexual assault 2',
  'LGTBQ+2',
  'domestic violence2',
  'wage gap2',
  'violence against women2',
  'abortion2',
];

class AddStory extends Component {
  state = {
    name: [],
    category: '',
    radio: '',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  radioChange = event => {
    this.setState({ radio: event.target.value });
  };

  whenChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <h1>Submit your story from the Women Liberation Movement</h1>
        <h2>Contact Info</h2>
        <p>
          How might we get in touch with you if we have any questions about your
          input?
        </p>
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
          margin="normal"
        />
        <h2>Your Contribution</h2>
        <p>
          Collecting personal stories, pictures and artifcats from real women is
          hugely important to us at HOWL. We value everyone’s input and thank
          you in advance for sharing with us.
        </p>
        <div className={classes.root}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">I would like to share:</FormLabel>
            <RadioGroup
              name="storyType"
              className={classes.group}
              value={this.state.radio}
              onChange={this.radioChange}
            >
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
            </RadioGroup>
          </FormControl>
        </div>
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue=""
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="location"
          label="Location"
          placeholder="Where did this happen?"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="title"
          label="Title"
          placeholder="Enter your Title..."
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="details"
          label="Details"
          placeholder="Enter your story's details"
          multiline
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="imageCap"
          label="Image Caption"
          placeholder="Enter image caption..."
          className={classes.textField}
          margin="normal"
        />
        <input
          id="inputImg"
          label="upload file"
          type="file"
          accept="image/*"
          hidden
        />
        <label htmlFor="inputImg">
          <img src={attach} alt="attach" />
        </label>
        <div className={classes.root}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="selectMultipleCheckbox">Tag</InputLabel>
            <Select
              multiple
              value={this.state.name}
              onChange={this.handleChange}
              input={<Input id="selectMultipleCheckbox" />}
              renderValue={selected => (
                <div className={classes.chips}>
                  {selected.map(value => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
            >
              {names.map(name => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={this.state.name.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="category">Category</InputLabel>
            <Select
              value={this.state.category}
              onChange={this.whenChange}
              inputProps={{
                name: 'category',
                id: 'category',
              }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Fragment>
    );
  }
}

AddStory.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddStory);
