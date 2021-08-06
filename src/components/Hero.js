import React from 'react';
import Button from './Button';
import { planets } from '../data';
import { photos } from './assets/photos';

const Hero = () => {
  const url = window.location.href;
  let planet = '';
  let planetImage = '';
  let planetInternal = '';

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
  const handleOverview = () => {
    document.querySelector('.planet-internal').style.display = 'none';
    document.querySelector('.planet-geology').style.display = 'none';
  };
  const handleStructure = () => {
    document.querySelector('.planet-internal').style.display = 'block';
    document.querySelector('.planet-geology').style.display = 'none';
  };
  const handleSurface = () => {
    document.querySelector('.planet-internal').style.display = 'none';
    document.querySelector('.planet-geology').style.display = 'block';
  };
  return (
    <>
      <div className='hero-container'>
        <div className='image-container'>
          <img src={planetImage} alt='' className='planet-image' />
          <img
            src={photos.mercuryInternal}
            alt=''
            className='planet-internal'
          />
          <img src={photos.mercuryGeology} alt='' className='planet-geology' />
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
            <Button btnText='overview' onClick={handleOverview} />
            <Button btnText='structure' onClick={handleStructure} />
            <Button btnText='surface' onClick={handleSurface} />
          </div>
        </div>
      </div>
      <div className='featured-info'>
        <div className='info-item'>
          <h4> rotation time</h4>
          <h2>{planets[planet].rotation}</h2>
        </div>
        <div className='info-item'>
          <h4>revolution time</h4>
          <h2>{planets[planet].revolution}</h2>
        </div>
        <div className='info-item'>
          <h4>radius</h4>
          <h2>{planets[planet].radius}</h2>
        </div>
        <div className='info-item'>
          <h4>average temp.</h4>
          <h2>{planets[planet].temperature}</h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
