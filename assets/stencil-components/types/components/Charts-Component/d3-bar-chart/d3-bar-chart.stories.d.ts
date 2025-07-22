import type { Meta, StoryObj } from '@storybook/web-components';
interface ChartData {
    name: string;
    value: number;
}
interface D3BarChartProps {
    chartData: ChartData[];
    width: number;
    height: number;
}
declare const meta: Meta<D3BarChartProps>;
export default meta;
export declare const Default: StoryObj<D3BarChartProps>;
export declare const FewerDataPoints: StoryObj<D3BarChartProps>;
export declare const MoreDataPoints: StoryObj<D3BarChartProps>;
export declare const FixedSize: StoryObj<D3BarChartProps>;
export declare const LowValues: StoryObj<D3BarChartProps>;
export declare const MixedValues: StoryObj<D3BarChartProps>;
export declare const NoData: StoryObj<D3BarChartProps>;
