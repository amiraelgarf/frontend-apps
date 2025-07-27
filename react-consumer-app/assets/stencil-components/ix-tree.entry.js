import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-CALO0PMU.js';
import { d as dropdownController } from './dropdown-controller-D3K9vmFp.js';

/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Manually forked from https://github.com/tbranyen/hyperlist to remove
// features a direct document calls
//
// Hyperlist is licensed MIT. https://github.com/tbranyen/hyperlist
const isNumber = (input) => !Number.isNaN(Number(input));
const addClass = (element, className) => {
    element.classList.add(className);
};
class VirtualList {
    static create(element, userProvidedConfig = VirtualList.defaultConfig) {
        return new VirtualList(element, userProvidedConfig);
    }
    static mergeStyle(element, style) {
        for (let i in style) {
            if (element.style[i] !== style[i]) {
                element.style[i] = style[i];
            }
        }
    }
    static getMaxBrowserHeight() {
        // Create two elements, the wrapper is `1px` tall and is transparent and
        // positioned at the top of the page. Inside that is an element that gets
        // set to 1 billion pixels. Then reads the max height the browser can
        // calculate.
        const wrapper = document.createElement('div');
        const fixture = document.createElement('div');
        // As said above, these values get set to put the fixture elements into the
        // right visual state.
        VirtualList.mergeStyle(wrapper, {
            position: 'absolute',
            height: '1px',
            opacity: 0,
        });
        VirtualList.mergeStyle(fixture, { height: '1e7px' });
        // Add the fixture into the wrapper element.
        wrapper.appendChild(fixture);
        // Apply to the page, the values won't kick in unless this is attached.
        document.body.appendChild(wrapper);
        // Get the maximum element height in pixels.
        const maxElementHeight = fixture.offsetHeight;
        // Remove the element immediately after reading the value.
        document.body.removeChild(wrapper);
        return maxElementHeight;
    }
    constructor(element, userProvidedConfig) {
        this._lastRepaint = null;
        this._maxElementHeight = VirtualList.getMaxBrowserHeight();
        this.refresh(element, userProvidedConfig);
        const config = this._config;
        // Create internal render loop.
        const render = () => {
            const scrollTop = this._getScrollPosition();
            const lastRepaint = this._lastRepaint;
            this._renderAnimationFrame = window.requestAnimationFrame(render);
            if (scrollTop === lastRepaint) {
                return;
            }
            const diff = lastRepaint ? scrollTop - lastRepaint : 0;
            if (!lastRepaint || diff < 0 || diff > this._averageHeight) {
                let rendered = this._renderChunk();
                this._lastRepaint = scrollTop;
                if (rendered !== false && typeof config.afterRender === 'function') {
                    config.afterRender();
                }
            }
        };
        render();
    }
    destroy() {
        window.cancelAnimationFrame(this._renderAnimationFrame);
    }
    refresh(element, userProvidedConfig = VirtualList.defaultConfig) {
        this._config = userProvidedConfig;
        if (!element || element.nodeType !== 1) {
            throw new Error('HyperList requires a valid DOM Node container');
        }
        this._element = element;
        const config = this._config;
        const scroller = this._scroller ||
            config.scroller ||
            document.createElement(config.scrollerTagName || 'tr');
        // Default configuration option `useFragment` to `true`.
        if (typeof config.useFragment !== 'boolean') {
            this._config.useFragment = true;
        }
        if (!config.generate) {
            throw new Error('Missing required `generate` function');
        }
        if (!isNumber(config.total)) {
            throw new Error('Invalid required `total` value, expected number');
        }
        if (!Array.isArray(config.itemHeight) && !isNumber(config.itemHeight)) {
            throw new Error(`
        Invalid required \`itemHeight\` value, expected number or array
      `.trim());
        }
        else if (isNumber(config.itemHeight)) {
            this._itemHeights = Array(config.total).fill(config.itemHeight);
        }
        else {
            this._itemHeights = [config.itemHeight];
        }
        // Width and height should be coerced to string representations. Either in
        // `%` or `px`.
        Object.keys(VirtualList.defaultConfig)
            .filter((prop) => prop in config)
            .forEach((prop) => {
            const value = config[prop];
            const isValueNumber = isNumber(value);
            if (value && typeof value !== 'string' && typeof value !== 'number') {
                let msg = `Invalid optional \`${prop}\`, expected string or number`;
                throw new Error(msg);
            }
            else if (isValueNumber) {
                config[prop] = `${value}px`;
            }
        });
        const isHorizontal = Boolean(config.horizontal);
        const value = config[isHorizontal ? 'width' : 'height'];
        if (value) {
            const isValueNumber = isNumber(value);
            const isValuePercent = isValueNumber ? false : value.slice(-1) === '%';
            // Compute the containerHeight as number
            const numberValue = isValueNumber
                ? parseInt(value, 10)
                : parseInt(value.replace(/px|%/, ''), 10);
            const innerSize = window[isHorizontal ? 'innerWidth' : 'innerHeight'];
            if (isValuePercent) {
                this._containerSize = (innerSize * numberValue) / 100;
            }
            else {
                this._containerSize = isNumber(value) ? value : numberValue;
            }
        }
        const scrollContainer = config.scrollContainer;
        const scrollerHeight = config.itemHeight * config.total;
        const maxElementHeight = this._maxElementHeight;
        if (scrollerHeight > maxElementHeight) {
            console.warn([
                'HyperList: The maximum element height',
                maxElementHeight + 'px has',
                'been exceeded; please reduce your item height.',
            ].join(' '));
        }
        // Decorate the container element with styles that will match
        // the user supplied configuration.
        const elementStyle = {
            width: `${config.width}`,
            height: scrollContainer ? `${scrollerHeight}px` : `${config.height}`,
            overflow: scrollContainer ? 'none' : 'auto',
            position: 'relative',
        };
        VirtualList.mergeStyle(element, elementStyle);
        if (scrollContainer) {
            VirtualList.mergeStyle(config.scrollContainer, { overflow: 'auto' });
        }
        const scrollerStyle = {
            opacity: '0',
            position: 'absolute',
            [isHorizontal ? 'height' : 'width']: '1px',
            [isHorizontal ? 'width' : 'height']: `${scrollerHeight}px`,
        };
        VirtualList.mergeStyle(scroller, scrollerStyle);
        // Only append the scroller element once.
        if (!this._scroller) {
            element.appendChild(scroller);
        }
        const padding = this._computeScrollPadding();
        this._scrollPaddingBottom = padding.bottom;
        this._scrollPaddingTop = padding.top;
        // Set the scroller instance.
        this._scroller = scroller;
        this._scrollHeight = this._computeScrollHeight();
        // Reuse the item positions if refreshed, otherwise set to empty array.
        this._itemPositions = this._itemPositions || Array(config.total).fill(0);
        // Each index in the array should represent the position in the DOM.
        this._computePositions(0);
        // Render after refreshing. Force render if we're calling refresh manually.
        this._renderChunk(this._lastRepaint !== null);
        if (typeof config.afterRender === 'function') {
            config.afterRender();
        }
    }
    _getRow(i) {
        const config = this._config;
        let item = config.generate(i);
        let height = item.height;
        if (height !== undefined && isNumber(height)) {
            item = item.element;
            // The height isn't the same as predicted, compute positions again
            if (height !== this._itemHeights[i]) {
                this._itemHeights[i] = height;
                this._computePositions(i);
                this._scrollHeight = this._computeScrollHeight();
            }
        }
        else {
            height = this._itemHeights[i];
        }
        if (!item || item.nodeType !== 1) {
            throw new Error(`Generator did not return a DOM Node for index: ${i}`);
        }
        addClass(item, config.rowClassName || 'vrow');
        const top = this._itemPositions[i] + this._scrollPaddingTop;
        VirtualList.mergeStyle(item, {
            position: 'absolute',
            [config.horizontal ? 'left' : 'top']: `${top}px`,
        });
        return item;
    }
    _getScrollPosition() {
        const config = this._config;
        if (typeof config.overrideScrollPosition === 'function') {
            return config.overrideScrollPosition();
        }
        return this._element[config.horizontal ? 'scrollLeft' : 'scrollTop'];
    }
    _renderChunk(force = false) {
        const config = this._config;
        const element = this._element;
        const scrollTop = this._getScrollPosition();
        const total = config.total;
        let from = this._getFrom(scrollTop) - 1;
        if (from < 0 || from - this._screenItemsLen < 0) {
            from = 0;
        }
        if (!force && this._lastFrom === from) {
            return false;
        }
        this._lastFrom = from;
        let to = from + this._cachedItemsLen;
        if (to > total || to + this._cachedItemsLen > total) {
            to = total;
        }
        // Append all the new rows in a document fragment that we will later append
        // to the parent node
        const fragment = config.useFragment
            ? document.createDocumentFragment()
            : [
            // Sometimes you'll pass fake elements to this tool and Fragments require
            // real elements.
            ];
        // The element that forces the container to scroll.
        const scroller = this._scroller;
        // Keep the scroller in the list of children.
        fragment[config.useFragment ? 'appendChild' : 'push'](scroller);
        for (let i = from; i < to; i++) {
            let row = this._getRow(i);
            fragment[config.useFragment ? 'appendChild' : 'push'](row);
        }
        if (config.applyPatch) {
            return config.applyPatch(element, fragment);
        }
        element.innerHTML = '';
        element.appendChild(fragment);
    }
    _computePositions(from = 1) {
        const config = this._config;
        const total = config.total;
        if (from < 1) {
            from = 1;
        }
        for (let i = from; i < total; i++) {
            this._itemPositions[i] =
                this._itemHeights[i - 1] + this._itemPositions[i - 1];
        }
    }
    _computeScrollHeight() {
        const config = this._config;
        const isHorizontal = Boolean(config.horizontal);
        const total = config.total;
        const scrollHeight = this._itemHeights.reduce((a, b) => a + b, 0) +
            this._scrollPaddingBottom +
            this._scrollPaddingTop;
        VirtualList.mergeStyle(this._scroller, {
            opacity: 0,
            position: 'absolute',
            top: '0px',
            [isHorizontal ? 'height' : 'width']: '1px',
            [isHorizontal ? 'width' : 'height']: `${scrollHeight}px`,
        });
        // Calculate the height median
        const sortedItemHeights = this._itemHeights.slice(0).sort((a, b) => a - b);
        const middle = Math.floor(total / 2);
        const averageHeight = total % 2 === 0
            ? (sortedItemHeights[middle] + sortedItemHeights[middle - 1]) / 2
            : sortedItemHeights[middle];
        const clientProp = isHorizontal ? 'clientWidth' : 'clientHeight';
        const element = config.scrollContainer
            ? config.scrollContainer
            : this._element;
        const containerHeight = element[clientProp]
            ? element[clientProp]
            : this._containerSize;
        this._screenItemsLen = Math.ceil(containerHeight / averageHeight);
        this._containerSize = containerHeight;
        // Cache 3 times the number of items that fit in the container viewport.
        this._cachedItemsLen = Math.max(this._cachedItemsLen || 0, this._screenItemsLen * 3);
        this._averageHeight = averageHeight;
        return scrollHeight;
    }
    _computeScrollPadding() {
        const config = this._config;
        const isHoriz = Boolean(config.horizontal);
        const styles = window.getComputedStyle(this._element);
        const padding = (location) => {
            const cssValue = styles.getPropertyValue(`padding-${location}`);
            return parseInt(cssValue, 10) || 0;
        };
        if (isHoriz) {
            return {
                bottom: padding('right'),
                top: padding('left'),
            };
        }
        else {
            return {
                bottom: padding('bottom'),
                top: padding('top'),
            };
        }
    }
    _getFrom(scrollTop) {
        let i = 0;
        while (this._itemPositions[i] < scrollTop) {
            i++;
        }
        return i;
    }
}
VirtualList.defaultConfig = {
    width: '100%',
    height: '100%',
};

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function renderDefaultItem(item, context, update) {
    const el = document.createElement('ix-tree-item');
    el.hasChildren = item.hasChildren;
    el.context = context;
    el.text = item.data.name;
    update((updateTreeItem) => {
        el.text = updateTreeItem.data.name;
    });
    return el;
}

