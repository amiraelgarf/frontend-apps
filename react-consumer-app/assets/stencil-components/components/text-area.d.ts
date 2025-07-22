import type { Components, JSX } from "../types/components";

interface TextArea extends Components.TextArea, HTMLElement {}
export const TextArea: {
    prototype: TextArea;
    new (): TextArea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
