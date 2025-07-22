import type { Components, JSX } from "../types/components";

interface TimeInput extends Components.TimeInput, HTMLElement {}
export const TimeInput: {
    prototype: TimeInput;
    new (): TimeInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
