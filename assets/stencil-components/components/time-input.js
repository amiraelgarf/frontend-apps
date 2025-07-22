import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';

const timeInputCss = ":host{display:block;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";margin-bottom:20px;max-width:280px}.time-wrapper{display:flex;flex-direction:column;gap:8px;position:relative;width:100%}.time-label{font-size:15px;color:#333;font-weight:600;margin-bottom:2px}.time-field{padding:12px 15px;border:1px solid #d1d5db;border-radius:10px;font-size:16px;color:#1f2937;background-color:#ffffff;transition:border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;width:100%;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%239da4ae\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-clock\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline></svg>');background-repeat:no-repeat;background-position:right 15px center;background-size:20px}.time-field::placeholder{color:#9ca3af;opacity:1}.time-field:hover:not(:disabled){border-color:#a7b1be}.time-field:focus{outline:none;border-color:#005F87;box-shadow:0 0 0 3px rgba(99, 102, 241, 0.25)}.time-wrapper--disabled .time-label{color:#b3b3b3}.time-field:disabled{background-color:#f5f5f5;color:#a0a0a0;cursor:not-allowed;border-color:#e0e0e0;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23c4c4c4\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-clock\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><polyline points=\"12 6 12 12 16 14\"></polyline></svg>')}.time-field::-webkit-calendar-picker-indicator{opacity:0;width:24px;height:24px;cursor:pointer;position:absolute;right:12px;z-index:1}";

const TimeInput$1 = proxyCustomElement(class TimeInput extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get style() { return timeInputCss; }
}, [1, "time-input", {
        "name": [1],
        "label": [1],
        "value": [1537],
        "min": [1],
        "max": [1],
        "step": [2],
        "disabled": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["time-input"];
    components.forEach(tagName => { switch (tagName) {
        case "time-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TimeInput$1);
            }
            break;
    } });
}
defineCustomElement$1();

const TimeInput = TimeInput$1;
const defineCustomElement = defineCustomElement$1;

export { TimeInput, defineCustomElement };
//# sourceMappingURL=time-input.js.map

//# sourceMappingURL=time-input.js.map