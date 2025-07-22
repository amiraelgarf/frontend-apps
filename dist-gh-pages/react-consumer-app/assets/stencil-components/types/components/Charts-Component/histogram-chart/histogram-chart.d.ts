interface GradeType {
    name: string;
    semester1: number;
    semester2: number;
}
export declare class HistogramChart {
    el: HTMLElement;
    myWidth: number;
    myHight: number;
    nameOfChart: string;
    binCount: number;
    data: GradeType[];
    private activeSemester;
    private infoTextSelection;
    renderHistogram(): void;
    OnPropChange(): void;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    render(): any;
}
export {};
