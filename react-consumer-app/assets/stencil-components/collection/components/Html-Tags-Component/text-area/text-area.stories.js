import { html } from "lit";
import { action } from "storybook/actions";
import { useArgs } from "storybook/preview-api";
const meta = {
    title: 'Components/TextArea',
    component: 'text-area',
    tags: ['autodocs'],
    argTypes: {
        placeholder: {
            control: 'text',
            description: 'The placeholder text for the textarea',
        },
        value: {
            control: 'text',
            description: 'The current value of the textarea',
        },
        valueChange: {
            action: 'valueChange event',
            description: 'Emitted when the textarea content changes',
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
      <text-area
        placeholder="${args.placeholder}"
        .value="${args.value}"
        @valueChange=${handleValueChange}
      ></text-area>
    `;
    },
};
export default meta;
export const Empty = {
    args: {
        placeholder: 'Type something...',
        value: '',
    },
};
export const Prefilled = {
    args: {
        placeholder: 'Write here...',
        value: 'Some prefilled text',
    },
};
//# sourceMappingURL=text-area.stories.js.map
