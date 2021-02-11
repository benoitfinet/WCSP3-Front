import React from 'react';
import Calendar from 'react-calendar';

import './Reservation.css';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import Navbar from '../Nav/Navbar';
import Footer from '../Footer/Footer';
// import { Children } from 'react';
// import Enigmes from '../Activites/Escalade';
// import Tresors from '../Activites/Tresors';
class Reservation extends React.Component {
  state = {
    photo: [],
    value: new Date(),
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
      value: this.state.value
    };

    axios.post('/Reservation', data)
      .then(res => {
        this.setState({
          sent: true
        }, this.submitReservForm());
      })
      .catch(() => {
        console.log('message not sent');
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
          <h1 className='title-page-reservation'>Réservation :</h1>
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
              <div className="block-activite">
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
              <p>Votre selection :</p>

              <p>{this.state.basket.map((item) => {
                console.log(item);
                return (
                  <p key={item.activity}>{item.numberSelectedActivity}{item.activity}</p>
                );
              })}</p>

              <p>
                <div className="block-number-activite">
                  <p>
                    {this.state.selectionNumberPitchoun !== ''
                      ? this.state.selectionNumberPitchoun
                      : ''}
                  </p>
                  <p>
                    {this.state.totalPricePitchoun !== 0
                      ? 'Parcours accrobatique Pitchoun'
                      : ''}
                  </p>
                </div>
                <div className="block-number-activite">
                  <p>
                    {this.state.selectionNumberOuistiti !== ''
                      ? this.state.selectionNumberOuistiti
                      : ''}
                  </p>
                  <p>
                    {this.state.totalPriceOuistiti !== 0
                      ? 'Parcours accrobatique Ouistiti'
                      : ''}
                  </p>
                </div>
                <div className="block-number-activite">
                  <p>
                    {this.state.selectionNumberChildren !== ''
                      ? this.state.selectionNumberChildren
                      : ''}
                  </p>
                  <p>
                    {this.state.totalPriceChildren !== 0
                      ? 'Parcours accrobatique Enfant'
                      : ''}
                  </p>
                </div>
                <div className="block-number-activite">
                  <p>
                    {this.state.selectionNumberJunior !== ''
                      ? this.state.selectionNumberJunior
                      : ''}
                  </p>
                  <p>
                    {this.state.totalPriceJunior !== 0
                      ? 'Parcours accrobatique Junior'
                      : ''}
                  </p>
                </div>
                <div className="block-number-activite">
                  <p>
                    {this.state.selectionNumberAdult !== ''
                      ? this.state.selectionNumberAdult
                      : ''}
                  </p>
                  <p>
                    {this.state.totalPriceAdult !== 0
                      ? 'Parcours accrobatique Adulte'
                      : ''}
                  </p>
                </div>
                <div className="block-number-activite">
                  <p>
                    {this.state.selectionNumberNocturne !== ''
                      ? this.state.selectionNumberNocturne
                      : ''}
                  </p>
                  <p>
                    {this.state.totalPriceNocturne !== 0
                      ? 'Parcours accrobatique Nocturne'
                      : ''}
                  </p>
                </div>
                <div className="block-number-activite">
                  <p>
                    {this.state.selectionNumberEscape !== ''
                      ? this.state.selectionNumberEscape
                      : ''}
                  </p>
                  <p>
                    {this.state.totalPriceEscape !== 0
                      ? 'Forescape - Escape Game'
                      : ''}
                  </p>
                </div>
                <div className="block-number-activite">
                  <p>
                    {this.state.selectionNumberEnigme !== ''
                      ? this.state.selectionNumberEnigme
                      : ''}
                  </p>
                  <p>
                    {this.state.totalPriceEnigme !== 0
                      ? 'Parcours d\'énigme au sol'
                      : ''}
                  </p>
                </div>
                <div className="block-number-activite">
                  <p>
                    {this.state.selectionNumberTresor !== ''
                      ? this.state.selectionNumberTresor
                      : ''}
                  </p>
                  <p>
                    {this.state.totalPriceTresor !== 0
                      ? 'Chasse au trésor'
                      : ''}
                  </p>
                </div>
                <div className="block-number-activite">
                  <p>
                    {this.state.selectionNumberLaserGAme !== ''
                      ? this.state.selectionNumberLaserGame
                      : ''}
                  </p>
                  <p>
                    {this.state.totalPriceLaserGame !== 0
                      ? 'Laser Game'
                      : ''}
                  </p>
                </div>
                <div className="block-number-activite">
                  <p>
                    {this.state.selectionNumberTerrasse !== ''
                      ? this.state.selectionNumberTerrasse
                      : ''}
                  </p>
                  <p>
                    {this.state.totalPriceTerrasse !== 0
                      ? 'Terrasse privative'
                      : ''}
                  </p>
                </div>
                {this.state.basket.length
                  ? <p>
                    {`Total : ${this.totalPrice()},00€`}
                  </p>
                  : null
                }

              </p>
              <hr></hr>
              <label>Nom : <input type="text" value={this.state.nomClient} onChange={this.handleChangeNom} /></label>
              <label>Prénom : <input type="text" value={this.state.prenomClient} onChange={this.handleChangePrenom} /></label>
              <label>Tel : <input type="number" value={this.state.telClient} onChange={this.handleChangeTel} /></label>
              <label>Email : <input type="email" value={this.state.emailClient} onChange={this.handleChangeEmail} /></label>
                  <button type='button' onClick={(e) => this.submitReservForm(e)}>Envoyer</button>
              <Calendar
                onChange={this.onChange}
                value={this.state.value}
              />
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
