import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';

import './Map.css';

import PhotoMap from '../../img/photos atout branches/parcours.jpg';

const Map = () => {
  return (
    <div>
      <Navbar />
        <div className="map-layout">
          <div className="textback">
            <h2 className="titles">La carte</h2>
            <p className="text-map">
              Atout branches vous acceuil dans le Parc naturel du Gâtinais français
            </p>
            <p className="text-map">
              Notre adresse : Route de Boutigny, 91490 Milly-la-Forêt
            </p>
            <img className="img-fluid" src={PhotoMap} alt="Carte de Milly-la-Forêt"/>
            <p className="text-map">
              Code + Google: CF38+CP Milly-la-Forêt
            </p>
            <p className="text-map">
              Coordonnées géographiques : 48.40365082524155, 2.466910482299927
            </p>
          </div>
      </div>
    <div className="map-layout">
      <div className="textback">
        <h2 className="titles">L’accès en voiture:</h2>
        <p className="text-map">A 1 H 30 de Lille par l’autoroute A 25 puis l’autoroute A 16 direction Calais/Boulogne sur mer.
          <br></br>
          A 1 H 30 d’Arras par l’autoroute A 26 puis N 42 à partir de Saint Omer, puis arrivé à BOULOGNE SUR MER prendre l’autoroute A 16 direction Calais.
          <br></br>
          A 2 H 15 de Bruxelles par l‘autoroute E 40/A 10 puis l’autoroute A 16 direction Calais /Boulogne sur mer.
          <br></br>
          A 2 H 30 de Paris par l’autoroute A 16 direction calais/ Amiens.
          <br></br>
          Pour accéder à nos appartements, depuis l’autoroute A 16 , prendre la sortie N°32 – Wimereux Sud.
          <br></br>
          Prenez la direction de Wimereux.
          <br></br>
          Au premier rond-point dans Wimereux, prenez la troisième route à droite (Avenue Foch). Allez tout droit sur 300 mètres. La rue des Anglais est une rue perpendiculaire. Tournez à gauche à l’avenue  de Calais, puis prenez la première à gauche.
          <br></br>
          La résidence  est dans une impasse menant à la digue.
        </p>
      </div>
    </div>
    <div className="map-layout">
      <div className="textback">
        <h2 className="titles">L’accès en train  et en bus :</h2>
        <p className="text-map">TGV jusqu’à la gare de Boulogne sur mer puis bus ou taxi jusqu’à Wimereux (2h38 depuis Paris, 1 h depuis Lille)
          TGV jusqu’à la gare de Calais puis trajet en autocar ou taxi jusqu’à Wimereux.
          <br></br>
          A partir des gares TGV de Boulogne ou Calais, TER jusqu’à la gare de Wimille-Wimereux . La gare est à 15 minutes de marche de nos appartements ou à 1 arrêt de bus.
          Il y a des lignes  de bus( www.marineo.fr) qui peuvent faire le lien entre le train et l’appartement depuis Boulogne sur mer mais aussi depuis la gare de wimereux .
          <br></br>
          Pour les infos et horaires consultez le site du TER Nord-Pas de Calais, le site de la SNCF pour les grandes lignes ou le site Trainline (bus ou train).

          Vous souhaitez venir en train ou Bus et visiter la côte: il y a la ligne de bus Oscar ( bus Haut de France) qui assure une ligne régulière sur la côte entre Calais et Boulogne sur Mer (vous pouvez ainsi visiter les Caps Gris nez et Blanc Nez, les villages côtiers… le tarif est de 1€.
          <br></br>
          voici le lien pour accèder aux arrêts et aux horaires: Bus oscar
        </p>
      </div>
    </div>
    <div className="map-layout">
      <div className="textback">
      <h2 className="titles">Info sur les places de parking</h2>
      <p className="text-map">Tous les parkings et emplacements autour de l’immeuble sont gratuits.
        <br></br>
        En été , il peut être difficile de se garer l’après midi aux alentours de l’immeuble car nous sommes à côté de la plage …mais avec de  la persévérance et en s’éloignant un peu de la mer, nous trouvons toujours de la place  🙂.
        <br></br>
        Hors saison estivale, il est  très facile de trouver des places de parkings à proximité de l’appartement.
      </p>
      </div>
    </div>
    <Footer />
  </div>
  );
};
export default Map;
