import { r as registerInstance, h } from './index-crweC_lX.js';

const myDropdownMenuCss = ":host{display:block;}.ParentSelect{width:100%;padding:8px 12px;border:1px solid #ccc;border-radius:4px;font-family:Arial, sans-serif;cursor:pointer}.ParentSelect.Siemens-LightTheme{background-color:#ffffff;color:#333333;border-color:#c4c4c4}.ParentSelect.Siemens-LightTheme option{background-color:#ffffff;color:#333333}.ParentSelect.VIQ-DarkTheme{background-color:#333333;color:#e0e0e0;border-color:#555555}.ParentSelect.VIQ-DarkTheme option{background-color:#333333;color:#e0e0e0}.ParentSelect.small{font-size:12px;padding:6px 10px}.ParentSelect.medium{font-size:14px;padding:8px 12px}.ParentSelect.large{font-size:16px;padding:10px 14px}.ParentSelect:focus{outline:none;border-color:#0056b3;box-shadow:0 0 0 2px rgba(0, 86, 179, 0.2)}.ParentSelect:hover{border-color:#999}";

const MyDropdownMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
MyDropdownMenu.style = myDropdownMenuCss;

export { MyDropdownMenu as my_dropdown_menu };
//# sourceMappingURL=my-dropdown-menu.entry.js.map

//# sourceMappingURL=my-dropdown-menu.entry.js.map