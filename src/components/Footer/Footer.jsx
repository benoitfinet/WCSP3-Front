
import React from 'react';

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

import './Footer.css';

const Footer = () => {
  return (
    <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0">
      <div style={{ backgroundColor: '#545454' }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center">
              <h6 className="mb-0 white-text">
                RÉSEAUX SOCIAUX ET LABELS
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center">
              <a className="fb-ic ml-0">
                <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram white-text mr-lg-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
        <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Atout Branches</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
            <p>
                Alti’Max est le nouveau parc d’activités de loisirs ludo sportives situé au cœur du bassin rambolitain et du Parc naturel régional de la Haute Vallée de Chevreuse, véritable poumon vert au sud-ouest de l’Ile-de-France.
                Nous accueillons petits et grands pour une journée inoubliables sur les thèmes sports nature.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong><a href="/Parc">Le parc</a></strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
            <p>
              <a href="#!">Tarifs Buvette</a>
            </p>
            <p>
              <a href="#!">Evénements</a>
            </p>
            <p>
              <a href="#!">Nos Engagements</a>
            </p>
            <p>
              <a href="#!">Réglement intérieur</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>INFOS PRATIQUES</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
            <p>
              <a href="#!">Consulter la brochure</a>
            </p>
            <p>
              <a href="/ounoustrouver">Où nous trouver?</a>
            </p>
            <p>
              <a href="/Parc">Voir le plan du parc</a>
            </p>
            <p>
              <a href="#!">Calendrier et horaires</a>
            </p>
            <p>
              <a href="#!">FAQ</a>
            </p>
            <p>
              <a href="#!">Tarifs</a>
            </p>
            <p>
              <a href="#!">Billeterie</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
            <p>
              <a href="#!">Écrivez-nous</a>
            </p>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <p>
            <a href="#!">Mentions légales</a> - <a href="#!">Politique de confidentialité</a>
          </p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
