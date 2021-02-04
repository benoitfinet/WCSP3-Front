import React, { Component } from 'react';

import Activiteselect from './Activiteselect';
import Footer from '../Footer/Footer';
import Parcours from './Parcours';
import Escape from './EscapeGame';
import PropTypes from 'prop-types';
import Navbar from '../Nav/Navbar';
import PhotoBanner from '../Nav/img/background-activite.jpg';

import './Activites.css';
import Enigmes from './Enigmes';
import Tresors from './Tresors';
import LaserGames from './LaserGame';

const ParcoursAcrobatiques = () => <Parcours />;
const EscapeGame = () => <Escape />;

const ParcoursEnigmes = () => <Enigmes />;

const ChasseTresor = () => <Tresors />;

const LaserGame = () => <LaserGames />;

const Error = () => (
  <p>
    Something went <strong>wrong</strong>!
  </p>
);

class Activites extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeId: this.props.match.params.activity
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
      default:
        return <Error />;
    }
  }

  render () {
    return (
      <div>
        <Navbar imgbanner={PhotoBanner} textbanner="Activités" />
        <div id="ancre"></div>
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

Activites.propTypes = {
  match: PropTypes.object,
  params: PropTypes.string
};

export default Activites;
