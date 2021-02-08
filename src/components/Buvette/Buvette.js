import React from 'react';
import Navbar from '../Nav/Navbar';
import Footer from '../Footer/Footer';
import PhotoBanner from '../Nav/img/background-activite.jpg';

import './Buvette.css';

class Buvette extends React.Component {
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
         <Navbar imgbanner={PhotoBanner} textbanner="Notre buvette" />
         <div className="Activites">
          <div className="Activitespadding">
            <div className="Activites-content">
              <div className="block-img-text">
                <img src={infos.length !== 0 && infos[11].image} className="img-buvette" alt=""/>
                <p className="para-buvette">{infos.length !== 0 && infos[11].subtitle}
                </p>
              </div>
            </div>
          </div>
          </div>
         <Footer />
      </div>
    );
  }
}

export default Buvette;
