import Header from "./Header";
import AppBar from "./AppBar";
import Body from "./Body";
import * as apps from '../apps/index'
import LockScreen from "./LockScreen";

export default class App {
    constructor() {
        const locked = sessionStorage.getItem('locked');
        const app = document.querySelector<HTMLDivElement>("#app")!;
        initApp()

        const locked = sessionStorage.getItem('locked');

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