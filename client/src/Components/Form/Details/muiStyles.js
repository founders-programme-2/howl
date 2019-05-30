// TODO: Refactor media query to take in constant variable for size

const styles = () => ({
  selectDropdown: {
    width: '100%',
    paddingLeft: '2%',
  },
  formControl: {
    marginLeft: '5%',
    marginRight: '5%',
    width: '50%',
    background: 'white',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 4,
    '@media (max-width: 768px)': {
      width: '80%',
    },
  },
  formControlDate: {
    background: 'white',
    display: 'inline-block',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '2%',
    width: '50%',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 4,
    '@media (max-width: 768px)': {
      width: '80%',
    },
  },

  formControlMonth: {
    marginBottom: 0,
  },

  label: {
    paddingLeft: '2%',
  },
  formControlRadio: {
    marginLeft: '5%',
    marginRight: '5%',
    width: '50%',
  },
});

export default styles;
