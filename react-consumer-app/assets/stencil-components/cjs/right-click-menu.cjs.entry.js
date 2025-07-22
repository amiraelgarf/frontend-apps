'use strict';

var index = require('./index-Qkg_gWF8.js');

const rightClickMenuCss = ".context-menu{position:absolute;list-style-type:none;padding:5px;margin:0;width:250px;background-image:linear-gradient(to right top, #0b0b0b,#1f1f1f,#323232,#454545,#5a5a5a);color:white;box-shadow:0px 2px 2px 0px rgba(0,0,0,0.5), inset 0px -3px 6px -2px rgba(0,0,0,0.3)}.context-menu li{display:flex;align-items:center;padding:5px 10px;cursor:pointer;position:relative;transition:bakground-color 0.3 ease}.context-menu li:hover{background-color:#555}.context-menu li img{margin-right:10px;width:16px;height:16px}.submenu{display:none;position:absolute;top:0;left:250px;background-image:linear-gradient(to right top, #0b0b0b,#1f1f1f,#323232,#454545,#5a5a5a);padding:4px;list-style-type:none;width:150px;box-shadow:0px 2px 2px 0px rgba(0,0,0,0.5), inset 0px -3px 6px -2px rgba(0,0,0,0.3);color:white}.has-submenu::after{content:'▶';position:absolute;right:10px;font-size:12px;color:white}.has-submenu:hover .submenu{display:block}.menu-divider{border:none;border-top:1px solid lightgray;margin:5px 0;opacity:0.5}";

const RightClickMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    theItems = [];
    menuVisible = false;
    menuPosition = { x: 0, y: 0 };
    adjustedPosition = { x: 0, y: 0 };
    submenuAdjustedPositionX = 250;
    get hostElement() { return index.getElement(this); }
    menuElementRef;
    componentDidLoad() {
        this.hostElement.addEventListener('contextmenu', this.handleRightClick.bind(this));
        document.addEventListener('click', this.handleClickOutside.bind(this));
    }
    disconnectedCallback() {
        this.hostElement.removeEventListener('contextmenu', this.handleRightClick.bind(this));
        document.removeEventListener('click', this.handleClickOutside.bind(this));
    }
    adjustMenuPosition() {
        if (this.menuVisible && this.menuElementRef) {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const menuWidth = 260;
            const menuHeight = this.menuElementRef.offsetHeight;
            let xPos = this.menuPosition.x;
            let yPos = this.menuPosition.y;
            if (xPos + menuWidth > viewportWidth) {
                xPos = viewportWidth - menuWidth;
            }
            if (yPos + menuHeight > viewportHeight) {
                yPos = viewportHeight - menuHeight;
            }
            this.adjustedPosition = { x: xPos, y: yPos };
            const submenuWidth = 150;
            this.submenuAdjustedPositionX = (xPos + menuWidth + submenuWidth > viewportWidth) ? -150 : menuWidth;
        }
    }
    handleRightClick(e) {
        e.preventDefault();
        this.menuPosition = { x: e.clientX, y: e.clientY };
        this.menuVisible = true;
    }
    handleClickOutside(e) {
        if (this.menuVisible
            && this.menuElementRef
            && !this.menuElementRef.contains(e.target)) {
            this.menuVisible = false;
        }
    }
    renderTheMenu(item) {
        if (item.isDivisor) {
            return (index.h("hr", { class: "menu-divider" }));
        }
        return (index.h("li", { id: item.idItem, class: { 'has-submenu': item.hasChildren }, onClick: () => {
                if (item.functionality) {
                    item.functionality();
                }
                this.menuVisible = false;
            } }, item.iconImage && (index.h("img", { src: item.iconImage, alt: item.iconImage || 'icon' })), item.textData, item.hasChildren && (index.h("ul", { class: "submenu", style: {
                top: '0px',
                left: `${this.submenuAdjustedPositionX}px`,
            } }, item.children.map(child => this.renderTheMenu(child))))));
    }
    render() {
        return (index.h("div", { key: 'ece2c9f1dfe2f5a5e7659e47cabbb8adcf4c6def', style: { height: '100vh', width: '100vw', overflow: 'hidden', position: 'relative' } }, this.menuVisible && (index.h("ul", { key: 'e9a737e6329d45bc4295f0ce6438421192b832f8', ref: (el) => this.menuElementRef = el, class: "context-menu", style: {
                top: `${this.adjustedPosition.y}px`,
                left: `${this.adjustedPosition.x}px`
            } }, this.theItems.map(i => this.renderTheMenu(i))))));
    }
    static get watchers() { return {
        "menuVisible": ["adjustMenuPosition"],
        "menuPosition": ["adjustMenuPosition"]
    }; }
};
RightClickMenu.style = rightClickMenuCss;

exports.right_click_menu = RightClickMenu;
//# sourceMappingURL=right-click-menu.entry.cjs.js.map

//# sourceMappingURL=right-click-menu.cjs.entry.js.map