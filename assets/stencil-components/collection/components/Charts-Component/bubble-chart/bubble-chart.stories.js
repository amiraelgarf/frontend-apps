import { html } from "lit";
import { spreadProps } from "@open-wc/lit-helpers";
const meta = {
    title: "charts/BubbleChart",
    component: 'bubble-chart',
    tags: ['autodocs'],
    argTypes: {
        myHeight: {
            control: "number",
            description: "Height of the chart"
        },
        myWidth: {
            control: "number",
            description: "Width Percentage of the chart"
        },
        myTitle: {
            control: "text",
            description: "Title of the chart"
        },
        xTitle: {
            control: "text",
            description: "Title of the X axis"
        },
        yTitle: {
            control: "text",
            description: "Title of the Y axis"
        },
        chartData: {
            control: 'object',
            description: 'Optional: Custom chart data (array of CountryBubbleData objects)',
            defaultValue: undefined,
        },
    },
    render: (args) => html `<bubble-chart ${spreadProps(args)}></bubble-chart>`
};
export default meta;
export const BubbleChartFirst = {
    args: {
        myHeight: 350,
        myWidth: 100,
        myTitle: 'Population by Country',
        xTitle: 'Country',
        yTitle: 'Population',
    }
};
//# sourceMappingURL=bubble-chart.stories.js.map
