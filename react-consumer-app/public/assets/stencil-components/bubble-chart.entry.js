import { g as getElement, r as registerInstance, h } from './index-DKeYANm1.js';
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
    //For the zoom effect
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
        // Calculate and store original axis ranges
        this.originalXMin = -0.5; // Small padding
        this.originalXMax = this.countyName.length - 0.5; // Small padding
        const yValues = TheData.map(d => d.population);
        this.originalYMin = Math.min(...yValues) * 0.9; // 90% of min value
        this.originalYMax = Math.max(...yValues) * 1.1; // 110% of max value
    }
    bubbleDataChanged(newValue) {
        this.ProcessBubbleData(newValue || DEFAULT_BUBBLE_DATA);
        this.drawOrUpdateChart();
    }
    propertiesChanged() {
        this.drawOrUpdateChart();
    }
    GetOption() {
        const formattedYLabel = this.countyName; // Store country names in a variable for use in the formatter
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
                            // Calculate new zoom ranges
                            const zoomXPad = 0.5; // Fixed padding for X
                            const zoomYPad = y * 0.2; // Relative padding for Y
                            this.apexChartInstance.updateOptions({
                                xaxis: { min: x - zoomXPad, max: x + zoomXPad, tickAmount: 1 },
                                yaxis: { min: y - zoomYPad, max: y + zoomYPad, tickAmount: 2 },
                            }, true, true); // Update options without re-rendering or animation
                        }
                    },
                    beforeResetZoom: () => {
                        // Reset to original zoom levels
                        this.apexChartInstance.updateOptions({
                            xaxis: { min: this.originalXMin, max: this.originalXMax, tickAmount: undefined },
                            yaxis: { min: this.originalYMin, max: this.originalYMax, tickAmount: undefined },
                        }, true, true);
                    }
                },
            },
            dataLabels: {
                enabled: false // Usually disabled for bubble charts to avoid clutter
            },
            fill: {
                opacity: 0.8
            },
            title: {
                text: this.myTitle
            },
            xaxis: {
                type: 'numeric', // Important: Bubble chart X-axis is numerical
                title: {
                    text: this.xTitle, // Informative title for the X-axis
                },
                labels: {
                    formatter: (value) => {
                        // Use countryNames array to display actual country names on the X-axis
                        const index = parseInt(value, 10); // Convert string to number
                        return formattedYLabel[index] || 'NoCountry'; // Return country name, or empty string if index is out of bounds
                    },
                    rotate: -45, // Rotate labels to prevent overlap
                    hideOverlappingLabels: true, // Hide labels if they overlap
                },
            },
            yaxis: {
                title: {
                    text: this.yTitle
                },
                labels: {
                    formatter: function (value) {
                        // Format population for readability (e.g., in millions/billions)
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
        this.charWidth = `${newValue}%`; // Update the width of the chart
        this.drawOrUpdateChart(); // Redraw the chart with the new width
    }
    drawOrUpdateChart() {
        const chartContainer = this.el.shadowRoot?.querySelector("#chartBubble");
        if (!chartContainer) {
            window.alert("Chart container not found");
            return;
        }
        const newOptions = this.GetOption();
        if (!this.apexChartInstance) // If the chart instance doesn't exist, create a new one
         {
            this.apexChartInstance = new us(chartContainer, newOptions);
            this.apexChartInstance.render();
        }
        else // If the chart instance already exists, update it with new options
         {
            this.apexChartInstance.updateOptions(newOptions, false, false); // Update the chart options without redrawing the chart
        }
    }
    componentDidLoad() {
        this.drawOrUpdateChart();
    }
    disconnectedCallback() {
        if (this.apexChartInstance) {
            this.apexChartInstance.destroy(); // Clean up chart instance to prevent memory leaks
        }
    }
    render() {
        return (h("div", { key: '7c78ce4eced2371064c76b4f4b64fa3fe56417a4', id: "chartBubble" }));
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