import React from 'react';

import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView } from 'mdbreact';

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
          <MDBCol lg="7">
            <a href="#!" className="black-text">
              <h3 className="home-title-green">
              {homes.length !== 0 && homes[3].title}
              </h3>
            </a>
            <h4 className="home-subtitle-orange">
              <strong>{homes.length !== 0 && homes[3].subtitle}</strong>
            </h4>
            <p className="home-para-black">
            {homes.length !== 0 && homes[3].text}
            </p>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src={homes.length !== 0 && homes[3].subtext}
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
