import React, {useEffect} from 'react';

const Hero = () => {

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
    <section>
      <h1>Hi, my name is</h1>
      <h2>Sergio Moreno.</h2>
      <h3>I build things for the web.</h3>
      <div>
        I'm a Frontend Web Developer raised in <a href="https://vimeo.com/254594826" target="_blank" rel="noopener noreferrer">Tarifa</a>, and based in Barcelona, specializing in
        building (and occasionally designing) exceptional, high-quality
        websites and applications.
      </div>
      <div>
        <a href="mailto:mobasergio@gmail.com">Get in touch</a>
      </div>
    </section>
  );
}
 
export default Hero;