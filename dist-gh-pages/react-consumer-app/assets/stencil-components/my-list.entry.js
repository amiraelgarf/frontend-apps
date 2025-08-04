import { r as registerInstance, h } from './index-DcMv3VsE.js';

const myListCss = ":host{display:block;width:100%}.ListObject{border:2px solid var(--theme-select-list--border-color);border-radius:10px;box-shadow:5px 5px 5px var( --theme-menu--box-shadow);overflow:hidden;text-align:center;max-width:250px}.ListObject{background-color:var(--theme-select-list-item--background);color:var(--theme-select-list-item--color)}.ListObject:hover{background-color:var(--theme-select-list-item--background--hover);color:var(--theme-select-list-item--color--hover);cursor:pointer}::slotted(li){min-width:120px}ul{width:100%;flex-wrap:wrap;}@media (max-width: 768px){ul{flex-direction:column !important;gap:0.5rem}}";

const MyList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    items = ['Item 1', 'Item 2', 'Item 3'];
    spaceBetweenItems = 10;
    direction = 'row';
    wrap = false;
    render() {
        const classes = {
            'ListObject': true,
        };
        const styleUl = {
            display: "flex",
            gap: `${this.spaceBetweenItems * 0.25}rem`,
            flexWrap: this.wrap ? "wrap" : "nowrap",
            flexDirection: this.direction,
            listStyle: 'none',
            padding: '0',
            margin: '0',
            background: "--theme-select-list--background",
        };
        const needsScroll = this.direction === 'row' && !this.wrap;
        return (h("div", { key: '43a7988b5a7b58a03bd1a6309733901466024dee' }, h("ix-style-loader", { key: '88f1c896d143c8ca1b36c94e1609ceeb8d032899' }), h("div", { key: 'bb815df6fe0f6c24b71683e27f21fbbac8e828a3', style: needsScroll ? { overflowX: 'auto', width: '100%' } : {} }, h("ul", { key: '8208dac8d9c82a7fa04f7eeae30954a4d5886f16', style: styleUl }, this.items.map(item => (h("li", { class: classes }, item)))))));
    }
};
MyList.style = myListCss;

export { MyList as my_list };
//# sourceMappingURL=my-list.entry.js.map

//# sourceMappingURL=my-list.entry.js.map