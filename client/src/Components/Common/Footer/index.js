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

const styles = () => ({
  button: {
    backgroundColor: '#F6C25B',
    width: '50%',
    margin: `5% 25% 5% 25%`,
    fontFamily: ['Raleway', 'sans-serif'].join(','),
    fontWeight: 'bold',
    borderRadius: '20px',
  },
  formControl: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '2.5%',
    marginBottom: '2.5%',
    height: '80%',
  },
  select: {
    width: '40%',
    marginTop: '2.5%',
    marginBottom: '2.5%',
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
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
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
        <Button className={classes.button}>HOW TO SEARCH</Button>
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
    </FooterDiv>
  );
};

export default withStyles(styles)(Footer);
