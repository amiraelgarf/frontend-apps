import type { Components, JSX } from "../types/components";

interface MyTextField extends Components.MyTextField, HTMLElement {}
export const MyTextField: {
    prototype: MyTextField;
    new (): MyTextField;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
