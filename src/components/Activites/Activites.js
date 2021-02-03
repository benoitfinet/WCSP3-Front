import React, { Component } from 'react';
import Navbar from '../Nav/Navbar';

import Activiteselect from './Activiteselect';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import Photo1 from '../../img/photos atout branches/laser game.jpeg';
import Photo2 from '../../img/photos atout branches/parcours.jpg';
import Photo3 from '../../img/photos atout branches/parcours2.JPG';
import Photo4 from '../../img/photos atout branches/escalade.jpeg';
import Photo5 from '../../img/photos atout branches/team.JPG';
import Photo6 from '../../img/photos atout branches/tyro.jpg';

import PhotoBanner from '../Nav/img/background-activite.jpg';

import './Activites.css';

const ParcoursAcrobatiques = () =>
  <div>
    <h1 className="h1activite">Les parcours acrobatiques en hauteur</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="first-block-img-para">
        <img alt="photo" className="photoactivite" src={Photo1}></img>
        <p className="textactivites">Le parcours acrobatique en hauteur est une activité qui consiste à se balader d’arbre en arbre au travers de différents obstacles plus fun les uns que les autres. Cette activité est adaptée pour tous les âges puisque le parc Atout Branches propose plusieurs parcours avec plus de 100 ateliers spécifiquement conçus pour des âges différents.<br/>
            Vous atteindrez 18 mètres de hauteur au plus haut point du circuit Panoramique.<br/>
            Nos 12 parcours sont adaptés en hauteur et difficultés en fonction de l’âge et de la taille des pratiquants.<br/>
            Nos parcours accrobranches sont régis par une réglementation dite de « pratique en autonomie surveillée », c’est-à-dire que l’activité n’est pas encadrée individuellement.<br/>
            100 % ligne de vie continue, Atout Branches vous profitez des dernières innovations en matière de sécurité. Tous les circuits sont équipés d'une ligne de vie continue.<br/>
            Ce système élimine les erreurs de manipulations sur le parcours puisque l'un des connecteurs de votre équipement est accroché en permanence à la ligne de vie du début à la fin du parcours.<br/>
            Votre équipement est composé d'un harnais équipé de 2 longes de sécurité. Chacune de ces longes est terminée par un connecteur. Le premier est un mousqueton à virole de sureté le second est un crochet qui ne peut être décroché à la fin du parcours. Ce crochet spécial reste connecté dès le début du parcours et en permanence tout au long de celui-ci. Votre sécurité n'est plus dépendante de votre attention.<br/>
            Après une initiation obligatoire sur l’utilisation du matériel et l’application des règles de sécurité, vous évoluez en autonomie dans les arbres, à votre rythme, sous la surveillance générale de nos opérateurs qui interviennent en cas de difficulté majeure.<br/>
            Pour plus de confort pensez à apporter une paire de gant type cycliste. Notre parc en propose à la vente (2€ la paire, T5 jusqu’à T11).
        </p>
    </div>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="block-card">
    <div className="card-activite">
        <img alt="photo" className="photo-card" src={Photo1}></img>
        <h3 className="parcour-titre">Parcours PICCOLO</h3>
        <p>Tout près du sol, des obstacles à franchir et des situations d'équilibre pour les apprentis aventuriers.<br/><br/> Accessible de 2 à 5 ans.</p>
      </div>
      <div className="card-activite">
        <img alt="photo" className="photo-card" src={Photo2}></img>
        <h3 className="parcour-titre">Parcours PITCHOUN (NOUVEAUTE 2021)</h3>
        <p>Réveil tes sens et l’aventurier qui est en toi. Ce parcours d’initiation d’une hauteur d’environ 1 mètre t’apportera l’agilité nécessaire pour continuer l’aventure des parcours suivants. Les parents pourront t’aider dans ta progression.<br/><br/> Accessible de 3 à 7 ans.</p>
      </div>
      <div className="card-activite">
        <img alt="photo" className="photo-card" src={Photo3}></img>
        <h3 className="parcour-titre">Parcours COLIBRI</h3>
        <p>Une série de tyroliennes pour les tous petits.<br/><br/> Accessible de 2 à 7 ans.</p>
      </div>
      <div className="card-activite">
        <img alt="photo" className="photo-card" src={Photo4}></img>
        <h3 className="parcour-titre">Parcours OUISTITI</h3>
        <p>Avec une hauteur de 3 à 4 mètres, ce circuit est un vrai challenge pour les enfants. Des obstacles en hauteur pour développer concentration et équilibre.<br/><br/>Taille requise : 1m.<br/>Accessible de 4 à 7 ans.</p>
      </div>
      <div className="card-activite">
        <img alt="photo" className="photo-card" src={Photo5}></img>
        <h3 className="parcour-titre">Parcours VERT</h3>
        <p>De 3 à 5 mètres du sol, ce circuit s'adresse à tous les publics recherchant de nouvelles sensations. De l'adulte novice au jeune aventurier chacun y trouvera son plaisir.<br/><br/>Taille requise : 1m20.<br/>Accessible à partir de 7 ans.</p>
      </div>
      <div className="card-activite">
        <img alt="photo" className="photo-card" src={Photo1}></img>
        <h3 className="parcour-titre">Parcours JAUNE</h3>
        <p>Jusqu'à 5 mètres de hauteur, circuit ludique et un peu plus difficile que le circuit vert. Il mettra à l'épreuve de vos capacités d'équilibre.<br/><br/>Taille requise : 1m20.<br/>Accessible à partir de 7 ans.</p>
      </div>
      <div className="card-activite">
        <img alt="photo" className="photo-card" src={Photo2}></img>
        <h3 className="parcour-titre">Parcours BLEU</h3>
        <p>Jusqu'à 6 mètres de hauteur, circuit plus acrobatique que le vert et le jaune. Un bon échauffement avant d'attaquer le circuit rouge.<br/><br/>Taille requise : 1m30.</p>
      </div>
      <div className="card-activite">
        <img alt="photo" className="photo-card" src={Photo3}></img>
        <h3 className="parcour-titre">Parcours ROUGE n° 1 et n° 2 (NOUVEAUTE 2021)</h3>
        <p>De 4 à 11 mètres de haut, des sensations garanties avec la diversité des passages aériens. Un raccourci au milieu vous laissera le choix entre le circuit long ou court.<br/><br/>Taille requise : 1m40.</p>
      </div>
      <div className="card-activite">
        <img alt="photo" className="photo-card" src={Photo4}></img>
        <h3 className="parcour-titre">Parcours PANORAMIQUE</h3>
        <p>100% tyroliennes, le circuit le plus haut du parcours avec son perchoir à 18 mètres et une série de 8 tyroliennes pour survoler le parc.<br/><br/>Taille requise 1m40. ( accès possible aux enfants de 1m30 encadrés par 2 adultes)</p>
      </div>
      <div className="card-activite">
        <img alt="photo" className="photo-card" src={Photo5}></img>
        <h3 className="parcour-titre">Parcours NOIR</h3>
        <p>Seuls les plus téméraires oseront se mesurer au parcours noir, votre équilibre et vos capacités à surmonter la peur du vide seront mises à l'épreuve. Encore de grandes tyroliennes pour vous récompenser et pour finir un saut en chute libre.<br/><br/>Taille requise : 1m50.<br/>Accessible à partir de 15 ans.</p>
      </div>
      <div className="card-activite">
        <img alt="photo" className="photo-card" src={Photo1}></img>
        <h3 className="parcour-titre">Parcours EBENE</h3>
        <p>Circuit court mais qui vous demandera beaucoup de force dans les bras. Encore des émotions pour finir avec un saut de tarzan impressionnant.<br/><br/>Taille requise : 1m60<br/>Accessible à partir de 15 ans.</p>
      </div>
      <div className="card-activite">
        <img alt="photo" className="photo-card" src={Photo2}></img>
        <h3 className="parcour-titre">VERTIJUMP</h3>
        <p>Une attraction indépendante du parcours. Vous montez à 12 mètres pour un saut avec une chute libre de plusieurs mètres. Oserez sauter ?</p>
      </div>
      <div className="card-activite">
        <img alt="photo" className="photo-card" src={Photo3}></img>
        <h3 className="parcour-titre">LES NOCTURNES 2021</h3>
        <p>Découvrez des sensations nouvelles en effectuant les parcours dans l'obscurité.<br/>Séances spéciales les samedis : 29 Mai, 26 Juin, 24 Juillet, 21 Aout, 18 Septembre.<br/><br/>Conditions : Age minimum 10 ans, les mineurs doivent être accompagnés d'un adulte.<br/>Nombre de places limité - Réservation Obligatoire.<br/>ICI Réservation (créer un lien)</p>
      </div>
    </div>
  </div>;

