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
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;