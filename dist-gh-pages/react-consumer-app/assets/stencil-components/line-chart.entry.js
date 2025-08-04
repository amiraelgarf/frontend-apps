import { r as registerInstance, g as getElement, h } from './index-DcMv3VsE.js';
import { g as gs } from './apexcharts.esm-CPxMffEF.js';

const lineChartCss = ":host{display:block;width:100%;max-width:600px;margin:auto}#chart{width:100%;height:100%}#chart{border:1px solid #e0e0e0;border-radius:8px;padding:8px;background-color:white;box-shadow:0 2px 6px rgba(0, 0, 0, 0.05)}";

const LineChart = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    categories = ['Jan', 'Feb', 'Mar', 'Apr'];
    series = [
        { name: 'Series 1', data: [10, 20, 15, 30] },
    ];
    chart;
    componentDidLoad() {
        const target = this.el.shadowRoot?.querySelector('#chart');
        if (target) {
            const options = {
                chart: {
                    type: 'line',
                    height: 350,
                },
                xaxis: {
                    categories: this.categories,
                },
                yaxis: {
                    labels: {
                        show: true,
                    },
                },
                series: this.series,
            };
            this.chart = new gs(target, options);
            this.chart.render();
        }
    }
    disconnectedCallback() {
        this.chart?.destroy();
    }
    render() {
        return (h("div", { key: '540712ffd902c23145bbe88258442d69de9e397d' }, h("ix-style-loader", { key: 'fd40bb109731ac5e006feeaccd88698be671b6ed' }), h("div", { key: 'd361fcca32508d17a81c3936354e898f5318ffec', id: "chart" })));
    }
};
LineChart.style = lineChartCss;

export { LineChart as line_chart };
//# sourceMappingURL=line-chart.entry.js.map

//# sourceMappingURL=line-chart.entry.js.map