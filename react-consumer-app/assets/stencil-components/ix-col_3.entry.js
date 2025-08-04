import { r as registerInstance, f as forceUpdate, h, H as Host } from './index-DcMv3VsE.js';
import { m as matchBreakpoint } from './breakpoints-D6vSVaHq.js';

const colCss = ":host{position:relative;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:1px;padding:calc(var(--ix-layout-grid-gutter) * 0.5)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}@-moz-document url-prefix(){:host *{scrollbar-color:var(--theme-scrollbar-thumb--background) var(--theme-scrollbar-track--background);scrollbar-width:thin}}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";

const Col = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    onResize() {
        forceUpdate(this);
    }
    getSize(breakpoint) {
        if (breakpoint === '') {
            return this.size;
        }
        if (breakpoint === 'sm') {
            return this.sizeSm;
        }
        if (breakpoint === 'md') {
            return this.sizeMd;
        }
        if (breakpoint === 'lg') {
            return this.sizeLg;
        }
    }
    getColumnSize() {
        let size;
        Col.Breakpoints.forEach((breakpoint) => {
            const isMediaQueryActive = breakpoint !== '' ? matchBreakpoint(breakpoint) : true;
            if (!isMediaQueryActive) {
                return;
            }
            const currentSize = this.getSize(breakpoint);
            if (currentSize) {
                size = currentSize;
            }
        });
        return size;
    }
    getColumnSizeStyling() {
        const size = this.getColumnSize();
        if (!size) {
            return;
        }
        if (size === 'auto') {
            return {
                flex: '0 0 auto',
                width: 'auto',
                'max-width': 'auto',
            };
        }
        const colSize = `calc(calc(${size} / var(--ix-layout-grid-columns)) * 100%)`;
        return {
            flex: `0 0 ${colSize}`,
            width: `${colSize}`,
            'max-width': `${colSize}`,
        };
    }
    render() {
        return (h(Host, { key: 'c079ab348a6cdc2a541a589b3b420d017168b650', style: Object.assign({}, this.getColumnSizeStyling()) }, h("slot", { key: 'd547e6ec36b0e50394f8f75d18e3d4ab62e1110e' })));
    }
};
Col.Breakpoints = ['', 'sm', 'md', 'lg'];
Col.style = colCss;

const layoutGridCss = ":host{--ix-layout-grid-gutter:24px;display:block;flex:1 1 0%;width:100%;padding-left:calc(var(--ix-layout-grid-gutter) * 0.5);padding-right:calc(var(--ix-layout-grid-gutter) * 0.5)}:host(.no-margin){padding-left:0;padding-right:0}";

const LayoutGrid = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.noMargin = false;
        this.gap = '24';
        this.columns = 12;
    }
    render() {
        return (h(Host, { key: 'd40e8aced8025bbe08dd872852003bcc29c03dac', class: {
                'no-margin': this.noMargin,
            }, style: {
                '--ix-layout-grid-columns': `${this.columns}`,
                '--ix-layout-grid-gutter': `${this.gap}px`,
            } }, h("slot", { key: 'cec24b350d29b7e30e73d408ad15887951f30184' })));
    }
};
LayoutGrid.style = layoutGridCss;

const rowCss = ":host{display:flex;flex-wrap:wrap}:host(:not(:first-of-type)){margin-block-start:var(--ix-layout-grid-row-margin, 0)}";

const Row = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'd196cf5b6609b66fd1d8e60175373e6463faec5c' }, h("slot", { key: 'cd5208fe0e779fb69579e8f9bbc1af21572d8bbc' })));
    }
};
Row.style = rowCss;

export { Col as ix_col, LayoutGrid as ix_layout_grid, Row as ix_row };
//# sourceMappingURL=ix-col.ix-layout-grid.ix-row.entry.js.map

//# sourceMappingURL=ix-col_3.entry.js.map