import { html } from "lit";
const meta = {
    title: 'charts/MultiAxisChart',
    component: 'multi-axis-chart',
    tags: ['autodocs'],
    argTypes: {
        chartTitle: {
            control: 'text',
            description: 'title for the chart.',
        },
        chartHeight: {
            control: 'number',
            description: 'height of the chart in pixels. defaults to 350.',
        },
        categories: {
            control: 'object',
            description: 'categories for the X-axis (e.g., years, months, product names).',
        },
        series: {
            control: 'object',
            description: 'array of series data to be displayed on the chart. each series must have a name, type (\'line\', \'column\', \'area\', or \'bar\'), and data array.',
        },
        yAxes: {
            control: 'object',
            description: 'array defining the configuration for each Y-axis. each object specifies which series it corresponds to, its title, and its position.',
        },
        colors: {
            control: 'object',
            description: 'Optional array of colors for the series.',
        },
    },
    render: (args) => {
        return html `
      <multi-axis-chart
        .chartTitle="${args.chartTitle}"
        .chartHeight="${args.chartHeight}"
        .categories="${args.categories}"
        .series="${args.series}"
        .yAxes="${args.yAxes}"
        .colors="${args.colors}"
      ></multi-axis-chart>
    `;
    },
};
export default meta;
const defaultSeries = [
    {
        name: 'Column A',
        type: 'column',
        data: [21.1, 23, 33.1, 34, 44.1, 44.9, 56.5, 58.5]
    },
    {
        name: "Column B",
        type: 'column',
        data: [10, 19, 27, 26, 34, 35, 40, 38]
    },
    {
        name: "Line C",
        type: 'line',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    },
];
const defaultYAxes = [
    {
        seriesName: 'Column A',
        title: "Columns"
    },
    {
        seriesName: 'Line C',
        title: "Line",
        opposite: true
    }
];
const defaultCategories = [
    '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'
];
const defaultColors = ['#004D73', '#93DCED', '#FFC328'];
export const Default = {
    args: {
        chartTitle: 'Default Multi-Axis Chart',
        chartHeight: 350,
        categories: defaultCategories,
        series: defaultSeries,
        yAxes: defaultYAxes,
        colors: defaultColors,
    },
};
export const TwoAxesExample = {
    args: {
        chartTitle: 'Temperature & Humidity',
        chartHeight: 380,
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        series: [
            {
                name: 'Temperature (°C)',
                type: 'line',
                data: [22, 24, 23, 25, 26, 24, 23]
            },
            {
                name: "Humidity (%)",
                type: 'column',
                data: [65, 70, 68, 72, 75, 70, 66]
            },
        ],
        yAxes: [
            {
                seriesName: 'Temperature (°C)',
                title: "Temperature (°C)"
            },
            {
                seriesName: 'Humidity (%)',
                title: "Humidity (%)",
                opposite: true
            }
        ],
        colors: ['#FF4560', '#00E396'],
    },
};
export const SingleAxisColumns = {
    args: {
        chartTitle: 'Monthly Downloads',
        chartHeight: 300,
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        series: [
            {
                name: 'App Downloads',
                type: 'column',
                data: [120, 150, 130, 180, 160, 200]
            },
            {
                name: 'Website Downloads',
                type: 'column',
                data: [80, 100, 90, 110, 105, 120]
            },
        ],
        yAxes: [
            {
                seriesName: 'App Downloads',
                title: "Downloads"
            }
        ],
        colors: ['#775DD0', '#8D5B4C'],
    },
};
export const ThreeAxisChart = {
    args: {
        chartTitle: 'Multi-Metric Performance',
        chartHeight: 450,
        categories: ['Q1', 'Q2', 'Q3', 'Q4'],
        series: [
            {
                name: 'Revenue (K)',
                type: 'column',
                data: [100, 120, 150, 130]
            },
            {
                name: "Users (Thousands)",
                type: 'line',
                data: [10, 12, 18, 15]
            },
            {
                name: "Engagement Score",
                type: 'area',
                data: [7.5, 8.2, 9.0, 8.5]
            },
        ],
        yAxes: [
            {
                seriesName: 'Revenue (K)',
                title: "Revenue",
                opposite: false
            },
            {
                seriesName: 'Users (Thousands)',
                title: "Users",
                opposite: true
            },
            {
                seriesName: 'Engagement Score',
                title: "Score",
                opposite: true
            }
        ],
        colors: ['#008FFB', '#FF4560', '#00E396'],
    },
};
//# sourceMappingURL=multi-axis-chart.stories.js.map
