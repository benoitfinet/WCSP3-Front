import Footer from '../Footer/Footer';
import './Parc.css';
import Navbar from '../Nav/Navbar';
import PhotoBanner from '../Nav/img/11.jpeg';
import Img from './ParcImg/1.jpg';
import Food from './ParcImg/food.jpg';
import Plan from './ParcImg/plan.pdf';
import CarteBuvette from './ParcImg/carte-restauration.pdf';

const Parc = () => {
  return (
    <div>
        <Navbar imgbanner={PhotoBanner} textbanner="Le parc" />
            <div className="Activites">
                  <div className="Activites-content">
                  <div className="Activitespadding">
                  <div className="block-img-text-buvette">
              <img className="img-buvette" src={Img} alt="Carte de Milly-la-Forêt"/>
              <p className="text-parc-buvette">Atout Branches est un parc d’activités de loisirs ludo sportives situé à Milly la Forêt au cœur du Parc Naturel Régional du Gâtinais Français, véritable poumon vert au sud de l’Ile-de-France.<br/>
              Nous accueillons petits et grands pour une journée inoubliables sur les thèmes sports, nature, sensations et réflexions.<br/>
              Venez-vous ressourcer dans ce cadre magnifique et réveiller vos sens, les activités que nous vous proposons sont imaginés de manière à s’adapter à tout le monde et dans le respect de la nature et de notre eco system.<br/>
              Une buvette, aires de repos et pique-nique et un chalet sanitaire sont à votre disposition.<br/><br/>
              Conultez le <a href={Plan} target="blank">plan du parc</a>
              </p>
            </div>
        </div>
        <div className="parc-layout">
          <div className="textback">
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
            <h2 className="home-title">Notre buvette</h2>
            <div id="ancre-buvette"></div>
          <div id="ancre-plan"></div>
          <div className="trait_et_rond">
            <div className="trait"></div>
            <div className="rond_bleu"></div>
          </div>
            <div className="block-img-text-buvette">
            <img className="img-buvette" src={Food} alt="Carte de Milly-la-Forêt"/>
            <p className="text-parc-buvette">Après l'effort, le réconfort. Vous avez besoin de recharger les batteries.
Situé au cœur du parc, notre espace buvette et snacking ombragé n’est pas seulement réservé qu’aux pratiquants des activités. Nous vous attendrons avec plaisir pour une petite pause gourmande au niveau du chalet d’accueil/buvette.
Des aires de pique-nique avec des tables et bancs sont à votre disposition gratuitement.
Nouveauté pour 2021, Vous pouvez privatiser votre terrasse aérienne. Pique-niquer, fêter son anniversaire, organiser un EVJF et EVG ou tout simplement se reposer… Profitez d’un lieu atypique et unique à l’abri des regards.<br/><br/>Conultez <a href={CarteBuvette} target="blank">notre carte</a> ici !
            </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <Footer />
        </div>
  );
};

export default Parc;
