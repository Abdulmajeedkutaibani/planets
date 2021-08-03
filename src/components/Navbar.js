import React from 'react';
import hamburger from './assets/icon-hamburger.svg';
import chevron from './assets/icon-chevron.svg';

const Navbar = () => {
  const handleClick = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navList = document.querySelector('.navList');

    menuBtn.style.opacity = '0.5';
    navList.style.display = 'flex';
  };
  return (
    <nav>
      <h2>
        <a className='logo' href='/'>
          the planets
        </a>
      </h2>

      <div className='menu-btn' onClick={handleClick}>
        <img src={hamburger} alt='' />
      </div>
      <ul className='navList'>
        <li>
          <a href='#'>
            <div className='planet-icon mercury'></div>
            <h4>mercury</h4>
            <img src={chevron} alt='' />
          </a>
        </li>
        <li>
          <a href='#'>
            <div className='planet-icon venus'></div>
            <h4>venus</h4>
            <img src={chevron} alt='' />
          </a>
        </li>
        <li>
          <a href='#'>
            <div className='planet-icon earth'></div>
            <h4>earth</h4>
            <img src={chevron} alt='' />
          </a>
        </li>
        <li>
          <a href='#'>
            <div className='planet-icon mars'></div>
            <h4>mars</h4>
            <img src={chevron} alt='' />
          </a>
        </li>
        <li>
          <a href='#'>
            <div className='planet-icon jupiter'></div>
            <h4>jupiter</h4>
            <img src={chevron} alt='' />
          </a>
        </li>
        <li>
          <a href='#'>
            <div className='planet-icon saturn'></div>
            <h4>saturn</h4>
            <img src={chevron} alt='' />
          </a>
        </li>
        <li>
          <a href='#'>
            <div className='planet-icon uranus'></div>
            <h4>uranus</h4>
            <img src={chevron} alt='' />
          </a>
        </li>
        <li>
          <a href='#'>
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
