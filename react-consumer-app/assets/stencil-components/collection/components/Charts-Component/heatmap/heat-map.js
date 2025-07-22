import { h } from "@stencil/core";
import ApexCharts from "apexcharts";
export class HeatmapChart {
    el;
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
        const chart = new ApexCharts(chartEl, options);
        chart.render();
    }
    render() {
        return h("div", { key: '60328514aa320c0e42ff557a410e701d7ef9de6c', id: "heatmap", class: "chart-container" });
    }
    static get is() { return "heat-map"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["heat-map.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["heat-map.css"]
        };
    }
    static get properties() {
        return {
            "rows": {
                "type": "number",
                "attribute": "rows",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "7"
            },
            "cols": {
                "type": "number",
                "attribute": "cols",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "10"
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=heat-map.js.map
