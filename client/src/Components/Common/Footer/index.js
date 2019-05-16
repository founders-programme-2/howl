import React from 'react';
import {
  Button,
  Select,
  MenuItem,
  InputBase,
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
import {tags, locations} from './filtersData';

const styles = theme => ({
  howToSearchButton: {
    backgroundColor: 'var(--main-btn-color)',
    width: '50%',
    margin: `5% 25% 5% 25%`,
    fontFamily: ['Raleway', 'sans-serif'].join(','),
    fontWeight: 'bold',
    borderRadius: '20px',
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: 'var(--main-btn-color)',
    },
  },
  formControl: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '2.5%',
    marginBottom: '1%',
    height: '80%',
  },
  select: {
    width: '40%',
    marginTop: '2.5%',
    marginBottom: '2.5%',
  },
  searchFormControl: {
    width: '100%',
    height: '60%',
    margin: '8% auto 5% auto',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  searchTextField: {
    backgroundColor: theme.palette.common.white,
    borderRadius: '50px',
    fontWeight: '700',
    width: '80%',
    height: '20%',
  },
  searchTextFieldLebel: {
    fontWeight: 'bold',
  },
  searchButton: {
    width: '45%',
    backgroundColor: 'var(--main-btn-color)',
    borderRadius: '20px',
    fontWeight: 'bold',
    marginTop: '2%',
    marginRight: '2.5%',
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: 'var(--main-btn-color)',
    },
  },
  resetButton: {
    width: '30%',
    backgroundColor: 'var(--highlight-color)',
    color: theme.palette.common.black,
    borderRadius: '20px',
    fontWeight: 'bold',
    marginTop: '2%',
    marginLeft: '2.5%',
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: 'var(--highlight-color)',
    },
  },
});

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '80%',
    padding: '5% 16% 5% 8%',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: ['Raleway', 'sans-serif'].join(','),
    fontWeight: '600',
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: theme.palette.background.paper,
      backgroundColor: theme.palette.background.paper,
    },
    svg: {
      width: '20%',
    },
  },
}))(InputBase);

const renderSelectItems = items => {
  return items.map(item => (
    <MenuItem value={item}>{item}</MenuItem>
  ));
};

const yearsGenerator = () => {
  const years = [];
  const currentYear = (new Date).getFullYear();
  for(let i = 1960; i <= currentYear;i++){
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
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
