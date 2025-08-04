import { r as registerInstance, g as getElement, h } from './index-DcMv3VsE.js';

const rightClickMenuV1Css = ".context-menu{position:absolute;list-style-type:none;padding:5px;margin:0;width:250px;background-color:var(--theme-menu--background);color:var(--theme-menu-header--color);box-shadow:0px 2px 2px 0px rgba(0,0,0,0.5), inset 0px -3px 6px -2px rgba(0,0,0,0.3)}.context-menu li{color:var(--theme-menu-item--color);background-color:var(--theme-menu-item--background);display:flex;align-items:center;padding:5px 10px;cursor:pointer;position:relative;transition:bakground-color 0.3 ease}.context-menu li:hover{color:var(--theme-menu-item--color--hover);background-color:var(--theme-menu-item--background--hover)}.context-menu li img{margin-right:10px;width:16px;height:16px}.submenu{display:none;position:absolute;top:0;left:250px;padding:4px;list-style-type:none;width:150px;box-shadow:0px 2px 2px 0px rgba(0,0,0,0.5), inset 0px -3px 6px -2px rgba(0,0,0,0.3);background-color:var(--theme-menu--background);color:var(--theme-menu-header--color)}.has-submenu::after{content:'▶';position:absolute;right:10px;font-size:12px;color:var(--theme-menu-item-arrow--color)}.has-submenu:hover .submenu{display:block}.menu-divider{border:none;border-top:1px solid var(--theme-menu-separator--background);margin:5px 0;opacity:0.5}";

const RightClickMenuV1 = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    theItems = [];
    menuVisible = false;
    menuPosition = { x: 0, y: 0 };
    adjustedPosition = { x: 0, y: 0 };
    submenuAdjustedPositionX = 250;
    get hostElement() { return getElement(this); }
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
            return (h("hr", { class: "menu-divider" }));
        }
        return (h("li", { id: item.idItem, class: { 'has-submenu': item.hasChildren }, onClick: () => {
                if (item.functionality) {
                    item.functionality();
                }
                this.menuVisible = false;
            } }, item.iconImage && (h("img", { src: item.iconImage, alt: item.iconImage || 'icon' })), item.textData, item.hasChildren && (h("ul", { class: "submenu", style: {
                top: '0px',
                left: `${this.submenuAdjustedPositionX}px`,
            } }, item.children.map(child => this.renderTheMenu(child))))));
    }
    render() {
        return (h("div", { key: 'c08d8c025acd8f26245ea2f1704c112bb204064a', style: { height: '100vh', width: '100vw', overflow: 'hidden', position: 'relative' } }, h("ix-style-loader", { key: 'e0696d3043b077a8149b7b0733647820749c8a58' }), h("slot", { key: 'e5d248f914e4ea2e7f6c60fd33497aee8da27a2d' }), this.menuVisible && (h("ul", { key: '2224905ef43289ee18b016250ff3138ff846e6a6', ref: (el) => this.menuElementRef = el, class: "context-menu", style: {
                top: `${this.adjustedPosition.y}px`,
                left: `${this.adjustedPosition.x}px`
            } }, this.theItems.map(i => this.renderTheMenu(i))))));
    }
    static get watchers() { return {
        "menuVisible": ["adjustMenuPosition"],
        "menuPosition": ["adjustMenuPosition"]
    }; }
};
RightClickMenuV1.style = rightClickMenuV1Css;

export { RightClickMenuV1 as right_click_menu_v1 };
//# sourceMappingURL=right-click-menu-v1.entry.js.map

//# sourceMappingURL=right-click-menu-v1.entry.js.map