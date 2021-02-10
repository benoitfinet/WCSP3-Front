import { useEffect, useState } from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import TitlePetitCarousel from './TitlePetitCarousel';

import './CarouselEvent.css';
import axios from 'axios';

function CarouselEvent () {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    const getHome = async () => {
      const { data } = await axios.get('http://localhost:5000/petitCarousel/');
      console.log(data);
      setHomes(data);
    };
    getHome();
  }, []);

  return (
      <div className="block-carousel-event">
        <TitlePetitCarousel />
        {
          homes.length &&
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
    {
      homes.map((home, index) => {
        // if (home.title === 'petitCarousel') {
        return (
          <div key={index}>
          <figure>
            <HashLink to="/groupes/centreLoisirs#ancre">
              <div className="wprock-img-zoom-hover">
                <div className="wprock-img-zoom">
                  <img
                    alt=''
                    src={home.image}
                    className="img-carousel"
                  />
                </div>
              </div>
            </HashLink>
            <div className="style-figcation">
              <figcaption>{home.text}</figcaption>
            </div>
          </figure>
        </div>
        );
        // }
      })
    }
    {/* <div>
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
          <figcaption>En famille et entre amis </figcaption>
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
                  src={homes.length !== 0 && homes[11].subtext}
                  className="img-carousel"
                  />
                </div>
              </div>
            </HashLink>
            <div className="style-figcation">
              <figcaption>{homes.length !== 0 && homes[11].text}</figcaption>
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
    </div> */}
  </InfiniteCarousel>
        }
  <button className="button-carousel-event"><a href="/groupes/familleAmis" className="parc-link">Découvrez toutes nos offres</a></button>
    </div>
  );
}

CarouselEvent.propTypes = {
  history: PropTypes.string.isRequired,
  push: PropTypes.string.isRequired
};

export default CarouselEvent;
