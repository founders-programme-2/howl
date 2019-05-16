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
}) => {
  return (
    <FormControl>
      {radio === 'textPost' ? (
        <Fragment>
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
          <TextField
            id="details"
            label="Details"
            name="details"
            value={details}
            placeholder="Enter your story's details"
            multiline
            className={classes.textField}
            margin="normal"
            onChange={textChange('details')}
          />
        </Fragment>
      ) : null}
      {radio === 'imagePost' ? (
        <Fragment>
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
          <TextField
            id="imageCap"
            label="Image Caption"
            name="imageCap"
            value={imageCap}
            placeholder="Enter image caption..."
            className={classes.textField}
            margin="normal"
            onChange={textChange('imageCap')}
          />
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
          <FormControlLabel
            control={
              <Checkbox
                checked={imgPermission}
                onChange={checkboxChange('imgPermission')}
                value="imgPermission"
              />
            }
            label="I have the rights or permissions to upload this image publically."
          />
        </Fragment>
      ) : null}
      {radio === 'both' ? (
        <Fragment>
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
          <TextField
            id="details"
            label="Details"
            name="details"
            value={details}
            placeholder="Enter your story's details"
            multiline
            className={classes.textField}
            margin="normal"
            onChange={textChange('details')}
          />
          <TextField
            id="imageCap"
            label="Image Caption"
            name="imageCap"
            value={imageCap}
            placeholder="Enter image caption..."
            className={classes.textField}
            margin="normal"
            onChange={textChange('imageCap')}
          />
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
        </Fragment>
      ) : null}
    </FormControl>
  );
};

export default withStyles(styles)(Post);
