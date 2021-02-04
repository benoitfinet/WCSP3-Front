import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Activiteselect extends Component {
  render () {
    return (
      <div className="Activiteselect">
        <button
          id="anniversaires"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'anniversaires' ? 'active' : ''}
        >
          Anniversaires
        </button>
        <button
          id="associations"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'associations' ? 'active' : ''}
        >
          CE / Assos
        </button>
        <button
          id="mariages"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'mariages' ? 'active' : ''}
        >
          EVG / EVJF
        </button>
        <button
          id="familles"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'familles' ? 'active' : ''}
        >
          Familles / Amis
        </button>
        <button
          id="ecoles"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'ecoles' ? 'active' : ''}
        >
          Scolaires
        </button>
        <button
          id="seminaires"
          onClick={this.props.handleChangeTab}
          className={this.props.active === 'seminaires' ? 'active' : ''}
        >
          Séminaires
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
