'use strict';

var index = require('./index-Qkg_gWF8.js');
var apexcharts_esm = require('./apexcharts.esm-uDPgkDG6.js');

const heatMapCss = ":host{display:block;width:100%;max-width:600px;margin:auto;font-family:Arial, sans-serif}.chart-container{width:100%;height:100%}";

const HeatmapChart = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
        const chart = new apexcharts_esm.us(chartEl, options);
        chart.render();
    }
    render() {
        return index.h("div", { key: '9c34c6a19c766e62ed77f6a99f94308b34fa62e8', id: "heatmap", class: "chart-container" });
    }
};
HeatmapChart.style = heatMapCss;

exports.heat_map = HeatmapChart;
//# sourceMappingURL=heat-map.entry.cjs.js.map

//# sourceMappingURL=heat-map.cjs.entry.js.map