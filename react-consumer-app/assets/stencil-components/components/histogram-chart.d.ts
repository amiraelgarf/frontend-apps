import type { Components, JSX } from "../types/components";

interface HistogramChart extends Components.HistogramChart, HTMLElement {}
export const HistogramChart: {
    prototype: HistogramChart;
    new (): HistogramChart;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
