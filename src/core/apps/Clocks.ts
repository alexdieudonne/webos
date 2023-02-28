import { AppHandler } from "../lib/AppHandler";
import "../scss/clock.scss"

export class Clocks extends AppHandler {
    constructor() {
        super({ icon: "/img/icons/clock.svg", name: "Clock", handler: clockHandle });
    }

    render() {
        return (
            `<section class="clock-app">
                <div class="clock">
                    <div class="background">
                        <div class="indicator hour"></div>
                        <div class="indicator minute"></div>
                        <div class="indicator second"></div>
                    </div>
                    <p class="current-time2"></p>
                </div>

                <div class="stopwatch">
                    <h2 class="stopwatch-title">Stopwatch</h2>
                    <h2 class="stopwatch-time">
                        00:00:00
                    </h2>

                    <div class="stopwatch-controls">
                        <button id="startWatch">Start</button>
                        <button id="stopWatch">Stop</button>
                        <button id="resetWatch">Reset</button>
                    </div>

                    <div class="lap-container">
                        <h2 class="lap-title">Lap history</h2>
                        <div class="lap-list">
                        </div>
                    </div>
                </div>
            </section>`
        )
    }
}
const stopwatchTimer = document.querySelector('.stopwatch-time');
let timer = 0;

const clockHandle = () => {

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

        // @ts-ignore
        hour = hour < 10 ? `0${hour}` : hour;
        // @ts-ignore
        minute = minute < 10 ? `0${minute}` : minute;
        // @ts-ignore
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

    document.querySelector('#startWatch')!.addEventListener('click', startTimer);
    document.querySelector('#stopWatch')!.addEventListener('click', stopTimer);
    document.querySelector('#resetWatch')!.addEventListener('click', resetTimer);
}

// Start the timer when the start button is clicked
const startTimer = () => {

    // If the timer is already running, do nothing
    if (timer) return;

    // Increment the timer
    timer = setInterval(() => {
        const stopwatchTimer = document.querySelector('.stopwatch-time');
        let time = stopwatchTimer.textContent.split(':');
        let hour = parseInt(time[0]);
        let minute = parseInt(time[1]);
        let second = parseInt(time[2]);

        second++;

        if (second === 60) {
            second = 0;
            minute++;
        }

        if (minute === 60) {
            minute = 0;
            hour++;
        }

        // @ts-ignore
        hour = hour < 10 ? `0${hour}` : hour;
        // @ts-ignore
        minute = minute < 10 ? `0${minute}` : minute;
        // @ts-ignore
        second = second < 10 ? `0${second}` : second;

        stopwatchTimer.textContent = `${hour}:${minute}:${second}`;
        console.log(timer)
    }, 1000);
}

// Stop the timer when the stop button is clicked
const stopTimer = () => {
    clearInterval(timer);
    timer = 0;

    // Add a lap to the lap list if the timer is stopped
    const stopwatchTimer = document.querySelector('.stopwatch-time');
    const lapList = document.querySelector('.lap-list');
    const lap = document.createElement('li');
    lap.classList.add('lap');

    // Number the lap and add it to the lap list
    const lapNumber = lapList.children.length + 1;
    lap.textContent = `Lap ${lapNumber}: ${stopwatchTimer.textContent}`;
    lapList.appendChild(lap);


}

// Reset the timer when the reset button is clicked
const resetTimer = () => {
    const stopwatchTimer = document.querySelector('.stopwatch-time');
    clearInterval(timer);
    stopwatchTimer.textContent = '00:00:00';

    // Remove all laps from the lap list
    const lapList = document.querySelector('.lap-list');
    lapList.innerHTML = '';

}

