import React from "react"
import "../styles/layout.css"
import Logo from '../assets/logo.svg'
import Menu from '../assets/menu.svg'
import {Link} from "gatsby"

const sideBar = () => {
  document.querySelector("header > div").classList.toggle("show");
  document.querySelector("body").classList.toggle("disableScroll");
  document.querySelector("main").classList.toggle("blur");
}

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

export default ({ children }) => (
  <div id="container">
    <header>
      <nav>
        <div>
          <Link to="/" aria-label="Home">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div onClick={sideBar}>
          <img src={Menu} alt="" />
        </div>
        <div className="navigation">
          <ol>
            <li><Link to="/#about">About</Link></li>
            <li><Link to="/#work">Work</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
          </ol>
        </div>
      </nav>
      <div>
        <div>
          <nav>
            <ol>
              <li><Link to="/#about" onClick={() => sideBar()}>About</Link></li>
              <li><Link to="/#work" onClick={() => sideBar()}>Work</Link></li>
              <li><Link to="/#contact" onClick={() => sideBar()}>Contact</Link></li>
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