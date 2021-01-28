import React from 'react';

import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView } from 'mdbreact';

import Image1 from './ImgHome/flyernocturne.gif';
import Image2 from './ImgHome/Atout branchers parcours enfants Piccolo 2.JPG';

import './Homeevent.css';

class BlogPage extends React.Component {
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
    <MDBCard className="my-5 px-5 pb-5" id="testcard">
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img className="img-fluid" src={Image1} alt="image d'un homme faisant de l'accrobranche de nuit"/>
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="black-text">
              <h3 className="font-weight-bold mb-3">
              {homes.length !== 0 && homes[2].title}
              </h3>
            </a>
            <h4 className="font-weight-bold mb-3 p-0">
              <strong>{homes.length !== 0 && homes[2].subtitle}</strong>
            </h4>
            <p className="home-event-para">
            {homes.length !== 0 && homes[2].text}
            </p>
            <button className="button"><a href="/Event" className="event-link">En savoir plus</a></button>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="black-text">
              <h3 className="font-weight-bold mb-3">
              {homes.length !== 0 && homes[3].title}
              </h3>
            </a>
            <h4 className="font-weight-bold mb-3 p-0">
              <strong>{homes.length !== 0 && homes[3].subtitle}</strong>
            </h4>
            <p className="home-event-para">
            {homes.length !== 0 && homes[3].text}
            </p>
            <button className="button">En savoir plus</button>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={Image2}
                alt="Image de terrasse en forêt"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>

      </MDBCardBody>
    </MDBCard>
    </div>
    );
  }
}
export default BlogPage;
