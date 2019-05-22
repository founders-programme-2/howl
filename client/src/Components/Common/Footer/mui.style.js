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
    borderRadius: '20px',
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: 'var(--main-btn-color)',
    },
    '@media (max-width:780px)': {
      margin: `1% 25% 1% 25%`,
    },
  },
  formControl: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
  },

  multipleSelectFormControl: {
    width: '95.5%',
    margin: '2.5%',
    borderRadius: '4px',
    backgroundColor: 'white',
    padding: '4px',
  },
  chips: {
    width: '100%',
    marginTop: '2.5%',
    marginBottom: '2.5%',
  },
  chip: {
    width: '100%',
    marginTop: '2.5%',
    marginBottom: '5%',
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
    width: '30%',
    marginTop: '2.5%',
  },
  searchFormControl: {
    width: '100%',
    height: '50%',
    margin: '0px auto ',
    display: 'flex',
    justifyContent: 'center',
  },
  searchTextField: {
    margin: 'auto',
    backgroundColor: theme.palette.common.white,
    borderRadius: '4px',
    fontWeight: 'bold',
    width: '80%',
    height: '20%',
  },
  searchTextFieldLabel: {
    fontWeight: 'bold',
  },

  searchButton: {
    width: '60%',
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
