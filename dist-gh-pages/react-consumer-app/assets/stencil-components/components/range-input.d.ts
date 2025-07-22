import type { Components, JSX } from "../types/components";

interface RangeInput extends Components.RangeInput, HTMLElement {}
export const RangeInput: {
    prototype: RangeInput;
    new (): RangeInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
