import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';

class Activiteselect extends Component {
  render () {
    return (
      <div className="block-select-activities">
        <Link to="/Activites/parcours-acrobatiques" id="parcours-acrobatiques" className={this.props.active === 'parcours-acrobatiques' ? 'Gpe-active' : 'unActive'}
        onClick={this.props.handleChangeTab}
        >
          Parcours acrobatiques
        </Link>
        <Link to="/Activites/escape-game" id="escape-game" className={this.props.active === 'escape-game' ? 'Gpe-active' : 'unActive'}
        onClick={this.props.handleChangeTab}
        >
          Escape game
        </Link>
        <Link to="/Activites/parcours-enigme" id="parcours-enigme" className={this.props.active === 'parcours-enigme' ? 'Gpe-active' : 'unActive'}
        onClick={this.props.handleChangeTab}
        >
          Parcours d'énigmes
        </Link><br className="br-select"/>
        <Link to="/Activites/chasse-tresor" id="chasse-tresor" className={this.props.active === 'chasse-tresor' ? 'Gpe-active' : 'unActive'}
        onClick={this.props.handleChangeTab}
        >
          Chasse au trésor
        </Link>
        <Link to="/Activites/laser-game" id="laser-game" className={this.props.active === 'laser-game' ? 'Gpe-active' : 'unActive'}
        onClick={this.props.handleChangeTab}
        >
          Laser Game
        </Link>
        <Link to="/Activites/chasse-mot" id="chasse-mot" className={this.props.active === 'chasse-mot' ? 'Gpe-active' : 'unActive'}
        onClick={this.props.handleChangeTab}
        >
          Chasse au mot
        </Link>
      </div>
    );
  }
}

Activiteselect.propTypes = {
  handleChangeTab: PropTypes.string,
  active: PropTypes.string
};

export default Activiteselect;
