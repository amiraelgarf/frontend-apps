import type { Components, JSX } from "../types/components";

interface CustomGrid extends Components.CustomGrid, HTMLElement {}
export const CustomGrid: {
    prototype: CustomGrid;
    new (): CustomGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
