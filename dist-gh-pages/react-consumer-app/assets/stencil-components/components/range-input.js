import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';

const rangeInputCss = ":host{display:block;font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";margin-bottom:24px;max-width:400px;width:100%}.range-wrapper{display:flex;flex-direction:column;gap:12px;position:relative;width:100%}.range-label{font-size:16px;color:#333;font-weight:600;display:flex;justify-content:space-between;align-items:center;margin-bottom:4px}.range-value{font-weight:700;color:#1f2937;min-width:50px;text-align:right;padding-left:8px}.range-field{width:100%;-webkit-appearance:none;appearance:none;height:10px;background:transparent;border-radius:5px;outline:none;margin:0;padding:0}.range-field::-webkit-slider-runnable-track{width:100%;height:10px;background:linear-gradient(to right, #005F87 var(--fill-percentage), #e0e0e0 var(--fill-percentage));border-radius:5px;transition:background 0.2s ease}.range-field::-moz-range-track{width:100%;height:10px;background:linear-gradient(to right, #005F87 var(--fill-percentage), #e0e0e0 var(--fill-percentage));border-radius:5px;transition:background 0.2s ease}.range-field::-ms-track{width:100%;height:10px;background:linear-gradient(to right, #005F87 var(--fill-percentage), #e0e0e0 var(--fill-percentage));border-radius:5px;transition:background 0.2s ease;border-color:transparent;color:transparent}.range-field::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:24px;height:24px;background:#005F87;border-radius:50%;cursor:grab;margin-top:-7px;box-shadow:0 3px 6px rgba(0, 0, 0, 0.25);transition:background 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease}.range-field::-moz-range-thumb{width:24px;height:24px;background:#005F87;border-radius:50%;cursor:grab;box-shadow:0 3px 6px rgba(0, 0, 0, 0.25);transition:background 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease}.range-field::-ms-thumb{width:24px;height:24px;background:#005F87;border-radius:50%;cursor:grab;box-shadow:0 3px 6px rgba(0, 0, 0, 0.25);transition:background 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease}.range-field:hover::-webkit-slider-thumb{background:#005F87;box-shadow:0 4px 8px rgba(0, 0, 0, 0.3)}.range-field:active::-webkit-slider-thumb{background:#005F87;cursor:grabbing;transform:scale(1.05)}.range-field:hover::-moz-range-thumb{background:#005F87;box-shadow:0 4px 8px rgba(0, 0, 0, 0.3)}.range-field:active::-moz-range-thumb{background:#005F87;cursor:grabbing;transform:scale(1.05)}.range-field:hover::-ms-thumb{background:#005F87;box-shadow:0 4px 8px rgba(0, 0, 0, 0.3)}.range-field:active::-ms-thumb{background:#005F87;cursor:grabbing;transform:scale(1.05)}.range-field:focus-visible{outline:none}.range-field:focus-visible::-webkit-slider-thumb{box-shadow:0 0 0 4px rgba(99, 102, 241, 0.4)}.range-field:focus-visible::-moz-range-thumb{box-shadow:0 0 0 4px rgba(99, 102, 241, 0.4)}.range-field:focus-visible::-ms-thumb{box-shadow:0 0 0 4px rgba(99, 102, 241, 0.4)}.range-wrapper--disabled .range-label,.range-wrapper--disabled .range-value{color:#9ca3af}.range-field:disabled{background:transparent;cursor:not-allowed}.range-field:disabled::-webkit-slider-runnable-track{background:linear-gradient(to right, #b3b3b3 var(--fill-percentage), #e0e0e0 var(--fill-percentage))}.range-field:disabled::-moz-range-track{background:linear-gradient(to right, #b3b3b3 var(--fill-percentage), #e0e0e0 var(--fill-percentage))}.range-field:disabled::-ms-track{background:linear-gradient(to right, #b3b3b3 var(--fill-percentage), #e0e0e0 var(--fill-percentage))}.range-field:disabled::-webkit-slider-thumb{background:#a0a0a0;cursor:not-allowed;box-shadow:none}.range-field:disabled::-moz-range-thumb{background:#a0a0a0;cursor:not-allowed;box-shadow:none}.range-field:disabled::-ms-thumb{background:#a0a0a0;cursor:not-allowed;box-shadow:none}";

const RangeInput$1 = proxyCustomElement(class RangeInput extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get style() { return rangeInputCss; }
}, [1, "range-input", {
        "name": [1],
        "label": [1],
        "value": [1538],
        "min": [2],
        "max": [2],
        "step": [2],
        "disabled": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["range-input"];
    components.forEach(tagName => { switch (tagName) {
        case "range-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, RangeInput$1);
            }
            break;
    } });
}
defineCustomElement$1();

const RangeInput = RangeInput$1;
const defineCustomElement = defineCustomElement$1;

export { RangeInput, defineCustomElement };
//# sourceMappingURL=range-input.js.map

//# sourceMappingURL=range-input.js.map