import React, { Component } from 'react';

class TarifsGroupes extends Component {
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
      <div className="block-page-tarif">
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
    );
  }
}

export default TarifsGroupes;
