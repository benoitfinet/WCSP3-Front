import React from 'react';
import './CalendarPage.css';
import Navbar from '../Nav/Navbar';

class CalendarBody extends React.Component {
  state = {
    horaires: []
  };

  getHome = () => {
    fetch('http://localhost:5000/horaires/')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          horaires: data
        });
      });
  };

  componentDidMount () {
    this.getHome();
  }

  render () {
    const { horaires } = this.state;
    return (
      <div>
        <Navbar imgbanner={horaires.length !== 0 && horaires[1].image} textbanner="Nos horaires" />
            <div className="Activites">
                  <div className="Activites-content">
                  <div className="Activitespadding">
                  <h2 className="cldSeason">{horaires.length !== 0 && horaires[8].text}</h2>
            <img className='parkSchedule' src={horaires.length !== 0 && horaires[0].image} alt='saison 2021' />
    <div className='cldInfoText'>
          <h3>{horaires.length !== 0 && horaires[1].title}</h3>
          <br/>
          <h3>{horaires.length !== 0 && horaires[2].title}</h3>
          <p>
          {horaires.length !== 0 && horaires[2].text}
          </p>
          <br/>
          <h3>{horaires.length !== 0 && horaires[3].title}</h3>
          <p>{horaires.length !== 0 && horaires[3].text}</p>
          <br/>
          <h3>{horaires.length !== 0 && horaires[4].title}</h3>
          <p>{horaires.length !== 0 && horaires[4].text}</p>
          <br/>
          <h3>{horaires.length !== 0 && horaires[5].title}</h3>
          <p>{horaires.length !== 0 && horaires[5].text}</p>
          <br/>
          <h3>{horaires.length !== 0 && horaires[6].title}</h3>
          <p>{horaires.length !== 0 && horaires[6].text}</p>

        <div className='cldReservationInfo'>
          <h3>{horaires.length !== 0 && horaires[7].title}</h3>
          <p>
          {horaires.length !== 0 && horaires[7].text}
          </p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
  }
}
export default CalendarBody;
