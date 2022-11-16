import { header } from "../selectors.js";

export const headerView = function () {

  header.innerHTML = `
      <div class="row">
        <div class="col-md-3 p-2 introduction__block">    
          <img src="/pal-logo-2.png" alt="potty-about-loo logo" class="header__logo" />
        </div>
        <div class="col-md p-2 introduction__subheader subheader-1 introduction__block">
            <div class="row">
              <div class="col-md-3 dinosaur-image__large">
                🦕
              </div>
              <div class="col-md-9 p-4">
                <div>
                  hi, i'm dippy!
                </div>
                <div>
                  i'm learning to use the 🚽, but i can't do it on my own. 
                </div>
                <div>
                  will you help me?
                </div>
                <div class="timer__header">i'm having fun playing now, but i'll need to go to the loo in...</div>
                <div class="timer__timer-element"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

  const timerElement = document.querySelector(`.timer__timer-element`);

  const timings = 60;
  let i = 0;
  let timerInterval = setInterval(Timeout, 1000);
  function Timeout() {
    if ((timings * 60 - i) % 60 >= 0) {
      timerElement.innerHTML =
        parseInt(`${(timings * 60 - i) / 60}`) + ` minutes`;
        i++;
    } else {
      timerElement.innerHTML = `Time to go to the loo!`;
    }
    /*else {
      timerElement.innerHTML =
        parseInt(`${(timings * 60 - i) / 60} minutes`) 
        //+
        //":0" +
        //`${(timings * 60 - i) % 60}`;
    }*/
  };
};