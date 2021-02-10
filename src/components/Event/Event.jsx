import Footer from '../Footer/Footer';
import Navbar from '../Nav/Navbar';
import PhotoBanner from '../Nav/img/8.jpeg';

import './Event.css';

import React, { Component } from 'react';

class Event extends Component {
    state = {
      event: []
    };

    getHome = () => {
      fetch('http://localhost:5000/event/')
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            event: data
          });
        });
    };

    componentDidMount () {
      this.getHome();
    }

    render () {
      const { event } = this.state;
      return (
    <div>
      <Navbar imgbanner={PhotoBanner} textbanner="Nos évènements" />
    <div className="Activites">
    <div className="Activites-content">
    <div className="block-card">
      <div className="card-event">
        <img alt="photo" className="photo-card-event" src={event.length !== 0 && event[0].image}></img>
        <div className="block-title-para-event">
          <h3 className="title-event-page">{event.length !== 0 && event[0].name}</h3>
          <p className="para-event-page">{event.length !== 0 && event[0].description}</p>
        </div>
      </div>
      <div className="card-event">
        <img alt="photo" className="photo-card-event" src={event.length !== 0 && event[1].image}></img>
        <div className="block-title-para-event">
          <h3 className="title-event-page">{event.length !== 0 && event[1].name}</h3>
          <p className="para-event-page">{event.length !== 0 && event[1].description}</p>
        </div>
      </div>
      <div className="card-event">
        <img alt="photo" className="photo-card-event" src={event.length !== 0 && event[2].image}></img>
        <div className="block-title-para-event">
          <h3 className="title-event-page">{event.length !== 0 && event[2].name}</h3>
          <p className="para-event-page">{event.length !== 0 && event[2].description}</p>
        </div>
      </div>
      <div className="card-event">
        <img alt="photo" className="photo-card-event" src={event.length !== 0 && event[3].image}></img>
        <div className="block-title-para-event">
          <h3 className="title-event-page">{event.length !== 0 && event[3].name}</h3>
          <p className="para-event-page">{event.length !== 0 && event[3].description}</p>
        </div>
      </div>
    </div>
    <div className="first-block-img-para">
        <p className="textactivites">{event.length !== 0 && event[4].description}
        </p>
    </div>
  </div>
  </div>
  <Footer />
  </div>
      );
    }
}
export default Event;
