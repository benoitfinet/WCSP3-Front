import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalPage extends Component {
state = {
  modal8: false
}

toggle = nr => () => {
  const modalNumber = 'modal' + nr;
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render () {
  return (
    <MDBContainer>
      <MDBBtn color="info" onClick={this.toggle(8)}>Info Covid-19</MDBBtn>
      <MDBModal isOpen={this.state.modal8} toggle={this.toggle(8)} fullHeight position="right">
        <MDBModalHeader toggle={this.toggle(8)}>INFO COVID-19</MDBModalHeader>
        <MDBModalBody>
              <p>
              - A l'accueil, il est demandé 1 seule personne pour le règlement
              </p>
              <p>
              - Les gants sont préconisés durant l'activité
              </p>
              <p>
              - Du gel hydroalcoolique vous est proposé
              </p>
              <p>
              - Il vous est demandé de vous laver les mains dès votre arrivée en zone d'équipement
              </p>
              <p>
              - Notre personnel d'équipement porte gant et masque pour vous équiper
              </p>
              <p>
              - Le briefing sera réalisé en respectant les règles de distanciation sociale (hors famille)
              </p>
              <p>
              - 1 seule personne (hors famille maximum 2) par plateforme et 1 seule personne par jeu
              </p>
              <p>
              - Rester à 1,5m de distance d'une autre personne (hors famille) dans la file d'attente du parcours
              </p>
              <p>
              - Du gel hydroalcoolique est situé à chaque départ et arrivée de parcours
              </p>
              <p>
              - Notre personnel sera équipé d'un masque et de gants pour toute intervention en hauteur
              </p>
              <p>
              - A la fin de l'activité, nous vous demandons de vous faire déséquiper par notre personnel
              </p>
              <p>
              - Le matériel est désinfecté avant toute nouvelle utilisation
              </p>
              <p>
              Nous vous remercions de respecter ses consignes.
              </p>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle(8)}>Fermer</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
}
}
export default ModalPage;
