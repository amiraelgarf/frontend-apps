import type { Components, JSX } from "../types/components";

interface MyDropdownMenu extends Components.MyDropdownMenu, HTMLElement {}
export const MyDropdownMenu: {
    prototype: MyDropdownMenu;
    new (): MyDropdownMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
