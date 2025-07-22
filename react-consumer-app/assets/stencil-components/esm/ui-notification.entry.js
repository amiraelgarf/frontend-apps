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
        return (h(Host, { key: '2e444100700ad6dc8d014775992da2d8c7710972', class: `notification ${this.placement} ${this.type}` }, h("div", { key: '0f454a98d07147f52c3e1790e3200b1cd7ffd98a', class: "notification-box" }, this.header && h("div", { key: '9757e66758ac33de13356a01810d99fa44d006d1', class: "header" }, this.header), h("div", { key: '4c767a781550173099c792c51b44bc029ef69578', class: "content" }, this.content))));
    }
};
UiNotification.style = uiNotificationCss;

export { UiNotification as ui_notification };
//# sourceMappingURL=ui-notification.entry.js.map

//# sourceMappingURL=ui-notification.entry.js.map