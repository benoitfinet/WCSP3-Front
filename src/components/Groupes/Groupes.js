import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Groupesselect from './Groupesselect';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';

import Photo1 from '../../img/photos atout branches/laser game.jpeg';
import Photo2 from '../../img/photos atout branches/parcours.jpg';
import Photo3 from '../../img/photos atout branches/parcours2.JPG';
import Photo4 from '../../img/photos atout branches/escalade.jpeg';
import Photo5 from '../../img/photos atout branches/team.JPG';
import Photo6 from '../../img/photos atout branches/tyro.jpg';

import './Groupes.css';

const FamilleAmis = () =>
  <div>
    <h1 className="h1activite">En famille ou entre amis</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="textback">
      <p className="textactivites">En famille ou entre amis, les activités ludo-sportives que nous vous proposons vous apportent une diversité dans l’éveil et le développement des personnes.
        Elles développent l’équilibre entre le physique et le mental, Enseigne l'autonomie, Aiguise la prise de décision, Apprend à penser et à agir sous pression, Augmente le niveau de condition physique, Développe l'estime de soi.
        Ces qualités développées sont nécessaires au bien-être des personnes et éveil les sens indispensables pour un environnement bienveillant et favorable tout au long de la vie.
      </p>
    </div>
    <img alt="photo" className="photoactivite" src={Photo1}></img>
  </div>;

const Anniversaires = () =>
  <div>
    <h1 className="h1activite">Les anniversaires</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="textback">
      <p className="textactivites">Vous bénéficiez: <br></br><br></br>
        D’une réservation pour un minimum de 6 enfants et d’une prise en charge de votre groupe dès votre arrivée.
        D’une table privatisée qui vous est réservée pour une durée de 3h pour organiser l’anniversaire.
        Une prise en charge du groupe de l’accueil jusqu’à la fin du parcours d’initiation.
        Le groupe peut alors s’élancer sur les parcours dans les arbres pendant environ 1h30 - 2h.
        D’un carton d'invitation à remettre à vos amis. Ce carton vous permet de préciser la date, l’adresse et les consignes liées à notre activité.
        Une entrée est offerte pour un adulte (un parent ou un ami) pour chacune des formules.
        D’une entrée à 50% pour l’enfant qui a fêté son anniversaire et qui reviendra dans l’année.
        <br></br><br></br>
        Formule avec goûter : <br></br><br></br> Tarifs normale de l’entrée plus un supplément de 6 € par enfant dès 6 enfants et de 5 € par enfants dès 10 enfants.
        Table réservé, gâteau au chocolat, bougies et fontaine, boissons au choix à confirmer sur place, un cornet de bonbons par enfant et tout le nécessaire au goûter + en cadeau, une entrée à tarif réduit de 50 % pour l’enfant qui a fêté son anniversaire et qui reviendra dans l’année.
        <br></br><br></br>
        Formule sans goûter : <br></br><br></br> Tarifs normale de l’entrée plus un supplément de 10 € table réservé + en cadeau, une entrée à tarif réduit de 50 % pour l’enfant qui a fêté son anniversaire et qui reviendra dans l’année.
        vous êtes libre d’apporter ce que vous souhaitez.
        <br></br><br></br>
        Vous pouvez privatiser avec une supplément votre terrasse aérienne.
        <br></br><br></br>
        Pour réserver, rien de plus simple :
        Allez sur l'onglet "billetterie en ligne "acompte anniversaire".
        Votre réservation se fera directement en ligne en choisissant votre créneau.
        Pour le paiement de l'acompte, merci de régler directement via la plateforme de paiement en ligne à la suite de votre réservation (70€).
        Le reste dû sera à payer sur le parc le jour de votre sortie (montant calculé sur le nombre d'enfants réellement présents le jour de l'anniversaire avec un minimum de 6 enfants).
      </p>
    </div>
    <img alt="photo" className="photoactivite" src={Photo2}></img>
  </div>;

