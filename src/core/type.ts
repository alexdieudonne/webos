import p from './utils/tags'

export class OS implements WebOSProps {
    [x: string]: any;
    [Symbol.toPrimitive](hint: any) {
        return this.render();
    }
}
