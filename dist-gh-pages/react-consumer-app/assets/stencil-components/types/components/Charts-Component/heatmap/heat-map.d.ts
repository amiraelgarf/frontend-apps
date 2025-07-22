export declare class HeatmapChart {
    el: HTMLElement;
    rows: number;
    cols: number;
    generateData(rows: number, cols: number): {
        name: string;
        data: {
            x: string;
            y: number;
        }[];
    }[];
    componentDidLoad(): void;
    render(): any;
}
