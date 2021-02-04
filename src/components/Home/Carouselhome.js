import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from 'mdbreact';

import Photo1 from '../../img/photos atout branches/laser game.jpeg';
import Photo2 from '../../img/photos atout branches/parcours.jpg';
import Photo3 from '../../img/photos atout branches/parcours2.JPG';
import Photo4 from '../../img/photos atout branches/escalade.jpeg';
import Photo6 from '../../img/photos atout branches/tyro.jpg';

import './Carousel.css';
import './Carouselhome.css';

const CarouselPage = () => {
  return (
    <div className="block-caroussel">
      <MDBContainer className="carousel">
        <h2 className="title-carousel-home">Nos activites</h2>
        <h3 className="home-subtitle">Garantie 100% FUN</h3>
        <MDBCarousel
        activeItem={1}
        length={5}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
        <HashLink to="/Activites/parcours-acrobatiques#ancre">
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={Photo1}
                alt="First slide"
              />
            <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Parcours acrobatiques</h3>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          </HashLink>
          <MDBCarouselItem itemId="2">
          <HashLink to="/Activites/escape-game#ancre">
            <MDBView>
              <img
                className="d-block w-100"
                src={Photo2}
                alt="Second slide"
              />
            <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Escape Game</h3>
            </MDBCarouselCaption>
            </HashLink>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
          <HashLink to="/Activites/parcours-enigme#ancre">
            <MDBView>
              <img
                className="d-block w-100"
                src={Photo3}
                alt="Third slide"
              />
            <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Parcours d’énigmes</h3>
            </MDBCarouselCaption>
            </HashLink>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
          <HashLink to="/Activites/chasse-tresor#ancre">
            <MDBView>
              <img
                className="d-block w-100"
                src={Photo4}
                alt="Third slide"
              />
            <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Chasse au trésor</h3>
            </MDBCarouselCaption>
            </HashLink>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
          <HashLink to="/Activites/laser-game#ancre">
            <MDBView>
              <img
                className="d-block w-100"
                src={Photo6}
                alt="Third slide"
              />
            <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Laser Game</h3>
            </MDBCarouselCaption>
            </HashLink>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      </MDBContainer>
      <button className="button"><a href="/Activites/parcours-acrobatiques" className="parc-link">Découvrez toutes nos activités</a></button>
    </div>
  );
};

export default CarouselPage;
