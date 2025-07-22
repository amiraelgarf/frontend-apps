interface ChartData {
    name: string;
    value: number;
}
export declare class D3BarChart {
    hostElement: HTMLElement;
    chartData: ChartData[];
    width: number;
    height: number;
    private currentWidth;
    private currentHeight;
    private svg;
    private chartContainer;
    onDataChange(): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    disconnectedCallback(): void;
    private handleResize;
    private updateDimensions;
    private drawChart;
    render(): any;
}
export {};
