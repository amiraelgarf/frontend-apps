import { r as registerInstance, h, H as Host } from './index-CALO0PMU.js';

const uiCardsCss = ":host{display:block;font-family:'Inter', sans-serif}.card{border:1px solid #ddd;border-radius:8px;padding:1rem;background-color:#fff;box-shadow:0 2px 8px rgba(0, 0, 0, 0.05)}.card-header h3{margin:0 0 0.5rem 0;font-size:1.2rem;color:#333}.card-content{font-size:1rem;color:#555}";

const UiCards = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    cardTitle = "Card";
    render() {
        return (h(Host, { key: 'e17b4f30cbb812f8dc67cd6970490505aa07172f' }, h("div", { key: '941cede2c3f87c6878df7455e2380d9c819aaf28', class: "card" }, this.cardTitle && (h("div", { key: 'd55774bc3a78732ecb62fec80689c08aaf0ac64b', class: "card-header" }, h("h3", { key: 'f04bddf9263143dff551a9b6a3c5bf8460bffda2' }, this.cardTitle))), h("div", { key: 'f2a008c4b92b22879b6be4c295efc55e4ab76707', class: "card-content" }, h("slot", { key: 'f730951688b36eb059057e25c1a8c2d497b2c558' })))));
    }
};
UiCards.style = uiCardsCss;

export { UiCards as ui_cards };
//# sourceMappingURL=ui-cards.entry.js.map

//# sourceMappingURL=ui-cards.entry.js.map