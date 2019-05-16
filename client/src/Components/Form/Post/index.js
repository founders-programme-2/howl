import React, { Fragment } from 'react';
import Attach from './attach.png';
import { TextField, withStyles } from '../../muIndex';
import { AttachImg, Input, Form, Label } from './Post.style';
import styles from './muiStyles';

const Post = ({ classes, title, details, imageCap, textChange, radio }) => {
  return (
    <Form>
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
          <Label htmlFor="inputImg">
            <Input
              id="inputImg"
              label="upload file"
              type="file"
              accept="image/*"
              hidden
            />
            <AttachImg src={Attach} alt="attach" />
          </Label>
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
          <Label htmlFor="inputImg">
            <Input
              id="inputImg"
              label="upload file"
              type="file"
              accept="image/*"
              hidden
            />
            <AttachImg src={Attach} alt="attach" />
          </Label>
        </Fragment>
      ) : null}
    </Form>
  );
};

export default withStyles(styles)(Post);
