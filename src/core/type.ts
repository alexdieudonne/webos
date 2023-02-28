export class OS implements WebOSProps {
    [x: string]: any;
    [Symbol.toPrimitive]() {
        return this.render();
    }
}
