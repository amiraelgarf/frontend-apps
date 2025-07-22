import { h } from "@stencil/core";
export class MyDropdownMenu {
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
        return (h("select", { key: '3427cbe1c36b1603d5f1eb54e95c971915312ce3', class: classOption }, Array.from({ length: optionsLength }).map((_, i) => (h("option", { value: this.valeOfEachOption[i] }, this.options[i])))));
    }
    static get is() { return "my-dropdown-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["my-dropdown-menu.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["my-dropdown-menu.css"]
        };
    }
    static get properties() {
        return {
            "options": {
                "type": "unknown",
                "attribute": "options",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "valeOfEachOption": {
                "type": "unknown",
                "attribute": "vale-of-each-option",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "theme": {
                "type": "string",
                "attribute": "theme",
                "mutable": false,
                "complexType": {
                    "original": "'Siemens-LightTheme' | 'VIQ-DarkTheme'",
                    "resolved": "\"Siemens-LightTheme\" | \"VIQ-DarkTheme\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Siemens-LightTheme'"
            },
            "variantSize": {
                "type": "string",
                "attribute": "variant-size",
                "mutable": false,
                "complexType": {
                    "original": "'small' | 'medium' | 'large'",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'medium'"
            }
        };
    }
}
//# sourceMappingURL=my-dropdown-menu.js.map
