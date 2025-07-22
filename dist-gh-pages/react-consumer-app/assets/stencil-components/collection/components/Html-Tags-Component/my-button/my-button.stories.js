import { html } from "lit";
const meta = {
    title: 'Components/MyButton',
    component: 'my-button',
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'The text to display inside the button',
        },
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outline'],
            description: 'The visual variant of the button',
        },
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
            description: 'The size of the button',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the button is disabled',
        },
        myClick: {
            action: 'myClick event',
            description: 'Event emitted when the button is clicked',
        },
    },
    render: (args) => html `
    <my-button
      label="${args.label}"
      variant="${args.variant}"
      size="${args.size}"
      ?disabled="${args.disabled}"
      @myClick=${args.myClick}
    ></my-button>
  `,
};
export default meta;
export const Primary = {
    args: {
        label: 'Primary Button',
        variant: 'primary',
        size: 'medium',
        disabled: false,
    },
};
export const Secondary = {
    args: {
        label: 'Secondary Button',
        variant: 'secondary',
        size: 'medium',
        disabled: false,
    },
};
export const Outline = {
    args: {
        label: 'Outline Button',
        variant: 'outline',
        size: 'medium',
        disabled: false,
    },
};
export const Small = {
    args: {
        label: 'Small Button',
        variant: 'primary',
        size: 'small',
        disabled: false,
    },
};
export const Large = {
    args: {
        label: 'Large Button',
        variant: 'primary',
        size: 'large',
        disabled: false,
    },
};
export const Disabled = {
    args: {
        label: 'Disabled Button',
        variant: 'primary',
        size: 'medium',
        disabled: true,
    },
};
export const Clickable = {
    args: {
        label: 'Click Me',
        variant: 'primary',
        size: 'medium',
        disabled: false,
    },
};
//# sourceMappingURL=my-button.stories.js.map
