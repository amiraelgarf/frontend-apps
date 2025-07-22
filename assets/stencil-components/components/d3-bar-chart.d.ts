import type { Components, JSX } from "../types/components";

interface D3BarChart extends Components.D3BarChart, HTMLElement {}
export const D3BarChart: {
    prototype: D3BarChart;
    new (): D3BarChart;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
