import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from 'mdbreact';

import './Carousel.css';
import './Carouselhome.css';

class CarouselPage extends React.Component {
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
    <div className="block-caroussel">
    <MDBContainer className="carousel">
      <h2 className="home-title">{homes.length !== 0 && homes[4].title}</h2>
      <h3 className="home-subtitle">{homes.length !== 0 && homes[4].subtitle}</h3>
      <MDBCarousel
      activeItem={1}
      length={5}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
        <HashLink to="/Activites/parcours-acrobatiques#ancre">
          <MDBView>
            <img
              className="d-block w-100"
              src={homes.length !== 0 && homes[5].subtext}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">{homes.length !== 0 && homes[5].subtitle}</h3>
          </MDBCarouselCaption>
          </HashLink>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
        <HashLink to="/Activites/escape-game#ancre">
          <MDBView>
            <img
              className="d-block w-100"
              src={homes.length !== 0 && homes[6].subtext}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">{homes.length !== 0 && homes[6].subtitle}</h3>
          </MDBCarouselCaption>
          </HashLink>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
        <HashLink to="/Activites/parcours-enigme#ancre">
          <MDBView>
            <img
              className="d-block w-100"
              src={homes.length !== 0 && homes[7].subtext}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">{homes.length !== 0 && homes[7].subtitle}</h3>
          </MDBCarouselCaption>
          </HashLink>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
        <HashLink to="/Activites/chasse-tresor#ancre">
          <MDBView>
            <img
              className="d-block w-100"
              src={homes.length !== 0 && homes[8].subtext}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">{homes.length !== 0 && homes[8].subtitle}</h3>
          </MDBCarouselCaption>
          </HashLink>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="5">
        <HashLink to="/Activites/spider-filet#ancre">
          <MDBView>
            <img
              className="d-block w-100"
              src={homes.length !== 0 && homes[9].subtext}
              alt="Third slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">{homes.length !== 0 && homes[9].subtitle}</h3>
          </MDBCarouselCaption>
          </HashLink>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
    </div>
    );
  }
}
export default CarouselPage;
