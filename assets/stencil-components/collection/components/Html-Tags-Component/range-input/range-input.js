import { h } from "@stencil/core";
export class RangeInput {
    name;
    label;
    value = 0;
    min = 0;
    max = 100;
    step = 1;
    disabled = false;
    myChange;
    handleChange = (event) => {
        if (this.disabled) {
            return;
        }
        const input = event.target;
        this.value = parseFloat(input.value);
        this.myChange?.emit(this.value);
    };
    render() {
        const range = this.max - this.min;
        const fillPercentage = range > 0 ? ((this.value - this.min) / range) * 100 : 0;
        return (h("div", { key: '3c18df2a3b0b8deb6c197dcf104669f5c39fb257', class: { 'range-wrapper': true, 'range-wrapper--disabled': this.disabled }, style: { '--fill-percentage': `${fillPercentage}%` } }, h("label", { key: '0167ada083de278b18b1c862d30597546a1b4ec3', htmlFor: this.name, class: "range-label" }, this.label, h("span", { key: '62054d1b39027e161fff7122a3ade0d512a2d2f0', class: "range-value" }, this.value)), h("input", { key: '778585b244b94edaadbdf472d849ec444608b198', type: "range", id: this.name, name: this.name, value: this.value, min: this.min, max: this.max, step: this.step, disabled: this.disabled, onChange: this.handleChange, class: "range-field" })));
    }
    static get is() { return "range-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["range-input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["range-input.css"]
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
                    "text": "The name of the input field."
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
                    "text": "The label for the input field."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "value": {
                "type": "number",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The current value of the range input."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "0"
            },
            "min": {
                "type": "number",
                "attribute": "min",
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
                    "text": "The minimum allowed value."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            },
            "max": {
                "type": "number",
                "attribute": "max",
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
                    "text": "The maximum allowed value."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "100"
            },
            "step": {
                "type": "number",
                "attribute": "step",
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
                    "text": "The step interval for the range."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "1"
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
                    "text": "Whether the input is disabled."
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
                    "text": "Event emitted when the input value changes."
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=range-input.js.map
