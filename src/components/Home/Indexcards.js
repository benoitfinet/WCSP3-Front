/* eslint-disable react/prop-types */
import 'semantic-ui-css/semantic.min.css';
import 'react-multi-carousel/lib/styles.css';
import UAParser from 'ua-parser-js';
import React, { Fragment } from 'react';
import Simple from './Cards';
import Section from './Section';
import './Indexcards.css';

class Indexcards extends React.Component {
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
    <div className="block-cards">
    <h2 className="home-title">{homes.length !== 0 && homes[2].title}</h2>
    <h3 className="home-subtitle">{homes.length !== 0 && homes[2].subtitle}</h3>
    <Fragment>
      <Section>
        <Simple deviceType={this.props.deviceType} />
      </Section>
    </Fragment>
    </div>
    <button className="button-cards">Découvrez toutes nos offres</button>
    </div>
    );
  }
}
Indexcards.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers['user-agent'];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || 'desktop';
  return { deviceType };
};
export default Indexcards;
