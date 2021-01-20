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
              <a className="tw-ic">
                <i className="fab fa-twitter white-text mr-lg-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
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
              <strong>Le parc</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
            <p>
              <a href="#!">Notre Buvette</a>
            </p>
            <p>
              <a href="#!">Evénements</a>
            </p>
            <p>
              <a href="#!">Où nous trouver?</a>
            </p>
            <p>
              <a href="#!">Voir le plan du parc</a>
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
              <a href="#!">Calendrier et horaires</a>
            </p>
            <p>
              <a href="#!">Organisez votre journée</a>
            </p>
            <p>
              <a href="#!">Térrasses aériennes</a>
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
              <a href="#!">Contact</a>
            </p>
            <p>
              <a href="#!">Newsletter</a>
            </p>
            <p>
              <a href="#!">Mentions légales</a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.wildcodeschool.com"> WildCodeSchool.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
