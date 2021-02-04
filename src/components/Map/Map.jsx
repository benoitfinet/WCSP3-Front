import Footer from '../Footer/Footer';
import './Map.css';
import Navbar from '../Nav/Navbar';

import React, { Component } from 'react';

class Map extends Component {
    state = {
      findus: []
    };

    getHome = () => {
      fetch('http://localhost:5000/findus/')
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            findus: data
          });
        });
    };

    componentDidMount () {
      this.getHome();
    }

    render () {
      const { findus } = this.state;
      return (
    <div>
      <Navbar title="Où nous trouver"/>
        <div className="mapBody">
          <div className="mapContent">
          <div>
          <div className="textback">
            <h2 className="titles">{findus.length !== 0 && findus[0].title}</h2>
            <p className="text-map">{findus.length !== 0 && findus[0].text}
            </p>
            <a href="https://www.google.fr/maps/place/Atout+Branches/@48.3936706,2.4418254,13z/data=!4m5!3m4!1s0x47e5eaf727d334c5:0x9944747c258b3223!8m2!3d48.4086668!4d2.4491385" target="blank">
            <img className="img-fluid" src={findus.length !== 0 && findus[0].image} alt="Carte de Milly-la-Forêt"/>
            </a>
          </div>
      </div>
    <div className="map-layout">
      <div className="textback">
        <h2 className="titles">{findus.length !== 0 && findus[1].title}</h2>
        <p className="text-map">{findus.length !== 0 && findus[1].text}
        </p>
      </div>
    </div>
    <div className="map-layout">
      <div className="textback">
        <h2 className="titles">{findus.length !== 0 && findus[2].title}</h2>
        <p className="text-map">{findus.length !== 0 && findus[2].text}
        </p>
      </div>
    </div>
    <div className="map-layout">
      <div className="textback">
      <h2 className="titles">{findus.length !== 0 && findus[3].title}</h2>
      <p className="text-map">{findus.length !== 0 && findus[3].text}
      </p>
  </div>
  </div>
  </div>
  </div>
  <Footer />
  </div>
      );
    }
}
export default Map;
