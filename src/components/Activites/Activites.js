import React, { Component } from 'react';

import Activiteselect from './Activiteselect';
import Footer from '../Footer/Footer';
import Parcours from './Parcours';
import Escape from './EscapeGame';
import PropTypes from 'prop-types';
import Chasse from './Escalade';
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

const ChasseAuMot = () => <Chasse />;

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
