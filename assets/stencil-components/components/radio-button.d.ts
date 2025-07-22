import type { Components, JSX } from "../types/components";

interface RadioButton extends Components.RadioButton, HTMLElement {}
export const RadioButton: {
    prototype: RadioButton;
    new (): RadioButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
