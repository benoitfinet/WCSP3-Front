import React, { Component } from 'react';
import Activiteselect from './Activiteselect';
import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';

import Photo1 from '../../img/photos atout branches/laser game.jpeg';
import Photo2 from '../../img/photos atout branches/parcours.jpg';
import Photo3 from '../../img/photos atout branches/parcours2.JPG';
import Photo4 from '../../img/photos atout branches/escalade.jpeg';
import Photo5 from '../../img/photos atout branches/team.JPG';
import Photo6 from '../../img/photos atout branches/tyro.jpg';

import './Activites.css';

const LaserGame = () =>
  <div>
    <h1 className="h1activite">Laser Game</h1>
    <div className="textback">
      <p className="textactivites">A partir de 7 ans, de 6 à 20 personnes, le laser game est devenu à la mode en raison de son côté ludique, stratégique et divertissant, le laser Game est
        un jeu dans lequel deux équipes de joueurs ou unités s’affrontent dans une simulation de tir. Au travers différents scénarios, l’idée est de marquer le maximum
        de points en touchant les adversaires.
        Muni d’une arme laser et d’un plastron, le laser Game est une activité sportive 100% sécu.
      </p>
    </div>
    <img alt="photo" className="photoactivite" src={Photo1}></img>
  </div>;

const Orientation = () =>
  <div>
    <h1 className="h1activite">Les courses d'orientation</h1>
    <div className="textback">
      <p className="textactivites">Nous vous proposons deux chasses aux trésors sous la forme de courses d'orientation pédagogiques autour des thèmes de la faune, la flore et de notre patrimoine.
        Une carte spéciale d’orientation, une boussole et c’est parti pour une activité sportive de plein air, un défi mental praticable par tous ou il faudra se diriger d’une balise à une autre.
        Seul, en groupe ou en famille, des enfants aux vétérans, tout le monde trouvera son bonheur, celui de se promener en pleine nature, découvrir son territoire, trouver les balises, ou courir le plus vite possible sur un parcours adapté.
      </p>
    </div>
    <img alt="photo" className="photoactivite" src={Photo2}></img>
  </div>;

const AltiSpider = () =>
  <div>
    <h1 className="h1activite">Alti'Spider</h1>
    <div className="textback">
      <p className="textactivites">Enfants à partir de 4 ans. Cette activité sans baudrier permet de se déplacer en toute sécurité sur des filets géants telle une toile d’araignée.
      </p>
    </div>
    <img alt="photo" className="photoactivite" src={Photo3}></img>
  </div>;

const Escalade = () =>
  <div>
    <h1 className="h1activite">Les murs d'escalade</h1>
    <div className="textback">
      <p className="textactivites">A partir de 4 ans. Equipés du système d’assurage Trublue®, Deux murs d’escalades sont à votre disposition.
        Un mur enfant d’une hauteur de 10 mètres et un mur adulte d’une hauteur de 15 mètres.
        une expérience de grimpe unique pour tous qui s’adapte aux différents niveaux de pratique en intégrant une valeur ancestrale de l’escalade, le dépassement de soi.
      </p>
    </div>
    <img alt="photo" className="photoactivite" src={Photo4}></img>
  </div>;

const AireDeJeux = () =>
  <div>
    <h1 className="h1activite">L'aire de jeux des piou-piou</h1>
    <div className="textback">
    <p className="textactivites">Enfants de 2 à 6 ans. Les enfants, tout comme les adultes, ont besoin de lâcher prise et de s'amuser, bouger et jouer avec d'autres enfants. Notre aire de jeux est un lieu idéal pour ça. Riche en activités, elle permet de grimper, de sauter, de glisser, de faire des parcours et de relever de nouveaux défis.
      Amusement et la rigolade seront aux rendez-vous à travers la pratiquer une vraie activité sportive où les enfants se dépensent. L'activité physique est réelle et elle est un vrai atout pour leur santé. Au-delà du bien-être mental, c'est également le bien-être physique qui est amélioré.
      Les parents aussi y trouvent leur bonheur, allant parfois même jusqu'à s'amuser eux aussi.
      Nos jeux : Un parcours acrobatique d’initiation sans baudrier, un Alti’spider, des tyroliennes, des jeux…
    </p>
    </div>
    <img alt="photo" className="photoactivite" src={Photo5}></img>
  </div>;

