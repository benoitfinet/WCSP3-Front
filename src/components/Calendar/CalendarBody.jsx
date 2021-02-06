import React from 'react';
import './CalendarPage.css';
import Navbar from '../Nav/Navbar';
import PhotoBanner from '../Nav/img/9.jpeg';
import Saison2021 from './CalendarPic/saison_2021.jpg';

function CalendarBody () {
  return (
      <div>
        <Navbar imgbanner={PhotoBanner} textbanner="Nos horaires" />
            <div className="Activites">
                  <div className="Activites-content">
                  <div className="Activitespadding">
                  <h2 className="cldSeason">Calendrier 2021</h2>
                  <div id="ancre-calendrier"></div>
    <img className='parkSchedule' src={Saison2021} alt='saison 2021' />
        <div className='cldInfoText'>
          <h3>Le parc est ouvert de Mars jusqu’aux vacances de la Toussaint</h3>
          <br/>
          <h3>De Mars à Juin</h3>
          <p>
          Ouverture les Mercredi, Samedi et Dimanche de 13h00 à 18h30. (dernier départ vers les parcours à 16h30).
          Les matinées et autre jours de la semaine sur réservation.
          </p>
          <br/>
          <h3>Pendant les vacances scolaire de Pâques (zones B et C)</h3>
          <p>Ouverture tous les jours de 10h30 à 18h30 (dernier départ vers les parcours à 16h30).</p>
          <br/>
          <h3>Pendant les vacances scolaire de Juillet et Août</h3>
          <p>Tous les jours de 10h30 à 19h30. (dernier départ vers les parcours à 17h30).</p>
          <br/>
          <h3>Septembre et Octobre</h3>
          <p>Ouverture les Mercredi, Samedi et Dimanche de 13h00 à 18h00. (dernier départ vers les parcours à 16h00).
          Les matinées et autre jours de la semaine sur réservation.</p>
          <br/>
          <h3>Balades nocturnes à partir de 10 ans du mois de Mai jusqu’à Septembre</h3>
          <p>Une soirée par mois jusqu’à 23h00. Réservation obligatoire, places limitées.</p>

        <div className='cldReservationInfo'>
          <h3>Réservations</h3>
          <p>
          Afin de ne pas venir pour rien, utilisez l’onglet « RÉSERVATION » et réservez votre date et votre créneau horaire.
          Pour les groupes, réservation obligatoire (si possible en matinée), contactez-nous : contact@atoutbranches.com .
          <a href=''> Réservez en ligne </a>
          </p>
          <p>
          Fermeture du parc après les vacances de la toussaint jusqu’au 1er Mars.
          </p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
  );
}

export default CalendarBody;
