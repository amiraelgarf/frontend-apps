/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'custom-frontend-library';


@ProxyCmp({
  inputs: ['bubbleData', 'myHeight', 'myTitle', 'myWidth', 'xTitle', 'yTitle']
})
@Component({
  selector: 'bubble-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bubbleData', 'myHeight', 'myTitle', 'myWidth', 'xTitle', 'yTitle'],
  standalone: false
})
export class BubbleChart {
  protected el: HTMLBubbleChartElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BubbleChart extends Components.BubbleChart {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'label', 'name', 'value']
})
@Component({
  selector: 'checkbox-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'label', 'name', 'value'],
  standalone: false
})
export class CheckboxInput {
  protected el: HTMLCheckboxInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myChange']);
  }
}


export declare interface CheckboxInput extends Components.CheckboxInput {
  /**
   * Event emitted when the checkbox's checked state changes.
   */
  myChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['columnDefaults', 'columns', 'currentPage', 'data', 'emptyMessage', 'filterable', 'headerHeight', 'hoverEffect', 'loading', 'pageSize', 'pagination', 'resizableColumns', 'rowHeight', 'sortable', 'striped']
})
@Component({
  selector: 'custom-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['columnDefaults', 'columns', 'currentPage', 'data', 'emptyMessage', 'filterable', 'headerHeight', 'hoverEffect', 'loading', 'pageSize', 'pagination', 'resizableColumns', 'rowHeight', 'sortable', 'striped'],
  standalone: false
})
export class CustomGrid {
  protected el: HTMLCustomGridElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gridSortChange', 'gridFilterChange', 'gridPageChange', 'gridRowClick']);
  }
}


export declare interface CustomGrid extends Components.CustomGrid {

  gridSortChange: EventEmitter<CustomEvent<any>>;

  gridFilterChange: EventEmitter<CustomEvent<any>>;

  gridPageChange: EventEmitter<CustomEvent<number>>;

  gridRowClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['chartData', 'height', 'width']
})
@Component({
  selector: 'd3-bar-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['chartData', 'height', 'width'],
  standalone: false
})
export class D3BarChart {
  protected el: HTMLD3BarChartElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface D3BarChart extends Components.D3BarChart {}


@ProxyCmp({
  inputs: ['disabled', 'label', 'max', 'min', 'name', 'value']
})
@Component({
  selector: 'date-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', { name: 'label', required: true }, 'max', 'min', { name: 'name', required: true }, 'value'],
  standalone: false
})
export class DateInput {
  protected el: HTMLDateInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myChange']);
  }
}