const EscapeGame = () =>
  <div>
    <h1 className="h1activite">L'escape game</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="block-img-para">
      <img alt="photo" className="photoactivite" src={Photo2}></img>
      <p className="textactivites">Un ESCAPE GAME 100% naturel, saurez-vous trouver le refuge et y entrer vous avez 1h pour cela.Fouillez la forêt à la recherche des objets indispensables pour trouver et déverrouiller la porte d'accès.Le jeu se déroule uniquement au sol et s'adresse à tous, adultes et enfants à partir de 10 ansNous conseillons de constituer une équipe de 3 à 6 joueurs.<br/>Une aventure ludique et sportive qui fera appel à toute votre ingéniosité.<br/>Réservation téléphonique ou par mail obligatoire par avance.</p>
    </div>
  </div>;

const ParcoursEnigmes = () =>
  <div>
    <h1 className="h1activite">Parcours d'énigmes</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="block-img-para">
      <img alt="photo" className="photoactivite" src={Photo3}></img>
      <p className="textactivites">Testez vos capacités d'orientation et votre perspicacité avec les parcours d'énigmes
        Un livret de jeu vous donne toutes les instructions pour parcourir la forêt en résolvant les énigmes.
        Idéal pour jouer en groupes jusqu'à 5 personnes par groupe
        Très apprécié pour les anniversaires.
      </p>
    </div>
  </div>;

