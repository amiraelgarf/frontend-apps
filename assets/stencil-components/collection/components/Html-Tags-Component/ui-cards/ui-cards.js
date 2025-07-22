import { Host, h } from "@stencil/core";
export class UiCards {
    cardTitle = "Card";
    render() {
        return (h(Host, { key: 'a25925e3092733c276c366875802163184f79a2b' }, h("div", { key: '0c12082e0ee5034fdf91db520d2a1861d37c2481', class: "card" }, this.cardTitle && (h("div", { key: '9c86170ab004ea0fd16e6a89453a85411838c925', class: "card-header" }, h("h3", { key: 'ecc6bf681ccba03418ffbb45d7d6bd249636aa48' }, this.cardTitle))), h("div", { key: 'fc8870eb250ce71353b1af27121a80385a318867', class: "card-content" }, h("slot", { key: '1c6c6adb5809a9c83c154591fa74c45bdcdf471e' })))));
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
