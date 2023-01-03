import { OS } from '../type'
import "../scss/lock.scss"


export default class Header extends OS {

    render() {
        return (
            `<head>
                <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css" rel="stylesheet" type="text/css" />
                <script rel="stylesheet" href="https://kit.fontawesome.com/8087219881.js crossorigin="anonymous" ></script
            </head>`
        )
    }
}

