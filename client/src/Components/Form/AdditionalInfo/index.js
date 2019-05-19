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
  textChange,
  wlmConnection,
}) => {
  return (
    <Fragment>
      <p>
        Tell us about yourself. What is your connection to the Women&#39;s
        Liberation Movement? Please do not share any private information here
        such as your phone number or address.
      </p>
      <TextField
        id="standard-multiline-static"
        label="Connection to Women’s Liberation Movement"
        name="wlmConnection"
        value={wlmConnection}
        multiline
        rows="4"
        placeholder="examples: activist, daughter of an activist, et cetera)"
        className={classes.textField}
        margin="normal"
        onChange={textChange('wlmConnection')}
      />
      <p>
        Please select one major category under which your contribution falls
        under. We understand that there might be more than one fits, please
        select one and you will be given a chance to select some subcategories
        later.
      </p>
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
          {arrCategory.sort().map(cat => (
            <MenuItem value={cat} key={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <p>
        Please select one or more &#39;tags&#39; for your contribution. A tag
        can be thought of as a related theme or subcategory.{' '}
      </p>
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
          {arrTags.sort().map(tag => (
            <MenuItem key={tag} value={tag}>
              <Checkbox checked={tags.indexOf(tag) > -1} />
              <ListItemText primary={tag} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={infoTrue}
              onChange={checkboxChange('infoTrue')}
              value="infoTrue"
            />
          }
          label="I certify that this information is true to the best of my knowledge and contains no personal attacks."
        />
      </FormControl>
      <p>Anything else you would like to tell us?</p>
      <TextField
        id="notes"
        label="Additional comments?"
        name="notes"
        value={wlmConnection}
        multiline
        rows="4"
        placeholder="Talk to us!"
        className={classes.textField}
        margin="normal"
        onChange={textChange('notes')}
      />
    </Fragment>
  );
};

export default withStyles(styles)(AdditionalInfo);
