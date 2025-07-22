import { h } from "@stencil/core";
export class TimeInput {
    name;
    label;
    value = '';
    min;
    max;
    step;
    disabled = false;
    myChange;
    handleChange = (event) => {
        if (this.disabled) {
            return;
        }
        const input = event.target;
        this.value = input.value;
        this.myChange?.emit(this.value);
    };
    render() {
        return (h("div", { key: '79b0594c3db2bc7c21b1fefca220c275a8d7a40c', class: { 'time-wrapper': true, 'time-wrapper--disabled': this.disabled } }, h("label", { key: 'a0f81c79ca1c97724f4ce189471594fcf4719ba7', htmlFor: this.name, class: "time-label" }, this.label), h("input", { key: '15fc76c585791ac0865ae4c142fccc4f4e1291fd', type: "time", id: this.name, name: this.name, value: this.value, min: this.min, max: this.max, step: this.step, disabled: this.disabled, onChange: this.handleChange, class: "time-field", placeholder: "HH:MM" })));
    }
    static get is() { return "time-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["time-input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["time-input.css"]
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
                "type": "string",
                "attribute": "value",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The current value of the time input."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "defaultValue": "''"
            },
            "min": {
                "type": "string",
                "attribute": "min",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The minimum allowed time (HH:MM)."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "max": {
                "type": "string",
                "attribute": "max",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The maximum allowed time (HH:MM)."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "step": {
                "type": "number",
                "attribute": "step",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The step interval in seconds."
                },
                "getter": false,
                "setter": false,
                "reflect": false
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
//# sourceMappingURL=time-input.js.map
