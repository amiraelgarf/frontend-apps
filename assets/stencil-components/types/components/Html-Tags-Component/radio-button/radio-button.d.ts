import { EventEmitter } from '../../../stencil-public-runtime';
export declare class RadioButton {
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
