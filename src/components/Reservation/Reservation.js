import React from 'react';
import Calendar from 'react-calendar';

import './Reservation.css';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import Navbar from '../Nav/Navbar';
import Footer from '../Footer/Footer';
import ModalPage from './ModalCovid';
import { FaArrowRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
// import { Children } from 'react';
// import Enigmes from '../Activites/Escalade';
// import Tresors from '../Activites/Tresors';
class Reservation extends React.Component {
  state = {
    photo: [],
    date: new Date(),
    pricePitchounForOne: 11,
    priceOuistitiForOne: 15,
    priceChildForOne: 16,
    priceJuniorForOne: 19,
    priceAdultForOne: 25,
    priceNocturneForOne: 30,
    priceForEscape: 90,
    priceForEnigme: 20,
    priceForTresor: 15,
    priceLaserGameForOne: 15,
    priceTerrasseForOne: 30,

    selectionNumberPitchoun: '',
    selectionNumberOuistiti: '',
    selectionNumberChildren: '',
    selectionNumberJunior: '',
    selectionNumberAdulte: '',
    selectionNumberNocturne: '',
    selectionNumberEscape: '',
    selectionNumberEnigme: '',
    selectionNumberTresor: '',
    selectionNumberLaserGame: '',
    selectionNumberTerrasse: '',

    totalPricePitchoun: 0,
    totalPriceOuistiti: 0,
    totalPriceChildren: 0,
    totalPriceJunior: 0,
    totalPriceAdult: 0,
    totalPriceNocturne: 0,
    totalPriceEscape: 0,
    totalPriceEnigme: 0,
    totalPriceTresor: 0,
    totalPriceLaserGame: 0,
    totalPriceTerrasse: 0,
    total: null,

    escape: true,
    enigmeIsSelect: false,
    tresorIsSelect: false,
    terrasseIsSelect: false,

    nomClient: '',
    prenomClient: '',
    telClient: '',
    emailClient: '',

    activities: [
      {
        name: 'Pitchoun',
        price: 11
      },
      {
        name: 'Ouistiti',
        price: 15
      },
      {
        name: 'Child',
        price: 16
      },
      {
        name: 'Junior',
        price: 19
      },
      {
        name: 'Adult',
        price: 25
      },
      {
        name: 'Nocturne',
        price: 30
      },
      {
        name: 'Escape',
        price: 90
      },
      {
        name: 'Enigmes',
        price: 20
      },
      {
        name: 'Tresors',
        price: 15
      },
      {
        name: 'LaserGame',
        price: 15
      },
      {
        name: 'Terrasse',
        price: 30
      }
    ],

    basket: []

  };

  choiceNumber = (e) => {
    const newBasket = this.state.basket.filter(item => item.activity !== e.target.name);
    if (!isNaN(parseInt(e.target.value))) {
      const price = parseInt(this.state.activities.filter(item => item.name === e.target.name)[0].price);
      const order = {
        activity: e.target.name,
        numberSelectedActivity: parseInt(e.target.value),
        unitPrice: price
      };
      newBasket.push(order);
    }
    this.setState({ basket: newBasket });
  };

  handleCheck = (e) => {
    const newBasket = this.state.basket.filter(item => item.activity !== e.target.name);
    if (e.target.checked) {
      const price = parseInt(this.state.activities.filter(item => item.name === e.target.name)[0].price);
      const order = {
        activity: e.target.name,
        numberSelectedActivity: 1,
        unitPrice: price
      };
      newBasket.push(order);
    }
    this.setState({ basket: newBasket });
  }

  totalPrice = () => {
    if (this.state.basket.length === 0) {
      return 0;
    }
    const total = this.state.basket.reduce((tot, currentPrice) => {
      return tot + (currentPrice.unitPrice * currentPrice.numberSelectedActivity);
    }, 0);
    return total;
  }

  componentDidUpdate (prevProps, prevState) {
    const total = this.state.totalPricePitchoun +
    this.state.totalPriceOuistiti +
    this.state.totalPriceChildren +
    this.state.totalPriceJunior +
    this.state.totalPriceAdult +
    this.state.totalPriceNocturne +
    this.state.totalPriceEscape +
    this.state.totalPriceEnigme +
    this.state.totalPriceTresor +
    this.state.totalPriceLaserGame +
    this.state.totalPriceTerrasse;
    if (prevState.total !== total) {
      this.setState({
        total: total
      });
    }
  }

  handleChangeNom = (e) => {
    this.setState({ nomClient: e.target.value });
  }

  handleChangePrenom = (e) => {
    this.setState({ prenomClient: e.target.value });
  }

  handleChangeTel = (e) => {
    this.setState({ telClient: e.target.value });
  }

  handleChangeEmail = (e) => {
    this.setState({ emailClient: e.target.value });
  }

  submitReservForm = (e) => {
    e.preventDefault();

    const data = {
      nomClient: this.state.nomClient,
      prenomClient: this.state.prenomClient,
      telClient: this.state.telClient,
      emailClient: this.state.emailClient,
      basket: this.state.basket,
      date: this.state.date
    };

    axios.post('/Reservation', data)
      .then(res => {
        this.setState({
          sent: true
        }, this.reset());
      })
      .catch(() => {
        console.log('message not sent');
      });
    this.reset();
  }

  reset = () => {
    this.setState({
      selectionNumberPitchoun: '',
      selectionNumberOuistiti: '',
      selectionNumberChildren: '',
      selectionNumberJunior: '',
      selectionNumberAdulte: '',
      selectionNumberNocturne: '',
      selectionNumberEscape: '',
      selectionNumberEnigme: '',
      selectionNumberTresor: '',
      selectionNumberLaserGame: '',
      selectionNumberTerrasse: '',

      totalPricePitchoun: 0,
      totalPriceOuistiti: 0,
      totalPriceChildren: 0,
      totalPriceJunior: 0,
      totalPriceAdult: 0,
      totalPriceNocturne: 0,
      totalPriceEscape: 0,
      totalPriceEnigme: 0,
      totalPriceTresor: 0,
      totalPriceLaserGame: 0,
      totalPriceTerrasse: 0,
      total: null,

      escape: true,
      enigmeIsSelect: false,
      tresorIsSelect: false,
      terrasseIsSelect: false,

      nomClient: '',
      prenomClient: '',
      telClient: '',
      emailClient: '',
      basket: []
    });
  }

  onChange = date => {
    const currentDate = this.state.date + date;
    this.setState({
      date: currentDate
    });
  }

  getHome = () => {
    fetch('http://localhost:5000/photo/')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          photo: data
        });
      });
  };

  componentDidMount () {
    this.getHome();
  }

  render () {
    const { photo } = this.state;

    return (
      <div>
        <Navbar imgbanner={photo.length !== 0 && photo[1].location} textbanner="Réservation" />
        <div className="background-page-find-us">
          <div className="content-framing">
          <h1 className='title-framing'>Réserver en ligne, sans règlement :</h1>
          <div className='block-covid-information'>
            <p>En raison du contexte sanitaire, merci de lire les recommandations et obligations pour pratiquer l’activité en toute sécurité.</p>
            <ModalPage />
          </div>
          <div className="block-information-to-know">
            <h2 className="information-to-know-title">Les informations à savoir !</h2>
              <div className="block-arrow-instruction">
                <IconContext.Provider
                  value={{ color: 'rgb(224 171 84)', size: '18px' }}
                  >
                <FaArrowRight />
                </IconContext.Provider>
                <p className="reservation-instructions">Consultez nos <a href="/Horaires">horaires d'ouverture</a></p>
              </div>
              <div className="block-arrow-instruction">
                <IconContext.Provider
                  value={{ color: 'rgb(224 171 84)', size: '18px' }}
                  >
                <FaArrowRight />
                </IconContext.Provider>
                <p className="reservation-instructions">Consultez toutes les informations utiles à <a href="/FAQ">l'organistion de votre journée</a></p>
              </div>
              <div className="block-arrow-instruction">
                <IconContext.Provider
                  value={{ color: 'rgb(224 171 84)', size: '18px' }}
                  >
                <FaArrowRight />
                </IconContext.Provider>
                <p className="reservation-instructions">La réservation en ligne se fait sans règlement.</p>
              </div>
              <div className="block-arrow-instruction">
                <IconContext.Provider
                  value={{ color: 'rgb(224 171 84)', size: '18px' }}
                  >
                <FaArrowRight />
                </IconContext.Provider>
                <p className="reservation-instructions">Pour les groupes (Anniversaires, Centres de loisirs et scolaires, Team building et Séminaires, Comités d'entreprise,  Associations, EVG / EVJF), merci de ne pas utiliser la réservation en ligne mais de faire votre demande de réservation par email.</p>
              </div>
              <button className="button-contact"><a href="/Contact">CONTACTEZ-NOUS !</a></button>
            </div>
            <h2 className="title-reservation-now">Réservez dès à présent !</h2>
          <div className="block-activite-total" onSubmit={this.submitReservForm}>
            <div className="block-all-activite">
              <h3 className="title-reservation">Parcours accrobatiques en hauteur</h3>
              <div className="block-activite">
                <div className="block-title-activite-description">
                  <h3 className="title-activitie">Pitchoun</h3>
                  <p>
                    Enfant de 2 à 5 ans
                    <br />
                    Parcours Piccolo, Pitchoun et Colibri
                  </p>
                </div>
                <p className="price">
                  Prix TTC : {this.state.pricePitchounForOne},00€
                </p>
                <select
                  name="Pitchoun"
                  id="number-select"
                  onChange={this.choiceNumber}
                  className="menu"
                >
                  <option value="">--Nombre de personnes--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <hr/>
              <div className="block-activite">
                <div className="block-title-activite-description">
                  <h3 className="title-activitie">Ouistiti</h3>
                  <p>
                    Enfant de 2 à 7 ans
                    <br />
                    Parcours Picolo, Pitchoun, Colibri et Ouistiti
                  </p>
                </div>
                <p className="price">
                  Prix TTC : {this.state.priceOuistitiForOne},00€
                </p>
                <select
                  name="Ouistiti"
                  id="number-select"
                  onChange={this.choiceNumber}
                  className="menu"
                >
                  <option value="">--Nombre de personnes--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <hr/>
              <div className="block-activite">
                <div className="block-title-activite-description">
                  <h3 className="title-activitie">Enfant</h3>
                  <p>
                    Enfant
                    <br />
                    De 4 à 7 ans Taille requise : 1m20 et 1,40 pour le bleu
                    <br />
                    Parcours Pitchoun, Colibri, Ouistiti, vert, jaune, bleu
                  </p>
                </div>
                <p className="price">
                  Prix TTC : {this.state.priceChildForOne},00€
                </p>
                <select
                  name="Child"
                  id="number-select"
                  onChange={this.choiceNumber}
                  className="menu"
                >
                  <option value="">--Nombre de personnes--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <hr/>
              <div className="block-activite">
                <div className="block-title-activite-description">
                  <h3 className="title-activitie">Junior</h3>
                  <p>
                    Enfant
                    <br />
                    - de 15 ans et + de 1m40
                    <br />
                    Parcours vert, jaune, bleu, rouge 1 et 2
                  </p>
                </div>
                <p className="price">
                  Prix TTC : {this.state.priceJuniorForOne},00€
                </p>
                <select
                  name="Junior"
                  id="number-select"
                  onChange={this.choiceNumber}
                  className="menu"
                >
                  <option value="">--Nombre de personnes--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <hr/>
              <div className="block-activite">
                <div className="block-title-activite-description">
                  <h3 className="title-activitie">Adulte</h3>
                  <p>
                    Adulte
                    <br />
                    + de 15 ans
                    <br />
                    Parcours vert, jaune, bleu, rouge 1 et 2, panoramique, noir et
                    Ebene
                  </p>
                </div>
                <p className="price">
                  Prix TTC : {this.state.priceAdultForOne},00€
                </p>
                <select
                  name="Adult"
                  id="number-select"
                  onChange={this.choiceNumber}
                  className="menu"
                >
                  <option value="">--Nombre de personnes--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <hr/>
              <div className="block-activite">
                <div className="block-title-activite-description">
                  <h3 className="title-activitie">Nocturne</h3>
                  <p>
                    Nocture
                    <br />À partir de 10 ans
                  </p>
                </div>
                <p className="price">
                  Prix TTC : {this.state.priceNocturneForOne},00€
                </p>
                <select
                  name="Nocturne"
                  id="number-select"
                  onChange={this.choiceNumber}
                  className="menu"
                >
                  <option value="">--Nombre de personnes--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <h3 className="title-reservation">Forescape - Escape game</h3>
              <div className="block-activite">
                <div className="block-title-activite-description">
                  <p>
                    Une aventure ludique et sportive qui fera appel à toute votre
                    ingéniosité.
                    <br />
                    90 € la séance pour un groupe jusqu'à 8 joueurs
                  </p>
                </div>
                <p className="price">
                  Prix TTC : {this.state.priceForEscape},00€
                </p>
                <input
                  name="Escape"
                  id="number-select"
                  type="checkbox"
                  value="1"
                  className="menu"
                  onClick={(e) => this.handleCheck(e)}
                />
              </div>
              <h3 className="title-reservation">Parcours d'énigme au sol</h3>
              <div className="block-activite">
                <div className="block-title-activite-description">
                  <p>
                    Retrouvez les coffres forts cachés dans le parc pour
                    reconstituer la clé du mystère.
                    <br />
                    15 € le jeu pour jouer seul ou en groupe.
                  </p>
                </div>
                <p className="price">
                  Prix TTC : {this.state.priceForEnigme},00€
                </p>
                <input
                  name="Enigmes"
                  id="number-select"
                  type="checkbox"
                  value="1"
                  className="menu"
                  onClick={(e) => this.handleCheck(e)}
                />
              </div>
              <h3 className="title-reservation">Chasse au trésor</h3>
              <div className="block-activite">
                <div className="block-title-activite-description">
                  <p>
                    Retrouvez les coffres forts cachés dans le parc pour
                    reconstituer la clé du mystère.
                    <br />
                    15 € le jeu pour jouer seul ou en groupe.
                  </p>
                </div>
                <p className="price">
                  Prix TTC : {this.state.priceForTresor},00€
                </p>
                <input
                  name= "Tresors"
                  id="number-select"
                  type="checkbox"
                  value="1"
                  className="menu"
                  onClick={(e) => this.handleCheck(e)}
                />
              </div>
              <h3 className="title-reservation">Laser game</h3>
              <div className="block-activite">
                <div className="block-title-activite-description">
                  <p>
                    A partir de 7 ans
                    <br />
                    De 8 à 20 personnes
                    <br />
                    15€ de l'heure
                  </p>
                </div>
                <p className="price">
                  Prix TTC : {this.state.priceLaserGameForOne},00€
                </p>
                <select
                  name="LaserGame"
                  id="number-select"
                  onChange={this.choiceNumber}
                  className="menu"
                >
                  <option value="">--Nombre de personnes--</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <h3 className="title-reservation">TERRASSES AERIENNES PRIVATIVES</h3>
              <div className="block-activite-terrasse">
                <div className="block-title-activite-description">
                </div>
                <p className="price">
                  Prix TTC : {this.state.priceTerrasseForOne},00€
                </p>
                <input
                  name="Terrasse"
                  type="checkbox"
                  value="1"
                  id
                  className="menu"
                  onClick={(e) => this.handleCheck(e)}
                />
              </div>
            </div>
            <div className="block-total">
              <div>
                <p className="your-selection">Votre selection :</p>
                <hr/>
              </div>
              <p>{this.state.basket.map((item) => {
                console.log(item);
                return (
                  <div key={item.activity} className="block-activity-selected">
                    <p className="number-selected-activity" key={item.activity}>{item.numberSelectedActivity}</p>
                    <p className="item-activity" key={item.activity}>{item.activity}</p>
                  </div>
                );
              })}
                {this.state.basket.length
                  ? <p className="total-basket">
                    {`Total : ${this.totalPrice()},00€`}
                  </p>
                  : null
                }
              </p>
              <div>
                <p className="title-information-reservation">
                    Vos coordonnées de réservation :
                </p>
                <hr/>
              </div>
              <label>Nom : <input type="text" value={this.state.nomClient} onChange={this.handleChangeNom} /></label>
              <label>Prénom : <input type="text" value={this.state.prenomClient} onChange={this.handleChangePrenom} /></label>
              <label>Tel : <input type="number" value={this.state.telClient} onChange={this.handleChangeTel} /></label>
              <label>Email : <input type="email" value={this.state.emailClient} onChange={this.handleChangeEmail} /></label>
              <p className="reservation-date-selection">Date de la réservation :</p>
              <Calendar
                onChange={this.onChange}
                value={this.state.value}
              />
              <button type='button' onClick={(e) => this.submitReservForm(e)} className="validation-reservation-button">Valider votre réservation</button>
            </div>
          </div>
          </div>
        </div>
      <Footer />
      </div>
    );
  }
}

export default Reservation;
