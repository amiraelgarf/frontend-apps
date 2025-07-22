'use strict';

var index = require('./index-Qkg_gWF8.js');
var transform = require('./transform-D39Ukd79.js');
var linear = require('./linear-D0jFoRHX.js');
var colors = require('./colors-DaLDGhwg.js');

var category10 = colors.colors("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

const scatterPlotCss = ".chart-title{font-family:sans-serif;fill:#333}.x-axis-label,.y-axis-label{font-family:sans-serif;fill:#555;font-size:14px}.dot{transition:all 0.2s ease}.dot:hover{fill:orange;r:30}#scatter-plot-ID{display:block;font-family:sans-serif}.chart-title{font-weight:bold;fill:#333}.x-axis-label,.y-axis-label{font-size:14px;fill:#555}.x-axis path,.y-axis path{stroke:#888;stroke-width:1.5}.x-axis line,.y-axis line{stroke:#888}.x-axis text,.y-axis text{font-size:12px;fill:#555}.grid line{stroke:#ccc;stroke-opacity:0.5;shape-rendering:crispEdges}circle{cursor:pointer;transition:r 0.1s ease-out}circle:hover{r:6;}";

const ScatterPlot = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    data = [
        { x: 0, y: 4.2, type: "A" }, { x: 3, y: 11.5, type: "A" }, { x: 6, y: 17.8, type: "A" },
        { x: 9, y: 23.9, type: "A" }, { x: 12, y: 29.2, type: "A" }, { x: 15, y: 35.1, type: "A" },
        { x: 18, y: 41.9, type: "A" }, { x: 21, y: 47.8, type: "A" }, { x: 24, y: 54.7, type: "A" },
        { x: 27, y: 60.8, type: "A" }, { x: 30, y: 67.7, type: "A" }, { x: 33, y: 73.8, type: "A" },
        { x: 36, y: 80.7, type: "A" }, { x: 39, y: 87.6, type: "A" }, { x: 42, y: 94.5, type: "A" },
        { x: 45, y: 101.4, type: "A" }, { x: 48, y: 108.3, type: "A" }, { x: 51, y: 115.2, type: "A" },
        { x: 54, y: 122.1, type: "A" }, { x: 57, y: 129.0, type: "A" }, { x: 60, y: 135.9, type: "A" },
        { x: 63, y: 142.8, type: "A" }, { x: 66, y: 149.7, type: "A" }, { x: 69, y: 156.6, type: "A" },
        { x: 72, y: 163.5, type: "A" }, { x: 75, y: 170.4, type: "A" }, { x: 78, y: 177.3, type: "A" },
        { x: 81, y: 184.2, type: "A" }, { x: 84, y: 191.1, type: "A" }, { x: 87, y: 198.0, type: "A" },
        { x: 90, y: 204.9, type: "A" }, { x: 93, y: 211.8, type: "A" }, { x: 96, y: 218.7, type: "A" },
        { x: 1, y: 11.3, type: "B" }, { x: 4, y: 16.7, type: "B" }, { x: 7, y: 21.4, type: "B" },
        { x: 10, y: 25.3, type: "B" }, { x: 13, y: 29.5, type: "B" }, { x: 16, y: 34.4, type: "B" },
        { x: 19, y: 38.7, type: "B" }, { x: 22, y: 43.1, type: "B" }, { x: 25, y: 47.5, type: "B" },
        { x: 28, y: 52.1, type: "B" }, { x: 31, y: 56.5, type: "B" }, { x: 34, y: 61.1, type: "B" },
        { x: 37, y: 65.7, type: "B" }, { x: 40, y: 70.3, type: "B" }, { x: 43, y: 74.9, type: "B" },
        { x: 46, y: 79.5, type: "B" }, { x: 49, y: 84.1, type: "B" }, { x: 52, y: 88.7, type: "B" },
        { x: 55, y: 93.3, type: "B" }, { x: 58, y: 97.9, type: "B" }, { x: 61, y: 102.5, type: "B" },
        { x: 64, y: 107.1, type: "B" }, { x: 67, y: 111.7, type: "B" }, { x: 70, y: 116.3, type: "B" },
        { x: 73, y: 120.9, type: "B" }, { x: 76, y: 125.5, type: "B" }, { x: 79, y: 130.1, type: "B" },
        { x: 82, y: 134.7, type: "B" }, { x: 85, y: 139.3, type: "B" }, { x: 88, y: 143.9, type: "B" },
        { x: 91, y: 148.5, type: "B" }, { x: 94, y: 153.1, type: "B" }, { x: 97, y: 157.7, type: "B" },
        { x: 2, y: 6.1, type: "C" }, { x: 5, y: 15.2, type: "C" }, { x: 8, y: 24.6, type: "C" },
        { x: 11, y: 33.7, type: "C" }, { x: 14, y: 42.8, type: "C" }, { x: 17, y: 51.9, type: "C" },
        { x: 20, y: 60.5, type: "C" }, { x: 23, y: 69.4, type: "C" }, { x: 26, y: 78.5, type: "C" },
        { x: 29, y: 87.6, type: "C" }, { x: 32, y: 96.7, type: "C" }, { x: 35, y: 105.8, type: "C" },
        { x: 38, y: 114.9, type: "C" }, { x: 41, y: 124.0, type: "C" }, { x: 44, y: 133.1, type: "C" },
        { x: 47, y: 142.2, type: "C" }, { x: 50, y: 151.3, type: "C" }, { x: 53, y: 160.4, type: "C" },
        { x: 56, y: 169.5, type: "C" }, { x: 59, y: 178.6, type: "C" }, { x: 62, y: 187.7, type: "C" },
        { x: 65, y: 196.8, type: "C" }, { x: 68, y: 205.9, type: "C" }, { x: 71, y: 215.0, type: "C" },
        { x: 74, y: 224.1, type: "C" }, { x: 77, y: 233.2, type: "C" }, { x: 80, y: 242.3, type: "C" },
        { x: 83, y: 251.4, type: "C" }, { x: 86, y: 260.5, type: "C" }, { x: 89, y: 269.6, type: "C" },
        { x: 92, y: 278.7, type: "C" }, { x: 95, y: 287.8, type: "C" }, { x: 98, y: 296.9, type: "C" },
        { x: 100, y: 305.0, type: "C" }
    ];
    myHight = 400;
    myWidth = 660;
    nameOfSactter = "Sample Scatter Plot";
    colorOfPoint = "red";
    xTitle = "X Axis";
    yTitle = "Y Axis";
    xTicks = 15;
    yTicks = 10;
    uniqueTypes = [];
    colorScale;
    get el() { return index.getElement(this); }
    dataWatcher() {
        this.uniqueTypes = this.data.map(d => d.type).filter((v, i, a) => a.indexOf(v) === i);
        this.colorScale = transform.ordinal(category10).domain(this.uniqueTypes);
        this.componentShouldUpdate();
    }
    componentWillLoad() {
        this.uniqueTypes = this.data.map(d => d.type).filter((v, i, a) => a.indexOf(v) === i);
        this.colorScale = transform.ordinal(category10).domain(this.uniqueTypes);
    }
    drawChart() {
        const margin = { top: 70, right: 40, bottom: 60, left: 175 };
        const width = this.myWidth - margin.left - margin.right;
        const height = this.myHight - margin.top - margin.bottom;
        transform.select(this.el).select('#scatter-plot-ID').selectAll('*').remove();
        const svg = transform.select(this.el).select('#scatter-plot-ID')
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        svg.append("text")
            .attr("class", "chart-title")
            .attr("x", width / 2)
            .attr("y", -20)
            .style("text-anchor", "middle")
            .style("font-size", "20px")
            .text(this.nameOfSactter);
        const xScale = linear.linear()
            .domain([0, linear.max(this.data, d => d.x) || 0])
            .range([0, width]);
        svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", "translate(0," + height + ")")
            .call(linear.axisBottom(xScale).ticks(this.xTicks));
        const yScale = linear.linear()
            .domain([0, linear.max(this.data, d => d.y) || 0])
            .range([height, 0]);
        svg.append("g")
            .attr("class", "y-axis")
            .call(linear.axisLeft(yScale).ticks(this.yTicks));
        svg.append("g")
            .attr("class", "grid")
            .attr("transform", "translate(0," + height + ")")
            .call(linear.axisBottom(xScale).ticks(this.xTicks)
            .tickSize(-height).tickFormat(() => ""))
            .selectAll("line")
            .style("stroke", "#b00505")
            .style("stroke-opacity", 0.1);
        svg.append("g")
            .attr("class", "grid")
            .call(linear.axisLeft(yScale).ticks(this.yTicks)
            .tickSize(-width).tickFormat(() => ""))
            .selectAll("line").style("stroke", "#b00505")
            .style("stroke-opacity", 0.1);
        svg.selectAll("dot")
            .data(this.data).enter()
            .append("circle")
            .attr("cx", d => xScale(d.x))
            .attr("cy", d => yScale(d.y))
            .attr("r", 5)
            .style("fill", (d) => {
            if (d.type) {
                return this.colorScale(d.type);
            }
            return this.colorOfPoint;
        })
            .style("opacity", 0.8)
            .style("stroke", "black")
            .style("stroke-width", 1)
            .on("mouseover", (event, d) => {
            svg.selectAll("circle")
                .transition()
                .duration(200)
                .style("opacity", (p) => {
                const currentDatum = p;
                return (currentDatum.type === d.type || !currentDatum.type) ? 0.8 : 0.1;
            });
        })
            .on("mouseout", () => {
            svg.selectAll("circle")
                .transition()
                .duration(500)
                .style("opacity", 0.8);
        });
        svg.append("text")
            .attr("class", "x-axis-label")
            .attr("x", width / 2)
            .attr("y", height + 40)
            .style("text-anchor", "middle")
            .text(this.xTitle);
        svg.append("text")
            .attr("class", "y-axis-label")
            .attr("x", -height / 2)
            .attr("y", -175 + 20)
            .attr("transform", "rotate(-90)")
            .style("text-anchor", "middle")
            .text(this.yTitle);
        if (this.uniqueTypes.length > 1) {
            const legend = svg.append("g")
                .attr("class", "legend")
                .attr("transform", `translate(${width + 10}, 0)`);
            const legendRectSize = 18;
            const legendSpacing = 4;
            const legendItems = legend.selectAll(".legend-item")
                .data(this.uniqueTypes)
                .enter()
                .append("g")
                .attr("class", "legend-item")
                .attr("transform", (d, i) => `translate(0, ${i * (legendRectSize + legendSpacing)})`);
            legendItems.append("rect")
                .attr("width", legendRectSize)
                .attr("height", legendRectSize)
                .style("fill", d => this.colorScale(d))
                .style("stroke", "black");
            legendItems.append("text")
                .attr("x", legendRectSize + legendSpacing)
                .attr("y", legendRectSize - legendSpacing)
                .text(d => d);
        }
    }
    componentDidLoad() {
        this.drawChart();
    }
    componentShouldUpdate() {
        this.drawChart();
    }
    render() {
        return (index.h("div", { key: 'd0e8c6050d1edda8b83c7b4653e10fffcdc5a433', id: "scatter-plot-ID" }));
    }
    static get watchers() { return {
        "data": ["dataWatcher"]
    }; }
};
ScatterPlot.style = scatterPlotCss;

exports.scatter_plot = ScatterPlot;
//# sourceMappingURL=scatter-plot.entry.cjs.js.map

//# sourceMappingURL=scatter-plot.cjs.entry.js.map