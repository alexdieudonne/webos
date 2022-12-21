import { OS } from '../index'
import * as apps from '../apps/index'
import "../scss/lock.scss"


export default class Body extends OS {


    render() {
        return (
            `<main class="school-container_os">
                <div id="apps_os">
                   
                </div>
     
            </main>
            
            <div class="window school-os-wd" id="school-os-wd" draggable="true">
                <div class="window-bar">
                    
                   <div class='buttons'>
                    
                        <button id="cross" class="window-bar-close">
                            <i class="fa fa-times"></i>
                        </button>
                        <button id="shorter" class="window-bar-minimize">
                            <i class="far fa-minus"></i>
                        </button>
                        <button id="maximize" class="window-bar-maximize">
                            <i class="far fa-window-maximize"></i>
                        </button>
                   </div>
                   <div class="brand">
                    <img src="/img/icons/safari.png" alt="safari" />
                        <p>Safari</p>
                    </div>
                </div>
                <div id="app-main"></div>
            </div>

            <div id="hide-app"></div>

            <nav class="os-menu" id="os-menu">
                <ul>
                    <li><a href="javascript:;">Ouvrir</a></li>
                    <li><a href="javascript:;">Propriétés</a></li>
                    <li><a href="javascript:;">Supprimer</a></li>
                </ul>
            </nav>

            `
        )
    }
}