const Parcours = () =>
  <div>
    <h1 className="h1activite">Les parcours acrobatique en hauteur</h1>
    <div className="textback">
    <p className="textactivites">Le parcours acrobatiques en hauteur est une activité qui consiste à se balader d’arbre en arbre au travers de différents obstacles plus fun les uns que les autres. Cette activité est adaptée pour tous les âges puisque le parc Alti’Max propose plusieurs parcours avec 100 ateliers spécifiquement conçus pour des âges différents.
      Nos 9 parcours sont adaptés en hauteur et difficultés en fonction de l’âge et de la taille des pratiquants.
      Nos parcours accrobranches sont régis par une réglementation dite de « pratique en autonomie surveillée », c’est-à-dire que l’activité n’est pas encadrée individuellement.
      Après une initiation obligatoire sur l’utilisation du matériel et l’application des règles de sécurité, vous évoluez en autonomie dans les arbres, à votre rythme, sous la surveillance générale de nos opérateurs qui interviennent en cas de difficulté majeure.
      Pour plus de confort pensez à apporter une paire de gant type cycliste. Notre parc en propose à la vente (2€ la paire).
      <br></br>- 1 PARCOUR TOUT PETIT JAUNE : PITCHOUNE : Enfant de moins de 3 ans, hauteur maximum de 50 cm, sans ligne de vie continue. (aire de jeux pioupiou)
      <br></br>- 3 PARCOURS JAUNES : OUISTITI – LUTIN - PIOU PIOU : Public à partir de 3 ans, taille 1 mètre.
      Ce sont des parcours à hauteur d’homme (moins de 1,5 mètre) afin que les parents puissent suivre l’évolution de leurs enfants à chaque instant avec la possibilité de les aider.
      <br></br>- 2 PARCOURS VERTS : DECOUVERTE - FAMILLE : Public à partir de 6 ans, taille 1,2 mètre.
      Parcours plus aérien d’une hauteur d’évolution d’ateliers comprises entre 2 et 4 mètres comportant des difficultés progressives.
      <br></br>- 2 PARCOURS BLEUS : TYRO – AVENTURIER : Public à partir de 14 ans, d’une taille 1,4 mètre.
      Parcours aérien et technique d’une hauteur d’évolution d’ateliers comprises entre 3 et 8 mètres.
      <br></br>- 1 PARCOURS ROUGE ET VARIANTE NOIR : ADRENALINE : Public à partir de 14 ans, taille 1,6 mètre.
      Parcours aérien et plus technique d’une hauteur d’évolution d’ateliers comprises entre 5 et 15 mètres.
    </p>
    </div>
    <img alt="photo" className="photoactivite" src={Photo6}></img>
  </div>;

const Error = () => (
  <p>
    Something went <strong>wrong</strong>!
  </p>
);

class Activites extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeId: 'lasergame'
    };
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  handleChangeTab (event) {
    const buttonId = event.target.id;
    this.setState({ activeId: buttonId });
  }

  getTabContent () {
    switch (this.state.activeId) {
      case 'lasergame':
        return <LaserGame />;
      case 'orientation':
        return <Orientation />;
      case 'altispider':
        return <AltiSpider />;
      case 'escalade':
        return <Escalade />;
      case 'airedejeux':
        return <AireDeJeux />;
      case 'parcours':
        return <Parcours />;
      default:
        return <Error />;
    }
  }

  render () {
    return (
      <div>
        <Navbar />
        <div className="Activites">
          <div className="Activitespadding">
          <Activiteselect
            active={this.state.activeId}
            handleChangeTab={this.handleChangeTab}
          />
          <div className="Activites-content">{this.getTabContent()}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Activites;
