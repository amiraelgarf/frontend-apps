import { h } from "@stencil/core";
export class MyButton {
    label;
    variant = 'primary';
    size = 'medium';
    disabled = false;
    myClick;
    handleClick = () => {
        if (!this.disabled) {
            this.myClick?.emit();
        }
    };
    render() {
        const classes = {
            'my-button': true,
            [`my-button--${this.variant}`]: true,
            [`my-button--${this.size}`]: true,
            'my-button--disabled': this.disabled,
        };
        return (h("button", { key: 'fc19089235e0c12168fb0fe41aa7b76e5357320d', class: classes, disabled: this.disabled, onClick: this.handleClick, type: "button" }, this.label));
    }
    static get is() { return "my-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["my-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["my-button.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": "The text to display inside the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "ButtonVariant",
                    "resolved": "\"outline\" | \"primary\" | \"secondary\"",
                    "references": {
                        "ButtonVariant": {
                            "location": "local",
                            "path": "F:/Siemens/copy/custom-frontend-library/src/components/Html-Tags-Component/my-button/my-button.tsx",
                            "id": "src/components/Html-Tags-Component/my-button/my-button.tsx::ButtonVariant"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The visual variant of the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'primary'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "ButtonSize",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
                    "references": {
                        "ButtonSize": {
                            "location": "local",
                            "path": "F:/Siemens/copy/custom-frontend-library/src/components/Html-Tags-Component/my-button/my-button.tsx",
                            "id": "src/components/Html-Tags-Component/my-button/my-button.tsx::ButtonSize"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The size of the button"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'medium'"
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
                    "text": "Whether the button is disabled"
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
                "method": "myClick",
                "name": "myClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Event emitted when the button is clicked"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=my-button.js.map
