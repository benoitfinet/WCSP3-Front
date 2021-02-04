import Footer from '../Footer/Footer';
import './Parc.css';
import PhotoMap from './ParcImg/Parcour aérien en hauteur.jpeg';
import Navbar from '../Nav/Navbar';
import PhotoBanner from '../Nav/img/background-activite.jpg';

const Parc = () => {
  return (
    <div>
        <Navbar imgbanner={PhotoBanner} textbanner="Le parc" />
            <div className="Activites">
                  <div className="Activites-content">
                  <div className="Activitespadding">
                  <div className="block-parc">
              <p className="text-parc">Atout Branches est un parc d’activités de loisirs ludo sportives situé à Milly la Forêt au cœur du Parc Naturel Régional du Gâtinais Français, véritable poumon vert au sud de l’Ile-de-France.<br/>
              Nous accueillons petits et grands pour une journée inoubliables sur les thèmes sports, nature, sensations et réflexions.<br/>
              Venez-vous ressourcer dans ce cadre magnifique et réveiller vos sens, les activités que nous vous proposons sont imaginés de manière à s’adapter à tout le monde et dans le respect de la nature et de notre eco system.<br/>
              Une buvette, aires de repos et pique-nique et un chalet sanitaire sont à votre disposition.
              </p>
            </div>
        </div>
        <div className="parc-layout">
          <div className="textback">
          <h2 className="home-title">Le plan du Parc</h2>
          <div id="ancre-plan"></div>
          <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
            <p className="text-parc">Atout branches vous acceuil dans le Parc naturel du Gâtinais français
            </p>
            <img className="img-fluid" src={PhotoMap} alt="Carte de Milly-la-Forêt"/>
            <p className="text-parc">Voici le plan du Parc pour vous repérer!
            </p>
          </div>
        </div>
        <div className="parc-layout">
            <div className="textback">
              <h2 className="home-title">Nos Engagements</h2>
              <div id="ancre-engagement"></div>
              <div id="ancre-engagement"></div>
              <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
              <p className="text-parc">Prendre conscience des enjeux environnementaux c’est agir localement mais penser à l’échelle planétaire, puisque nous partageons une seul et même planète.<br></br>
                Les structures du Parc et ses nombreuses activités s’intègrent parfaitement à leur environnement, sans répercussion sur la faune et la flore.
                Promouvoir les comportements écologiquement responsables de chacun à travers des réflexions , c’est ce que nous vous proposons avec nos jeux de réflexions. (chasse au trésors, parcours d’énigmes et escape Game).
              </p>
            </div>
        </div>
      </div>
    </div>
    <Footer />
        </div>
  );
};

export default Parc;
