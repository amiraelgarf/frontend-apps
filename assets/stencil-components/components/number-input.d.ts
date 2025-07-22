import type { Components, JSX } from "../types/components";

interface NumberInput extends Components.NumberInput, HTMLElement {}
export const NumberInput: {
    prototype: NumberInput;
    new (): NumberInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
