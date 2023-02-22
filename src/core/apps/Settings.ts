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
                <section>
                    <h3>Date</h3>
                    <div class="bloc-label">
                        <h5>Afficher la date</h5> 
                        <label class="switch">
                            <input id="date" type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>

                    <div class="bloc-label">
                        <h5>Afficher l'année</h5> 
                        <label class="switch">
                            <input id="year" type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>

                    <div class="bloc-label">
                        <h5>Afficher le mois</h5> 
                        <label class="switch">
                            <input id="month" type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>

                    <div class="bloc-label">
                        <h5>Afficher le jour</h5> 
                        <label class="switch">
                            <input id="day" type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>
                </section>

                <section>
                    <h3>Heures</h3>
                    <div class="bloc-label">
                        <h5>Afficher le l'heure</h5>
                        <label class="switch">
                            <input id="hour" type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>
                    <div class="bloc-label">
                        <h5>Afficher les minutes</h5> 
                        <label class="switch">
                            <input id="minute" type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>
                    <div class="bloc-label">
                        <h5>Afficher les secondes</h5> 
                        <label class="switch">
                            <input id="second" type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>
                </section>
                <section>
                    <h3>Réseau</h3>
                    <div class="bloc-label">
                        <h5>Afficher la latence</h5> 
                        <label class="switch">
                            <input id="latency" type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>
                </section>

                <section>
                    <h3>Batterie</h3>
                    <div class="bloc-label">
                        <h5>Afficher la batterie</h5> 
                        <label class="switch">
                            <input id="battery" type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>
                </section>
            </div>
        `)
    }
}
/*
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
    },
    battery: {
        showBattery: true,
        showBatteryPercent: true
    }
}
*/


