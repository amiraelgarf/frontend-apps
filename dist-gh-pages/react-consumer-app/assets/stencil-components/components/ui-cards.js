import { p as proxyCustomElement, H, h, a as Host } from './index.js';

const uiCardsCss = ":host{display:block;font-family:'Inter', sans-serif}.card{border:1px solid #ddd;border-radius:8px;padding:1rem;background-color:#fff;box-shadow:0 2px 8px rgba(0, 0, 0, 0.05)}.card-header h3{margin:0 0 0.5rem 0;font-size:1.2rem;color:#333}.card-content{font-size:1rem;color:#555}";

const UiCards$1 = proxyCustomElement(class UiCards extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    cardTitle = "Card";
    render() {
        return (h(Host, { key: 'a25925e3092733c276c366875802163184f79a2b' }, h("div", { key: '0c12082e0ee5034fdf91db520d2a1861d37c2481', class: "card" }, this.cardTitle && (h("div", { key: '9c86170ab004ea0fd16e6a89453a85411838c925', class: "card-header" }, h("h3", { key: 'ecc6bf681ccba03418ffbb45d7d6bd249636aa48' }, this.cardTitle))), h("div", { key: 'fc8870eb250ce71353b1af27121a80385a318867', class: "card-content" }, h("slot", { key: '1c6c6adb5809a9c83c154591fa74c45bdcdf471e' })))));
    }
    static get style() { return uiCardsCss; }
}, [1, "ui-cards", {
        "cardTitle": [1, "card-title"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ui-cards"];
    components.forEach(tagName => { switch (tagName) {
        case "ui-cards":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, UiCards$1);
            }
            break;
    } });
}
defineCustomElement$1();

const UiCards = UiCards$1;
const defineCustomElement = defineCustomElement$1;

export { UiCards, defineCustomElement };
//# sourceMappingURL=ui-cards.js.map

//# sourceMappingURL=ui-cards.js.map