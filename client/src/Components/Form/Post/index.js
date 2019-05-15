import React from 'react';
import Attach from './attach.png';
import { TextField, withStyles } from '../../muIndex';
import { AttachImg, Input, Form, Label } from './Post.style';
import styles from './muiStyles';

const Post = ({ classes }) => {
    return (
        <Form>
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
        </Form>
    );
};

export default withStyles(styles)(Post);