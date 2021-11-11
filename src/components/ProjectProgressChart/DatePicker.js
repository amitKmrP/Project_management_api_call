

// App.js
import 'date-fns';
import React, { useState } from 'react';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

function DatePicker() {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

  return (
    <div className="App">

      <MuiPickersUtilsProvider utils={DateFnsUtils}>

        <KeyboardDatePicker
          label="select range"
          value={selectedDate}
          onChange={handleDateChange}
        />
        
      </MuiPickersUtilsProvider>

    </div>
  );
}

export default DatePicker;