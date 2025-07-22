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
        return (h("div", { key: 'cd712b61ddcbdcfbc257becb2f54820fb3f4fa39', class: { 'range-wrapper': true, 'range-wrapper--disabled': this.disabled }, style: { '--fill-percentage': `${fillPercentage}%` } }, h("label", { key: '953a926c5bf2f4224496aa112991e8b2a45b4d42', htmlFor: this.name, class: "range-label" }, this.label, h("span", { key: 'ffe21661a43d16e9add48a9c19ff45e0f3f0030d', class: "range-value" }, this.value)), h("input", { key: '1075d18b84bea45919b871b8429a547e7690a0bb', type: "range", id: this.name, name: this.name, value: this.value, min: this.min, max: this.max, step: this.step, disabled: this.disabled, onChange: this.handleChange, class: "range-field" })));
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
