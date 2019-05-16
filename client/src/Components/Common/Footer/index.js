import React from 'react';
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  TextField,
  withStyles,
} from '../../muIndex';
import {
  FooterDiv,
  TitleDiv,
  StyledTitle,
  FilterDiv,
  SearchDiv,
} from './Footer.style';
import { tags, locations } from './filtersData';
import { styles, BootstrapInput } from './mui.style';

const renderSelectItems = items => {
  return items.map(item => (
    <MenuItem key={item} value={item}>
      {item}
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

const Footer = ({ classes }) => {
  return (
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
              <em>Category</em>
            </MenuItem>
            {renderSelectItems(['Category-1', 'Category-2', 'Category-3'])}
          </Select>
          <Select
            className={classes.select}
            value="Tags"
            input={
              <BootstrapInput
                name="tags"
                id="tags-customized-select"
                aria-label="Tags"
              />
            }
          >
            <MenuItem value="Tags">
              <em>Tags</em>
            </MenuItem>
            {renderSelectItems(tags)}
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
              <em>Location</em>
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
              <em>Year</em>
            </MenuItem>
            {renderSelectItems(yearsGenerator())}
          </Select>
        </FormControl>
      </FilterDiv>

      <SearchDiv>
        <FormControl className={classes.searchFormControl}>
          <TextField
            id="outlined-search"
            label="Search ..."
            InputLabelProps={{
              className: classes.searchTextFieldLebel,
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
  );
};

export default withStyles(styles)(Footer);
