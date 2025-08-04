import { r as registerInstance, g as getElement, h } from './index-DcMv3VsE.js';

const rightClickMenuCss = ".menu{position:fixed;background:white;border:1px solid #ccc;border-radius:6px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.2);list-style:none;margin:0;padding:0.5rem 0;z-index:1000;min-width:180px}.menu li{display:flex;align-items:center;padding:0.5rem 1rem;cursor:pointer;gap:0.5rem;font-size:14px;transition:background 0.2s}.menu li:hover{background:#f1f1f1}.menu li.disabled{color:#aaa;cursor:not-allowed}.icon{width:1rem;text-align:center}";

const RightClickMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    items = [];
    visible = false;
    pos = { x: 0, y: 0 };
    onContextMenu(event) {
        event.preventDefault();
        this.visible = true;
        this.pos = { x: event.clientX, y: event.clientY };
    }
    onClick() {
        this.visible = false;
    }
    onItemClick(item) {
        if (item.enabled) {
            const customEvent = new CustomEvent('menuSelect', {
                detail: item,
                bubbles: true,
                composed: true,
            });
            this.el.dispatchEvent(customEvent);
        }
        this.visible = false;
    }
    render() {
        return (h("div", { key: 'b0e9b025f5f7519174be71143c5c57bbfdc2bd51' }, h("ix-style-loader", { key: '7610676a948f6a9d8361fe1878ad774519918cbd' }), this.visible && (h("ul", { key: '1ef2891d218e7e3cc0714959775ae5a2a7d661b1', class: "menu", style: { top: `${this.pos.y}px`, left: `${this.pos.x}px` } }, this.items.map((item) => (h("li", { class: { disabled: !item.enabled }, onClick: () => this.onItemClick(item) }, h("span", { class: "icon" }, item.icon), h("span", null, item.name)))))), h("slot", { key: '9b683e97b998cba1693b286de360c5d5a8185957' })));
    }
};
RightClickMenu.style = rightClickMenuCss;

export { RightClickMenu as right_click_menu };
//# sourceMappingURL=right-click-menu.entry.js.map

//# sourceMappingURL=right-click-menu.entry.js.map