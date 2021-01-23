import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBView } from 'mdbreact';

import Image1 from './ImgHome/flyernocturne.gif';
import Image2 from './ImgHome/Atout branchers parcours enfants Piccolo 2.JPG';

import './Homeevent.css';

const BlogPage = () => {
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
                Évenement
              </h3>
            </a>
            <h4 className="font-weight-bold mb-3 p-0">
              <strong>Nocturne</strong>
            </h4>
            <p className="home-para">
                Evénements Alti’Max propose des mois de Mai à Septembre une soirée nocturne tous les premiers samedi du mois et à partir de 6 ans.
                Réservation obligatoire, places limitées.
                Fête des mères et fête de pères. 50% sur le prix de l’entrée pour le parent pratiquant sous condition de venir en famille de trois personnes minimum. Privatisation du parc ou pour toutes demandes particulières, contactez-nous : altimax78@gmail.com
            </p>
            <button className="button">En savoir plus</button>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="black-text">
              <h3 className="font-weight-bold mb-3">
                Offre
              </h3>
            </a>
            <h4 className="font-weight-bold mb-3 p-0">
              <strong>Privatisez votre terrasse</strong>
            </h4>
            <p className="home-para">
                Privatisez votre terrasse Vous pouvez privatiser votre terrasse aérienne à la journée.
                Equipé d’une table, de bancs et d’un coffre fermé par cadenas afin d’y déposer vos affaires.
                Vous pourrez ainsi profiter de votre pause déjeuner, gouter ou anniversaire en hauteur avec la vue sur le parc et à l’écart.
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
};

export default BlogPage;
