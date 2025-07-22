import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';

const numberInputCss = ":host{display:block;font-family:'Inter', sans-serif}input[type='number']{width:100%;padding:0.75rem;font-size:1rem;border:1px solid #ccc;border-radius:6px;background-color:#fff;color:#333;font-family:inherit;transition:border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out}input[type='number']:focus{border-color:#28a745;box-shadow:0 0 0 3px rgba(40, 167, 69, 0.1);outline:none}";

const NumberInput$1 = proxyCustomElement(class NumberInput extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.valueChange = createEvent(this, "valueChange");
    }
    value = 0;
    min = 0;
    max = 100;
    valueChange;
    handleInput = (event) => {
        const input = event.target;
        this.valueChange?.emit(Number(input.value));
    };
    render() {
        return (h("input", { key: 'fe5ef0f911bdb9f5cd02a3a6ea989f850853e562', type: "number", value: this.value, min: this.min, max: this.max, onInput: this.handleInput }));
    }
    static get style() { return numberInputCss; }
}, [1, "number-input", {
        "value": [2],
        "min": [2],
        "max": [2]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["number-input"];
    components.forEach(tagName => { switch (tagName) {
        case "number-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, NumberInput$1);
            }
            break;
    } });
}
defineCustomElement$1();

const NumberInput = NumberInput$1;
const defineCustomElement = defineCustomElement$1;

export { NumberInput, defineCustomElement };
//# sourceMappingURL=number-input.js.map

//# sourceMappingURL=number-input.js.map