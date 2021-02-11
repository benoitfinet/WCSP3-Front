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
          <h1 className="title-framing">{groupes.length !== 0 && groupes[1].title}</h1>
          <div className="trait_et_rond">
            <div className="trait"></div>
            <div className="rond_bleu"></div>
          </div>
          <div className="block-img-para">
            <img alt="photo" className="photoactivite" src={groupes.length !== 0 && groupes[1].image}></img>
            <div className="block-text-button-gpes">
              <h2 className="title-birthday">{groupes.length !== 0 && groupes[6].text}</h2>
              <p className="textactivites">{groupes.length !== 0 && groupes[1].text}
              </p><br></br>
              <p>{groupes.length !== 0 && groupes[6].image} <a href={groupes.length !== 0 && groupes[1].image} target="blank">{groupes.length !== 0 && groupes[7].image}</a></p>
              <p>{groupes.length !== 0 && groupes[7].text}</p>
              <button className="button"><a href="/Reservation" className="parc-link">Reserver</a></button>
            </div>
          </div>
        </div>
      );
    }
}

export default Tresors;
