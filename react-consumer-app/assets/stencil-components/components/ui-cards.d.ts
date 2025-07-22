import type { Components, JSX } from "../types/components";

interface UiCards extends Components.UiCards, HTMLElement {}
export const UiCards: {
    prototype: UiCards;
    new (): UiCards;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
