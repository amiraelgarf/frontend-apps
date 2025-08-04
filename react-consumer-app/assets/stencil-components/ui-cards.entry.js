import { r as registerInstance, h, H as Host } from './index-DcMv3VsE.js';

const uiCardsCss = ":host{display:block;font-family:'Inter', sans-serif}.card{border:1px solid #ddd;border-radius:8px;padding:1rem;background-color:#fff;box-shadow:0 2px 8px rgba(0, 0, 0, 0.05)}.card-header h3{margin:0 0 0.5rem 0;font-size:1.2rem;color:#333}.card-content{font-size:1rem;color:#555}";

const UiCards = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    cardTitle = "Card";
    render() {
        return (h(h.Fragment, null, h("ix-style-loader", { key: '6be5aaee51d828f761090dadaef5f83064e1e478' }), h(Host, { key: '2b1a9e73a4ed59fa660812a171ab8b0a4755b383' }, h("div", { key: 'db70e94a289f17457cb6b82b20fd281efbdb76f8', class: "card" }, this.cardTitle && (h("div", { key: '41f1e7ec05abf6c9018ee12e6b56f64fc65d9305', class: "card-header" }, h("h3", { key: '84e22a4951c35769009cb21aaf30bbd81c1301d0' }, this.cardTitle))), h("div", { key: 'f7e8f6c8aae8809e0f904f1dd3bc01827faea8e1', class: "card-content" }, h("slot", { key: 'fa36280175edb77e37c20c219f1d01fc1585da0d' }))))));
    }
};
UiCards.style = uiCardsCss;

export { UiCards as ui_cards };
//# sourceMappingURL=ui-cards.entry.js.map

//# sourceMappingURL=ui-cards.entry.js.map