import { p as proxyCustomElement, H, h } from './index.js';

const myListCss = ":host{display:block}.ListObject{border:2px solid rgb(133, 132, 132);border-radius:10px;box-shadow:5px 5px 5px black;overflow:hidden;text-align:center;max-width:250px}.ListObject.Siemens-LightTheme:hover{background-color:#BEDFE6;cursor:pointer}.ListObject.Siemens-LightTheme{background-color:rgb(138, 200, 253);color:#000}.ListObject.VIQ-DarkTheme{background-color:#040b9c;color:white;box-shadow:5px 5px 5px #4554c6}.ListObject.VIQ-DarkTheme:hover{background-color:#040b9c;color:white;cursor:pointer}";

const MyList$1 = proxyCustomElement(class MyList extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    items = ['Item 1', 'Item 2', 'Item 3'];
    theme = 'Siemens-LightTheme';
    spaceBetweenItems = 10;
    direction = 'row';
    wrap = false;
    render() {
        const classes = {
            'ListObject': true,
            'Siemens-LightTheme': this.theme === 'Siemens-LightTheme',
            'VIQ-DarkTheme': this.theme === 'VIQ-DarkTheme',
        };
        const styleUl = {
            display: "flex",
            gap: `${this.spaceBetweenItems * 0.25}rem`,
            flexWrap: this.wrap ? "wrap" : "nowrap",
            flexDirection: this.direction,
            listStyle: 'none',
            padding: '0',
            margin: '0',
        };
        return (h("ul", { key: 'f611ce4dbd765a4f9dd30ad77c9756fc9e65109a', style: styleUl }, this.items.map(i => h("li", { class: classes }, i))));
    }
    static get style() { return myListCss; }
}, [1, "my-list", {
        "items": [16],
        "theme": [1],
        "spaceBetweenItems": [2, "space-between-items"],
        "direction": [1],
        "wrap": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-list"];
    components.forEach(tagName => { switch (tagName) {
        case "my-list":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MyList$1);
            }
            break;
    } });
}
defineCustomElement$1();

const MyList = MyList$1;
const defineCustomElement = defineCustomElement$1;

export { MyList, defineCustomElement };
//# sourceMappingURL=my-list.js.map

//# sourceMappingURL=my-list.js.map