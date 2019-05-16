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

const styles = theme => ({
  howToSearchButton: {
    backgroundColor: '#F6C25B',
    width: '50%',
    margin: `5% 25% 5% 25%`,
    fontFamily: ['Raleway', 'sans-serif'].join(','),
    fontWeight: 'bold',
    borderRadius: '20px',
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: '#F6C25B',
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
  searchTextField: {
    backgroundColor: theme.palette.common.white,
    borderRadius: '50px',
    width: '80%',
    height: '20%',
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
  searchButton: {
    width: '45%',
    backgroundColor: '#F6C25B',
    borderRadius: '20px',
    fontWeight: 'bold',
    marginTop: '2%',
    marginRight: '2.5%',
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: '#F6C25B',
    },
  },
  resetButton: {
    width: '30%',
    backgroundColor: '#C02700',
    color: theme.palette.common.black,
    borderRadius: '20px',
    fontWeight: 'bold',
    marginTop: '2%',
    marginLeft: '2.5%',
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: '#C02700',
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

const Footer = ({ classes }) => {
  return (
    <FooterDiv>
      <TitleDiv>
        <StyledTitle>SEARCH ARCHIVE</StyledTitle>
        <Button className={classes.howToSearchButton}>HOW TO SEARCH</Button>
      </TitleDiv>

      <FilterDiv>
        <FormControl className={classes.formControl}>
          <Select
            className={classes.select}
            value="None"
            input={
              <BootstrapInput name="age" id="category-customized-select" />
            }
          >
            <MenuItem value="None">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Select
            className={classes.select}
            value="None"
            input={
              <BootstrapInput name="age" id="category-customized-select" />
            }
          >
            <MenuItem value="None">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Select
            className={classes.select}
            value="None"
            input={
              <BootstrapInput name="age" id="category-customized-select" />
            }
          >
            <MenuItem value="None">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Select
            className={classes.select}
            value="None"
            input={
              <BootstrapInput name="age" id="category-customized-select" />
            }
          >
            <MenuItem value="None">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </FilterDiv>

      <SearchDiv>
        <FormControl className={classes.searchFormControl}>
          <TextField
            id="outlined-search"
            label="Search ..."
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
