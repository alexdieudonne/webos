interface BatteryManager {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
    onchargingchange: ((this: BatteryManager, ev: Event) => any) | null;
    onchargingtimechange: ((this: BatteryManager, ev: Event) => any) | null;
    ondischargingtimechange: ((this: BatteryManager, ev: Event) => any) | null;
    onlevelchange: ((this: BatteryManager, ev: Event) => any) | null;
    getBattery: () => Promise<BatteryManager>;
}
  
async function checkBatteryStatus() {
    if ('getBattery' in navigator) {
        const navigatorWithBattery = navigator as Navigator & { getBattery: () => Promise<BatteryManager>};
        const battery = await navigatorWithBattery.getBattery();
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
    } else {
        const batteryIcon = document.querySelector('.battery-icon') as HTMLImageElement;;
        if (!batteryIcon) {
            return;
        }
        batteryIcon.src = '/img/Battery.png';
    }
}