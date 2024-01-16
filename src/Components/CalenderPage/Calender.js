import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import "./calender.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Meeting 1',
    start: new Date(2024, 1, 10, 10, 0),
    end: new Date(2024, 1, 10, 12, 0),
  },
  {
    title: 'Meeting 2',
    start: new Date(2024, 1, 12, 14, 0),
    end: new Date(2024, 1, 12, 16, 0),
  },  {
    title: 'Meeting 3',
    start: new Date(2024, 1, 4, 14, 0),
    end: new Date(2024, 1, 4, 16, 0),
  },
  // Add more events as needed
];

const MyCalendar = () => (
  <div style={{ height: '100vh' }}>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: '100%' }}
    />
  </div>
);

export default MyCalendar;
