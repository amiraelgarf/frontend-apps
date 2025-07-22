import { html } from "lit";
const meta = {
    title: 'Components/DateInput',
    component: 'date-input',
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
            control: 'text',
            description: 'The current value of the date input (YYYY-MM-DD).',
        },
        min: {
            control: 'text',
            description: 'The minimum allowed date (YYYY-MM-DD).',
        },
        max: {
            control: 'text',
            description: 'The maximum allowed date (YYYY-MM-DD).',
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
    render: (args) => html `
    <date-input
      name="${args.name}"
      label="${args.label}"
      value="${args.value}"
      min="${args.min || ''}"
      max="${args.max || ''}"
      ?disabled="${args.disabled}"
      @myChange=${(e) => {
        const storybookAction = window.__STORYBOOK_ADDONS.getChannel().emit;
        storybookAction('myChange event', e.detail);
    }}
    ></date-input>
  `,
};
export default meta;
export const Default = {
    args: {
        name: 'birthDate',
        label: 'Date of Birth',
        value: '',
        min: undefined,
        max: undefined,
        disabled: false,
    },
};
export const WithValue = {
    args: {
        name: 'eventDate',
        label: 'Event Date',
        value: '2025-07-15',
        min: undefined,
        max: undefined,
        disabled: false,
    },
};
export const WithMinMax = {
    args: {
        name: 'bookingDate',
        label: 'Booking Date (2025 only)',
        value: '2025-01-01',
        min: '2025-01-01',
        max: '2025-12-31',
        disabled: false,
    },
};
export const Disabled = {
    args: {
        name: 'disabledDate',
        label: 'Disabled Date',
        value: '2024-01-01',
        min: undefined,
        max: undefined,
        disabled: true,
    },
};
//# sourceMappingURL=date-input.stories.js.map
