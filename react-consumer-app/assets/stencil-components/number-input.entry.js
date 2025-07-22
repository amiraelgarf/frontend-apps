import { r as registerInstance, c as createEvent, h } from './index-crweC_lX.js';

const numberInputCss = ":host{display:block;font-family:'Inter', sans-serif}input[type='number']{width:100%;padding:0.75rem;font-size:1rem;border:1px solid #ccc;border-radius:6px;background-color:#fff;color:#333;font-family:inherit;transition:border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out}input[type='number']:focus{border-color:#28a745;box-shadow:0 0 0 3px rgba(40, 167, 69, 0.1);outline:none}";

const NumberInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("input", { key: '575c4237f9e5221b045729fff200d72ef437793d', type: "number", value: this.value, min: this.min, max: this.max, onInput: this.handleInput }));
    }
};
NumberInput.style = numberInputCss;

export { NumberInput as number_input };
//# sourceMappingURL=number-input.entry.js.map

//# sourceMappingURL=number-input.entry.js.map