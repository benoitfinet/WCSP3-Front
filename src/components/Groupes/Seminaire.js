import React, { Component } from 'react';

class Tresors extends Component {
  state = {
    groupes: []
  };

  getHome = () => {
    fetch('http://localhost:5000/groupes/')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          groupes: data
        });
      });
  };

  componentDidMount () {
    this.getHome();
  }

  render () {
    const { groupes } = this.state;
    return (
      <div>
        <h1 className="title-framing">{groupes.length !== 0 && groupes[3].title}</h1>
        <div className="trait_et_rond">
          <div className="trait"></div>
          <div className="rond_bleu"></div>
        </div>
        <div className="block-img-para">
          <img alt="photo" className="photoactivite" src={groupes.length !== 0 && groupes[3].image}></img>
          <p className="textactivites">{groupes.length !== 0 && groupes[3].text}</p>
        </div>
      </div>
    );
  }
}

export default Tresors;
