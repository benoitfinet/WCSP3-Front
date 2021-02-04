import React from 'react';
import Navbar from '../Nav/Navbar';
import Footer from '../Footer/Footer';
import PhotoBanner from '../Nav/img/background-activite.jpg';

import './Buvette.css';

class Buvette extends React.Component {
  render () {
    return (
      <div>
         <Navbar imgbanner={PhotoBanner} textbanner="Notre buvette" />
         <div className="Activites">
          <div className="Activitespadding">
            <div className="Activites-content">
              <div className="block-img-text">
                <img src={PhotoBanner} className="img-buvette" alt=""/>
                <p className="para-buvette">Après l'effort, le réconfort. Vous avez besoin de recharger les batteries.<br/>
                  Situé au cœur du parc, notre espace buvette et snacking ombragé n’est pas seulement réservé qu’aux pratiquants des activités. Nous vous attendrons avec plaisir pour une petite pause gourmande au niveau du chalet d’accueil/buvette.<br/>
                  Des aires de pique-nique avec des tables et bancs sont à votre disposition gratuitement.
                </p>
              </div>
            </div>
          </div>
          </div>
         <Footer />
      </div>
    );
  }
}

export default Buvette;