export declare interface DateInput extends Components.DateInput {
  /**
   * Event emitted when the input value changes.
   */
  myChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['cols', 'rows']
})
@Component({
  selector: 'heat-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['cols', 'rows'],
  standalone: false
})
export class HeatMap {
  protected el: HTMLHeatMapElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface HeatMap extends Components.HeatMap {}


@ProxyCmp({
  inputs: ['binCount', 'data', 'myHight', 'myWidth', 'nameOfChart']
})
@Component({
  selector: 'histogram-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['binCount', 'data', 'myHight', 'myWidth', 'nameOfChart'],
  standalone: false
})
export class HistogramChart {
  protected el: HTMLHistogramChartElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface HistogramChart extends Components.HistogramChart {}


@ProxyCmp({
  inputs: ['categories', 'data']
})
@Component({
  selector: 'line-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['categories', 'data'],
  standalone: false
})
export class LineChart {
  protected el: HTMLLineChartElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface LineChart extends Components.LineChart {}


@ProxyCmp({
  inputs: ['categories', 'chartHeight', 'chartTitle', 'colors', 'series', 'yAxes']
})
@Component({
  selector: 'multi-axis-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [{ name: 'categories', required: true }, 'chartHeight', 'chartTitle', 'colors', { name: 'series', required: true }, { name: 'yAxes', required: true }],
  standalone: false
})
export class MultiAxisChart {
  protected el: HTMLMultiAxisChartElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MultiAxisChart extends Components.MultiAxisChart {}


@ProxyCmp({
  inputs: ['disabled', 'label', 'size', 'variant']
})
@Component({
  selector: 'my-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', { name: 'label', required: true }, 'size', 'variant'],
  standalone: false
})
export class MyButton {
  protected el: HTMLMyButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myClick']);
  }
}


export declare interface MyButton extends Components.MyButton {
  /**
   * Event emitted when the button is clicked
   */
  myClick: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['options', 'theme', 'valeOfEachOption', 'variantSize']
})
@Component({
  selector: 'my-dropdown-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['options', 'theme', 'valeOfEachOption', 'variantSize'],
  standalone: false
})
export class MyDropdownMenu {
  protected el: HTMLMyDropdownMenuElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyDropdownMenu extends Components.MyDropdownMenu {}


@ProxyCmp({
  inputs: ['direction', 'items', 'spaceBetweenItems', 'theme', 'wrap']
})
@Component({
  selector: 'my-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['direction', 'items', 'spaceBetweenItems', 'theme', 'wrap'],
  standalone: false
})
export class MyList {
  protected el: HTMLMyListElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyList extends Components.MyList {}


@ProxyCmp({
  inputs: ['ColorOfLable', 'IsRequeredToFill', 'Theme', 'disable', 'lablelText', 'size', 'textInPlaceholder', 'variantSize']
})
@Component({
  selector: 'my-text-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['ColorOfLable', 'IsRequeredToFill', 'Theme', 'disable', 'lablelText', 'size', 'textInPlaceholder', 'variantSize'],
  standalone: false
})
export class MyTextField {
  protected el: HTMLMyTextFieldElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyTextField extends Components.MyTextField {}


@ProxyCmp({
  inputs: ['max', 'min', 'value']
})
@Component({
  selector: 'number-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['max', 'min', 'value'],
  standalone: false
})
export class NumberInput {
  protected el: HTMLNumberInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface NumberInput extends Components.NumberInput {

  valueChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['data']
})
@Component({
  selector: 'pie-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['data'],
  standalone: false
})
export class PieChart {
  protected el: HTMLPieChartElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PieChart extends Components.PieChart {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'label', 'name', 'value']
})
@Component({
  selector: 'radio-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', { name: 'label', required: true }, { name: 'name', required: true }, { name: 'value', required: true }],
  standalone: false
})
export class RadioButton {
  protected el: HTMLRadioButtonElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myChange']);
  }
}


export declare interface RadioButton extends Components.RadioButton {
  /**
   * Event emitted when the radio button's checked state changes.
   */
  myChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['disabled', 'label', 'max', 'min', 'name', 'step', 'value']
})
@Component({
  selector: 'range-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', { name: 'label', required: true }, 'max', 'min', { name: 'name', required: true }, 'step', 'value'],
  standalone: false
})
export class RangeInput {
  protected el: HTMLRangeInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myChange']);
  }
}


export declare interface RangeInput extends Components.RangeInput {
  /**
   * Event emitted when the input value changes.
   */
  myChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['theItems']
})
@Component({
  selector: 'right-click-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['theItems'],
  standalone: false
})
export class RightClickMenu {
  protected el: HTMLRightClickMenuElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RightClickMenu extends Components.RightClickMenu {}


@ProxyCmp({
  inputs: ['colorOfPoint', 'data', 'myHight', 'myWidth', 'nameOfSactter', 'xTicks', 'xTitle', 'yTicks', 'yTitle']
})
@Component({
  selector: 'scatter-plot',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['colorOfPoint', 'data', 'myHight', 'myWidth', 'nameOfSactter', 'xTicks', 'xTitle', 'yTicks', 'yTitle'],
  standalone: false
})
export class ScatterPlot {
  protected el: HTMLScatterPlotElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ScatterPlot extends Components.ScatterPlot {}


@ProxyCmp({
  inputs: ['placeholder', 'value']
})
@Component({
  selector: 'text-area',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['placeholder', 'value'],
  standalone: false
})
export class TextArea {
  protected el: HTMLTextAreaElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface TextArea extends Components.TextArea {

  valueChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['disabled', 'label', 'max', 'min', 'name', 'step', 'value']
})
@Component({
  selector: 'time-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', { name: 'label', required: true }, 'max', 'min', { name: 'name', required: true }, 'step', 'value'],
  standalone: false
})
export class TimeInput {
  protected el: HTMLTimeInputElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['myChange']);
  }
}


export declare interface TimeInput extends Components.TimeInput {
  /**
   * Event emitted when the input value changes.
   */
  myChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['cardTitle']
})
@Component({
  selector: 'ui-cards',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['cardTitle'],
  standalone: false
})
export class UiCards {
  protected el: HTMLUiCardsElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiCards extends Components.UiCards {}


@ProxyCmp({
  inputs: ['content', 'header', 'placement', 'type']
})
@Component({
  selector: 'ui-notification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['content', 'header', 'placement', 'type'],
  standalone: false
})
export class UiNotification {
  protected el: HTMLUiNotificationElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface UiNotification extends Components.UiNotification {}


