import { html } from "lit";
import { spreadProps } from "@open-wc/lit-helpers";
const meta = {
    title: "Components/MyList",
    component: 'my-list',
    tags: ['autodocs'],
    argTypes: {
        items: { control: 'object', description: 'Array of items to display in the list' },
        theme: {
            control: { type: 'select' },
            options: ['Siemens-LightTheme', 'VIQ-DarkTheme'],
            description: 'Theme of the list',
        },
        spaceBetweenItems: {
            control: 'number',
            description: 'Space between items in the list (in pixels)',
        },
        direction: {
            control: { type: 'select' },
            options: ['column', 'row'],
            description: 'Direction of the list items',
        },
        wrap: {
            control: 'boolean',
            description: 'Whether the list items should wrap to the next line',
        },
    },
    render: (args) => html `<my-list ${spreadProps(args)}></my-list>`,
};
export default meta;
export const SiemensLightTheme = {
    args: {
        items: ['Item 1', 'Item 2', 'Item 3'],
        theme: 'Siemens-LightTheme',
        spaceBetweenItems: 10,
        direction: 'row',
        wrap: false,
    }
};
export const VIQDarkTheme = {
    args: {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
        theme: 'VIQ-DarkTheme',
        spaceBetweenItems: 15,
        direction: 'column',
        wrap: true,
    }
};
//# sourceMappingURL=my-list.stories.js.map
