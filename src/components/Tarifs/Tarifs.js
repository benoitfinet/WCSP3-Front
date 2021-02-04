import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';

import './Tarifs.css';

import React, { Component } from 'react';

class Tarifs extends Component {
    state = {
      tarifs: []
    };

    getHome = () => {
      fetch('http://localhost:5000/tarifs/')
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            tarifs: data
          });
        });
    };

    componentDidMount () {
      this.getHome();
    }

    render () {
      const { tarifs } = this.state;
      return (
      <div className="tarif-page">
        <Navbar title="Tarifs"/>
        <div className="block-page-tarif">
        <h1 className="title-tarif">{tarifs.length !== 0 && tarifs[0].title}</h1>
        <div className="trait_et_rond">
          <div className="trait"></div>
          <div className="rond_bleu"></div>
        </div>
        <h2 className="secondary-title">{tarifs.length !== 0 && tarifs[1].title}</h2>
        <table>
          <tr>
            <td><span className="head-title">{tarifs.length !== 0 && tarifs[2].title}</span><br></br>{tarifs.length !== 0 && tarifs[2].text}</td>
            <td>{tarifs.length !== 0 && tarifs[2].price}</td>
          </tr>
          <tr>
          <td><span className="head-title">{tarifs.length !== 0 && tarifs[3].title}</span><br></br>{tarifs.length !== 0 && tarifs[3].text}</td>
            <td>{tarifs.length !== 0 && tarifs[3].price}</td>
          </tr>
          <tr>
          <td><span className="head-title">{tarifs.length !== 0 && tarifs[4].title}</span><br></br>{tarifs.length !== 0 && tarifs[4].text}</td>
            <td>{tarifs.length !== 0 && tarifs[4].price}</td>
          </tr>
          <tr>
          <td><span className="head-title">{tarifs.length !== 0 && tarifs[5].title}</span><br></br>{tarifs.length !== 0 && tarifs[5].text}</td>
            <td>{tarifs.length !== 0 && tarifs[5].price}</td>
          </tr>
          <tr>
          <td><span className="head-title">{tarifs.length !== 0 && tarifs[6].title}</span><br></br>{tarifs.length !== 0 && tarifs[6].text}</td>
            <td>{tarifs.length !== 0 && tarifs[6].price}</td>
          </tr>
          <tr>
          <td><span className="head-title">{tarifs.length !== 0 && tarifs[7].title}</span><br></br>{tarifs.length !== 0 && tarifs[7].text}</td>
            <td>{tarifs.length !== 0 && tarifs[6].price}</td>
          </tr>
        </table>
        <h2 className="secondary-title">{tarifs.length !== 0 && tarifs[8].title}</h2>
          <p>{tarifs.length !== 0 && tarifs[8].text}</p>
        <h2 className="secondary-title">{tarifs.length !== 0 && tarifs[9].title}</h2>
          <p>{tarifs.length !== 0 && tarifs[9].text}</p>
        <h2 className="secondary-title">{tarifs.length !== 0 && tarifs[10].title}</h2>
          <p>{tarifs.length !== 0 && tarifs[10].text}</p>
        <h2 className="secondary-title">{tarifs.length !== 0 && tarifs[11].title}</h2>
          <p>{tarifs.length !== 0 && tarifs[11].text}</p>
        <h2 className="secondary-title">{tarifs.length !== 0 && tarifs[12].title}</h2>
          <p>{tarifs.length !== 0 && tarifs[12].text}</p>
        <h2 className="secondary-title">{tarifs.length !== 0 && tarifs[13].title}</h2>
          <p>{tarifs.length !== 0 && tarifs[13].text}</p>
        <h2 className="secondary-title">{tarifs.length !== 0 && tarifs[14].title}</h2>
          <p>{tarifs.length !== 0 && tarifs[14].text}</p>
        <h2 className="secondary-title">{tarifs.length !== 0 && tarifs[15].title}</h2>
        <p>{tarifs.length !== 0 && tarifs[15].text}</p>
        <h1 className="title-tarif">{tarifs.length !== 0 && tarifs[16].title}</h1>
        <div className="trait_et_rond">
          <div className="trait"></div>
          <div className="rond_bleu"></div>
        </div>
        <h2 className="secondary-title">{tarifs.length !== 0 && tarifs[17].title}</h2>
        <p>{tarifs.length !== 0 && tarifs[17].text}</p>
        <h2 className="secondary-title">{tarifs.length !== 0 && tarifs[18].title}</h2>
        <p>{tarifs.length !== 0 && tarifs[18].text}
        </p>
        <h2 className="secondary-title">{tarifs.length !== 0 && tarifs[19].title}</h2>
        <p>{tarifs.length !== 0 && tarifs[19].text}</p>
        </div>
        <Footer />
      </div>
      );
    }
}

export default Tarifs;
