import { r as registerInstance, h, H as Host } from './index-DKeYANm1.js';

const uiCardsCss = ":host{display:block;font-family:'Inter', sans-serif}.card{border:1px solid #ddd;border-radius:8px;padding:1rem;background-color:#fff;box-shadow:0 2px 8px rgba(0, 0, 0, 0.05)}.card-header h3{margin:0 0 0.5rem 0;font-size:1.2rem;color:#333}.card-content{font-size:1rem;color:#555}";

const UiCards = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Optional title for the card */
    Name = "Card";
    render() {
        return (h(Host, { key: '40f947d0c4ff32a30e42caa790a94b0f8b0aabc4' }, h("div", { key: '8d10324fa9397e784a1a95bb0b293dbc63ed88aa', class: "card" }, this.Name && h("div", { key: 'aa10fe23372ad03ab434e8c9a27094d4fd9cb73d', class: "card-header" }, h("h3", { key: '5ccc8b56b867e29c1522e17dd4a3eb3b672b2676' }, this.Name)), h("div", { key: 'ab061b3ae14005aaa6fd5499749498367ceb8783', class: "card-content" }, h("slot", { key: 'fd25bb1145b51859d67ba5c44e687e6dc12f90ae' })))));
    }
};
UiCards.style = uiCardsCss;

export { UiCards as ui_cards };
//# sourceMappingURL=ui-cards.entry.js.map

//# sourceMappingURL=ui-cards.entry.js.map