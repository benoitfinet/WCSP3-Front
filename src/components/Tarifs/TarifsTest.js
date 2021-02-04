import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TarifsSelect from './TarifsSelect';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import Navbar from '../Nav/Navbar';
import PhotoBanner from '../Nav/img/backgroundtarifs.jpg';

import './Tarifs.css';

const TarifsIndividuels = () =>
<div>
              <h1 className="title-tarif">Tarifs individuels</h1>
              <div className="trait_et_rond">
                <div className="trait"></div>
                <div className="rond_bleu"></div>
              </div>
              <h2 className="secondary-title">Parcours acrobatiques en hauteur</h2>
              <table>
                <tr>
                  <td><span className="head-title">Pitchoun</span><br/>Enfant de 2 à 5 ans<br/>Parcours Piccolo, Pitchoun et Colibri</td>
                  <td>11,00€</td>
                </tr>
                <tr>
                  <td><span className="head-title">Oustiti</span><br/>Enfant de 2 à 7 ans, la taille requise pour le ouistiti est de 1m<br/>Parcours Picolo, Pitchoun, Colibri et Ouistiti</td>
                  <td>15,00€</td>
                </tr>
                <tr>
                  <td><span className="head-title">Enfant</span><br/>De 4 à 7 ans Taille requise : 1m20 et 1,40 pour le bleu<br/>Parcours Pitchoun, Colibri, Ouistiti, vert, jaune, bleu</td>
                  <td>16,00€</td>
                </tr>
                <tr>
                  <td><span className="head-title">Junior</span><br/>- de 15 ans et + de 1m40<br/>Parcours vert, jaune, bleu, rouge 1 et 2</td>
                  <td>19,00€</td>
                </tr>
                <tr>
                  <td><span className="head-title">Aulte</span><br/>+ de 15 ans<br/>Parcours vert, jaune, bleu, rouge 1 et 2, panoramique, noir et Ebene</td>
                  <td>25,00€</td>
                </tr>
                <tr>
                  <td><span className="head-title">Nocturne</span><br/>À partir de 10 ans</td>
                  <td>30,00€</td>
                </tr>
              </table>
              <h2 className="secondary-title">FORESCAPE - ESCAPE GAME</h2>
                <div className="para-tarifs">
                  <p>Une aventure ludique et sportive qui fera appel à toute votre ingéniosité.</p>
                  <p>90 € la séance pour un groupe jusqu'à 8 joueurs</p>
                </div>
              <h2 className="secondary-title">PARCOURS D'ENIGMES AU SOL</h2>
                <div className="para-tarifs">
                  <p>Jeu d'orientation dans les chemins du parc. Plusieurs Thèmes</p>
                  <p>20 € le livret de jeu pour jouer seul ou en groupe.</p>
                </div>
              <h2 className="secondary-title">CHASSE AU TRESOR</h2>
                <div className="para-tarifs">
                  <p>Retrouvez les coffres forts cachés dans le parc pour reconstituer la clé du mystère.</p>
                  <p>15 € le jeu pour jouer seul ou en groupe.</p>
                </div>
              <h2 className="secondary-title">LASER GAME NOUVEAUTE 2021</h2>
                <div className="para-tarifs">
                  <p>A partir de 7 ans</p>
                  <p>De 8 à 20 personnes</p>
                  <p>15€ de l'heure</p>
                </div>
              <h2 className="secondary-title">ANNIVERSAIRE</h2>
                <div className="para-tarifs">
                  <p>A partir de 6 enfants minimum.</p>
                  <p>Formule avec goûter : Tarifs normale de l’entrée plus un supplément de 6 € par enfant dès 6 enfants et de 5 € par enfants dès 10 enfants.
                    Table réservé, gâteau au chocolat, bougies et fontaine, boissons au choix à confirmer sur place, un cornet de bonbons par enfant et tout le nécessaire au goûter + en cadeau, une entrée à tarif réduit de 50 % pour l’enfant qui a fêté son anniversaire et qui reviendra dans l’année.<br/><br/>
                    Formule sans goûter : Tarifs normale de l’entrée plus un supplément de 10 € table réservé + en cadeau, une entrée à tarif réduit de 50 % pour l’enfant qui a fêté son anniversaire et qui reviendra dans l’année.
                    vous êtes libre d’apporter ce que vous souhaitez.
                    Pour le paiement de l'acompte, rendez-vous sur l'onglet "billetterie en ligne "acompte anniversaire".
                    Le reste dû sera à payer sur le parc le jour de votre sortie (montant calculé sur le nombre d'enfants réellement présents le jour de l'anniversaire avec un minimum de 6 enfants).</p>
                </div>
              <h2 className="secondary-title">TERRASSES AERIENNES PRIVATIVES NOUVEAUTE 2021</h2>
              <div className="para-tarifs">
                <p>A partir de 30 euros la journée.</p>
              </div>
  </div>;

const TarifsGroupes = () =>
  <div>
    <h1 className="title-tarif">TARIFS GROUPE</h1>
              <div className="trait_et_rond">
                <div className="trait"></div>
                <div className="rond_bleu"></div>
              </div>
              <h2 className="secondary-title">TARIFS DE GROUPE à partir de 10 personnes</h2>
              <div className="para-tarifs">
                <p>10% sur le tarif de l’entrée, 72 heures à l’avance. Faite votre demande via le formulaire « tarifs de groupe ».</p>
              </div>
              <h2 className="secondary-title">CENTRES DE LOISIRS / SCOLAIRES - LE TEAM BUILDING / SEMINAIRE - LES COMITES D’ENTREPRISES / ASSOCIATIONS</h2>
              <div className="para-tarifs">
                <p>Nous consulter / faite votre demande via notre adresse mail : contact@atoutbranches.com (créer un lien)<br/><br/>
                  Paiement possible en espèces, Carte Bancaire, chèques, chèques vacances ANCV. <br/>
                  Merci de bien préremplir vos chèques vacances avant votre arrivée sur le parc.<br/>
                  Entrée gratuite pour les non pratiquants.<br/>
                  ICI Réservation en ligne conseillé. (créer un lien)<br/>
                </p>
              </div>
              <h2 className="secondary-title">TARIFS PACS MULTI ACTIVITES</h2>
              <div className="para-tarifs">
                <p>Pac 2 activités au choix : remise de 10% sur les deux activités.</p>
                <p>Pac 3 activités au choix : remise de 15% sur les trois activités.</p>
              </div>
  </div>;

const Error = () => (
  <p>
    Something went <strong>wrong</strong>!
  </p>
);

class TarifsTest extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeId: this.props.match.params.tarifs
    };
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  handleChangeTab (event) {
    const buttonId = event.target.id;
    this.setState({ activeId: buttonId });
  }

  getTabContent () {
    switch (this.state.activeId) {
      case 'tarifsIndividuels':
        return <TarifsIndividuels />;
      case 'tarifsGroupes':
        return <TarifsGroupes />;
      default:
        return <Error />;
    }
  }

  render () {
    console.log(this.props.match);
    return (
      <div>
        <Navbar imgbanner={PhotoBanner} textbanner="Tarifs" />
        <div className="Activites">
          <div className="Activitespadding">
          <div id="ancre-tarifs"></div>
          <TarifsSelect
            active={this.state.activeId}
            handleChangeTab={this.handleChangeTab}
          />
          <div className="Activites-content">{this.getTabContent()}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

TarifsTest.propTypes = {
  match: PropTypes.object,
  params: PropTypes.string
};

export default withRouter(TarifsTest);
