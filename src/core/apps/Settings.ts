import { AppHandler } from "../lib/AppHandler";
import "../scss/settings.scss"

export class Settings extends AppHandler {
    constructor() {
        super({ icon: "/img/icons/settings.svg", name: "Settings", handler: () => { } });
    }

    render() {
        return (`
            <div class="settings">
                <h3>Paramètres</h3>

                <section class="settings-section">
                    <h3>Date</h3>

                    <label class='toggle' for='toggleDate'>
                        <input type='checkbox' name='toggleDate' id='toggleDate' class="toggle__input" checked />
                        <span class="toggle__display" hidden></span>
                        Display date
                    </label>

                    <label class='toggle' for='toggleYear'>
                        <input type='checkbox' name='toggleYear' id='toggleYear' class="toggle__input" checked />
                        <span class="toggle__display" hidden></span>
                        Display year
                    </label>

                    <label class='toggle' for='toggleMonth'>
                        <input type='checkbox' name='toggleMonth' id='toggleMonth' class="toggle__input" checked />
                        <span class="toggle__display" hidden></span>
                        Display month
                    </label>

                    <label class='toggle' for='toggleDay'>
                        <input type='checkbox' name='toggleDay' id='toggleDay' class="toggle__input" checked />
                        <span class="toggle__display" hidden></span>
                        Display day
                    </label>
                </section>

                <section class="settings-section">
                    <h3>Heures</h3>

                    <label class='toggle' for='toggleHour'>
                        <input type='checkbox' name='toggleHour' id='toggleHour' class="toggle__input" checked />
                        <span class="toggle__display" hidden></span>
                        Display hour
                    </label>

                    <label class='toggle' for='toggleMinute'>
                        <input type='checkbox' name='toggleMinute' id='toggleMinute' class="toggle__input" checked />
                        <span class="toggle__display" hidden></span>
                        Display minute
                    </label>

                    <label class='toggle' for='toggleSecond'>
                        <input type='checkbox' name='toggleSecond' id='toggleSecond' class="toggle__input" checked />
                        <span class="toggle__display" hidden></span>
                        Display second
                    </label>
                </section>

                <section class="settings-section">
                    <h3>Réseau</h3>

                    <label class='toggle' for='toggleLatency'>
                        <input type='checkbox' name='toggleLatency' id='toggleLatency' class="toggle__input" checked />
                        <span class="toggle__display" hidden></span>
                        Display latency
                    </label>

                    <div class="bloc-label">
                        <label for="input_latency">Latency domain</label>
                        <input id="input_latency" placeholder="https://google.fr">
                    </div>
                </section>

                <section class="settings-section">
                    <h3>Batterie</h3>
                    <div class="bloc-label">
                        <h5>Afficher la batterie</h5>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>
                </section>
            </div>
        `)
    }
}

// TODO: Add a settings manager to save the settings
let savedSettings = {
    date: {
        showDay: true,
        showDate: true,
        showMonth: true,
        showYear: true
    },
    time: {
        showHour: true,
        showMinute: true,
        showSecond: true
    },
    network: {
        showProvider: true,
        showLatency: true,
        latencyDomain: "https://google.fr"
    },
    battery: {
        showBattery: true,
        showBatteryPercent: true
    }
}
console.log(savedSettings);

// Handle the toggle of the switch for the settings