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

const Post = ({
  classes,
  title,
  details,
  imageCap,
  textChange,
  radio,
  imgPermission,
  checkboxChange,
  handleUploadFile,
}) => {
  return (
    <FormControl>
      <p>
        What would you like to title your contribution to the archive (under 10
        words)?
      </p>
      <TextField
        id="title"
        label="Title"
        name="title"
        value={title}
        placeholder="Enter your Title..."
        className={classes.textField}
        margin="normal"
        onChange={textChange('title')}
      />
      {radio === 'imagePost' || radio === 'both' ? (
        <Fragment>
          <p>Please enter a caption for this image (under 100 words):</p>
          <TextField
            id="imageCap"
            label="Image Caption"
            name="imageCap"
            value={imageCap}
            placeholder="Enter image caption..."
            multiline
            rows="2"
            className={classes.textField}
            margin="normal"
            onChange={textChange('imageCap')}
          />
        </Fragment>
      ) : null}
      {radio === 'imagePost' || radio === 'both' ? (
        <Fragment>
          <p>Please upload your image:</p>
          <label htmlFor="inputImg">
            <input
              id="inputImg"
              label="upload file"
              type="file"
              accept="image/*"
              hidden
            />
            <AttachImg src={Attach} alt="attach" />
          </label>
        </Fragment>
      ) : null}
      {radio === 'textPost' || radio === 'both' ? (
        <Fragment>
          <p>
            Please enter your story relating to the Women&#39;s Liberation
            Movement below. We encourage detailed memories but request you have
            you have a story that is longer than 1000 words, you email directly
            directly to us at fakeemail@howl.co.uk
          </p>
          <TextField
            id="details"
            label="Details"
            name="details"
            value={details}
            placeholder="Enter your story's details"
            multiline
            rows="4"
            className={classes.textField}
            margin="normal"
            onChange={textChange('details')}
          />
        </Fragment>
      ) : null}
      {radio === 'imagePost' || radio === 'both' ? (
        <FormControlLabel
          control={
            <Checkbox
              checked={imgPermission}
              onChange={checkboxChange('imgPermission')}
              value="imgPermission"
            />
          }
          label="I have the rights or permissions to upload this image publicly."
        />
      ) : null}
    </FormControl>
  );
};

export default withStyles(styles)(Post);
