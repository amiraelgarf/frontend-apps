import { EventEmitter } from '../../../stencil-public-runtime';
import { ColDef, ICellRendererParams } from '@ag-grid-community/core';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-alpine.css';
export interface GridColumn extends ColDef {
    header: string;
    field: string;
    width?: number;
    sortable?: boolean;
    filterable?: boolean | string;
    renderCell?: (params: ICellRendererParams) => any;
}
export declare class CustomGrid {
    hostElement: HTMLElement;
    data: any[];
    columns: GridColumn[];
    rowHeight: number;
    headerHeight: number;
    striped: boolean;
    hoverEffect: boolean;
    resizableColumns: boolean;
    sortable: boolean;
    filterable: boolean;
    pagination: boolean;
    pageSize: number;
    currentPage: number;
    loading: boolean;
    emptyMessage: string;
    columnDefaults: Partial<ColDef>;
    gridSortChange: EventEmitter<any>;
    gridFilterChange: EventEmitter<any>;
    gridPageChange: EventEmitter<number>;
    gridRowClick: EventEmitter<any>;
    private gridApi;
    private gridDiv;
    private getFilterType;
    onLoadingChange(newValue: boolean): void;
    onDataChange(newData: any[]): void;
    onColumnsChange(newColumns: GridColumn[]): void;
    private onGridReady;
    private onSortChanged;
    private onFilterChanged;
    private onPaginationChanged;
    private onRowClicked;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private initializeGrid;
    render(): any;
}
