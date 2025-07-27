import { r as registerInstance, h, H as Host } from './index-CALO0PMU.js';

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
        return (h(Host, { key: '74f8b9669931ebe6e8eb5f571ab849142d038dd3', class: `notification ${this.placement} ${this.type}` }, h("div", { key: '5d43b71ca401f2ac63e5c79eee00c5297d87284d', class: "notification-box" }, this.header && h("div", { key: 'b4318aeed769865bd5c9ee3eba93d97dc32961e3', class: "header" }, this.header), h("div", { key: 'b1f20fa2018ee3ce4cd23b8b8abf31915706c135', class: "content" }, this.content))));
    }
};
UiNotification.style = uiNotificationCss;

export { UiNotification as ui_notification };
//# sourceMappingURL=ui-notification.entry.js.map

//# sourceMappingURL=ui-notification.entry.js.map