
export abstract class AppHandler {
    [x: string]: any;
    constructor(props: APHandle) {
        this.icon = props.icon;
        this.name = props.name;
        this.handler = props.handler

        // this.render = "";
        const that = this
        document.addEventListener("DOMContentLoaded", function (this: typeof that) {
            create_app(props.name,
                props.icon,
                "file-sd" + props.name,
                that.render ? that.render() : undefined,
                this.handler
            );
            handle()
        }.bind(this));
    }

}

function create_app(name: string, image: string, id: string, render?: string, handler?: () => void) {
    const apps = document.querySelector('#apps_os')
    const app_main = document.querySelector('#app-main')
    let app = document.createElement("div");

    app.classList.add("application")
    app.id = id
    app.ondblclick = (((ev: any) => { window_open(id, render, handler) }));
    app.oncontextmenu = e => {
        open_menu(e)
    }
    let img = document.createElement("img")
    img.src = image
    img.setAttribute("alt", name)
    let p = document.createElement("p")
    p.innerText = name
    app.appendChild(img)
    app.appendChild(p)
    apps?.appendChild(app)
    app_main!.innerHTML = render ?? "";
}

function window_open(id: string, render?: string, handler?: () => void) {
    const school_os_wd: HTMLDivElement | null = document.querySelector(".school-os-wd")
    const app_main = document.querySelector('#app-main')

    const brand_window = document.querySelector(".brand")
    brand_window!.innerHTML = ""

    init_window()

    let main = document.querySelector("#" + id)
    let img = document.createElement("img")
    img.src = (main?.childNodes[0] as HTMLImageElement).src
    //@ts-ignore
    img.setAttribute("alt", main?.childNodes[0].getAttribute('alt'))
    let p = document.createElement("p")
    //@ts-ignore
    p.innerText = main?.childNodes[1].innerText
    brand_window?.appendChild(img)
    brand_window?.appendChild(p)
    app_main!.innerHTML = render ?? "";
    show(school_os_wd as HTMLElement)
    if(handler) handler()
}


function handle() {
    const school_os_wd: HTMLDivElement | null = document.querySelector(".school-os-wd")
    const window_bar: HTMLDivElement | null = document.querySelector(".window-bar")
    const menu: HTMLMenuElement | null = document.querySelector('#os-menu')

    let isDown = false
    let offset: number[] = []
    hide(school_os_wd as HTMLElement)
    const scl_os_wd: HTMLDivElement | null = document.querySelector(".school-os-wd")
    window.onclick = e => {
        if (menu?.classList.contains("active")) {
            menu?.classList.remove("active")
        }
    }

    window_bar!.addEventListener('mousedown', function (e) {
        isDown = true;

        offset = [
            scl_os_wd!.offsetLeft - e.clientX,
            scl_os_wd!.offsetTop - e.clientY,
            //@ts-ignore
            scl_os_wd!.style.transition = 'none'
        ];
    }, true);
    document.addEventListener('mouseup', function (e) {
        // FIX: The transition delay the resize of the window
        // scl_os_wd!.style.transition = '0.1s ease'

        // Handle snapping
        if (isDown) {
            scl_os_wd!.style.left = (e.clientX + offset[0]) + 'px';
            scl_os_wd!.style.top = (e.clientY + offset[1]) + 'px';

            if (e.clientX + offset[0] < 0) {
                scl_os_wd!.style.left = '0px'
                scl_os_wd!.style.top = '0px';
                scl_os_wd!.style.height = '100vh';
                scl_os_wd!.style.width = window.innerWidth / 2 + 'px'
            }

            if (e.clientX + offset[0] > window.innerWidth / 2) {
                scl_os_wd!.style.left = window.innerWidth / 2 + 'px'
                scl_os_wd!.style.top = '0px';
                scl_os_wd!.style.height = '100vh';
                scl_os_wd!.style.width = window.innerWidth / 2 + 'px'
            }

            if (e.clientY + offset[1] < 0) {
                scl_os_wd!.style.left = '0px'
                scl_os_wd!.style.top = '0px';
                scl_os_wd!.style.height = window.innerHeight / 2 + 'px';
                scl_os_wd!.style.width = '100vw'
            }

            if (e.clientY + offset[1] > window.innerHeight / 2) {
                scl_os_wd!.style.left = '0px'
                scl_os_wd!.style.top = window.innerHeight / 2 + 'px';
                scl_os_wd!.style.height = window.innerHeight / 2 + 'px';
                scl_os_wd!.style.width = '100vw'
            }
        }

        // Reset isDown
        isDown = false;
    }, true);

    document.addEventListener('mousemove', function (e) {
        e.preventDefault();
        if (isDown) {
            scl_os_wd!.style.left = (e.clientX + offset[0]) + 'px';
            scl_os_wd!.style.top = (e.clientY + offset[1]) + 'px';
        }
    }, true);
}





function show(tag: HTMLElement) {
    tag.style.display = "block"
}

function hide(tag: HTMLElement) {
    tag.style.display = "none"
}



function init_window() {
    const school_os_wd: HTMLDivElement | null = document.querySelector(".school-os-wd")
    const shorter: HTMLButtonElement | null = document.querySelector('#shorter')
    const maximize: HTMLButtonElement | null = document.querySelector('#maximize')
    const cross: HTMLButtonElement | null = document.querySelector('#cross')

    hide(shorter as HTMLElement)
    maximize!.onclick = e => {
        maximize_window()
    }
    shorter!.onclick = e => {
        shorter_window()
    }
    cross!.onclick = e => {
        hide(school_os_wd as HTMLElement)
    }
}

function maximize_window() {
    const school_os_wd: HTMLDivElement | null = document.querySelector(".school-os-wd")
    const shorter: HTMLButtonElement | null = document.querySelector('#shorter')
    const maximize: HTMLButtonElement | null = document.querySelector('#maximize')

    show(shorter as HTMLElement)
    //close(maximize as HTMLElement)
    //@ts-ignore
    window.restoreX = school_os_wd?.style.left
    //@ts-ignore
    window.restoreY = school_os_wd?.style.top
    school_os_wd!.style.top = "0px"
    school_os_wd!.style.left = "0px"
    school_os_wd!.style.width = "100%"
    school_os_wd!.style.height = "100vh"
}

function shorter_window() {
    const school_os_wd: HTMLDivElement | null = document.querySelector(".school-os-wd")
    const shorter: HTMLButtonElement | null = document.querySelector('#shorter')
    const maximize: HTMLButtonElement | null = document.querySelector('#maximize')


    show(maximize as HTMLElement)
    hide(shorter as HTMLElement)
    //@ts-ignore 
    school_os_wd!.style.top = window.restoreY
    //@ts-ignore 
    school_os_wd!.style.left = window.restoreX
    school_os_wd!.style.width = "60%"
    school_os_wd!.style.height = "66vh"
}

function open_menu(e: MouseEvent) {
    e.preventDefault()
    const menu: HTMLMenuElement | null = document.querySelector('#os-menu')
    menu?.classList.add("active")
    menu!.style.top = e.pageY + 5 + "px"
    menu!.style.left = e.pageX + 5 + "px"

    return false
}

interface APHandle {
    icon: string;
    name: string;
    handler: () => void
}

export interface Window extends OSWindow {
    icon: string;
}
interface OSWindow {
    //content(): string
}
