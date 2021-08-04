import React from 'react';
import Button from './Button';
import { planets } from '../data';
import { photos } from './assets/photos';
const Hero = () => {
  const url = window.location.href;
  let planet = '';
  let planetImage = '';

  if (url.match('mercury')) {
    planet = 0;
    planetImage = photos.mercury;
  } else if (url.match('venus')) {
    planet = 1;
    planetImage = photos.venus;
  } else if (url.match('earth')) {
    planet = 2;
    planetImage = photos.earth;
  } else if (url.match('mars')) {
    planet = 3;
    planetImage = photos.mars;
  } else if (url.match('jupiter')) {
    planet = 4;
    planetImage = photos.jupiter;
  } else if (url.match('saturn')) {
    planet = 5;
    planetImage = photos.saturn;
  } else if (url.match('uranus')) {
    planet = 6;
    planetImage = photos.uranus;
  } else if (url.match('neptune')) {
    planet = 7;
    planetImage = photos.neptune;
  }

  return (
    <div className='hero-container'>
      <div className='image-container'>
        <img src={planetImage} alt='' />
      </div>

      <div className='planet'>
        <div className='planet-info'>
          <h1>{planets[planet].name}</h1>
          <p className='planet-description'>
            {planets[planet].overview.content}
          </p>
          <p className='source'>{planets[planet].overview.source}</p>
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
