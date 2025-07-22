import { p as proxyCustomElement, H, h } from './index.js';

const rightClickMenuCss = ".context-menu{position:absolute;list-style-type:none;padding:5px;margin:0;width:250px;background-image:linear-gradient(to right top, #0b0b0b,#1f1f1f,#323232,#454545,#5a5a5a);color:white;box-shadow:0px 2px 2px 0px rgba(0,0,0,0.5), inset 0px -3px 6px -2px rgba(0,0,0,0.3)}.context-menu li{display:flex;align-items:center;padding:5px 10px;cursor:pointer;position:relative;transition:bakground-color 0.3 ease}.context-menu li:hover{background-color:#555}.context-menu li img{margin-right:10px;width:16px;height:16px}.submenu{display:none;position:absolute;top:0;left:250px;background-image:linear-gradient(to right top, #0b0b0b,#1f1f1f,#323232,#454545,#5a5a5a);padding:4px;list-style-type:none;width:150px;box-shadow:0px 2px 2px 0px rgba(0,0,0,0.5), inset 0px -3px 6px -2px rgba(0,0,0,0.3);color:white}.has-submenu::after{content:'▶';position:absolute;right:10px;font-size:12px;color:white}.has-submenu:hover .submenu{display:block}.menu-divider{border:none;border-top:1px solid lightgray;margin:5px 0;opacity:0.5}";

const RightClickMenu$1 = proxyCustomElement(class RightClickMenu extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    theItems = [];
    menuVisible = false;
    menuPosition = { x: 0, y: 0 };
    adjustedPosition = { x: 0, y: 0 };
    submenuAdjustedPositionX = 250;
    get hostElement() { return this; }
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
        return (h("div", { key: '693291faa28965738eec7378c14b0c8ea112967d', style: { height: '100vh', width: '100vw', overflow: 'hidden', position: 'relative' } }, this.menuVisible && (h("ul", { key: '15d26ff5ebad7e76ac67d6e539ffb91880364d12', ref: (el) => this.menuElementRef = el, class: "context-menu", style: {
                top: `${this.adjustedPosition.y}px`,
                left: `${this.adjustedPosition.x}px`
            } }, this.theItems.map(i => this.renderTheMenu(i))))));
    }
    static get watchers() { return {
        "menuVisible": ["adjustMenuPosition"],
        "menuPosition": ["adjustMenuPosition"]
    }; }
    static get style() { return rightClickMenuCss; }
}, [1, "right-click-menu", {
        "theItems": [16, "the-items"],
        "menuVisible": [32],
        "menuPosition": [32],
        "adjustedPosition": [32],
        "submenuAdjustedPositionX": [32]
    }, undefined, {
        "menuVisible": ["adjustMenuPosition"],
        "menuPosition": ["adjustMenuPosition"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["right-click-menu"];
    components.forEach(tagName => { switch (tagName) {
        case "right-click-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, RightClickMenu$1);
            }
            break;
    } });
}
defineCustomElement$1();

const RightClickMenu = RightClickMenu$1;
const defineCustomElement = defineCustomElement$1;

export { RightClickMenu, defineCustomElement };
//# sourceMappingURL=right-click-menu.js.map

//# sourceMappingURL=right-click-menu.js.map