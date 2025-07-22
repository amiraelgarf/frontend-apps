import type { Components, JSX } from "../types/components";

interface BubbleChart extends Components.BubbleChart, HTMLElement {}
export const BubbleChart: {
    prototype: BubbleChart;
    new (): BubbleChart;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
