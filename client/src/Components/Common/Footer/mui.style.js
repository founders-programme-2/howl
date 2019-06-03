import { InputBase, withStyles, createMuiTheme } from '../../muIndex';

export const footerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#F6C25B',
    },
    secondary: {
      main: '#F6C25B',
    },
  },
});

export const styles = theme => ({
  howToSearchButton: {
    textTransform: 'uppercase',
    backgroundColor: 'var(--main-btn-color)',
    width: '50%',
    margin: `5% 25% 5% 25%`,
    fontFamily: ['Raleway', 'sans-serif'].join(','),
    fontWeight: 'bold',
    borderRadius: '4px',
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: 'var(--main-btn-color)',
    },
    '@media (max-width:780px)': {
      margin: `5% 25% 5% 25%`,
    },
  },
  formControl: {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    '@media (max-width:780px)': {
      display: 'flex',
      width: '98%',
      flexFlow: 'row nowrap',
    },
  },

  multipleSelectFormControl: {
    width: '100%',
    margin: '1%',
    height: '18.5vh',
    borderRadius: '4px',
    backgroundColor: 'white',
    background: 'red',
    '@media (max-width:780px)': {
      width: `96.6%`,
      margin: '1.7% auto',
      height: '20vh',
    },
  },
  chips: {
    maxHeight: 80,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '97%',
    padding: 5,
    overflowY: 'auto',
  },
  chip: {
    background: 'var(--main-btn-color)',
    margin: '0.5%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    padding: 0,
  },
  MultipleSelectInputLabel: {
    width: '95%',
    margin: '0px',
    color: 'black',
    fontWeight: '600',
    fontFamily: 'Raleway, sans-serif',
    fontSize: 16,
  },
  select: {
    width: '90%',
    margin: '1.7% auto',
    '@media (max-width:780px)': {
      width: '30%',
      margin: '1.7%',
    },
  },
  searchFormControl: {
    width: '100%',
    margin: '0px auto ',
    display: 'flex',
    justifyContent: 'center',
  },
  searchTextField: {
    margin: '1% auto',
    backgroundColor: theme.palette.common.white,
    borderRadius: '4px',
    fontWeight: 'bold',
    width: '80%',
    paddingLeft: '2%',
    '@media (max-width:780px)': {
      width: `95%`,
      margin: '1.7% auto',
      height: '100%',
    },
  },
  searchTextFieldLabel: {
    fontWeight: 'bold',
    paddingLeft: '2%',
  },

  searchButton: {
    width: '65%',
    backgroundColor: 'var(--main-btn-color)',
    borderRadius: '4px',
    fontWeight: 'bold',
    marginTop: '2%',
    marginRight: '2.5%',
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: 'var(--main-btn-color)',
    },
  },
  resetButton: {
    width: '34%',
    backgroundColor: 'var(--highlight-color)',
    color: theme.palette.common.black,
    borderRadius: '4px',
    fontWeight: 'bold',
    marginTop: '2%',
    marginLeft: '2.5%',
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: 'var(--highlight-color)',
    },
  },
});

export const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
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
    fontFamily: 'Raleway, sans-serif',
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
