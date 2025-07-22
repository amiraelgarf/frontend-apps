import { EventEmitter } from '../../../stencil-public-runtime';
export declare class TimeInput {
    name: string;
    label: string;
    value: string;
    min?: string;
    max?: string;
    step?: number;
    disabled: boolean;
    myChange: EventEmitter<string> | undefined;
    private handleChange;
    render(): any;
}
