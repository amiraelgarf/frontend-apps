import { EventEmitter } from '../../../stencil-public-runtime';
export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'small' | 'medium' | 'large';
export declare class MyButton {
    label: string;
    variant: ButtonVariant;
    size: ButtonSize;
    disabled: boolean;
    myClick: EventEmitter<void> | undefined;
    private handleClick;
    render(): any;
}
