import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import PropTypes from 'prop-types';

class TarifsSelect extends Component {
  render () {
    return (
      <div className="tarifs-select">
        <Link to="/Tarifs/tarifsIndividuels" id="tarifsIndividuels" className={this.props.active === 'tarifsIndividuels' ? 'Gpe-active' : 'unActive'}
        onClick={this.props.handleChangeTab}
        >
          Tarifs individuels
        </Link>
        <Link to="/Tarifs/tarifsGroupes" id="tarifsGroupes" className={this.props.active === 'tarifsGroupes' ? 'Gpe-active' : 'unActive'}
         onClick={this.props.handleChangeTab}
        >
          Tarifs de groupes
        </Link>
      </div>
    );
  }
}

TarifsSelect.propTypes = {
  handleChangeTab: PropTypes.string,
  active: PropTypes.string
};

export default TarifsSelect;
