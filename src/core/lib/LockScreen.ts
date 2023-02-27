import { OS } from '../type'
import "../scss/lock.scss"

export default class LockScreen extends OS {

    constructor() {
        super();
        document.addEventListener("DOMContentLoaded", () => {
            const cta = document.querySelector<HTMLButtonElement>("#cta")!;
            cta.addEventListener("click", this.unlock.bind(this));
        });
    }

    render() {
        return (
            `
            <main>
                <section class="lock-screen flex flex-center">
                    <div class="lock-screen_top">
                        <div class="current-time">
                            <span class="current-time_hour">12:00</span>
                            <span class="current-time_date">Monday, 1st January</span>
                            <section class="weather flex flex-center">
                                <span class="weather-temp"></span>
                                <img src="" alt="" class="weather-icon" loading="lazy" data-show>
                                <span class="weather-location"></span>
                                <a class="refresh-btn" onclick="location.reload();">
                                    <img class="refresh-icon" src="/img/Refresh.png" alt="Refresh icon">
                                </a>
                            </section>
                        </div>
                    </div>

                    <!-- <div class="lock-screen_content">
                        <div class="lock-screen_content_blur"></div>
                        <div class="lock-screen_content_unlock">
                            <h2>Enter your password</h2>
                            <p>
                                a password contains at least 4 caracters and at least one letter
                            </p>


                            <div class="password-input">
                                <input type="password" name="password" id="password">
                                <img class="password-input_icon" src="/img/Show.png" alt="Show password">
                            </div>

                        </div>
                    </div> -->

                    <div class="lock-screen_footer">
                        <div class="lock-screen_footer-left icon-container">
                            <img src="/img/Phone.png" alt="Phone icon">
                        </div>

                        <div class="lock-screen_footer-center flex flex-center">
                            <span>Press to unlock</span>
                            <a id="cta">
                                <img src="/img/Fingerprint.svg" alt="Fingerprint svg">
                                <div class="ripple"></div>
                            </a>
                        </div>

                        <a href="/views/camera.html" class="lock-screen_footer-right icon-container">
                            <img src="/img/Photo.png" alt="Photo icon">
                        </a>
                    </div>

                </section>
            </main>
            `
        )
    }

    unlock() {
        sessionStorage.setItem('locked', 'true');
        location.reload();
    }
}

