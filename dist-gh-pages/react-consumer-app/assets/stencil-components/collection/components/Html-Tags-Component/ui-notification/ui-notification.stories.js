import { html } from "lit";
const meta = {
    title: 'Components/UiNotification',
    component: 'ui-notification',
    argTypes: {
        type: {
            control: 'select',
            options: ['success', 'error', 'info', 'warning'],
        },
        placement: {
            control: 'select',
            options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
        },
        header: { control: 'text' },
        content: { control: 'text' },
    },
};
export default meta;
export const Default = {
    args: {
        type: "error",
        placement: 'top-right',
        header: 'Info',
        content: "yes",
    },
    render: ({ type, placement, header, content }) => html `
    <ui-notification
      type=${type}
      placement=${placement}
      header=${header}
      content=${content}
    ></ui-notification>
  `,
};
//# sourceMappingURL=ui-notification.stories.js.map
