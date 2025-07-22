interface Datum {
    x: number;
    y: number;
    type: string;
}
export declare class ScatterPlot {
    data: Datum[];
    myHight: number;
    myWidth: number;
    nameOfSactter: string;
    colorOfPoint: string;
    xTitle: string;
    yTitle: string;
    xTicks: number;
    yTicks: number;
    private uniqueTypes;
    private colorScale;
    el: HTMLElement;
    dataWatcher(): void;
    componentWillLoad(): void;
    drawChart(): void;
    componentDidLoad(): void;
    componentShouldUpdate(): void;
    render(): any;
}
export {};
