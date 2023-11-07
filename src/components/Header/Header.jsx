import React from 'react'
import Button from '../Generics/Button'
import logotype from '../../assets/images/logotype.svg'


const Header = () => {
  return (
      <>
         <header>
            <div className="container">
                <button className="btn-menubars"><i className="fa-sharp fa-regular fa-bars"></i></button>
                <div className="logotype">
                    <a href="index.html">
                        <img src={logotype} alt="crito-logo"/>
                    </a>
                </div>
                <div className="contactinformation-bar">
                    <div className="content-box">
                        <i className="fa-solid fa-phone"></i>
                        +46 (8) 121 470 50
                    </div>
                    <div className="content-box">
                        <i className="fa-regular fa-envelope"></i>
                        info@crito.com
                    </div>
                    <div className="content-box last">
                        <i className="fa-solid fa-location-dot"></i>
                        Sveavägen 31, 111 34 STOCKHOLM
                    </div>
                </div>
                <div className="socialmedia-bar">
                    <a href="https://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com/" target="_blank"> <i className="fa-brands fa-twitter"></i></a>
                    <a href="https://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <div className="menu">
                    <nav>
                        <a href="index.html">Home</a>
                        <a href="service.html">Service</a>
                        <a href="news.html">News</a>
                        <a href="contacts.html">Contact</a>
                    </nav>
                    <Button type="yellow" url="/login.html" text="Login" />
                </div>  
            </div>
        </header>
      </>
  )
}

export default Header