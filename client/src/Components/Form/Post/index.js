import React, { Fragment } from 'react';
import Attach from './attach.png';
import {
  TextField,
  withStyles,
  FormControlLabel,
  Checkbox,
  FormControl,
} from '../../muIndex';
import { AttachImg, Message } from './Post.style';
import styles from './muiStyles';
import Loader from './Loader';

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
  message,
  imgLink,
  uploadFlag,
  imageFlag,
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
      {(radio === 'imagePost' || radio === 'both') && imageFlag ? (
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
      {(radio === 'imagePost' || radio === 'both') && imgLink ? (
        <Message>{message}</Message>
      ) : null}
      {(radio === 'imagePost' || radio === 'both') && uploadFlag ? (
        <Fragment>
          <Loader uploadFlag={uploadFlag} />
          <Message>Uploading...</Message>
        </Fragment>
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
