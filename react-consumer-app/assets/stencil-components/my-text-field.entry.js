import { r as registerInstance, h } from './index-crweC_lX.js';

const myTextFieldCss = ":host{display:block}.labelText{padding:5px;margin-right:700px}#TextField{padding:5px}#TextField.Siemens-LightTheme{border-color:#718096}#TextField.VIQ-DarkTheme{border-radius:5px;border:1px solid #5B809A;background-color:#0F2E44;color:#FFFFFF;}#TextField.small{padding:5px;font-size:12px;min-height:24px}#TextField.medium{padding:10px;font-size:14px;min-height:32px}#TextField.large{padding:15px;font-size:16px;min-height:40px}#TextField:disabled{background-color:#E2E8F0;color:#A0AEC0;cursor:not-allowed;}";

const MyTextField = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    textInPlaceholder = "Enter your text here";
    lablelText = "Text Field";
    ColorOfLable = "black";
    Theme = "Siemens-LightTheme";
    variantSize = 'medium';
    IsRequeredToFill = false;
    size = 20;
    disable = false;
    render() {
        const classesInput = {
            'Siemens-LightTheme': this.Theme === 'Siemens-LightTheme',
            'VIQ-DarkTheme': this.Theme === 'VIQ-DarkTheme',
            'small': this.variantSize === 'small',
            'medium': this.variantSize === 'medium',
            'large': this.variantSize === 'large',
        };
        return (h("div", { key: 'd94510761e9acafb30f0bc71ca2c406bb2fa3834' }, h("form", { key: '984360a2bd16063f2cf0ddaae1216fa7980c6e09' }, h("label", { key: 'e427a52159861d9c7db8a88db1c8ded4d331b3aa', htmlFor: "TextField", id: "labelText", style: { color: this.ColorOfLable } }, this.lablelText), h("input", { key: 'ed951154ee482ed472e7a58201ea7662989e0304', type: "text", placeholder: this.textInPlaceholder, id: "TextField", class: classesInput, required: this.IsRequeredToFill, size: this.size, disabled: this.disable }))));
    }
};
MyTextField.style = myTextFieldCss;

export { MyTextField as my_text_field };
//# sourceMappingURL=my-text-field.entry.js.map

//# sourceMappingURL=my-text-field.entry.js.map