const ChasseTresor = () =>
  <div>
    <h1 className="h1activite">La chasse au trésor</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="block-img-para">
      <img alt="photo" className="photoactivite" src={Photo4}></img>
      <p className="textactivites">La chasse au trésor qui fait appel votre maitrise de l'orientation.
        Retrouvez les coffres forts cachés dans le parc pour reconstituer la clé du mystère.
        Idéal pour jouer en groupes pour compléter les anniversaires par exemple.
        Nous mettons un coffre à votre disposition si vous souhaitez prévoir des récompenses pour les participants
      </p>
    </div>
  </div>;

const AireDeJeux = () =>
  <div>
    <h1 className="h1activite">L'atout spider / L'aire de jeux enfants</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="block-img-para">
      <img alt="photo" className="photoactivite" src={Photo5}></img>
      <p className="textactivites">Cette activité sans baudrier, l’Atout Spider permet de se déplacer et jouer en toute sécurité sur un filet géant telle une toile d’araignée. Vous retrouverez autour de l’Atout spider différents jeux pour vos enfants (tyrolienne, slackline, Ninja Warrior)<br/>Enfants à partir de 4 ans et jusqu’à 12 ans.
    </p>
    </div>
  </div>;

const LaserGame = () =>
  <div>
    <h1 className="h1activite">Le laser game</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="block-img-para">
      <img alt="photo" className="photoactivite" src={Photo6}></img>
      <p className="textactivites">Le laser game est devenu à la mode en raison de son côté ludique, stratégique et divertissant, le laser Game est un jeu dans lequel deux équipes de joueurs ou unités s’affrontent dans une simulation de tir. Au travers différents scénarios, l’idée est de marquer le maximum de points en touchant les adversaires.Muni d’une arme laser et d’un plastron, le laser Game est une activité sportive 100% sécu.<br/> A partir de 7 ans, de 6 à 20 personnes,<br/>Réservation téléphonique ou par mail obligatoire par avance.</p>
    </div>
  </div>;

const MurEscalade = () =>
<div>
  <h1 className="h1activite">Les murs d'escalade</h1>
  <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
  <div className="block-img-para">
    <img alt="photo" className="photoactivite" src={Photo6}></img>
    <p className="textactivites">Équipés du système d’assurage Trublue® et de votre baudrier, Deux murs d’escalades sont à votre disposition. Un mur enfant d’une hauteur de 7 mètres et un mur adulte d’une hauteur de 12 mètres vous attendent pour un défi vertical. Une expérience de grimpe unique pour tous qui s’adapte aux différents niveaux de pratique en intégrant une valeur ancestrale de l’escalade, le dépassement de soi.<br/>A partir de 4 ans.</p>
  </div>
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
      activeId: this.props.match.params.activity
    };
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  handleChangeTab (event) {
    const buttonId = event.target.id;
    this.setState({ activeId: buttonId });
  }

  getTabContent () {
    switch (this.state.activeId) {
      case 'parcours-acrobatiques':
        return <ParcoursAcrobatiques />;
      case 'escape-game':
        return <EscapeGame />;
      case 'parcours-enigme':
        return <ParcoursEnigmes />;
      case 'chasse-tresor':
        return <ChasseTresor />;
      case 'spider-filet':
        return <AireDeJeux />;
      case 'laser-game':
        return <LaserGame />;
      case 'murs-escalade':
        return <MurEscalade />;
      default:
        return <Error />;
    }
  }

  render () {
    return (
      <div>
        <Navbar imgbanner={PhotoBanner} />
        <div id="ancre"></div>
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

Activites.propTypes = {
  match: PropTypes.object,
  params: PropTypes.string
};

export default Activites;
