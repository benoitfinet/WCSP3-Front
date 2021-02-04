import React from 'react';
import Footer from '../Footer/Footer';
import CalendarBody from './CalendarBody';
import './CalendarPage.css';

function CalendarPage () {
  return (
        <div className='calendarPage'>
          <CalendarBody/>
          <Footer/>
        </div>
  );
}

export default CalendarPage;
