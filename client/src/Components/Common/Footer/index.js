import React, { Component, Fragment } from 'react';
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  TextField,
  withStyles,
  Input,
  InputLabel,
  Chip,
  Checkbox,
  ListItemText,
} from '../../muIndex';
import {
  FooterDiv,
  TitleDiv,
  StyledTitle,
  FilterDiv,
  SearchDiv,
  BoldText,
} from './Footer.style';
import { tags as tagsArr, categories, locations } from '../../data';
import { styles, BootstrapInput, MenuProps } from './mui.style';

const renderSelectItems = items => {
  return items.map(item => (
    <MenuItem key={item} value={item}>
      {item}
    </MenuItem>
  ));
};

const renderMultiSelectItems = (items, selectedItems) => {
  return items.map(item => (
    <MenuItem key={item} value={item}>
      <Checkbox checked={selectedItems.indexOf(item) > -1} />
      <ListItemText primary={item} />
    </MenuItem>
  ));
};

const yearsGenerator = () => {
  const years = [];
  for (let i = 1960; i <= 1990; i += 1) {
    years.push(i);
  }
  return years;
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
  }

  render() {
    const { classes } = this.props;
    const { tags } = this.state;
    return (
      <Fragment>
        <FooterDiv>
          <TitleDiv>
            <StyledTitle>Search Archive</StyledTitle>
            <Button className={classes.howToSearchButton}>HOW TO SEARCH</Button>
          </TitleDiv>

          <FilterDiv>
            <FormControl className={classes.formControl}>
              <Select
                className={classes.select}
                value="Category"
                input={
                  <BootstrapInput
                    name="category"
                    id="category-customized-select"
                    aria-label="Category"
                  />
                }
              >
                <MenuItem value="Category">
                  <BoldText>Category</BoldText>
                </MenuItem>
                {renderSelectItems(categories)}
              </Select>

              <Select
                className={classes.select}
                value="Location"
                input={
                  <BootstrapInput
                    name="location"
                    id="location-customized-select"
                    aria-label="Location"
                  />
                }
              >
                <MenuItem value="Location">
                  <BoldText>Location</BoldText>
                </MenuItem>
                {renderSelectItems(locations)}
              </Select>
              <Select
                className={classes.select}
                value="Year"
                input={
                  <BootstrapInput
                    name="year"
                    id="year-customized-select"
                    aria-label="Year"
                  />
                }
              >
                <MenuItem value="Year">
                  <BoldText>Year</BoldText>
                </MenuItem>
                {renderSelectItems(yearsGenerator())}
              </Select>
            </FormControl>
            <FormControl
              variant="filled"
              className={classes.multipleSelectFormControl}
            >
              <InputLabel
                htmlFor="selectMultipleCheckbox"
                className={classes.MultipleSelectInputLabel}
              >
                Tags
              </InputLabel>
              <Select
                className={classes.tagsSelect}
                multiple
                value={tags}
                input={<Input id="selectMultipleCheckbox" aria-label="Tags" />}
                renderValue={selected => (
                  <div className={classes.chips}>
                    {selected.map(value => (
                      <Chip
                        key={value}
                        label={value}
                        className={classes.chip}
                      />
                    ))}
                  </div>
                )}
                MenuProps={MenuProps}
              >
                {renderMultiSelectItems(tagsArr, tags)}
              </Select>
            </FormControl>
          </FilterDiv>

          <SearchDiv>
            <FormControl className={classes.searchFormControl}>
              <TextField
                id="outlined-search"
                label="Search ..."
                InputLabelProps={{
                  className: classes.searchTextFieldLabel,
                }}
                type="search"
                className={classes.searchTextField}
                variant="filled"
              />
              <Button className={classes.searchButton}>Search</Button>
              <Button className={classes.resetButton}>Reset</Button>
            </FormControl>
          </SearchDiv>
        </FooterDiv>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Footer);
