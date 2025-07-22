import { p as proxyCustomElement, H, h } from './index.js';
import { u as us } from './p-DWm2rkNx.js';

const multiAxisChartCss = ":host {\r\n  display: block;\r\n  font-family: 'Roboto', sans-serif;\r\n  @import url('https://fonts.googleapis.com/css?family=Roboto');\r\n}\r\n\r\n.chart-wrapper {\r\n  max-width: 100%;\r\n  margin: 20px auto;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n  background-color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\n.chart-wrapper > div {\r\n  width: 100%;\r\n  min-height: 300px; \r\n}\r\n";

const MultiAxisChart$1 = proxyCustomElement(class MultiAxisChart extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    get el() { return this; }
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
                this.chart = new us(this.chartContainer, this.buildApexOptions());
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
    static get style() { return multiAxisChartCss; }
}, [1, "multi-axis-chart", {
        "chartTitle": [1, "chart-title"],
        "chartHeight": [2, "chart-height"],
        "categories": [16],
        "series": [16],
        "yAxes": [16, "y-axes"],
        "colors": [16]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["multi-axis-chart"];
    components.forEach(tagName => { switch (tagName) {
        case "multi-axis-chart":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, MultiAxisChart$1);
            }
            break;
    } });
}
defineCustomElement$1();

const MultiAxisChart = MultiAxisChart$1;
const defineCustomElement = defineCustomElement$1;

export { MultiAxisChart, defineCustomElement };
//# sourceMappingURL=multi-axis-chart.js.map

//# sourceMappingURL=multi-axis-chart.js.map