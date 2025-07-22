import { html } from "lit";
import { spreadProps } from "@open-wc/lit-helpers";
const meta = {
    title: "Components/MyDropdownMenu",
    component: 'my-dropdown-menu',
    tags: ['autodocs'],
    argTypes: {
        options: { control: 'object', description: 'Array of options to display in the dropdown' },
        valeOfeachOption: { control: 'object', description: 'Array of values for each option' },
        theme: {
            control: { type: 'select' },
            options: ['Siemens-LightTheme', 'VIQ-DarkTheme'],
            description: 'Theme of the dropdown menu',
        },
        variantSize: {
            constorl: { type: "select" },
            options: ['small', 'medium', 'large'],
            description: 'Size variant of the dropdown menu',
        },
    },
    render: (args) => html `<my-dropdown-menu ${spreadProps(args)}></my-dropdown-menu>`
};
export default meta;
export const SiemensLightTheme = {
    args: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        valeOfeachOption: ['value1', 'value2', 'value3'],
        theme: 'Siemens-LightTheme',
        variantSize: 'medium',
    }
};
export const VIQDarkTheme = {
    args: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        valeOfeachOption: ['value1', 'value2', 'value3'],
        theme: 'VIQ-DarkTheme',
        variantSize: 'large',
    }
};
export const SmallSize = {
    args: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        valeOfeachOption: ['value1', 'value2', 'value3'],
        theme: 'Siemens-LightTheme',
        variantSize: 'small',
    }
};
export const MediumSize = {
    args: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        valeOfeachOption: ['value1', 'value2', 'value3'],
        theme: 'Siemens-LightTheme',
        variantSize: 'medium',
    }
};
export const LargeSize = {
    args: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        valeOfeachOption: ['value1', 'value2', 'value3'],
        theme: 'Siemens-LightTheme',
        variantSize: 'large',
    }
};
export const DarkThemeWithSmallSize = {
    args: {
        options: ['Option 1', 'Option 2', 'Option 3'],
        valeOfeachOption: ['value1', 'value2', 'value3'],
        theme: 'VIQ-DarkTheme',
        variantSize: 'small',
    }
};
//# sourceMappingURL=my-dropdown-menu.stories.js.map
