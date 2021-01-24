import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Activiteselect extends Component {
  render () {
    return (
      <div className="Activiteselect">
        <button
          id="parcours-acrobatiques"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'parcours-acrobatiques' ? 'active' : ''}
        >
          Parcours acrobatiques en hauteur
        </button>
        <button
          id="escape-game"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'escape-game' ? 'active' : ''}
        >
          Escape game
        </button>
        <button
          id="parcours-enigmes"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'parcours-enigmes' ? 'active' : ''}
        >
          Parcours d'énigmes
        </button>
        <button
          id="chasse-tresor"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'chasse-tresor' ? 'active' : ''}
        >
          Chasse au trésor
        </button>
        <button
          id="atout-spider"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'atout-spider' ? 'active' : ''}
        >
          L'atour spider / Aire de jeux enfants
        </button>
        <button
          id="laser-game"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'laser-game' ? 'active' : ''}
        >
          Laser game
        </button>
        <button
          id="mur-escalade"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'mur-escalade' ? 'active' : ''}
        >
          Mur d'escalade
        </button>
      </div>
    );
  }
}

Activiteselect.propTypes = {
  handleChangeTab: PropTypes.string,
  active: PropTypes.string
};

export default Activiteselect;
