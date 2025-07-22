import { h } from "@stencil/core";
import * as d3 from "d3";
export class D3BarChart {
    hostElement;
    chartData = [];
    width = 0;
    height = 0;
    currentWidth = 0;
    currentHeight = 0;
    svg;
    chartContainer;
    onDataChange() {
        this.drawChart();
    }
    componentDidLoad() {
        this.svg = d3.select(this.hostElement.shadowRoot.querySelector('svg'));
        this.chartContainer = this.hostElement.shadowRoot.querySelector('.chart-container');
        this.updateDimensions();
        this.drawChart();
        window.addEventListener('resize', this.handleResize);
    }
    componentDidUpdate() {
        this.updateDimensions();
        this.drawChart();
    }
    disconnectedCallback() {
        window.removeEventListener('resize', this.handleResize);
    }
    handleResize = () => {
        this.updateDimensions();
        this.drawChart();
    };
    updateDimensions = () => {
        if (this.width > 0 && this.height > 0) {
            this.currentWidth = this.width;
            this.currentHeight = this.height;
        }
        else if (this.chartContainer) {
            this.currentWidth = this.chartContainer.clientWidth || 400;
            this.currentHeight = 400;
        }
        else {
            this.currentWidth = 400;
            this.currentHeight = 400;
        }
    };
    drawChart = () => {
        if (!this.svg || !this.chartData || this.chartData.length === 0 || this.currentWidth === 0 || this.currentHeight === 0) {
            if (this.svg)
                this.svg.selectAll('*').remove();
            return;
        }
        const margin = { top: 20, right: 30, bottom: 40, left: 40 };
        const innerWidth = this.currentWidth - margin.left - margin.right;
        const innerHeight = this.currentHeight - margin.top - margin.bottom;
        this.svg.selectAll('*').remove();
        this.svg
            .attr('width', this.currentWidth)
            .attr('height', this.currentHeight);
        const g = this.svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);
        const xScale = d3.scaleBand()
            .domain(this.chartData.map(d => d.name))
            .range([0, innerWidth])
            .padding(0.1);
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(this.chartData, d => d.value) || 0])
            .range([innerHeight, 0]);
        g.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${innerHeight})`)
            .call(d3.axisBottom(xScale))
            .selectAll('text')
            .attr('class', 'text-sm fill-gray-700');
        g.append('g')
            .attr('class', 'y-axis')
            .call(d3.axisLeft(yScale))
            .selectAll('text')
            .attr('class', 'text-sm fill-gray-700');
        g.selectAll('.bar')
            .data(this.chartData)
            .enter()
            .append('rect')
            .attr('class', 'bar fill-blue-500 hover:fill-blue-600 transition-colors duration-200')
            .attr('x', d => xScale(d.name))
            .attr('y', d => yScale(d.value))
            .attr('width', xScale.bandwidth())
            .attr('height', d => innerHeight - yScale(d.value));
        g.selectAll('.bar-label')
            .data(this.chartData)
            .enter()
            .append('text')
            .attr('class', 'bar-label text-xs fill-white font-semibold pointer-events-none')
            .attr('x', d => xScale(d.name) + xScale.bandwidth() / 2)
            .attr('y', d => yScale(d.value) + 15)
            .attr('text-anchor', 'middle')
            .text(d => d.value);
    };
    render() {
        return (h("div", { key: '7479f4035fdd8ab4a1b1469db98c6b4e3b69411b', class: "chart-container" }, h("svg", { key: '7293508145235de53bb2f2310882796c698b3f4e' })));
    }
    static get is() { return "d3-bar-chart"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["d3-bar-chart.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["d3-bar-chart.css"]
        };
    }
    static get properties() {
        return {
            "chartData": {
                "type": "unknown",
                "attribute": "chart-data",
                "mutable": false,
                "complexType": {
                    "original": "ChartData[]",
                    "resolved": "ChartData[]",
                    "references": {
                        "ChartData": {
                            "location": "global",
                            "id": "global::ChartData"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "width": {
                "type": "number",
                "attribute": "width",
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
                "defaultValue": "0"
            },
            "height": {
                "type": "number",
                "attribute": "height",
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
                "defaultValue": "0"
            }
        };
    }
    static get states() {
        return {
            "currentWidth": {},
            "currentHeight": {}
        };
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "chartData",
                "methodName": "onDataChange"
            }];
    }
}
//# sourceMappingURL=d3-bar-chart.js.map
