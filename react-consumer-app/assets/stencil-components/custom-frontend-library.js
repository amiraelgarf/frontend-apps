import { p as promiseResolve, b as bootstrapLazy } from './index-crweC_lX.js';
export { s as setNonce } from './index-crweC_lX.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.36.0 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["checkbox-input_9",[[1,"checkbox-input",{"name":[1],"value":[1],"label":[1],"checked":[1540],"disabled":[4]}],[0,"custom-grid",{"data":[16],"columns":[16],"rowHeight":[2,"row-height"],"headerHeight":[2,"header-height"],"striped":[4],"hoverEffect":[4,"hover-effect"],"resizableColumns":[4,"resizable-columns"],"sortable":[4],"filterable":[4],"pagination":[4],"pageSize":[2,"page-size"],"currentPage":[1026,"current-page"],"loading":[4],"emptyMessage":[1,"empty-message"],"columnDefaults":[16,"column-defaults"]},null,{"loading":["onLoadingChange"],"data":["onDataChange"],"columns":["onColumnsChange"]}],[1,"d3-bar-chart",{"chartData":[16,"chart-data"],"width":[2],"height":[2],"currentWidth":[32],"currentHeight":[32]},null,{"chartData":["onDataChange"]}],[1,"date-input",{"name":[1],"label":[1],"value":[1537],"min":[1],"max":[1],"disabled":[4]}],[1,"multi-axis-chart",{"chartTitle":[1,"chart-title"],"chartHeight":[2,"chart-height"],"categories":[16],"series":[16],"yAxes":[16,"y-axes"],"colors":[16]}],[1,"my-button",{"label":[1],"variant":[1],"size":[1],"disabled":[4]}],[1,"radio-button",{"name":[1],"value":[1],"label":[1],"checked":[1540],"disabled":[4]}],[1,"range-input",{"name":[1],"label":[1],"value":[1538],"min":[2],"max":[2],"step":[2],"disabled":[4]}],[1,"time-input",{"name":[1],"label":[1],"value":[1537],"min":[1],"max":[1],"step":[2],"disabled":[4]}]]],["bubble-chart",[[1,"bubble-chart",{"myHeight":[2,"my-height"],"myTitle":[1,"my-title"],"xTitle":[1,"x-title"],"yTitle":[1,"y-title"],"myWidth":[2,"my-width"],"bubbleData":[16,"bubble-data"],"charWidth":[32],"seriesData":[32],"countyName":[32]},null,{"bubbleData":["bubbleDataChanged"],"myHeight":["propertiesChanged"],"myTitle":["propertiesChanged"],"xTitle":["propertiesChanged"],"yTitle":["propertiesChanged"],"myWidth":["myWidthChanged"]}]]],["heat-map",[[1,"heat-map",{"rows":[2],"cols":[2]}]]],["histogram-chart",[[1,"histogram-chart",{"myWidth":[2,"my-width"],"myHight":[2,"my-hight"],"nameOfChart":[1,"name-of-chart"],"binCount":[2,"bin-count"],"data":[16]},null,{"myWidth":["OnPropChange"],"myHeight":["OnPropChange"],"nameOfChart":["OnPropChange"],"binCount":["OnPropChange"],"data":["OnPropChange"]}]]],["line-chart",[[1,"line-chart",{"data":[16],"categories":[16]}]]],["my-dropdown-menu",[[1,"my-dropdown-menu",{"options":[16],"valeOfEachOption":[16,"vale-of-each-option"],"theme":[1],"variantSize":[1,"variant-size"]}]]],["my-list",[[1,"my-list",{"items":[16],"theme":[1],"spaceBetweenItems":[2,"space-between-items"],"direction":[1],"wrap":[4]}]]],["my-text-field",[[1,"my-text-field",{"textInPlaceholder":[1,"text-in-placeholder"],"lablelText":[1,"lablel-text"],"ColorOfLable":[1,"color-of-lable"],"Theme":[1,"theme"],"variantSize":[1,"variant-size"],"IsRequeredToFill":[4,"is-requered-to-fill"],"size":[2],"disable":[4]}]]],["number-input",[[1,"number-input",{"value":[2],"min":[2],"max":[2]}]]],["pie-chart",[[1,"pie-chart",{"data":[16]}]]],["right-click-menu",[[1,"right-click-menu",{"theItems":[16,"the-items"],"menuVisible":[32],"menuPosition":[32],"adjustedPosition":[32],"submenuAdjustedPositionX":[32]},null,{"menuVisible":["adjustMenuPosition"],"menuPosition":["adjustMenuPosition"]}]]],["scatter-plot",[[0,"scatter-plot",{"data":[16],"myHight":[2,"my-hight"],"myWidth":[2,"my-width"],"nameOfSactter":[1,"name-of-sactter"],"colorOfPoint":[1,"color-of-point"],"xTitle":[1,"x-title"],"yTitle":[1,"y-title"],"xTicks":[2,"x-ticks"],"yTicks":[2,"y-ticks"]},null,{"data":["dataWatcher"]}]]],["text-area",[[1,"text-area",{"placeholder":[1],"value":[1],"internalValue":[32]},null,{"value":["valueChanged"]}]]],["ui-cards",[[1,"ui-cards",{"cardTitle":[1,"card-title"]}]]],["ui-notification",[[1,"ui-notification",{"type":[1],"placement":[1],"header":[1],"content":[1]}]]]], options);
});
//# sourceMappingURL=custom-frontend-library.js.map

//# sourceMappingURL=custom-frontend-library.js.map