interface BubbleDataType {
    country: string;
    population: number;
    world_land_area_percentage: number;
}
export declare class BubbleChart {
    el: HTMLElement;
    myHeight: number;
    myTitle: string;
    xTitle: string;
    yTitle: string;
    myWidth: number;
    private charWidth;
    bubbleData: BubbleDataType[];
    private seriesData;
    private countyName;
    private apexChartInstance;
    private originalXMin;
    private originalXMax;
    private originalYMin;
    private originalYMax;
    constructor();
    private ProcessBubbleData;
    bubbleDataChanged(newValue: BubbleDataType[] | undefined): void;
    propertiesChanged(): void;
    private GetOption;
    myWidthChanged(newValue: number): void;
    drawOrUpdateChart(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    render(): any;
}
export {};
