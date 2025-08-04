import { r as registerInstance, h } from './index-DcMv3VsE.js';

const myDropdownMenuCss = ":host{display:block;width:100%}select{width:100%;max-width:100%;padding:0.5rem;font-size:1rem}@media (max-width: 768px){select.small{font-size:0.8rem}select.medium{font-size:1rem}select.large{font-size:1.2rem}}.ParentSelect{width:100%;padding:8px 12px;border:3px solid var(--theme-menu--border-color);border-radius:4px;font-family:Arial, sans-serif;cursor:pointer}.ParentSelect{background-color:var(--theme-menu--background);color:var( --theme-menu-header--color)}.ParentSelect option{background-color:var(--theme-menu-item--background);color:var(--theme-menu-item--color)}.ParentSelect option:hover{background-color:var(--theme-menu-item--background--hover);color:var(--theme-menu-item--color--hover)}.ParentSelect.small{font-size:12px;padding:6px 10px}.ParentSelect.medium{font-size:14px;padding:8px 12px}.ParentSelect.large{font-size:16px;padding:10px 14px}";

const MyDropdownMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    options = [];
    valeOfEachOption = [];
    variantSize = 'medium';
    render() {
        const classOption = {
            "ParentSelect": true,
            'small': this.variantSize === 'small',
            'medium': this.variantSize === 'medium',
            'large': this.variantSize === 'large',
        };
        const optionsLength = this.options.length;
        return (h(h.Fragment, null, h("ix-style-loader", { key: '7de01017f1f312ec8ab9cf7af780a26ac3ed8876' }), h("select", { key: '33f0538ee9a94dc4a3fc0468827fc8e3d6f4a7d5', class: classOption, style: { width: '100%' } }, Array.from({ length: optionsLength }).map((_, i) => (h("option", { value: this.valeOfEachOption[i] ?? this.options[i] }, this.options[i]))))));
    }
};
MyDropdownMenu.style = myDropdownMenuCss;

export { MyDropdownMenu as my_dropdown_menu };
//# sourceMappingURL=my-dropdown-menu.entry.js.map

//# sourceMappingURL=my-dropdown-menu.entry.js.map