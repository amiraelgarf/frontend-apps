import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';

const textAreaCss = ":host{display:block;font-family:'Inter', sans-serif}textarea{width:100%;padding:0.75rem;font-size:1rem;border:1px solid #472626;border-radius:6px;resize:vertical;background-color:#6c4949;color:#333;font-family:inherit;transition:border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out}textarea:focus{border-color:#007bff;box-shadow:0 0 0 3px rgba(0, 123, 255, 0.1);outline:none}";

const TextArea$1 = proxyCustomElement(class TextArea extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.valueChange = createEvent(this, "valueChange");
    }
    placeholder = 'Enter text...';
    value = '';
    valueChange;
    internalValue = this.value;
    componentWillLoad() {
        this.internalValue = this.value;
    }
    valueChanged(newValue) {
        this.internalValue = newValue;
    }
    handleInput = (event) => {
        const input = event.target;
        this.internalValue = input.value;
        this.valueChange.emit(input.value);
    };
    render() {
        return (h("textarea", { key: 'f5474fc98ddefb9a1ef39afebf9bdbdd2cc15b2a', onInput: this.handleInput, ref: (el) => {
                if (el) {
                    el.placeholder = this.placeholder;
                    el.value = this.internalValue;
                }
            } }));
    }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
    static get style() { return textAreaCss; }
}, [1, "text-area", {
        "placeholder": [1],
        "value": [1],
        "internalValue": [32]
    }, undefined, {
        "value": ["valueChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["text-area"];
    components.forEach(tagName => { switch (tagName) {
        case "text-area":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, TextArea$1);
            }
            break;
    } });
}
defineCustomElement$1();

const TextArea = TextArea$1;
const defineCustomElement = defineCustomElement$1;

export { TextArea, defineCustomElement };
//# sourceMappingURL=text-area.js.map

//# sourceMappingURL=text-area.js.map