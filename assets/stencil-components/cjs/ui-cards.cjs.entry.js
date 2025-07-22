'use strict';

var index = require('./index-Qkg_gWF8.js');

const uiCardsCss = ":host{display:block;font-family:'Inter', sans-serif}.card{border:1px solid #ddd;border-radius:8px;padding:1rem;background-color:#fff;box-shadow:0 2px 8px rgba(0, 0, 0, 0.05)}.card-header h3{margin:0 0 0.5rem 0;font-size:1.2rem;color:#333}.card-content{font-size:1rem;color:#555}";

const UiCards = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    cardTitle = "Card";
    render() {
        return (index.h(index.Host, { key: 'a25925e3092733c276c366875802163184f79a2b' }, index.h("div", { key: '0c12082e0ee5034fdf91db520d2a1861d37c2481', class: "card" }, this.cardTitle && (index.h("div", { key: '9c86170ab004ea0fd16e6a89453a85411838c925', class: "card-header" }, index.h("h3", { key: 'ecc6bf681ccba03418ffbb45d7d6bd249636aa48' }, this.cardTitle))), index.h("div", { key: 'fc8870eb250ce71353b1af27121a80385a318867', class: "card-content" }, index.h("slot", { key: '1c6c6adb5809a9c83c154591fa74c45bdcdf471e' })))));
    }
};
UiCards.style = uiCardsCss;

exports.ui_cards = UiCards;
//# sourceMappingURL=ui-cards.entry.cjs.js.map

//# sourceMappingURL=ui-cards.cjs.entry.js.map