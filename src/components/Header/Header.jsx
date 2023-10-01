import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
        <div className='logo'>
          <a href='/'>
            <span>fazio</span>
            <span>andrea</span>
            <span>.</span>
            <span>me</span>
          </a>
          <h1 style={{display: 'none'}}>fazioandrea.me</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/Contact" disabled>Contact</a>
            </li>
            <li>
              <a href="/about-me" disabled>About Me</a>
            </li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;
