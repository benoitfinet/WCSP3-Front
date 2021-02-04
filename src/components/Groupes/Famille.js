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
    <h1 className="h1activite">{groupes.length !== 0 && groupes[0].title}</h1>
    <div className="textback">
      <p className="textactivites">{groupes.length !== 0 && groupes[0].text}
      </p>
    </div>
    <img alt="photo" className="photoactivite" src={groupes.length !== 0 && groupes[0].image}></img>
  </div>
      );
    }
}

export default Tresors;
