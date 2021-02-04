import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import Photo1 from '../../img/photos atout branches/laser game.jpeg';
import Photo2 from '../../img/photos atout branches/parcours.jpg';
import Photo3 from '../../img/photos atout branches/parcours2.JPG';
import Photo4 from '../../img/photos atout branches/escalade.jpeg';
import Photo5 from '../../img/photos atout branches/team.JPG';
import Photo6 from '../../img/photos atout branches/tyro.jpg';

import './CarouselEvent.css';

class CarouselEvent extends React.Component {
  render () {
    return (
      <div className="block-carousel-event">
        <h2 className="home-title-carouselEvent">Des offres pour tout publics</h2>
        <h3 className="home-subtitle">En famille, entre amis, entre collègues ...</h3>
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
                src={Photo2}
                className="img-carousel"
              />
              </div>
            </div>
          </HashLink>
          <div className="style-figcation">
            <figcaption>Les Anniversaires</figcaption>
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
                src={Photo2}
                className="img-carousel"
              />
              </div>
            </div>
          </HashLink>
          <div className="style-figcation">
            <figcaption>Les Anniversaires</figcaption>
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
  <button className="button"><a href="/groupes/familleAmis" className="parc-link">Découvrez toutes nos offres</a></button>
      </div>
    );
  }
}

CarouselEvent.propTypes = {
  history: PropTypes.string.isRequired,
  push: PropTypes.string.isRequired
};

export default CarouselEvent;
