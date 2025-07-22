'use strict';

var index = require('./index-Qkg_gWF8.js');
var apexcharts_esm = require('./apexcharts.esm-uDPgkDG6.js');

const lineChartCss = ":host{display:block;width:100%;max-width:600px;margin:auto}#chart{width:100%;height:100%}#chart{border:1px solid #e0e0e0;border-radius:8px;padding:8px;background-color:white;box-shadow:0 2px 6px rgba(0, 0, 0, 0.05)}";

const LineChart = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
            this.chart = new apexcharts_esm.us(target, options);
            this.chart.render();
        }
    }
    disconnectedCallback() {
        this.chart?.destroy();
    }
    render() {
        return index.h("div", { key: '863d56c7b98188d5957c888129fe11b1539020e6', id: "chart" });
    }
};
LineChart.style = lineChartCss;

exports.line_chart = LineChart;
//# sourceMappingURL=line-chart.entry.cjs.js.map

//# sourceMappingURL=line-chart.cjs.entry.js.map