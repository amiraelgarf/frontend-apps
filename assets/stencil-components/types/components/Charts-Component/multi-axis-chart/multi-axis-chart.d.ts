export interface ChartSeries {
    name: string;
    type: 'line' | 'column' | 'area' | 'bar';
    data: number[];
}
export interface ChartYAxis {
    seriesName: string;
    title: string;
    opposite?: boolean;
}
export declare class MultiAxisChart {
    el: HTMLElement;
    private chartContainer;
    private chart;
    chartTitle?: string;
    chartHeight: number;
    categories: string[];
    series: ChartSeries[];
    yAxes: ChartYAxis[];
    colors?: string[];
    componentDidLoad(): void;
    componentDidUpdate(newValue: any, oldValue: any, propName: string): void;
    private initializeChart;
    private updateChart;
    private buildApexOptions;
    disconnectedCallback(): void;
    render(): any;
}
