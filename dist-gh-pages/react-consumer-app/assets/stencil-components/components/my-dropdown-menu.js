import { p as proxyCustomElement, H, h } from './index.js';

const myDropdownMenuCss = ":host{display:block;}.ParentSelect{width:100%;padding:8px 12px;border:1px solid #ccc;border-radius:4px;font-family:Arial, sans-serif;cursor:pointer}.ParentSelect.Siemens-LightTheme{background-color:#ffffff;color:#333333;border-color:#c4c4c4}.ParentSelect.Siemens-LightTheme option{background-color:#ffffff;color:#333333}.ParentSelect.VIQ-DarkTheme{background-color:#333333;color:#e0e0e0;border-color:#555555}.ParentSelect.VIQ-DarkTheme option{background-color:#333333;color:#e0e0e0}.ParentSelect.small{font-size:12px;padding:6px 10px}.ParentSelect.medium{font-size:14px;padding:8px 12px}.ParentSelect.large{font-size:16px;padding:10px 14px}.ParentSelect:focus{outline:none;border-color:#0056b3;box-shadow:0 0 0 2px rgba(0, 86, 179, 0.2)}.ParentSelect:hover{border-color:#999}";

const MyDropdownMenu$1 = proxyCustomElement(class MyDropdownMenu extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    options = [];
    valeOfEachOption = [];
    theme = 'Siemens-LightTheme';
    variantSize = 'medium';
    render() {
        const classOption = {
            "ParentSelect": true,
            'Siemens-LightTheme': this.theme === 'Siemens-LightTheme',
            'VIQ-DarkTheme': this.theme === 'VIQ-DarkTheme',
            'small': this.variantSize === 'small',
            'medium': this.variantSize === 'medium',
            'large': this.variantSize === 'large',
        };
        const optionsLength = this.options.length;
        return (h("select", { key: 'f0d86a3e7ae5751220798b96ec6951c341951812', class: classOption }, Array.from({ length: optionsLength }).map((_, i) => (h("option", { value: this.valeOfEachOption[i] }, this.options[i])))));
    }
    static get style() { return myDropdownMenuCss; }
}, [1, "my-dropdown-menu", {
        "options": [16],
        "valeOfEachOption": [16, "vale-of-each-option"],
        "theme": [1],
        "variantSize": [1, "variant-size"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-dropdown-menu"];
    components.forEach(tagName => { switch (tagName) {
        case "my-dropdown-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MyDropdownMenu$1);
            }
            break;
    } });
}
defineCustomElement$1();

const MyDropdownMenu = MyDropdownMenu$1;
const defineCustomElement = defineCustomElement$1;

export { MyDropdownMenu, defineCustomElement };
//# sourceMappingURL=my-dropdown-menu.js.map

//# sourceMappingURL=my-dropdown-menu.js.map