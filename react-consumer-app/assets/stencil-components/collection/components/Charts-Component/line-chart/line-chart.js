import { h } from "@stencil/core";
import ApexCharts from "apexcharts";
export class LineChart {
    el;
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
            this.chart = new ApexCharts(target, options);
            this.chart.render();
        }
    }
    disconnectedCallback() {
        this.chart?.destroy();
    }
    render() {
        return h("div", { key: '863d56c7b98188d5957c888129fe11b1539020e6', id: "chart" });
    }
    static get is() { return "line-chart"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["line-chart.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["line-chart.css"]
        };
    }
    static get properties() {
        return {
            "data": {
                "type": "unknown",
                "attribute": "data",
                "mutable": false,
                "complexType": {
                    "original": "number[]",
                    "resolved": "number[]",
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
                "defaultValue": "[10, 20, 30, 40, 50]"
            },
            "categories": {
                "type": "unknown",
                "attribute": "categories",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
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
                "defaultValue": "['Jan', 'Feb', 'Mar', 'Apr', 'May']"
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=line-chart.js.map
