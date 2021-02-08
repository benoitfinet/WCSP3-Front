import Footer from '../Footer/Footer';
import Navbar from '../Nav/Navbar';
import PhotoBanner from '../Nav/img/8.jpeg';
import Photo6 from '../../img/14.jpeg';

import './Event.css';

const Event = () => {
  return (
    <div>
      <Navbar imgbanner={PhotoBanner} textbanner="Nos évènements" />
    <div className="Activites">
    <div className="Activites-content">
    <div className="block-card">
      <div className="card-event">
        <img alt="photo" className="photo-card-event" src={Photo6}></img>
        <div className="block-title-para-event">
          <h3 className="title-event-page">Les Nocturnes</h3>
          <p className="para-event-page">Atout Branches propose des mois de Mai à Septembre une soirée nocturne et à partir de 10 ans. Réservation obligatoire, places limitées.</p>
        </div>
      </div>
      <div className="card-event">
        <img alt="photo" className="photo-card-event" src={Photo6}></img>
        <div className="block-title-para-event">
          <h3 className="title-event-page">Fête des mères et fête des pères</h3>
          <p className="para-event-page">Fête des mères et fête de pères. 50% sur le prix de l’entrée pour le parent pratiquant sous condition de venir en famille de trois personnes minimum.</p>
        </div>
      </div>
      <div className="card-event">
        <img alt="photo" className="photo-card-event" src={Photo6}></img>
        <div className="block-title-para-event">
          <h3 className="title-event-page">Fête de la nature</h3>
          <p className="para-event-page">Texte à ajouter</p>
        </div>
      </div>
      <div className="card-event">
        <img alt="photo" className="photo-card-event" src={Photo6}></img>
        <div className="block-title-para-event">
          <h3 className="title-event-page">Halloween</h3>
          <p className="para-event-page">Texte à ajouter</p>
        </div>
      </div>
    </div>
    <div className="first-block-img-para">
        <p className="textactivites">Privatisation du parc ou pour toutes demandes particulières, contactez-nous : contact@atoutbranches.com
        </p>
    </div>
  </div>
  </div>
  <Footer />
  </div>
  );
};

export default Event;
