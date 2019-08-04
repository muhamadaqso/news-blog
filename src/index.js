import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

var links = document.querySelectorAll('.smoothScroll');
const transitionSpeed = 10; 
const initialSpeed = 20;
const acceleration = 0.15; 
const offset = 10; 

links.forEach(link =>
  link.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    var goingTo;
    var hrefID = link.getAttribute('href');

    if (hrefID === '#') {
      goingTo = document.body;
    } else {
      goingTo = document.querySelector(hrefID);
    }


    var totalTraveled = 0;

    if (link.offsetTop > goingTo.offsetTop) {
      let speed = -initialSpeed;
      let distance = goingTo.offsetTop - window.scrollY + offset;
      console.log('Going up by ' + distance + 'px');

      let interval = setInterval(function() {
        window.scrollBy(0, speed);
        totalTraveled += speed;
        speed = Math.round(speed - acceleration);

        if (totalTraveled <= distance) {
          window.scrollBy(0, totalTraveled - distance);
          console.log('Fixing distance by ' + (totalTraveled - distance));
          clearInterval(interval);
        }
      }, transitionSpeed);
    } else {
      let distance = goingTo.offsetTop - window.scrollY - offset;
      let speed = initialSpeed;
      console.log('Going down by ' + distance + 'px');

      let interval = setInterval(function() {
        window.scrollBy(0, speed);
        totalTraveled += speed;
        speed = Math.round(speed + acceleration);

        if (totalTraveled >= distance) {
          window.scrollBy(0, -(totalTraveled - distance));
          clearInterval(interval);
        }
      }, transitionSpeed);
    }
  })
);
