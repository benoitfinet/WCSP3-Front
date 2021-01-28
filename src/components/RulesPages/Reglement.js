import React from 'react';

import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';

import './RulesPages.css';

class Reglement extends React.Component {
  state = {
    infos: []
  };

  getUser = () => {
    fetch('http://localhost:5000/info')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          infos: data
        });
      });
  };

  componentDidMount () {
    this.getUser();
  }

  render () {
    const { infos } = this.state;

    return (
    <div>
        <Navbar title="Réglement intérieur"/>
        <div className="pagesBody">
            <div className="pagesContent">
            {infos.length !== 0 && infos[2].description}
            </div>
        </div>
        <Footer />
    </div>
    );
  }
}
export default Reglement;
