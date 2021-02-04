import React from 'react';

class CldSeasonInfo extends React.Component {
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
            <h2 className="cldSeason">Calendrier 2021</h2>
            <img className='parkSchedule' src={horaires.length !== 0 && horaires[0].image} alt='saison 2021' />
        </div>
    );
  }
}
export default CldSeasonInfo;
