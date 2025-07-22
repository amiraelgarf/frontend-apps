import { EventEmitter } from '../../../stencil-public-runtime';
export declare class RangeInput {
    name: string;
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    disabled: boolean;
    myChange: EventEmitter<number> | undefined;
    private handleChange;
    render(): any;
}
