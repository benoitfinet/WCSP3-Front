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
          <h1 className="title-framing">{activity.length !== 0 && activity[0].title}</h1>
          <div className="trait_et_rond">
            <div className="trait"></div>
            <div className="rond_bleu"></div>
          </div>
          <div className="first-block-img-para">
              <img alt="photo" className="photoactivite" src={activity.length !== 0 && activity[0].image}></img>
              <p className="textactivites">{activity.length !== 0 && activity[0].text}
              </p>
          </div>
          <div className="trait_et_rond">
            <div className="trait"></div>
            <div className="rond_bleu"></div>
          </div>
          <div className="block-card">
          <div className="card-activite">
              <img alt="photo" className="photo-card" src={activity.length !== 0 && activity[1].image}></img>
              <h3 className="parcour-titre">{activity.length !== 0 && activity[1].title}</h3>
              <p>{activity.length !== 0 && activity[1].text}</p>
            </div>
            <div className="card-activite">
              <img alt="photo" className="photo-card" src={activity.length !== 0 && activity[2].image}></img>
              <h3 className="parcour-titre">{activity.length !== 0 && activity[2].title}</h3>
              <p>{activity.length !== 0 && activity[2].text}</p>
            </div>
            <div className="card-activite">
              <img alt="photo" className="photo-card" src={activity.length !== 0 && activity[3].image}></img>
              <h3 className="parcour-titre">{activity.length !== 0 && activity[3].title}</h3>
              <p>{activity.length !== 0 && activity[3].text}</p>
            </div>
            <div className="card-activite">
              <img alt="photo" className="photo-card" src={activity.length !== 0 && activity[4].image}></img>
              <h3 className="parcour-titre">{activity.length !== 0 && activity[4].title}</h3>
              <p>{activity.length !== 0 && activity[4].text}</p>
            </div>
            <div className="card-activite">
              <img alt="photo" className="photo-card" src={activity.length !== 0 && activity[5].image}></img>
              <h3 className="parcour-titre">{activity.length !== 0 && activity[5].title}</h3>
              <p>{activity.length !== 0 && activity[5].text}</p>
            </div>
            <div className="card-activite">
              <img alt="photo" className="photo-card" src={activity.length !== 0 && activity[6].image}></img>
              <h3 className="parcour-titre">{activity.length !== 0 && activity[6].title}</h3>
              <p>{activity.length !== 0 && activity[6].text}</p>
            </div>
            <div className="card-activite">
              <img alt="photo" className="photo-card" src={activity.length !== 0 && activity[7].image}></img>
              <h3 className="parcour-titre">{activity.length !== 0 && activity[7].title}</h3>
              <p>{activity.length !== 0 && activity[7].text}</p>
            </div>
            <div className="card-activite">
              <img alt="photo" className="photo-card" src={activity.length !== 0 && activity[8].image}></img>
              <h3 className="parcour-titre">{activity.length !== 0 && activity[8].title}</h3>
              <p>{activity.length !== 0 && activity[8].text}</p>
            </div>
            <div className="card-activite">
              <img alt="photo" className="photo-card" src={activity.length !== 0 && activity[9].image}></img>
              <h3 className="parcour-titre">{activity.length !== 0 && activity[9].title}</h3>
              <p>{activity.length !== 0 && activity[9].text}</p>
            </div>
            <div className="card-activite">
              <img alt="photo" className="photo-card" src={activity.length !== 0 && activity[10].image}></img>
              <h3 className="parcour-titre">{activity.length !== 0 && activity[10].title}</h3>
              <p>{activity.length !== 0 && activity[10].text}</p>
            </div>
            <div className="card-activite">
              <img alt="photo" className="photo-card" src={activity.length !== 0 && activity[11].image}></img>
              <h3 className="parcour-titre">{activity.length !== 0 && activity[11].title}</h3>
              <p>{activity.length !== 0 && activity[11].text}</p>
            </div>
            <div className="card-activite">
              <img alt="photo" className="photo-card" src={activity.length !== 0 && activity[12].image}></img>
              <h3 className="parcour-titre">{activity.length !== 0 && activity[12].title}</h3>
              <p>{activity.length !== 0 && activity[12].text}</p>
            </div>
            <div className="card-activite">
              <img alt="photo" className="photo-card" src={activity.length !== 0 && activity[13].image}></img>
              <h3 className="parcour-titre">{activity.length !== 0 && activity[13].title}</h3>
              <p>{activity.length !== 0 && activity[13].text}</p>
            </div>
          </div>
        </div>
      );
    }
}

export default Parcours;
