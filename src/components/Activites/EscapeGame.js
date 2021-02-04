import React, { Component } from 'react';

class Parcours extends Component {
    state = {
      activity: []
    };

    getHome = () => {
      fetch('http://localhost:5000/activity/')
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            activity: data
          });
        });
    };

    componentDidMount () {
      this.getHome();
    }

    render () {
      const { activity } = this.state;
      return (
        <div>
        <h1 className="h1activite">{activity.length !== 0 && activity[14].title}</h1>
        <div className="trait_et_rond">
          <div className="trait"></div>
          <div className="rond_bleu"></div>
        </div>
        <div className="block-img-para">
          <img alt="photo" className="photoactivite" src={activity.length !== 0 && activity[14].image}></img>
          <p className="textactivites">{activity.length !== 0 && activity[14].text}</p>
        </div>
      </div>
      );
    }
}

export default Parcours;