const CentreLoisir = () =>
  <div>
    <h1 className="h1activite">Les centres de loisirs / Scolaires</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="textback">
      <p className="textactivites">Activités pédagogiques demandées par les professeurs des écoles, elles permettent aux enfants d’agir, de s’exprimer, et de comprendre à travers les activités physique, d’adapter leurs déplacements à des environnements variés.
        Nous prioriserons leurs accès en semaine et les mercredis .
      </p>
    </div>
    <img alt="photo" className="photoactivite" src={Photo3}></img>
  </div>;

const TeamBuilding = () =>
  <div>
    <h1 className="h1activite">Le team building / Séminaires</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="textback">
      <p className="textactivites">Nous accueillons les Petites et Moyennes Entreprises pour une journée team-building ou séminaire en semaines.<br></br><br></br>
        Face aux succès et à la demande importante de la part des entreprises, de nombreuses variantes sont venues compléter les possibilités d’animations Team-building ou de séminaire.<br></br><br></br>
        Nos activités et nos parcours progressifs répondent à vos besoins de créativité, de coopération, d’émulation de groupe, de cohésion d’équipe, d’intégration de forces vives, de mobilisation et remotivation des troupes, et bien sûr de détente et de sensations fortes !
        <br></br><br></br>Mettez vos équipes en défi, organisation d'olympiades avec nos activités : Parcours acrobatiques en hauteur, Laser Game, Courses d’orientation, Murs d’escalade.
        Notre traiteur local vous propose différentes formules pour votre déjeuner : Apéritif dinatoire, cocktail, buffet.
      </p>
    </div>
    <img alt="photo" className="photoactivite" src={Photo4}></img>
  </div>;

const ComiteEntreprise = () =>
  <div>
    <h1 className="h1activite">Les comités d'entreprises / Associations</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="textback">
      <p className="textactivites">Mettez vos équipes en défi, organisation d'olympiades avec nos activités : Parcours acrobatiques en hauteur, Laser Game, Courses d’orientation, Murs d’escalade.
      <br></br><br></br>Notre traiteur local vous propose différentes formules pour votre déjeuner : Apéritif dinatoire, cocktail, buffet.
    </p>
    </div>
    <img alt="photo" className="photoactivite" src={Photo5}></img>
  </div>;

const EVG = () =>
  <div>
    <h1 className="h1activite">EVG / EVJF</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="textback">
      <p className="textactivites">Fêtez votre enterrement de vie de célibataire en pleine forêt.<br></br><br></br>
        Un(e) de vos proches se marie ? Enterrez sa vie de jeune fille ou de garçon au Parc Alti’Max pour passer une journée forte d’émotions !<br></br><br></br>
        A vous de choisir l'activité qui mettra le ou la futur(e) marié(e) au défi : Parcours acrobatiques en hauteur, Laser Game, Courses d’orientation, Murs d’escalade.<br></br><br></br>
        Alti’Max offrira au futur(e) marié(e) sa place d’accrobranche. En option, nous pouvons vous proposer du Champagne.
      </p>
    </div>
    <img alt="photo" className="photoactivite" src={Photo6}></img>
  </div>;

const Error = () => (
  <p>
    Something went <strong>wrong</strong>!
  </p>
);

class Groupes extends Component {
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
      case 'familleAmis':
        return <FamilleAmis />;
      case 'anniversaires':
        return <Anniversaires />;
      case 'centreLoisirs':
        return <CentreLoisir />;
      case 'teamBuilding':
        return <TeamBuilding />;
      case 'comiteEntreprise':
        return <ComiteEntreprise />;
      case 'EVG-EVJF':
        return <EVG />;
      default:
        return <Error />;
    }
  }

  render () {
    console.log(this.props.match);
    return (
      <div>
        <div className="Block-groupe">
        <div id="ancre"></div>
          <div className="Activitespadding">
            <Groupesselect
              active={this.state.activeId}
              handleChangeTab={this.handleChangeTab}
              />
            <div className="Activites-content">{this.getTabContent()}
          </div>
          </div>
        <Footer />
      </div>
      </div>
    );
  }
}

Groupes.propTypes = {
  match: PropTypes.object,
  params: PropTypes.string
};

export default withRouter(Groupes);
