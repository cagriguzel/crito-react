import React from 'react';
import backgroundLines from '../../assets/images/background-lines.svg';

const Showcase2 = ({text}) => {
  return (
    <section className="connect">
      <img className="background-lines" src={backgroundLines} alt="" />
      <div className="container">
        <div className="content">
          <div className="buttons">
            <a href="/">Home</a>
            <a href="/contact">Contact</a>
          </div>
          <h1>{text}</h1>
        </div>
      </div>
    </section>
  );
}

export default Showcase2;
