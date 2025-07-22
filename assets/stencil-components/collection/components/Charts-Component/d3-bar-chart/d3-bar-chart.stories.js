import { html } from "lit";
const meta = {
    title: 'charts/D3 Bar Chart',
    component: 'd3-bar-chart',
    tags: ['autodocs'],
    argTypes: {
        chartData: {
            control: 'object',
            description: 'An array of objects with `name` (string) and `value` (number) for the chart.',
        },
        width: {
            control: 'number',
            description: 'Optional: Fixed width for the chart. If 0, component will try to fill container.',
        },
        height: {
            control: 'number',
            description: 'Optional: Fixed height for the chart. If 0, component will use a default height (400px).',
        },
    },
    render: (args) => {
        return html `
      <d3-bar-chart
        .chartData=${args.chartData}
        width="${args.width}"
        height="${args.height}"
        style="height: 400px; width: 600px;"
      ></d3-bar-chart>
    `;
    },
};
export default meta;
export const Default = {
    args: {
        chartData: [
            { name: 'Jan', value: 65 },
            { name: 'Feb', value: 59 },
            { name: 'Mar', value: 80 },
            { name: 'Apr', value: 81 },
            { name: 'May', value: 56 },
            { name: 'Jun', value: 75 },
            { name: 'Jul', value: 90 },
        ],
        width: 0,
        height: 0,
    },
};
export const FewerDataPoints = {
    args: {
        chartData: [
            { name: 'Q1', value: 120 },
            { name: 'Q2', value: 150 },
            { name: 'Q3', value: 90 },
        ],
        width: 0,
        height: 0,
    },
};
export const MoreDataPoints = {
    args: {
        chartData: [
            { name: 'Item 1', value: 20 },
            { name: 'Item 2', value: 30 },
            { name: 'Item 3', value: 45 },
            { name: 'Item 4', value: 60 },
            { name: 'Item 5', value: 25 },
            { name: 'Item 6', value: 70 },
            { name: 'Item 7', value: 55 },
            { name: 'Item 8', value: 80 },
            { name: 'Item 9', value: 35 },
            { name: 'Item 10', value: 95 },
        ],
        width: 0,
        height: 0,
    },
};
export const FixedSize = {
    args: {
        chartData: [
            { name: 'A', value: 10 },
            { name: 'B', value: 25 },
            { name: 'C', value: 15 },
            { name: 'D', value: 40 },
        ],
        width: 500,
        height: 300,
    },
};
export const LowValues = {
    args: {
        chartData: [
            { name: 'Low1', value: 5 },
            { name: 'Low2', value: 12 },
            { name: 'Low3', value: 8 },
            { name: 'Low4', value: 15 },
        ],
        width: 0,
        height: 0,
    },
};
export const MixedValues = {
    args: {
        chartData: [
            { name: 'Mix1', value: 10 },
            { name: 'Mix2', value: 90 },
            { name: 'Mix3', value: 30 },
            { name: 'Mix4', value: 75 },
            { name: 'Mix5', value: 50 },
        ],
        width: 0,
        height: 0,
    },
};
export const NoData = {
    args: {
        chartData: [],
        width: 0,
        height: 0,
    },
};
//# sourceMappingURL=d3-bar-chart.stories.js.map
