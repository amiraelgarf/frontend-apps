import ApexCharts from 'apexcharts';
export declare class LineChart {
    el: HTMLElement;
    chart: ApexCharts;
    data: number[];
    categories: string[];
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
