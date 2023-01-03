import { OS } from '../type'
import "../scss/lock.scss"
import "../apps/clock"


export default class AppBar extends OS {

    render() {
        return (
            `<header>
                <div class="navbar">
                    <div class="left-side">
                        <span class="network-name">P. Telecom</span>
                    </div>
                    <div class="center-side">
                        <div class="current-time">12:00</div>
                    </div>
                    <div class="right-side">
                        <img src="/img/Network.png" alt="Network icon">
                        <div class="battery">
                            <span class="battery-label">86%</span>
                            <img class="battery-icon" src="/img/Battery.png" alt="Battery icon">
                        </div>
                    </div>
                </div>
        </header>`
        )
    }
}

