import { html } from "lit";
const meta = {
    title: 'Charts/LineChart',
    component: 'line-chart',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A simple line chart using ApexCharts inside a Stencil component. It supports custom data and category labels.',
            },
        },
    },
    argTypes: {
        data: {
            control: 'object',
            description: 'Data points to plot',
            defaultValue: [10, 20, 30, 40, 50],
        },
        categories: {
            control: 'object',
            description: 'X-axis labels',
            defaultValue: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        },
    },
};
export default meta;
export const Default = {
    args: {
        data: [5, 10, 15],
        categories: ['A', 'B', 'C'],
    },
    render: (args) => html `
    <line-chart .data=${args.data} .categories=${args.categories}></line-chart>
  `,
};
export const ManyPoints = {
    args: {
        data: [12, 25, 40, 30, 22, 50, 65],
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    render: (args) => html `
    <line-chart .data=${args.data} .categories=${args.categories}></line-chart>
  `,
};
export const Empty = {
    args: {
        data: [],
        categories: [],
    },
    render: (args) => html `
    <line-chart .data=${args.data} .categories=${args.categories}></line-chart>
  `,
};
//# sourceMappingURL=line-chart.stories.js.map
