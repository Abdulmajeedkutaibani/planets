import React from 'react';
import mars from './assets/planet-mars-internal.svg';
import Button from './Button';
const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='image-container'>
        <img src={mars} alt='' />
      </div>

      <div className='planet'>
        <div className='planet-info'>
          <h1>mars</h1>
          <p className='planet-description'>
            Mars is the fourth planet from the Sun and the second-smallest
            planet in the Solar System, being larger than only Mercury. In
            English, Mars carries the name of the Roman god of war and is often
            referred to as the "Red Planet".
          </p>
          <p className='source'>Source : Wikipedia</p>
        </div>
        <div className='info-btns'>
          <Button btnText='overview' />
          <Button btnText='structure' />
          <Button btnText='surface' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
