const appState = {
    time: {
        hours: true,
        minutes: true,
        seconds: true
    },
    date: {
        show: true,
        year: true,
        month: true,
        day: true
    },
    battery: {
        show: true
    },
    latency: {
        show: true,
        domain: 'https://google.fr',
        delay: .4
    }
}


async function storeState(){
    //appState.
}

function getBatteryStatus() {

if(navigator && navigator.getBattery())
    navigator.getBattery().then(function(battery) {
        if (Math.ceil(battery.level * 100) < 20){
            document.querySelector('.battery-icon').src = '/img/Battery-low.png';
        }
        else if (Math.ceil(battery.level * 100) < 50){
            document.querySelector('.battery-icon').src = '/img/Battery.png';
        }
        else if (Math.ceil(battery.level * 100) >= 80){
            document.querySelector('.battery-icon').src = '/img/Battery-full.png';
        }
        document.querySelector('.battery-label').textContent = Math.ceil(battery.level * 100) + '%';
        //document.querySelector('.battery-level').style.width = Math.ceil(battery.level * 100) + '%';
    });
    setInterval(() => {
        navigator.getBattery().then(function(battery) {
            console.log(battery.level);
            document.querySelector('.battery-label').textContent = Math.ceil(battery.level * 100) + '%';
            //document.querySelector('.battery-level').style.width = Math.ceil(battery.level * 100) + '%';
        });
    }, 1000 * 60);

}