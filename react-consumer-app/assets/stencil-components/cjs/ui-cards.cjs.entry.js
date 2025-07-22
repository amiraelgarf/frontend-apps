'use strict';

var index = require('./index-Qkg_gWF8.js');

const uiCardsCss = ":host{display:block;font-family:'Inter', sans-serif}.card{border:1px solid #ddd;border-radius:8px;padding:1rem;background-color:#fff;box-shadow:0 2px 8px rgba(0, 0, 0, 0.05)}.card-header h3{margin:0 0 0.5rem 0;font-size:1.2rem;color:#333}.card-content{font-size:1rem;color:#555}";

const UiCards = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    cardTitle = "Card";
    render() {
        return (index.h(index.Host, { key: 'bd201c6e5c846d312dd8abff97ca1298ca135684' }, index.h("div", { key: '835fae25bad4798a794409bde25f7c9d15b1234c', class: "card" }, this.cardTitle && (index.h("div", { key: 'b035fb40abf305d0f0afd3517bd426679d726f59', class: "card-header" }, index.h("h3", { key: '4e088a32611a1ed9bab888dc887fd3461858783f' }, this.cardTitle))), index.h("div", { key: 'd57b1784fb00b5bd7e965a948cf656a54ff3a15a', class: "card-content" }, index.h("slot", { key: '6657622386354520a86def1e86d907cfd1c83a01' })))));
    }
};
UiCards.style = uiCardsCss;

exports.ui_cards = UiCards;
//# sourceMappingURL=ui-cards.entry.cjs.js.map

//# sourceMappingURL=ui-cards.cjs.entry.js.map