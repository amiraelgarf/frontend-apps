import { r as registerInstance, h, H as Host } from './index-DcMv3VsE.js';

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
        return (h(h.Fragment, null, h("ix-style-loader", { key: '56f5400271e753c21347281ccd05f2d9a48e1f2a' }), h(Host, { key: '7656255cf4a2f717983dd8af5368c3ec8c22d4b9', class: `notification ${this.placement} ${this.type}` }, h("div", { key: '550d40d6e439bcc1942f8b5adf2a395f88e1fa43', class: "notification-box" }, this.header && h("div", { key: '6dee9fe09ad4558019c26dbf6f361aef13549671', class: "header" }, this.header), h("div", { key: 'b5f531ca6488c5bb9291f8712589c295b111ac18', class: "content" }, this.content)))));
    }
};
UiNotification.style = uiNotificationCss;

export { UiNotification as ui_notification };
//# sourceMappingURL=ui-notification.entry.js.map

//# sourceMappingURL=ui-notification.entry.js.map