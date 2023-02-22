import { OS } from '../type'
import "../apps/clock"
import "../apps/Battery"
import "../apps/Performance"
import "../apps/Weather"

export default class AppBar extends OS {

    render() {
        return (
            `<header>
                <div class="navbar">

                    <div class="left-side loading">
                        <p class="current-time"></p>
                    </div>
                    <div class="center-side">
                        <section class="weather">
                            <span class="weather-temp"></span>
                            <img src="" alt="" class="weather-icon" loading="lazy" data-show>
                            <span class="weather-location"></span>
                            <a class="refresh-btn" onclick="location.reload();">
                                <img class="refresh-icon" width="24px" height="24px" src="/img/Refresh.png" alt="Refresh icon">
                            </a>
                        </section>
                    </div>

                    <div class="right-side">
                        <div class="icon-group network">
                            <p>Latency: <span id="latency">0</span></p>
                            <span class="network-name">P. Telecom</span>
                            <img id="network-icon" src="/img/Network.png" alt="Network icon" title="Latency: 0 ms">
                        </div>
                        <div class="battery">
                            <span class="battery-label"></span>
                            <img class="battery-icon" src="/img/Battery.png" alt="Battery icon">
                        </div>
                    </div>

                </div>
        </header>`
        )
    }
}

