import type { Components, JSX } from "../types/components";

interface MultiAxisChart extends Components.MultiAxisChart, HTMLElement {}
export const MultiAxisChart: {
    prototype: MultiAxisChart;
    new (): MultiAxisChart;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
