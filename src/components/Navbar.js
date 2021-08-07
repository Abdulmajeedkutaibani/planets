import React from 'react';
import hamburger from './assets/icon-hamburger.svg';
import chevron from './assets/icon-chevron.svg';

const Navbar = () => {
  const handleClick = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navList = document.querySelector('.navList');

    if (!menuBtn.classList.contains('active')) {
      menuBtn.classList.add('active');
      menuBtn.style.opacity = '0.5';
      navList.style.width = '100%';
      navList.style.visibility = 'visible';
    } else {
      menuBtn.classList.remove('active');
      menuBtn.style.opacity = '1';
      navList.style.width = '0';
      navList.style.visibility = 'hidden';
    }
  };

  return (
    <nav>
      <h2>
        <a className='logo' href='mercury'>
          the planets
        </a>
      </h2>

      <div className='menu-btn' onClick={handleClick}>
        <img src={hamburger} alt='' />
      </div>
      <ul className='navList'>
        <li>
          <a href='mercury'>
            <div className='planet-icon mercury'></div>
            <h4>mercury</h4>
            <img src={chevron} alt='' />
          </a>
        </li>
        <li>
          <a href='venus'>
            <div className='planet-icon venus'></div>
            <h4>venus</h4>
            <img src={chevron} alt='' />
          </a>
        </li>
        <li>
          <a href='earth'>
            <div className='planet-icon earth'></div>
            <h4>earth</h4>
            <img src={chevron} alt='' />
          </a>
        </li>
        <li>
          <a href='mars'>
            <div className='planet-icon mars'></div>
            <h4>mars</h4>
            <img src={chevron} alt='' />
          </a>
        </li>
        <li>
          <a href='jupiter'>
            <div className='planet-icon jupiter'></div>
            <h4>jupiter</h4>
            <img src={chevron} alt='' />
          </a>
        </li>
        <li>
          <a href='saturn'>
            <div className='planet-icon saturn'></div>
            <h4>saturn</h4>
            <img src={chevron} alt='' />
          </a>
        </li>
        <li>
          <a href='uranus'>
            <div className='planet-icon uranus'></div>
            <h4>uranus</h4>
            <img src={chevron} alt='' />
          </a>
        </li>
        <li>
          <a href='neptune'>
            <div className='planet-icon neptune'></div>
            <h4>neptune</h4>
            <img src={chevron} alt='' />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
