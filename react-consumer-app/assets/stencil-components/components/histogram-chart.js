import { p as proxyCustomElement, H, h } from './index.js';
import { s as select, o as ordinal } from './p-AkiUVwtn.js';
import { t as tickIncrement, c as ticks, d as bisectRight, l as linear, m as max, a as axisBottom, b as axisLeft } from './p-DCeK6rus.js';

function count(values, valueof) {
  let count = 0;
  {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count;
      }
    }
  }
  return count;
}

function extent(values, valueof) {
  let min;
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
}

function identity(x) {
  return x;
}

var array = Array.prototype;

var slice = array.slice;

function constant(x) {
  return () => x;
}

function nice(start, stop, count) {
  let prestep;
  while (true) {
    const step = tickIncrement(start, stop, count);
    if (step === prestep || step === 0 || !isFinite(step)) {
      return [start, stop];
    } else if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
    }
    prestep = step;
  }
}

function thresholdSturges(values) {
  return Math.max(1, Math.ceil(Math.log(count(values)) / Math.LN2) + 1);
}

function bin() {
  var value = identity,
      domain = extent,
      threshold = thresholdSturges;

  function histogram(data) {
    if (!Array.isArray(data)) data = Array.from(data);

    var i,
        n = data.length,
        x,
        step,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds, and nice the
    // default domain accordingly.
    if (!Array.isArray(tz)) {
      const max = x1, tn = +tz;
      if (domain === extent) [x0, x1] = nice(x0, x1, tn);
      tz = ticks(x0, x1, tn);

      // If the domain is aligned with the first tick (which it will by
      // default), then we can use quantization rather than bisection to bin
      // values, which is substantially faster.
      if (tz[0] <= x0) step = tickIncrement(x0, x1, tn);

      // If the last threshold is coincident with the domain’s upper bound, the
      // last bin will be zero-width. If the default domain is used, and this
      // last threshold is coincident with the maximum input value, we can
      // extend the niced upper bound by one tick to ensure uniform bin widths;
      // otherwise, we simply remove the last threshold. Note that we don’t
      // coerce values or the domain to numbers, and thus must be careful to
      // compare order (>=) rather than strict equality (===)!
      if (tz[tz.length - 1] >= x1) {
        if (max >= x1 && domain === extent) {
          const step = tickIncrement(x0, x1, tn);
          if (isFinite(step)) {
            if (step > 0) {
              x1 = (Math.floor(x1 / step) + 1) * step;
            } else if (step < 0) {
              x1 = (Math.ceil(x1 * -step) + 1) / -step;
            }
          }
        } else {
          tz.pop();
        }
      }
    }

    // Remove any thresholds outside the domain.
    // Be careful not to mutate an array owned by the user!
    var m = tz.length, a = 0, b = m;
    while (tz[a] <= x0) ++a;
    while (tz[b - 1] > x1) --b;
    if (a || b < m) tz = tz.slice(a, b), m = b - a;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    if (isFinite(step)) {
      if (step > 0) {
        for (i = 0; i < n; ++i) {
          if ((x = values[i]) != null && x0 <= x && x <= x1) {
            bins[Math.min(m, Math.floor((x - x0) / step))].push(data[i]);
          }
        }
      } else if (step < 0) {
        for (i = 0; i < n; ++i) {
          if ((x = values[i]) != null && x0 <= x && x <= x1) {
            const j = Math.floor((x0 - x) * step);
            bins[Math.min(m, j + (tz[j] <= x))].push(data[i]); // handle off-by-one due to rounding
          }
        }
      }
    } else {
      for (i = 0; i < n; ++i) {
        if ((x = values[i]) != null && x0 <= x && x <= x1) {
          bins[bisectRight(tz, x, 0, m)].push(data[i]);
        }
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : constant([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : constant(Array.isArray(_) ? slice.call(_) : _), histogram) : threshold;
  };

  return histogram;
}

const histogramChartCss = ":host{display:block;width:100%;height:100%;font-family:'Inter', sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#333;}.histogramChart{display:flex;justify-content:center;align-items:center;width:100%;height:100%;background-color:#f8f9fa;border-radius:12px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.1);overflow:hidden;}.histogramChart svg{display:block;margin:auto;background-color:#ffffff;border-radius:10px;}.chart-title{font-size:24px;font-weight:600;fill:#202124;}rect{transition:all 0.3s ease-in-out;}rect:hover{opacity:0.9 !important;transform:translateY(-2px);box-shadow:0 2px 5px rgba(0, 0, 0, 0.2);}.domain{stroke:#aaa;stroke-width:1px}.tick line{stroke:#ccc;stroke-width:0.5px}.tick text{font-size:11px;fill:#555;}.axis-label{font-size:14px;font-weight:500;fill:#333}.legend{font-size:12px;fill:#555}.legend rect{stroke:#ccc;stroke-width:0.5px}.legend text{fill:#333}text{font-family:'Inter', sans-serif}rect.bar-s1,rect.bar-s2{cursor:pointer}.info-text{fill:#666;font-style:italic}.bar-s1,.bar-s2{cursor:pointer;transition:opacity 0.2s ease}";

const HistogramChart$1 = proxyCustomElement(class HistogramChart extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    get el() { return this; }
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
        const svg = select(this.el.shadowRoot?.querySelector('.histogramChart'))
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
        const x = linear()
            .domain([0, max(allGrade) || 0])
            .range([0, width])
            .nice();
        const bins = bin()
            .value(d => d)
            .domain(x.domain())
            .thresholds(x.ticks(this.binCount));
        const semester1Bins = bins(this.data.map(d => d.semester1));
        const semester2Bins = bins(this.data.map(d => d.semester2));
        const y = linear()
            .domain([0, max([...semester1Bins, ...semester2Bins], d => d.length) || 0])
            .range([height, 0])
            .nice();
        const color = ordinal()
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
            .call(axisBottom(x))
            .append("text")
            .attr("x", width / 2)
            .attr("y", 35)
            .attr("fill", "#000")
            .text("Grade Ranges");
        svg.append("g")
            .call(axisLeft(y))
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
        return (h("div", { key: 'a5919aa5f4b28ed04d12d054150bde2b840bb3f4', class: "histogramChart" }));
    }
    static get watchers() { return {
        "myWidth": ["OnPropChange"],
        "myHeight": ["OnPropChange"],
        "nameOfChart": ["OnPropChange"],
        "binCount": ["OnPropChange"],
        "data": ["OnPropChange"]
    }; }
    static get style() { return histogramChartCss; }
}, [1, "histogram-chart", {
        "myWidth": [2, "my-width"],
        "myHight": [2, "my-hight"],
        "nameOfChart": [1, "name-of-chart"],
        "binCount": [2, "bin-count"],
        "data": [16]
    }, undefined, {
        "myWidth": ["OnPropChange"],
        "myHeight": ["OnPropChange"],
        "nameOfChart": ["OnPropChange"],
        "binCount": ["OnPropChange"],
        "data": ["OnPropChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["histogram-chart"];
    components.forEach(tagName => { switch (tagName) {
        case "histogram-chart":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, HistogramChart$1);
            }
            break;
    } });
}
defineCustomElement$1();

const HistogramChart = HistogramChart$1;
const defineCustomElement = defineCustomElement$1;

export { HistogramChart, defineCustomElement };
//# sourceMappingURL=histogram-chart.js.map

//# sourceMappingURL=histogram-chart.js.map