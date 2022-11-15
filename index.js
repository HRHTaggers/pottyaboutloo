"use strict";

import { headerView } from "/header.js";
import { footerView } from "/footer.js";
import {timerElement} from "./selectors.js";

headerView();

document.addEventListener("DOMContentLoaded", () => {
  // grab all the slides
  let slides = document.querySelectorAll(".carousel__slider--item");
  // set initial slide
  let currentSlide = 0;
  //grab both buttons
  const nextButton = document.querySelector(".button-right");
  const prevButton = document.querySelector(".button-left");
  function nextSlide() {
    // current slide becomes hidden
    slides[currentSlide].className = "carousel__slider--item";
    // set the current slide as the next one
    currentSlide = (currentSlide + 1) % slides.length;
    // add the class showing to the slide to make it visible
    slides[currentSlide].className = "carousel__slider--item showing";
  }
  function prevSlide() {
    // current slide becomes hidden
    slides[currentSlide].className = "carousel__slider--item";
    // set the current slide as the previous one
    currentSlide = (currentSlide - 1) % slides.length;
    if (currentSlide == -1) {
      currentSlide = slides.length - 1;
    }
    // add the class showing to the slide to make it visible
    slides[currentSlide].className = "carousel__slider--item carousel__slide--${currentSlide} showing";
  }
  nextButton.addEventListener("click", () => {
    // go to next slide on click of the button
    nextSlide();
  });
  prevButton.addEventListener("click", () => {
    // go to previous slide on click of the button
    prevSlide();
  });
});

 const timings = 60;
 let i = 0;
 let timerInterval = setInterval(Timeout, 1000);
 function Timeout() {
   if ((timings * 60 - i) % 60 >= 10) {
     timerElement.innerHTML =
       parseInt(`${(timings * 60 - i) / 60}`) +
       ":" +
       `${(timings * 60 - i) % 60}`;
   } else {
     timerElement.innerHTML =
       parseInt(`${(timings * 60 - i) / 60}`) +
       ":0" +
       `${(timings * 60 - i) % 60}`;
   }
   i++;
 };

/*const setTimer = function () {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  setInterval(
  timerElement.innerHTML = `${hours}:${minutes}`, 1000);
};

setTimer();
*/

footerView();
