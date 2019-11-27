import React, { useEffect } from 'react';
import Profile from '../assets/profile.jpg'
import Folder from '../assets/folder.svg'
import Github from '../assets/github.svg'
import External from '../assets/external.svg'

const Content = () => {
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      (prevScrollpos > currentScrollPos) ? document.querySelector("header").style.top = "0" : document.querySelector("header").style.top = "-100px";
      currentScrollPos !== 0 ? document.querySelector("header").classList.add("navbarScroll") : document.querySelector("header").classList.remove("navbarScroll");
      prevScrollpos = currentScrollPos;
    }
  })
  
  return (
    <main>

      <section>
        <h1>Hi, my name is</h1>
        <h2>Sergio Moreno.</h2>
        <h3>I build things for the web.</h3>
        <div>I'm a Frontend Web Developer based in Barcelona, Spain specializing in building (and occasionally designing) exceptional, high-quality websites and applications.</div>
        <div><a href="mailto:mobasergio@gmail.com">Get in touch</a></div>
      </section>

      <section id="about">
        <h3>About Me</h3>
        <div>
          <div>
            <div>
              <p>Hello! I'm Sergio, a Frontend web developer based in Barcelona, Spain who enjoys building things that live on the internet. I develop exceptional, intuitive, responsive, pixel-perfect websites and web apps.</p>
              <p>After 3 years of self directed learning and working as a freelancer I decided to take the <a target="_blank" href="/assets/certificate-fullstackopen.png">Full Stack open</a> course, to do this portfolio and to start looking for a job.</p>
              <p>Here's a few technologies I've been working with recently:</p>
            </div>
            <ul>
              <li>Javascript (ES6+)</li>
              <li>HTML & CSS (LESS)</li>
              <li>React</li>
              <li>React Native</li>
              <li>Vue</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div>
            <div>
              <a href="https://www.github.com/mobasergio" target="_blank" rel="noopener noreferrer">
                <div></div>
                <img src={Profile} alt="Profile" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <h3>Some things I've built</h3>
        <div>

          <div>
            <div>
              <div id="icons">
                <div>
                  <img src={Folder} alt="folder icon" />
                </div>
                <div>
                  <a href="https://github.com/mobasergio/Mobasergio" target="_blank" rel="noopener noreferrer">
                    <img src={Github} alt="github icon" />
                  </a>
                  <a href="https://www.mobasergio.com" target="_blank" rel="noopener noreferrer">
                    <img src={External} alt="external link icon" />
                  </a>
                </div>
              </div>
              <h5>Test project</h5>
              <p>Test description of the project</p>
            </div>
            <div>
              <ul>
                <li>Test tech 1</li>
                <li>Test tech 2</li>
                <li>Test tech 3</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <section id="contact">
        <h3>What's next?</h3>
        <h4>Get in touch</h4>
        <p>Feel free to get in touch with me, drop me a message or just say hi! I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
        <a href="mailto:mobasergio@gmail.com">Say hello!</a>
      </section>

    </main>
  );
}
 
export default Content;