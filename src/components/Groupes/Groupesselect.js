import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import PropTypes from 'prop-types';

class Activiteselect extends Component {
  render () {
    return (
      <div className="Activiteselect">
        <Link to="/groupes/familleAmis" id="familleAmis" className={this.props.active === 'familleAmis' ? 'active' : 'unActive'}
        onClick={this.props.handleChangeTab}
        >
          Familles / Amis
        </Link>
        <Link to="/groupes/anniversaires" id="anniversaires" className={this.props.active === 'anniversaires' ? 'active' : 'unActive'}
         onClick={this.props.handleChangeTab}
        >
          Anniversaires
        </Link>
        <Link to="/groupes/centreLoisirs" id="centreLoisirs" className={this.props.active === 'centreLoisirs' ? 'active' : 'unActive'}
         onClick={this.props.handleChangeTab}
        >
          Les centres de loisirs et scolaires
        </Link>
        <Link to="/groupes/teamBuilding" id="teamBuilding" className={this.props.active === 'teamBuilding' ? 'active' : 'unActive'}
         onClick={this.props.handleChangeTab}
        >
          Le team building / Séminaires
        </Link>
        <Link to="/groupes/comiteEntreprise" id="comiteEntreprise" className={this.props.active === 'comiteEntreprise' ? 'active' : 'unActive'}
         onClick={this.props.handleChangeTab}
        >
          Les comités d'entreprise et les associations
        </Link>
        <Link to="/groupes/EVG-EVJF" id="EVG-EVJF" className={this.props.active === 'EVG-EVJF' ? 'active' : 'unActive'}
         onClick={this.props.handleChangeTab}
        >
          EVG / EVJF
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
