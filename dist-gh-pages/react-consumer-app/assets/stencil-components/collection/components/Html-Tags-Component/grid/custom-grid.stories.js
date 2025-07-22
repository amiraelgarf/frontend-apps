import { html } from "lit";
import { action } from "storybook/actions";
import { useArgs } from "storybook/preview-api";
const exampleData = [
    { id: 1, name: 'Alice Smith', age: 30, city: 'New York', status: 'Active' },
    { id: 2, name: 'Bob Johnson', age: 24, city: 'Los Angeles', status: 'Inactive' },
    { id: 3, name: 'Charlie Brown', age: 35, city: 'Chicago', status: 'Active' },
    { id: 4, name: 'Diana Prince', age: 28, city: 'Miami', status: 'Pending' },
    { id: 5, name: 'Eve Adams', age: 42, city: 'Houston', status: 'Active' },
    { id: 6, name: 'Frank White', age: 29, city: 'Seattle', status: 'Inactive' },
    { id: 7, name: 'Grace Taylor', age: 31, city: 'Boston', status: 'Active' },
    { id: 8, name: 'Henry Green', age: 22, city: 'Denver', status: 'Pending' },
    { id: 9, name: 'Ivy King', age: 38, city: 'San Francisco', status: 'Active' },
    { id: 10, name: 'Jack Lee', age: 27, city: 'Dallas', status: 'Inactive' },
    { id: 11, name: 'Karen Hall', age: 33, city: 'Atlanta', status: 'Active' },
    { id: 12, name: 'Liam Scott', age: 26, city: 'Phoenix', status: 'Pending' },
    { id: 13, name: 'Mia Baker', age: 45, city: 'Philadelphia', status: 'Active' },
    { id: 14, name: 'Noah Wright', age: 20, city: 'Detroit', status: 'Inactive' },
    { id: 15, name: 'Olivia Davis', age: 37, city: 'Minneapolis', status: 'Active' },
];
const defaultColumns = [
    { header: 'ID', field: 'id', width: 80, sortable: true, filterable: true },
    { header: 'Name', field: 'name', width: 150, sortable: true, filterable: true },
    { header: 'Age', field: 'age', width: 100, sortable: true, filterable: true },
    { header: 'City', field: 'city', width: 150, sortable: true, filterable: true },
    { header: 'Status', field: 'status', width: 120, sortable: true, filterable: true },
];
const meta = {
    title: 'Components/CustomGrid',
    component: 'custom-grid',
    tags: ['autodocs'],
    argTypes: {
        data: {
            control: 'object',
            description: 'The array of data objects to display in the grid.',
        },
        columns: {
            control: 'object',
            description: 'An array defining grid columns (header, field, width, sortable, filterable, renderCell).',
        },
        rowHeight: {
            control: { type: 'range', min: 30, max: 60, step: 5 },
            description: 'The height of each row in pixels.',
        },
        headerHeight: {
            control: { type: 'range', min: 30, max: 60, step: 5 },
            description: 'The height of the header row in pixels.',
        },
        striped: {
            control: 'boolean',
            description: 'Whether to apply alternating background colors to rows.',
        },
        hoverEffect: {
            control: 'boolean',
            description: 'Whether to apply a hover effect to rows.',
        },
        resizableColumns: {
            control: 'boolean',
            description: 'Whether columns can be resized by dragging their borders.',
        },
        sortable: {
            control: 'boolean',
            description: 'Whether sorting is enabled for the grid (individual columns can override).',
        },
        filterable: {
            control: 'boolean',
            description: 'Whether filtering is enabled for the grid (individual columns can override).',
        },
        pagination: {
            control: 'boolean',
            description: 'Whether pagination is enabled for the grid.',
        },
        pageSize: {
            control: { type: 'number', min: 1, max: 20, step: 1 },
            description: 'The number of rows to display per page when pagination is enabled.',
        },
        currentPage: {
            control: { type: 'number', min: 1, max: 5, step: 1 },
            description: 'The current page number (1-indexed) for pagination.',
        },
        loading: {
            control: 'boolean',
            description: 'Whether the grid is in a loading state.',
        },
        emptyMessage: {
            control: 'text',
            description: 'Message to display when there is no data.',
        },
        columnDefaults: {
            control: 'object',
            description: 'Default properties for columns if not specified in individual column definitions.',
        },
        gridSortChange: {
            action: 'gridSortChange',
            description: "Event emitted when the grid's sort state changes.",
            control: false,
        },
        gridFilterChange: {
            action: 'gridFilterChange',
            description: "Event emitted when the grid's filter state changes.",
            control: false,
        },
        gridPageChange: {
            action: 'gridPageChange',
            description: "Event emitted when the grid's current page changes.",
            control: false,
        },
        gridRowClick: {
            action: 'gridRowClick',
            description: "Event emitted when a row is clicked.",
            control: false,
        },
    },
    render: (args) => {
        const [_, updateArgs] = useArgs();
        const handleSortChange = (e) => {
            action('gridSortChange')(e.detail);
        };
        const handleFilterChange = (e) => {
            action('gridFilterChange')(e.detail);
        };
        const handlePageChange = (e) => {
            action('gridPageChange')(e.detail);
            updateArgs({ currentPage: e.detail });
        };
        const handleRowClick = (e) => {
            action('gridRowClick')(e.detail);
        };
        return html `
      <div style="height: 400px; width: 100%;">
        <custom-grid
          .data=${args.data}
          .columns=${args.columns}
          row-height=${args.rowHeight}
          header-height=${args.headerHeight}
          ?striped=${args.striped}
          ?hover-effect=${args.hoverEffect}
          ?resizable-columns=${args.resizableColumns}
          ?sortable=${args.sortable}
          ?filterable=${args.filterable}
          ?pagination=${args.pagination}
          page-size=${args.pageSize}
          current-page=${args.currentPage}
          ?loading=${args.loading}
          empty-message=${args.emptyMessage}
          .columnDefaults=${args.columnDefaults}
          @gridSortChange=${handleSortChange}
          @gridFilterChange=${handleFilterChange}
          @gridPageChange=${handlePageChange}
          @gridRowClick=${handleRowClick}
        ></custom-grid>
      </div>
    `;
    },
};
export default meta;
export const WithPagination = {
    args: {
        data: exampleData,
        columns: defaultColumns,
        rowHeight: 40,
        headerHeight: 40,
        striped: false,
        hoverEffect: true,
        resizableColumns: false,
        sortable: false,
        filterable: false,
        loading: false,
        emptyMessage: 'No data available.',
        columnDefaults: { sortable: true, filter: 'agTextColumnFilter' },
        pagination: true,
        pageSize: 5,
        currentPage: 1,
    },
};
//# sourceMappingURL=custom-grid.stories.js.map
