import { r as registerInstance, h } from './index-DKeYANm1.js';

const myListCss = ":host{display:block}.ListObject{border:2px solid rgb(133, 132, 132);border-radius:10px;box-shadow:5px 5px 5px black;overflow:hidden;text-align:center;max-width:250px}.ListObject.Siemens-LightTheme:hover{background-color:#BEDFE6;cursor:pointer}.ListObject.Siemens-LightTheme{background-color:rgb(138, 200, 253);color:#000}.ListObject.VIQ-DarkTheme{background-color:#040b9c;color:white;box-shadow:5px 5px 5px #4554c6}.ListObject.VIQ-DarkTheme:hover{background-color:#040b9c;color:white;cursor:pointer}";

const MyList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    items = [];
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
            gap: `${this.spaceBetweenItems * 0.25}rem`, // gap works on the flex container
            flexWrap: this.wrap ? "wrap" : "nowrap",
            flexDirection: this.direction,
            listStyle: 'none', // Good practice to remove default ul list styling
            padding: '0', // Remove default padding
            margin: '0', // Remove default margin
        };
        return (h("ul", { key: '3594715b2dd14f282ff999eddf767b29235ad397', style: styleUl }, this.items.map(i => h("li", { class: classes }, i))));
    }
};
MyList.style = myListCss;

export { MyList as my_list };
//# sourceMappingURL=my-list.entry.js.map

//# sourceMappingURL=my-list.entry.js.map