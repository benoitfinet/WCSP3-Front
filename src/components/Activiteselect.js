import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Activiteselect extends Component {
  render () {
    return (
      <div className="Activiteselect">
        <button
          id="lasergame"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'lasergame' ? 'active' : ''}
        >
          Laser game
        </button>
        <button
          id="orientation"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'orientation' ? 'active' : ''}
        >
          Orientation
        </button>
        <button
          id="altispider"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'altispider' ? 'active' : ''}
        >
          Alti'Spider
        </button>
        <button
          id="escalade"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'escalade' ? 'active' : ''}
        >
          Escalade
        </button>
        <button
          id="airedejeux"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'airedejeux' ? 'active' : ''}
        >
          Aire de jeux
        </button>
        <button
          id="parcours"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'parcours' ? 'active' : ''}
        >
          Parcours
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
