import logo from './ImgHome/logo2.png';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

export const links = [
  {
    id: 1,
    url: '/',
    text: <FaFacebook />
  },
  {
    id: 2,
    url: '/',
    text: <AiFillInstagram />
  },
  {
    id: 3,
    url: '/',
    text: 'accueil'
  },
  {
    id: 4,
    url: '/Activites',
    text: 'activités'
  },
  {
    id: 5,
    url: '/Horaires',
    text: 'Nos horaires'
  },
  {
    id: 6,
    url: '/test',
    text: <img src={logo} className="logo" alt="logo" />
  },
  {
    id: 7,
    url: '/Tarifs',
    text: 'Tarifs'
  },
  {
    id: 8,
    url: '/Ounoustrouver',
    text: 'Nous trouver'
  },
  {
    id: 9,
    url: '/Groupes',
    text: 'Groupes'
  },
  {
    id: 10,
    url: '/Reservation',
    text: 'réserver'
  }
];
