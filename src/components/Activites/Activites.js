import React, { Component } from 'react';

import Activiteselect from './Activiteselect';
import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';
import Parcours from './Parcours';
import Escape from './EscapeGame';

import './Activites.css';
import Enigmes from './Enigmes';
import Tresors from './Tresors';
import AiresDeJeux from './AiresDejeux';
import LaserGames from './LaserGame';
import Escalade from './Escalade';

const ParcoursAcrobatiques = () => <Parcours />;
const EscapeGame = () => <Escape />;

const ParcoursEnigmes = () => <Enigmes />;

const ChasseTresor = () => <Tresors />;

const AireDeJeux = () => <AiresDeJeux />;

const LaserGame = () => <LaserGames />;

const MurEscalade = () => <Escalade />;

const Error = () => (
  <p>
    Something went <strong>wrong</strong>!
  </p>
);

class Activites extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeId: 'parcours-acrobatiques'
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
      case 'parcours-enigmes':
        return <ParcoursEnigmes />;
      case 'chasse-tresor':
        return <ChasseTresor />;
      case 'atout-spider':
        return <AireDeJeux />;
      case 'laser-game':
        return <LaserGame />;
      case 'mur-escalade':
        return <MurEscalade />;
      default:
        return <Error />;
    }
  }

  render () {
    return (
      <div>
        <Navbar title="Activités"/>
        <div className="Activites">
          <div className="Activitespadding">
          <Activiteselect
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

export default Activites;
