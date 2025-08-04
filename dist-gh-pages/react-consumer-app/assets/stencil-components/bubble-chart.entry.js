import { g as getElement, r as registerInstance, h } from './index-DcMv3VsE.js';
import { g as gs } from './apexcharts.esm-CPxMffEF.js';

const bubbleChartCss = "#chartBubble{width:100%;height:100%;overflow:hidden}:host{display:block;width:100%}@media (max-width: 768px){#chartBubble{height:300px !important}}";

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
    myWidth = '100%';
    charWidth = '100%';
    bubbleData = DEFAULT_BUBBLE_DATA;
    seriesData;
    countyName;
    apexChartInstance;
    originalXMin = 0;
    originalXMax = 0;
    originalYMin = 0;
    originalYMax = 0;
    resizeObserver;
    observeResize() {
        this.resizeObserver = new ResizeObserver(() => {
            this.drawOrUpdateChart();
        });
        const container = this.el.shadowRoot?.querySelector("#chartBubble");
        if (container) {
            this.resizeObserver.observe(container);
        }
    }
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ProcessBubbleData(this.bubbleData || DEFAULT_BUBBLE_DATA);
        this.charWidth = this.myWidth;
    }
    ProcessBubbleData(TheData) {
        this.seriesData = [{
                name: 'Population vs. Land Area Percentage',
                data: TheData.map((items) => ({
                    x: items.country,
                    y: items.population,
                    z: items.world_land_area_percentage,
                })),
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
        this.observeResize();
        this.drawOrUpdateChart();
    }
    GetOption() {
        return {
            series: this.seriesData,
            chart: {
                width: this.charWidth,
                height: this.myHeight,
                type: 'bubble',
            },
            colors: ['#4dabf7'],
            stroke: {
                show: true,
                width: 1,
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                opacity: 0.8
            },
            title: {
                text: this.myTitle,
                style: {
                    color: 'var(--theme-color-std-text)',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }
            },
            xaxis: {
                type: 'category',
                categories: this.countyName,
                labels: {
                    rotate: -90,
                    style: {
                        fontSize: '10px',
                        colors: 'var(--theme-color-std-text)'
                    }
                }
            },
            yaxis: {
                min: this.originalYMin,
                max: this.originalYMax,
                title: {
                    text: this.yTitle,
                    style: {
                        color: 'var(--theme-color-std-text)'
                    }
                },
                labels: {
                    formatter: function (value) {
                        if (value >= 1_000_000_000)
                            return (value / 1_000_000_000).toFixed(1) + 'B';
                        if (value >= 1_000_000)
                            return (value / 1_000_000).toFixed(0) + 'M';
                        return value.toString();
                    },
                    style: {
                        colors: 'var(--theme-chart-ticks)'
                    }
                }
            }
        };
    }
    myWidthChanged(newValue) {
        const percentage = parseFloat(newValue);
        if (newValue.includes('%') && (percentage < 0 || percentage > 100)) {
            window.alert('Width percentage must be between 0% and 100%');
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
            this.apexChartInstance = new gs(chartContainer, newOptions);
            this.apexChartInstance.render();
        }
        else {
            this.apexChartInstance.updateOptions(newOptions, false, false);
        }
    }
    componentDidLoad() {
        this.observeResize();
        this.drawOrUpdateChart();
    }
    disconnectedCallback() {
        if (this.apexChartInstance) {
            this.apexChartInstance.destroy();
        }
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }
    render() {
        const estimatedWidth = this.countyName.length * 30;
        return (h("div", { key: '8705e3034b3db0464296253f2c2025b5ae5bf13c' }, h("ix-style-loader", { key: '719aa6f32b8a4bf5b83c91b04bee8cc2494a8f23' }), h("div", { key: 'dc38c12d6cade1c36fc4dbbb85f92db14f3974c5', style: { overflowX: 'auto', width: '100%' } }, h("div", { key: 'bc1fbf13dd2b653c25a2fee8a25179df0b9d576a', id: "chartBubble", style: { minWidth: `${estimatedWidth}px`, width: this.charWidth } }))));
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