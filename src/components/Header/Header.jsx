import React from 'react';
import Button from '../Generics/Button';
import logotype from '../../assets/images/logotype.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <button className="btn-menubars">
            <i className="fa-sharp fa-regular fa-bars"></i>
          </button>
          <div className="logotype">
            <a href="/">
              <img src={logotype} alt="crito-logo" />
            </a>
          </div>
          <div className="contactinformation-bar">
            <div className="content-box">
              <i className="fa-solid fa-phone"></i>+46 (8) 121 470 50
            </div>
            <div className="content-box">
              <i className="fa-regular fa-envelope"></i>info@crito.com
            </div>
            <div className="content-box last">
              <i className="fa-solid fa-location-dot"></i>Sveavägen 31, 111 34 STOCKHOLM
            </div>
          </div>
          <div className="socialmedia-bar">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='Icon' icon={faFacebook} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='Icon' icon={faTwitter} />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='Icon' icon={faInstagram} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className='Icon' icon={faLinkedin} />
            </a>
          </div>
          <div className="menu">
            <nav>
              <a href="/">Home</a>
              <a href="/">Service</a>
              <a href="/news">News</a>
              <a href="/contact">Contact</a>
            </nav>
            <Button type="yellow" url="/contact" text="Login" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;




