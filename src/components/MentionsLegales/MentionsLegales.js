import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './MentionsLegales.css';

class MentionsLegales extends React.Component {
  render () {
    return (
      <div className="background-color">
        <HashLink to="/Mentions#ancre-mentions">
          <p>Mentions legales</p>
        </HashLink>
        <HashLink to="/Politique#ancre-politique">
          <p>Politique de confidentialité</p>
        </HashLink>
      </div>
    );
  }
}

export default MentionsLegales;
