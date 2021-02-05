import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView } from 'mdbreact';

import Image1 from './ImgHome/flyernocturne.gif';

import './Homeevent.css';
import './TestEvenementSection.css';

const TestEvenementSection = () => {
  return (
    <div>
    <MDBCard className="my-5 px-5 pb-5" id="block-evenement">
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
              <h3 className="font-weight-bold mb-3 title-evenement">
                Évenement
              </h3>
            </a>
            <h4 className="font-weight-bold mb-3 p-0 subtitle-event">
              <strong>Nocturne</strong>
            </h4>
            <p className="home-evenement-para">
                Atout branches propose des mois de Mai à Septembre une soirée nocturne tous les premiers samedi du mois et à partir de 6 ans.
                Réservation obligatoire, places limitées.<br/><br/>
                Fête des mères et fête de pères. 50% sur le prix de l’entrée pour le parent pratiquant sous condition de venir en famille de trois personnes minimum.<br/><br/> Privatisation du parc ou pour toutes demandes particulières, contactez-nous : contact@atoutbranches.com
            </p>
            <button className="button"><a href="/Event" className="event-link">En savoir plus</a></button>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
    </div>
  );
};

export default TestEvenementSection;
