import React from 'react';

const ContactInformation = () => {
  return (
    <>
      <section className="contactinformation-bar">
        <div className="container">
          <div className="box">
            <div className="icon">
              <i className="fa-thin fa-location-dot"></i>
            </div>
            <div className="contact-box">
              <h5>Visit us</h5>
              <p>Sveavägen 31 <br />
              111 34 STOCKHOLM</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa-thin fa-phone"></i>
            </div>
            <div className="contact-box">
              <h5>Call us</h5>
              <p> +46 (8) 121 470 50 <br />
                  +46 (8) 121 470 51</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="fa-thin fa-envelope"></i>
            </div>
            <div className="contact-box">
              <h5>Email us</h5>
              <p>info@crito.com<br />
              support@crito.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactInformation;