const treeCss = ":host{display:block}";

const Tree = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.contextChange = createEvent(this, "contextChange", 7);
        this.nodeToggled = createEvent(this, "nodeToggled", 7);
        this.nodeClicked = createEvent(this, "nodeClicked", 7);
        this.nodeRemoved = createEvent(this, "nodeRemoved", 7);
        this.model = {};
        this.context = {};
        this.updates = new Map();
        this.hasFirstRender = false;
    }
    updatePadding(element, item) {
        element.style.paddingLeft = item.level + 'rem';
    }
    getVirtualizerOptions() {
        const list = this.buildTreeList(this.model[this.root]);
        return {
            width: '100%',
            height: '100%',
            itemHeight: 32,
            total: list.length,
            generate: (index) => {
                const item = list[index];
                const renderedTreeItem = this.hostElement.querySelector(`[data-tree-node-id="${item.id}"]`);
                const context = this.getContext(item.id);
                if (renderedTreeItem) {
                    renderedTreeItem.hasChildren = item.hasChildren;
                    renderedTreeItem.context = Object.assign({}, context);
                    if (this.updates.has(item.id)) {
                        const doUpdate = this.updates.get(item.id);
                        if (doUpdate) {
                            doUpdate(item, Object.assign({}, this.context));
                        }
                    }
                    this.updatePadding(renderedTreeItem, item);
                    return renderedTreeItem;
                }
                const update = (callback) => {
                    this.updates.set(item.id, callback);
                };
                let innerElement = null;
                if (this.renderItem) {
                    innerElement = this.renderItem(index, item, list, Object.assign({}, this.context), update);
                }
                if (innerElement === null) {
                    innerElement = renderDefaultItem(item, context, update);
                }
                const el = innerElement;
                el.setAttribute('data-tree-node-id', item.id);
                el.style.paddingRight = '1rem';
                this.updatePadding(el, item);
                return el;
            },
        };
    }
    setContext(id, context) {
        this.context = Object.assign(Object.assign({}, this.context), { [id]: context });
        this.contextChange.emit(this.context);
    }
    getContext(id) {
        if (!this.context) {
            return {
                isExpanded: false,
                isSelected: false,
            };
        }
        if (!this.context[id]) {
            this.context[id] = {
                isExpanded: false,
                isSelected: false,
            };
        }
        return this.context[id];
    }
    buildTreeList(root, level = 0) {
        const itemList = [];
        if (root === null || root === void 0 ? void 0 : root.hasChildren) {
            const newLevel = level + 1;
            root.children.forEach((id) => {
                const item = this.model[id];
                const context = this.getContext(id);
                itemList.push(Object.assign(Object.assign({}, item), { level }));
                if (item.hasChildren && context.isExpanded) {
                    itemList.push(...this.buildTreeList(item, newLevel));
                }
            });
        }
        return itemList;
    }
    componentDidLoad() {
        this.initList();
        this.observer = new MutationObserver((records) => {
            let removed = [];
            records.forEach((record) => {
                removed = [...removed, ...Array.from(record.removedNodes)];
                record.addedNodes.forEach((an) => {
                    const index = removed.indexOf(an);
                    if (index >= 0) {
                        removed.splice(index, 1);
                    }
                });
            });
            this.nodeRemoved.emit(removed);
        });
        this.observer.observe(this.hostElement, {
            childList: true,
        });
    }
    componentWillRender() {
        this.hasFirstRender = true;
        if (this.isListInitialized()) {
            this.refreshList();
        }
        else {
            this.initList();
        }
    }
    connectedCallback() {
        if (this.hasFirstRender) {
            this.initList();
        }
    }
    disconnectedCallback() {
        var _a, _b;
        (_a = this.hyperlist) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = this.observer) === null || _b === void 0 ? void 0 : _b.disconnect();
    }
    modelChange() {
        if (this.hasFirstRender && !this.isListInitialized()) {
            this.initList();
        }
    }
    isListInitialized() {
        var _a;
        const itemPositions = (_a = this.hyperlist) === null || _a === void 0 ? void 0 : _a._itemPositions;
        return (itemPositions !== undefined &&
            itemPositions.length &&
            !(itemPositions === null || itemPositions === void 0 ? void 0 : itemPositions.some((item) => item === undefined || Number.isNaN(item))));
    }
    refreshList() {
        if (this.hyperlist) {
            this.hyperlist.refresh(this.hostElement, this.getVirtualizerOptions());
        }
    }
    initList() {
        var _a;
        if (!this.model) {
            return;
        }
        (_a = this.hyperlist) === null || _a === void 0 ? void 0 : _a.destroy();
        const config = this.getVirtualizerOptions();
        this.hyperlist = new VirtualList(this.hostElement, config);
    }
    onToggle(event) {
        const { target } = event;
        event.preventDefault();
        event.stopPropagation();
        if (!(target instanceof HTMLElement)) {
            return;
        }
        const id = target.getAttribute('data-tree-node-id');
        if (!id) {
            return;
        }
        const item = this.model[id];
        if (!item.hasChildren) {
            return;
        }
        const context = this.getContext(id);
        context.isExpanded = !context.isExpanded;
        this.nodeToggled.emit({ id, isExpanded: context.isExpanded });
        this.setContext(id, context);
    }
    onTreeItemClick(event) {
        const { target } = event;
        if (!(target instanceof HTMLElement)) {
            return;
        }
        const id = target.getAttribute('data-tree-node-id');
        if (!id) {
            return;
        }
        const item = this.model[id];
        const path = event.composedPath();
        const treeIndex = path.indexOf(this.hostElement);
        const treePath = path.slice(0, treeIndex);
        const hasTrigger = dropdownController.pathIncludesTrigger(treePath);
        if (hasTrigger) {
            return;
        }
        if (!event.defaultPrevented) {
            Object.values(this.context).forEach((c) => (c.isSelected = false));
            const context = this.getContext(id);
            context.isSelected = true;
            this.setContext(id, context);
        }
        if (this.toggleOnItemClick && item.hasChildren) {
            const context = this.getContext(id);
            context.isExpanded = !context.isExpanded;
            this.nodeToggled.emit({
                id: id,
                isExpanded: context.isExpanded,
            });
            this.setContext(id, context);
        }
        this.nodeClicked.emit(id);
    }
    render() {
        return (h(Host, { key: '334ea5dcb9482db02edbde78d1129e34b4c10988', onClick: (event) => this.onTreeItemClick(event) }, h("slot", { key: '672d437ccefd8e58cef11ac61c166bf3e51369ba' })));
    }
    get hostElement() { return getElement(this); }
    static get watchers() { return {
        "model": ["modelChange"]
    }; }
};
Tree.style = treeCss;

export { Tree as ix_tree };
//# sourceMappingURL=ix-tree.entry.js.map

//# sourceMappingURL=ix-tree.entry.js.map