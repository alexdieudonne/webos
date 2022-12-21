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
                    <h3>Heures</h3>
                    <div class="bloc-label">
                    <h5>Afficher le l'heure</h5> 
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round">
                        </span>
                    </label>
                  </div>
                    <div>
                        <h5>Afficher les minutes</h5> 
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>
                    <div>
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
                    <div><h5>Afficher le réseau</h5> </div>
                    <div><h5>Réseau</h5> </div>
                </section>
            </div>
        `)
    }
}

