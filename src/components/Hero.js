import React from 'react';
import Button from './Button';
import { planets } from '../data';
import { photos } from './assets/photos';

const Hero = () => {
  const url = window.location.href;
  let planet = '';
  let planetImage = '';
  let planetInternal = '';
  let planetGeology = '';

  if (url.match('venus')) {
    planet = 1;
    planetImage = photos.venus;
    planetInternal = photos.venusInternal;
    planetGeology = photos.venusGeology;
  } else if (url.match('earth')) {
    planet = 2;
    planetImage = photos.earth;
    planetInternal = photos.earthInternal;
    planetGeology = photos.earthGeology;
  } else if (url.match('mars')) {
    planet = 3;
    planetImage = photos.mars;
    planetInternal = photos.marsInternal;
    planetGeology = photos.marsGeology;
  } else if (url.match('jupiter')) {
    planet = 4;
    planetImage = photos.jupiter;
    planetInternal = photos.jupiterInternal;
    planetGeology = photos.jupiterGeology;
  } else if (url.match('saturn')) {
    planet = 5;
    planetImage = photos.saturn;
    planetInternal = photos.saturnInternal;
    planetGeology = photos.saturnGeology;
  } else if (url.match('uranus')) {
    planet = 6;
    planetImage = photos.uranus;
    planetInternal = photos.uranusInternal;
    planetGeology = photos.uranusGeology;
  } else if (url.match('neptune')) {
    planet = 7;
    planetImage = photos.neptune;
    planetInternal = photos.neptuneInternal;
    planetGeology = photos.neptuneGeology;
  } else {
    {
      planet = 0;
      planetImage = photos.mercury;
      planetInternal = photos.mercuryInternal;
      planetGeology = photos.mercuryGeology;
    }
  }

  const handleOverview = () => {
    document.querySelector('.planet-internal').style.display = 'none';
    document.querySelector('.planet-geology').style.display = 'none';
    document.querySelector('.planet-description').innerHTML =
      planets[planet].overview.content;
  };
  const handleStructure = () => {
    document.querySelector('.planet-internal').style.display = 'block';
    document.querySelector('.planet-geology').style.display = 'none';
    document.querySelector('.planet-description').innerHTML =
      planets[planet].structure.content;
  };
  const handleSurface = () => {
    document.querySelector('.planet-internal').style.display = 'none';
    document.querySelector('.planet-geology').style.display = 'block';
    document.querySelector('.planet-description').innerHTML =
      planets[planet].geology.content;
  };
  return (
    <>
      <div className='hero-container'>
        <div className='image-container'>
          <img src={planetImage} alt='' className='planet-image' />
          <img src={planetInternal} alt='' className='planet-internal' />
          <img src={planetGeology} alt='' className='planet-geology' />
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
            <Button btnText='overview' onClick={handleOverview} btnNumber='1' />
            <Button
              btnText='structure'
              onClick={handleStructure}
              btnNumber='2'
            />
            <Button btnText='surface' onClick={handleSurface} btnNumber='3' />
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
