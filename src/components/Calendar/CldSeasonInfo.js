import React from 'react';
import Saison2021 from './CalendarPic/saison_2021.jpg';

function CldSeasonInfo () {
  return (
        <div>
            <h2 className="cldSeason">Calendrier 2021</h2>
            <img className='parkSchedule' src={Saison2021} alt='saison 2021' />
        </div>
  );
}

export default CldSeasonInfo;
