import { html } from "lit";
import { spreadProps } from "@open-wc/lit-helpers";
const meta = {
    title: "charts/ScatterPlot",
    component: 'scatter-plot',
    tags: ['autodocs'],
    argTypes: {
        data: {
            control: "object",
            description: "An array of objects for the chart"
        },
        colorOfPoint: {
            control: "color",
            description: "Select the color of the points"
        },
        myHight: {
            control: "number",
            description: "Height of the chart"
        },
        myWidth: {
            control: "number",
            description: "Width of the chart"
        },
        nameOfSactter: {
            control: "text",
            description: "Name of the chart"
        },
        xTitle: {
            control: "text",
            description: "Title of the X axis"
        },
        yTitle: {
            control: "text",
            description: "Title of the Y axis"
        },
        xTicks: {
            control: "number",
            description: "Number of ticks on the X axis"
        },
        yTicks: {
            control: "number",
            description: "Number of ticks on the Y axis"
        },
    },
    render: (args) => html `<scatter-plot ${spreadProps(args)}></scatter-plot>`
};
export default meta;
export const ScatterFrist = {
    args: {
        myHight: 600,
        myWidth: 800,
        nameOfSactter: "Sample Scatter Plot",
        colorOfPoint: "red",
        xTitle: "X Axis",
        yTitle: "Y Axis",
        xTicks: 30,
        yTicks: 10
    }
};
//# sourceMappingURL=scatter-plot.stories.js.map
