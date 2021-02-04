import React from 'react';
import { ImCross } from 'react-icons/im';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ showModal, close }) => {
  return (
        <div className='modal-wrapper'
        style={{
          transform: showModal ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: showModal ? '1' : '0'
        }}
        >
          <div className='modal-header'>
            <h4>INFOS</h4>
            <span className='close-modal-btn' onClick={close}><ImCross/></span>
          </div>
            <div className='modal-content'>
            <div className='modal-body'>
              <h4>INFO COVID-19</h4>
              <p>Le gouvernement a autorisé notre réouverture dans le respect de règles sanitaires strictes.
                Les gestes barrières habituels sont complétés par des règles adaptées aux spécificités de notre parc,
                 elles sont décrites ci-dessous et sont susceptibles d'évoluer en fonction des contraintes que nous rencontrerons.
              </p>
              <p>
              Pour le bon déroulement de l'activité nous vous remercions de vous y conformer scrupuleusement.
              Ceci pour le plaisir et la sécurité de tous, merci de votre coopération.
              </p>
              <p>
              - La réservation est obligatoire avant d'accéder au site ( une heure précise vous est donnée, vous ne pouvez pas pénétrer
              dans l'enceinte du parc avant cet horaire ni plus de 5 minutes après sans en avoir reçu l'autorisation de l'accueil du parc.
              </p>
              <p>
              - Le port du masque est obligatoire depuis le parking jusqu'au moment où vous débuter le parcours ainsi que dans toutes
              les zones ou la distanciation physique d'1 mètre n'est pas possible ( accueil, équipement, toilettes, zones de croisement)
              vous devez le conserver en permanence avec vous pour pouvoir le remettre à tout moment, comme par exemple : quand un opérateur
              est obligé d'intervenir à votre proximité.
              </p>
              <p>
              - Le lavage des mains est obligatoire avant l'équipement, il devra être effectué aussi entre chaque parcours en utilisant les distributeurs
              de gel hydro alcoolique présents dans le parc. Ainsi qu'à tout moment où vous le juger utile.
              </p>
              <p>
              - La distanciation physique entre groupe est obligatoire, au sol et sur les parcours. Nos règles habituelles ( 1 personne par atelier, 2 par
              plateforme) restent valables à la condition que les 2 personnes présentes sur la même plateforme appartiennent au même groupe.
              </p>
              <p>
              - L'accès à l'aire de pique-nique est autorisé sous réserve de conserver la distance entre groupes.
              </p>
              <p>
              Notre équipe applique aussi les gestes barrières et porte le masque dans les mêmes conditions que les visiteurs. Le nombre de personnes présentes
              dans le parc est limité volontairement pour rendre la distanciation plus aisée. Chaque départ est réservé à un seul groupe constitué ( 1 à 10 personnes max)
              </p>
              <p>
              Notre assurons la désinfection et la rotation du matériel sur plusieurs jours pour limiter les risques de propagation.
              </p>
            </div>
            <div className='modal-footer'>
              <button className='modal-close-btn' onClick={close}>Fermer</button>
            </div>
          </div>
        </div>
  );
};

Modal.propTypes = {
  showModal: PropTypes.func,
  close: PropTypes.func
};

export default Modal;
