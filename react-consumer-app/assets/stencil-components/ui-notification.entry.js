import { r as registerInstance, h, H as Host } from './index-crweC_lX.js';

const uiNotificationCss = ":host{display:block;position:fixed;max-width:300px;padding:1rem;z-index:1000}:host(.top-right){top:1rem;right:1rem}:host(.top-left){top:1rem;left:1rem}:host(.bottom-right){bottom:1rem;right:1rem}:host(.bottom-left){bottom:1rem;left:1rem}.notification-box{padding:1rem;border-radius:8px;box-shadow:0 2px 6px rgba(0, 0, 0, 0.15)}:host(.success) .notification-box{background-color:#28a745;color:white}:host(.error) .notification-box{background-color:#dc3545;color:white}:host(.info) .notification-box{background-color:#17a2b8;color:white}:host(.warning) .notification-box{background-color:#ffc107;color:black}.header{font-weight:bold;margin-bottom:0.5rem}.content{font-size:0.95rem}";

const UiNotification = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    type = 'info';
    placement = 'top-right';
    header = '';
    content = '';
    render() {
        return (h(Host, { key: 'f367d02b8bc4a86b4efb4ff42b27da13e50b30fb', class: `notification ${this.placement} ${this.type}` }, h("div", { key: 'ef837d9c9f0acee10aad854803b6d9e8b085df72', class: "notification-box" }, this.header && h("div", { key: 'fb41b10cb3bad0a32b5351de6dd171c6cbd6271b', class: "header" }, this.header), h("div", { key: 'be2f3b441a94935e6fff639e68040cff5202532e', class: "content" }, this.content))));
    }
};
UiNotification.style = uiNotificationCss;

export { UiNotification as ui_notification };
//# sourceMappingURL=ui-notification.entry.js.map

//# sourceMappingURL=ui-notification.entry.js.map