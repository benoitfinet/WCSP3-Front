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
          Familles / Amis
        </button>
        <button
          id="orientation"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'orientation' ? 'active' : ''}
        >
          Anniversaires
        </button>
        <button
          id="altispider"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'altispider' ? 'active' : ''}
        >
          Scolaires
        </button>
        <button
          id="escalade"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'escalade' ? 'active' : ''}
        >
          Séminaires
        </button>
        <button
          id="airedejeux"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'airedejeux' ? 'active' : ''}
        >
          CE / Assos
        </button>
        <button
          id="parcours"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'parcours' ? 'active' : ''}
        >
          EVG / EVJF
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
