import { r as registerInstance, h, H as Host } from './index-crweC_lX.js';

const uiCardsCss = ":host{display:block;font-family:'Inter', sans-serif}.card{border:1px solid #ddd;border-radius:8px;padding:1rem;background-color:#fff;box-shadow:0 2px 8px rgba(0, 0, 0, 0.05)}.card-header h3{margin:0 0 0.5rem 0;font-size:1.2rem;color:#333}.card-content{font-size:1rem;color:#555}";

const UiCards = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    cardTitle = "Card";
    render() {
        return (h(Host, { key: '19695d72f8e9f009ee6a2aa0a795b062e7eda15c' }, h("div", { key: '0d58160b4a7f4aa1c15759f75f72d9dcb41e740e', class: "card" }, this.cardTitle && (h("div", { key: 'd9bc0b44b28278cfcdb6e88d3bb8646f9165f825', class: "card-header" }, h("h3", { key: '9e2fe46b63c926b7e7ba838e2722fe153f6b816b' }, this.cardTitle))), h("div", { key: '3e4152bfa3a99f484a44f577ad742925ad6e6c1f', class: "card-content" }, h("slot", { key: '267c75a7b965c30bc2944fb35cd5fe645735055a' })))));
    }
};
UiCards.style = uiCardsCss;

export { UiCards as ui_cards };
//# sourceMappingURL=ui-cards.entry.js.map

//# sourceMappingURL=ui-cards.entry.js.map