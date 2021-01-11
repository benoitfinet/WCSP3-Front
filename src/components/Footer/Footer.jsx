import './Footer.css';

import { ImFacebook2, ImInstagram } from 'react-icons/im';

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-column">
            <ul className="footer-ul">
                <li className="li-title"><a>LE PARC</a></li>
                <li><a>Notre Buvette</a></li>
                <li><a>Evénements</a></li>
                <li><a>Où nous trouver?</a></li>
                <li><a>Voir le plan du parc</a></li>
                <li><a>Nos Engagements</a></li>
                <li><a>Réglement intérieur</a></li>
            </ul>
        </div>
        <div className="footer-column">
            <ul className="footer-ul">
                <li className="li-title"><a>INFOS PRATIQUES</a></li>
                <li><a>Consulter la brochure</a></li>
                <li><a>Calendrier et horaires</a></li>
                <li><a>Organisez votre journée</a></li>
                <li><a>Térrasses aériennes</a></li>
                <li><a>Tarifs</a></li>
                <li><a>Billeterie</a></li>
            </ul>
        </div>
        <div className="footer-column">
            <ul className="footer-ul">
                <li className="li-title"><a>RÉSEAUX SOCIAUX ET LABELS</a></li>
                <li><a href="https://www.facebook.com/atoutbranches" className="footer-facebook"><ImFacebook2 size="30px"/></a></li>
                <li><a href="https://www.instagram.com/atout_branches/" className="footer-instagram"><ImInstagram size="30px"/></a></li>
                <li><a>Contact</a></li>
                <li><a>Newsletter</a></li>
                <li><a>Mentions légales</a></li>
            </ul>
        </div>
    </div>
  );
};

export default Footer;
