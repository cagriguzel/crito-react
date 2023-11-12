import React from 'react';
import RightLines from '../../assets/images/background-lines-white-right.svg';
import CritoLogo from '../../assets/images/logotype-white.svg'

const Footer = () => {
  return (
    <>
    <footer>
      <img className="background-right-lines" src={RightLines} alt="" />
      <div className="container">
        <div className="logotype">
          <a href="index.html">
            <img src= {CritoLogo} alt="crito-logo" />
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, praesentium. Ducimus debitis delectus repellendus illo.
          </p>
        </div>
        <div className="footer-box">
          <ul>
            <h5><a href="">Company</a></h5>
            <li><a href="">About</a></li>
            <li><a href="">Features</a></li>
            <li><a href="">Works</a></li>
            <li><a href="">Career</a></li>
          </ul>
        </div>
        <div className="footer-box">
          <ul>
            <h5><a href="">Help</a></h5>
            <li><a href="">Customer Support</a></li>
            <li><a href="">Delivery Details</a></li>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-box">
          <ul>
            <h5><a href="">Resources</a></h5>
            <li><a href="">Free eBooks</a></li>
            <li><a href="">Development Tutorial</a></li>
            <li><a href="">How to-Blog</a></li>
            <li><a href="">Youtube Playlist</a></li>
          </ul>
        </div>
        <div className="footer-box">
          <ul>
            <h5><a href="">Link</a></h5>
            <li><a href="">Free eBooks</a></li>
            <li><a href="">Development Tutorial</a></li>
            <li><a href="">How to-Blog</a></li>
            <li><a href="">Youtube Playlist</a></li>
          </ul>
        </div>
      </div>
    </footer>
    <div className="footer-bottom">
      <div className="container">
        <div className="copyright">
          <p>Copyright @ 2023 Crito - Consulting Company Inc. All Rights Reserved</p>
        </div>
        <div className="socialmedia-bar">
          <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://twitter.com/" target="_blank"><i className="fa-brands fa-twitter"></i></a>
          <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
