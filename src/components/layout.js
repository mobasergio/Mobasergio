import React from "react"
import "../styles/layout.css"
import Logo from '../assets/logo.svg'
import Menu from '../assets/menu.svg'

const sideBar = () => {
  document.querySelector("header > div").classList.toggle("show");
  document.querySelector("body").classList.toggle("disableScroll");
  document.querySelector("main").classList.toggle("blur");
}

export default ({ children }) => (
  <div id="container">
    <header>
      <nav>
        <div>
          <a href="https://www.mobasergio.com" aria-label="Home">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div onClick={sideBar}>
          <img src={Menu} alt="" />
        </div>
        <div className="navigation">
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
    <main>
      {children}
    </main>
    <footer></footer>
  </div>
)