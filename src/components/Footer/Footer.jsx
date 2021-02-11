import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import MentionsLegales from '../MentionsLegales/MentionsLegales';

import './Footer.css';

class Footer extends React.Component {
  state = {
    info: []
  };

    getHome = () => {
      fetch('http://localhost:5000/info/')
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            info: data
          });
        });
    };

    componentDidMount () {
      this.getHome();
    }

    render () {
      const { info } = this.state;
      return (
        <div>
    <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0 test-background">
      <MDBContainer className="mt-5 mb-4 text-center text-md-left" id="margin-hide">
        <MDBRow className="mt-3" id="margin-none">
        <MDBCol md="3" lg="4" xl="5" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Atout Branches</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
            <p>
            {info.length !== 0 && info[3].description}
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong><a href="/Parc">Le parc</a></strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
            <HashLink to="/Parc#ancre-buvette">
              <p>Notre buvette</p>
            </HashLink>
            <p>
              <a href="/Event">Evénements</a>
            </p>
            <HashLink to="/Parc#ancre-engagement">
              <p>Nos engagements</p>
            </HashLink>
            <p>
              <a href="/Reglement">Réglement intérieur</a>
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>INFOS PRATIQUES</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
            <p>
              <a href="#!">Consulter la brochure</a>
            </p>
            <HashLink to="/nous-trouver#ancre-plan-acces-park">
              <p>Où nous trouver ?</p>
            </HashLink>
            <p>
              <a href={info.length !== 0 && info[35].image} target="blank">Plan du parc</a>
            </p>
            <HashLink to="/Horaires#ancre-calendrier">
              <p>Calendrier et horaires</p>
            </HashLink>
            <HashLink to="/Faq#ancre-faq">
              <p>Organiser votre journée</p>
            </HashLink>
            <HashLink to="/tarifs/tarifsIndividuels#ancre-tarifs">
              <p>Tarifs</p>
            </HashLink>
            <p>
              <a href="/Reservation">Billeterie</a>
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
            <p>
              <a href="/Contact">Écrivez-nous</a>
            </p>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
    <MentionsLegales />
    </div>
      );
    }
}
export default Footer;
