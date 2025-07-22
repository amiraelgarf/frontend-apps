'use strict';

var index = require('./index-Qkg_gWF8.js');

const myListCss = ":host{display:block}.ListObject{border:2px solid rgb(133, 132, 132);border-radius:10px;box-shadow:5px 5px 5px black;overflow:hidden;text-align:center;max-width:250px}.ListObject.Siemens-LightTheme:hover{background-color:#BEDFE6;cursor:pointer}.ListObject.Siemens-LightTheme{background-color:rgb(138, 200, 253);color:#000}.ListObject.VIQ-DarkTheme{background-color:#040b9c;color:white;box-shadow:5px 5px 5px #4554c6}.ListObject.VIQ-DarkTheme:hover{background-color:#040b9c;color:white;cursor:pointer}";

const MyList = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("ul", { key: '4190bb844f48e401fbde78d235d00a9590c41de6', style: styleUl }, this.items.map(i => index.h("li", { class: classes }, i))));
    }
};
MyList.style = myListCss;

exports.my_list = MyList;
//# sourceMappingURL=my-list.entry.cjs.js.map

//# sourceMappingURL=my-list.cjs.entry.js.map