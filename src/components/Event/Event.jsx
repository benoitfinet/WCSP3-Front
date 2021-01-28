import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';

import Photo1 from './EventImg/Atout Branches soirée nocturne 2.JPG';

const Event = () => {
  return (
    <div>
        <Navbar title="Évènements" />
    <div className="Activites">
    <div className="Activites-content">
    <h1 className="h1activite">Tous nos Évènements</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="block-card">
    <div className="card-activite">
        <img alt="photo" className="photo-card" src={Photo1}></img>
        <h3 className="parcour-titre">Les Nocturnes</h3>
        <p>Atout Branches propose des mois de Mai à Septembre une soirée nocturne et à partir de 10 ans. Réservation obligatoire, places limitées.</p>
      </div>
      <div className="card-activite">
        <img alt="photo" className="photo-card" src={Photo1}></img>
        <h3 className="parcour-titre">Fête des mères et fête des pères</h3>
        <p>Fête des mères et fête de pères. 50% sur le prix de l’entrée pour le parent pratiquant sous condition de venir en famille de trois personnes minimum.</p>
      </div>
    </div>
    <div className="first-block-img-para">
        <p className="textactivites">Privatisation du parc ou pour toutes demandes particulières, contactez-nous : contact@atoutbranches.com
        </p>
    </div>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
  </div>
  </div>
  <Footer />
  </div>
  );
};

export default Event;