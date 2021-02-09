import React from 'react';

import Footer from '../Footer/Footer';
import Navbar from '../Nav/Navbar';

import './RulesPages.css';

class Mentions extends React.Component {
  state = {
    infos: []
  };

  getInfo = () => {
    fetch('http://localhost:5000/info/')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          infos: data
        });
      });
  };

  componentDidMount () {
    this.getInfo();
  }

  render () {
    const { infos } = this.state;

    return (
    <div>
      <div id="ancre-mentions"></div>
      <Navbar imgbanner={infos.length !== 0 && infos[32].image} textbanner="Mentions légales" />
      <div className="pagesBody">
        <div className="pagesContent">
          <h3 className="title-reglement">{infos.length !== 0 && infos[12].description}</h3>
            <p className="para-reglement">{infos.length !== 0 && infos[12].subtitle}
            </p>
          <h3 className="title-reglement">{infos.length !== 0 && infos[13].description}</h3>
            <p className="para-reglement">{infos.length !== 0 && infos[13].subtitle}
            </p>
          <h3 className="title-reglement">{infos.length !== 0 && infos[14].description}</h3>
            <p className="para-reglement">{infos.length !== 0 && infos[14].subtitle}
            </p>
          <h3 className="title-reglement">{infos.length !== 0 && infos[15].description}</h3>
            <p className="para-reglement">{infos.length !== 0 && infos[15].subtitle}</p>
          <h3 className="title-reglement">{infos.length !== 0 && infos[16].description}</h3>
            <p className="para-reglement">{infos.length !== 0 && infos[16].subtitle}</p>
          <h3 className="title-reglement">{infos.length !== 0 && infos[17].description}</h3>
            <p className="para-reglement">{infos.length !== 0 && infos[17].subtitle}
            </p>
          <h3 className="title-reglement">{infos.length !== 0 && infos[18].description}</h3>
            <p className="para-reglement">{infos.length !== 0 && infos[18].subtitle}</p>
          <h3 className="title-reglement">{infos.length !== 0 && infos[19].description}</h3>
            <p className="para-reglement">{infos.length !== 0 && infos[19].subtitle}</p>
          <h3 className="title-reglement">{infos.length !== 0 && infos[20].description}</h3>
            <p className="para-reglement">{infos.length !== 0 && infos[20].subtitle}</p>
          <h3 className="title-reglement">{infos.length !== 0 && infos[21].description}</h3>
            <p className="para-reglement">{infos.length !== 0 && infos[21].subtitle}</p>
          <h3 className="title-reglement">{infos.length !== 0 && infos[22].description}</h3>
            <p className="para-reglement">{infos.length !== 0 && infos[22].subtitle}</p>
        </div>
      </div>
      <Footer />
    </div>
    );
  }
}
export default Mentions;
