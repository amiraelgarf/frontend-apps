import { h } from "@stencil/core";
import ApexCharts from "apexcharts";
export class MultiAxisChart {
    el;
    chartContainer;
    chart = undefined;
    chartTitle;
    chartHeight = 350;
    categories;
    series;
    yAxes;
    colors;
    componentDidLoad() {
        this.initializeChart();
    }
    componentDidUpdate(newValue, oldValue, propName) {
        const hasChanged = (prop) => {
            if (Array.isArray(newValue[prop]) || typeof newValue[prop] === 'object') {
                return JSON.stringify(newValue[prop]) !== JSON.stringify(oldValue[prop]);
            }
            return newValue[prop] !== oldValue[prop];
        };
        if (this.chart) {
            if ((propName === 'chartTitle' ||
                propName === 'chartHeight' ||
                propName === 'categories' ||
                propName === 'series' ||
                propName === 'yAxes' ||
                propName === 'colors') &&
                hasChanged(propName)) {
                this.updateChart();
            }
        }
        else if (this.chartContainer && this.categories && this.series && this.yAxes) {
            this.initializeChart();
        }
    }
    initializeChart() {
        if (this.chartContainer && this.categories && this.series && this.yAxes) {
            if (!this.chart) {
                this.chart = new ApexCharts(this.chartContainer, this.buildApexOptions());
                this.chart.render();
            }
        }
    }
    updateChart() {
        if (this.chart) {
            this.chart.updateOptions(this.buildApexOptions());
        }
        else {
            this.initializeChart();
        }
    }
    buildApexOptions() {
        const yaxisConfig = this.yAxes.map(yAxis => ({
            seriesName: yAxis.seriesName,
            axisTicks: { show: true },
            axisBorder: { show: true },
            title: { text: yAxis.title },
            opposite: yAxis.opposite || false,
        }));
        this.series.forEach(s => {
            if ((s.type === 'column' || s.type === 'bar') && !yaxisConfig.some(ya => ya.seriesName === s.name)) {
                yaxisConfig.push({
                    seriesName: s.name,
                    show: false
                });
            }
        });
        return {
            chart: {
                height: this.chartHeight,
                type: 'line',
                stacked: false,
                toolbar: {
                    show: false
                }
            },
            title: this.chartTitle ? {
                text: this.chartTitle,
                align: 'center',
                style: {
                    fontSize: '20px',
                    fontFamily: 'Roboto, sans-serif',
                    color: '#333'
                }
            } : undefined,
            dataLabels: {
                enabled: false
            },
            colors: this.colors,
            series: this.series,
            stroke: {
                width: this.series.map(s => (s.type === 'line' || s.type === 'area') ? 4 : 0),
            },
            plotOptions: {
                bar: {
                    columnWidth: "20%"
                }
            },
            xaxis: {
                categories: this.categories,
            },
            yaxis: yaxisConfig,
            tooltip: {
                shared: false,
                intersect: true,
                x: { show: false }
            },
            legend: {
                horizontalAlign: "left",
                offsetX: 40
            }
        };
    }
    disconnectedCallback() {
        if (this.chart) {
            this.chart.destroy();
        }
    }
    render() {
        return (h("div", { key: 'ae667fa43ee42e16b1d05a351dd3e5cdbe747078', class: "chart-wrapper" }, h("div", { key: '6cb9f525259d9421bae28aefaebfaa332b7fe312', ref: (el) => (this.chartContainer = el) })));
    }
    static get is() { return "multi-axis-chart"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["multi-axis-chart.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["multi-axis-chart.css"]
        };
    }
    static get properties() {
        return {
            "chartTitle": {
                "type": "string",
                "attribute": "chart-title",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "chartHeight": {
                "type": "number",
                "attribute": "chart-height",
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
                "defaultValue": "350"
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
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "series": {
                "type": "unknown",
                "attribute": "series",
                "mutable": false,
                "complexType": {
                    "original": "ChartSeries[]",
                    "resolved": "ChartSeries[]",
                    "references": {
                        "ChartSeries": {
                            "location": "local",
                            "path": "F:/Siemens/copy/custom-frontend-library/src/components/Charts-Component/multi-axis-chart/multi-axis-chart.tsx",
                            "id": "src/components/Charts-Component/multi-axis-chart/multi-axis-chart.tsx::ChartSeries"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "yAxes": {
                "type": "unknown",
                "attribute": "y-axes",
                "mutable": false,
                "complexType": {
                    "original": "ChartYAxis[]",
                    "resolved": "ChartYAxis[]",
                    "references": {
                        "ChartYAxis": {
                            "location": "local",
                            "path": "F:/Siemens/copy/custom-frontend-library/src/components/Charts-Component/multi-axis-chart/multi-axis-chart.tsx",
                            "id": "src/components/Charts-Component/multi-axis-chart/multi-axis-chart.tsx::ChartYAxis"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "colors": {
                "type": "unknown",
                "attribute": "colors",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[] | undefined",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=multi-axis-chart.js.map
