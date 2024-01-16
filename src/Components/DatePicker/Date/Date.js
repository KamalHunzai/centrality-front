import React, {useState} from 'react'
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import './Date.css'

function Date() {
    const [startDate,setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null)
    const [calendaropen, setCalendarOpen] = useState(true)

    const handleDateChange = (dates) =>{
        const [start,end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
  return (
    <div>
        <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline={calendaropen}
        dateFormat="MM/dd/yyyy"
        />

    </div>
  )
}

export default Date