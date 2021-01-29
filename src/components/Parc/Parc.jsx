import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';

import './Parc.css';
import PhotoMap from './ParcImg/Parcour aérien en hauteur.jpeg';

const Parc = () => {
  return (
    <div className="block-parc">
      <Navbar title="Le parc"/>
    <div className="pagesBody">
      <div className="pagesContent">
        <div className="parc-layout">
            <div className="textback">
              <h2 className="home-title">Le Parc</h2>
              <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
              <p className="text-parc">Alti’Max est le nouveau parc d’activités de loisirs ludo sportives situé au cœur du bassin rambolitain et du Parc naturel régional de la Haute Vallée de Chevreuse, véritable poumon vert au sud-ouest de l’Ile-de-France.<br></br>
                    Nous accueillons petits et grands pour une journée inoubliables sur les thèmes sports nature.<br></br>
                    Venez-vous ressourcer dans ce cadre magnifique et réveiller vos sens, les activités que nous vous proposons sont imaginés de manière à s’adapter à tout le monde dans le respect de la nature et de notre eco system.<br></br>
                    Des aires de pique-nique avec des tables et bancs sont à votre disposition gratuitement.<br></br>
                    Vous pouvez également privatiser votre terrasse aérienne.
              </p>
            </div>
        </div>
        <div className="parc-layout">
          <div className="textback">
          <h2 className="home-title">Le plan du Parc</h2>
          <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
            <p className="text-parc">Atout branches vous acceuil dans le Parc naturel du Gâtinais français
            </p>
            <p className="text-parc">Voici le plan du Parc pour vous repérer!
            </p>
            <img className="img-fluid" src={PhotoMap} alt="Carte de Milly-la-Forêt"/>
          </div>
        </div>
        <div className="parc-layout">
            <div className="textback">
              <h2 className="home-title">Nos Engagements</h2>
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
