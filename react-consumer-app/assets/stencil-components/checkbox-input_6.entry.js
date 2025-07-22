import { r as registerInstance, c as createEvent, h } from './index-crweC_lX.js';

const checkboxInputCss = ":host{display:block;font-family:'Inter', sans-serif}.checkbox-wrapper{display:inline-flex;align-items:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:8px 0;position:relative}.checkbox-input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-custom{height:20px;width:20px;background-color:#e0e0e0;border-radius:4px;display:inline-block;position:relative;transition:background-color 0.2s ease, border-color 0.2s ease;border:2px solid #ccc;flex-shrink:0}.checkbox-wrapper:hover .checkbox-input:not(:checked):not(:disabled)~.checkbox-custom{background-color:#d0d0d0;border-color:#a0a0a0}.checkbox-input:checked~.checkbox-custom{background-color:#005F87;border-color:#005F87}.checkbox-checkmark{fill:none;stroke:white;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%) scale(0);transition:transform 0.2s ease-in-out}.checkbox-input:checked~.checkbox-custom .checkbox-checkmark{transform:translate(-50%, -50%) scale(1)}.checkbox-label{margin-left:10px;color:#333;font-size:16px;line-height:1.2}.checkbox-wrapper--disabled{cursor:not-allowed;opacity:0.6}.checkbox-wrapper--disabled .checkbox-custom{background-color:#f0f0f0;border-color:#e0e0e0}.checkbox-wrapper--disabled .checkbox-input:checked~.checkbox-custom{background-color:#a0c0e0;border-color:#a0c0e0}.checkbox-wrapper--disabled .checkbox-label{color:#777}.checkbox-input:focus-visible~.checkbox-custom{outline:2px solid #005F87;outline-offset:2px}";

const CheckboxInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.myChange = createEvent(this, "myChange");
    }
    name = '';
    value = '';
    label = '';
    checked = false;
    disabled = false;
    myChange;
    handleChange = (event) => {
        if (this.disabled) {
            return;
        }
        const input = event.target;
        this.checked = input.checked;
        this.myChange?.emit({ value: this.value, checked: this.checked });
    };
    render() {
        return (h("label", { key: 'ccd6c2e3e5ee64f6f3cb175a8e5ee3aed474d8a0', class: { 'checkbox-wrapper': true, 'checkbox-wrapper--disabled': this.disabled } }, h("input", { key: 'b426a0524fdfd87c9f46cc20b1ccd4342a091009', type: "checkbox", name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, onChange: this.handleChange, class: "checkbox-input" }), h("span", { key: '1f5724ce34ad9406f4a5150cd34d2111afdd9479', class: "checkbox-custom" }, h("svg", { key: 'e1b4d16a4d2e1a757e86863e600a7aa8f68909df', class: "checkbox-checkmark", viewBox: "0 0 24 24" }, h("polyline", { key: 'ada4b6aee32b51942ba22e087a982e6da06063e1', points: "20 6 9 17 4 12" }))), h("span", { key: '09f7e911d72e25ee7254d72033eea93b51072fb0', class: "checkbox-label" }, this.label)));
    }
};
CheckboxInput.style = checkboxInputCss;

const dateInputCss = ":host{display:block;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";margin-bottom:20px;max-width:280px;width:100%}.date-wrapper{display:flex;flex-direction:column;gap:8px;position:relative;width:100%}.date-label{font-size:15px;color:#333;font-weight:600;margin-bottom:2px}.date-field{padding:12px 15px;border:1px solid #d1d5db;border-radius:10px;font-size:16px;color:#1f2937;background-color:#ffffff;transition:border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;width:100%;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%239da4ae\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-calendar\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line></svg>');background-repeat:no-repeat;background-position:right 15px center;background-size:20px}.date-field::placeholder{color:#9ca3af;opacity:1}.date-field:hover:not(:disabled){border-color:#a7b1be}.date-field:focus{outline:none;border-color:#005F87;box-shadow:0 0 0 3px rgba(99, 102, 241, 0.25)}.date-wrapper--disabled .date-label{color:#b3b3b3}.date-field:disabled{background-color:#f5f5f5;color:#a0a0a0;cursor:not-allowed;border-color:#e0e0e0;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23c4c4c4\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-calendar\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line></svg>')}.date-field::-webkit-calendar-picker-indicator{opacity:0;width:24px;height:24px;cursor:pointer;position:absolute;right:12px;z-index:1}";

const DateInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.myChange = createEvent(this, "myChange");
    }
    name;
    label;
    value = '';
    min;
    max;
    disabled = false;
    myChange;
    handleChange = (event) => {
        if (this.disabled) {
            return;
        }
        const input = event.target;
        this.value = input.value;
        this.myChange?.emit(this.value);
    };
    render() {
        return (h("div", { key: 'aa04ff7d407fd84791c431c0a3a19c1f9987456f', class: { 'date-wrapper': true, 'date-wrapper--disabled': this.disabled } }, h("label", { key: 'baf93028fdae0cdc0f4513b88b5a1eac00cf5351', htmlFor: this.name, class: "date-label" }, this.label), h("input", { key: '922b5d7975ee0374820aa89a0eaf5ed3e377057c', type: "date", id: this.name, name: this.name, value: this.value, min: this.min, max: this.max, disabled: this.disabled, onChange: this.handleChange, class: "date-field", placeholder: "YYYY-MM-DD" })));
    }
};
DateInput.style = dateInputCss;

