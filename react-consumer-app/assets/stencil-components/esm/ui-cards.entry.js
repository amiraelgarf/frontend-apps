import { r as registerInstance, h, H as Host } from './index-crweC_lX.js';

const uiCardsCss = ":host{display:block;font-family:'Inter', sans-serif}.card{border:1px solid #ddd;border-radius:8px;padding:1rem;background-color:#fff;box-shadow:0 2px 8px rgba(0, 0, 0, 0.05)}.card-header h3{margin:0 0 0.5rem 0;font-size:1.2rem;color:#333}.card-content{font-size:1rem;color:#555}";

const UiCards = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    cardTitle = "Card";
    render() {
        return (h(Host, { key: 'bd201c6e5c846d312dd8abff97ca1298ca135684' }, h("div", { key: '835fae25bad4798a794409bde25f7c9d15b1234c', class: "card" }, this.cardTitle && (h("div", { key: 'b035fb40abf305d0f0afd3517bd426679d726f59', class: "card-header" }, h("h3", { key: '4e088a32611a1ed9bab888dc887fd3461858783f' }, this.cardTitle))), h("div", { key: 'd57b1784fb00b5bd7e965a948cf656a54ff3a15a', class: "card-content" }, h("slot", { key: '6657622386354520a86def1e86d907cfd1c83a01' })))));
    }
};
UiCards.style = uiCardsCss;

export { UiCards as ui_cards };
//# sourceMappingURL=ui-cards.entry.js.map

//# sourceMappingURL=ui-cards.entry.js.map