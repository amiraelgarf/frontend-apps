import { html } from "lit";
import { action } from "storybook/actions";
import { useArgs } from "storybook/preview-api";
const meta = {
    title: 'Components/RangeInput',
    component: 'range-input',
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'text',
            description: 'The name of the input field.',
        },
        label: {
            control: 'text',
            description: 'The label for the input field.',
        },
        value: {
            control: 'number',
            description: 'The current value of the range input.',
        },
        min: {
            control: 'number',
            description: 'The minimum allowed value.',
        },
        max: {
            control: 'number',
            description: 'The maximum allowed value.',
        },
        step: {
            control: 'number',
            description: 'The step interval for the range.',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the input is disabled.',
        },
        myChange: {
            action: 'myChange event',
            description: 'Event emitted when the input value changes.',
            control: false,
        },
    },
    render: (args) => {
        const [_, updateArgs] = useArgs();
        const handleMyChange = (event) => {
            updateArgs({ value: event.detail });
            action('myChange event')(event.detail);
        };
        return html `
      <range-input
        name="${args.name}"
        label="${args.label}"
        value="${args.value}"
        min="${args.min}"
        max="${args.max}"
        step="${args.step}"
        ?disabled="${args.disabled}"
        @myChange=${handleMyChange}
      ></range-input>
    `;
    },
};
export default meta;
export const Default = {
    args: {
        name: 'volume',
        label: 'Volume',
        value: 50,
        min: 0,
        max: 100,
        step: 1,
        disabled: false,
    },
};
export const WithCustomRange = {
    args: {
        name: 'brightness',
        label: 'Brightness (0-1000, step 10)',
        value: 500,
        min: 0,
        max: 1000,
        step: 10,
        disabled: false,
    },
};
export const Disabled = {
    args: {
        name: 'disabledRange',
        label: 'Disabled Slider',
        value: 25,
        min: 0,
        max: 100,
        step: 1,
        disabled: true,
    },
};
//# sourceMappingURL=range-input.stories.js.map
