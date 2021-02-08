import React from 'react';

import Footer from '../Footer/Footer';
import Navbar from '../Nav/Navbar';
import ImgBanner from './img/IMAGE_4.jpg';

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
    <div id="ancre-politique"></div>
    <Navbar imgbanner={ImgBanner} textbanner="Politique de confidentialité" />
    <div className="pagesBody">
        <div className="pagesContent">
          <h3 className="title-reglement">{infos.length !== 0 && infos[1].description}</h3>
            <h3 className="title-reglement">{infos.length !== 0 && infos[23].description}</h3>
              <p className="para-reglement">
              {infos.length !== 0 && infos[23].subtitle}
              </p>
            <h3 className="title-reglement">{infos.length !== 0 && infos[24].description}</h3>
              <p className="para-reglement">{infos.length !== 0 && infos[24].subtitle}
              </p>
            <h3 className="title-reglement">{infos.length !== 0 && infos[25].description}</h3>
              <p className="para-reglement">{infos.length !== 0 && infos[25].subtitle}
              </p>
            <h3 className="title-reglement">{infos.length !== 0 && infos[26].description}</h3>
              <p className="para-reglement">{infos.length !== 0 && infos[26].subtitle}
              </p>
            <h3 className="title-reglement">{infos.length !== 0 && infos[27].description}</h3>
              <p className="para-reglement">{infos.length !== 0 && infos[27].subtitle}
              </p>
            <h3 className="title-reglement">{infos.length !== 0 && infos[28].description}</h3>
              <p className="para-reglement">{infos.length !== 0 && infos[28].subtitle}
              </p>
            <h3 className="title-reglement">{infos.length !== 0 && infos[29].description}</h3>
              <p className="para-reglement">{infos.length !== 0 && infos[29].subtitle}</p>
            <h3 className="title-reglement">{infos.length !== 0 && infos[30].description}</h3><br></br><br></br>
              <p className="para-reglement">{infos.length !== 0 && infos[30].subtitle}</p>
            <h3 className="title-reglement">{infos.length !== 0 && infos[31].description}</h3>
              <p className="para-reglement">{infos.length !== 0 && infos[31].subtitle}</p>
          </div>
        </div>
        <Footer />
    </div>
    );
  }
}
export default Politique;
