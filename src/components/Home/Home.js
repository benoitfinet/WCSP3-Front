import NavbarHome from './NavHome/NavbarHome.js';
import Carousel from './Carouselhome';
import HomeEvent from './HomeEvent';
import Footer from '../Footer/Footer';
import CarouselEvent from './CarouselEvent';
import Textparc from './Textparc';
import React from 'react';

import TestEvenementSection from './TestEvenementSection';

import './Home.css';

class Home extends React.Component {
  state = {
    homes: []
  };

  getHome = () => {
    fetch('http://localhost:5000/home/')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          homes: data
        });
      });
  };

  componentDidMount () {
    this.getHome();
  }

  render () {
    const { homes } = this.state;

    return (
    <div>
      <NavbarHome imgbanner={homes.length !== 0 && homes[0].subtext}/>
      <Textparc className="textparc"/>
      <Carousel className="carousel" />
      <CarouselEvent />
      <TestEvenementSection />
      <HomeEvent />
      <Footer />
    </div>
    );
  }
}
export default Home;
