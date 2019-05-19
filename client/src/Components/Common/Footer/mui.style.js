import { InputBase, withStyles } from '../../muIndex';

export const styles = theme => ({
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
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    marginTop: '4%',
  },

  multipleSelectFormControl: {
    width: '95%',
    margin: '0 2.5% 0',
    borderRadius: '4px',
    backgroundColor: 'white',
    padding: '4px',
  },

  tagsSelect: {},
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
  multipleInputSelectLabel: {
    width: '95%',
    margin: '0px',
    fontWeight: 'bold',
    color: 'black',
  },
  select: {
    width: '30%',
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
    borderRadius: '4px',
    fontWeight: '700',
    width: '80%',
    height: '20%',
  },
  searchTextFieldLabel: {
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
