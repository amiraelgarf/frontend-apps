import { html } from "lit";
const meta = {
    title: 'Components/Card',
    component: 'ui-cards',
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: 'The title displayed in the card header',
        },
    },
    render: (args) => html `
  <ui-cards .title=${args.title}>
    <p>This is sample content inside the card.</p>
  </ui-cards>
`,
};
export default meta;
export const WithTitle = {
    args: {
        title: 'Card Header',
    },
};
export const NoTitle = {
    args: {
        title: '',
    },
};
//# sourceMappingURL=ui-cards.stories.js.map
