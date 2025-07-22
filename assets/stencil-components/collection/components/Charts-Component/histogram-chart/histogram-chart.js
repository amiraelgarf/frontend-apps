import { h } from "@stencil/core";
import * as d3 from "d3";
const studentGrades = [
    { name: "Student 1", semester1: 78, semester2: 82 },
    { name: "Student 2", semester1: 85, semester2: 88 },
    { name: "Student 3", semester1: 92, semester2: 95 },
    { name: "Student 4", semester1: 64, semester2: 70 },
    { name: "Student 5", semester1: 71, semester2: 75 },
    { name: "Student 6", semester1: 88, semester2: 91 },
    { name: "Student 7", semester1: 53, semester2: 62 },
    { name: "Student 8", semester1: 79, semester2: 83 },
    { name: "Student 9", semester1: 95, semester2: 97 },
    { name: "Student 10", semester1: 68, semester2: 73 },
    { name: "Student 11", semester1: 82, semester2: 85 },
    { name: "Student 12", semester1: 76, semester2: 80 },
    { name: "Student 13", semester1: 89, semester2: 92 },
    { name: "Student 14", semester1: 61, semester2: 68 },
    { name: "Student 15", semester1: 73, semester2: 77 },
    { name: "Student 16", semester1: 84, semester2: 87 },
    { name: "Student 17", semester1: 57, semester2: 65 },
    { name: "Student 18", semester1: 91, semester2: 94 },
    { name: "Student 19", semester1: 67, semester2: 72 },
    { name: "Student 20", semester1: 80, semester2: 84 },
    { name: "Student 21", semester1: 74, semester2: 79 },
    { name: "Student 22", semester1: 83, semester2: 86 },
    { name: "Student 23", semester1: 69, semester2: 74 },
    { name: "Student 24", semester1: 90, semester2: 93 },
    { name: "Student 25", semester1: 58, semester2: 66 },
    { name: "Student 26", semester1: 77, semester2: 81 },
    { name: "Student 27", semester1: 86, semester2: 89 },
    { name: "Student 28", semester1: 63, semester2: 69 },
    { name: "Student 29", semester1: 94, semester2: 96 },
    { name: "Student 30", semester1: 72, semester2: 76 },
];
export class HistogramChart {
    el;
    myWidth = 800;
    myHight = 500;
    nameOfChart = "Grade in 1st Semester vs 2nd Semester";
    binCount = 10;
    data = [];
    activeSemester = null;
    infoTextSelection = null;
    renderHistogram() {
        const margin = { top: 70, right: 40, bottom: 60, left: 175 };
        const width = this.myWidth - margin.left - margin.right;
        const height = this.myHight - margin.top - margin.bottom;
        const container = this.el.shadowRoot?.querySelector('.histogramChart');
        if (container) {
            container.innerHTML = '';
        }
        const svg = d3.select(this.el.shadowRoot?.querySelector('.histogramChart'))
            .append('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append('g')
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        svg.append("text")
            .attr("class", "chart-title")
            .attr("x", width / 2)
            .attr("y", -20)
            .style("text-anchor", "middle")
            .style("font-size", "20px")
            .text(this.nameOfChart);
        const allGrade = [...this.data.map(d => d.semester1), ...this.data.map(d => d.semester2)]
            .filter((grade) => grade !== undefined && grade !== null);
        const x = d3.scaleLinear()
            .domain([0, d3.max(allGrade) || 0])
            .range([0, width])
            .nice();
        const bins = d3.histogram()
            .value(d => d)
            .domain(x.domain())
            .thresholds(x.ticks(this.binCount));
        const semester1Bins = bins(this.data.map(d => d.semester1));
        const semester2Bins = bins(this.data.map(d => d.semester2));
        const y = d3.scaleLinear()
            .domain([0, d3.max([...semester1Bins, ...semester2Bins], d => d.length) || 0])
            .range([height, 0])
            .nice();
        const color = d3.scaleOrdinal()
            .domain(["semester1", "semester2"])
            .range(["#1f77b4", "#ff7f0e"]);
        svg.selectAll(".semester1")
            .data(semester1Bins)
            .enter().append("rect")
            .attr("class", "bar-s1")
            .attr("x", d => x(d.x0 ?? 0) + 1)
            .attr("y", d => y(d.length ?? 0))
            .attr("width", d => {
            const x0 = d.x0 ?? 0;
            const x1 = d.x1 ?? x0 + 1;
            return Math.max(0, x(x1) - x(x0) - 1);
        })
            .attr("height", d => height - y(d.length ?? 0))
            .attr("fill", () => color("semester1"))
            .attr("rx", 5)
            .attr("ry", 5)
            .attr("opacity", 0.7);
        svg.selectAll(".semester2")
            .data(semester2Bins)
            .enter().append("rect")
            .attr("class", "bar-s2")
            .attr("x", d => x(d.x0 ?? 0) + 1)
            .attr("y", d => y(d.length ?? 0))
            .attr("width", d => {
            const x0 = d.x0 ?? 0;
            const x1 = d.x1 ?? x0 + 1;
            return Math.max(0, x(x1) - x(x0) - 1);
        })
            .attr("height", d => height - y(d.length ?? 0))
            .attr("fill", () => color("semester2"))
            .attr("rx", 5)
            .attr("ry", 5)
            .attr("opacity", 0.7);
        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x))
            .append("text")
            .attr("x", width / 2)
            .attr("y", 35)
            .attr("fill", "#000")
            .text("Grade Ranges");
        svg.append("g")
            .call(d3.axisLeft(y))
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", -40)
            .attr("x", -height / 2)
            .attr("fill", "#000")
            .text("Number of Students");
        const legend = svg.append("g")
            .attr("transform", `translate(${width - 100}, 20)`);
        legend.append("rect")
            .attr("x", 0)
            .attr("width", 18)
            .attr("height", 18)
            .attr("fill", color("semester1"))
            .attr("opacity", 0.6);
        legend.append("text")
            .attr("x", 25)
            .attr("y", 9)
            .attr("dy", "0.35em")
            .text("Semester 1");
        legend.append("rect")
            .attr("x", 0)
            .attr("y", 25)
            .attr("width", 18)
            .attr("height", 18)
            .attr("fill", color("semester2"))
            .attr("opacity", 0.6);
        legend.append("text")
            .attr("x", 25)
            .attr("y", 34)
            .attr("dy", "0.35em")
            .text("Semester 2");
    }
    OnPropChange() {
        this.renderHistogram();
    }
    componentDidLoad() {
        this.renderHistogram();
    }
    componentDidUpdate() {
        this.renderHistogram();
    }
    render() {
        return (h("div", { key: 'cc839c4bb2873fae2b2da47a9afe8e753348781c', class: "histogramChart" }));
    }
    static get is() { return "histogram-chart"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["histogram-chart.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["histogram-chart.css"]
        };
    }
    static get properties() {
        return {
            "myWidth": {
                "type": "number",
                "attribute": "my-width",
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
                "defaultValue": "800"
            },
            "myHight": {
                "type": "number",
                "attribute": "my-hight",
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
                "defaultValue": "500"
            },
            "nameOfChart": {
                "type": "string",
                "attribute": "name-of-chart",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "defaultValue": "\"Grade in 1st Semester vs 2nd Semester\""
            },
            "binCount": {
                "type": "number",
                "attribute": "bin-count",
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
            },
            "data": {
                "type": "unknown",
                "attribute": "data",
                "mutable": false,
                "complexType": {
                    "original": "GradeType[]",
                    "resolved": "GradeType[]",
                    "references": {
                        "GradeType": {
                            "location": "global",
                            "id": "global::GradeType"
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
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "myWidth",
                "methodName": "OnPropChange"
            }, {
                "propName": "myHeight",
                "methodName": "OnPropChange"
            }, {
                "propName": "nameOfChart",
                "methodName": "OnPropChange"
            }, {
                "propName": "binCount",
                "methodName": "OnPropChange"
            }, {
                "propName": "data",
                "methodName": "OnPropChange"
            }];
    }
}
//# sourceMappingURL=histogram-chart.js.map
