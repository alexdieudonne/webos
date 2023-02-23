const updateCurrrentDate = (): void => {
    
    document.addEventListener("DOMContentLoaded", () => {
        const dateH = document.querySelector('.current-date') as HTMLDivElement;
        if (dateH) {
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
                        document.querySelector('.current-date').textContent = `${currentDay}/${currentMonth}/${currentYear}`;
                    }
                
                
                    let settings = JSON.parse(localStorage.getItem("settings") as string);
    


                    switch(settings !== null){
                        case settings?.date.showDay && settings?.date.showMonth && settings?.date.showYear:
                            document.getElementById("showDate").innerHTML = `${currentDay}/${currentMonth}/${currentYear}`;
                            break;
                        case settings?.date.showDay && settings?.date.showMonth && !settings?.date.showYear:
                            document.getElementById("showDate").innerHTML = `${currentDay}/${currentMonth}`;
                            break;
                        case settings?.date.showDay && !settings?.date.showMonth && settings?.date.showYear:
                            document.getElementById("showDate").innerHTML = `${currentDay}/${currentYear}`;
                            break;
                        case !settings?.date.showDay && settings?.date.showMonth && settings?.date.showYear:
                            document.getElementById("showDate").innerHTML = `${currentMonth}/${currentYear}`;
                            break;

                        case !settings?.date.showDay && settings?.date.showMonth && !settings?.date.showYear:
                            document.getElementById("showDate").innerHTML = `${currentMonth}`;
                            break;

                        case !settings?.date.showDay && !settings?.date.showMonth && settings?.date.showYear:
                            document.getElementById("showDate").innerHTML = `${currentYear}`;
                            break;

                        case settings?.date.showDay && !settings?.date.showMonth && !settings?.date.showYear:
                            document.getElementById("showDate").innerHTML = `${currentDay}`;
                            break;
                        
                        case settings?.date.showDate:
                            document.getElementById("showDate").style.visibility = "visible";
                            break;

                        case !settings?.date.showDate:
                            document.getElementById("showDate").style.visibility = "hidden";
                            break;
                    
                        default:
                            document.getElementById("showDate").innerHTML = `${currentDay}/${currentMonth}/${currentYear}`;
                            break;
                    }
                
                }, 1000
            )
        }
    })
}

//run the function once then every 24 hours
updateCurrrentDate();
