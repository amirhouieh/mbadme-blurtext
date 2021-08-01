export enum EMbadPropTypes {
    TEXT = "text",
    NUMBER = "number",
    HTML = "html",
    COLOR = "color",
    OPTION="option"
}

export interface IMbadPropBase<T> {
    value: T,
    label: string,
    type: EMbadPropTypes
}

export interface IMbadProp_Text extends IMbadPropBase<string> {
    value: string;
    type: EMbadPropTypes.TEXT
}

export interface IMbadProp_Html extends IMbadPropBase<string> {
    value: string;
    type: EMbadPropTypes.HTML
}

export interface IMbadProp_Color extends IMbadPropBase<string> {
    value: string;
    rgbaValue?: { r: number, g: number, b: number, a: number }
    type: EMbadPropTypes.COLOR
}

export interface IMbadProp_Number extends IMbadPropBase<number> {
    value: number,
    range: {
        min: number|null,
        max: number|null
    },
    step: number|null,
    type: EMbadPropTypes.NUMBER
}

export interface IMbadProp_Options<T> extends IMbadPropBase<string|number> {
    options: {
        label: string,
        value: T
    }[]
    type: EMbadPropTypes.OPTION
}

export interface IMbadProps {
    [key: string]:
        IMbadProp_Color
        | IMbadProp_Number
        | IMbadProp_Html
        | IMbadProp_Text
}