import React, { Fragment } from 'react';
import Attach from './attach.png';
import {
  TextField,
  withStyles,
  FormControlLabel,
  Checkbox,
  FormControl,
} from '../../muIndex';
import AttachImg from './Post.style';
import styles from './muiStyles';

const Post = ({ classes, imgPermission, checkboxChange }) => {
  return (
    <Fragment>
      <FormControl>
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
          multiline
          rows="4"
          placeholder="Enter your story's details"
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
        <label htmlFor="inputImg">
          <input
            id="inputImg"
            name="image"
            label="upload file"
            type="file"
            accept="image/*"
            hidden
          />
          <AttachImg src={Attach} alt="attach" />
        </label>
        <FormControlLabel
          control={
            <Checkbox
              checked={imgPermission}
              onChange={checkboxChange}
              value="imgPermission"
            />
          }
          label="I have the rights or permissions to upload this image publically."
        />
      </FormControl>
    </Fragment>
  );
};

export default withStyles(styles)(Post);
