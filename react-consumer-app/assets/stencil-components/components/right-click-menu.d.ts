import type { Components, JSX } from "../types/components";

interface RightClickMenu extends Components.RightClickMenu, HTMLElement {}
export const RightClickMenu: {
    prototype: RightClickMenu;
    new (): RightClickMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
