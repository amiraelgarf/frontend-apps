import { html } from "lit";
import { spreadProps } from "@open-wc/lit-helpers";
const meta = {
    title: "Components/Text Field",
    component: 'my-text-field',
    tags: ['autodocs'],
    argTypes: {
        textInPlaceholder: { control: 'text', description: 'Placeholder text for the input' },
        lablelText: { control: 'text', description: 'Label text for the input' },
        ColorOfLable: { control: 'color', description: 'Color of the label text' },
        Theme: {
            control: { type: 'select' },
            options: ['Siemens-LightTheme', 'VIQ-DarkTheme'],
            description: 'Theme of the text field',
        },
        variantSize: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
            description: 'Size of the text field',
        },
        IsRequeredToFill: {
            control: 'boolean',
            description: 'Whether the text field is required to fill',
        },
        size: {
            control: "number",
            description: 'Size of the text field',
        },
        disable: {
            control: 'boolean',
            description: 'Whether the text field is disabled',
        },
    },
    render: (args) => html `<my-text-field ${spreadProps(args)}></my-text-field>`,
};
export default meta;
export const SiemensLightThemeMid = {
    args: {
        textInPlaceholder: 'Enter your name here',
        lablelText: 'Enter Name',
        ColorOfLable: 'red',
        Theme: 'Siemens-LightTheme',
        variantSize: 'medium',
        IsRequeredToFill: false,
        size: 20,
        disable: false,
    }
};
export const VIQDarkThemeSmall = {
    args: {
        textInPlaceholder: 'Enter your name here',
        lablelText: 'Enter Name',
        ColorOfLable: 'blue',
        Theme: 'VIQ-DarkTheme',
        variantSize: 'small',
        IsRequeredToFill: true,
        size: 30,
        disable: true,
    }
};
//# sourceMappingURL=my-text-field.stories.js.map
