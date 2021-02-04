import React from 'react';
import './CalendarPage.css';

class CldPageInfo extends React.Component {
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
        <div className='cldInfo'>
              <h2>{horaires.length !== 0 && horaires[0].title}</h2>
              <p className='cldPageInfo'>{horaires.length !== 0 && horaires[0].text}
              </p>
        </div>
    );
  }
}
export default CldPageInfo;
