export declare class UiNotification {
    type: 'success' | 'error' | 'info' | 'warning';
    placement: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    header: string;
    content: string;
    render(): any;
}
