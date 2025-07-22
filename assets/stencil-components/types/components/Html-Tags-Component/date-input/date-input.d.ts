import { EventEmitter } from '../../../stencil-public-runtime';
export declare class DateInput {
    name: string;
    label: string;
    value: string;
    min?: string;
    max?: string;
    disabled: boolean;
    myChange: EventEmitter<string> | undefined;
    private handleChange;
    render(): any;
}
