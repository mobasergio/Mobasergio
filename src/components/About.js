import React from 'react';
import Profile from '../assets/profile.jpg'
import Certificate from '../assets/certificate-fullstackopen.png'

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
                After 4 years of self directed learning
                (<a target="_blank" rel="noopener noreferrer" href={Certificate}>Full Stack Open</a>, <a target="_blank" rel="noopener noreferrer" href="https://frontendmasters.com/">Frontend Masters</a>)
                and working for individuals as a freelancer I decided to do this portfolio, fill it with my best projects and to start looking for a job.
              </p>
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
  );
}
 
export default About;