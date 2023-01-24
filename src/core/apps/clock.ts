const stopwatchTimer = document.querySelector('.stopwatch-time') as HTMLDivElement;
let timer: number = 0;

const updateCurrentTime = (): void => {
    
    document.addEventListener("DOMContentLoaded", () => {
        const clock = document.querySelector('.current-time') as HTMLDivElement;
        if (clock) {
            setInterval(
                () => {
                    const date = new Date();
                    let hours: number  = date.getHours();
                    let minutes: number  = date.getMinutes();
                    let seconds: number  = date.getSeconds();

                    const currentHours : String | number = hours < 10 ? `0${hours}` : hours;
                    const currentMinutes : String | number = minutes < 10 ? `0${minutes}` : minutes;
                    const currentSeconds : String | number = seconds < 10 ? `0${seconds}` : seconds;

                    // TODO: Check if the user wants to display seconds in the settings
                    // clock.textContent = `${currentHours}:${currentMinutes}:${currentSeconds}`;
                    clock.textContent = `${currentHours}:${currentMinutes}`;
                }, 1000
            )
        }
    })
}

updateCurrentTime();



