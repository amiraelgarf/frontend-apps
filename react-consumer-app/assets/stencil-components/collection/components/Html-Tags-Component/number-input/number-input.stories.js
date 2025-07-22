import { html } from "lit";
import { action } from "storybook/actions";
import { useArgs } from "storybook/preview-api";
const meta = {
    title: 'Components/NumberInput',
    component: 'number-input',
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: 'number',
            description: 'The current value of the input',
        },
        min: {
            control: 'number',
            description: 'Minimum allowed number',
        },
        max: {
            control: 'number',
            description: 'Maximum allowed number',
        },
        valueChange: {
            action: 'valueChange',
            description: 'Emitted when the value changes',
            control: false,
        },
    },
    render: (args) => {
        const [_, updateArgs] = useArgs();
        const handleValueChange = (e) => {
            updateArgs({ value: e.detail });
            action('valueChange event')(e.detail);
        };
        return html `
      <number-input
        .value="${args.value}"
        .min="${args.min}"
        .max="${args.max}"
        @valueChange=${handleValueChange}
      ></number-input>
    `;
    },
};
export default meta;
export const Default = {
    args: {
        value: 5,
        min: 0,
        max: 10,
    },
};
export const OutOfBounds = {
    args: {
        value: 15,
        min: 0,
        max: 10,
    },
};
//# sourceMappingURL=number-input.stories.js.map
