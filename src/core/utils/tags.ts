const p = document.createElement('p');

export class MyButton extends HTMLButtonElement { /*...*/ }
customElements.define('my-button', MyButton, { extends: 'button' });

export default {
    p,

}
