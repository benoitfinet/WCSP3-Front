import logo from './ImgHome/logo2.png';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

export const links = [
  {
    id: 1,
    url: 'https://fr-fr.facebook.com/AtoutBranches/',
    text: <FaFacebook size={32}/>
  },
  {
    id: 2,
    url: 'https://www.instagram.com/atout_branches/',
    text: <AiFillInstagram size={32} />
  },
  {
    id: 3,
    url: '/',
    text: 'accueil'
  },
  {
    id: 4,
    url: '/Activites/parcours-acrobatiques',
    text: 'activités'
  },
  {
    id: 5,
    url: '/groupes/familleAmis',
    text: 'Groupes'
  },
  {
    id: 6,
    url: '/',
    text: <img src={logo} className="logo" alt="logo" />
  },
  {
    id: 7,
    url: '/Tarifs',
    text: 'Tarifs'
  },
  {
    id: 8,
    url: '/Horaires',
    text: 'Nos horaires'
  },
  {
    id: 9,
    url: '/nous-trouver',
    text: 'Nous trouver'
  },
  {
    id: 10,
    url: '/Reservation',
    text: 'réserver'
  }
];
