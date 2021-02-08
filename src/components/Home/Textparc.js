import React from 'react';

import './Button.css';

class Textparc extends React.Component {
  state = {
    homes: []
  };

  getHome = () => {
    fetch('http://localhost:5000/home/')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          homes: data
        });
      });
  };

  componentDidMount () {
    this.getHome();
  }

  render () {
    const { homes } = this.state;

    return (
        <div>
            <h2 className="home-title">{homes.length !== 0 && homes[0].title}</h2>
            <h3 className="home-subtitle">{homes.length !== 0 && homes[0].subtitle}</h3>
            <p className="home-para">{homes.length !== 0 && homes[0].text}</p>
            <div className="block-ouverture">
              <h3>{homes.length !== 0 && homes[13].title}</h3>
              <h4>{homes.length !== 0 && homes[13].subtitle}</h4>
            </div>
            <button className="button"><a href="/Parc" className="parc-link">Découvrir le parc</a></button>
        </div>
    );
  }
}
export default Textparc;
