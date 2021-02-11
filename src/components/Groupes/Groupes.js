import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Groupesselect from './Groupesselect';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import Navbar from '../Nav/Navbar';

import Annivs from './Annivs';
import Assocs from './Assocs';
import EvgEvjf from './EvgEvjf';
import Famille from './Famille';
import Scolaires from './Scolaires';
import Seminaire from './Seminaire';

import './Groupes.css';
import '../CssGlobal/CssGlobal.css';

const Anniversaires = () => <Annivs />;

const ComiteEntreprise = () => <Assocs />;

const EVG = () => <EvgEvjf />;

const FamilleAmis = () => <Famille />;

const CentreLoisir = () => <Scolaires />;

const TeamBuilding = () => <Seminaire />;

const Error = () => (
  <p>
    Something went <strong>wrong</strong>!
  </p>
);

class Groupes extends Component {
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
      case 'familleAmis':
        return <FamilleAmis />;
      case 'anniversaires':
        return <Anniversaires />;
      case 'centreLoisirs':
        return <CentreLoisir />;
      case 'teamBuilding':
        return <TeamBuilding />;
      case 'comiteEntreprise':
        return <ComiteEntreprise />;
      case 'EVG-EVJF':
        return <EVG />;
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
        <Navbar imgbanner={photo.length !== 0 && photo[1].location} textbanner="Groupes" />
        <div id="ancre"></div>
        <div className="background-pages">
          <Groupesselect
            active={this.state.activeId}
            handleChangeTab={this.handleChangeTab}
          />
          <div className="content-framing">{this.getTabContent()}</div>
        </div>
      <Footer />
      </div>
    );
  }
}

Groupes.propTypes = {
  match: PropTypes.object,
  params: PropTypes.string
};

export default withRouter(Groupes);
