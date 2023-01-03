import { AppHandler } from "../lib/AppHandler";
import "../scss/settings.scss"


export class Settings extends AppHandler {
    constructor() {
        super({ icon: "/img/icons/settings.png", name: "Settings", handler: () => { } });

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
                            <input type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>

                    <div class="bloc-label">
                        <h5>Afficher l'année</h5> 
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>

                    <div class="bloc-label">
                        <h5>Afficher le mois</h5> 
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>

                    <div class="bloc-label">
                        <h5>Afficher le jour</h5> 
                        <label class="switch">
                            <input type="checkbox">
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
                        <input type="checkbox">
                        <span class="slider round">
                        </span>
                    </label>
                  </div>
                    <div class="bloc-label">
                        <h5>Afficher les minutes</h5> 
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>
                    <div class="bloc-label">
                        <h5>Afficher les secondes</h5> 
                        <label class="switch">
                            <input type="checkbox">
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
                            <input type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>

                    <div class="bloc-label">
                        <h5>Domaine de latence checking</h5> 
                        <label for="input_latency">
                            <input id="input_latency" placeholder="https://google.fr">
                        </label>
                    </div>
                </section>

                <section>
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

