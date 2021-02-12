import React from 'react';

import Footer from '../Footer/Footer';
import Navbar from '../Nav/Navbar';

import './RulesPages.css';

class Reglement extends React.Component {
  state = {
    infos: []
  };

  getInfo = () => {
    fetch('http://localhost:5000/info')
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
       <Navbar imgbanner={infos.length !== 0 && infos[34].image} textbanner="Reglement intérieur" />
        <div className="Activites">
          <div className="Activitespadding">
            <div className="Activites-content">
              <h3 className="title-reglement">{infos.length !== 0 && infos[2].description}</h3>
                <p className="para-reglement">
                {infos.length !== 0 && infos[2].subtitle}
                </p>
              <h3 className="title-reglement">{infos.length !== 0 && infos[4].description}</h3>
                <p className="para-reglement">
                {infos.length !== 0 && infos[4].subtitle}
                </p>
              <h3 className="title-reglement">{infos.length !== 0 && infos[5].description}</h3><br></br>
                <p className="para-reglement">
                {infos.length !== 0 && infos[5].subtitle}
                </p>
              <h3 className="title-reglement">{infos.length !== 0 && infos[6].description}</h3><br></br>
                <p className="para-reglement">
                {infos.length !== 0 && infos[6].subtitle}
                <br></br>
                </p>
                <img className="img-reglement" src={infos.length !== 0 && infos[6].image} />
                <p className="para-reglement">
                {infos.length !== 0 && infos[7].subtitle}
                </p>
                <h3 className="title-reglement">{infos.length !== 0 && infos[8].description}</h3>
                  <p className="para-reglement">
                  {infos.length !== 0 && infos[8].subtitle}
                  </p>
                <h3 className="title-reglement">{infos.length !== 0 && infos[9].description}</h3>
                  <p className="para-reglement">
                  {infos.length !== 0 && infos[9].subtitle}
                  </p>
                <h3 className="title-reglement">{infos.length !== 0 && infos[10].description}</h3>
                  <p className="para-reglement">
                  {infos.length !== 0 && infos[10].subtitle}
                  </p>
        </div>
        <Footer />
    </div></div></div>
    );
  }
}
export default Reglement;
