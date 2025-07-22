import { p as proxyCustomElement, H, h } from './index.js';
import { o as ordinal, i as initRange, s as select } from './p-AkiUVwtn.js';
import { l as linear, m as max, a as axisBottom, b as axisLeft } from './p-DCeK6rus.js';

function range(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
}

function band() {
  var scale = ordinal().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      r0 = 0,
      r1 = 1,
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = r1 < r0,
        start = reverse ? r1 : r0,
        stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = range(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };

  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), [r0, r1])
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return initRange.apply(rescale(), arguments);
}

const d3BarChartCss = ":host{display:block;width:100%;height:100%;font-family:'Inter', sans-serif;box-sizing:border-box}.chart-container{display:flex;justify-content:center;align-items:center;min-height:300px;padding:1rem;background-color:#ffffff;border-radius:0.5rem;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);width:100%;height:100%}svg{display:block;overflow:visible;width:100%;height:100%}.x-axis path,.y-axis path{stroke:#cbd5e1;shape-rendering:crispEdges}.x-axis line,.y-axis line{stroke:#e2e8f0;shape-rendering:crispEdges}.x-axis text,.y-axis text{font-size:0.875rem;fill:#374151}.bar{fill:#3b82f6;transition:fill 0.2s ease-in-out}.bar:hover{fill:#2563eb}.bar-label{font-size:0.75rem;fill:#ffffff;font-weight:600;pointer-events:none}";

const D3BarChart$1 = proxyCustomElement(class D3BarChart extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    get hostElement() { return this; }
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
        this.svg = select(this.hostElement.shadowRoot.querySelector('svg'));
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
        const xScale = band()
            .domain(this.chartData.map(d => d.name))
            .range([0, innerWidth])
            .padding(0.1);
        const yScale = linear()
            .domain([0, max(this.chartData, d => d.value) || 0])
            .range([innerHeight, 0]);
        g.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${innerHeight})`)
            .call(axisBottom(xScale))
            .selectAll('text')
            .attr('class', 'text-sm fill-gray-700');
        g.append('g')
            .attr('class', 'y-axis')
            .call(axisLeft(yScale))
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
    static get watchers() { return {
        "chartData": ["onDataChange"]
    }; }
    static get style() { return d3BarChartCss; }
}, [1, "d3-bar-chart", {
        "chartData": [16, "chart-data"],
        "width": [2],
        "height": [2],
        "currentWidth": [32],
        "currentHeight": [32]
    }, undefined, {
        "chartData": ["onDataChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["d3-bar-chart"];
    components.forEach(tagName => { switch (tagName) {
        case "d3-bar-chart":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, D3BarChart$1);
            }
            break;
    } });
}
defineCustomElement$1();

const D3BarChart = D3BarChart$1;
const defineCustomElement = defineCustomElement$1;

export { D3BarChart, defineCustomElement };
//# sourceMappingURL=d3-bar-chart.js.map

//# sourceMappingURL=d3-bar-chart.js.map