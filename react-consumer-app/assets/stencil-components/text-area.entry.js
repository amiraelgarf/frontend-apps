import { r as registerInstance, c as createEvent, h } from './index-CALO0PMU.js';

const textAreaCss = ":host{display:block;font-family:'Inter', sans-serif}textarea{width:100%;padding:0.75rem;font-size:1rem;border:1px solid #472626;border-radius:6px;resize:vertical;background-color:#6c4949;color:#333;font-family:inherit;transition:border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out}textarea:focus{border-color:#007bff;box-shadow:0 0 0 3px rgba(0, 123, 255, 0.1);outline:none}";

const TextArea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChange = createEvent(this, "valueChange", 7);
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
        return (h("textarea", { key: '8d23e9b5e329b13b50a1cd16a7467f5c20d6d5e8', onInput: this.handleInput, ref: (el) => {
                if (el) {
                    el.placeholder = this.placeholder;
                    el.value = this.internalValue;
                }
            } }));
    }
    static get watchers() { return {
        "value": ["valueChanged"]
    }; }
};
TextArea.style = textAreaCss;

export { TextArea as text_area };
//# sourceMappingURL=text-area.entry.js.map

//# sourceMappingURL=text-area.entry.js.map