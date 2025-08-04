import { r as registerInstance, g as getElement, h } from './index-DcMv3VsE.js';
import { g as gs } from './apexcharts.esm-CPxMffEF.js';

const heatMapCss = ":host{display:block;width:100%;max-width:600px;margin:auto;font-family:Arial, sans-serif}.chart-container{width:100%;height:100%}";

const HeatmapChart = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
        const chart = new gs(chartEl, options);
        chart.render();
    }
    render() {
        return (h("div", { key: '7e3be09a606159245de972b8d85afa9deb7c3922' }, h("ix-style-loader", { key: '9906e0dbf05916835f306ed71d370e02f66baf66' }), h("div", { key: '2d77d0b9d32e15df6c3ef68a21c6d2ca53f9efbb', id: "heatmap", class: "chart-container" })));
    }
};
HeatmapChart.style = heatMapCss;

export { HeatmapChart as heat_map };
//# sourceMappingURL=heat-map.entry.js.map

//# sourceMappingURL=heat-map.entry.js.map