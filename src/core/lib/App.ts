import Header from "./Header";
import AppBar from "./AppBar";
import Body from "./Body";
import * as apps from '../apps/index'
import LockScreen from "./LockScreen";

export default class App {
    constructor() {
        const app = document.querySelector<HTMLDivElement>("#app")!;
        initApp()

        const locked = sessionStorage.getItem('locked');
        console.log(locked)

        app.innerHTML = `
          ${new Header}
          ${new AppBar}
          ${!locked ? new LockScreen : new Body}
        `;
    }
}

function initApp() {
  (apps)
}