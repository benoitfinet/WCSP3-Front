import React from 'react';

import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from 'mdbreact';

import Photo1 from '../../img/photos atout branches/laser game.jpeg';
import Photo2 from '../../img/photos atout branches/parcours.jpg';
import Photo3 from '../../img/photos atout branches/parcours2.JPG';
import Photo4 from '../../img/photos atout branches/escalade.jpeg';
import Photo5 from '../../img/photos atout branches/team.JPG';
import Photo6 from '../../img/photos atout branches/tyro.jpg';

import './Carousel.css';
import './Carouselhome.css';

const CarouselPage = () => {
  return (
    <MDBContainer className="carousel">
      <MDBCarousel
      activeItem={1}
      length={6}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={Photo1}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Laser Game</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={Photo2}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Orientation</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={Photo3}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">AltiSpider</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
            <img
              className="d-block w-100"
              src={Photo4}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Escalade</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="5">
          <MDBView>
            <img
              className="d-block w-100"
              src={Photo5}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Aire de jeux</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="6">
          <MDBView>
            <img
              className="d-block w-100"
              src={Photo6}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Parcours</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;
