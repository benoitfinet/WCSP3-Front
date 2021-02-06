import Footer from '../Footer/Footer';
import './Map.css';
import Navbar from '../Nav/Navbar';
import PhotoBanner from '../Nav/img/12.jpeg';
import Panneau from './panneau.gif';

import PhotoMap from '../Home/ImgHome/map.png';

const Map = () => {
  return (
    <div>
       <Navbar imgbanner={PhotoBanner} textbanner="Nous trouver" />
        <div className="Activites">
          <div className="Activitespadding">
            <div className="Activites-content">
              <div id="ancre-plan-acces-park"></div>
              <h2 className="home-title">Où sommes-nous ?</h2>
              <div className="trait_et_rond">
                <div className="trait"></div>
                <div className="rond_bleu"></div>
              </div>
              <p className="text-map">
              Atout Branches vous accueil dans la forêt du Parc naturel régional du Gâtinais français sur la commune de Milly la Forêt.
              </p>
              <p className="text-map">
                Notre adresse : Route de Boutigny, 91490 Milly-la-Forêt
              </p>
              <a href="https://www.google.fr/maps/place/Atout+Branches/@48.3936706,2.4418254,13z/data=!4m5!3m4!1s0x47e5eaf727d334c5:0x9944747c258b3223!8m2!3d48.4086668!4d2.4491385" target="blank">
              <img className="img-fluid" src={PhotoMap} alt="Carte de Milly-la-Forêt"/>
              </a>
              <p className="text-map">
                Code + Google: CF38+CP Milly-la-Forêt
              </p>
              <p className="text-map">
                Coordonnées géographiques : 48.40365082524155, 2.466910482299927
              </p><br/><br/>
              <p className="text-map">
                A l'approche de Milly , suivre les panneaux panneau routier :<br/><br/>
                <img src={Panneau} alt=""/><br/><br/>
                Itinéraire détaillé :<br/>
- Depuis l'autoroute A6, prendre la sortie N°13<br/><br/>
Suivre la direction Milly-la-Forêt (7km). Au rond-point d'entrée à Milly prendre direction Étampes. Après 1km prendre à droite la D105 direction Boutigny. L'entrée du parc est à 500m à droite.
- Depuis Etampes, suivre la direction Milly-la-Forêt.<br/><br/>
Au 1er rond-point à l'entrée de Milly-la-Forêt, tourner à gauche direction Fontainebleau/A6. Après 800m prendre à gauche la D105 direction Boutigny. L'entrée du parc est à 500m à droite<br/><br/>
- Depuis Fontainebleau, suivre la direction Milly-la-Forêt.
Au 1er feu à l'entrée de Milly-la-Forêt, tourner à droite direction Étampes. Au 1er rond-point, traverser direction Boutigny/ Étampes. Après 1km prendre à droite la D105 direction Boutigny. L'entrée du parc est à 500m à droite.<br/><br/>
- Venir en covoiturage : Des covoiturages sont régulièrement proposés sur les sites de covoiturage. Vous réduirez vos frais de route, voyagerez écologique et vous ferez des heureux !<br/><br/>
- Pour venir en autocar, Obtenez rapidement votre devis personnalisé sur Autocar Location !<br/><br/>
- Petit groupe de 6 à 16 personnes, obtenez votre devis pour votre minibus avec chauffeur sur Location Minibus 8 places ou Location Minibus 16 places<br/><br/>
Nous contacter : contact@atoutbranches.com

                </p>
              </div>
              </div>
  </div>
  <Footer />
  </div>
  );
};
export default Map;
