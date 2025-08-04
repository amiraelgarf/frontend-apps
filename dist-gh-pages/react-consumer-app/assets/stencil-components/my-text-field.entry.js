import { r as registerInstance, c as createEvent, h } from './index-DcMv3VsE.js';

const myTextFieldCss = ":host{display:block}input{border-radius:5px;border:3px solid var(--theme-input--border-color);background-color:var(--theme-input--background);color:var(--theme-label--color)}input[disabled= true ]{background-color:var(--theme-label--color--disabled)}input.small{font-size:12px;min-height:24px}input.medium{font-size:14px;min-height:36px}input.large{font-size:16px;min-height:40px}@media (max-width: 768px){input.small{font-size:0.9rem;min-height:30px}input.medium{font-size:1rem;min-height:36px}input.large{font-size:1.1rem;min-height:42px}}";

const MyTextField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChanged = createEvent(this, "valueChanged", 7);
    }
    textInPlaceholder = "Enter your text here";
    lablelText = "Text Field";
    ColorOfLable = "--theme-label--color";
    variantSize = 'medium';
    IsRequeredToFill = false;
    size = 20;
    disable = false;
    valueChanged;
    onInputChange = (event) => {
        const target = event.target;
        this.valueChanged.emit(target.value);
    };
    render() {
        const classesInput = {
            'small': this.variantSize === 'small',
            'medium': this.variantSize === 'medium',
            'large': this.variantSize === 'large',
        };
        return (h("div", { key: '4a36ab8a81776a104b21ec881ebacf615614c568' }, h("ix-style-loader", { key: '88e7e4ec059905749d60f2f81c0eb173271f93c7' }), h("form", { key: '77af932f949e509d6573031fa46ba49b69ca5c5b' }, h("label", { key: '6aa45682b13dde6ccd1ba8633ae316d51abc9078', htmlFor: "TextField", id: "labelText", style: { color: this.ColorOfLable } }, this.lablelText), h("input", { key: '1a5f29ccfd7a48b0d1f45131c3533922edf84f37', type: "text", placeholder: this.textInPlaceholder, id: "TextField", class: classesInput, required: this.IsRequeredToFill, size: this.size, disabled: this.disable, onInput: this.onInputChange }))));
    }
};
MyTextField.style = myTextFieldCss;

export { MyTextField as my_text_field };
//# sourceMappingURL=my-text-field.entry.js.map

//# sourceMappingURL=my-text-field.entry.js.map