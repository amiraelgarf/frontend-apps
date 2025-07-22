'use strict';

var index = require('./index-Qkg_gWF8.js');

const textAreaCss = ":host{display:block;font-family:'Inter', sans-serif}textarea{width:100%;padding:0.75rem;font-size:1rem;border:1px solid #472626;border-radius:6px;resize:vertical;background-color:#6c4949;color:#333;font-family:inherit;transition:border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out}textarea:focus{border-color:#007bff;box-shadow:0 0 0 3px rgba(0, 123, 255, 0.1);outline:none}";

const TextArea = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.valueChange = index.createEvent(this, "valueChange");
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
        return (index.h("textarea", { key: 'c6ecf7683108b8128e60238acb191dbbc99f69ea', onInput: this.handleInput, ref: (el) => {
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

exports.text_area = TextArea;
//# sourceMappingURL=text-area.entry.cjs.js.map

//# sourceMappingURL=text-area.cjs.entry.js.map