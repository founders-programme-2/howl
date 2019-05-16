export const styles = theme => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: 120,
    maxWidth: 300,
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
    margin: theme.spacing / 4,
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
