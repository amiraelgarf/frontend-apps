import { html } from "lit";
const meta = {
    title: 'charts/PieChart',
    component: 'pie-chart',
    tags: ['autodocs'],
    argTypes: {
        data: {
            control: 'object',
        },
    },
};
export default meta;
export const Default = {
    args: {
        data: [
            { label: 'A', value: 30 },
            { label: 'B', value: 70 },
            { label: 'C', value: 45 },
        ],
    },
    render: (args) => html `<pie-chart .data=${args.data}></pie-chart>`,
};
//# sourceMappingURL=pie-chart.stories.js.map
