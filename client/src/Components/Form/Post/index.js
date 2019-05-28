import React, { Fragment } from 'react';
import Attach from './attach.png';
import {
  TextField,
  withStyles,
  FormControlLabel,
  Checkbox,
  FormControl,
} from '../../muIndex';
import { Message, ErrMsg, CntrDiv } from './Post.style';
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
  imageCapErr,
  imgLinkErr,
  detailsErr,
  imgPermissionErr,
  titleErr,
}) => {
  const imageCaptionComponent =
    radio === 'imagePost' || radio === 'both' ? (
      <Fragment>
        {imageCapErr ? (
          <ErrMsg>{imageCapErr}</ErrMsg>
        ) : (
          <p>Please enter a caption for this image (under 100 words):</p>
        )}
        <TextField
          id="imageCap"
          label="Image Caption (required)"
          name="imageCap"
          value={imageCap}
          placeholder="Enter image caption..."
          multiline
          rows="2"
          className={classes.textField}
          margin="normal"
          onChange={textChange('imageCap')}
          InputProps={{
            disableUnderline: true,
          }}
          InputLabelProps={{
            className: classes.label,
          }}
        />
      </Fragment>
    ) : null;

  const imageUploadInput =
    (radio === 'imagePost' || radio === 'both') && imageFlag ? (
      <Fragment>
        {imgLinkErr ? (
          <ErrMsg>{imgLinkErr}</ErrMsg>
        ) : (
          <p>Please upload your image:</p>
        )}

        <label htmlFor="inputImg">
          <input
            id="inputImg"
            label="upload file"
            type="file"
            onChange={handleUploadFile}
            accept="image/*"
            hidden
          />
          <img src={Attach} alt="attach" className={classes.uploadIcon} />
        </label>
      </Fragment>
    ) : null;

  const uploadStatusMsg =
    (radio === 'imagePost' || radio === 'both') && imgLink ? (
      <Message>{message}</Message>
    ) : null;

  const LoaderWithMsg =
    (radio === 'imagePost' || radio === 'both') && uploadFlag ? (
      <Fragment>
        <Loader uploadFlag={uploadFlag} />
        <Message>Uploading...</Message>
      </Fragment>
    ) : null;

  const postDetails =
    radio === 'textPost' || radio === 'both' ? (
      <Fragment>
        {detailsErr ? (
          <ErrMsg>{detailsErr}</ErrMsg>
        ) : (
          <p>
            Please enter your story relating to the Women&#39;s Liberation
            Movement below. We encourage detailed memories but request you have
            a story that is longer than 1000 words, you email directly directly
            to us at fakeemail@howl.co.uk
          </p>
        )}

        <TextField
          id="details"
          label="Details (required)"
          name="details"
          value={details}
          placeholder="Enter your story's details"
          multiline
          fullWidth
          rows="4"
          className={`${classes.textField} ${classes.textFieldDetails}`}
          margin="normal"
          onChange={textChange('details')}
          InputProps={{
            disableUnderline: true,
          }}
          InputLabelProps={{
            className: classes.label,
          }}
        />
      </Fragment>
    ) : null;

  const imgPermissionCheckbox =
    radio === 'imagePost' || radio === 'both' ? (
      <Fragment>
        {imgPermissionErr ? <ErrMsg> {imgPermissionErr}</ErrMsg> : null}

        <FormControlLabel
          className={classes.formControlLabel}
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
    ) : null;
  return (
    <FormControl className={classes.formControl}>
      <CntrDiv>
        {titleErr ? (
          <ErrMsg>{titleErr}</ErrMsg>
        ) : (
          <p>
            What would you like to title your contribution to the archive (under
            10 words)?
          </p>
        )}

        <TextField
          id="title"
          label="Title (required)"
          name="title"
          value={title}
          placeholder="Enter your Title..."
          className={classes.textField}
          margin="normal"
          onChange={textChange('title')}
          InputProps={{
            disableUnderline: true,
          }}
          InputLabelProps={{
            className: classes.label,
          }}
        />
        {imageCaptionComponent}
        {imageUploadInput}
        {uploadStatusMsg}
        {LoaderWithMsg}
        {postDetails}
        {imgPermissionCheckbox}
      </CntrDiv>
    </FormControl>
  );
};

export default withStyles(styles)(Post);
