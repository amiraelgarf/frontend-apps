type DataItem = {
    idItem: string;
    iconImage: string;
    textData: string;
    functionality: (...args: any) => any;
    hasChildren: boolean;
    children: DataItem[];
    isDivisor: boolean;
};
export declare class RightClickMenu {
    theItems: DataItem[];
    menuVisible: boolean;
    menuPosition: {
        x: number;
        y: number;
    };
    adjustedPosition: {
        x: number;
        y: number;
    };
    submenuAdjustedPositionX: number;
    hostElement: HTMLElement;
    private menuElementRef;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    adjustMenuPosition(): void;
    handleRightClick(e: MouseEvent): void;
    handleClickOutside(e: MouseEvent): void;
    renderTheMenu(item: DataItem): any;
    render(): any;
}
export {};
