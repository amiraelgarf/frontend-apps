import type { Components, JSX } from "../types/components";

interface DateInput extends Components.DateInput, HTMLElement {}
export const DateInput: {
    prototype: DateInput;
    new (): DateInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
