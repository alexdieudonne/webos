
function getBatteryStatus() {
   
    //@ts-ignore
    const navigatorWithBattery = navigator as Navigator & { getBattery: () => Promise<BatteryManager>};
    navigatorWithBattery.getBattery().then(function(battery) {
        if (!battery) {
            return;
        }
        
        const batteryIcon = document.querySelector('.battery-icon') as HTMLImageElement;;
        if (!batteryIcon) {
            return;
        }
        
    
        if (Math.ceil(battery.level * 100) < 20){
            batteryIcon.src = '/img/Battery-low.png';
        } else if (Math.ceil(battery.level * 100) < 50){
            batteryIcon.src = '/img/Battery.png';
        } else if (Math.ceil(battery.level * 100) >= 80){
            batteryIcon.src = '/img/Battery-full.png';
        }
        const batteryLabel = document.querySelector('.battery-label');
        if (batteryLabel) {
            batteryLabel.textContent = Math.ceil(battery.level * 100) + '%';
        }
        
        setInterval(() => {
            const batteryLabel = document.querySelector('.battery-label');
            if (batteryLabel) {
                batteryLabel.textContent = Math.ceil(battery.level * 100) + '%';
            }
            }, 1000 * 60);
        }
    );
}

getBatteryStatus();