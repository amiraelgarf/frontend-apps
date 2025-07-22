import { h } from "@stencil/core";
export class CheckboxInput {
    name = '';
    value = '';
    label = '';
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
        return (h("label", { key: 'df60b6ad5ba489edd60d9f833b4ab15257261641', class: { 'checkbox-wrapper': true, 'checkbox-wrapper--disabled': this.disabled } }, h("input", { key: 'f743af95f6ad1da25473be6a05cf7eb618e741de', type: "checkbox", name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, onChange: this.handleChange, class: "checkbox-input" }), h("span", { key: '02835049395be846129ac499e055aa29d5229927', class: "checkbox-custom" }, h("svg", { key: 'd429d8c98e4f3f0b4a6b59393b48954454c31c5f', class: "checkbox-checkmark", viewBox: "0 0 24 24" }, h("polyline", { key: 'afda281c6fefc9f1c2834062c6744041d864b49b', points: "20 6 9 17 4 12" }))), h("span", { key: 'cb409e2d7025676980fe308a431827fdad8677bc', class: "checkbox-label" }, this.label)));
    }
    static get is() { return "checkbox-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["checkbox-input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["checkbox-input.css"]
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
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The name of the checkbox input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
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
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The value of the checkbox."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
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
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The label to display next to the checkbox."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
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
                    "text": "Whether the checkbox is currently checked."
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
                    "text": "Whether the checkbox is disabled."
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
                    "text": "Event emitted when the checkbox's checked state changes."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=checkbox-input.js.map
