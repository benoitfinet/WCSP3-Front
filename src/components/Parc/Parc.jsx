import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import './Parc.css';
import Navbar from '../Nav/Navbar';

class Parc extends Component {
  state = {
    parc: []
  };

    getHome = () => {
      fetch('http://localhost:5000/parc/')
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            parc: data
          });
        });
    };

    componentDidMount () {
      this.getHome();
    }

    render () {
      const { parc } = this.state;
      return (
    <div>
        <Navbar imgbanner={parc.length !== 0 && parc[6].image} textbanner="Le parc" />
            <div className="Activites">
                  <div className="Activites-content">
                  <div className="Activitespadding">
                  <div className="block-img-text-buvette">
              <img className="img-buvette" src={parc.length !== 0 && parc[1].image} alt="Carte de Milly-la-Forêt"/>
              <p className="text-parc-buvette">{parc.length !== 0 && parc[0].text}<br/><br/>
              {parc.length !== 0 && parc[1].text} <a href={parc.length !== 0 && parc[5].image} target="blank">{parc.length !== 0 && parc[1].title}</a>
              </p>
            </div>
        </div>
        <div className="parc-layout">
          <div className="textback">
          <div className="parc-layout">
            <div className="textback">
              <h2 className="home-title">{parc.length !== 0 && parc[3].title}</h2>
              <div id="ancre-engagement"></div>
              <div id="ancre-engagement"></div>
              <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
              <p className="text-parc">{parc.length !== 0 && parc[3].text}
              </p>
            </div>
            <h2 className="home-title">{parc.length !== 0 && parc[2].title}</h2>
            <div id="ancre-buvette"></div>
          <div id="ancre-plan"></div>
          <div className="trait_et_rond">
            <div className="trait"></div>
            <div className="rond_bleu"></div>
          </div>
            <div className="block-img-text-buvette">
            <img className="img-buvette" src={parc.length !== 0 && parc[3].image} alt="Carte de Milly-la-Forêt"/>
            <p className="text-parc-buvette">{parc.length !== 0 && parc[2].text}<br/><br/>{parc.length !== 0 && parc[4].title} <a href={parc.length !== 0 && parc[2].image} target="blank">{parc.length !== 0 && parc[4].text}</a>
            </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    <Footer />
        </div>
      );
    }
}
export default Parc;