const myButtonCss = ":host{display:inline-block}.my-button{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\r\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\r\n    sans-serif;border:none;border-radius:6px;cursor:pointer;font-weight:500;line-height:1;transition:all 0.2s ease-in-out;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;user-select:none;outline:none}.my-button:focus-visible{outline:2px solid #005F87;outline-offset:2px}.my-button--small{padding:8px 12px;font-size:14px;min-height:32px}.my-button--medium{padding:12px 16px;font-size:16px;min-height:40px}.my-button--large{padding:16px 24px;font-size:18px;min-height:48px}.my-button--primary{background-color:#005F87;color:white}.my-button--primary:hover:not(.my-button--disabled){background-color:#DAECF0}.my-button--primary:active:not(.my-button--disabled){background-color:#005F87}.my-button--secondary{background-color:#6c757d;color:white}.my-button--secondary:hover:not(.my-button--disabled){background-color:#5a6268}.my-button--secondary:active:not(.my-button--disabled){background-color:#495057}.my-button--outline{background-color:transparent;color:#005F87;border:2px solid #005F87}.my-button--outline:hover:not(.my-button--disabled){background-color:#005F87;color:white}.my-button--outline:active:not(.my-button--disabled){background-color:#0052a3;border-color:#0052a3}.my-button--disabled{opacity:0.6;cursor:not-allowed}.my-button--disabled:hover,.my-button--disabled:active{transform:none}";

const MyButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.myClick = createEvent(this, "myClick");
    }
    label;
    variant = 'primary';
    size = 'medium';
    disabled = false;
    myClick;
    handleClick = () => {
        if (!this.disabled) {
            this.myClick?.emit();
        }
    };
    render() {
        const classes = {
            'my-button': true,
            [`my-button--${this.variant}`]: true,
            [`my-button--${this.size}`]: true,
            'my-button--disabled': this.disabled,
        };
        return (h("button", { key: 'd983e232e8f57aac23c2fc237ebb93cbb7ca374c', class: classes, disabled: this.disabled, onClick: this.handleClick, type: "button" }, this.label));
    }
};
MyButton.style = myButtonCss;

const radioButtonCss = ":host{display:block;font-family:'Inter', sans-serif}.radio-button-wrapper{display:inline-flex;align-items:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:8px 0;position:relative}.radio-button-input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.radio-button-custom{height:20px;width:20px;background-color:#e0e0e0;border-radius:50%;display:inline-block;position:relative;transition:background-color 0.2s ease, border-color 0.2s ease;border:2px solid #ccc;flex-shrink:0}.radio-button-wrapper:hover .radio-button-input:not(:checked):not(:disabled)~.radio-button-custom{background-color:#d0d0d0;border-color:#a0a0a0}.radio-button-input:checked~.radio-button-custom{background-color:#005F87;border-color:#005F87}.radio-button-custom:after{content:\"\";position:absolute;display:none;top:50%;left:50%;transform:translate(-50%, -50%);width:10px;height:10px;border-radius:50%;background:white}.radio-button-input:checked~.radio-button-custom:after{display:block}.radio-button-label{margin-left:10px;color:#333;font-size:16px;line-height:1.2}.radio-button-wrapper--disabled{cursor:not-allowed;opacity:0.6}.radio-button-wrapper--disabled .radio-button-custom{background-color:#f0f0f0;border-color:#e0e0e0}.radio-button-wrapper--disabled .radio-button-input:checked~.radio-button-custom{background-color:#a0d0a0;border-color:#a0d0a0}.radio-button-wrapper--disabled .radio-button-label{color:#777}.radio-button-input:focus-visible~.radio-button-custom{outline:2px solid #DAECF0;outline-offset:2px}";

const RadioButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.myChange = createEvent(this, "myChange");
    }
    name;
    value;
    label;
    checked = false;
    disabled = false;
    myChange;
    handleChange = (event) => {
        if (this.disabled) {
            return;
        }
        const input = event.target;
        this.checked = input.checked;
        this.myChange?.emit({ value: this.value, checked: this.checked });
    };
    render() {
        return (h("label", { key: 'b952bc415bca608c091647c94c2b3702ef7aae42', class: { 'radio-button-wrapper': true, 'radio-button-wrapper--disabled': this.disabled } }, h("input", { key: '51878a2909620bd899a403f3fe028df1b918e00b', type: "radio", name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, onChange: this.handleChange, class: "radio-button-input" }), h("span", { key: '283afb1070d2b9893cf74644b0d9664698f7d798', class: "radio-button-custom" }), h("span", { key: '55d437a4ac235bc5f0d7b7b08e256b2cc85950cd', class: "radio-button-label" }, this.label)));
    }
};
RadioButton.style = radioButtonCss;

const rangeInputCss = ":host{display:block;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";margin-bottom:24px;max-width:400px;width:100%}.range-wrapper{display:flex;flex-direction:column;gap:12px;position:relative;width:100%}.range-label{font-size:16px;color:#333;font-weight:600;display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}.range-value{font-weight:700;color:#1f2937;min-width:50px;text-align:right;padding-left:8px}.range-field{width:100%;-webkit-appearance:none;appearance:none;height:10px;background:transparent;border-radius:5px;outline:none;margin:0;padding:0}.range-field::-webkit-slider-runnable-track{width:100%;height:10px;background:linear-gradient(to right, #005F87 var(--fill-percentage), #e0e0e0 var(--fill-percentage));border-radius:5px;transition:background 0.2s ease}.range-field::-moz-range-track{width:100%;height:10px;background:linear-gradient(to right, #005F87 var(--fill-percentage), #e0e0e0 var(--fill-percentage));border-radius:5px;transition:background 0.2s ease}.range-field::-ms-track{width:100%;height:10px;background:linear-gradient(to right, #005F87 var(--fill-percentage), #e0e0e0 var(--fill-percentage));border-radius:5px;transition:background 0.2s ease;border-color:transparent;color:transparent}.range-field::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:24px;height:24px;background:#005F87;border-radius:50%;cursor:grab;margin-top:-7px;box-shadow:0 3px 6px rgba(0, 0, 0, 0.25);transition:background 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease}.range-field::-moz-range-thumb{width:24px;height:24px;background:#005F87;border-radius:50%;cursor:grab;box-shadow:0 3px 6px rgba(0, 0, 0, 0.25);transition:background 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease}.range-field::-ms-thumb{width:24px;height:24px;background:#005F87;border-radius:50%;cursor:grab;box-shadow:0 3px 6px rgba(0, 0, 0, 0.25);transition:background 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease}.range-field:hover::-webkit-slider-thumb{background:#005F87;box-shadow:0 4px 8px rgba(0, 0, 0, 0.3)}.range-field:active::-webkit-slider-thumb{background:#005F87;cursor:grabbing;transform:scale(1.05)}.range-field:hover::-moz-range-thumb{background:#005F87;box-shadow:0 4px 8px rgba(0, 0, 0, 0.3)}.range-field:active::-moz-range-thumb{background:#005F87;cursor:grabbing;transform:scale(1.05)}.range-field:hover::-ms-thumb{background:#005F87;box-shadow:0 4px 8px rgba(0, 0, 0, 0.3)}.range-field:active::-ms-thumb{background:#005F87;cursor:grabbing;transform:scale(1.05)}.range-field:focus-visible{outline:none}.range-field:focus-visible::-webkit-slider-thumb{box-shadow:0 0 0 4px rgba(99, 102, 241, 0.4)}.range-field:focus-visible::-moz-range-thumb{box-shadow:0 0 0 4px rgba(99, 102, 241, 0.4)}.range-field:focus-visible::-ms-thumb{box-shadow:0 0 0 4px rgba(99, 102, 241, 0.4)}.range-wrapper--disabled .range-label,.range-wrapper--disabled .range-value{color:#9ca3af}.range-field:disabled{background:transparent;cursor:not-allowed}.range-field:disabled::-webkit-slider-runnable-track{background:linear-gradient(to right, #b3b3b3 var(--fill-percentage), #e0e0e0 var(--fill-percentage))}.range-field:disabled::-moz-range-track{background:linear-gradient(to right, #b3b3b3 var(--fill-percentage), #e0e0e0 var(--fill-percentage))}.range-field:disabled::-ms-track{background:linear-gradient(to right, #b3b3b3 var(--fill-percentage), #e0e0e0 var(--fill-percentage))}.range-field:disabled::-webkit-slider-thumb{background:#a0a0a0;cursor:not-allowed;box-shadow:none}.range-field:disabled::-moz-range-thumb{background:#a0a0a0;cursor:not-allowed;box-shadow:none}.range-field:disabled::-ms-thumb{background:#a0a0a0;cursor:not-allowed;box-shadow:none}";

const RangeInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.myChange = createEvent(this, "myChange");
    }
    name;
    label;
    value = 0;
    min = 0;
    max = 100;
    step = 1;
    disabled = false;
    myChange;
    handleChange = (event) => {
        if (this.disabled) {
            return;
        }
        const input = event.target;
        this.value = parseFloat(input.value);
        this.myChange?.emit(this.value);
    };
    render() {
        const range = this.max - this.min;
        const fillPercentage = range > 0 ? ((this.value - this.min) / range) * 100 : 0;
        return (h("div", { key: '3c18df2a3b0b8deb6c197dcf104669f5c39fb257', class: { 'range-wrapper': true, 'range-wrapper--disabled': this.disabled }, style: { '--fill-percentage': `${fillPercentage}%` } }, h("label", { key: '0167ada083de278b18b1c862d30597546a1b4ec3', htmlFor: this.name, class: "range-label" }, this.label, h("span", { key: '62054d1b39027e161fff7122a3ade0d512a2d2f0', class: "range-value" }, this.value)), h("input", { key: '778585b244b94edaadbdf472d849ec444608b198', type: "range", id: this.name, name: this.name, value: this.value, min: this.min, max: this.max, step: this.step, disabled: this.disabled, onChange: this.handleChange, class: "range-field" })));
    }
};
RangeInput.style = rangeInputCss;

