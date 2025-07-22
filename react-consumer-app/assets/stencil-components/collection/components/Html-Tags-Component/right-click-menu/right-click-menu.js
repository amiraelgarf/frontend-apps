import { h } from "@stencil/core";
export class RightClickMenu {
    theItems = [];
    menuVisible = false;
    menuPosition = { x: 0, y: 0 };
    adjustedPosition = { x: 0, y: 0 };
    submenuAdjustedPositionX = 250;
    hostElement;
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
            this.submenuAdjustedPositionX = (xPos + menuWidth + submenuWidth > viewportWidth) ? -submenuWidth : menuWidth;
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
        return (h("div", { key: 'ece2c9f1dfe2f5a5e7659e47cabbb8adcf4c6def', style: { height: '100vh', width: '100vw', overflow: 'hidden', position: 'relative' } }, this.menuVisible && (h("ul", { key: 'e9a737e6329d45bc4295f0ce6438421192b832f8', ref: (el) => this.menuElementRef = el, class: "context-menu", style: {
                top: `${this.adjustedPosition.y}px`,
                left: `${this.adjustedPosition.x}px`
            } }, this.theItems.map(i => this.renderTheMenu(i))))));
    }
    static get is() { return "right-click-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["right-click-menu.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["right-click-menu.css"]
        };
    }
    static get properties() {
        return {
            "theItems": {
                "type": "unknown",
                "attribute": "the-items",
                "mutable": false,
                "complexType": {
                    "original": "DataItem[]",
                    "resolved": "DataItem[]",
                    "references": {
                        "DataItem": {
                            "location": "global",
                            "id": "global::DataItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "menuVisible": {},
            "menuPosition": {},
            "adjustedPosition": {},
            "submenuAdjustedPositionX": {}
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "menuVisible",
                "methodName": "adjustMenuPosition"
            }, {
                "propName": "menuPosition",
                "methodName": "adjustMenuPosition"
            }];
    }
}
//# sourceMappingURL=right-click-menu.js.map
