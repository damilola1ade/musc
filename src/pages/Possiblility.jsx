import React from 'react';
import possibilityImage from '../assets/possibility.png';
import '../../src//possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img data-aos='fade-left' src={possibilityImage} alt="possibility" />
    </div>
    <div data-aos='fade-left' className="lg:pb-24 mx-auto px-4 sm:px-6 gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Partner with us and get access to our team of IT experts. We will evaluate, update, monitor, and refine your networks and communications. Only pay for the hardware and software your business needs and get more out of your existing infrastructure investment. </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;