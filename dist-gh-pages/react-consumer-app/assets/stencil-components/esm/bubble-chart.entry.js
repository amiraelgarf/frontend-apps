import { g as getElement, r as registerInstance, h } from './index-crweC_lX.js';
import { u as us } from './apexcharts.esm-DWm2rkNx.js';

const bubbleChartCss = "";

const DEFAULT_BUBBLE_DATA = [
    { "country": "China", "population": 1416000000, "world_land_area_percentage": 6.30 },
    { "country": "India", "population": 1464000000, "world_land_area_percentage": 2.00 },
    { "country": "United States", "population": 347300000, "world_land_area_percentage": 6.14 },
    { "country": "Indonesia", "population": 285700000, "world_land_area_percentage": 1.22 },
    { "country": "Pakistan", "population": 255200000, "world_land_area_percentage": 0.52 },
    { "country": "Nigeria", "population": 237500000, "world_land_area_percentage": 0.61 },
    { "country": "Brazil", "population": 212800000, "world_land_area_percentage": 5.61 },
    { "country": "Bangladesh", "population": 175700000, "world_land_area_percentage": 0.10 },
    { "country": "Russia", "population": 144000000, "world_land_area_percentage": 11.00 },
    { "country": "Mexico", "population": 131900000, "world_land_area_percentage": 1.31 },
    { "country": "Japan", "population": 123100000, "world_land_area_percentage": 0.24 },
    { "country": "Ethiopia", "population": 135500000, "world_land_area_percentage": 0.67 },
    { "country": "Philippines", "population": 116800000, "world_land_area_percentage": 0.20 },
    { "country": "Egypt", "population": 118400000, "world_land_area_percentage": 0.67 },
    { "country": "DR Congo", "population": 112800000, "world_land_area_percentage": 1.52 },
    { "country": "Germany", "population": 84100000, "world_land_area_percentage": 0.23 },
    { "country": "United Kingdom", "population": 69600000, "world_land_area_percentage": 0.16 },
    { "country": "France", "population": 66700000, "world_land_area_percentage": 0.37 },
    { "country": "Canada", "population": 40100000, "world_land_area_percentage": 6.11 },
    { "country": "Australia", "population": 27000000, "world_land_area_percentage": 5.16 },
    { "country": "South Africa", "population": 60400000, "world_land_area_percentage": 0.81 },
    { "country": "Italy", "population": 58900000, "world_land_area_percentage": 0.20 },
    { "country": "Myanmar", "population": 54200000, "world_land_area_percentage": 0.45 },
    { "country": "Kenya", "population": 55100000, "world_land_area_percentage": 0.39 },
    { "country": "Colombia", "population": 52300000, "world_land_area_percentage": 0.75 },
    { "country": "Spain", "population": 47600000, "world_land_area_percentage": 0.34 },
    { "country": "Argentina", "population": 46000000, "world_land_area_percentage": 1.86 },
    { "country": "Algeria", "population": 44700000, "world_land_area_percentage": 1.56 },
    { "country": "Poland", "population": 37600000, "world_land_area_percentage": 0.21 },
    { "country": "Uzbekistan", "population": 35400000, "world_land_area_percentage": 0.29 },
    { "country": "Saudi Arabia", "population": 36900000, "world_land_area_percentage": 1.44 },
    { "country": "Ukraine", "population": 36700000, "world_land_area_percentage": 0.40 },
    { "country": "Morocco", "population": 37900000, "world_land_area_percentage": 0.30 },
    { "country": "Peru", "population": 34000000, "world_land_area_percentage": 0.85 },
    { "country": "Angola", "population": 36100000, "world_land_area_percentage": 0.85 },
    { "country": "Malaysia", "population": 33900000, "world_land_area_percentage": 0.22 },
    { "country": "Venezuela", "population": 29300000, "world_land_area_percentage": 0.67 },
    { "country": "Ghana", "population": 34000000, "world_land_area_percentage": 0.15 },
    { "country": "Afghanistan", "population": 41100000, "world_land_area_percentage": 0.44 },
    { "country": "Nepal", "population": 30600000, "world_land_area_percentage": 0.10 },
    { "country": "Yemen", "population": 33700000, "world_land_area_percentage": 0.35 }
];
const BubbleChart = class {
    get el() { return getElement(this); }
    myHeight = 350;
    myTitle = 'Country Population vs. Land Area Percentage';
    xTitle = 'Country (Hover for Name)';
    yTitle = 'Population';
    myWidth = 100;
    charWidth;
    bubbleData = DEFAULT_BUBBLE_DATA;
    seriesData;
    countyName;
    apexChartInstance;
    originalXMin = 0;
    originalXMax = 0;
    originalYMin = 0;
    originalYMax = 0;
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ProcessBubbleData(this.bubbleData || DEFAULT_BUBBLE_DATA);
        this.charWidth = `${this.myWidth}%`;
    }
    ProcessBubbleData(TheData) {
        this.seriesData = [{
                name: 'Population vs. Land Area Percentage',
                data: TheData.map((items, index) => [
                    index,
                    items.population,
                    items.world_land_area_percentage
                ]),
            }];
        this.countyName = TheData.map(item => item.country);
        this.originalXMin = -0.5;
        this.originalXMax = this.countyName.length - 0.5;
        const yValues = TheData.map(d => d.population);
        this.originalYMin = Math.min(...yValues) * 0.9;
        this.originalYMax = Math.max(...yValues) * 1.1;
    }
    bubbleDataChanged(newValue) {
        this.ProcessBubbleData(newValue || DEFAULT_BUBBLE_DATA);
        this.drawOrUpdateChart();
    }
    propertiesChanged() {
        this.drawOrUpdateChart();
    }
    GetOption() {
        const formattedYLabel = this.countyName;
        return {
            series: this.seriesData,
            chart: {
                width: this.charWidth,
                height: this.myHeight,
                type: 'bubble',
                events: {
                    dataPointSelection: (event, chartContext, config) => {
                        const seriesIndex = config.seriesIndex;
                        const dataPointIndex = config.dataPointIndex;
                        if (seriesIndex !== -1 && dataPointIndex !== -1) {
                            const dataPoint = this.seriesData[seriesIndex].data[dataPointIndex];
                            const x = dataPoint[0];
                            const y = dataPoint[1];
                            const zoomXPad = 0.5;
                            const zoomYPad = y * 0.2;
                            this.apexChartInstance.updateOptions({
                                xaxis: { min: x - zoomXPad, max: x + zoomXPad, tickAmount: 1 },
                                yaxis: { min: y - zoomYPad, max: y + zoomYPad, tickAmount: 2 },
                            }, true, true);
                        }
                    },
                    beforeResetZoom: () => {
                        this.apexChartInstance.updateOptions({
                            xaxis: { min: this.originalXMin, max: this.originalXMax, tickAmount: undefined },
                            yaxis: { min: this.originalYMin, max: this.originalYMax, tickAmount: undefined },
                        }, true, true);
                    }
                },
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                opacity: 0.8
            },
            title: {
                text: this.myTitle
            },
            xaxis: {
                type: 'numeric',
                title: {
                    text: this.xTitle,
                },
                labels: {
                    formatter: (value) => {
                        const index = parseInt(value, 10);
                        return formattedYLabel[index] || 'NoCountry';
                    },
                    rotate: -45,
                    hideOverlappingLabels: true,
                },
            },
            yaxis: {
                title: {
                    text: this.yTitle
                },
                labels: {
                    formatter: function (value) {
                        if (value >= 1_000_000_000)
                            return (value / 1_000_000_000).toFixed(1) + 'B';
                        if (value >= 1_000_000)
                            return (value / 1_000_000).toFixed(0) + 'M';
                        return value.toString();
                    }
                },
            },
        };
    }
    myWidthChanged(newValue) {
        if (newValue < 0 || newValue > 100) {
            window.alert('Width must be between 0 and 100');
            return;
        }
        this.charWidth = `${newValue}%`;
        this.drawOrUpdateChart();
    }
    drawOrUpdateChart() {
        const chartContainer = this.el.shadowRoot?.querySelector("#chartBubble");
        if (!chartContainer) {
            window.alert("Chart container not found");
            return;
        }
        const newOptions = this.GetOption();
        if (!this.apexChartInstance) {
            this.apexChartInstance = new us(chartContainer, newOptions);
            this.apexChartInstance.render();
        }
        else {
            this.apexChartInstance.updateOptions(newOptions, false, false);
        }
    }
    componentDidLoad() {
        this.drawOrUpdateChart();
    }
    disconnectedCallback() {
        if (this.apexChartInstance) {
            this.apexChartInstance.destroy();
        }
    }
    render() {
        return (h("div", { key: '6732567bd4e33290853b3dff8e7764b16cca6334', id: "chartBubble" }));
    }
    static get watchers() { return {
        "bubbleData": ["bubbleDataChanged"],
        "myHeight": ["propertiesChanged"],
        "myTitle": ["propertiesChanged"],
        "xTitle": ["propertiesChanged"],
        "yTitle": ["propertiesChanged"],
        "myWidth": ["myWidthChanged"]
    }; }
};
BubbleChart.style = bubbleChartCss;

export { BubbleChart as bubble_chart };
//# sourceMappingURL=bubble-chart.entry.js.map

//# sourceMappingURL=bubble-chart.entry.js.map