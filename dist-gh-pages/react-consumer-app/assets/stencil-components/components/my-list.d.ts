import type { Components, JSX } from "../types/components";

interface MyList extends Components.MyList, HTMLElement {}
export const MyList: {
    prototype: MyList;
    new (): MyList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
