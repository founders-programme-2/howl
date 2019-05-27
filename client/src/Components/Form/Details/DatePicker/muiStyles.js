// TODO: Refactor media query to take in constant variable for size

const styles = () => ({
  helperText: {
    fontFamily: 'Roboto',
    fontVariant: 'none',
    fontSize: 14,
  },
  grid: {
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '5%',
    marginRight: '5%',
    background: 'white',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 4,
    padding: '2%',
    '@media (max-width: 500px)': {
      width: '80%',
    },
  },
});

export default styles;
