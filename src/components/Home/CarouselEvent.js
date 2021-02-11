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
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
      })
    }
  </InfiniteCarousel>
        }
  <button className="button-carousel-event buttonresp"><a href="/groupes/familleAmis" className="parc-link">Découvrez toutes nos offres</a></button>
    </div>
  );
}

CarouselEvent.propTypes = {
  history: PropTypes.string.isRequired,
  push: PropTypes.string.isRequired
};

export default CarouselEvent;
