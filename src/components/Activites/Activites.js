import React, { Component } from 'react';

import Activiteselect from './Activiteselect';
import Footer from '../Footer/Footer';
import Parcours from './Parcours';
import Escape from './EscapeGame';
import PropTypes from 'prop-types';
import Photo3 from '../../img/11.jpeg';
import Navbar from '../Nav/Navbar';

import './Activites.css';
import Enigmes from './Enigmes';
import Tresors from './Tresors';
import LaserGames from './LaserGame';

const ParcoursAcrobatiques = () => <Parcours />;
const EscapeGame = () => <Escape />;

const ParcoursEnigmes = () => <Enigmes />;

const ChasseTresor = () => <Tresors />;

const LaserGame = () => <LaserGames />;

const ChasseAuMot = () =>
<div>
  <h1 className="h1activite">Chasse au mot</h1>
  <div className="trait_et_rond">
    <div className="trait"></div>
    <div className="rond_bleu"></div>
  </div>
  <div className="block-img-para">
    <img alt="photo" className="photoactivite" src={Photo3}></img>
    <div className="block-text-bouton">
      <p className="textactivites">Muni d'une carte, les enfants accompagné d'un adulte devront utiliser leur sens de l'orientation afin de rechercher dans le parc les endroits ou sont cachées des lettres afin de reconstituer un mots.
Nous vous proposons deux chasses au mot.
      </p>
      <button className="button"><a href="/Reservation" className="parc-link">Réservation</a></button>
    </div>
  </div>
</div>;

const Error = () => (
  <p>
    Something went <strong>wrong</strong>!
  </p>
);

class Activites extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeId: this.props.match.params.activity,
      photo: []
    };
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  handleChangeTab (event) {
    const buttonId = event.target.id;
    this.setState({ activeId: buttonId });
  }

  getTabContent () {
    switch (this.state.activeId) {
      case 'parcours-acrobatiques':
        return <ParcoursAcrobatiques />;
      case 'escape-game':
        return <EscapeGame />;
      case 'parcours-enigme':
        return <ParcoursEnigmes />;
      case 'chasse-tresor':
        return <ChasseTresor />;
      case 'laser-game':
        return <LaserGame />;
      case 'chasse-mot':
        return <ChasseAuMot />;
      default:
        return <Error />;
    }
  }

  getHome = () => {
    fetch('http://localhost:5000/photo/')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          photo: data
        });
      });
  };

  componentDidMount () {
    this.getHome();
  }

  render () {
    const { photo } = this.state;
    return (
      <div>
        <Navbar imgbanner={photo.length !== 0 && photo[0].location} textbanner="Activités" />
        <div id="ancre"></div>
         <div className="background-tree">
            <Activiteselect
              active={this.state.activeId}
              handleChangeTab={this.handleChangeTab}
            />
            <div className="activite-contenu">
              <div className="Activites-content">{this.getTabContent()}</div>
            </div>
         </div>
        <Footer />
      </div>
    );
  }
}

Activites.propTypes = {
  match: PropTypes.object,
  params: PropTypes.string
};

export default Activites;
