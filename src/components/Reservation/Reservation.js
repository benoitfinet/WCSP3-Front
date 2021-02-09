import React from 'react';

import './Reservation.css';

class Reservation extends React.Component {
  state = {
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

    selectionNumberPitchoun: '',
    selectionNumberOuistiti: '',
    selectionNumberChildren: '',

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

    escapeIsSelect: true,
    enigmeIsSelect: true,
    tresorIsSelect: true
  };

  choiceNumber = (e) => {
    let numberPitchoune = e.target.value;
    numberPitchoune = numberPitchoune * this.state.pricePitchounForOne;
    this.setState({ totalPricePitchoun: numberPitchoune });

    const selectionNumberPitchoun = e.target.value;
    this.setState({ selectionNumberPitchoun: selectionNumberPitchoun });
  };

  choiceNumber2 = (e) => {
    let numberOuistiti = e.target.value;
    numberOuistiti = numberOuistiti * this.state.priceOuistitiForOne;
    this.setState({ totalPriceOuistiti: numberOuistiti });

    const selectionNumberOuistiti = e.target.value;
    this.setState({ selectionNumberOuistiti: selectionNumberOuistiti });
  };

  choiceNumber3 = (e) => {
    let numberChildren = e.target.value;
    numberChildren = numberChildren * this.state.priceChildForOne;
    this.setState({ totalPriceChildren: numberChildren });

    const selectionNumberChildren = e.target.value;
    this.setState({ selectionNumberChildren: selectionNumberChildren });
  };

  choiceNumber4 = (e) => {
    let numberJunior = e.target.value;
    numberJunior = numberJunior * this.state.priceJuniorForOne;
    this.setState({ totalPriceJunior: numberJunior });
  };

  choiceNumber5 = (e) => {
    let numberAdult = e.target.value;
    numberAdult = numberAdult * this.state.priceAdultForOne;
    this.setState({ totalPriceAdult: numberAdult });
  };

  choiceNumber6 = (e) => {
    let numberNocturne = e.target.value;
    numberNocturne = numberNocturne * this.state.priceNocturneForOne;
    this.setState({ totalPriceNocturne: numberNocturne });
  };

  choiceNumber7 = () => {
    this.state.escapeIsSelect
      ? this.setState({ totalPriceEscape: 90 })
      : this.setState({ totalPriceEscape: 0 });
    this.setState({ escapeIsSelect: !this.state.escapeIsSelect });
  };

  choiceNumber8 = () => {
    this.state.enigmeIsSelect
      ? this.setState({ totalPriceEnigme: 20 })
      : this.setState({ totalPriceEnigme: 0 });
    this.setState({ enigmeIsSelect: !this.state.enigmeIsSelect });
  };

  choiceNumber9 = () => {
    this.state.tresorIsSelect
      ? this.setState({ totalPriceTresor: 15 })
      : this.setState({ totalPriceTresor: 0 });
    this.setState({ tresorIsSelect: !this.state.tresorIsSelect });
  };

  choiceNumber10 = (e) => {
    let numberLaserGame = e.target.value;
    numberLaserGame = numberLaserGame * this.state.priceLaserGameForOne;
    this.setState({ totalPriceLaserGame: numberLaserGame });
  };

  render () {
    return (
      <div>
        <h1>Réservation :</h1>
        <div className="block-activite-total">
          <div className="block-all-activite">
            <h3>Parcours accorbatiques en hauteur</h3>
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
                name="number"
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
                name="number"
                id="number-select"
                onChange={this.choiceNumber2}
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
                name="number"
                id="number-select"
                onChange={this.choiceNumber3}
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
                name="number"
                id="number-select"
                onChange={this.choiceNumber4}
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
                name="number"
                id="number-select"
                onChange={this.choiceNumber5}
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
                name="number"
                id="number-select"
                onChange={this.choiceNumber6}
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
            <h3>Forescape - Escape game</h3>
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
                type="checkbox"
                value={this.state.escapeIsSelect}
                className="menu"
                onClick={this.choiceNumber7}
              />
            </div>
            <h3>Parcours d'énigme au sol</h3>
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
                type="checkbox"
                value={this.state.escapeIsSelect}
                className="menu"
                onClick={this.choiceNumber8}
              />
            </div>
            <h3>Chasse au trésor</h3>
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
                type="checkbox"
                value={this.state.escapeIsSelect}
                className="menu"
                onClick={this.choiceNumber9}
              />
            </div>
            <h3>Laser game</h3>
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
                name="number"
                id="number-select"
                onChange={this.choiceNumber10}
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
          </div>
          <div className="block-total">
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
              <p>
                {this.state.totalPricePitchoun +
                  this.state.totalPriceOuistiti +
                  this.state.totalPriceChildren +
                  this.state.totalPriceJunior +
                  this.state.totalPriceAdult +
                  this.state.totalPriceNocturne +
                  this.state.totalPriceEscape +
                  this.state.totalPriceEnigme +
                  this.state.totalPriceTresor +
                  this.state.totalPriceLaserGame}
                ,00€
              </p>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Reservation;
