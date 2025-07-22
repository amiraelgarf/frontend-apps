import type { Components, JSX } from "../types/components";

interface CheckboxInput extends Components.CheckboxInput, HTMLElement {}
export const CheckboxInput: {
    prototype: CheckboxInput;
    new (): CheckboxInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
