const stopwatchTimer = document.querySelector('.stopwatch-time') as HTMLDivElement;
let timer: number = 0;

const updateCurrentTime = (): void => {
    
    
    document.addEventListener("DOMContentLoaded", () => {
        // Query Selector for the clock
        const clock = document.querySelector('.current-time') as HTMLDivElement;
        // If the clock exists, update the clock
        if (clock) {
            // Fix the format if the time is less than 10
            
            // Update the clock
            setInterval(
                () => {
                    const date = new Date();
                    let hour: number  = date.getHours();
                    let minute: number  = date.getMinutes();
                    let second: number  = date.getSeconds();

                    const myhour : String | number = hour < 10 ? `0${hour}` : hour;
                    const myminute : String | number = minute < 10 ? `0${minute}` : minute;
                    const mysecond : String | number = second < 10 ? `0${second}` : second;
                    console.log(`${myhour}:${myminute}:${mysecond}`)

                    clock.textContent = `${myhour}:${myminute}:${mysecond}`;
                }, 1000
            )
        }
    })
}

updateCurrentTime();



