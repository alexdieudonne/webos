import { AppHandler } from "../lib/AppHandler";
import "../scss/clock.scss"

export class Clocks extends AppHandler {
    constructor() {
        super({ icon: "/img/icons/clock.svg", name: "Clock", handler: clockHandle });
    }

    render() {
        return (
            `<section>
                <div class="clock">
                    <div class="background">
                        <div class="indicator hour"></div>
                        <div class="indicator minute"></div>
                        <div class="indicator second"></div>
                    </div>
                    <p class="current-time2"></p>
                </div>
            </section>`
        )
    }
}
const clockHandle = () => {
    console.log("Hello World, from Clocks.ts");

    const stopwatchTimer = document.querySelector('.stopwatch-time');
    let timer = 0;

    const updateCurrentTime = () => {

        // Variables
        const hourHand = document.querySelector('.clock .hour');
        const minuteHand = document.querySelector('.clock .minute');
        const secondHand = document.querySelector('.clock .second');

        const date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();

        hour = hour < 10 ? `0${hour}` : hour;
        minute = minute < 10 ? `0${minute}` : minute;
        second = second < 10 ? `0${second}` : second;

        // Update the clock
        const getTime = document.querySelector('.current-time2');
        getTime.textContent = `${hour}:${minute}:${second}`;
        document.querySelector('.clock .hour').style.transform = `translate(-50%, -50%) rotate(${((hour / 12) * 360) + 90}deg)`;
        document.querySelector('.clock .minute').style.transform = `translate(-50%, -50%) rotate(${((minute / 60) * 360) + 90}deg)`;
        document.querySelector('.clock .second').style.transform = `translate(-50%, -50%) rotate(${((second / 60) * 360) + 90}deg)`;


        // Rotation for the clock hands
        const hourDeg = ((hour / 12) * 360) + 90;
        const minuteDeg = ((minute / 60) * 360) + 90;
        const secondDeg = ((second / 60) * 360) + 90;

        // Reset the clock hands
        secondDeg === 90 ? secondHand.style.transition = 'none' : secondHand.style.transition = 'all 0.1s ease';
        minuteDeg === 90 ? minuteHand.style.transition = 'none' : minuteHand.style.transition = 'all 0.2s ease';
        hourDeg === 90 ? hourHand.style.transition = 'none' : hourHand.style.transition = 'all 0.3s ease';

        // Rotate the clock hands
        hourHand.style.transform = `translate(-50%, -50%) rotate(${hourDeg}deg)`;
        minuteHand.style.transform = `translate(-50%, -50%) rotate(${minuteDeg}deg)`;
        secondHand.style.transform = `translate(-50%, -50%) rotate(${secondDeg}deg)`;
    }

    // Update the time if the clock exists
    if (document.querySelector('.current-time2_hour')) {
        const getTime = document.querySelector('.current-time2_hour');
        getTime.textContent = new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' });

        setInterval(() => {
            getTime.textContent = new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' });
        }, 1000);
    }

    // Update the date if the date exists
    if (document.querySelector('.current-time2_date')) {
        const getDate = document.querySelector('.current-time2_date');
        console.log(getDate);
        getDate.textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });
    }


    // Update the clock every second if the clock exists
    document.querySelector('.clock') ? setInterval(updateCurrentTime, 1000) : null;
}
