import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CheckboxInput {
    name: string;
    value: string;
    label: string;
    checked: boolean;
    disabled: boolean;
    myChange: EventEmitter<{
        value: string;
        checked: boolean;
    }> | undefined;
    private handleChange;
    render(): any;
}
