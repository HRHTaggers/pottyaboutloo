import { footer } from "../selectors.js";

export const footerView = function() {
    footer.innerHTML = `
        <div class="row">
                <div class="col-sm-8">
                    <div class="footer__app-info">
                        <img src="/src/img/pal-logo-2.png" alt="rAutine logo" class="footer__logo">
                        <p class="footer__app-description">
                            an application to help make potty training fun and engaging for toddlers and preschoolers
                        </p>
                    </div>
                </div>
                <div class="col-sm-4 footer__attribution">
                    <div class="footer__attribution--design">
                        designed by helen tagliarini for the purposes of educational support | please do not copy or use for the purposes of commerce
                    </div>
                    <br />
                    <div class="footer__attribution--logo">
                        <a href="https://htcoding.netlify.app" target="blank" rel="noopener noreferrer">
                            <img src="/src/img/helen-tagliarini-logo-back-light.png" alt="HT Coding logo" class="brand-logo">
                        </a>
                    </div>
                    <div class="footer__attribution--location">
                        london, united kingdom
                    </div>
                </div>
            </div>
    `;
}