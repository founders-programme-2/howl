import React, { Fragment } from 'react';
import {
  withStyles,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  ListItemText,
  Select,
  Checkbox,
  Chip,
  FormControlLabel,
  TextField,
} from '../../muIndex';
import { styles, MenuProps } from './muiStyles';
import { arrTags, arrCategory } from '../data.json';

const AdditionalInfo = ({
  classes,
  tags,
  tagsChange,
  category,
  categoryChange,
  infoTrue,
  checkboxChange,
}) => {
  return (
    <Fragment>
      <TextField
        id="standard-multiline-static"
        label="Connection to Women’s Liberation Movement"
        multiline
        rows="4"
        placeholder="examples: activist, daughter of an activist, et cetera)"
        className={classes.textField}
        margin="normal"
      />
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="selectMultipleCheckbox">Tags</InputLabel>
        <Select
          aria-label="tags"
          multiple
          value={tags}
          onChange={tagsChange}
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
          {arrTags.map(tag => (
            <MenuItem key={tag} value={tag}>
              <Checkbox checked={tags.indexOf(tag) > -1} />
              <ListItemText primary={tag} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="category">Category</InputLabel>
        <Select
          aria-label="category"
          value={category}
          onChange={categoryChange}
          inputProps={{
            name: 'category',
            id: 'category',
          }}
        >
          {arrCategory.map(cat => (
            <MenuItem value={cat}>{cat}</MenuItem>
          ))}
        </Select>
        <FormControlLabel
          control={
            <Checkbox
              checked={infoTrue}
              onChange={checkboxChange}
              value="infoTrue"
            />
          }
          label="I certify that this information is true to the best of my knowledge and contains no personal attacks."
        />
      </FormControl>
    </Fragment>
  );
};

export default withStyles(styles)(AdditionalInfo);
