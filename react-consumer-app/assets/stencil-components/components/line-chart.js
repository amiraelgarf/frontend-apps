import { p as proxyCustomElement, H, h } from './index.js';
import { u as us } from './p-DWm2rkNx.js';

const lineChartCss = ":host{display:block;width:100%;max-width:600px;margin:auto}#chart{width:100%;height:100%}#chart{border:1px solid #e0e0e0;border-radius:8px;padding:8px;background-color:white;box-shadow:0 2px 6px rgba(0, 0, 0, 0.05)}";

const LineChart$1 = proxyCustomElement(class LineChart extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    get el() { return this; }
    chart;
    data = [10, 20, 30, 40, 50];
    categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    componentDidLoad() {
        const options = {
            chart: {
                type: 'line',
                height: 300
            },
            series: [{
                    name: 'Series 1',
                    data: this.data
                }],
            xaxis: {
                categories: this.categories
            },
            yaxis: {
                labels: {
                    show: true
                }
            }
        };
        const target = this.el.shadowRoot?.querySelector('#chart');
        if (target) {
            this.chart = new us(target, options);
            this.chart.render();
        }
    }
    disconnectedCallback() {
        this.chart?.destroy();
    }
    render() {
        return h("div", { key: '863d56c7b98188d5957c888129fe11b1539020e6', id: "chart" });
    }
    static get style() { return lineChartCss; }
}, [1, "line-chart", {
        "data": [16],
        "categories": [16]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["line-chart"];
    components.forEach(tagName => { switch (tagName) {
        case "line-chart":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, LineChart$1);
            }
            break;
    } });
}
defineCustomElement$1();

const LineChart = LineChart$1;
const defineCustomElement = defineCustomElement$1;

export { LineChart, defineCustomElement };
//# sourceMappingURL=line-chart.js.map

//# sourceMappingURL=line-chart.js.map