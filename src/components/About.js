import React from 'react';
import Profile from '../assets/profile.jpg'

const About = () => {
  return (
    <section id="about">
        <h3>About Me</h3>
        <div>
          <div>
            <div>
              <p>
                Hello! I'm Sergio, a Frontend web developer based in Barcelona,
                Spain. Who enjoys building things that live on the internet. I
                develop exceptional, intuitive, responsive, pixel-perfect
                websites and web apps.
              </p>
              <p>
                After +4 years of self directed learning and working for individuals as a freelancer I joined the
                <a target="_blank" rel="noopener noreferrer" href="https://www.habitatsoft.com/"> HabitatSoft</a> team
                where I work as a Frontend Developer.
              </p>
              <p>Here's a few technologies I've been working with recently:</p>
            </div>
            <ul>
              <li>Javascript (ES6+)</li>
              <li>HTML & CSS (LESS)</li>
              <li>React / Redux</li>
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
  );
}
 
export default About;