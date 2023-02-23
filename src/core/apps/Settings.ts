import { AppHandler } from "../lib/AppHandler";
import "../scss/settings.scss"

export class Settings extends AppHandler {
    constructor() {
        super({ icon: "/img/icons/settings.svg", name: "Settings", handler: saveSettings });
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
                            <input id="network" type="checkbox">
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
                 <section>
                    <h3>Weather</h3>
                    <div class="bloc-label">
                        <h5>Afficher la la meteo</h5> 
                        <label class="switch">
                            <input id="weather" type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>
                </section>

                <button id="download">Télécharger les paramètres</button>
                <button id="upload">Charger les paramètres</button>
            </div>
        `)
    }
}


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
        showLatency: true,
    },
    battery: {
        showBattery: true,
    },
    weather: {
        showWeather: true,
    }
}

const saveSettings = ()=> {

    if (localStorage.getItem("settings") === null || localStorage.getItem("settings") === undefined) {
        localStorage.setItem("settings", JSON.stringify(savedSettings));
    }

    let settings = JSON.parse(localStorage.getItem("settings") as string);


    let date = document.getElementById("date") as HTMLInputElement;
    let day = document.getElementById("day") as HTMLInputElement;
    let month = document.getElementById("month") as HTMLInputElement;
    let year = document.getElementById("year") as HTMLInputElement;
    let hour = document.getElementById("hour") as HTMLInputElement;
    let minute = document.getElementById("minute") as HTMLInputElement;
    let second = document.getElementById("second") as HTMLInputElement;
    let latency = document.getElementById("network") as HTMLInputElement;
    let battery = document.getElementById("battery") as HTMLInputElement;
    let weather = document.getElementById("weather") as HTMLInputElement;

    if(!date || !day || !month || !year || !hour || !minute || !second || !latency || !battery) console.log("Error while getting elements");

    date.checked = settings.date.showDate;
    day.checked = settings.date.showDay;
    month.checked = settings.date.showMonth;
    year.checked = settings.date.showYear;
    hour.checked = settings.time.showHour;
    minute.checked = settings.time.showMinute;
    second.checked = settings.time.showSecond;
    latency.checked = settings.network.showLatency;
    battery.checked = settings.battery.showBattery;
    weather.checked = settings.weather.showWeather;

    date.addEventListener("change", () => {
        settings.date.showDate = date.checked;
        localStorage.setItem("settings", JSON.stringify(settings));
    });

    day.addEventListener("change", () => {
        settings.date.showDay = day.checked;
        localStorage.setItem("settings", JSON.stringify(settings));
    });

    month.addEventListener("change", () => {
        settings.date.showMonth = month.checked;
        localStorage.setItem("settings", JSON.stringify(settings));
    });

    year.addEventListener("change", () => {
        settings.date.showYear = year.checked;
        localStorage.setItem("settings", JSON.stringify(settings));
    });

    hour.addEventListener("change", () => {
        settings.time.showHour = hour.checked;
        localStorage.setItem("settings", JSON.stringify(settings));
    });

    minute.addEventListener("change", () => {
        settings.time.showMinute = minute.checked;
        localStorage.setItem("settings", JSON.stringify(settings));
    });

    second.addEventListener("change", () => {
        settings.time.showSecond = second.checked;
        localStorage.setItem("settings", JSON.stringify(settings));
    });

    latency.addEventListener("change", () => {
        settings.network.showLatency = latency.checked;
        localStorage.setItem("settings", JSON.stringify(settings));
        if (latency.checked) {
            document.getElementById("showNetwork").style.visibility = "visible";
        } else {
            document.getElementById("showNetwork").style.visibility = "hidden";
        }
    });

    battery.addEventListener("change", () => {
        settings.battery.showBattery = battery.checked;
        localStorage.setItem("settings", JSON.stringify(settings));
        //add hidden visibility to battery percent
        if (battery.checked) {
            document.getElementById("showBattery").hidden = false;
        } else {
            document.getElementById("showBattery").hidden = true;
        }

    }); 

    weather.addEventListener("change", () => {
        settings.weather.showWeather = weather.checked;
        localStorage.setItem("settings", JSON.stringify(settings));
        console.log(document.getElementById("showWeather").hidden)
        //add hidden visibility to battery percent
        if (weather.checked) {
            document.getElementById("showWeather").style.visibility = "visible";
        } else {
            document.getElementById("showWeather").style.visibility = "hidden";
        }

    });

    let download = document.getElementById("download") as HTMLParagraphElement;
    download.addEventListener("click", () => {
        exportSettingsToJSON();
    });

    let upload = document.getElementById("upload") as HTMLParagraphElement;
    upload.addEventListener("click", () => {
        importSettingFromJSON();
    });
}

function exportSettingsToJSON() {
    let settings = JSON.parse(localStorage.getItem("settings") as string);
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(settings));
    let downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "settings.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function importSettingFromJSON() {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = e => {
        let file = (e.target as HTMLInputElement).files[0];
        let reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = readerEvent => {
            let content = (readerEvent.target as any).result;
            localStorage.setItem("settings", content);
            saveSettings();
        }
    }
    input.click();
}