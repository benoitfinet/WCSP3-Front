import React from 'react';

import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';

import './RulesPages.css';

class Politique extends React.Component {
  state = {
    infos: []
  };

  getinfo = () => {
    fetch('http://localhost:5000/info')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          infos: data
        });
      });
  };

  componentDidMount () {
    this.getinfo();
  }

  render () {
    const { infos } = this.state;
    return (
    <div>
        <Navbar title="Politique de confidentialité"/>
        <div className="pagesBody">
            <div className="pagesContent">
            {infos.length !== 0 && infos[1].description}
            </div>
        </div>
        <Footer />
    </div>
    );
  }
}
export default Politique;