const timeInputCss = ":host{display:block;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";margin-bottom:20px;max-width:280px}.time-wrapper{display:flex;flex-direction:column;gap:8px;position:relative;width:100%}.time-label{font-size:15px;color:#333;font-weight:600;margin-bottom:2px}.time-field{padding:12px 15px;border:1px solid #d1d5db;border-radius:10px;font-size:16px;color:#1f2937;background-color:#ffffff;transition:border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;width:100%;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%239da4ae\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-clock\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline></svg>');background-repeat:no-repeat;background-position:right 15px center;background-size:20px}.time-field::placeholder{color:#9ca3af;opacity:1}.time-field:hover:not(:disabled){border-color:#a7b1be}.time-field:focus{outline:none;border-color:#005F87;box-shadow:0 0 0 3px rgba(99, 102, 241, 0.25)}.time-wrapper--disabled .time-label{color:#b3b3b3}.time-field:disabled{background-color:#f5f5f5;color:#a0a0a0;cursor:not-allowed;border-color:#e0e0e0;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23c4c4c4\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-clock\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline></svg>')}.time-field::-webkit-calendar-picker-indicator{opacity:0;width:24px;height:24px;cursor:pointer;position:absolute;right:12px;z-index:1}";

const TimeInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.myChange = createEvent(this, "myChange");
    }
    name;
    label;
    value = '';
    min;
    max;
    step;
    disabled = false;
    myChange;
    handleChange = (event) => {
        if (this.disabled) {
            return;
        }
        const input = event.target;
        this.value = input.value;
        this.myChange?.emit(this.value);
    };
    render() {
        return (h("div", { key: '772d5b3e771282d11f758397ff8e844bf3a82caf', class: { 'time-wrapper': true, 'time-wrapper--disabled': this.disabled } }, h("label", { key: '2dcbf41c28709bc5416ab08b8e4069919c45dec9', htmlFor: this.name, class: "time-label" }, this.label), h("input", { key: '02ca065ac5a6d10b6d6b0d6c62ac95b6ef3c09b2', type: "time", id: this.name, name: this.name, value: this.value, min: this.min, max: this.max, step: this.step, disabled: this.disabled, onChange: this.handleChange, class: "time-field", placeholder: "HH:MM" })));
    }
};
TimeInput.style = timeInputCss;

export { CheckboxInput as checkbox_input, DateInput as date_input, MyButton as my_button, RadioButton as radio_button, RangeInput as range_input, TimeInput as time_input };
//# sourceMappingURL=checkbox-input.date-input.my-button.radio-button.range-input.time-input.entry.js.map

//# sourceMappingURL=checkbox-input_6.entry.js.map