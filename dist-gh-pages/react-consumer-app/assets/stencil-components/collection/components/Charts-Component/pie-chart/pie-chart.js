import { h } from "@stencil/core";
import * as d3 from "d3";
export class PieChart {
    el;
    data = [];
    componentDidLoad() {
        this.drawChart();
    }
    drawChart() {
        const svgEl = this.el.shadowRoot?.querySelector('#pie-chart');
        if (!svgEl || !this.data.length)
            return;
        const width = 300;
        const height = 300;
        const radius = Math.min(width, height) / 2;
        d3.select(svgEl).selectAll('*').remove();
        const svg = d3
            .select(svgEl)
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);
        const color = d3.scaleOrdinal(d3.schemeTableau10);
        const pie = d3.pie().value((d) => d.value);
        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);
        let tooltip = this.el.shadowRoot?.querySelector('.tooltip');
        if (!tooltip && this.el.shadowRoot) {
            tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            this.el.shadowRoot.appendChild(tooltip);
        }
        const arcs = svg.selectAll('arc').data(pie(this.data)).enter().append('g');
        arcs
            .append('path')
            .attr('d', arc)
            .attr('fill', (_, i) => color(i.toString()))
            .on('mouseover', (_, d) => {
            if (tooltip) {
                tooltip.textContent = `${d.data.label}: ${d.data.value}`;
                tooltip.style.opacity = '1';
            }
        })
            .on('mousemove', (event) => {
            if (tooltip) {
                tooltip.style.left = `${event.offsetX + 10}px`;
                tooltip.style.top = `${event.offsetY + 10}px`;
            }
        })
            .on('mouseout', () => {
            if (tooltip) {
                tooltip.style.opacity = '0';
            }
        });
        arcs
            .append('text')
            .attr('transform', (d) => `translate(${arc.centroid(d)})`)
            .attr('text-anchor', 'middle')
            .attr('font-size', '12px')
            .attr('fill', 'white')
            .text((d) => d.data.label);
    }
    render() {
        return (h(h.Fragment, null, h("svg", { key: 'e0a2b5fbe24f8ae8ffc3b8ba3f5f011b5e59e8ce', id: "pie-chart" }), h("div", { key: '08db5340cd00703375cda5c7aa1daf254fc0fdcc', class: "tooltip", style: { position: 'absolute' } })));
    }
    static get is() { return "pie-chart"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["pie-chart.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["pie-chart.css"]
        };
    }
    static get properties() {
        return {
            "data": {
                "type": "unknown",
                "attribute": "data",
                "mutable": false,
                "complexType": {
                    "original": "{ label: string; value: number }[]",
                    "resolved": "{ label: string; value: number; }[]",
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
                "defaultValue": "[]"
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=pie-chart.js.map
