import React from 'react';
import Logo from '../assets/logo.svg'
import Menu from '../assets/menu.svg'

const MainHeader = () => {
  return ( 
    <header>
      <nav>
        <div>
          <a href="https://www.mobasergio.com" aria-label="Home">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div onClick="sideBar()">
          <img src={Menu} alt="" />
        </div>
        <div class="navigation">
          <ol>
            <li><a href="#about">About</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ol>
        </div>
      </nav>
      <div>
        <div>
          <nav>
            <ol>
              <li><a href="#about">About</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ol>
          </nav>
        </div>
      </div>
    </header>
  );
}
 
export default MainHeader;