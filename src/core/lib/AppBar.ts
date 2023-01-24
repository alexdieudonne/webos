import { OS } from '../type'
import "../apps/Clock"

export default class AppBar extends OS {

    render() {
        return (
            `<header>
                <div class="navbar">

                    <div class="left-side loading">
                        <p class="current-time"></p>
                    </div>

                    <div class="right-side">
                        <div class="icon-group network">
                            <span class="network-name">P. Telecom</span>
                            <img src="/img/Network.png" alt="Network icon">
                        </div>
                        <div class="icon-group battery">
                            <span class="battery-label">86%</span>
                            <img class="battery-icon" src="/img/Battery.png" alt="Battery icon">
                        </div>
                    </div>

                </div>
        </header>`
        )
    }
}

