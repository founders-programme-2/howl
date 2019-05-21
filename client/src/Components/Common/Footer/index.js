import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
  MuiThemeProvider,
} from '../../muIndex';
import {
  FooterDiv,
  TitleDiv,
  StyledTitle,
  FilterDiv,
  SearchDiv,
  BoldText,
  ButtonsContainer,
} from './Footer.style';
import { tags as tagsArr, categories, locations } from '../../data';
import { styles, BootstrapInput, MenuProps, footerTheme } from './mui.style';

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
      category: null,
      year: null,
      location: null,
      search: null,
    };
  }

  updateStateValues = (name, value) => {
    this.setState({ [name]: value });
  };

  howToSearchHandler = () => {
    const { history } = this.props;
    if(history) history.push('/help');
  };

  render() {
    const { classes } = this.props;
    const { tags, category, year, location, search, } = this.state;
    return (
      <MuiThemeProvider theme={footerTheme}>
        <FooterDiv>
          <TitleDiv>
            <StyledTitle>Search Archive</StyledTitle>
            <Button className={classes.howToSearchButton} onClick={this.howToSearchHandler} >How to search</Button>
          </TitleDiv>

          <FilterDiv>
            <FormControl className={classes.formControl}>
              <Select
                className={classes.select}
                value={category || 'Category'}
                onChange={event => {
                  this.updateStateValues('category', event.target.value);
                }}
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
                value={location || 'Location'}
                onChange={event => {
                  this.updateStateValues('location', event.target.value);
                }}
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
                value={year || 'Year'}
                onChange={event => {
                  this.updateStateValues('year', event.target.value);
                }}
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
                multiple
                disableUnderline
                value={tags}
                onChange={event => {
                  this.updateStateValues('tags', event.target.value);
                }}
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
                label="Search..."
                value={search || ''}
                onChange={(event) => {this.updateStateValues('search', event.target.value)}}
                InputLabelProps={{
                  className: classes.searchTextFieldLabel,
                }}
                type="search"
                className={classes.searchTextField}
                variant="filled"
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </FormControl>
            <ButtonsContainer>
              <Button className={classes.searchButton}>Search</Button>
              <Button className={classes.resetButton}>Reset</Button>
            </ButtonsContainer>
          </SearchDiv>
        </FooterDiv>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(withStyles(styles)(Footer));
