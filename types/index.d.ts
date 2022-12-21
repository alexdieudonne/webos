declare module "*.html" {
    const value: string; export default value;
}

declare type WebOSProps<T = any> = {
    render: () => string
} & T


type RenderType<T = void> = () => T