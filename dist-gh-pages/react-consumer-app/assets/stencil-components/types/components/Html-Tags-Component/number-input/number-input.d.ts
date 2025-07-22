import { EventEmitter } from '../../../stencil-public-runtime';
export declare class NumberInput {
    value: number;
    min: number;
    max: number;
    valueChange: EventEmitter<number> | undefined;
    handleInput: (event: Event) => void;
    render(): any;
}
