export const styles = () => ({
  formControl: {
    display: 'block',
    marginLeft: '5%',
    marginRight: '5%',
    width: '50%',
    background: 'white',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 4,
  },
  select: {
    width: '100%',
    paddingLeft: '2%',
  },
  formControlTags: {
    height: '50%',
  },
  textField: {
    marginLeft: '5%',
    marginRight: '5%',
    width: '50%',
    background: 'white',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 4,
    paddingLeft: '2%',
  },
  label: {
    paddingLeft: '2%',
  },
  textFieldWlm: {
    width: '90%',
  },
  chips: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '97%',
    padding: 5,
    maxHeight: 100,
    overflowY: 'auto',
  },
  chip: {
    background: 'var(--highlight-color)',
    margin: '0.5%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  formControlCheckbox: {
    display: 'block',
    width: '100%',
  },
  formControlLabel: {
    margin: '2%',
    paddingLeft: '2%',
    fontSize: 14,
  },
});

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
