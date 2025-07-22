import { p as proxyCustomElement, H, c as createEvent, h } from './index.js';

const myButtonCss = ":host{display:inline-block}.my-button{font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\r\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\r\n    sans-serif;border:none;border-radius:6px;cursor:pointer;font-weight:500;line-height:1;transition:all 0.2s ease-in-out;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;user-select:none;outline:none}.my-button:focus-visible{outline:2px solid #005F87;outline-offset:2px}.my-button--small{padding:8px 12px;font-size:14px;min-height:32px}.my-button--medium{padding:12px 16px;font-size:16px;min-height:40px}.my-button--large{padding:16px 24px;font-size:18px;min-height:48px}.my-button--primary{background-color:#005F87;color:white}.my-button--primary:hover:not(.my-button--disabled){background-color:#DAECF0}.my-button--primary:active:not(.my-button--disabled){background-color:#005F87}.my-button--secondary{background-color:#6c757d;color:white}.my-button--secondary:hover:not(.my-button--disabled){background-color:#5a6268}.my-button--secondary:active:not(.my-button--disabled){background-color:#495057}.my-button--outline{background-color:transparent;color:#005F87;border:2px solid #005F87}.my-button--outline:hover:not(.my-button--disabled){background-color:#005F87;color:white}.my-button--outline:active:not(.my-button--disabled){background-color:#0052a3;border-color:#0052a3}.my-button--disabled{opacity:0.6;cursor:not-allowed}.my-button--disabled:hover,.my-button--disabled:active{transform:none}";

const MyButton$1 = proxyCustomElement(class MyButton extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.myClick = createEvent(this, "myClick");
    }
    label;
    variant = 'primary';
    size = 'medium';
    disabled = false;
    myClick;
    handleClick = () => {
        if (!this.disabled) {
            this.myClick?.emit();
        }
    };
    render() {
        const classes = {
            'my-button': true,
            [`my-button--${this.variant}`]: true,
            [`my-button--${this.size}`]: true,
            'my-button--disabled': this.disabled,
        };
        return (h("button", { key: 'd983e232e8f57aac23c2fc237ebb93cbb7ca374c', class: classes, disabled: this.disabled, onClick: this.handleClick, type: "button" }, this.label));
    }
    static get style() { return myButtonCss; }
}, [1, "my-button", {
        "label": [1],
        "variant": [1],
        "size": [1],
        "disabled": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-button"];
    components.forEach(tagName => { switch (tagName) {
        case "my-button":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MyButton$1);
            }
            break;
    } });
}
defineCustomElement$1();

const MyButton = MyButton$1;
const defineCustomElement = defineCustomElement$1;

export { MyButton, defineCustomElement };
//# sourceMappingURL=my-button.js.map

//# sourceMappingURL=my-button.js.map