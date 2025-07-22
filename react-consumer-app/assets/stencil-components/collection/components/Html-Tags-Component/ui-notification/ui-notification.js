import { h, Host } from "@stencil/core";
export class UiNotification {
    type = 'info';
    placement = 'top-right';
    header = '';
    content = '';
    render() {
        return (h(Host, { key: '2e444100700ad6dc8d014775992da2d8c7710972', class: `notification ${this.placement} ${this.type}` }, h("div", { key: '0f454a98d07147f52c3e1790e3200b1cd7ffd98a', class: "notification-box" }, this.header && h("div", { key: '9757e66758ac33de13356a01810d99fa44d006d1', class: "header" }, this.header), h("div", { key: '4c767a781550173099c792c51b44bc029ef69578', class: "content" }, this.content))));
    }
    static get is() { return "ui-notification"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ui-notification.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ui-notification.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'success' | 'error' | 'info' | 'warning'",
                    "resolved": "\"error\" | \"info\" | \"success\" | \"warning\"",
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
                "defaultValue": "'info'"
            },
            "placement": {
                "type": "string",
                "attribute": "placement",
                "mutable": false,
                "complexType": {
                    "original": "'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",
                    "resolved": "\"bottom-left\" | \"bottom-right\" | \"top-left\" | \"top-right\"",
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
                "defaultValue": "'top-right'"
            },
            "header": {
                "type": "string",
                "attribute": "header",
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
                "defaultValue": "''"
            },
            "content": {
                "type": "string",
                "attribute": "content",
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
                "defaultValue": "''"
            }
        };
    }
}
//# sourceMappingURL=ui-notification.js.map
