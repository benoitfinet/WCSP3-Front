import React, { Component } from 'react';
import Groupesselect from './Groupesselect';
import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';

import Annivs from './Annivs';
import Assocs from './Assocs';
import EvgEvjf from './EvgEvjf';
import Famille from './Famille';
import Scolaires from './Scolaires';
import Seminaire from './Seminaire';

import './Groupes.css';

const Anniversaires = () => <Annivs />;

const Associations = () => <Assocs />;

const Mariages = () => <EvgEvjf />;

const Familles = () => <Famille />;

const Ecoles = () => <Scolaires />;

const Seminaires = () => <Seminaire />;

const Error = () => (
  <p>
    Something went <strong>wrong</strong>!
  </p>
);

class Groupes extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeId: 'anniversaires'
    };
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  handleChangeTab (event) {
    const buttonId = event.target.id;
    this.setState({ activeId: buttonId });
  }

  getTabContent () {
    switch (this.state.activeId) {
      case 'anniversaires':
        return <Anniversaires />;
      case 'associations':
        return <Associations />;
      case 'mariages':
        return <Mariages />;
      case 'familles':
        return <Familles />;
      case 'ecoles':
        return <Ecoles />;
      case 'seminaires':
        return <Seminaires />;
      default:
        return <Error />;
    }
  }

  render () {
    return (
      <div>
        <Navbar title="Offres de groupes"/>
        <div className="Activites">
          <div className="Activitespadding">
            <Groupesselect
              active={this.state.activeId}
              handleChangeTab={this.handleChangeTab}
            />
            <div className="Activites-content">{this.getTabContent()}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Groupes;
