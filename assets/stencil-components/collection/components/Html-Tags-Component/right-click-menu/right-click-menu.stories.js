import { html } from "lit";
import { spreadProps } from "@open-wc/lit-helpers";
const meta = {
    title: 'Components/RightClickMenu',
    component: 'right-click-menu',
    tags: ['autodocs'],
    argTypes: {
        theItems: {
            control: 'object',
            description: 'Array of menu items to display',
            table: {
                type: { summary: 'DataItem[]' },
                defaultValue: { summary: '[]' },
            },
        },
    },
    render: (args) => html `<right-click-menu ${spreadProps(args)}></right-click-menu>`,
    parameters: {
        layout: 'fullscreen',
    },
};
export default meta;
export const DefaultMenu = {
    args: {
        theItems: [
            { idItem: 'edit', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=E', textData: 'Edit', functionality: () => console.log('Edit clicked!') },
            { idItem: 'rename', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=R', textData: 'Rename', functionality: () => console.log('Rename clicked!') },
            { isDivisor: true },
            { idItem: 'copy', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=C', textData: 'Copy', functionality: () => console.log('Copy clicked!') },
            { idItem: 'paste', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=P', textData: 'Paste', functionality: () => console.log('Paste clicked!') },
            { isDivisor: true },
            { idItem: 'delete', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=D', textData: 'Delete', functionality: () => console.log('Delete clicked!') },
        ],
    },
};
export const MenuWithSubmenus = {
    args: {
        theItems: [
            { idItem: 'file', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=F', textData: 'File', hasChildren: true, children: [
                    { idItem: 'new', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=N', textData: 'New', functionality: () => console.log('New File!') },
                    { idItem: 'open', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=O', textData: 'Open', functionality: () => console.log('Open File!') },
                    { isDivisor: true },
                    { idItem: 'save', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=S', textData: 'Save', functionality: () => console.log('Save File!') },
                ] },
            { idItem: 'edit', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=E', textData: 'Edit', hasChildren: true, children: [
                    { idItem: 'cut', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=C', textData: 'Cut', functionality: () => console.log('Cut!') },
                    { idItem: 'copy', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=C', data: 'Copy', functionality: () => console.log('Copy!') },
                    { idItem: 'paste', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=P', textData: 'Paste', functionality: () => console.log('Paste!') },
                ] },
            { isDivisor: true },
            { idItem: 'help', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=?', textData: 'Help', functionality: () => console.log('Help clicked!') },
        ],
    },
};
export const MenuWithFunctionality = {
    args: {
        theItems: [
            { idItem: 'log', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=L', textData: 'Log to Console', functionality: () => console.log('Console log action triggered!') },
            { idItem: 'alert', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=A', textData: 'Show Console Message', functionality: () => console.log('This is a message from the menu!') },
            { isDivisor: true },
            { idItem: 'changeText', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=T', textData: 'Change Page Text', functionality: () => {
                    const container = document.querySelector('.story-container');
                    if (container) {
                        container.textContent = `Text changed at ${new Date().toLocaleTimeString()}!`;
                    }
                } },
        ],
    },
};
export const MenuWithMissingIcons = {
    args: {
        theItems: [
            { idItem: 'icon1', iconImage: 'invalid-path.png', textData: 'Missing Icon 1', functionality: () => console.log('Clicked missing icon 1') },
            { idItem: 'icon2', iconImage: 'another-bad-path.jpg', textData: 'Missing Icon 2', functionality: () => console.log('Clicked missing icon 2') },
            { isDivisor: true },
            { idItem: 'validIcon', iconImage: 'https://placehold.co/20x20/cccccc/000000?text=V', textData: 'Valid Icon', functionality: () => console.log('Clicked valid icon') },
        ],
    },
};
//# sourceMappingURL=right-click-menu.stories.js.map
