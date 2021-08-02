import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <h2>
        <a className='logo' href='/'>
          the planets
        </a>
      </h2>

      <ul>
        <li>
          <a href='#'>
            <h4>mercury</h4>
          </a>
        </li>
        <li>
          <a href='#'>
            <h4>venus</h4>
          </a>
        </li>
        <li>
          <a href='#'>
            <h4>earth</h4>
          </a>
        </li>
        <li>
          <a href='#'>
            <h4>mars</h4>
          </a>
        </li>
        <li>
          <a href='#'>
            <h4>jupiter</h4>
          </a>
        </li>
        <li>
          <a href='#'>
            <h4>saturn</h4>
          </a>
        </li>
        <li>
          <a href='#'>
            <h4>uranus</h4>
          </a>
        </li>
        <li>
          <a href='#'>
            <h4>neptune</h4>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
