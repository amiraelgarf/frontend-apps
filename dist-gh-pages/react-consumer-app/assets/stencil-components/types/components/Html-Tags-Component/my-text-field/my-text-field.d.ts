export type TextFieldTheme = 'Siemens-LightTheme' | 'VIQ-DarkTheme';
export declare class MyTextField {
    textInPlaceholder: string;
    lablelText: string;
    ColorOfLable: string;
    Theme: TextFieldTheme;
    variantSize: 'small' | 'medium' | 'large';
    IsRequeredToFill: boolean;
    size: number;
    disable: boolean;
    render(): any;
}
