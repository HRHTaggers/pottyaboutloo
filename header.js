import { header } from "../selectors.js";

export const headerView = function () {

  header.innerHTML = `
      <div class="row">
        <div class="col-md-3 p-2 introduction__block">    
          <img src="/src/img/pal-logo-2.png" alt="potty-about-loo logo" class="header__logo" />
        </div>
        <div class="col-md p-2 introduction__subheader subheader-1 introduction__block">
            <div class="row">
              <div class="col-md-3"> 
                <img class="dinosaur-image__large" src="/src/img/dinosaur-large-img.png" />
              </div>
              <div class="col-md p-4">
                <div class="introduction__paragraph">
                  we're learning to use the <span class="large-icon">🚽</span>, but we can't do it on our own. we need your help. 
                </div>
                <div class="introduction__paragraph">we're having fun playing now, but we'll need to go to the loo in...</div>
                <div class="timer__timer-element"></div>
              </div>
              <div class="col-md-3">
                <img class="dinosaur-image__large" src="/src/img/dinosaur-2-large-img.png" />
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