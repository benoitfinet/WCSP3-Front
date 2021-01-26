import 'semantic-ui-css/semantic.min.css';
import 'react-multi-carousel/lib/styles.css';
import UAParser from 'ua-parser-js';
import React, { Fragment } from 'react';
import Simple from './Cards';
import Section from './Section';
import './Indexcards.css';

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
// eslint-disable-next-line react/prop-types
const Indexcards = ({ deviceType }) => {
  return (
    <div>
    <div className="block-cards">
    <h2 className="home-title">Des offres pour tout publics</h2>
    <h3 className="home-subtitle">En famille, entre amis, entre collègues ...</h3>
    <Fragment>
      <Section>
        <Simple deviceType={deviceType} />
      </Section>
    </Fragment>
    </div>
    <button className="button-cards">Découvrez toutes nos offres</button>
    </div>
  );
};
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
