import { EventEmitter } from '../../../stencil-public-runtime';
export declare class TextArea {
    placeholder: string;
    value: string;
    valueChange: EventEmitter<string>;
    internalValue: string;
    componentWillLoad(): void;
    valueChanged(newValue: string): void;
    handleInput: (event: Event) => void;
    render(): any;
}
