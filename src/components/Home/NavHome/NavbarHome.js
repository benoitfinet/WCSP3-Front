import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links } from '../Data';
import logo2 from './img/logo2.jpg';
import logo3 from '../NavHome/img/logo3.png';

import './NavbarHome.css';

// eslint-disable-next-line react/prop-types
const NavbarHome = ({ imgbanner, textbanner }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [logo, setLogo] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
      setLogo(true);
    } else {
      setNavbar(false);
      setLogo(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <div className="block-title-button">
      <h1 className="testtitle">{}</h1>
    <nav className={navbar ? 'blocknavbar' : 'blocknavbaractive'}>
      <div className="nav-center">
        <div className="nav-header">
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li className="test" key={id}>
                  <a className="test-deux" href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
        </ul>
      </div>
    </nav>
    <img src={imgbanner} className="banner-home" alt=""/>
    <h1 className="textbanner">{textbanner}</h1>
    <div className={logo ? 'block-logo' : 'block-logo-active'}>
      <div className="logo-label">
        <img src={logo2} alt=''></img>
        <img src={logo3} alt=''></img>
      </div>
    </div>
  </div>
  );
};

export default NavbarHome;
