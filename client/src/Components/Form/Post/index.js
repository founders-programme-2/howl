import React from 'react';
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
      ) : null}
      {radio === 'imagePost' || radio === 'both' ? (
        <label htmlFor="inputImg">
          <input
            id="inputImg"
            label="upload file"
            type="file"
            onChange={handleUploadFile}
            accept="image/*"
            hidden
          />
          <AttachImg src={Attach} alt="attach" />
        </label>
      ) : null}
      {radio === 'textPost' || radio === 'both' ? (
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
