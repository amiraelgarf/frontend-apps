import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';

const checkboxInputCss = ":host{display:block;font-family:'Inter', sans-serif}.checkbox-wrapper{display:inline-flex;align-items:center;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:8px 0;position:relative}.checkbox-input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-custom{height:20px;width:20px;background-color:#e0e0e0;border-radius:4px;display:inline-block;position:relative;transition:background-color 0.2s ease, border-color 0.2s ease;border:2px solid #ccc;flex-shrink:0}.checkbox-wrapper:hover .checkbox-input:not(:checked):not(:disabled)~.checkbox-custom{background-color:#d0d0d0;border-color:#a0a0a0}.checkbox-input:checked~.checkbox-custom{background-color:#005F87;border-color:#005F87}.checkbox-checkmark{fill:none;stroke:white;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%) scale(0);transition:transform 0.2s ease-in-out}.checkbox-input:checked~.checkbox-custom .checkbox-checkmark{transform:translate(-50%, -50%) scale(1)}.checkbox-label{margin-left:10px;color:#333;font-size:16px;line-height:1.2}.checkbox-wrapper--disabled{cursor:not-allowed;opacity:0.6}.checkbox-wrapper--disabled .checkbox-custom{background-color:#f0f0f0;border-color:#e0e0e0}.checkbox-wrapper--disabled .checkbox-input:checked~.checkbox-custom{background-color:#a0c0e0;border-color:#a0c0e0}.checkbox-wrapper--disabled .checkbox-label{color:#777}.checkbox-input:focus-visible~.checkbox-custom{outline:2px solid #005F87;outline-offset:2px}";

const CheckboxInput$1 = proxyCustomElement(class CheckboxInput extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get style() { return checkboxInputCss; }
}, [1, "checkbox-input", {
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
    const components = ["checkbox-input"];
    components.forEach(tagName => { switch (tagName) {
        case "checkbox-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, CheckboxInput$1);
            }
            break;
    } });
}
defineCustomElement$1();

const CheckboxInput = CheckboxInput$1;
const defineCustomElement = defineCustomElement$1;

export { CheckboxInput, defineCustomElement };
//# sourceMappingURL=checkbox-input.js.map

//# sourceMappingURL=checkbox-input.js.map