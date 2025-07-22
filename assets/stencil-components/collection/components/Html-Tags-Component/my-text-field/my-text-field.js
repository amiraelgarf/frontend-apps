import { h } from "@stencil/core";
export class MyTextField {
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
        return (h("div", { key: '0680b07f11882231e98ede125821dd7b84f4b304' }, h("form", { key: '8c53170b1c97412648a6f68a6bb1176cb52d06a0' }, h("label", { key: '04e0e4f6aff3621e6f0eca7ea582dc6940ca99c5', htmlFor: "TextField", id: "labelText", style: { color: this.ColorOfLable } }, this.lablelText), h("input", { key: '32bddfba7b78cef6a33b96871fc3e18bf3e7d708', type: "text", placeholder: this.textInPlaceholder, id: "TextField", class: classesInput, required: this.IsRequeredToFill, size: this.size, disabled: this.disable }))));
    }
    static get is() { return "my-text-field"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["my-text-field.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["my-text-field.css"]
        };
    }
    static get properties() {
        return {
            "textInPlaceholder": {
                "type": "string",
                "attribute": "text-in-placeholder",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "defaultValue": "\"Enter your text here\""
            },
            "lablelText": {
                "type": "string",
                "attribute": "lablel-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "defaultValue": "\"Text Field\""
            },
            "ColorOfLable": {
                "type": "string",
                "attribute": "color-of-lable",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "defaultValue": "\"black\""
            },
            "Theme": {
                "type": "string",
                "attribute": "theme",
                "mutable": false,
                "complexType": {
                    "original": "TextFieldTheme",
                    "resolved": "\"Siemens-LightTheme\" | \"VIQ-DarkTheme\"",
                    "references": {
                        "TextFieldTheme": {
                            "location": "local",
                            "path": "F:/Siemens/copy/custom-frontend-library/src/components/Html-Tags-Component/my-text-field/my-text-field.tsx",
                            "id": "src/components/Html-Tags-Component/my-text-field/my-text-field.tsx::TextFieldTheme"
                        }
                    }
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
                "defaultValue": "\"Siemens-LightTheme\""
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
            },
            "IsRequeredToFill": {
                "type": "boolean",
                "attribute": "is-requered-to-fill",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "defaultValue": "false"
            },
            "size": {
                "type": "number",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "20"
            },
            "disable": {
                "type": "boolean",
                "attribute": "disable",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=my-text-field.js.map
