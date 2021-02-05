import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TarifsSelect from './TarifsSelect';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import Navbar from '../Nav/Navbar';
import TarifsIndivs from './TarifsIndiv';
import TarifsGroups from './TarifsGroups';

import './Tarifs.css';

const TarifsIndividuels = () => <TarifsIndivs/>;

const TarifsGroupes = () => <TarifsGroups />;

const Error = () => (
  <p>
    Something went <strong>wrong</strong>!
  </p>
);

class TarifsTest extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeId: this.props.match.params.tarifs,
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
      case 'tarifsIndividuels':
        return <TarifsIndividuels />;
      case 'tarifsGroupes':
        return <TarifsGroupes />;
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
        <Navbar imgbanner={photo.length !== 0 && photo[2].location} textbanner="Tarifs" />
        <div className="Activites">
          <div className="Activitespadding">
          <div id="ancre-tarifs"></div>
          <TarifsSelect
            active={this.state.activeId}
            handleChangeTab={this.handleChangeTab}
          />
          <div className="Activites-content">{this.getTabContent()}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

TarifsTest.propTypes = {
  match: PropTypes.object,
  params: PropTypes.string
};

export default withRouter(TarifsTest);
