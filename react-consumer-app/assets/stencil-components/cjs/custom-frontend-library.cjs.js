'use strict';

var index = require('./index-Qkg_gWF8.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.36.0 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('custom-frontend-library.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["checkbox-input_6.cjs",[[1,"checkbox-input",{"name":[1],"value":[1],"label":[1],"checked":[1540],"disabled":[4]}],[1,"date-input",{"name":[1],"label":[1],"value":[1537],"min":[1],"max":[1],"disabled":[4]}],[1,"my-button",{"label":[1],"variant":[1],"size":[1],"disabled":[4]}],[1,"radio-button",{"name":[1],"value":[1],"label":[1],"checked":[1540],"disabled":[4]}],[1,"range-input",{"name":[1],"label":[1],"value":[1538],"min":[2],"max":[2],"step":[2],"disabled":[4]}],[1,"time-input",{"name":[1],"label":[1],"value":[1537],"min":[1],"max":[1],"step":[2],"disabled":[4]}]]],["bubble-chart.cjs",[[1,"bubble-chart",{"myHeight":[2,"my-height"],"myTitle":[1,"my-title"],"xTitle":[1,"x-title"],"yTitle":[1,"y-title"],"myWidth":[2,"my-width"],"bubbleData":[16,"bubble-data"],"charWidth":[32],"seriesData":[32],"countyName":[32]},null,{"bubbleData":["bubbleDataChanged"],"myHeight":["propertiesChanged"],"myTitle":["propertiesChanged"],"xTitle":["propertiesChanged"],"yTitle":["propertiesChanged"],"myWidth":["myWidthChanged"]}]]],["d3-bar-chart.cjs",[[1,"d3-bar-chart",{"chartData":[16,"chart-data"],"width":[2],"height":[2],"currentWidth":[32],"currentHeight":[32]},null,{"chartData":["onDataChange"]}]]],["heat-map.cjs",[[1,"heat-map",{"rows":[2],"cols":[2]}]]],["histogram-chart.cjs",[[1,"histogram-chart",{"myWidth":[2,"my-width"],"myHight":[2,"my-hight"],"nameOfChart":[1,"name-of-chart"],"binCount":[2,"bin-count"],"data":[16]},null,{"myWidth":["OnPropChange"],"myHeight":["OnPropChange"],"nameOfChart":["OnPropChange"],"binCount":["OnPropChange"],"data":["OnPropChange"]}]]],["line-chart.cjs",[[1,"line-chart",{"data":[16],"categories":[16]}]]],["multi-axis-chart.cjs",[[1,"multi-axis-chart",{"chartTitle":[1,"chart-title"],"chartHeight":[2,"chart-height"],"categories":[16],"series":[16],"yAxes":[16,"y-axes"],"colors":[16]}]]],["my-dropdown-menu.cjs",[[1,"my-dropdown-menu",{"options":[16],"valeOfEachOption":[16,"vale-of-each-option"],"theme":[1],"variantSize":[1,"variant-size"]}]]],["my-list.cjs",[[1,"my-list",{"items":[16],"theme":[1],"spaceBetweenItems":[2,"space-between-items"],"direction":[1],"wrap":[4]}]]],["my-text-field.cjs",[[1,"my-text-field",{"textInPlaceholder":[1,"text-in-placeholder"],"lablelText":[1,"lablel-text"],"ColorOfLable":[1,"color-of-lable"],"Theme":[1,"theme"],"variantSize":[1,"variant-size"],"IsRequeredToFill":[4,"is-requered-to-fill"],"size":[2],"disable":[4]}]]],["number-input.cjs",[[1,"number-input",{"value":[2],"min":[2],"max":[2]}]]],["pie-chart.cjs",[[1,"pie-chart",{"data":[16]}]]],["right-click-menu.cjs",[[1,"right-click-menu",{"theItems":[16,"the-items"],"menuVisible":[32],"menuPosition":[32],"adjustedPosition":[32],"submenuAdjustedPositionX":[32]},null,{"menuVisible":["adjustMenuPosition"],"menuPosition":["adjustMenuPosition"]}]]],["scatter-plot.cjs",[[0,"scatter-plot",{"data":[16],"myHight":[2,"my-hight"],"myWidth":[2,"my-width"],"nameOfSactter":[1,"name-of-sactter"],"colorOfPoint":[1,"color-of-point"],"xTitle":[1,"x-title"],"yTitle":[1,"y-title"],"xTicks":[2,"x-ticks"],"yTicks":[2,"y-ticks"]},null,{"data":["dataWatcher"]}]]],["text-area.cjs",[[1,"text-area",{"placeholder":[1],"value":[1],"internalValue":[32]},null,{"value":["valueChanged"]}]]],["ui-cards.cjs",[[1,"ui-cards",{"cardTitle":[1,"card-title"]}]]],["ui-notification.cjs",[[1,"ui-notification",{"type":[1],"placement":[1],"header":[1],"content":[1]}]]]], options);
});

exports.setNonce = index.setNonce;
//# sourceMappingURL=custom-frontend-library.cjs.js.map

//# sourceMappingURL=custom-frontend-library.cjs.js.map