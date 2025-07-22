import { p as proxyCustomElement, H, h } from './index.js';
import { u as us } from './p-DWm2rkNx.js';

const heatMapCss = ":host{display:block;width:100%;max-width:600px;margin:auto;font-family:Arial, sans-serif}.chart-container{width:100%;height:100%}";

const HeatmapChart = proxyCustomElement(class HeatmapChart extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    get el() { return this; }
    rows = 7;
    cols = 10;
    generateData(rows, cols) {
        return Array.from({ length: rows }, (_, r) => ({
            name: `Metric ${r + 1}`,
            data: Array.from({ length: cols }, (_, i) => ({
                x: `W${i + 1}`,
                y: Math.floor(Math.random() * 100),
            })),
        }));
    }
    componentDidLoad() {
        const chartEl = this.el.shadowRoot?.querySelector('#heatmap');
        if (!chartEl)
            return;
        const options = {
            chart: {
                type: 'heatmap',
                height: 350,
                toolbar: { show: false },
            },
            dataLabels: { enabled: false },
            colors: ['#008FFB'],
            series: this.generateData(this.rows, this.cols),
            plotOptions: {
                heatmap: {
                    radius: 4,
                    colorScale: {
                        ranges: [
                            { from: 0, to: 25, color: '#00A100', name: 'Low' },
                            { from: 26, to: 50, color: '#128FD9', name: 'Medium' },
                            { from: 51, to: 75, color: '#FFB200', name: 'High' },
                            { from: 76, to: 100, color: '#FF0000', name: 'Extreme' },
                        ],
                    },
                },
            },
            title: {
                text: 'Heatmap Chart',
            },
        };
        const chart = new us(chartEl, options);
        chart.render();
    }
    render() {
        return h("div", { key: '60328514aa320c0e42ff557a410e701d7ef9de6c', id: "heatmap", class: "chart-container" });
    }
    static get style() { return heatMapCss; }
}, [1, "heat-map", {
        "rows": [2],
        "cols": [2]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["heat-map"];
    components.forEach(tagName => { switch (tagName) {
        case "heat-map":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, HeatmapChart);
            }
            break;
    } });
}
defineCustomElement$1();

const HeatMap = HeatmapChart;
const defineCustomElement = defineCustomElement$1;

export { HeatMap, defineCustomElement };
//# sourceMappingURL=heat-map.js.map

//# sourceMappingURL=heat-map.js.map