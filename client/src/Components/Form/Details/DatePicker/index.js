import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '../../../muIndex';
import style from './muiStyles';

const DateFun = ({ selectedDate, handleDateChange, classes }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid className={classes.grid}>
        <DatePicker
          variant="dialog"
          openTo="year"
          views={['year', 'month']}
          label="Year and Month"
          helperText="When did this happen?"
          value={selectedDate}
          onChange={handleDateChange}
          FormHelperTextProps={{
            classes: {
              root: classes.helperText,
            },
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default withStyles(style)(DateFun);
