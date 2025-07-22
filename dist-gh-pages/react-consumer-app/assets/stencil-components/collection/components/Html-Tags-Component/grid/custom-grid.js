import { h } from "@stencil/core";
import { ModuleRegistry, createGrid, } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";
ModuleRegistry.registerModules([ClientSideRowModelModule]);
class AgLoadingOverlayComponent {
    eGui;
    init() {
        this.eGui = document.createElement('div');
        this.eGui.className = 'ag-custom-overlay ag-custom-loading-overlay';
        this.eGui.innerHTML = 'Loading data...';
    }
    getGui() {
        return this.eGui;
    }
}
class AgNoRowsOverlayComponent {
    eGui;
    params;
    init(params) {
        this.params = params;
        this.eGui = document.createElement('div');
        this.eGui.className = 'ag-custom-overlay ag-custom-no-rows-overlay';
        this.eGui.innerHTML = params.message || 'No data available.';
    }
    getGui() {
        return this.eGui;
    }
}
export class CustomGrid {
    hostElement;
    data = [];
    columns = [];
    rowHeight = 40;
    headerHeight = 40;
    striped = false;
    hoverEffect = true;
    resizableColumns = false;
    sortable = false;
    filterable = false;
    pagination = false;
    pageSize = 10;
    currentPage = 1;
    loading = false;
    emptyMessage = 'No data available.';
    columnDefaults = {
        sortable: true,
        filter: 'agTextColumnFilter',
    };
    gridSortChange;
    gridFilterChange;
    gridPageChange;
    gridRowClick;
    gridApi;
    gridDiv;
    getFilterType(filterableProp, globalFilterable) {
        if (filterableProp === false)
            return false;
        if (typeof filterableProp === 'string')
            return filterableProp;
        return (filterableProp || globalFilterable) ? 'agTextColumnFilter' : false;
    }
    onLoadingChange(newValue) {
        if (this.gridApi) {
            newValue ? this.gridApi.showLoadingOverlay() : this.gridApi.hideOverlay();
        }
    }
    onDataChange(newData) {
        if (this.gridApi) {
            this.gridApi.setRowData(newData);
            if (!newData || newData.length === 0)
                this.gridApi.showNoRowsOverlay();
            else
                this.gridApi.hideOverlay();
        }
    }
    onColumnsChange(newColumns) {
        if (this.gridApi) {
            const columnDefs = newColumns.map(col => {
                const agColDef = {
                    headerName: col.header,
                    field: col.field,
                    width: col.width,
                    resizable: col.resizable,
                    flex: col.flex,
                    minWidth: col.minWidth,
                    maxWidth: col.maxWidth,
                    filter: this.getFilterType(col.filterable, this.filterable),
                    sortable: col.sortable === false ? false : (col.sortable || this.sortable),
                };
                if (col.renderCell) {
                    agColDef.cellRenderer = (params) => {
                        const result = col.renderCell(params);
                        if (result instanceof HTMLElement)
                            return result;
                        if (result && typeof result.outerHTML === 'string')
                            return result.outerHTML;
                        return String(result);
                    };
                }
                return agColDef;
            });
            this.gridApi.setColumnDefs(columnDefs);
        }
    }
    onGridReady = (params) => {
        this.gridApi = params.api;
        if (this.loading)
            this.gridApi.showLoadingOverlay();
        else if (!this.data || this.data.length === 0)
            this.gridApi.showNoRowsOverlay();
        if (this.pagination && this.currentPage > 1) {
            this.gridApi.paginationGoToPage(this.currentPage - 1);
        }
    };
    onSortChanged = (params) => {
        this.gridSortChange.emit(params.api.getSortModel());
    };
    onFilterChanged = (params) => {
        this.gridFilterChange.emit(params.api.getFilterModel());
    };
    onPaginationChanged = (params) => {
        const newPage = params.api.paginationGetCurrentPage() + 1;
        if (newPage !== this.currentPage) {
            this.currentPage = newPage;
            this.gridPageChange.emit(this.currentPage);
        }
    };
    onRowClicked = (params) => {
        this.gridRowClick.emit(params.data);
    };
    componentDidLoad() {
        setTimeout(() => this.initializeGrid(), 0);
    }
    disconnectedCallback() {
        if (this.gridApi) {
            this.gridApi.destroy();
            this.gridApi = null;
        }
    }
    initializeGrid() {
        const columnDefs = this.columns.map(col => {
            const agColDef = {
                headerName: col.header,
                field: col.field,
                width: col.width,
                resizable: col.resizable,
                flex: col.flex,
                minWidth: col.minWidth,
                maxWidth: col.maxWidth,
                filter: this.getFilterType(col.filterable, this.filterable),
                sortable: col.sortable === false ? false : (col.sortable || this.sortable),
            };
            if (col.renderCell) {
                agColDef.cellRenderer = (params) => {
                    const result = col.renderCell(params);
                    if (result instanceof HTMLElement)
                        return result;
                    if (result && typeof result.outerHTML === 'string')
                        return result.outerHTML;
                    return String(result);
                };
            }
            return agColDef;
        });
        const cleanedColumnDefaults = { ...this.columnDefaults };
        if ('filterable' in cleanedColumnDefaults) {
            cleanedColumnDefaults.filter = this.getFilterType(cleanedColumnDefaults.filterable, this.filterable);
            delete cleanedColumnDefaults.filterable;
        }
        const defaultColDef = {
            flex: 1,
            minWidth: 100,
            resizable: this.resizableColumns,
            sortable: this.sortable,
            filter: this.getFilterType(undefined, this.filterable),
            ...cleanedColumnDefaults,
        };
        const standardPageSizes = [10, 20, 50, 100];
        const paginationPageSizeOptions = this.pagination
            ? Array.from(new Set([...standardPageSizes, this.pageSize])).sort((a, b) => a - b)
            : false;
        const gridOptions = {
            rowData: this.data,
            columnDefs,
            rowHeight: this.rowHeight,
            headerHeight: this.headerHeight,
            pagination: this.pagination,
            paginationPageSize: this.pageSize,
            paginationPageSizeSelector: paginationPageSizeOptions,
            defaultColDef,
            domLayout: 'normal',
            loadingOverlayComponent: AgLoadingOverlayComponent,
            noRowsOverlayComponent: AgNoRowsOverlayComponent,
            noRowsOverlayComponentParams: { message: this.emptyMessage },
            onGridReady: this.onGridReady,
            onSortChanged: this.onSortChanged,
            onFilterChanged: this.onFilterChanged,
            onPaginationChanged: this.onPaginationChanged,
            onRowClicked: this.onRowClicked,
        };
        if (this.gridDiv && (this.gridDiv.offsetHeight > 0 || this.gridDiv.offsetWidth > 0)) {
            this.gridApi = createGrid(this.gridDiv, gridOptions);
        }
        else {
            console.warn('AG Grid container has zero dimensions. Grid might not render.');
        }
    }
    render() {
        return (h("div", { key: '9032e2aec90d068830a1698f6aa245b11da476bf', class: {
                'ag-grid-wrapper': true,
                'ag-theme-alpine': true,
                'ag-grid-no-striped': !this.striped,
                'ag-grid-no-hover': !this.hoverEffect,
            }, style: { height: '100%', width: '100%' }, ref: el => (this.gridDiv = el) }));
    }
    static get is() { return "custom-grid"; }
    static get originalStyleUrls() {
        return {
            "$": ["custom-grid.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["custom-grid.css"]
        };
    }
    static get properties() {
        return {
            "data": {
                "type": "unknown",
                "attribute": "data",
                "mutable": false,
                "complexType": {
                    "original": "any[]",
                    "resolved": "any[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "columns": {
                "type": "unknown",
                "attribute": "columns",
                "mutable": false,
                "complexType": {
                    "original": "GridColumn[]",
                    "resolved": "GridColumn[]",
                    "references": {
                        "GridColumn": {
                            "location": "local",
                            "path": "F:/Siemens/copy/custom-frontend-library/src/components/Html-Tags-Component/grid/custom-grid.tsx",
                            "id": "src/components/Html-Tags-Component/grid/custom-grid.tsx::GridColumn"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "rowHeight": {
                "type": "number",
                "attribute": "row-height",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "40"
            },
            "headerHeight": {
                "type": "number",
                "attribute": "header-height",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "40"
            },
            "striped": {
                "type": "boolean",
                "attribute": "striped",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "hoverEffect": {
                "type": "boolean",
                "attribute": "hover-effect",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "resizableColumns": {
                "type": "boolean",
                "attribute": "resizable-columns",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "sortable": {
                "type": "boolean",
                "attribute": "sortable",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "filterable": {
                "type": "boolean",
                "attribute": "filterable",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "pagination": {
                "type": "boolean",
                "attribute": "pagination",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "pageSize": {
                "type": "number",
                "attribute": "page-size",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "10"
            },
            "currentPage": {
                "type": "number",
                "attribute": "current-page",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "1"
            },
            "loading": {
                "type": "boolean",
                "attribute": "loading",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "emptyMessage": {
                "type": "string",
                "attribute": "empty-message",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'No data available.'"
            },
            "columnDefaults": {
                "type": "unknown",
                "attribute": "column-defaults",
                "mutable": false,
                "complexType": {
                    "original": "Partial<ColDef>",
                    "resolved": "{ colId?: string | undefined; field?: string | undefined; type?: string | string[] | undefined; cellDataType?: string | boolean | undefined; valueGetter?: string | ValueGetterFunc<any, any> | undefined; valueFormatter?: string | ValueFormatterFunc<any, any> | undefined; refData?: { [key: string]: string; } | undefined; keyCreator?: ((params: KeyCreatorParams<any, any>) => string) | undefined; equals?: ((valueA: any, valueB: any) => boolean) | undefined; tooltipField?: string | undefined; tooltipValueGetter?: ((params: ITooltipParams<any, any, any>) => any) | undefined; checkboxSelection?: boolean | CheckboxSelectionCallback<any, any> | undefined; showDisabledCheckboxes?: boolean | undefined; icons?: { [key: string]: string | ((...args: any[]) => any); } | undefined; suppressNavigable?: boolean | SuppressNavigableCallback<any, any> | undefined; suppressKeyboardEvent?: ((params: SuppressKeyboardEventParams<any, any>) => boolean) | undefined; suppressPaste?: boolean | SuppressPasteCallback<any, any> | undefined; suppressFillHandle?: boolean | undefined; hide?: boolean | undefined; initialHide?: boolean | undefined; lockVisible?: boolean | undefined; lockPosition?: boolean | \"left\" | \"right\" | undefined; suppressMovable?: boolean | undefined; useValueFormatterForExport?: boolean | undefined; editable?: boolean | EditableCallback<any, any> | undefined; valueSetter?: string | ValueSetterFunc<any, any> | undefined; valueParser?: string | ValueParserFunc<any, any> | undefined; cellEditor?: any; cellEditorParams?: any; cellEditorSelector?: CellEditorSelectorFunc<any, any> | undefined; singleClickEdit?: boolean | undefined; cellEditorPopup?: boolean | undefined; cellEditorPopupPosition?: \"over\" | \"under\" | undefined; useValueParserForImport?: boolean | undefined; onCellValueChanged?: ((event: NewValueParams<any, any>) => void) | undefined; onCellClicked?: ((event: CellClickedEvent<any, any>) => void) | undefined; onCellDoubleClicked?: ((event: CellDoubleClickedEvent<any, any>) => void) | undefined; onCellContextMenu?: ((event: CellContextMenuEvent<any, any>) => void) | undefined; getQuickFilterText?: ((params: GetQuickFilterTextParams<any, any>) => string) | undefined; filterValueGetter?: string | ValueGetterFunc<any, any> | undefined; floatingFilter?: boolean | undefined; suppressFloatingFilterButton?: boolean | undefined; headerComponent?: any; headerComponentParams?: any; menuTabs?: ColumnMenuTab[] | undefined; columnChooserParams?: ColumnChooserParams | undefined; columnsMenuParams?: ColumnsMenuParams | undefined; suppressMenu?: boolean | undefined; suppressHeaderMenuButton?: boolean | undefined; suppressHeaderFilterButton?: boolean | undefined; mainMenuItems?: (string | MenuItemDef<any, any>)[] | GetMainMenuItems<any, any> | undefined; contextMenuItems?: (string | MenuItemDef<any, any>)[] | GetContextMenuItems<any, any> | undefined; headerCheckboxSelection?: boolean | HeaderCheckboxSelectionCallback<any, any> | undefined; headerCheckboxSelectionFilteredOnly?: boolean | undefined; headerCheckboxSelectionCurrentPageOnly?: boolean | undefined; chartDataType?: \"time\" | \"category\" | \"series\" | \"excluded\" | undefined; pinned?: boolean | \"left\" | \"right\" | null | undefined; initialPinned?: boolean | \"left\" | \"right\" | undefined; lockPinned?: boolean | undefined; pivot?: boolean | undefined; initialPivot?: boolean | undefined; pivotIndex?: number | null | undefined; initialPivotIndex?: number | undefined; pivotComparator?: ((valueA: string, valueB: string) => number) | undefined; enablePivot?: boolean | undefined; cellStyle?: CellStyle | CellStyleFunc<any, any> | undefined; cellClass?: string | string[] | CellClassFunc<any, any> | undefined; cellClassRules?: CellClassRules<any, any> | undefined; cellRenderer?: any; cellRendererParams?: any; cellRendererSelector?: CellRendererSelectorFunc<any, any> | undefined; loadingCellRenderer?: any; loadingCellRendererParams?: any; loadingCellRendererSelector?: CellRendererSelectorFunc<any, any> | undefined; autoHeight?: boolean | undefined; wrapText?: boolean | undefined; enableCellChangeFlash?: boolean | undefined; suppressCellFlash?: boolean | undefined; rowDrag?: boolean | RowDragCallback<any, any> | undefined; rowDragText?: ((params: IRowDragItem, dragItemCount: number) => string) | undefined; dndSource?: boolean | DndSourceCallback<any, any> | undefined; dndSourceOnRowDrag?: ((params: DndSourceOnRowDragParams<any>) => void) | undefined; rowGroup?: boolean | undefined; initialRowGroup?: boolean | undefined; rowGroupIndex?: number | null | undefined; initialRowGroupIndex?: number | undefined; enableRowGroup?: boolean | undefined; enableValue?: boolean | undefined; aggFunc?: string | IAggFunc<any, any> | null | undefined; initialAggFunc?: string | IAggFunc<any, any> | undefined; defaultAggFunc?: string | undefined; allowedAggFuncs?: string[] | undefined; showRowGroup?: string | boolean | undefined; sortable?: boolean | undefined; sort?: SortDirection | undefined; initialSort?: SortDirection | undefined; sortIndex?: number | null | undefined; initialSortIndex?: number | undefined; sortingOrder?: SortDirection[] | undefined; comparator?: ((valueA: any, valueB: any, nodeA: IRowNode<any>, nodeB: IRowNode<any>, isDescending: boolean) => number) | undefined; unSortIcon?: boolean | undefined; colSpan?: ((params: ColSpanParams<any, any>) => number) | undefined; rowSpan?: ((params: RowSpanParams<any, any>) => number) | undefined; width?: number | undefined; initialWidth?: number | undefined; minWidth?: number | undefined; maxWidth?: number | undefined; flex?: number | undefined; initialFlex?: number | undefined; resizable?: boolean | undefined; suppressSizeToFit?: boolean | undefined; suppressAutoSize?: boolean | undefined; pivotValueColumn?: Column<any> | null | undefined; pivotTotalColumnIds?: string[] | undefined; suppressSpanHeaderHeight?: boolean | undefined; headerName?: string | undefined; headerValueGetter?: string | HeaderValueGetterFunc<any, any> | undefined; headerTooltip?: string | undefined; headerClass?: HeaderClass<any, any> | undefined; suppressHeaderKeyboardEvent?: ((params: SuppressHeaderKeyboardEventParams<any, any>) => boolean) | undefined; columnGroupShow?: ColumnGroupShowType | undefined; toolPanelClass?: ToolPanelClass<any, any> | undefined; suppressColumnsToolPanel?: boolean | undefined; suppressFiltersToolPanel?: boolean | undefined; tooltipComponent?: any; tooltipComponentParams?: any; pivotKeys?: string[] | undefined; cellAriaRole?: string | undefined; context?: any; wrapHeaderText?: boolean | undefined; autoHeaderHeight?: boolean | undefined; suppressHeaderContextMenu?: boolean | undefined; filter?: any; filterParams?: any; floatingFilterComponent?: any; floatingFilterComponentParams?: any; }",
                    "references": {
                        "Partial": {
                            "location": "global",
                            "id": "global::Partial"
                        },
                        "ColDef": {
                            "location": "import",
                            "path": "@ag-grid-community/core",
                            "id": "node_modules::ColDef"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{\n    sortable: true,\n    filter: 'agTextColumnFilter',\n  }"
            }
        };
    }
    static get events() {
        return [{
                "method": "gridSortChange",
                "name": "gridSortChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "gridFilterChange",
                "name": "gridFilterChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "gridPageChange",
                "name": "gridPageChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }, {
                "method": "gridRowClick",
                "name": "gridRowClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "hostElement"; }
    static get watchers() {
        return [{
                "propName": "loading",
                "methodName": "onLoadingChange"
            }, {
                "propName": "data",
                "methodName": "onDataChange"
            }, {
                "propName": "columns",
                "methodName": "onColumnsChange"
            }];
    }
}
//# sourceMappingURL=custom-grid.js.map
