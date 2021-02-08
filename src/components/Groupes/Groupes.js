import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Groupesselect from './Groupesselect';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import Navbar from '../Nav/Navbar';
import PhotoBanner from '../Nav/img/13.jpeg';

import carteAnniversaire from './img/carte-anniversaire.pdf';
import Photo1 from '../../img/9.jpeg';
import Photo2 from '../../img/10.jpeg';
import Photo3 from '../../img/11.jpeg';
import Photo4 from '../../img/12.jpeg';
import Photo5 from '../../img/13.jpeg';
import Photo6 from '../../img/14.jpeg';

import './Groupes.css';

const FamilleAmis = () =>
  <div>
    <h1 className="h1activite">En famille ou entre amis</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="block-img-para">
      <img alt="photo" className="photoactivite" src={Photo1}></img>
      <div className="block-text-bouton">
        <p className="textactivites">En famille ou entre amis, les activités ludo-sportives que nous vous proposons vous apportent une diversité dans l’éveil et le développement des personnes.
          Elles développent l’équilibre entre le physique et le mental, Enseigne l'autonomie, Aiguise la prise de décision, Apprend à penser et à agir sous pression, Augmente le niveau de condition physique, Développe l'estime de soi.
          Ces qualités développées sont nécessaires au bien-être des personnes et éveil les sens indispensables pour un environnement bienveillant et favorable tout au long de la vie.
        </p>
        <button className="button"><a href="/Reservation" className="parc-link">Réservation</a></button>
      </div>
    </div>
  </div>;

const Anniversaires = () =>
  <div>
    <h1 className="h1activite">Les anniversaires</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="block-img-para">
      <img alt="photo" className="photoactivite" src={Photo2}></img>
      <div className="block-text-bouton">
      <p className="textactivites"><span id="services-anniversaire">Vous bénéficiez:</span><br></br><br></br>
      D’une réservation pour un minimum de 6 enfants et d’une prise en charge de votre groupe dès votre arrivée.<br/><br/>
      D’une table privatisée qui vous est réservée pour une durée de 3h pour organiser l’anniversaire.<br/><br/>
      Le groupe peut alors s’élancer sur les parcours dans les arbres pendant environ 1h30 - 2h.<br/><br/>
      D’un carton d'invitation à remettre à vos amis. Ce carton vous permet de préciser la date, l’adresse et les consignes liées à notre activité. (obtenez votre <a href={carteAnniversaire} target="blank">carte d'invitation</a> !)<br/><br/>
      Une entrée est offerte pour un adulte (un parent ou un ami) pour chacune des formules.<br/><br/>
      D’une entrée à prix réduit de 50% pour l’enfant qui a fêté son anniversaire et qui reviendra dans l’année.<br/>
      Pour encore plus de sensations, vous pouvez privatiser avec un supplément votre terrasse aérienne.
      </p>
      <button className="button"><a href="/Reservation" className="parc-link">Réservation</a></button>
      </div>
    </div>
  </div>;

const CentreLoisir = () =>
  <div>
    <h1 className="h1activite">Les centres de loisirs / Scolaires</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="block-img-para">
      <img alt="photo" className="photoactivite" src={Photo3}></img>
      <div className="block-text-bouton">
        <p className="textactivites">Activités pédagogiques demandées par les professeurs des écoles, elles permettent aux enfants d’agir, de s’exprimer, et de comprendre à travers les activités physique, d’adapter leurs déplacements à des environnements variés.
          Nous prioriserons leurs accès en semaine et les mercredis .
        </p>
        <button className="button"><a href="/Reservation" className="parc-link">Réservation</a></button>
      </div>
    </div>
  </div>;

const TeamBuilding = () =>
  <div>
    <h1 className="h1activite">Le team building / Séminaires</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="block-img-para-teambuilding">
      <div className="block-img-teambuilding">
        <img alt="photo" className="photoactivite" src={Photo1}></img>
        <img alt="photo" className="photoactivite" src={Photo4}></img>
      </div>
      <div className="block-text-bouton">
        <p className="textactivites">Nous accueillons les Petites et Moyennes Entreprises pour une journée team-building ou séminaire en semaines.<br></br><br></br>
          Face aux succès et à la demande importante de la part des entreprises, de nombreuses variantes sont venues compléter les possibilités d’animations Team-building ou de séminaire.<br></br><br></br>
          Nos activités et nos parcours progressifs répondent à vos besoins de créativité, de coopération, d’émulation de groupe, de cohésion d’équipe, d’intégration de forces vives, de mobilisation et remotivation des troupes, et bien sûr de détente et de sensations fortes !
          <br></br><br></br>Mettez vos équipes en défi, organisation d'olympiades avec nos activités : Parcours acrobatiques en hauteur, Laser Game.
          Notre traiteur local vous propose différentes formules pour votre déjeuner : Apéritif dinatoire, cocktail, buffet.
        </p>
        <button className="button"><a href="/Reservation" className="parc-link">Réservation</a></button>
      </div>
    </div>
  </div>;

const ComiteEntreprise = () =>
  <div>
    <h1 className="h1activite">Les comités d'entreprises / Associations</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="block-img-para">
      <img alt="photo" className="photoactivite" src={Photo5}></img>
      <div className="block-text-bouton">
        <p className="textactivites">Mettez vos équipes en défi, organisation d'olympiades avec nos activités : Parcours acrobatiques en hauteur, Laser Game.
        <br></br><br></br>Notre traiteur local vous propose différentes formules pour votre déjeuner : Apéritif dinatoire, cocktail, buffet.</p>
        <button className="button"><a href="/Reservation" className="parc-link">Réservation</a></button>
      </div>
    </div>
  </div>;

const EVG = () =>
  <div>
    <h1 className="h1activite">EVG / EVJF</h1>
    <div className="trait_et_rond">
      <div className="trait"></div>
      <div className="rond_bleu"></div>
    </div>
    <div className="block-img-para">
      <img alt="photo" className="photoactivite" src={Photo6}></img>
      <div className="block-text-bouton">
        <p className="textactivites">Fêtez votre enterrement de vie de célibataire en pleine forêt.<br></br><br></br>
          Un(e) de vos proches se marie ? Enterrez sa vie de jeune fille ou de garçon au Parc Atout branches pour passer une journée forte d’émotions !<br></br><br></br>
          A vous de choisir l'activité qui mettra le ou la futur(e) marié(e) au défi : Parcours acrobatiques en hauteur, Laser Game.<br></br><br></br>
          Atout branches offrira au futur(e) marié(e) sa place d’accrobranche. En option, nous pouvons vous proposer du Champagne.
        </p>
        <button className="button"><a href="/Reservation" className="parc-link">Réservation</a></button>
      </div>
    </div>
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
        <Navbar imgbanner={PhotoBanner} textbanner="Groupes" />
        <div id="ancre"></div>
        <div className="Activites">
          <div className="Activitespadding">
          <Groupesselect
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

Groupes.propTypes = {
  match: PropTypes.object,
  params: PropTypes.string
};

export default withRouter(Groupes);
