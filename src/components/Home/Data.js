import logo from './ImgHome/logo2.png';
import { FaFacebook } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

export const links = [
  {
    id: 1,
    url: '/',
    text: <FaFacebook size={32}/>
  },
  {
    id: 2,
    url: '/',
    text: <AiFillInstagram size={32} />
  },
  {
    id: 3,
    url: '/',
    text: 'accueil'
  },
  {
    id: 4,
    url: '/activites',
    text: 'activités'
  },
  {
    id: 5,
    url: '/groupes',
    text: 'Groupes'
  },
  {
    id: 6,
    url: '/test',
    text: <img src={logo} className="logo" alt="logo" />
  },
  {
    id: 7,
    url: '/tarifs',
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
