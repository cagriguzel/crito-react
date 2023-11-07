import React from 'react';
import Backgroundlines from '../../assets/images/background-wavy-lines.svg'
import Button from '../Generics/Button';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <img className="background-wavy-lines" src= {Backgroundlines} alt="" />
      <div className="container">
        <h2>Get News Updates By Signup</h2>
        <form>
          <input type="email" placeholder="username@domain.com" />
          <Button type='yellow' text='Subscribe'/>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
