import { h, Host } from "@stencil/core";
export class UiNotification {
    type = 'info';
    placement = 'top-right';
    header = '';
    content = '';
    render() {
        return (h(Host, { key: '369c6801a96c9ab056facb9a63c2a4e9abf5a569', class: `notification ${this.placement} ${this.type}` }, h("div", { key: '646f5a197bff3b76f6f639b51f85cadf03840077', class: "notification-box" }, this.header && h("div", { key: '4042e438eefcdbba106b21f800345dfa8010ef75', class: "header" }, this.header), h("div", { key: 'f18f5422495ab1d530105f9778f31f6c859b6d6b', class: "content" }, this.content))));
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
