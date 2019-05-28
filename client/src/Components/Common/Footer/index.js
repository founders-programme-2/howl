import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import navigationUrls from '../../../constants/navigationUrls';
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

const { HELP_URL } = navigationUrls;

class Footer extends Component {
  state = {
    tags: [],
    category: 'Groups',
    year: '1960',
    location: 'North East',
    search: '',
    result: [],
  };

  updateResult = ({ tags, category, year, location, search }) => {
    const submittedData = { tags, category, year, location, search };
    console.log('Submitting: ', submittedData);
    axios.post('/filter', submittedData).then(res => {
      console.log(res);
      // const { history } = this.props;
      // history.push('/results');
    });
  };

  updateStateValue = (name, value) => {
    this.setState({ [name]: value });
  };

  updateSearchValue = (name, value) => {
    value.trim().toLowerCase();
    this.setState({ [name]: value });
  };

  howToSearchHandler = () => {
    const { history } = this.props;
    if (history) history.push(HELP_URL);
  };

  resetFields = () => {
    this.setState(
      {
        tags: [],
        category: null,
        year: null,
        location: null,
        search: null,
      },
      () => {
        this.updateResult(this.state);
      }
    );
  };

  render() {
    const { classes } = this.props;
    const { tags, category, year, location, search } = this.state;
    return (
      <MuiThemeProvider theme={footerTheme}>
        <FooterDiv>
          <TitleDiv>
            <StyledTitle>Search Archive</StyledTitle>
            <Button
              className={classes.howToSearchButton}
              onClick={this.howToSearchHandler}
            >
              How to search
            </Button>
          </TitleDiv>

          <FilterDiv>
            <FormControl className={classes.formControl}>
              <Select
                className={classes.select}
                value={category || 'Category'}
                aria-label="category"
                onChange={event => {
                  this.updateStateValue('category', event.target.value);
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
                aria-label="location"
                onChange={event => {
                  this.updateStateValue('location', event.target.value);
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
                aria-label="year"
                onChange={event => {
                  this.updateStateValue('year', event.target.value);
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
                aria-label="tags"
                onChange={event => {
                  this.updateStateValue('tags', event.target.value);
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
                onChange={event => {
                  this.updateSearchValue('search', event.target.value);
                }}
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
              <Button
                className={classes.searchButton}
                onClick={() => {
                  this.updateResult(this.state);
                }}
              >
                Search
              </Button>
              <Button
                className={classes.resetButton}
                onClick={this.resetFields}
              >
                Reset
              </Button>
            </ButtonsContainer>
          </SearchDiv>
        </FooterDiv>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(withStyles(styles)(Footer));
