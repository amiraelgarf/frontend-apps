import { Host, h } from "@stencil/core";
export class UiCards {
    cardTitle = "Card";
    render() {
        return (h(Host, { key: 'bd201c6e5c846d312dd8abff97ca1298ca135684' }, h("div", { key: '835fae25bad4798a794409bde25f7c9d15b1234c', class: "card" }, this.cardTitle && (h("div", { key: 'b035fb40abf305d0f0afd3517bd426679d726f59', class: "card-header" }, h("h3", { key: '4e088a32611a1ed9bab888dc887fd3461858783f' }, this.cardTitle))), h("div", { key: 'd57b1784fb00b5bd7e965a948cf656a54ff3a15a', class: "card-content" }, h("slot", { key: '6657622386354520a86def1e86d907cfd1c83a01' })))));
    }
    static get is() { return "ui-cards"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ui-cards.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ui-cards.css"]
        };
    }
    static get properties() {
        return {
            "cardTitle": {
                "type": "string",
                "attribute": "card-title",
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
                    "text": "Optional title for the card"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "\"Card\""
            }
        };
    }
}
//# sourceMappingURL=ui-cards.js.map
