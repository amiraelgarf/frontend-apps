import { r as registerInstance, g as getElement, h } from './index-crweC_lX.js';
import { u as us } from './apexcharts.esm-DWm2rkNx.js';

const lineChartCss = ":host{display:block;width:100%;max-width:600px;margin:auto}#chart{width:100%;height:100%}#chart{border:1px solid #e0e0e0;border-radius:8px;padding:8px;background-color:white;box-shadow:0 2px 6px rgba(0, 0, 0, 0.05)}";

const LineChart = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
        return h("div", { key: '06d4012f81b9725347e7a2843d15d35683e64b35', id: "chart" });
    }
};
LineChart.style = lineChartCss;

export { LineChart as line_chart };
//# sourceMappingURL=line-chart.entry.js.map

//# sourceMappingURL=line-chart.entry.js.map