import React from 'react';
import CldPageInfo from './CldPageInfo';
import CldInfoButton from './CldInfoButton';
import CldSeasonInfo from './CldSeasonInfo';
import CldTextInfo from './CldTextInfo';
import './CalendarPage.css';

function CalendarBody () {
  return (
        <div className='cldBody'>
              <div className="cldContent">
              <CldPageInfo/>
              <CldInfoButton/>
              <CldSeasonInfo/>
              <CldTextInfo/>
              </div>
        </div>
  );
}

export default CalendarBody;
