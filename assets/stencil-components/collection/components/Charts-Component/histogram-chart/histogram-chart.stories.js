import { html } from "lit";
import { spreadProps } from "@open-wc/lit-helpers";
const sampleStudentGrades = [
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
const meta = {
    title: "charts/Histogram Chart",
    component: "histogram-chart",
    tags: ['autodocs'],
    argTypes: {
        myWidth: {
            control: { type: 'range', min: 400, max: 1200, step: 50 },
            description: 'The overall width of the chart in pixels.',
        },
        myHight: {
            control: { type: 'range', min: 300, max: 800, step: 50 },
            description: 'The overall height of the chart in pixels.',
        },
        nameOfChart: {
            control: 'text',
            description: 'The title displayed at the top of the histogram chart.',
        },
        binCount: {
            control: { type: 'range', min: 5, max: 20, step: 1 },
            description: 'The number of bins (intervals) used to group the grades in the histogram.',
        },
        data: {
            control: 'object',
            description: 'An array of student grade objects, each containing name, semester1, and semester2 grades.',
        },
    },
    args: {
        myWidth: 800,
        myHight: 500,
        nameOfChart: 'Grade Distribution (Semesters 1 & 2)',
        binCount: 10,
        data: sampleStudentGrades,
    },
    render: (args) => html `<histogram-chart ${spreadProps(args)}></histogram-chart>`
};
export default meta;
export const CustomTitleAndBins = {
    args: {
        nameOfChart: 'Student Performance Across Semesters',
        binCount: 15,
        myWidth: 1000,
        myHight: 600,
    },
};
//# sourceMappingURL=histogram-chart.stories.js.map
