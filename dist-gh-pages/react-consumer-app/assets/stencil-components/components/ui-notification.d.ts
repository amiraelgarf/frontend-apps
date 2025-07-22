import type { Components, JSX } from "../types/components";

interface UiNotification extends Components.UiNotification, HTMLElement {}
export const UiNotification: {
    prototype: UiNotification;
    new (): UiNotification;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
