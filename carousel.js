import { carousel } from "/selectors.js";

export const carouselView = function() {
    carousel.innerHTML = `
      <div class="row">
        <div class="carousel__slider" id="slider">
          <div class="button-left slider-button">👎</div>
          <div class="button-right slider-button">👍</div>
          <div class="carousel__slider--item showing carousel__slider--1">
            <div class="row">
              <div class="col-md-2"></div>
              <div class="carousel__slider--item-emoji col-md-3">🚽</div>
              <div class="carousel__slider--item-caption col-md">
                <h2 class="carousel__slider--item-superstar u-padding-top">
                  🦖 let's go to the loo!
                </h2>
              </div>
              <div class="col-md-2"></div>
            </div>
          </div>
          <div class="carousel__slider--item carousel__slider--1">
            <div class="row">
              <div class="col-md-2"></div>
              <div class="carousel__slider--item-emoji col-md-3">🚻</div>
              <div class="carousel__slider--item-caption col-md">
                <h2 class="carousel__slider--item-title">🦕 let's get ready</h2>
                <p class="carousel__slider--item-paragraph">
                  go to the <span class="large-icon">🚽</span>
                </p>
                <p class="carousel__slider--item-paragraph">
                  pull down your <span class="large-icon">👖</span> &
                  <span class="large-icon">🩲</span>
                </p>
              </div>
              <div class="col-md-2"></div>
            </div>
          </div>
          <div class="carousel__slider--item carousel__slider--1">
            <div class="row">
              <div class="col-md-2"></div>
              <div class="carousel__slider--item-emoji col-md-3">💩</div>
              <div class="carousel__slider--item-caption col-md">
                <h2 class="carousel__slider--item-title">
                  do a wee or a poo 🦖
                </h2>
                <p class="carousel__slider--item-paragraph">
                  concentrate on doing a wee
                </p>
                <p class="carousel__slider--item-paragraph">
                  sing a <span class="large-icon">🎶</span> or read a
                  <span class="large-icon">📖</span> if you need to
                </p>
              </div>
              <div class="col-md-2"></div>
            </div>
          </div>
          <div class="carousel__slider--item carousel__slider--3">
            <div class="row">
              <div class="col-md-2"></div>
              <div class="carousel__slider--item-emoji col-md-3">🧻</div>
              <div class="carousel__slider--item-caption col-md">
                <h2 class="carousel__slider--item-title">🦕 clean up</h2>
                <p class="carousel__slider--item-paragraph">wipe your bottom</p>
                <p class="carousel__slider--item-paragraph">
                  pull up your <span class="large-icon">🩲</span> &
                  <span class="large-icon">👖</span>
                </p>
              </div>
              <div class="col-md-2"></div>
            </div>
          </div>
          <div class="carousel__slider--item carousel__slider--3">
            <div class="row">
              <div class="col-md-2"></div>
              <div class="carousel__slider--item-emoji col-md-3">💦</div>
              <div class="carousel__slider--item-caption col-md">
                <h2 class="carousel__slider--item-title">wash up 🦕</h2>
                <p class="carousel__slider--item-paragraph">
                  wash your <span class="large-icon">👐</span> with
                  <span class="large-icon">🧼</span> and
                  <span class="large-icon">💦</span>
                </p>
                <p class="carousel__slider--item-paragraph">
                  dry your <span class="large-icon">👐</span>
                </p>
              </div>
              <div class="col-md-2"></div>
            </div>
          </div>
          <div class="carousel__slider--item carousel__slider--3">
            <div class="row">
              <div class="col-md-2"></div>
              <div class="carousel__slider--item-emoji col-md-3" id="high-five">
                ✋
              </div>
              <div class="carousel__slider--item-caption col-md">
                <div class="carousel__slider--item-title">
                  🦕 you went to the loo!
                  give us a high-five! 🦖
                </div>
                <button class="btn">
                  <a href="/" class="btn__link">
                    <div>thank you for helping us</div>
                    <div>restart the timer</div>
                  </a>
                </button>
              </div>
              <div class="col-md-2"></div>
            </div>
          </div>
            </div>
        </div>`;
}