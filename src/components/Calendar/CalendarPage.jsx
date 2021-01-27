import React from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';
import CalendarBody from './CalendarBody';
import './CalendarPage.css';

function CalendarPage () {
  return (
        <div className='calendarPage'>
          <Navbar title="Nos horaires"/>
          <CalendarBody/>
          <Footer/>
        </div>
  );
}

export default CalendarPage;
