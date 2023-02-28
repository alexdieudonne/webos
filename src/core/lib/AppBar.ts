import { OS } from '../type'
import "../apps/Clocks"
import "../apps/Battery"
import "../apps/Performance"
import "../apps/Weather"
import "../apps/DateTime"

export default class AppBar extends OS {

    constructor() {
        super();
        document.addEventListener("DOMContentLoaded", () => {
            const darkModeIcon = document.querySelector<HTMLButtonElement>("#darkModeIcon")!;
            darkModeIcon.addEventListener("click", this.toggleDarkMode.bind(this));
        });
    }

    render() {
        return (
            `<header id="header">
                <div class="navbar">

                    <div class="left-side">
                        <div id="darkModeIcon">
                            <img class="dark-mode-icon" src="/img/icons/sun.png" alt="Dark mode icon">
                        </div>

                        <p id="showTime" class="current-time"></p>
                        <p id="showDate" class="current-date"></p>
                    </div>
                    <div class="center-side">
                        <div id="showWeather" class="weather">
                            <span class="weather-temp"></span>
                            <img src="" alt="" class="weather-icon" loading="lazy" data-show>
                            <span class="weather-location"></span>
                            <a class="refresh-btn" onclick="location.reload();">
                                <img class="refresh-icon" width="24px" height="24px" src="/img/Refresh.png" alt="Refresh icon">
                            </a>
                        </div>
                    </div>

                    <div class="right-side">
                        <div id="showNetwork" class="icon-group network">
                            <p>Latency: <span id="latency">0</span></p>
                            <span class="network-name">P. Telecom</span>
                            <img id="network-icon" src="/img/Network.png" alt="Network icon" title="Latency: 0 ms">
                        </div>
                        <div id="showBattery" class="battery">
                            <span class="battery-label"></span>
                            <img class="battery-icon" src="/img/Battery.png" alt="Battery icon">
                        </div>
                    </div>

                </div>
        </header>`
        )
    }

    toggleDarkMode() {
        new Audio("/audio/notif.mp3").play();
        const header = document.getElementById("header") as HTMLDivElement;
        const app = document.getElementById("app-main") as HTMLDivElement;
        const currentTheme = localStorage.getItem("settings.darkMode");
        const darkModeIcon = document.querySelector<HTMLImageElement>("#darkModeIcon > img")!;

        if (currentTheme === "true") {
            localStorage.setItem("settings.darkMode", "false");
            darkModeIcon.src = "/img/icons/sun.png";

            // Handle header
            header.style.backgroundColor = "#1A1B26";
            header.style.color = "white";

            // Handle app
            app.style.backgroundColor = "#24252d";
            app.style.color = "white";
        } else {
            localStorage.setItem("settings.darkMode", "true");
            darkModeIcon.src = "/img/icons/moon.png";

            // Handle header
            header.style.backgroundColor = "#507e93";
            header.style.color = "black";

            // Handle app
            app.style.backgroundColor = "#f2f2f2";
            app.style.color = "black";
        }
    }
}


