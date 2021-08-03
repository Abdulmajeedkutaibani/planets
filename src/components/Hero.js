import React from 'react';
import mars from './assets/planet-mars-internal.svg';
import Button from './Button';
import planets from '../data.json';
const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='image-container'>
        <img src={mars} alt='' />
      </div>

      <div className='planet'>
        <div className='planet-info'>
          <h1>{planets[0].name}</h1>
          <p className='planet-description'>{planets[0].overview.content}</p>
          <p className='source'>{planets[0].overview.source}</p>
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
