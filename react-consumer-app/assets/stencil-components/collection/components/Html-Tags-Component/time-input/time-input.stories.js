import { html } from "lit";
const meta = {
    title: 'Components/TimeInput',
    component: 'time-input',
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
            description: 'The current value of the time input (HH:MM).',
        },
        min: {
            control: 'text',
            description: 'The minimum allowed time (HH:MM).',
        },
        max: {
            control: 'text',
            description: 'The maximum allowed time (HH:MM).',
        },
        step: {
            control: 'number',
            description: 'The step interval in seconds.',
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
    <time-input
      name="${args.name}"
      label="${args.label}"
      value="${args.value}"
      min="${args.min || ''}"
      max="${args.max || ''}"
      step="${args.step || ''}"
      ?disabled="${args.disabled}"
      @myChange=${(e) => {
        const storybookAction = window.__STORYBOOK_ADDONS.getChannel().emit;
        storybookAction('myChange event', e.detail);
    }}
    ></time-input>
  `,
};
export default meta;
export const Default = {
    args: {
        name: 'meetingTime',
        label: 'Meeting Time',
        value: '',
        min: undefined,
        max: undefined,
        step: undefined,
        disabled: false,
    },
};
export const WithValue = {
    args: {
        name: 'alarmTime',
        label: 'Alarm Time',
        value: '08:30',
        min: undefined,
        max: undefined,
        step: undefined,
        disabled: false,
    },
};
export const WithMinMaxStep = {
    args: {
        name: 'officeHours',
        label: 'Office Hours (9:00 AM - 5:00 PM, 15 min steps)',
        value: '10:00',
        min: '09:00',
        max: '17:00',
        step: 900,
        disabled: false,
    },
};
export const Disabled = {
    args: {
        name: 'disabledTime',
        label: 'Disabled Time',
        value: '12:00',
        min: undefined,
        max: undefined,
        step: undefined,
        disabled: true,
    },
};
//# sourceMappingURL=time-input.stories.js.map
