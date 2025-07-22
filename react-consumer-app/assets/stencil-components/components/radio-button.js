import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';

const radioButtonCss = ":host{display:block;font-family:'Inter', sans-serif}.radio-button-wrapper{display:inline-flex;align-items:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:8px 0;position:relative}.radio-button-input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.radio-button-custom{height:20px;width:20px;background-color:#e0e0e0;border-radius:50%;display:inline-block;position:relative;transition:background-color 0.2s ease, border-color 0.2s ease;border:2px solid #ccc;flex-shrink:0}.radio-button-wrapper:hover .radio-button-input:not(:checked):not(:disabled)~.radio-button-custom{background-color:#d0d0d0;border-color:#a0a0a0}.radio-button-input:checked~.radio-button-custom{background-color:#005F87;border-color:#005F87}.radio-button-custom:after{content:\"\";position:absolute;display:none;top:50%;left:50%;transform:translate(-50%, -50%);width:10px;height:10px;border-radius:50%;background:white}.radio-button-input:checked~.radio-button-custom:after{display:block}.radio-button-label{margin-left:10px;color:#333;font-size:16px;line-height:1.2}.radio-button-wrapper--disabled{cursor:not-allowed;opacity:0.6}.radio-button-wrapper--disabled .radio-button-custom{background-color:#f0f0f0;border-color:#e0e0e0}.radio-button-wrapper--disabled .radio-button-input:checked~.radio-button-custom{background-color:#a0d0a0;border-color:#a0d0a0}.radio-button-wrapper--disabled .radio-button-label{color:#777}.radio-button-input:focus-visible~.radio-button-custom{outline:2px solid #DAECF0;outline-offset:2px}";

const RadioButton$1 = proxyCustomElement(class RadioButton extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
        return (h("label", { key: 'f002fee11fcd543e1282934015c88e426446b1cd', class: { 'radio-button-wrapper': true, 'radio-button-wrapper--disabled': this.disabled } }, h("input", { key: 'baf6ccea6f88b82225e87f8d6d71a9eb5bc753f9', type: "radio", name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, onChange: this.handleChange, class: "radio-button-input" }), h("span", { key: 'ed01e5b113f134e26a31b40eca6fdc4ebd64d858', class: "radio-button-custom" }), h("span", { key: 'fd38d92694e6cf8318e693837b0b0c325c02987b', class: "radio-button-label" }, this.label)));
    }
    static get style() { return radioButtonCss; }
}, [1, "radio-button", {
        "name": [1],
        "value": [1],
        "label": [1],
        "checked": [1540],
        "disabled": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["radio-button"];
    components.forEach(tagName => { switch (tagName) {
        case "radio-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, RadioButton$1);
            }
            break;
    } });
}
defineCustomElement$1();

const RadioButton = RadioButton$1;
const defineCustomElement = defineCustomElement$1;

export { RadioButton, defineCustomElement };
//# sourceMappingURL=radio-button.js.map

//# sourceMappingURL=radio-button.js.map