import './Button.css';

import './Textparc.css';

function Textparc () {
  return (
        <div className="block-text-parc">
            <h2 className="home-title">Atout branches</h2>
            <h3 className="home-subtitle">Au coeur du Parc naturel régional du Gâtinais français</h3>
            <p className="home-para">Atout Branches est un parc d’activités de loisirs ludo sportives situé à Milly la Forêt au cœur du Parc Naturel Régional du Gâtinais Français, véritable poumon vert au sud de l’Ile-de-France.<br/>
              Nous accueillons petits et grands pour une journée inoubliables sur les thèmes sports, nature, sensations et réflexions.<br/>
              Venez-vous ressourcer dans ce cadre magnifique et réveiller vos sens, les activités que nous vous proposons sont imaginés de manière à s’adapter à tout le monde et dans le respect de la nature et de notre eco system.<br/>
              Une buvette, aires de repos et pique-nique et un chalet sanitaire sont à votre disposition.</p>
            <div className="block-ouverture">
              <h3>Nouveau propriétaire !</h3>
              <h4> Ouverture du parc saison 2021 le samedi 17 avril </h4>
            </div>
            <button className="button"><a href="/Parc" className="parc-link">Découvrir le parc</a></button>
        </div>
  );
}

export default Textparc;
