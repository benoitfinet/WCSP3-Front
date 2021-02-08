import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import Photo1 from '../../img/6.jpeg';
import Photo3 from '../../img/12.jpeg';
import Photo4 from '../../img/13.jpeg';
import Photo5 from '../../img/10.jpeg';
import Photo6 from '../../img/9.jpeg';

import './CarouselEvent.css';

class CarouselEvent extends React.Component {
  state = {
    homes: []
  };

  getInfo = () => {
    fetch('http://localhost:5000/home/')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          homes: data
        });
      });
  };

  componentDidMount () {
    this.getInfo();
  }

  render () {
    const { homes } = this.state;

    return (
      <div className="block-carousel-event">
        <h2 className="home-title-carouselEvent">{homes.length !== 0 && homes[4].title}</h2>
        <h3 className="home-subtitle">{homes.length !== 0 && homes[4].subtitle}</h3>
        <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={0.5}
    sideSize={0.1}
    slidesToScroll={1}
    slidesToShow={5}
    scrollOnDevice={true}
  >
    <div>
      <figure>
        <HashLink to="/groupes/familleAmis#ancre">
          <div className="wprock-img-zoom-hover">
            <div className="wprock-img-zoom">
              <img
                alt=''
                src={Photo1}
                className="img-carousel"
              />
            </div>
          </div>
        </HashLink>
        <div className="style-figcation">
          <figcaption>En famille et entre amis</figcaption>
        </div>
      </figure>
    </div>

    <div>
      <figure>
        <HashLink to="/groupes/anniversaires#ancre">
          <div className="wprock-img-zoom-hover">
            <div className="wprock-img-zoom">
              <img
                alt=''
                src={homes.length !== 0 && homes[10].subtext}
                className="img-carousel"
              />
              </div>
            </div>
          </HashLink>
          <div className="style-figcation">
            <figcaption>{homes.length !== 0 && homes[10].text}</figcaption>
          </div>
      </figure>
    </div>

    <div>
      <figure>
        <HashLink to="/groupes/centreLoisirs#ancre">
          <div className="wprock-img-zoom-hover">
            <div className="wprock-img-zoom">
              <img
                alt=''
                src={Photo3}
                className="img-carousel"
              />
            </div>
          </div>
        </HashLink>
        <div className="style-figcation">
          <figcaption>Les centres de loisirs et scolaires</figcaption>
        </div>
      </figure>
    </div>

    <div>
      <figure>
        <HashLink to="/groupes/teamBuilding#ancre">
          <div className="wprock-img-zoom-hover">
            <div className="wprock-img-zoom">
              <img
                alt=''
                src={Photo4}
                className="img-carousel"
              />
            </div>
          </div>
        </HashLink>
        <div className="style-figcation">
          <figcaption>Le Team building/Séminaires</figcaption>
        </div>
      </figure>
    </div>

    <div>
      <figure>
        <HashLink to="/groupes/comiteEntreprise#ancre">
          <div className="wprock-img-zoom-hover">
            <div className="wprock-img-zoom">
              <img
                alt=''
                src={Photo5}
                className="img-carousel"
              />
            </div>
          </div>
        </HashLink>
        <div className="style-figcation">
          <figcaption>Les comités d’entreprises et les associations</figcaption>
        </div>
      </figure>
    </div>

    <div>
      <figure>
        <HashLink to="/groupes/EVG-EVJF#ancre">
          <div className="wprock-img-zoom-hover">
            <div className="wprock-img-zoom">
              <img
                alt=''
                src={Photo6}
                className="img-carousel"
              />
            </div>
          </div>
        </HashLink>
      <div className="style-figcation">
        <figcaption>EVG / EVJF</figcaption>
      </div>
      </figure>
    </div>
  </InfiniteCarousel>
  <button className="button-carousel-event"><a href="/groupes/familleAmis" className="parc-link">Découvrez toutes nos offres</a></button>
      </div>
    );
  }
}

CarouselEvent.propTypes = {
  history: PropTypes.string.isRequired,
  push: PropTypes.string.isRequired
};

export default CarouselEvent;
