import React from 'react';
import {
  Button,
  Select,
  MenuItem,
  InputBase,
  FormControl,
  withStyles,
} from '@material-ui/core';
import { FooterDiv, TitleDiv, StyledTitle, FilterDiv } from './Footer.style';

const styles = theme => ({
  button: {
    backgroundColor: '#F6C25B',
    width: '80%',
    margin: `5% 10% 5% 10%`,
  },
  formControl: {
    width: '100%',
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
    width: '40%',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: ['Raleway', 'sans-serif'].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const Footer = ({ classes }) => {
  return (
    <FooterDiv>
      <TitleDiv>
        <StyledTitle>SEARCH ARCHIVE</StyledTitle>
        <Button className={classes.button}>HOW TO SEARCH</Button>
      </TitleDiv>
      <FilterDiv>
        <FormControl className={classes.formControl}>
          <Select
            input={
              <BootstrapInput name="age" id="category-customized-select" />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Select
            input={
              <BootstrapInput name="age" id="category-customized-select" />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Select
            input={
              <BootstrapInput name="age" id="category-customized-select" />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Select
            input={
              <BootstrapInput name="age" id="category-customized-select" />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </FilterDiv>
    </FooterDiv>
  );
};

export default withStyles(styles)(Footer);
