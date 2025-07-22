import type { Meta, StoryObj } from '@storybook/web-components';
declare const meta: Meta;
export default meta;
type PieChartData = {
    label: string;
    value: number;
};
type Story = StoryObj<{
    data: PieChartData[];
}>;
export declare const Default: Story;
