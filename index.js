"use strict";

import { headerView } from "/header.js";
import { footerView } from "/footer.js";
import {timerElement} from "./selectors.js";

headerView();

 const timings = 30;
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

 const looWarning = function(time) {
  if (time === `0:00`) {
    timerElement.innerHTML = `I need the loo! Let's go!`;
  }
 };

 looWarning(timerElement);

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
