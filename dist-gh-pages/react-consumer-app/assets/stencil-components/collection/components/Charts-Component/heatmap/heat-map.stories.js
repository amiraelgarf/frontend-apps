import { html } from "lit";
const meta = {
    title: 'Charts/Heatmap',
};
export default meta;
const generateData = (seriesCount, dataPoints) => Array.from({ length: seriesCount }, (_, s) => ({
    name: `Metric ${s + 1}`,
    data: Array.from({ length: dataPoints }, (_, i) => ({
        x: `W${i + 1}`,
        y: Math.floor(Math.random() * 100),
    })),
}));
export const Basic = {
    render: () => {
        setTimeout(() => {
            import('apexcharts').then((ApexCharts) => {
                const chart = new ApexCharts.default(document.querySelector('#heatmap'), {
                    chart: { type: 'heatmap', height: 350 },
                    colors: ['#008FFB'],
                    series: generateData(7, 10),
                    dataLabels: { enabled: false },
                    title: { text: 'Heatmap in Storybook' },
                });
                chart.render();
            });
        }, 0);
        return html `<div id="heatmap"></div>`;
    },
};
//# sourceMappingURL=heat-map.stories.js.map
