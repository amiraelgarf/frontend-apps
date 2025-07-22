import { h } from "@stencil/core";
export class RadioButton {
    name;
    value;
    label;
    checked = false;
    disabled = false;
    myChange;
    handleChange = (event) => {
        if (this.disabled) {
            return;
        }
        const input = event.target;
        this.checked = input.checked;
        this.myChange?.emit({ value: this.value, checked: this.checked });
    };
    render() {
        return (h("label", { key: 'f002fee11fcd543e1282934015c88e426446b1cd', class: { 'radio-button-wrapper': true, 'radio-button-wrapper--disabled': this.disabled } }, h("input", { key: 'baf6ccea6f88b82225e87f8d6d71a9eb5bc753f9', type: "radio", name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, onChange: this.handleChange, class: "radio-button-input" }), h("span", { key: 'ed01e5b113f134e26a31b40eca6fdc4ebd64d858', class: "radio-button-custom" }), h("span", { key: 'fd38d92694e6cf8318e693837b0b0c325c02987b', class: "radio-button-label" }, this.label)));
    }
    static get is() { return "radio-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["radio-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["radio-button.css"]
        };
    }
    static get properties() {
        return {
            "name": {
                "type": "string",
                "attribute": "name",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The name of the radio group."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The value of the radio button."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The label to display next to the radio button."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "checked": {
                "type": "boolean",
                "attribute": "checked",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the radio button is currently checked."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "false"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
                    "text": "Whether the radio button is disabled."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "myChange",
                "name": "myChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when the radio button's checked state changes."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=radio-button.js.map
