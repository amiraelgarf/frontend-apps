import { html } from "lit";
import { action } from "storybook/actions";
import { useArgs } from "storybook/preview-api";
const meta = {
    title: 'Components/CheckboxInput',
    component: 'checkbox-input',
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'text',
            description: 'The name of the checkbox input.',
        },
        value: {
            control: 'text',
            description: 'The value of the checkbox.',
        },
        label: {
            control: 'text',
            description: 'The label to display next to the checkbox.',
        },
        checked: {
            control: 'boolean',
            description: 'Whether the checkbox is currently checked.',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the checkbox is disabled.',
        },
        myChange: {
            action: 'myChange event',
            description: "Event emitted when the checkbox's checked state changes.",
            control: false,
        },
    },
    render: (args) => {
        const [_, updateArgs] = useArgs();
        const handleMyChange = (e) => {
            updateArgs({ checked: e.detail.checked });
            action('myChange event')(e.detail);
        };
        return html `
    <checkbox-input
      name="${args.name}"
      value="${args.value}"
      label="${args.label}"
      ?checked="${args.checked}"
      ?disabled="${args.disabled}"
      @myChange=${handleMyChange}
    ></checkbox-input>
  `;
    }
};
export default meta;
export const Unchecked = {
    args: {
        name: 'agreeTerms',
        value: 'termsAccepted',
        label: 'I agree to the terms and conditions',
        checked: false,
        disabled: false,
    },
};
export const Checked = {
    args: {
        name: 'newsletter',
        value: 'subscribed',
        label: 'Subscribe to newsletter',
        checked: true,
        disabled: false,
    },
};
export const Disabled = {
    args: {
        name: 'disabledCheckbox',
        value: 'disabled',
        label: 'Disabled Checkbox',
        checked: false,
        disabled: true,
    },
};
export const DisabledChecked = {
    args: {
        name: 'disabledChecked',
        value: 'disabledChecked',
        label: 'Disabled & Checked',
        checked: true,
        disabled: true,
    },
};
//# sourceMappingURL=checkbox-input.stories.js.map
