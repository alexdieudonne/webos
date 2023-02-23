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
                  
                    let settings = JSON.parse(localStorage.getItem("settings") as string);
                    if (localStorage.getItem("settings") === null || localStorage.getItem("settings") === undefined) {
                        document.querySelector('.current-time').textContent = `${currentHours}:${currentMinutes}:${currentSeconds}`;  
                    }
                   

                    switch(settings.time !== null){
                        case settings?.time.showHour && settings?.time.showMinute && settings?.time.showSecond:
                            document.getElementById("showTime").innerHTML = `${currentHours}:${currentMinutes}:${currentSeconds}`;
                            break;
                        case settings?.time.showHour && settings?.time.showMinute && !settings?.time.showSecond:
                            document.getElementById("showTime").innerHTML = `${currentHours}:${currentMinutes}`;
                            break;

                        case settings?.time.showHour && !settings?.time.showMinute && settings?.time.showSecond:
                            document.getElementById("showTime").innerHTML = `${currentHours}:${currentSeconds}`;
                            break;

                        case !settings?.time.showHour && settings?.time.showMinute && settings?.time.showSecond:
                            document.getElementById("showTime").innerHTML = `${currentMinutes}:${currentSeconds}`;
                            break;

                        case settings?.time.showHour && !settings?.time.showMinute && !settings?.time.showSecond:
                            document.getElementById("showTime").innerHTML = `${currentHours}`;
                            break;

                        case !settings?.time.showHour && settings?.time.showMinute && !settings?.time.showSecond:
                            document.getElementById("showTime").innerHTML = `${currentMinutes}`;
                            break;

                        case !settings?.time.showHour && !settings?.time.showMinute && settings?.time.showSecond:
                            document.getElementById("showTime").innerHTML = `${currentSeconds}`;
                            break;
                        
                        case !settings?.time.showHour && !settings?.time.showMinute && !settings?.time.showSecond:
                            document.getElementById("showTime").innerHTML = ``;
                            break;
            
                        default:
                            document.getElementById("showTime").innerHTML = `${currentHours}:${currentMinutes}:${currentSeconds}`;   
                    }
                }, 1000
            )
        }
    })
}

updateCurrentTime();

