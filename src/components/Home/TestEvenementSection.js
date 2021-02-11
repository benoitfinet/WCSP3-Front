import React from 'react';

import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView } from 'mdbreact';

import './Homeevent.css';
import './TestEvenementSection.css';

class TestEvenementSection extends React.Component {
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
    <MDBCard className="my-5 px-5 pb-5" id="block-evenement">
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4 imgeventhome" hover waves>
              <img className="img-fluid" src={homes.length !== 0 && homes[2].subtext} alt="image d'un homme faisant de l'accrobranche de nuit"/>
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="black-text">
              <h3 className="font-weight-bold mb-3 title-evenement home-title-white">
              {homes.length !== 0 && homes[2].title}
              </h3>
            </a>
            <h4 className="home-subtitle-white">
              <strong>{homes.length !== 0 && homes[2].subtitle}</strong>
            </h4>
            <p className="home-para-white">
            {homes.length !== 0 && homes[2].text}
            </p>
            <button className="button buttonresp"><a href="/Event" className="event-link">En savoir plus</a></button>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
    </div>
    );
  }
}
export default TestEvenementSection;
