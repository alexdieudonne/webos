import AppBar from "./AppBar";
import Body from "./Body";
import Header from "./Header";
import * as apps from '../apps/index'


export default class App {
    constructor() {
        const app = document.querySelector<HTMLDivElement>("#app")!;
        initApp()
        app.innerHTML = `
        ${new Header}
        ${new AppBar}
        ${new Body}
      `;
    }
}

function initApp(){
  (apps)
}