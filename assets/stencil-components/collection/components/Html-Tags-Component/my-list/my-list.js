import { h } from "@stencil/core";
export class MyList {
    items = ['Item 1', 'Item 2', 'Item 3'];
    theme = 'Siemens-LightTheme';
    spaceBetweenItems = 10;
    direction = 'row';
    wrap = false;
    render() {
        const classes = {
            'ListObject': true,
            'Siemens-LightTheme': this.theme === 'Siemens-LightTheme',
            'VIQ-DarkTheme': this.theme === 'VIQ-DarkTheme',
        };
        const styleUl = {
            display: "flex",
            gap: `${this.spaceBetweenItems * 0.25}rem`,
            flexWrap: this.wrap ? "wrap" : "nowrap",
            flexDirection: this.direction,
            listStyle: 'none',
            padding: '0',
            margin: '0',
        };
        return (h("ul", { key: '4190bb844f48e401fbde78d235d00a9590c41de6', style: styleUl }, this.items.map(i => h("li", { class: classes }, i))));
    }
    static get is() { return "my-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["my-list.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["my-list.css"]
        };
    }
    static get properties() {
        return {
            "items": {
                "type": "unknown",
                "attribute": "items",
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
                "defaultValue": "['Item 1', 'Item 2', 'Item 3']"
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
            "spaceBetweenItems": {
                "type": "number",
                "attribute": "space-between-items",
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
                "defaultValue": "10"
            },
            "direction": {
                "type": "string",
                "attribute": "direction",
                "mutable": false,
                "complexType": {
                    "original": "'column' | 'row'",
                    "resolved": "\"column\" | \"row\"",
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
                "defaultValue": "'row'"
            },
            "wrap": {
                "type": "boolean",
                "attribute": "wrap",
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
//# sourceMappingURL=my-list.js.map
