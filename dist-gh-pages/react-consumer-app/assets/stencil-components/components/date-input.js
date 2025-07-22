import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';

const dateInputCss = ":host{display:block;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";margin-bottom:20px;max-width:280px;width:100%}.date-wrapper{display:flex;flex-direction:column;gap:8px;position:relative;width:100%}.date-label{font-size:15px;color:#333;font-weight:600;margin-bottom:2px}.date-field{padding:12px 15px;border:1px solid #d1d5db;border-radius:10px;font-size:16px;color:#1f2937;background-color:#ffffff;transition:border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;width:100%;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%239da4ae\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-calendar\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line></svg>');background-repeat:no-repeat;background-position:right 15px center;background-size:20px}.date-field::placeholder{color:#9ca3af;opacity:1}.date-field:hover:not(:disabled){border-color:#a7b1be}.date-field:focus{outline:none;border-color:#005F87;box-shadow:0 0 0 3px rgba(99, 102, 241, 0.25)}.date-wrapper--disabled .date-label{color:#b3b3b3}.date-field:disabled{background-color:#f5f5f5;color:#a0a0a0;cursor:not-allowed;border-color:#e0e0e0;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%23c4c4c4\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-calendar\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line></svg>')}.date-field::-webkit-calendar-picker-indicator{opacity:0;width:24px;height:24px;cursor:pointer;position:absolute;right:12px;z-index:1}";

const DateInput$1 = proxyCustomElement(class DateInput extends H {
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
    static get style() { return dateInputCss; }
}, [1, "date-input", {
        "name": [1],
        "label": [1],
        "value": [1537],
        "min": [1],
        "max": [1],
        "disabled": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["date-input"];
    components.forEach(tagName => { switch (tagName) {
        case "date-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, DateInput$1);
            }
            break;
    } });
}
defineCustomElement$1();

const DateInput = DateInput$1;
const defineCustomElement = defineCustomElement$1;

export { DateInput, defineCustomElement };
//# sourceMappingURL=date-input.js.map

//# sourceMappingURL=date-input.js.map