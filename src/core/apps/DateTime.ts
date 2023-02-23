
const updateCurrrentDate = (): void => {
    
    document.addEventListener("DOMContentLoaded", () => {
        const date = document.querySelector('.current-date') as HTMLDivElement;
        if (date) {
            setInterval(
                () => {
                    const theDate = new Date();
                    //display the date
                    let day: number  = theDate.getDate();
                    let month: number  = theDate.getMonth();
                    let year: number  = theDate.getFullYear();

                    const currentDay : String | number = day < 10 ? `0${day}` : day;
                    const currentMonth : String | number = month < 10 ? `0${month}` : month;
                    const currentYear : String | number = year < 10 ? `0${year}` : year;

        
                    if (localStorage.getItem("settings") === null || localStorage.getItem("settings") === undefined) {
                        date.textContent = `${currentDay}/${currentMonth}/${currentYear}`;
                    }
                
                    let settings = JSON.parse(localStorage.getItem("settings") as string);

                    let date = document.getElementById("showDate") as HTMLInputElement;

                    if (settings?.date.showDay && !settings?.date.showMonth && !settings?.date.showYear) {
                        document.getElementById("showDate").innerHTML = `${currentDay}D` ;
                    }

                    if (settings?.date.showMonth && settings?.date.showDay && !settings?.date.showYear) {
                        document.getElementById("showDate").innerHTML =  `${currentDay}/${currentMonth}`;
                    }

                    if (settings?.date.showYear) {
                        document.getElementById("showDate").innerHTML =  `${currentYear}`;
                    }
                    
                    if (settings?.date.showDate) {
                        document.getElementById("showDate").style.visibility = "visible";
                    }else{
                        document.getElementById("showDate").style.visibility = "hidden";
                    }
                    
                }, 1000
            )
        }
    })
}

//run the function once then every 24 hours
updateCurrrentDate();

