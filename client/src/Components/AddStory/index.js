import React, { Fragment, Component } from 'react';
import {
  PropTypes,
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
} from '../muindex';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '200px',
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '97%',
    padding: 5,
    maxHeight: 100,
    overflowY: 'auto',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
});

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
  };

  handleChange = event => {
    this.setState({ name: event.target.value }, () => {
      console.log(this.state.name);
    });
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
              value="textPost"
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
          id="imageCap"
          label="Image Caption"
          placeholder="Enter image caption..."
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
        <div className={classes.root}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="select-multiple-checkbox">Tag</InputLabel>
            <Select
              multiple
              value={this.state.name}
              onChange={this.handleChange}
              input={<Input id="select-multiple-checkbox" />}
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
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(AddStory);
