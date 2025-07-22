import { html } from "lit";
import { action } from "storybook/actions";
import { useArgs } from "storybook/preview-api";
const meta = {
    title: 'Components/RadioButton',
    component: 'radio-button',
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'text',
            description: 'The name of the radio.',
        },
        value: {
            control: 'text',
            description: 'The value of the radio button.',
        },
        label: {
            control: 'text',
            description: 'The label to display next to the radio button.',
        },
        checked: {
            control: 'boolean',
            description: 'Whether the radio button is currently checked.',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the radio button is disabled.',
        },
        myChange: {
            action: 'myChange event',
            description: 'Event emitted when the radio button\'s checked state changes.',
            control: false,
        },
    },
    render: (args) => {
        const handleMyChange = (e) => {
            action('myChange event')(e.detail);
        };
        return html `
      <radio-button
        name="${args.name}"
        value="${args.value}"
        label="${args.label}"
        ?checked="${args.checked}"
        ?disabled="${args.disabled}"
        @myChange=${handleMyChange}
      ></radio-button>
    `;
    },
};
export default meta;
export const Unchecked = {
    args: {
        name: 'myRadioGroup',
        value: 'option1',
        label: 'Option 1',
        checked: false,
        disabled: false,
    },
};
export const Checked = {
    args: {
        name: 'myRadioGroup',
        value: 'option2',
        label: 'Option 2',
        checked: true,
        disabled: false,
    },
};
export const Disabled = {
    args: {
        name: 'RadioGroup',
        value: 'option3',
        label: 'Option 3 (Disabled)',
        checked: false,
        disabled: true,
    },
};
export const DisabledChecked = {
    args: {
        name: 'RadioGroup',
        value: 'option4',
        label: 'Option 4 (Disabled & Checked)',
        checked: true,
        disabled: true,
    },
};
export const RadioButtonGroup = {
    render: () => {
        const [selectedOption, updateSelectedOption] = useArgs();
        const handleGroupChange = (e) => {
            action('myChange event (group)')(e.detail);
            updateSelectedOption({ checkedValue: e.detail.value });
        };
        return html `
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <radio-button
          name="myRadioButtonGroup"
          value="optionA"
          label="Group Option A"
          ?checked=${selectedOption.checkedValue === 'optionA'}
          @myChange=${handleGroupChange}
        ></radio-button>
        <radio-button
          name="myRadioButtonGroup"
          value="optionB"
          label="Group Option B"
          ?checked=${selectedOption.checkedValue === 'optionB'}
          @myChange=${handleGroupChange}
        ></radio-button>
        <radio-button
          name="myRadioButtonGroup"
          value="optionC"
          label="Group Option C"
          ?checked=${selectedOption.checkedValue === 'optionC'}
          @myChange=${handleGroupChange}
        ></radio-button>
      </div>
    `;
    },
};
//# sourceMappingURL=radio-button.stories.js.map
