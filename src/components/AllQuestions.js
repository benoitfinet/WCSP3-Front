import React from 'react';

import Question from './Question';

const questions = [
  {
    question: '- COMBIEN DE TEMPS FAIT-IL POUR PRATIQUER LES ACTIVITES ?',
    response:
      'Nous considérons que pour profiter un minimum de nos parcours acrobatiques en hauteur il faut compter 2h30/3 heures, c’est pourquoi nous vous conseillons toujours d’arriver au plus tard 3 heures avant l’horaire de fermeture du parc. Il est préférable d\'arriver le matin, vous aurez ainsi toute la journée pour profiter pleinement du parc.'
  },
  {
    question: '- FAUT IL PREVOIR UNE TENUE PARTICULIERE ?',
    response:
      'Nous vous conseillons de prévoir une tenue confortable qui ne dérange pas vos mouvements, une tenue sportive et surtout des chaussures fermées type baskets. Ne portez pas d’objets de valeur, et ranger bien votre téléphone portable dans une poche fermée pour éviter tout risque de chute au sol. Les cheveux longs doivent être attachés. Pour plus de confort pensez à apporter une paire de gant type cycliste. Notre parc en propose à la vente (2€ la paire).'
  },
  {
    question: '- PEUT-ON PIQUE-NIQUER ?',
    response:
      'Le panier pique-nique est autorisé sur notre parc et vous trouverez des tables et bancs pour votre pause déjeuner. Nous proposons également une buvette pour vous dépanner ou compléter votre casse-croûte.'
  },
  {
    question: '- PEUT-ON LAISSER DES AFFAIRES A L’ACCUEIL ?',
    response:
      'Oui, des casiers à cadenas pour vos affaires personnelles sont à votre disposition gratuitement.'
  },
  {
    question: '- J’ACCOMPAGNE SANS PRATIQUER D’ACTIVITES ?',
    response:
      'L’accès à notre parc pour les accompagnants non pratiquants est gratuit. Le port du masque au sol est obligatoire pour les visiteurs. Nous faisons appel à votre bon sens et au respect des distances de sécurité et d’hygiène.'
  },
  {
    question:
      '- LES PERSONNE EN SITUATION DE HANDICAP PEUVENT ELLE PRATIQUER ?',
    response:
      'Notre parc accueille chaque année des personnes handicapées, mais le handicap physique ou mental doit rester léger (l’activité n’est pas accessible aux personnes en fauteuil roulant). La ou les personnes handicapées doivent tout de même avoir une certaine autonomie pour exercer la pratique en autonomie. Nous vous conseillons de nous joindre directement pour en discuter de vive voix notamment pour les groupes afin de vous accueillir dans des créneaux horaires ou notre équipe peut vous apporter un encadrement plus particulier.'
  },
  {
    question:
      '- LES PERSONNES EN SUR POIDS PEUVENT ELLE PRATIQUER LES PARCOURS ACROBATIQUES EN HAUTEUR ?',
    response:
      'Cette question est toujours délicate. En effet par rapport à la loi nous ne pouvons interdire l’accès à notre parc aux personnes en surpoids, cependant certains parcours vous seront inaccessibles en raison d’utilisation de matériel avec des conditions maximum de poids : Parcours Aventure : poids maximum autorisé 130kg. Parcours Tyro : poids maximum autorisé 110kg.'
  },
  {
    question: '- PEUT-ON VENIR ACCOMPAGNE DE SON CHIEN ?',
    response:
      'Oui, s’il est tenu en laisse et de respecter les règles d’hygiènes propre au ramassage des excréments dans l’enceinte du parc. La muselière est obligatoire, la loi l\'impose pour les chiens de catégories 1 et 2 dans les lieux accueillant du publics.'
  },
  {
    question: '- QUELS SONT LES MODES DE PAYEMENT ACCEPTES ?',
    response:
      'Espèces, chèques, Carte Bancaire, Chèques Vacances ANCV. Merci de bien préremplir vos chèques vacances avant votre arrivée sur le parc.'
  },
  {
    question: '- ACHETER VOS BILLETS EN LIGNE'
  }
];

class AllQuestions extends React.Component {
  render () {
    return (
      <div>
        {questions.map((question) => (
          <Question question={question.question} response={question.response} key={question.response} />
        ))}
        <p>En cas de mauvaises conditions météorologiques (fort vent, orage…), la direction se réserve le droit d’évacuer temporairement ou définitivement le parc pour votre propre sécurité. Si cela survient moins d’1 heure après votre départ sur les parcours, une entrée gratuite pour l’année en cour vous sera offerte.</p>
      </div>
    );
  }
}

export default AllQuestions;
