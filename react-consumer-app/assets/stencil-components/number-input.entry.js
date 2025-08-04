import { r as registerInstance, c as createEvent, h } from './index-DcMv3VsE.js';

const numberInputCss = ":host{display:block;font-family:'Inter', sans-serif}input[type='number']{width:100%;padding:0.75rem;font-size:1rem;border:1px solid #ccc;border-radius:6px;background-color:#fff;color:#333;font-family:inherit;transition:border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out}input[type='number']:focus{border-color:#28a745;box-shadow:0 0 0 3px rgba(40, 167, 69, 0.1);outline:none}";

const NumberInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChange = createEvent(this, "valueChange", 7);
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
        return (h("div", { key: '02ca98e598f522aa936e673defc5f83b0ff95dbe' }, h("ix-style-loader", { key: '0887788111e270de257ed0a5147b9d8da3e6a25d' }), h("label", { key: '1f041082e4176805f3a362a62bc7654e05e4bf13', htmlFor: "numberInput" }, "Number Input"), h("input", { key: 'a30225486179169df184ea4ff1fa7ac29e6f7eef', type: "number", value: this.value, min: this.min, max: this.max, onInput: this.handleInput })));
    }
};
NumberInput.style = numberInputCss;

export { NumberInput as number_input };
//# sourceMappingURL=number-input.entry.js.map

//# sourceMappingURL=number-input.entry.js.map