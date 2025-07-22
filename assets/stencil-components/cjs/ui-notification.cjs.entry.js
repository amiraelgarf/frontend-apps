'use strict';

var index = require('./index-Qkg_gWF8.js');

const uiNotificationCss = ":host{display:block;position:fixed;max-width:300px;padding:1rem;z-index:1000}:host(.top-right){top:1rem;right:1rem}:host(.top-left){top:1rem;left:1rem}:host(.bottom-right){bottom:1rem;right:1rem}:host(.bottom-left){bottom:1rem;left:1rem}.notification-box{padding:1rem;border-radius:8px;box-shadow:0 2px 6px rgba(0, 0, 0, 0.15)}:host(.success) .notification-box{background-color:#28a745;color:white}:host(.error) .notification-box{background-color:#dc3545;color:white}:host(.info) .notification-box{background-color:#17a2b8;color:white}:host(.warning) .notification-box{background-color:#ffc107;color:black}.header{font-weight:bold;margin-bottom:0.5rem}.content{font-size:0.95rem}";

const UiNotification = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    type = 'info';
    placement = 'top-right';
    header = '';
    content = '';
    render() {
        return (index.h(index.Host, { key: '369c6801a96c9ab056facb9a63c2a4e9abf5a569', class: `notification ${this.placement} ${this.type}` }, index.h("div", { key: '646f5a197bff3b76f6f639b51f85cadf03840077', class: "notification-box" }, this.header && index.h("div", { key: '4042e438eefcdbba106b21f800345dfa8010ef75', class: "header" }, this.header), index.h("div", { key: 'f18f5422495ab1d530105f9778f31f6c859b6d6b', class: "content" }, this.content))));
    }
};
UiNotification.style = uiNotificationCss;

exports.ui_notification = UiNotification;
//# sourceMappingURL=ui-notification.entry.cjs.js.map

//# sourceMappingURL=ui-notification.cjs.entry.js.map