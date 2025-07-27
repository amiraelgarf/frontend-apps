const NAMESPACE$1 = 'siemens-ix';
const BUILD$1 = /* siemens-ix */ { hydratedSelectorName: "hydrated", lazyLoad: true, updatable: true};

/*
 Stencil Client Platform v4.29.0 | MIT Licensed | https://stenciljs.com
 */
var __defProp$1 = Object.defineProperty;
var __export$1 = (target, all) => {
  for (var name in all)
    __defProp$1(target, name, { get: all[name], enumerable: true });
};

// src/utils/constants.ts
var SVG_NS$1 = "http://www.w3.org/2000/svg";
var HTML_NS$1 = "http://www.w3.org/1999/xhtml";
var PrimitiveType = /* @__PURE__ */ ((PrimitiveType2) => {
  PrimitiveType2["Undefined"] = "undefined";
  PrimitiveType2["Null"] = "null";
  PrimitiveType2["String"] = "string";
  PrimitiveType2["Number"] = "number";
  PrimitiveType2["SpecialNumber"] = "number";
  PrimitiveType2["Boolean"] = "boolean";
  PrimitiveType2["BigInt"] = "bigint";
  return PrimitiveType2;
})(PrimitiveType || {});
var NonPrimitiveType = /* @__PURE__ */ ((NonPrimitiveType2) => {
  NonPrimitiveType2["Array"] = "array";
  NonPrimitiveType2["Date"] = "date";
  NonPrimitiveType2["Map"] = "map";
  NonPrimitiveType2["Object"] = "object";
  NonPrimitiveType2["RegularExpression"] = "regexp";
  NonPrimitiveType2["Set"] = "set";
  NonPrimitiveType2["Channel"] = "channel";
  NonPrimitiveType2["Symbol"] = "symbol";
  return NonPrimitiveType2;
})(NonPrimitiveType || {});
var TYPE_CONSTANT = "type";
var VALUE_CONSTANT = "value";
var SERIALIZED_PREFIX = "serialized:";

// src/client/client-host-ref.ts
var getHostRef$1 = (ref) => {
  if (ref.__stencil__getHostRef) {
    return ref.__stencil__getHostRef();
  }
  return void 0;
};
var registerInstance$1 = (lazyInstance, hostRef) => {
  lazyInstance.__stencil__getHostRef = () => hostRef;
  hostRef.$lazyInstance$ = lazyInstance;
};
var registerHost$1 = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  const ref = hostRef;
  hostElement.__stencil__getHostRef = () => ref;
  return ref;
};
var isMemberInElement$1 = (elm, memberName) => memberName in elm;
var consoleError$1 = (e, el) => (0, console.error)(e, el);

// src/client/client-load-module.ts
var cmpModules$1 = /* @__PURE__ */ new Map();
var loadModule$1 = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (!bundleId) {
    return void 0;
  }
  const module = cmpModules$1.get(bundleId) ;
  if (module) {
    return module[exportName];
  }
  
        {
          const processMod = importedModule => {
              cmpModules$1.set(bundleId, importedModule);
              return importedModule[exportName];
          };
          switch(bundleId) {
              
                case 'ix-action-card':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-action-card.entry-CED4U-nR.js').then(processMod, consoleError$1);
                case 'ix-application':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-application.entry-vF_iF3hA.js').then(processMod, consoleError$1);
                case 'ix-application-sidebar':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-application-sidebar.entry-CWM6tXgt.js').then(processMod, consoleError$1);
                case 'ix-application-switch-modal':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-application-switch-modal.entry-CFPtxVx0.js').then(processMod, consoleError$1);
                case 'ix-basic-navigation':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-basic-navigation.entry-et3Q1fHE.js').then(processMod, consoleError$1);
                case 'ix-blind':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-blind.entry-CTHq3fQV.js').then(processMod, consoleError$1);
                case 'ix-breadcrumb':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-breadcrumb.entry-CU73JAVW.js').then(processMod, consoleError$1);
                case 'ix-card-list':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-card-list.entry-BacN4R1d.js').then(processMod, consoleError$1);
                case 'ix-category-filter':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-category-filter.entry-C6IE8ZV4.js').then(processMod, consoleError$1);
                case 'ix-checkbox':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-checkbox.entry-B1pqeFDR.js').then(processMod, consoleError$1);
                case 'ix-checkbox-group':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-checkbox-group.entry-BQS6l3aU.js').then(processMod, consoleError$1);
                case 'ix-chip':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-chip.entry-wJISXOWQ.js').then(processMod, consoleError$1);
                case 'ix-content':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-content.entry-DvFoRNwx.js').then(processMod, consoleError$1);
                case 'ix-content-header':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-content-header.entry-iG5Faef0.js').then(processMod, consoleError$1);
                case 'ix-css-grid-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-css-grid-item.entry-63Pm_zZO.js').then(processMod, consoleError$1);
                case 'ix-custom-field':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-custom-field.entry-Csp6pWRB.js').then(processMod, consoleError$1);
                case 'ix-date-dropdown':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-date-dropdown.entry-BAO1kwF9.js').then(processMod, consoleError$1);
                case 'ix-date-input':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-date-input.entry-iWHVknaD.js').then(processMod, consoleError$1);
                case 'ix-datetime-picker':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-datetime-picker.entry-Dyj990m6.js').then(processMod, consoleError$1);
                case 'ix-drawer':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-drawer.entry-DygkZqVa.js').then(processMod, consoleError$1);
                case 'ix-dropdown-button':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-dropdown-button.entry-D3raKG-r.js').then(processMod, consoleError$1);
                case 'ix-dropdown-header':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-dropdown-header.entry-DDiM2cMc.js').then(processMod, consoleError$1);
                case 'ix-dropdown-quick-actions':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-dropdown-quick-actions.entry-DU1pKBDH.js').then(processMod, consoleError$1);
                case 'ix-empty-state':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-empty-state.entry-2iV_m7jg.js').then(processMod, consoleError$1);
                case 'ix-event-list':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-event-list.entry-DOsM7Q-u.js').then(processMod, consoleError$1);
                case 'ix-event-list-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-event-list-item.entry-CBm_sFg_.js').then(processMod, consoleError$1);
                case 'ix-expanding-search':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-expanding-search.entry-BKkNnr6F.js').then(processMod, consoleError$1);
                case 'ix-flip-tile':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-flip-tile.entry-WL8Fir7l.js').then(processMod, consoleError$1);
                case 'ix-flip-tile-content':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-flip-tile-content.entry-DrwOAS5D.js').then(processMod, consoleError$1);
                case 'ix-group':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-group.entry-BUNRmgY9.js').then(processMod, consoleError$1);
                case 'ix-helper-text':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-helper-text.entry-iAgs1IHr.js').then(processMod, consoleError$1);
                case 'ix-icon-toggle-button':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-icon-toggle-button.entry-DLHmrRsR.js').then(processMod, consoleError$1);
                case 'ix-input':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-input.entry-C2yzpU-x.js').then(processMod, consoleError$1);
                case 'ix-input-group':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-input-group.entry-H3MbiXMw.js').then(processMod, consoleError$1);
                case 'ix-key-value':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-key-value.entry-CN31IWYR.js').then(processMod, consoleError$1);
                case 'ix-key-value-list':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-key-value-list.entry-DEDJbqff.js').then(processMod, consoleError$1);
                case 'ix-kpi':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-kpi.entry-ZlimybhU.js').then(processMod, consoleError$1);
                case 'ix-layout-auto':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-layout-auto.entry-B42OvLNy.js').then(processMod, consoleError$1);
                case 'ix-link-button':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-link-button.entry-DpM-uwZb.js').then(processMod, consoleError$1);
                case 'ix-map-navigation':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-map-navigation.entry-B7iAQCrA.js').then(processMod, consoleError$1);
                case 'ix-menu-about':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-menu-about.entry-EoZ5-LOV.js').then(processMod, consoleError$1);
                case 'ix-menu-about-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-menu-about-item.entry-DN7B4s1c.js').then(processMod, consoleError$1);
                case 'ix-menu-about-news':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-menu-about-news.entry-wc02DNAB.js').then(processMod, consoleError$1);
                case 'ix-menu-avatar':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-menu-avatar.entry-BRTJfvjy.js').then(processMod, consoleError$1);
                case 'ix-menu-settings-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-menu-settings-item.entry-COb-PhAi.js').then(processMod, consoleError$1);
                case 'ix-message-bar':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-message-bar.entry-Dvy3jF7o.js').then(processMod, consoleError$1);
                case 'ix-modal-footer':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-modal-footer.entry-CNTjkF6d.js').then(processMod, consoleError$1);
                case 'ix-modal-loading':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-modal-loading.entry-CZ8H-1Qh.js').then(processMod, consoleError$1);
                case 'ix-number-input':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-number-input.entry-BgMIAFEh.js').then(processMod, consoleError$1);
                case 'ix-pagination':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-pagination.entry-BVxz7YGP.js').then(processMod, consoleError$1);
                case 'ix-pane':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-pane.entry-BnUYBgp6.js').then(processMod, consoleError$1);
                case 'ix-pane-layout':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-pane-layout.entry-DvgrJKgS.js').then(processMod, consoleError$1);
                case 'ix-pill':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-pill.entry-mdBSdsv3.js').then(processMod, consoleError$1);
                case 'ix-push-card':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-push-card.entry-BPGgGLD3.js').then(processMod, consoleError$1);
                case 'ix-radio':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-radio.entry-CjYmOWM5.js').then(processMod, consoleError$1);
                case 'ix-radio-group':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-radio-group.entry-DcJ544Rp.js').then(processMod, consoleError$1);
                case 'ix-slider':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-slider.entry-BIAve0eC.js').then(processMod, consoleError$1);
                case 'ix-split-button':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-split-button.entry-fePLmUan.js').then(processMod, consoleError$1);
                case 'ix-textarea':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-textarea.entry-_Yqtabml.js').then(processMod, consoleError$1);
                case 'ix-tile':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-tile.entry-75dMS00R.js').then(processMod, consoleError$1);
                case 'ix-toast-container':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-toast-container.entry-a_UUGrF7.js').then(processMod, consoleError$1);
                case 'ix-toggle':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-toggle.entry-DDVwte2v.js').then(processMod, consoleError$1);
                case 'ix-toggle-button':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-toggle-button.entry-VaP0CFs-.js').then(processMod, consoleError$1);
                case 'ix-upload':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-upload.entry-CP4CJ487.js').then(processMod, consoleError$1);
                case 'ix-validation-tooltip':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-validation-tooltip.entry-BpXXXpGB.js').then(processMod, consoleError$1);
                case 'ix-workflow-step':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-workflow-step.entry-CDNMgLOB.js').then(processMod, consoleError$1);
                case 'ix-workflow-steps':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-workflow-steps.entry-BZV2vjRi.js').then(processMod, consoleError$1);
                case 'ix-breadcrumb-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-breadcrumb-item.entry-E0MTSA-b.js').then(processMod, consoleError$1);
                case 'ix-map-navigation-overlay':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-map-navigation-overlay.entry-CN50aLry.js').then(processMod, consoleError$1);
                case 'ix-select':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-select.entry-RaR8CeIW.js').then(processMod, consoleError$1);
                case 'ix-time-picker':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-time-picker.entry-C7o1rpYO.js').then(processMod, consoleError$1);
                case 'ix-toast':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-toast.entry-C2mnXIir.js').then(processMod, consoleError$1);
                case 'ix-tree-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-tree-item.entry-BeXYkyVr.js').then(processMod, consoleError$1);
                case 'ix-application-header':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-application-header.entry-DzrwXDEu.js').then(processMod, consoleError$1);
                case 'ix-menu-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-menu-item.entry-CQOtw5vq.js').then(processMod, consoleError$1);
                case 'ix-divider':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-divider.entry-ttmGPUmw.js').then(processMod, consoleError$1);
                case 'ix-menu-expand-icon':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-menu-expand-icon.entry-21lu4w8q.js').then(processMod, consoleError$1);
                case 'ix-date-time-card':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-date-time-card.entry-WDeM-tOD.js').then(processMod, consoleError$1);
                case 'ix-dropdown-item':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-dropdown-item.entry-Bt-pFEB0.js').then(processMod, consoleError$1);
                case 'ix-button':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-button.entry-OMTxd-vl.js').then(processMod, consoleError$1);
                case 'ix-dropdown':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-dropdown.entry-CSJJkj42.js').then(processMod, consoleError$1);
                case 'ix-tooltip':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-tooltip.entry-wgOPvG74.js').then(processMod, consoleError$1);
                case 'ix-typography':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-typography.entry-BsURXNs0.js').then(processMod, consoleError$1);
                case 'ix-css-grid':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-css-grid.entry-knVEyUO8.js').then(processMod, consoleError$1);
                case 'ix-menu':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-menu.entry-CuEfVec-.js').then(processMod, consoleError$1);
                case 'ix-menu-category':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-menu-category.entry-CMsZ7mzD.js').then(processMod, consoleError$1);
                case 'ix-modal':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-modal.entry-DnLuhjWg.js').then(processMod, consoleError$1);
                case 'ix-tree':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-tree.entry-vNEczBUK.js').then(processMod, consoleError$1);
                case 'ix-avatar_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-avatar_2.entry-OiRCbqKH.js').then(processMod, consoleError$1);
                case 'ix-card-accordion_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-card-accordion_2.entry-BHZretwR.js').then(processMod, consoleError$1);
                case 'ix-group-context-menu_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-group-context-menu_2.entry-On4NsMb5.js').then(processMod, consoleError$1);
                case 'ix-modal-content_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-modal-content_2.entry-B2F7qLqJ.js').then(processMod, consoleError$1);
                case 'ix-card_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-card_2.entry-FzzSywZb.js').then(processMod, consoleError$1);
                case 'ix-icon-button_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-icon-button_2.entry-Dyhnq9ol.js').then(processMod, consoleError$1);
                case 'ix-filter-chip_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-filter-chip_2.entry-EIAgNugf.js').then(processMod, consoleError$1);
                case 'ix-tab-item_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-tab-item_2.entry-BvJ41hUZ.js').then(processMod, consoleError$1);
                case 'ix-field-label_2':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-field-label_2.entry-DovCM2QI.js').then(processMod, consoleError$1);
                case 'ix-col_4':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-col_4.entry-Csk2ZqL3.js').then(processMod, consoleError$1);
                case 'ix-menu-settings':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-menu-settings.entry-DnBYH2f-.js').then(function (n) { return n.a; }).then(processMod, consoleError$1);
          }
      }
  return import(
    /* @vite-ignore */
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${""}`
  ).then(
    (importedModule) => {
      {
        cmpModules$1.set(bundleId, importedModule);
      }
      return importedModule[exportName];
    },
    (e) => {
      consoleError$1(e, hostRef.$hostElement$);
    }
  );
};

// src/client/client-style.ts
var styles$1 = /* @__PURE__ */ new Map();

// src/runtime/runtime-constants.ts
var CONTENT_REF_ID = "r";
var ORG_LOCATION_ID = "o";
var SLOT_NODE_ID = "s";
var TEXT_NODE_ID = "t";
var COMMENT_NODE_ID = "c";
var HYDRATE_ID = "s-id";
var HYDRATED_STYLE_ID = "sty-id";
var HYDRATE_CHILD_ID = "c-id";
var HYDRATED_CSS$1 = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS$1 = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS = [
  "formAssociatedCallback",
  "formResetCallback",
  "formDisabledCallback",
  "formStateRestoreCallback"
];
var win$1 = typeof window !== "undefined" ? window : {};
var plt$1 = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var setPlatformHelpers = (helpers) => {
  Object.assign(plt$1, helpers);
};
var supportsListenerOptions = /* @__PURE__ */ (() => {
  var _a;
  let supportsListenerOptions2 = false;
  try {
    (_a = win$1.document) == null ? void 0 : _a.addEventListener(
      "e",
      null,
      Object.defineProperty({}, "passive", {
        get() {
          supportsListenerOptions2 = true;
        }
      })
    );
  } catch (e) {
  }
  return supportsListenerOptions2;
})();
var promiseResolve$1 = (v) => Promise.resolve(v);
var supportsConstructableStylesheets$1 = /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})() ;
var queuePending$1 = false;
var queueDomReads$1 = [];
var queueDomWrites$1 = [];
var queueTask$1 = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending$1) {
    queuePending$1 = true;
    if (write && plt$1.$flags$ & 4 /* queueSync */) {
      nextTick$1(flush$1);
    } else {
      plt$1.raf(flush$1);
    }
  }
};
var consume$1 = (queue) => {
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
    } catch (e) {
      consoleError$1(e);
    }
  }
  queue.length = 0;
};
var flush$1 = () => {
  consume$1(queueDomReads$1);
  {
    consume$1(queueDomWrites$1);
    if (queuePending$1 = queueDomReads$1.length > 0) {
      plt$1.raf(flush$1);
    }
  }
};
var nextTick$1 = (cb) => promiseResolve$1().then(cb);
var readTask = /* @__PURE__ */ queueTask$1(queueDomReads$1, false);
var writeTask$1 = /* @__PURE__ */ queueTask$1(queueDomWrites$1, true);
var isComplexType$1 = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent$1(doc) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}

// src/utils/remote-value.ts
var RemoteValue = class _RemoteValue {
  /**
   * Deserializes a LocalValue serialized object back to its original JavaScript representation
   *
   * @param serialized The serialized LocalValue object
   * @returns The original JavaScript value/object
   */
  static fromLocalValue(serialized) {
    const type = serialized[TYPE_CONSTANT];
    const value = VALUE_CONSTANT in serialized ? serialized[VALUE_CONSTANT] : void 0;
    switch (type) {
      case "string" /* String */:
        return value;
      case "boolean" /* Boolean */:
        return value;
      case "bigint" /* BigInt */:
        return BigInt(value);
      case "undefined" /* Undefined */:
        return void 0;
      case "null" /* Null */:
        return null;
      case "number" /* Number */:
        if (value === "NaN") return NaN;
        if (value === "-0") return -0;
        if (value === "Infinity") return Infinity;
        if (value === "-Infinity") return -Infinity;
        return value;
      case "array" /* Array */:
        return value.map((item) => _RemoteValue.fromLocalValue(item));
      case "date" /* Date */:
        return new Date(value);
      case "map" /* Map */:
        const map2 = /* @__PURE__ */ new Map();
        for (const [key, val] of value) {
          const deserializedKey = typeof key === "object" && key !== null ? _RemoteValue.fromLocalValue(key) : key;
          const deserializedValue = _RemoteValue.fromLocalValue(val);
          map2.set(deserializedKey, deserializedValue);
        }
        return map2;
      case "object" /* Object */:
        const obj = {};
        for (const [key, val] of value) {
          obj[key] = _RemoteValue.fromLocalValue(val);
        }
        return obj;
      case "regexp" /* RegularExpression */:
        const { pattern, flags } = value;
        return new RegExp(pattern, flags);
      case "set" /* Set */:
        const set = /* @__PURE__ */ new Set();
        for (const item of value) {
          set.add(_RemoteValue.fromLocalValue(item));
        }
        return set;
      case "symbol" /* Symbol */:
        return Symbol(value);
      default:
        throw new Error(`Unsupported type: ${type}`);
    }
  }
  /**
   * Utility method to deserialize multiple LocalValues at once
   *
   * @param serializedValues Array of serialized LocalValue objects
   * @returns Array of deserialized JavaScript values
   */
  static fromLocalValueArray(serializedValues) {
    return serializedValues.map((value) => _RemoteValue.fromLocalValue(value));
  }
  /**
   * Verifies if the given object matches the structure of a serialized LocalValue
   *
   * @param obj Object to verify
   * @returns boolean indicating if the object has LocalValue structure
   */
  static isLocalValueObject(obj) {
    if (typeof obj !== "object" || obj === null) {
      return false;
    }
    if (!obj.hasOwnProperty(TYPE_CONSTANT)) {
      return false;
    }
    const type = obj[TYPE_CONSTANT];
    const hasTypeProperty = Object.values({ ...PrimitiveType, ...NonPrimitiveType }).includes(type);
    if (!hasTypeProperty) {
      return false;
    }
    if (type !== "null" /* Null */ && type !== "undefined" /* Undefined */) {
      return obj.hasOwnProperty(VALUE_CONSTANT);
    }
    return true;
  }
};

// src/utils/result.ts
var result_exports$1 = {};
__export$1(result_exports$1, {
  err: () => err$1,
  map: () => map$1,
  ok: () => ok$1,
  unwrap: () => unwrap$1,
  unwrapErr: () => unwrapErr$1
});
var ok$1 = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err$1 = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map$1(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok$1(newVal));
    } else {
      return ok$1(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err$1(value);
  }
  throw "should never get here";
}
var unwrap$1 = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr$1 = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};

// src/utils/serialize.ts
function deserializeProperty(value) {
  if (typeof value !== "string" || !value.startsWith(SERIALIZED_PREFIX)) {
    return value;
  }
  return RemoteValue.fromLocalValue(JSON.parse(atob(value.slice(SERIALIZED_PREFIX.length))));
}
var getSlottedChildNodes = (childNodes) => {
  const result = [];
  for (let i2 = 0; i2 < childNodes.length; i2++) {
    const slottedNode = childNodes[i2]["s-nr"] || void 0;
    if (slottedNode && slottedNode.isConnected) {
      result.push(slottedNode);
    }
  }
  return result;
};
var addSlotRelocateNode = (newChild, slotNode, prepend, position) => {
  if (newChild["s-ol"] && newChild["s-ol"].isConnected) {
    return;
  }
  const slottedNodeLocation = document.createTextNode("");
  slottedNodeLocation["s-nr"] = newChild;
  if (!slotNode["s-cr"] || !slotNode["s-cr"].parentNode) return;
  const parent = slotNode["s-cr"].parentNode;
  const appendMethod = internalCall(parent, "appendChild");
  if (typeof position !== "undefined") {
    slottedNodeLocation["s-oo"] = position;
    const childNodes = internalCall(parent, "childNodes");
    const slotRelocateNodes = [slottedNodeLocation];
    childNodes.forEach((n) => {
      if (n["s-nr"]) slotRelocateNodes.push(n);
    });
    slotRelocateNodes.sort((a, b) => {
      if (!a["s-oo"] || a["s-oo"] < (b["s-oo"] || 0)) return -1;
      else if (!b["s-oo"] || b["s-oo"] < a["s-oo"]) return 1;
      return 0;
    });
    slotRelocateNodes.forEach((n) => appendMethod.call(parent, n));
  } else {
    appendMethod.call(parent, slottedNodeLocation);
  }
  newChild["s-ol"] = slottedNodeLocation;
  newChild["s-sh"] = slotNode["s-hn"];
};
var getSlotName = (node) => typeof node["s-sn"] === "string" ? node["s-sn"] : node.nodeType === 1 && node.getAttribute("slot") || void 0;
function patchSlotNode(node) {
  if (node.assignedElements || node.assignedNodes || !node["s-sr"]) return;
  const assignedFactory = (elementsOnly) => (function(opts) {
    const toReturn = [];
    const slotName = this["s-sn"];
    if (opts == null ? void 0 : opts.flatten) {
      console.error(`
          Flattening is not supported for Stencil non-shadow slots. 
          You can use \`.childNodes\` to nested slot fallback content.
          If you have a particular use case, please open an issue on the Stencil repo.
        `);
    }
    const parent = this["s-cr"].parentElement;
    const slottedNodes = parent.__childNodes ? parent.childNodes : getSlottedChildNodes(parent.childNodes);
    slottedNodes.forEach((n) => {
      if (slotName === getSlotName(n)) {
        toReturn.push(n);
      }
    });
    if (elementsOnly) {
      return toReturn.filter((n) => n.nodeType === 1 /* ElementNode */);
    }
    return toReturn;
  }).bind(node);
  node.assignedElements = assignedFactory(true);
  node.assignedNodes = assignedFactory(false);
}
function internalCall(node, method) {
  if ("__" + method in node) {
    const toReturn = node["__" + method];
    if (typeof toReturn !== "function") return toReturn;
    return toReturn.bind(node);
  } else {
    if (typeof node[method] !== "function") return node[method];
    return node[method].bind(node);
  }
}
var createTime$1 = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime$1 = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
var h$1 = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType$1(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode$1(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  if (typeof nodeName === "function") {
    return nodeName(
      vnodeData === null ? {} : vnodeData,
      vNodeChildren,
      vdomFnUtils
    );
  }
  const vnode = newVNode$1(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  return vnode;
};
var newVNode$1 = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  return vnode;
};
var Host$1 = {};
var isHost$1 = (node) => node && node.$tag$ === Host$1;
var vdomFnUtils = {
  forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
  map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate)
};
var convertToPublic = (node) => ({
  vattrs: node.$attrs$,
  vchildren: node.$children$,
  vkey: node.$key$,
  vname: node.$name$,
  vtag: node.$tag$,
  vtext: node.$text$
});
var convertToPrivate = (node) => {
  if (typeof node.vtag === "function") {
    const vnodeData = { ...node.vattrs };
    if (node.vkey) {
      vnodeData.key = node.vkey;
    }
    if (node.vname) {
      vnodeData.name = node.vname;
    }
    return h$1(node.vtag, vnodeData, ...node.vchildren || []);
  }
  const vnode = newVNode$1(node.vtag, node.vtext);
  vnode.$attrs$ = node.vattrs;
  vnode.$children$ = node.vchildren;
  vnode.$key$ = node.vkey;
  vnode.$name$ = node.vname;
  return vnode;
};

// src/runtime/client-hydrate.ts
var initializeClientHydrate = (hostElm, tagName, hostId, hostRef) => {
  var _a;
  const endHydrate = createTime$1("hydrateClient", tagName);
  const shadowRoot = hostElm.shadowRoot;
  const childRenderNodes = [];
  const slotNodes = [];
  const slottedNodes = [];
  const shadowRootNodes = shadowRoot ? [] : null;
  const vnode = newVNode$1(tagName, null);
  vnode.$elm$ = hostElm;
  const members = Object.entries(((_a = hostRef.$cmpMeta$) == null ? void 0 : _a.$members$) || {});
  members.forEach(([memberName, [memberFlags, metaAttributeName]]) => {
    var _a2;
    if (!(memberFlags & 31 /* Prop */)) {
      return;
    }
    const attributeName = metaAttributeName || memberName;
    const attrVal = hostElm.getAttribute(attributeName);
    if (attrVal !== null) {
      const attrPropVal = parsePropertyValue$1(attrVal, memberFlags);
      (_a2 = hostRef == null ? void 0 : hostRef.$instanceValues$) == null ? void 0 : _a2.set(memberName, attrPropVal);
    }
  });
  if (win$1.document && (!plt$1.$orgLocNodes$ || !plt$1.$orgLocNodes$.size)) {
    initializeDocumentHydrate(win$1.document.body, plt$1.$orgLocNodes$ = /* @__PURE__ */ new Map());
  }
  hostElm[HYDRATE_ID] = hostId;
  hostElm.removeAttribute(HYDRATE_ID);
  hostRef.$vnode$ = clientHydrate(
    vnode,
    childRenderNodes,
    slotNodes,
    shadowRootNodes,
    hostElm,
    hostElm,
    hostId,
    slottedNodes
  );
  let crIndex = 0;
  const crLength = childRenderNodes.length;
  let childRenderNode;
  for (crIndex; crIndex < crLength; crIndex++) {
    childRenderNode = childRenderNodes[crIndex];
    const orgLocationId = childRenderNode.$hostId$ + "." + childRenderNode.$nodeId$;
    const orgLocationNode = plt$1.$orgLocNodes$.get(orgLocationId);
    const node = childRenderNode.$elm$;
    if (!shadowRoot) {
      node["s-hn"] = tagName.toUpperCase();
      if (childRenderNode.$tag$ === "slot") {
        node["s-cr"] = hostElm["s-cr"];
      }
    }
    if (childRenderNode.$tag$ === "slot") {
      childRenderNode.$name$ = childRenderNode.$elm$["s-sn"] || childRenderNode.$elm$["name"] || null;
      if (childRenderNode.$children$) {
        childRenderNode.$flags$ |= 2 /* isSlotFallback */;
        if (!childRenderNode.$elm$.childNodes.length) {
          childRenderNode.$children$.forEach((c) => {
            childRenderNode.$elm$.appendChild(c.$elm$);
          });
        }
      } else {
        childRenderNode.$flags$ |= 1 /* isSlotReference */;
      }
    }
    if (orgLocationNode && orgLocationNode.isConnected) {
      if (shadowRoot && orgLocationNode["s-en"] === "") {
        orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
      }
      orgLocationNode.parentNode.removeChild(orgLocationNode);
      if (!shadowRoot) {
        node["s-oo"] = parseInt(childRenderNode.$nodeId$);
      }
    }
    plt$1.$orgLocNodes$.delete(orgLocationId);
  }
  const hosts = [];
  const snLen = slottedNodes.length;
  let snIndex = 0;
  let slotGroup;
  let snGroupIdx;
  let snGroupLen;
  let slottedItem;
  for (snIndex; snIndex < snLen; snIndex++) {
    slotGroup = slottedNodes[snIndex];
    if (!slotGroup || !slotGroup.length) continue;
    snGroupLen = slotGroup.length;
    snGroupIdx = 0;
    for (snGroupIdx; snGroupIdx < snGroupLen; snGroupIdx++) {
      slottedItem = slotGroup[snGroupIdx];
      if (!hosts[slottedItem.hostId]) {
        hosts[slottedItem.hostId] = plt$1.$orgLocNodes$.get(slottedItem.hostId);
      }
      if (!hosts[slottedItem.hostId]) continue;
      const hostEle = hosts[slottedItem.hostId];
      if (!hostEle.shadowRoot || !shadowRoot) {
        slottedItem.slot["s-cr"] = hostEle["s-cr"];
        if (!slottedItem.slot["s-cr"] && hostEle.shadowRoot) {
          slottedItem.slot["s-cr"] = hostEle;
        } else {
          slottedItem.slot["s-cr"] = (hostEle.__childNodes || hostEle.childNodes)[0];
        }
        addSlotRelocateNode(slottedItem.node, slottedItem.slot, false, slottedItem.node["s-oo"]);
      }
      if (hostEle.shadowRoot && slottedItem.node.parentElement !== hostEle) {
        hostEle.appendChild(slottedItem.node);
      }
    }
  }
  if (shadowRoot && !shadowRoot.childNodes.length) {
    let rnIdex = 0;
    const rnLen = shadowRootNodes.length;
    if (rnLen) {
      for (rnIdex; rnIdex < rnLen; rnIdex++) {
        shadowRoot.appendChild(shadowRootNodes[rnIdex]);
      }
      Array.from(hostElm.childNodes).forEach((node) => {
        if (typeof node["s-sn"] !== "string") {
          if (node.nodeType === 1 /* ElementNode */ && node.slot && node.hidden) {
            node.removeAttribute("hidden");
          } else if (node.nodeType === 8 /* CommentNode */ || node.nodeType === 3 /* TextNode */ && !node.wholeText.trim()) {
            node.parentNode.removeChild(node);
          }
        }
      });
    }
  }
  plt$1.$orgLocNodes$.delete(hostElm["s-id"]);
  hostRef.$hostElement$ = hostElm;
  endHydrate();
};
var clientHydrate = (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId, slottedNodes = []) => {
  let childNodeType;
  let childIdSplt;
  let childVNode;
  let i2;
  if (node.nodeType === 1 /* ElementNode */) {
    childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
    if (childNodeType) {
      childIdSplt = childNodeType.split(".");
      if (childIdSplt[0] === hostId || childIdSplt[0] === "0") {
        childVNode = createSimpleVNode({
          $flags$: 0,
          $hostId$: childIdSplt[0],
          $nodeId$: childIdSplt[1],
          $depth$: childIdSplt[2],
          $index$: childIdSplt[3],
          $tag$: node.tagName.toLowerCase(),
          $elm$: node,
          // If we don't add the initial classes to the VNode, the first `vdom-render.ts` patch
          // won't try to reconcile them. Classes set on the node will be blown away.
          $attrs$: { class: node.className || "" }
        });
        childRenderNodes.push(childVNode);
        node.removeAttribute(HYDRATE_CHILD_ID);
        if (!parentVNode.$children$) {
          parentVNode.$children$ = [];
        }
        const slotName = childVNode.$elm$.getAttribute("s-sn");
        if (typeof slotName === "string") {
          if (childVNode.$tag$ === "slot-fb") {
            addSlot(
              slotName,
              childIdSplt[2],
              childVNode,
              node,
              parentVNode,
              childRenderNodes,
              slotNodes,
              shadowRootNodes,
              slottedNodes
            );
          }
          childVNode.$elm$["s-sn"] = slotName;
          childVNode.$elm$.removeAttribute("s-sn");
        }
        if (childVNode.$index$ !== void 0) {
          parentVNode.$children$[childVNode.$index$] = childVNode;
        }
        parentVNode = childVNode;
        if (shadowRootNodes && childVNode.$depth$ === "0") {
          shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
        }
      }
    }
    if (node.shadowRoot) {
      for (i2 = node.shadowRoot.childNodes.length - 1; i2 >= 0; i2--) {
        clientHydrate(
          parentVNode,
          childRenderNodes,
          slotNodes,
          shadowRootNodes,
          hostElm,
          node.shadowRoot.childNodes[i2],
          hostId,
          slottedNodes
        );
      }
    }
    const nonShadowNodes = node.__childNodes || node.childNodes;
    for (i2 = nonShadowNodes.length - 1; i2 >= 0; i2--) {
      clientHydrate(
        parentVNode,
        childRenderNodes,
        slotNodes,
        shadowRootNodes,
        hostElm,
        nonShadowNodes[i2],
        hostId,
        slottedNodes
      );
    }
  } else if (node.nodeType === 8 /* CommentNode */) {
    childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[1] === hostId || childIdSplt[1] === "0") {
      childNodeType = childIdSplt[0];
      childVNode = createSimpleVNode({
        $hostId$: childIdSplt[1],
        $nodeId$: childIdSplt[2],
        $depth$: childIdSplt[3],
        $index$: childIdSplt[4] || "0",
        $elm$: node,
        $attrs$: null,
        $children$: null,
        $key$: null,
        $name$: null,
        $tag$: null,
        $text$: null
      });
      if (childNodeType === TEXT_NODE_ID) {
        childVNode.$elm$ = findCorrespondingNode(node, 3 /* TextNode */);
        if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3 /* TextNode */) {
          childVNode.$text$ = childVNode.$elm$.textContent;
          childRenderNodes.push(childVNode);
          node.remove();
          if (hostId === childVNode.$hostId$) {
            if (!parentVNode.$children$) {
              parentVNode.$children$ = [];
            }
            parentVNode.$children$[childVNode.$index$] = childVNode;
          }
          if (shadowRootNodes && childVNode.$depth$ === "0") {
            shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
          }
        }
      } else if (childNodeType === COMMENT_NODE_ID) {
        childVNode.$elm$ = findCorrespondingNode(node, 8 /* CommentNode */);
        if (childVNode.$elm$ && childVNode.$elm$.nodeType === 8 /* CommentNode */) {
          childRenderNodes.push(childVNode);
          node.remove();
        }
      } else if (childVNode.$hostId$ === hostId) {
        if (childNodeType === SLOT_NODE_ID) {
          const slotName = node["s-sn"] = childIdSplt[5] || "";
          addSlot(
            slotName,
            childIdSplt[2],
            childVNode,
            node,
            parentVNode,
            childRenderNodes,
            slotNodes,
            shadowRootNodes,
            slottedNodes
          );
        } else if (childNodeType === CONTENT_REF_ID) {
          if (shadowRootNodes) {
            node.remove();
          }
        }
      }
    }
  } else if (parentVNode && parentVNode.$tag$ === "style") {
    const vnode = newVNode$1(null, node.textContent);
    vnode.$elm$ = node;
    vnode.$index$ = "0";
    parentVNode.$children$ = [vnode];
  } else {
    if (node.nodeType === 3 /* TextNode */ && !node.wholeText.trim()) {
      node.remove();
    }
  }
  return parentVNode;
};
var initializeDocumentHydrate = (node, orgLocNodes) => {
  if (node.nodeType === 1 /* ElementNode */) {
    const componentId = node[HYDRATE_ID] || node.getAttribute(HYDRATE_ID);
    if (componentId) {
      orgLocNodes.set(componentId, node);
    }
    let i2 = 0;
    if (node.shadowRoot) {
      for (; i2 < node.shadowRoot.childNodes.length; i2++) {
        initializeDocumentHydrate(node.shadowRoot.childNodes[i2], orgLocNodes);
      }
    }
    const nonShadowNodes = node.__childNodes || node.childNodes;
    for (i2 = 0; i2 < nonShadowNodes.length; i2++) {
      initializeDocumentHydrate(nonShadowNodes[i2], orgLocNodes);
    }
  } else if (node.nodeType === 8 /* CommentNode */) {
    const childIdSplt = node.nodeValue.split(".");
    if (childIdSplt[0] === ORG_LOCATION_ID) {
      orgLocNodes.set(childIdSplt[1] + "." + childIdSplt[2], node);
      node.nodeValue = "";
      node["s-en"] = childIdSplt[3];
    }
  }
};
var createSimpleVNode = (vnode) => {
  const defaultVNode = {
    $flags$: 0,
    $hostId$: null,
    $nodeId$: null,
    $depth$: null,
    $index$: "0",
    $elm$: null,
    $attrs$: null,
    $children$: null,
    $key$: null,
    $name$: null,
    $tag$: null,
    $text$: null
  };
  return { ...defaultVNode, ...vnode };
};
function addSlot(slotName, slotId, childVNode, node, parentVNode, childRenderNodes, slotNodes, shadowRootNodes, slottedNodes) {
  node["s-sr"] = true;
  childVNode.$name$ = slotName || null;
  childVNode.$tag$ = "slot";
  const parentNodeId = (parentVNode == null ? void 0 : parentVNode.$elm$) ? parentVNode.$elm$["s-id"] || parentVNode.$elm$.getAttribute("s-id") : "";
  if (shadowRootNodes && win$1.document) {
    const slot = childVNode.$elm$ = win$1.document.createElement(childVNode.$tag$);
    if (childVNode.$name$) {
      childVNode.$elm$.setAttribute("name", slotName);
    }
    if (parentNodeId && parentNodeId !== childVNode.$hostId$) {
      parentVNode.$elm$.insertBefore(slot, parentVNode.$elm$.children[0]);
    } else {
      node.parentNode.insertBefore(childVNode.$elm$, node);
    }
    addSlottedNodes(slottedNodes, slotId, slotName, node, childVNode.$hostId$);
    node.remove();
    if (childVNode.$depth$ === "0") {
      shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
    }
  } else {
    const slot = childVNode.$elm$;
    const shouldMove = parentNodeId && parentNodeId !== childVNode.$hostId$ && parentVNode.$elm$.shadowRoot;
    addSlottedNodes(slottedNodes, slotId, slotName, node, shouldMove ? parentNodeId : childVNode.$hostId$);
    patchSlotNode(node);
    if (shouldMove) {
      parentVNode.$elm$.insertBefore(slot, parentVNode.$elm$.children[0]);
    }
    childRenderNodes.push(childVNode);
  }
  slotNodes.push(childVNode);
  if (!parentVNode.$children$) {
    parentVNode.$children$ = [];
  }
  parentVNode.$children$[childVNode.$index$] = childVNode;
}
var addSlottedNodes = (slottedNodes, slotNodeId, slotName, slotNode, hostId) => {
  let slottedNode = slotNode.nextSibling;
  slottedNodes[slotNodeId] = slottedNodes[slotNodeId] || [];
  while (slottedNode && ((slottedNode["getAttribute"] && slottedNode.getAttribute("slot") || slottedNode["s-sn"]) === slotName || slotName === "" && !slottedNode["s-sn"] && (slottedNode.nodeType === 8 /* CommentNode */ && slottedNode.nodeValue.indexOf(".") !== 1 || slottedNode.nodeType === 3 /* TextNode */))) {
    slottedNode["s-sn"] = slotName;
    slottedNodes[slotNodeId].push({ slot: slotNode, node: slottedNode, hostId });
    slottedNode = slottedNode.nextSibling;
  }
};
var findCorrespondingNode = (node, type) => {
  let sibling = node;
  do {
    sibling = sibling.nextSibling;
  } while (sibling && (sibling.nodeType !== type || !sibling.nodeValue));
  return sibling;
};
var parsePropertyValue$1 = (propValue, propType) => {
  if (typeof propValue === "string" && (propValue.startsWith("{") && propValue.endsWith("}") || propValue.startsWith("[") && propValue.endsWith("]"))) {
    try {
      propValue = JSON.parse(propValue);
      return propValue;
    } catch (e) {
    }
  }
  if (typeof propValue === "string" && propValue.startsWith(SERIALIZED_PREFIX)) {
    propValue = deserializeProperty(propValue);
    return propValue;
  }
  if (propValue != null && !isComplexType$1(propValue)) {
    if (propType & 4 /* Boolean */) {
      return propValue === "false" ? false : propValue === "" || !!propValue;
    }
    if (propType & 2 /* Number */) {
      return typeof propValue === "string" ? parseFloat(propValue) : typeof propValue === "number" ? propValue : NaN;
    }
    if (propType & 1 /* String */) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getElement$1 = (ref) => getHostRef$1(ref).$hostElement$ ;

// src/runtime/event-emitter.ts
var createEvent = (ref, name, flags) => {
  const elm = getElement$1(ref);
  return {
    emit: (detail) => {
      return emitEvent$1(elm, name, {
        bubbles: !!(flags & 4 /* Bubbles */),
        composed: !!(flags & 2 /* Composed */),
        cancelable: !!(flags & 1 /* Cancellable */),
        detail
      });
    }
  };
};
var emitEvent$1 = (elm, name, opts) => {
  const ev = plt$1.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var rootAppliedStyles$1 = /* @__PURE__ */ new WeakMap();
var registerStyle$1 = (scopeId2, cssText, allowCS) => {
  let style = styles$1.get(scopeId2);
  if (supportsConstructableStylesheets$1 && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles$1.set(scopeId2, style);
};
var addStyle$1 = (styleContainerNode, cmpMeta, mode) => {
  var _a;
  const scopeId2 = getScopeId$1(cmpMeta);
  const style = styles$1.get(scopeId2);
  if (!win$1.document) {
    return scopeId2;
  }
  styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : win$1.document;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles$1.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles$1.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        if (styleContainerNode.host && (styleElm = styleContainerNode.querySelector(`[${HYDRATED_STYLE_ID}="${scopeId2}"]`))) {
          styleElm.innerHTML = style;
        } else {
          styleElm = document.querySelector(`[${HYDRATED_STYLE_ID}="${scopeId2}"]`) || win$1.document.createElement("style");
          styleElm.innerHTML = style;
          const nonce = (_a = plt$1.$nonce$) != null ? _a : queryNonceMetaTagContent$1(win$1.document);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          if (!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */)) {
            if (styleContainerNode.nodeName === "HEAD") {
              const preconnectLinks = styleContainerNode.querySelectorAll("link[rel=preconnect]");
              const referenceNode2 = preconnectLinks.length > 0 ? preconnectLinks[preconnectLinks.length - 1].nextSibling : styleContainerNode.querySelector("style");
              styleContainerNode.insertBefore(
                styleElm,
                (referenceNode2 == null ? void 0 : referenceNode2.parentNode) === styleContainerNode ? referenceNode2 : null
              );
            } else if ("host" in styleContainerNode) {
              if (supportsConstructableStylesheets$1) {
                const stylesheet = new CSSStyleSheet();
                stylesheet.replaceSync(style);
                styleContainerNode.adoptedStyleSheets = [stylesheet, ...styleContainerNode.adoptedStyleSheets];
              } else {
                const existingStyleContainer = styleContainerNode.querySelector("style");
                if (existingStyleContainer) {
                  existingStyleContainer.innerHTML = style + existingStyleContainer.innerHTML;
                } else {
                  styleContainerNode.prepend(styleElm);
                }
              }
            } else {
              styleContainerNode.append(styleElm);
            }
          }
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            styleContainerNode.insertBefore(styleElm, null);
          }
        }
        if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
          styleElm.innerHTML += SLOT_FB_CSS$1;
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
    }
  }
  return scopeId2;
};
var attachStyles$1 = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime$1("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle$1(
    elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(),
    cmpMeta);
  if ((flags & 10 /* needsScopedEncapsulation */ && flags & 2 /* scopedCssEncapsulation */ || flags & 128 /* shadowNeedsScopedCss */)) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
  }
  endAttachStyles();
};
var getScopeId$1 = (cmp, mode) => "sc-" + (cmp.$tagName$);
var convertScopedToShadow = (css) => css.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{");
var hydrateScopedToShadow = () => {
  if (!win$1.document) {
    return;
  }
  const styles2 = win$1.document.querySelectorAll(`[${HYDRATED_STYLE_ID}]`);
  let i2 = 0;
  for (; i2 < styles2.length; i2++) {
    registerStyle$1(styles2[i2].getAttribute(HYDRATED_STYLE_ID), convertScopedToShadow(styles2[i2].innerHTML), true);
  }
};
var setAccessor$1 = (elm, memberName, oldValue, newValue, isSvg, flags, initialRender) => {
  if (oldValue === newValue) {
    return;
  }
  let isProp = isMemberInElement$1(elm, memberName);
  let ln = memberName.toLowerCase();
  if (memberName === "class") {
    const classList = elm.classList;
    const oldClasses = parseClassList$1(oldValue);
    let newClasses = parseClassList$1(newValue);
    if (elm["s-si"] && initialRender) {
      newClasses.push(elm["s-si"]);
      oldClasses.forEach((c) => {
        if (c.startsWith(elm["s-si"])) newClasses.push(c);
      });
      newClasses = [...new Set(newClasses)];
      classList.add(...newClasses);
    } else {
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    }
  } else if (memberName === "style") {
    {
      for (const prop in oldValue) {
        if (!newValue || newValue[prop] == null) {
          if (prop.includes("-")) {
            elm.style.removeProperty(prop);
          } else {
            elm.style[prop] = "";
          }
        }
      }
    }
    for (const prop in newValue) {
      if (!oldValue || newValue[prop] !== oldValue[prop]) {
        if (prop.includes("-")) {
          elm.style.setProperty(prop, newValue[prop]);
        } else {
          elm.style[prop] = newValue[prop];
        }
      }
    }
  } else if (memberName === "key") ; else if (memberName === "ref") {
    if (newValue) {
      newValue(elm);
    }
  } else if ((!isProp ) && memberName[0] === "o" && memberName[1] === "n") {
    if (memberName[2] === "-") {
      memberName = memberName.slice(3);
    } else if (isMemberInElement$1(win$1, ln)) {
      memberName = ln.slice(2);
    } else {
      memberName = ln[2] + memberName.slice(3);
    }
    if (oldValue || newValue) {
      const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
      memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
      if (oldValue) {
        plt$1.rel(elm, memberName, oldValue, capture);
      }
      if (newValue) {
        plt$1.ael(elm, memberName, newValue, capture);
      }
    }
  } else {
    const isComplex = isComplexType$1(newValue);
    if ((isProp || isComplex && newValue !== null) && !isSvg) {
      try {
        if (!elm.tagName.includes("-")) {
          const n = newValue == null ? "" : newValue;
          if (memberName === "list") {
            isProp = false;
          } else if (oldValue == null || elm[memberName] != n) {
            if (typeof elm.__lookupSetter__(memberName) === "function") {
              elm[memberName] = n;
            } else {
              elm.setAttribute(memberName, n);
            }
          }
        } else if (elm[memberName] !== newValue) {
          elm[memberName] = newValue;
        }
      } catch (e) {
      }
    }
    let xlink = false;
    {
      if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
        memberName = ln;
        xlink = true;
      }
    }
    if (newValue == null || newValue === false) {
      if (newValue !== false || elm.getAttribute(memberName) === "") {
        if (xlink) {
          elm.removeAttributeNS(XLINK_NS, memberName);
        } else {
          elm.removeAttribute(memberName);
        }
      }
    } else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex && elm.nodeType === 1 /* ElementNode */) {
      newValue = newValue === true ? "" : newValue;
      if (xlink) {
        elm.setAttributeNS(XLINK_NS, memberName, newValue);
      } else {
        elm.setAttribute(memberName, newValue);
      }
    }
  }
};
var parseClassListRegex$1 = /\s/;
var parseClassList$1 = (value) => {
  if (typeof value === "object" && value && "baseVal" in value) {
    value = value.baseVal;
  }
  if (!value || typeof value !== "string") {
    return [];
  }
  return value.split(parseClassListRegex$1);
};
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");

// src/runtime/vdom/update-element.ts
var updateElement$1 = (oldVnode, newVnode, isSvgMode2, isInitialRender) => {
  const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || {};
  const newVnodeAttrs = newVnode.$attrs$ || {};
  {
    for (const memberName of sortedAttrNames$1(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor$1(
          elm,
          memberName,
          oldVnodeAttrs[memberName],
          void 0,
          isSvgMode2,
          newVnode.$flags$,
          isInitialRender
        );
      }
    }
  }
  for (const memberName of sortedAttrNames$1(Object.keys(newVnodeAttrs))) {
    setAccessor$1(
      elm,
      memberName,
      oldVnodeAttrs[memberName],
      newVnodeAttrs[memberName],
      isSvgMode2,
      newVnode.$flags$,
      isInitialRender
    );
  }
};
function sortedAttrNames$1(attrNames) {
  return attrNames.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...attrNames.filter((attr) => attr !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    attrNames
  );
}
var hostTagName$1;
var isSvgMode$1 = false;
var createElm$1 = (oldParentVNode, newParentVNode, childIndex) => {
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = win$1.document.createTextNode(newVNode2.$text$);
  } else {
    if (!isSvgMode$1) {
      isSvgMode$1 = newVNode2.$tag$ === "svg";
    }
    if (!win$1.document) {
      throw new Error(
        "You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component."
      );
    }
    elm = newVNode2.$elm$ = win$1.document.createElementNS(
      isSvgMode$1 ? SVG_NS$1 : HTML_NS$1,
      newVNode2.$tag$
    ) ;
    if (isSvgMode$1 && newVNode2.$tag$ === "foreignObject") {
      isSvgMode$1 = false;
    }
    {
      updateElement$1(null, newVNode2, isSvgMode$1);
    }
    if (newVNode2.$children$) {
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm$1(oldParentVNode, newVNode2, i2);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode$1 = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode$1 = true;
      }
    }
  }
  elm["s-hn"] = hostTagName$1;
  return elm;
};
var addVnodes$1 = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName$1) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm$1(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        insertBefore$1(containerElm, childNode, before);
      }
    }
  }
};
var removeVnodes$1 = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        elm.remove();
      }
    }
  }
};
var updateChildren$1 = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode$1(oldStartVnode, newStartVnode, isInitialRender)) {
      patch$1(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode$1(oldEndVnode, newEndVnode, isInitialRender)) {
      patch$1(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode$1(oldStartVnode, newEndVnode, isInitialRender)) {
      patch$1(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore$1(parentElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode$1(oldEndVnode, newStartVnode, isInitialRender)) {
      patch$1(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore$1(parentElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm$1(oldCh && oldCh[newStartIdx], newVNode2, idxInOld);
        } else {
          patch$1(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm$1(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          insertBefore$1(oldStartVnode.$elm$.parentNode, node, oldStartVnode.$elm$);
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes$1(
      parentElm,
      newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$,
      newVNode2,
      newCh,
      newStartIdx,
      newEndIdx
    );
  } else if (newStartIdx > newEndIdx) {
    removeVnodes$1(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode$1 = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    if (isInitialRender && !leftVNode.$key$ && rightVNode.$key$) {
      leftVNode.$key$ = rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var patch$1 = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  if (text === null) {
    {
      isSvgMode$1 = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode$1;
    }
    {
      updateElement$1(oldVNode, newVNode2, isSvgMode$1, isInitialRender);
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren$1(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes$1(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (
      // don't do this on initial render as it can cause non-hydrated content to be removed
      !isInitialRender && BUILD$1.updatable && oldChildren !== null
    ) {
      removeVnodes$1(oldChildren, 0, oldChildren.length - 1);
    }
    if (isSvgMode$1 && tag === "svg") {
      isSvgMode$1 = false;
    }
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var nullifyVNodeRefs = (vNode) => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var insertBefore$1 = (parent, newNode, reference) => {
  {
    return parent == null ? void 0 : parent.insertBefore(newNode, reference);
  }
};
var renderVdom$1 = (hostRef, renderFnResults, isInitialLoad = false) => {
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode$1(null, null);
  const isHostElement = isHost$1(renderFnResults);
  const rootVnode = isHostElement ? renderFnResults : h$1(null, null, renderFnResults);
  hostTagName$1 = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(
      ([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]
    );
  }
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4 /* isHost */;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm ;
  patch$1(oldVNode, rootVnode, isInitialLoad);
};

// src/runtime/update-component.ts
var attachToAncestor$1 = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    const index = ancestorComponent["s-p"].push(
      new Promise(
        (r) => hostRef.$onRenderResolve$ = () => {
          ancestorComponent["s-p"].splice(index - 1, 1);
          r();
        }
      )
    );
  }
};
var scheduleUpdate$1 = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
  }
  if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
    hostRef.$flags$ |= 512 /* needsRerender */;
    return;
  }
  attachToAncestor$1(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks$1(hostRef, isInitialLoad);
  return writeTask$1(dispatch) ;
};
var dispatchHooks$1 = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime$1("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$ ;
  if (!instance) {
    throw new Error(
      `Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  }
  let maybePromise;
  if (isInitialLoad) {
    {
      hostRef.$flags$ |= 256 /* isListenReady */;
      if (hostRef.$queuedListeners$) {
        hostRef.$queuedListeners$.map(([methodName, event]) => safeCall$1(instance, methodName, event, elm));
        hostRef.$queuedListeners$ = void 0;
      }
    }
    maybePromise = safeCall$1(instance, "componentWillLoad", void 0, elm);
  } else {
    maybePromise = safeCall$1(instance, "componentWillUpdate", void 0, elm);
  }
  maybePromise = enqueue$1(maybePromise, () => safeCall$1(instance, "componentWillRender", void 0, elm));
  endSchedule();
  return enqueue$1(maybePromise, () => updateComponent$1(hostRef, instance, isInitialLoad));
};
var enqueue$1 = (maybePromise, fn) => isPromisey$1(maybePromise) ? maybePromise.then(fn).catch((err2) => {
  console.error(err2);
  fn();
}) : fn();
var isPromisey$1 = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent$1 = async (hostRef, instance, isInitialLoad) => {
  var _a;
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime$1("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (isInitialLoad) {
    attachStyles$1(hostRef);
  }
  const endRender = createTime$1("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender$1(hostRef, instance, elm, isInitialLoad);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
    const postUpdate = () => postUpdateComponent$1(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4 /* isWaitingForChildren */;
      childrenPromises.length = 0;
    }
  }
};
var callRender$1 = (hostRef, instance, elm, isInitialLoad) => {
  try {
    instance = instance.render() ;
    {
      hostRef.$flags$ &= -17 /* isQueuedForUpdate */;
    }
    {
      hostRef.$flags$ |= 2 /* hasRendered */;
    }
    {
      {
        {
          renderVdom$1(hostRef, instance, isInitialLoad);
        }
      }
    }
  } catch (e) {
    consoleError$1(e, hostRef.$hostElement$);
  }
  return null;
};
var postUpdateComponent$1 = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime$1("postUpdate", tagName);
  const instance = hostRef.$lazyInstance$ ;
  const ancestorComponent = hostRef.$ancestorComponent$;
  safeCall$1(instance, "componentDidRender", void 0, elm);
  if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
    hostRef.$flags$ |= 64 /* hasLoadedComponent */;
    {
      addHydratedFlag$1(elm);
    }
    safeCall$1(instance, "componentDidLoad", void 0, elm);
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad$1();
      }
    }
  } else {
    safeCall$1(instance, "componentDidUpdate", void 0, elm);
    endPostUpdate();
  }
  {
    hostRef.$onInstanceResolve$(elm);
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512 /* needsRerender */) {
      nextTick$1(() => scheduleUpdate$1(hostRef, false));
    }
    hostRef.$flags$ &= -517;
  }
};
var forceUpdate = (ref) => {
  {
    const hostRef = getHostRef$1(ref);
    const isConnected = hostRef.$hostElement$.isConnected;
    if (isConnected && (hostRef.$flags$ & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
      scheduleUpdate$1(hostRef, false);
    }
    return isConnected;
  }
};
var appDidLoad$1 = (who) => {
  nextTick$1(() => emitEvent$1(win$1, "appload", { detail: { namespace: NAMESPACE$1 } }));
};
var safeCall$1 = (instance, method, arg, elm) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError$1(e, elm);
    }
  }
  return void 0;
};
var addHydratedFlag$1 = (elm) => {
  var _a;
  return elm.classList.add((_a = BUILD$1.hydratedSelectorName) != null ? _a : "hydrated") ;
};

// src/runtime/set-value.ts
var getValue$1 = (ref, propName) => getHostRef$1(ref).$instanceValues$.get(propName);
var setValue$1 = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef$1(ref);
  if (!hostRef) {
    throw new Error(
      `Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`
    );
  }
  const elm = hostRef.$hostElement$ ;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$ ;
  newVal = parsePropertyValue$1(newVal, cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8 /* isConstructingInstance */) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map((watchMethodName) => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError$1(e, elm);
            }
          });
        }
      }
      if ((flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
        if (instance.componentShouldUpdate) {
          if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
            return;
          }
        }
        scheduleUpdate$1(hostRef, false);
      }
    }
  }
};

// src/runtime/proxy-component.ts
var proxyComponent$1 = (Cstr, cmpMeta, flags) => {
  var _a, _b;
  const prototype = Cstr.prototype;
  if (cmpMeta.$flags$ & 64 /* formAssociated */ && flags & 1 /* isElementConstructor */) {
    FORM_ASSOCIATED_CUSTOM_ELEMENT_CALLBACKS.forEach((cbName) => {
      Object.defineProperty(prototype, cbName, {
        value(...args) {
          const hostRef = getHostRef$1(this);
          const instance = hostRef.$lazyInstance$ ;
          if (!instance) {
            hostRef.$onReadyPromise$.then((asyncInstance) => {
              const cb = asyncInstance[cbName];
              typeof cb === "function" && cb.call(asyncInstance, ...args);
            });
          } else {
            const cb = instance[cbName] ;
            typeof cb === "function" && cb.call(instance, ...args);
          }
        }
      });
    });
  }
  if (cmpMeta.$members$ || (cmpMeta.$watchers$ || Cstr.watchers)) {
    if (Cstr.watchers && !cmpMeta.$watchers$) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
    members.map(([memberName, [memberFlags]]) => {
      if ((memberFlags & 31 /* Prop */ || (flags & 2 /* proxyState */) && memberFlags & 32 /* State */)) {
        const { get: origGetter, set: origSetter } = Object.getOwnPropertyDescriptor(prototype, memberName) || {};
        if (origGetter) cmpMeta.$members$[memberName][0] |= 2048 /* Getter */;
        if (origSetter) cmpMeta.$members$[memberName][0] |= 4096 /* Setter */;
        if (flags & 1 /* isElementConstructor */ || !origGetter) {
          Object.defineProperty(prototype, memberName, {
            get() {
              {
                if ((cmpMeta.$members$[memberName][0] & 2048 /* Getter */) === 0) {
                  return getValue$1(this, memberName);
                }
                const ref = getHostRef$1(this);
                const instance = ref ? ref.$lazyInstance$ : prototype;
                if (!instance) return;
                return instance[memberName];
              }
            },
            configurable: true,
            enumerable: true
          });
        }
        Object.defineProperty(prototype, memberName, {
          set(newValue) {
            const ref = getHostRef$1(this);
            if (origSetter) {
              const currentValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              if (typeof currentValue === "undefined" && ref.$instanceValues$.get(memberName)) {
                newValue = ref.$instanceValues$.get(memberName);
              } else if (!ref.$instanceValues$.get(memberName) && currentValue) {
                ref.$instanceValues$.set(memberName, currentValue);
              }
              origSetter.apply(this, [parsePropertyValue$1(newValue, memberFlags)]);
              newValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              setValue$1(this, memberName, newValue, cmpMeta);
              return;
            }
            {
              if ((flags & 1 /* isElementConstructor */) === 0 || (cmpMeta.$members$[memberName][0] & 4096 /* Setter */) === 0) {
                setValue$1(this, memberName, newValue, cmpMeta);
                if (flags & 1 /* isElementConstructor */ && !ref.$lazyInstance$) {
                  ref.$onReadyPromise$.then(() => {
                    if (cmpMeta.$members$[memberName][0] & 4096 /* Setter */ && ref.$lazyInstance$[memberName] !== ref.$instanceValues$.get(memberName)) {
                      ref.$lazyInstance$[memberName] = newValue;
                    }
                  });
                }
                return;
              }
              const setterSetVal = () => {
                const currentValue = ref.$lazyInstance$[memberName];
                if (!ref.$instanceValues$.get(memberName) && currentValue) {
                  ref.$instanceValues$.set(memberName, currentValue);
                }
                ref.$lazyInstance$[memberName] = parsePropertyValue$1(newValue, memberFlags);
                setValue$1(this, memberName, ref.$lazyInstance$[memberName], cmpMeta);
              };
              if (ref.$lazyInstance$) {
                setterSetVal();
              } else {
                ref.$onReadyPromise$.then(() => setterSetVal());
              }
            }
          }
        });
      } else if (flags & 1 /* isElementConstructor */ && memberFlags & 64 /* Method */) {
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            var _a2;
            const ref = getHostRef$1(this);
            return (_a2 = ref == null ? void 0 : ref.$onInstancePromise$) == null ? void 0 : _a2.then(() => {
              var _a3;
              return (_a3 = ref.$lazyInstance$) == null ? void 0 : _a3[memberName](...args);
            });
          }
        });
      }
    });
    if ((flags & 1 /* isElementConstructor */)) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
        plt$1.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName) && BUILD$1.lazyLoad) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && // cast type to number to avoid TS compiler issues
          this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const hostRef = getHostRef$1(this);
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (flags2 && !(flags2 & 8 /* isConstructingInstance */) && flags2 & 128 /* isWatchReady */ && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$ ;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((callbackName) => {
                if (instance[callbackName] != null) {
                  instance[callbackName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          const propDesc = Object.getOwnPropertyDescriptor(prototype, propName);
          newValue = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
          if (newValue !== this[propName] && (!propDesc.get || !!propDesc.set)) {
            this[propName] = newValue;
          }
        });
      };
      Cstr.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}),
          ...members.filter(([_, m]) => m[0] & 15 /* HasAttribute */).map(([propName, m]) => {
            var _a2;
            const attrName = m[1] || propName;
            attrNameToPropName.set(attrName, propName);
            if (m[0] & 512 /* ReflectAttr */) {
              (_a2 = cmpMeta.$attrsToReflect$) == null ? void 0 : _a2.push([propName, attrName]);
            }
            return attrName;
          })
        ])
      );
    }
  }
  return Cstr;
};

// src/runtime/initialize-component.ts
var initializeComponent$1 = async (elm, hostRef, cmpMeta, hmrVersionId) => {
  let Cstr;
  if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
    hostRef.$flags$ |= 32 /* hasInitializedComponent */;
    const bundleId = cmpMeta.$lazyBundleId$;
    if (bundleId) {
      const CstrImport = loadModule$1(cmpMeta, hostRef);
      if (CstrImport && "then" in CstrImport) {
        const endLoad = uniqueTime$1();
        Cstr = await CstrImport;
        endLoad();
      } else {
        Cstr = CstrImport;
      }
      if (!Cstr) {
        throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
      }
      if (!Cstr.isProxied) {
        {
          cmpMeta.$watchers$ = Cstr.watchers;
        }
        proxyComponent$1(Cstr, cmpMeta, 2 /* proxyState */);
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime$1("createInstance", cmpMeta.$tagName$);
      {
        hostRef.$flags$ |= 8 /* isConstructingInstance */;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError$1(e, elm);
      }
      {
        hostRef.$flags$ &= -9 /* isConstructingInstance */;
      }
      {
        hostRef.$flags$ |= 128 /* isWatchReady */;
      }
      endNewInstance();
      fireConnectedCallback$1(hostRef.$lazyInstance$, elm);
    } else {
      Cstr = elm.constructor;
      const cmpTag = elm.localName;
      customElements.whenDefined(cmpTag).then(() => hostRef.$flags$ |= 128 /* isWatchReady */);
    }
    if (Cstr && Cstr.style) {
      let style;
      if (typeof Cstr.style === "string") {
        style = Cstr.style;
      }
      const scopeId2 = getScopeId$1(cmpMeta);
      if (!styles$1.has(scopeId2)) {
        const endRegisterStyles = createTime$1("registerStyles", cmpMeta.$tagName$);
        registerStyle$1(scopeId2, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate$1(hostRef, true);
  if (ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
};
var fireConnectedCallback$1 = (instance, elm) => {
  {
    safeCall$1(instance, "connectedCallback", void 0, elm);
  }
};

// src/runtime/connected-callback.ts
var connectedCallback$1 = (elm) => {
  if ((plt$1.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef$1(elm);
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime$1("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
      hostRef.$flags$ |= 1 /* hasConnected */;
      let hostId;
      {
        hostId = elm.getAttribute(HYDRATE_ID);
        if (hostId) {
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            const scopeId2 = addStyle$1(elm.shadowRoot, cmpMeta);
            elm.classList.remove(scopeId2 + "-h", scopeId2 + "-s");
          }
          initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
        }
      }
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent.nodeType === 1 /* ElementNode */ && ancestorComponent.hasAttribute("s-id") && ancestorComponent["s-p"] || ancestorComponent["s-p"]) {
            attachToAncestor$1(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent$1(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback$1(hostRef.$lazyInstance$, elm);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback$1(hostRef.$lazyInstance$, elm));
      }
    }
    endConnected();
  }
};
var disconnectInstance$1 = (instance, elm) => {
  {
    safeCall$1(instance, "disconnectedCallback", void 0, elm || instance);
  }
};
var disconnectedCallback$1 = async (elm) => {
  if ((plt$1.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef$1(elm);
    {
      if (hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
      disconnectInstance$1(hostRef.$lazyInstance$, elm);
    } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance$1(hostRef.$lazyInstance$, elm));
    }
  }
  if (rootAppliedStyles$1.has(elm)) {
    rootAppliedStyles$1.delete(elm);
  }
  if (elm.shadowRoot && rootAppliedStyles$1.has(elm.shadowRoot)) {
    rootAppliedStyles$1.delete(elm.shadowRoot);
  }
};

// src/runtime/bootstrap-lazy.ts
var bootstrapLazy$1 = (lazyBundles, options = {}) => {
  var _a;
  if (!win$1.document) {
    console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");
    return;
  }
  const endBootstrap = createTime$1();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements2 = win$1.customElements;
  const head = win$1.document.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const dataStyles = /* @__PURE__ */ win$1.document.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt$1, options);
  plt$1.$resourcesUrl$ = new URL(options.resourcesUrl || "./", win$1.document.baseURI).href;
  {
    plt$1.$flags$ |= 2 /* appLoaded */;
  }
  {
    hydrateScopedToShadow();
  }
  let hasSlotRelocation = false;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      var _a2;
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
        hasSlotRelocation = true;
      }
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      {
        cmpMeta.$listeners$ = compactMeta[3];
      }
      {
        cmpMeta.$attrsToReflect$ = [];
      }
      {
        cmpMeta.$watchers$ = (_a2 = compactMeta[4]) != null ? _a2 : {};
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self) {
          super(self);
          this.hasRegisteredEventListeners = false;
          self = this;
          registerHost$1(self, cmpMeta);
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            {
              if (!self.shadowRoot) {
                {
                  self.attachShadow({ mode: "open" });
                }
              } else {
                if (self.shadowRoot.mode !== "open") {
                  throw new Error(
                    `Unable to re-use existing shadow root for ${cmpMeta.$tagName$}! Mode is set to ${self.shadowRoot.mode} but Stencil only supports open shadow roots.`
                  );
                }
              }
            }
          }
        }
        connectedCallback() {
          const hostRef = getHostRef$1(this);
          if (!this.hasRegisteredEventListeners) {
            this.hasRegisteredEventListeners = true;
            addHostEventListeners(this, hostRef, cmpMeta.$listeners$);
          }
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt$1.jmp(() => connectedCallback$1(this));
          }
        }
        disconnectedCallback() {
          plt$1.jmp(() => disconnectedCallback$1(this));
          plt$1.raf(() => {
            var _a3;
            const hostRef = getHostRef$1(this);
            const i2 = deferredConnectedCallbacks.findIndex((host) => host === this);
            if (i2 > -1) {
              deferredConnectedCallbacks.splice(i2, 1);
            }
            if (((_a3 = hostRef == null ? void 0 : hostRef.$vnode$) == null ? void 0 : _a3.$elm$) instanceof Node && !hostRef.$vnode$.$elm$.isConnected) {
              delete hostRef.$vnode$.$elm$;
            }
          });
        }
        componentOnReady() {
          return getHostRef$1(this).$onReadyPromise$;
        }
      };
      if (cmpMeta.$flags$ & 64 /* formAssociated */) {
        HostElement.formAssociated = true;
      }
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(
          tagName,
          proxyComponent$1(HostElement, cmpMeta, 1 /* isElementConstructor */)
        );
      }
    });
  });
  if (cmpTags.length > 0) {
    if (hasSlotRelocation) {
      dataStyles.textContent += SLOT_FB_CSS$1;
    }
    {
      dataStyles.textContent += cmpTags.sort() + HYDRATED_CSS$1;
    }
    if (dataStyles.innerHTML.length) {
      dataStyles.setAttribute("data-styles", "");
      const nonce = (_a = plt$1.$nonce$) != null ? _a : queryNonceMetaTagContent$1(win$1.document);
      if (nonce != null) {
        dataStyles.setAttribute("nonce", nonce);
      }
      head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    {
      plt$1.jmp(() => appLoadFallback = setTimeout(appDidLoad$1, 30));
    }
  }
  endBootstrap();
};

// src/runtime/fragment.ts
var Fragment = (_, children) => children;
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
  if (listeners && win$1.document) {
    listeners.map(([flags, name, method]) => {
      const target = getHostListenerTarget(win$1.document, elm, flags) ;
      const handler = hostListenerProxy(hostRef, method);
      const opts = hostListenerOpts(flags);
      plt$1.ael(target, name, handler, opts);
      (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt$1.rel(target, name, handler, opts));
    });
  }
};
var hostListenerProxy = (hostRef, methodName) => (ev) => {
  var _a;
  try {
    {
      if (hostRef.$flags$ & 256 /* isListenReady */) {
        (_a = hostRef.$lazyInstance$) == null ? void 0 : _a[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    }
  } catch (e) {
    consoleError$1(e, hostRef.$hostElement$);
  }
};
var getHostListenerTarget = (doc, elm, flags) => {
  if (flags & 8 /* TargetWindow */) {
    return win$1;
  }
  return elm;
};
var hostListenerOpts = (flags) => supportsListenerOptions ? {
  passive: (flags & 1 /* Passive */) !== 0,
  capture: (flags & 2 /* Capture */) !== 0
} : (flags & 2 /* Capture */) !== 0;

/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function handlePlatformHelpers(config) {
    const platformHelpers = {};
    if (config.ael) {
        platformHelpers.ael = config.ael;
    }
    if (config.rel) {
        platformHelpers.rel = config.rel;
    }
    if (config.ce) {
        platformHelpers.ce = config.ce;
    }
    setPlatformHelpers(platformHelpers);
}
async function appGlobalScript (config) {
    handlePlatformHelpers(config || {});
}

const globalScripts$1 = appGlobalScript;

const defineCustomElements$1 = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts$1();
  return bootstrapLazy$1(JSON.parse("[[\"ix-datetime-picker\",[[1,\"ix-datetime-picker\",{\"range\":[4],\"showHour\":[4,\"show-hour\"],\"showMinutes\":[4,\"show-minutes\"],\"showSeconds\":[4,\"show-seconds\"],\"minDate\":[1,\"min-date\"],\"maxDate\":[1,\"max-date\"],\"dateFormat\":[1,\"date-format\"],\"timeFormat\":[1,\"time-format\"],\"from\":[1],\"to\":[1],\"time\":[1],\"showTimeReference\":[4,\"show-time-reference\"],\"timeReference\":[1,\"time-reference\"],\"i18nDone\":[1,\"i18n-done\"],\"i18nTime\":[1,\"i-1-8n-time\"],\"weekStartIndex\":[2,\"week-start-index\"],\"locale\":[1],\"showWeekNumbers\":[4,\"show-week-numbers\"]}]]],[\"ix-pagination\",[[1,\"ix-pagination\",{\"advanced\":[4],\"itemCount\":[2,\"item-count\"],\"showItemCount\":[4,\"show-item-count\"],\"count\":[2],\"selectedPage\":[1026,\"selected-page\"],\"i18nPage\":[1,\"i-1-8n-page\"],\"i18nOf\":[1,\"i-1-8n-of\"],\"i18nItems\":[1,\"i-1-8n-items\"]}]]],[\"ix-date-dropdown\",[[1,\"ix-date-dropdown\",{\"disabled\":[4],\"format\":[1],\"range\":[4],\"from\":[1],\"to\":[1],\"minDate\":[1,\"min-date\"],\"maxDate\":[1,\"max-date\"],\"dateRangeId\":[1,\"date-range-id\"],\"variant\":[1],\"outline\":[4],\"ghost\":[4],\"loading\":[4],\"showWeekNumbers\":[4,\"show-week-numbers\"],\"customRangeAllowed\":[4,\"custom-range-allowed\"],\"dateRangeOptions\":[16,\"date-range-options\"],\"locale\":[1],\"weekStartIndex\":[2,\"week-start-index\"],\"i18nCustomItem\":[1,\"i18n-custom-item\"],\"i18nDone\":[1,\"i18n-done\"],\"i18nNoRange\":[1,\"i18n-no-range\"],\"today\":[1],\"selectedDateRangeId\":[32],\"currentRangeValue\":[32],\"getDateRange\":[64]},null,{\"dateRangeId\":[\"onDateRangeIdChange\"],\"to\":[\"onDateRangeIdChange\"],\"from\":[\"onDateRangeIdChange\"],\"dateRangeOptions\":[\"onDateRangeOptionsChange\"],\"disabled\":[\"onDisabledChange\"]}]]],[\"ix-date-input\",[[65,\"ix-date-input\",{\"name\":[513],\"placeholder\":[513],\"value\":[1537],\"locale\":[1],\"format\":[1],\"required\":[4],\"helperText\":[1,\"helper-text\"],\"label\":[1],\"invalidText\":[513,\"invalid-text\"],\"readonly\":[4],\"disabled\":[4],\"infoText\":[1,\"info-text\"],\"warningText\":[1,\"warning-text\"],\"validText\":[1,\"valid-text\"],\"showTextAsTooltip\":[4,\"show-text-as-tooltip\"],\"i18nErrorDateUnparsable\":[1,\"i18n-error-date-unparsable\"],\"showWeekNumbers\":[4,\"show-week-numbers\"],\"show\":[32],\"from\":[32],\"isInputInvalid\":[32],\"isInvalid\":[32],\"isValid\":[32],\"isInfo\":[32],\"isWarning\":[32],\"focus\":[32],\"hasValidValue\":[64],\"getAssociatedFormElement\":[64],\"getValidityState\":[64],\"getNativeInputElement\":[64],\"focusInput\":[64],\"isTouched\":[64]},null,{\"value\":[\"watchValue\"],\"isInputInvalid\":[\"onInputValidationChange\"]}]]],[\"ix-map-navigation\",[[1,\"ix-map-navigation\",{\"applicationName\":[1,\"application-name\"],\"navigationTitle\":[1,\"navigation-title\"],\"hideContextMenu\":[4,\"hide-context-menu\"],\"isSidebarOpen\":[32],\"hasContentHeader\":[32],\"toggleSidebar\":[64],\"openOverlay\":[64],\"closeOverlay\":[64]}]]],[\"ix-menu-avatar\",[[1,\"ix-menu-avatar\",{\"top\":[1],\"bottom\":[1],\"image\":[1],\"initials\":[1],\"i18nLogout\":[1,\"i-1-8n-logout\"],\"showLogoutButton\":[4,\"show-logout-button\"],\"showContextMenu\":[32]}]]],[\"ix-basic-navigation\",[[1,\"ix-basic-navigation\",{\"applicationName\":[1,\"application-name\"],\"hideHeader\":[4,\"hide-header\"],\"forceBreakpoint\":[1,\"force-breakpoint\"],\"breakpoints\":[16],\"breakpoint\":[32]},null,{\"hideHeader\":[\"onHideHeaderChange\"],\"breakpoints\":[\"onBreakpointsChange\"]}]]],[\"ix-card-list\",[[1,\"ix-card-list\",{\"label\":[1],\"collapse\":[1028],\"listStyle\":[1,\"list-style\"],\"maxVisibleCards\":[2,\"max-visible-cards\"],\"showAllCount\":[2,\"show-all-count\"],\"suppressOverflowHandling\":[4,\"suppress-overflow-handling\"],\"hideShowAll\":[4,\"hide-show-all\"],\"i18nShowAll\":[1,\"i-1-8n-show-all\"],\"i18nMoreCards\":[1,\"i-1-8n-more-cards\"],\"hasOverflowingElements\":[32],\"numberOfOverflowingElements\":[32],\"numberOfAllChildElements\":[32],\"leftScrollDistance\":[32],\"rightScrollDistance\":[32]},[[9,\"resize\",\"detectOverflow\"]]]]],[\"ix-input\",[[65,\"ix-input\",{\"type\":[1],\"name\":[513],\"placeholder\":[513],\"value\":[1537],\"required\":[516],\"disabled\":[516],\"readonly\":[516],\"helperText\":[1,\"helper-text\"],\"infoText\":[1,\"info-text\"],\"showTextAsTooltip\":[4,\"show-text-as-tooltip\"],\"validText\":[1,\"valid-text\"],\"warningText\":[1,\"warning-text\"],\"label\":[513],\"invalidText\":[1,\"invalid-text\"],\"pattern\":[1],\"maxLength\":[2,\"max-length\"],\"minLength\":[2,\"min-length\"],\"allowedCharactersPattern\":[1,\"allowed-characters-pattern\"],\"isInvalid\":[32],\"isValid\":[32],\"isInfo\":[32],\"isWarning\":[32],\"isInvalidByRequired\":[32],\"inputType\":[32],\"getAssociatedFormElement\":[64],\"hasValidValue\":[64],\"getNativeInputElement\":[64],\"getValidityState\":[64],\"focusInput\":[64],\"isTouched\":[64]},null,{\"type\":[\"updateInputType\"]}]]],[\"ix-menu\",[[1,\"ix-menu\",{\"showSettings\":[1028,\"show-settings\"],\"showAbout\":[1028,\"show-about\"],\"enableToggleTheme\":[4,\"enable-toggle-theme\"],\"enableSettings\":[4,\"enable-settings\"],\"enableMapExpand\":[4,\"enable-map-expand\"],\"applicationName\":[1,\"application-name\"],\"applicationDescription\":[1,\"application-description\"],\"i18nExpandSidebar\":[1,\"i-1-8n-expand-sidebar\"],\"expand\":[1540],\"startExpanded\":[4,\"start-expanded\"],\"pinned\":[4],\"i18nLegal\":[1,\"i-1-8n-legal\"],\"i18nSettings\":[1,\"i-1-8n-settings\"],\"i18nToggleTheme\":[1,\"i-1-8n-toggle-theme\"],\"i18nExpand\":[1,\"i-1-8n-expand\"],\"i18nCollapse\":[1,\"i-1-8n-collapse\"],\"showPinned\":[32],\"mapExpand\":[32],\"breakpoint\":[32],\"itemsScrollShadowTop\":[32],\"itemsScrollShadowBottom\":[32],\"applicationLayoutContext\":[32],\"toggleMapExpand\":[64],\"toggleMenu\":[64],\"toggleSettings\":[64],\"toggleAbout\":[64]},[[9,\"resize\",\"handleOverflowIndicator\"],[0,\"close\",\"onOverlayClose\"]],{\"pinned\":[\"pinnedChange\"]}]]],[\"ix-menu-category\",[[1,\"ix-menu-category\",{\"label\":[1],\"icon\":[1],\"notifications\":[2],\"menuExpand\":[32],\"showItems\":[32],\"showDropdown\":[32],\"nestedItems\":[32]},[[8,\"closeOtherCategories\",\"onPointerLeave\"]]]]],[\"ix-number-input\",[[65,\"ix-number-input\",{\"name\":[513],\"placeholder\":[513],\"value\":[1538],\"required\":[516],\"disabled\":[4],\"readonly\":[4],\"helperText\":[1,\"helper-text\"],\"infoText\":[1,\"info-text\"],\"showTextAsTooltip\":[4,\"show-text-as-tooltip\"],\"validText\":[1,\"valid-text\"],\"warningText\":[1,\"warning-text\"],\"label\":[513],\"invalidText\":[1,\"invalid-text\"],\"pattern\":[1],\"min\":[8],\"max\":[8],\"allowedCharactersPattern\":[1,\"allowed-characters-pattern\"],\"showStepperButtons\":[4,\"show-stepper-buttons\"],\"step\":[8],\"isInvalid\":[32],\"isValid\":[32],\"isInfo\":[32],\"isWarning\":[32],\"isInvalidByRequired\":[32],\"getAssociatedFormElement\":[64],\"hasValidValue\":[64],\"getNativeInputElement\":[64],\"focusInput\":[64],\"isTouched\":[64]}]]],[\"ix-application-switch-modal\",[[1,\"ix-application-switch-modal\",{\"config\":[16]}]]],[\"ix-push-card\",[[1,\"ix-push-card\",{\"icon\":[1],\"notification\":[1],\"heading\":[1],\"subheading\":[1],\"variant\":[1],\"collapse\":[4]}]]],[\"ix-breadcrumb\",[[1,\"ix-breadcrumb\",{\"visibleItemCount\":[2,\"visible-item-count\"],\"nextItems\":[16,\"next-items\"],\"ghost\":[4],\"ariaLabelPreviousButton\":[1,\"aria-label-previous-button\"],\"items\":[32],\"isPreviousDropdownExpanded\":[32]},null,{\"nextItems\":[\"onNextItemsChange\"]}]]],[\"ix-category-filter\",[[1,\"ix-category-filter\",{\"disabled\":[4],\"readonly\":[4],\"filterState\":[16,\"filter-state\"],\"placeholder\":[1],\"categories\":[16],\"nonSelectableCategories\":[16,\"non-selectable-categories\"],\"suggestions\":[16],\"icon\":[1],\"hideIcon\":[4,\"hide-icon\"],\"staticOperator\":[1,\"static-operator\"],\"repeatCategories\":[4,\"repeat-categories\"],\"tmpDisableScrollIntoView\":[4,\"tmp-disable-scroll-into-view\"],\"labelCategories\":[1,\"label-categories\"],\"i18nPlainText\":[1,\"i-1-8n-plain-text\"],\"showDropdown\":[32],\"hasFocus\":[32],\"categoryLogicalOperator\":[32],\"inputValue\":[32],\"category\":[32],\"filterTokens\":[32]},null,{\"filterState\":[\"watchFilterState\"]}]]],[\"ix-checkbox-group\",[[1,\"ix-checkbox-group\",{\"helperText\":[1,\"helper-text\"],\"label\":[1],\"direction\":[1],\"invalidText\":[1,\"invalid-text\"],\"infoText\":[1,\"info-text\"],\"validText\":[1,\"valid-text\"],\"warningText\":[1,\"warning-text\"],\"showTextAsTooltip\":[4,\"show-text-as-tooltip\"],\"required\":[4],\"isInvalid\":[32],\"isInfo\":[32],\"isValid\":[32],\"isWarning\":[32],\"isTouched\":[64],\"hasValidValue\":[64]}]]],[\"ix-chip\",[[1,\"ix-chip\",{\"variant\":[513],\"active\":[4],\"closable\":[4],\"icon\":[1],\"background\":[1],\"chipColor\":[1,\"chip-color\"],\"outline\":[4],\"tooltipText\":[8,\"tooltip-text\"]}]]],[\"ix-custom-field\",[[1,\"ix-custom-field\",{\"required\":[4],\"label\":[1],\"helperText\":[1,\"helper-text\"],\"infoText\":[1,\"info-text\"],\"warningText\":[1,\"warning-text\"],\"invalidText\":[1,\"invalid-text\"],\"validText\":[1,\"valid-text\"],\"showTextAsTooltip\":[4,\"show-text-as-tooltip\"],\"isInvalid\":[32],\"isValid\":[32],\"isInfo\":[32],\"isWarning\":[32]}]]],[\"ix-dropdown-button\",[[1,\"ix-dropdown-button\",{\"variant\":[1],\"outline\":[4],\"ghost\":[4],\"disabled\":[4],\"label\":[1],\"icon\":[1],\"closeBehavior\":[8,\"close-behavior\"],\"placement\":[1]}]]],[\"ix-group\",[[1,\"ix-group\",{\"suppressHeaderSelection\":[4,\"suppress-header-selection\"],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"collapsed\":[1540],\"selected\":[1540],\"index\":[1538],\"expandOnHeaderClick\":[4,\"expand-on-header-click\"],\"itemSelected\":[32],\"slotSize\":[32],\"footerVisible\":[32],\"showExpandCollapsedIcon\":[32]},[[0,\"selectedChanged\",\"onItemClicked\"]],{\"selected\":[\"selectedChanged\"]}]]],[\"ix-menu-about\",[[1,\"ix-menu-about\",{\"activeTabLabel\":[1025,\"active-tab-label\"],\"label\":[1],\"show\":[4],\"items\":[32]},null,{\"activeTabLabel\":[\"updateTab\"]}]]],[\"ix-menu-about-news\",[[1,\"ix-menu-about-news\",{\"show\":[1540],\"label\":[1],\"i18nShowMore\":[1,\"i-1-8n-show-more\"],\"aboutItemLabel\":[1,\"about-item-label\"],\"offsetBottom\":[2,\"offset-bottom\"],\"expanded\":[4]}]]],[\"ix-menu-settings\",[[1,\"ix-menu-settings\",{\"activeTabLabel\":[1025,\"active-tab-label\"],\"label\":[1],\"show\":[4],\"items\":[32]},null,{\"activeTabLabel\":[\"updateTab\"]}]]],[\"ix-radio-group\",[[1,\"ix-radio-group\",{\"helperText\":[1,\"helper-text\"],\"label\":[1],\"value\":[1],\"invalidText\":[1,\"invalid-text\"],\"infoText\":[1,\"info-text\"],\"warningText\":[1,\"warning-text\"],\"validText\":[1,\"valid-text\"],\"showTextAsTooltip\":[4,\"show-text-as-tooltip\"],\"direction\":[1],\"required\":[4],\"isInvalid\":[32],\"isValid\":[32],\"isInfo\":[32],\"isWarning\":[32],\"hasValidValue\":[64],\"isTouched\":[64]},[[0,\"checkedChange\",\"onCheckedChangeHandler\"]],{\"value\":[\"onValueChangeHandler\"]}]]],[\"ix-split-button\",[[1,\"ix-split-button\",{\"variant\":[1],\"closeBehavior\":[8,\"close-behavior\"],\"outline\":[4],\"ghost\":[4],\"label\":[1],\"icon\":[1],\"splitIcon\":[1,\"split-icon\"],\"disabled\":[4],\"placement\":[1],\"toggle\":[32]}]]],[\"ix-textarea\",[[65,\"ix-textarea\",{\"name\":[513],\"placeholder\":[513],\"value\":[1537],\"required\":[516],\"disabled\":[4],\"readonly\":[4],\"helperText\":[1,\"helper-text\"],\"infoText\":[1,\"info-text\"],\"showTextAsTooltip\":[4,\"show-text-as-tooltip\"],\"validText\":[1,\"valid-text\"],\"warningText\":[1,\"warning-text\"],\"label\":[513],\"invalidText\":[1,\"invalid-text\"],\"textareaHeight\":[1,\"textarea-height\"],\"textareaWidth\":[1,\"textarea-width\"],\"textareaRows\":[2,\"textarea-rows\"],\"textareaCols\":[2,\"textarea-cols\"],\"resizeBehavior\":[1,\"resize-behavior\"],\"maxLength\":[2,\"max-length\"],\"minLength\":[2,\"min-length\"],\"isInvalid\":[32],\"isValid\":[32],\"isInfo\":[32],\"isWarning\":[32],\"isInvalidByRequired\":[32],\"getAssociatedFormElement\":[64],\"hasValidValue\":[64],\"getNativeInputElement\":[64],\"focusInput\":[64],\"isTouched\":[64]}]]],[\"ix-action-card\",[[1,\"ix-action-card\",{\"variant\":[1],\"icon\":[1],\"heading\":[1],\"subheading\":[1],\"selected\":[4]}]]],[\"ix-content-header\",[[1,\"ix-content-header\",{\"variant\":[1],\"headerTitle\":[1,\"header-title\"],\"headerSubtitle\":[1,\"header-subtitle\"],\"hasBackButton\":[4,\"has-back-button\"]}]]],[\"ix-empty-state\",[[1,\"ix-empty-state\",{\"layout\":[1],\"icon\":[1],\"header\":[1],\"subHeader\":[1,\"sub-header\"],\"action\":[1]}]]],[\"ix-pane\",[[1,\"ix-pane\",{\"heading\":[1],\"variant\":[1],\"hideOnCollapse\":[4,\"hide-on-collapse\"],\"size\":[1],\"borderless\":[4],\"expanded\":[1028],\"composition\":[1025],\"icon\":[1],\"ignoreLayoutSettings\":[4,\"ignore-layout-settings\"],\"isMobile\":[1028,\"is-mobile\"],\"expandIcon\":[32],\"showContent\":[32],\"minimizeIcon\":[32],\"floating\":[32],\"parentWidthPx\":[32],\"parentHeightPx\":[32]},null,{\"isMobile\":[\"onMobileChange\"],\"composition\":[\"onPositionChange\"],\"hideOnCollapse\":[\"onHideOnCollapseChange\"],\"variant\":[\"onVariantChange\"],\"borderless\":[\"onBorderlessChange\"],\"parentHeightPx\":[\"onParentSizeChange\"],\"parentWidthPx\":[\"onParentSizeChange\"],\"expanded\":[\"onSizeChange\"],\"size\":[\"onSizeChange\"]}]]],[\"ix-toast-container\",[[1,\"ix-toast-container\",{\"containerId\":[1,\"container-id\"],\"containerClass\":[1,\"container-class\"],\"position\":[1],\"showToast\":[64]},null,{\"position\":[\"onPositionChange\"]}]]],[\"ix-drawer\",[[1,\"ix-drawer\",{\"show\":[1028],\"closeOnClickOutside\":[4,\"close-on-click-outside\"],\"fullHeight\":[4,\"full-height\"],\"minWidth\":[2,\"min-width\"],\"maxWidth\":[2,\"max-width\"],\"width\":[8],\"showContent\":[32],\"toggleDrawer\":[64]},null,{\"show\":[\"onShowChanged\"]}]]],[\"ix-expanding-search\",[[1,\"ix-expanding-search\",{\"icon\":[1],\"placeholder\":[1],\"value\":[1025],\"fullWidth\":[4,\"full-width\"],\"variant\":[1],\"outline\":[4],\"ghost\":[4],\"isFieldChanged\":[32],\"expanded\":[32],\"hasFocus\":[32]}]]],[\"ix-flip-tile\",[[1,\"ix-flip-tile\",{\"state\":[1],\"height\":[8],\"width\":[8],\"index\":[2],\"isFlipAnimationActive\":[32]},null,{\"index\":[\"watchIndex\"]}]]],[\"ix-message-bar\",[[1,\"ix-message-bar\",{\"type\":[1],\"dismissible\":[4],\"icon\":[32],\"color\":[32]}]]],[\"ix-pill\",[[1,\"ix-pill\",{\"variant\":[513],\"outline\":[4],\"icon\":[1],\"background\":[1],\"pillColor\":[1,\"pill-color\"],\"alignLeft\":[4,\"align-left\"],\"tooltipText\":[8,\"tooltip-text\"],\"iconOnly\":[32]}]]],[\"ix-slider\",[[1,\"ix-slider\",{\"step\":[2],\"min\":[2],\"max\":[2],\"value\":[2],\"marker\":[16],\"trace\":[4],\"traceReference\":[2,\"trace-reference\"],\"disabled\":[4],\"error\":[8],\"rangeInput\":[32],\"rangeMin\":[32],\"rangeMax\":[32],\"rangeTraceReference\":[32],\"showTooltip\":[32]},null,{\"showTooltip\":[\"onShowTooltipChange\"],\"value\":[\"updateRangeVariables\"],\"max\":[\"updateRangeVariables\"],\"min\":[\"updateRangeVariables\"],\"traceReference\":[\"updateRangeVariables\"]}]]],[\"ix-upload\",[[1,\"ix-upload\",{\"accept\":[1],\"multiple\":[4],\"multiline\":[4],\"disabled\":[4],\"state\":[1],\"selectFileText\":[1,\"select-file-text\"],\"loadingText\":[1,\"loading-text\"],\"uploadFailedText\":[1,\"upload-failed-text\"],\"uploadSuccessText\":[1,\"upload-success-text\"],\"i18nUploadFile\":[1,\"i-1-8n-upload-file\"],\"i18nUploadDisabled\":[1,\"i-1-8n-upload-disabled\"],\"isFileOver\":[32],\"setFilesToUpload\":[64]}]]],[\"ix-blind\",[[1,\"ix-blind\",{\"collapsed\":[1540],\"label\":[1],\"sublabel\":[1],\"icon\":[1],\"variant\":[1]},null,{\"collapsed\":[\"animation\"]}]]],[\"ix-checkbox\",[[65,\"ix-checkbox\",{\"name\":[513],\"value\":[513],\"label\":[1],\"checked\":[1540],\"disabled\":[516],\"indeterminate\":[516],\"required\":[516],\"hasValidValue\":[64],\"getAssociatedFormElement\":[64],\"isTouched\":[64]},null,{\"checked\":[\"onCheckedChange\"],\"value\":[\"onValueChange\"]}]]],[\"ix-dropdown-header\",[[1,\"ix-dropdown-header\",{\"label\":[1]}]]],[\"ix-helper-text\",[[1,\"ix-helper-text\",{\"htmlFor\":[1,\"html-for\"],\"helperText\":[1,\"helper-text\"],\"invalidText\":[1,\"invalid-text\"],\"validText\":[1,\"valid-text\"],\"infoText\":[1,\"info-text\"],\"warningText\":[1,\"warning-text\"],\"validationResults\":[32]}]]],[\"ix-icon-toggle-button\",[[1,\"ix-icon-toggle-button\",{\"variant\":[1],\"outline\":[4],\"ghost\":[4],\"icon\":[1],\"oval\":[4],\"pressed\":[4],\"size\":[1],\"disabled\":[516],\"loading\":[4]},null,{\"variant\":[\"onVariantChange\"],\"ghost\":[\"onGhostChange\"],\"outline\":[\"onOutlineChange\"]}]]],[\"ix-modal-loading\",[[1,\"ix-modal-loading\"]]],[\"ix-radio\",[[65,\"ix-radio\",{\"name\":[513],\"value\":[513],\"label\":[1],\"disabled\":[4],\"checked\":[1540],\"required\":[516],\"hasValidValue\":[64],\"getAssociatedFormElement\":[64]},null,{\"checked\":[\"onCheckedChange\"],\"value\":[\"onValueChange\"]}]]],[\"ix-toggle\",[[65,\"ix-toggle\",{\"name\":[513],\"value\":[513],\"checked\":[1540],\"disabled\":[4],\"indeterminate\":[1540],\"textOn\":[1,\"text-on\"],\"textOff\":[1,\"text-off\"],\"textIndeterminate\":[1,\"text-indeterminate\"],\"hideText\":[4,\"hide-text\"],\"required\":[516],\"hasValidValue\":[64],\"getAssociatedFormElement\":[64],\"isTouched\":[64]},null,{\"checked\":[\"watchCheckedChange\"]}]]],[\"ix-toggle-button\",[[1,\"ix-toggle-button\",{\"variant\":[1],\"outline\":[4],\"ghost\":[4],\"disabled\":[516],\"loading\":[4],\"icon\":[1],\"pressed\":[4]},null,{\"variant\":[\"onVariantChange\"],\"ghost\":[\"onGhostChange\"],\"outline\":[\"onOutlineChange\"]}]]],[\"ix-tree\",[[1,\"ix-tree\",{\"root\":[1],\"model\":[16],\"renderItem\":[16,\"render-item\"],\"context\":[1040],\"toggleOnItemClick\":[4,\"toggle-on-item-click\"]},[[0,\"toggle\",\"onToggle\"]],{\"model\":[\"modelChange\"]}]]],[\"ix-application\",[[1,\"ix-application\",{\"theme\":[1],\"themeSystemAppearance\":[4,\"theme-system-appearance\"],\"forceBreakpoint\":[1,\"force-breakpoint\"],\"breakpoints\":[16],\"appSwitchConfig\":[16,\"app-switch-config\"],\"breakpoint\":[32],\"applicationSidebarSlotted\":[32]},null,{\"breakpoints\":[\"onBreakpointsChange\"],\"theme\":[\"changeTheme\"],\"themeSystemAppearance\":[\"changeTheme\"],\"appSwitchConfig\":[\"onApplicationSidebarChange\"],\"applicationSidebarSlotted\":[\"onApplicationSidebarChange\"]}]]],[\"ix-application-sidebar\",[[1,\"ix-application-sidebar\",{\"visible\":[32]},[[8,\"application-sidebar-toggle\",\"listenToggleEvent\"]]]]],[\"ix-content\",[[1,\"ix-content\",{\"isContentHeaderSlotted\":[32]}]]],[\"ix-css-grid\",[[1,\"ix-css-grid\",{\"templates\":[16],\"currentTemplate\":[32]}]]],[\"ix-css-grid-item\",[[1,\"ix-css-grid-item\",{\"itemName\":[1,\"item-name\"]}]]],[\"ix-dropdown-quick-actions\",[[1,\"ix-dropdown-quick-actions\"]]],[\"ix-event-list\",[[1,\"ix-event-list\",{\"itemHeight\":[8,\"item-height\"],\"compact\":[4],\"animated\":[4],\"chevron\":[4]},null,{\"chevron\":[\"watchChevron\"]}]]],[\"ix-event-list-item\",[[1,\"ix-event-list-item\",{\"itemColor\":[1,\"item-color\"],\"selected\":[4],\"disabled\":[4],\"chevron\":[4]},[[1,\"click\",\"handleItemClick\"]]]]],[\"ix-flip-tile-content\",[[1,\"ix-flip-tile-content\",{\"contentVisible\":[4,\"content-visible\"]}]]],[\"ix-input-group\",[[1,\"ix-input-group\",{\"disabled\":[32],\"inputPaddingLeft\":[32],\"inputPaddingRight\":[32]}]]],[\"ix-key-value\",[[1,\"ix-key-value\",{\"icon\":[1],\"label\":[1],\"labelPosition\":[1,\"label-position\"],\"value\":[1]}]]],[\"ix-key-value-list\",[[1,\"ix-key-value-list\",{\"striped\":[4]}]]],[\"ix-kpi\",[[1,\"ix-kpi\",{\"label\":[1],\"value\":[8],\"unit\":[1],\"state\":[1],\"orientation\":[1]}]]],[\"ix-layout-auto\",[[1,\"ix-layout-auto\",{\"layout\":[16]},null,{\"layout\":[\"updateMediaQueryList\"]}]]],[\"ix-link-button\",[[1,\"ix-link-button\",{\"disabled\":[4],\"url\":[1],\"target\":[1]}]]],[\"ix-menu-about-item\",[[1,\"ix-menu-about-item\",{\"label\":[513]},null,{\"label\":[\"watchLabel\"]}]]],[\"ix-menu-settings-item\",[[1,\"ix-menu-settings-item\",{\"label\":[513]},null,{\"label\":[\"watchLabel\"]}]]],[\"ix-modal\",[[1,\"ix-modal\",{\"size\":[1],\"animation\":[4],\"backdrop\":[4],\"closeOnBackdropClick\":[4,\"close-on-backdrop-click\"],\"beforeDismiss\":[16,\"before-dismiss\"],\"centered\":[4],\"closeOnEscape\":[4,\"close-on-escape\"],\"modalVisible\":[32],\"showModal\":[64],\"dismissModal\":[64],\"closeModal\":[64]}]]],[\"ix-modal-footer\",[[1,\"ix-modal-footer\"]]],[\"ix-pane-layout\",[[1,\"ix-pane-layout\",{\"layout\":[1],\"variant\":[1],\"borderless\":[4],\"isMobile\":[32],\"paneElements\":[32]},[[0,\"slotChanged\",\"onSlotChanged\"],[0,\"hideOnCollapseChanged\",\"onCollapsibleChanged\"],[0,\"variantChanged\",\"onVariantChanged\"]],{\"paneElements\":[\"onPaneElementsChange\"],\"variant\":[\"onVariableChange\"],\"borderless\":[\"onBorderChange\"],\"layout\":[\"onLayoutChange\"],\"isMobile\":[\"onMobileChange\"]}]]],[\"ix-tile\",[[1,\"ix-tile\",{\"size\":[1],\"hasHeaderSlot\":[32],\"hasFooterSlot\":[32]}]]],[\"ix-validation-tooltip\",[[1,\"ix-validation-tooltip\",{\"message\":[1],\"placement\":[1],\"suppressAutomaticPlacement\":[4,\"suppress-automatic-placement\"],\"isInputValid\":[32],\"tooltipPosition\":[32],\"arrowPosition\":[32]},null,{\"isInputValid\":[\"validationChanged\"]}]]],[\"ix-workflow-step\",[[1,\"ix-workflow-step\",{\"vertical\":[4],\"disabled\":[4],\"status\":[1],\"clickable\":[4],\"selected\":[4],\"position\":[1],\"iconName\":[32],\"iconColor\":[32]},null,{\"selected\":[\"selectedHandler\"],\"disabled\":[\"watchPropHandler\"],\"status\":[\"watchPropHandler\"]}]]],[\"ix-workflow-steps\",[[1,\"ix-workflow-steps\",{\"vertical\":[4],\"clickable\":[4],\"selectedIndex\":[2,\"selected-index\"]},[[0,\"selectedChanged\",\"onStepSelectionChanged\"]]]]],[\"ix-tab-item_2\",[[1,\"ix-tab-item\",{\"selected\":[4],\"disabled\":[4],\"small\":[4],\"icon\":[4],\"rounded\":[4],\"counter\":[2],\"layout\":[1],\"placement\":[1]}],[1,\"ix-tabs\",{\"small\":[4],\"rounded\":[4],\"selected\":[1026],\"layout\":[1],\"placement\":[1],\"totalItems\":[32],\"currentScrollAmount\":[32],\"scrollAmount\":[32],\"scrollActionAmount\":[32],\"showArrowPrevious\":[32],\"showArrowNext\":[32]},[[9,\"resize\",\"onWindowResize\"],[0,\"tabClick\",\"onTabClick\"]],{\"selected\":[\"onSelectedChange\"]}]]],[\"ix-filter-chip_2\",[[1,\"ix-select-item\",{\"label\":[513],\"value\":[513],\"selected\":[4],\"hover\":[4],\"getDropdownItemElement\":[64],\"onItemClick\":[64]},null,{\"value\":[\"onValueChange\"],\"label\":[\"labelChange\"]}],[1,\"ix-filter-chip\",{\"disabled\":[4],\"readonly\":[4]}]]],[\"ix-select\",[[65,\"ix-select\",{\"name\":[513],\"required\":[516],\"label\":[1],\"warningText\":[1,\"warning-text\"],\"infoText\":[1,\"info-text\"],\"invalidText\":[1,\"invalid-text\"],\"validText\":[1,\"valid-text\"],\"helperText\":[1,\"helper-text\"],\"showTextAsTooltip\":[4,\"show-text-as-tooltip\"],\"value\":[1025],\"allowClear\":[4,\"allow-clear\"],\"mode\":[1],\"editable\":[4],\"disabled\":[4],\"readonly\":[4],\"i18nPlaceholder\":[1,\"i-1-8n-placeholder\"],\"i18nPlaceholderEditable\":[1,\"i-1-8n-placeholder-editable\"],\"i18nSelectListHeader\":[1,\"i-1-8n-select-list-header\"],\"i18nNoMatches\":[1,\"i-1-8n-no-matches\"],\"hideListHeader\":[4,\"hide-list-header\"],\"dropdownWidth\":[1,\"dropdown-width\"],\"dropdownMaxWidth\":[1,\"dropdown-max-width\"],\"dropdownShow\":[32],\"selectedLabels\":[32],\"isDropdownEmpty\":[32],\"navigationItem\":[32],\"inputFilterText\":[32],\"inputValue\":[32],\"isInvalid\":[32],\"isValid\":[32],\"isInfo\":[32],\"isWarning\":[32],\"hasValidValue\":[64],\"getAssociatedFormElement\":[64],\"getNativeInputElement\":[64],\"focusInput\":[64],\"isTouched\":[64]},[[0,\"itemClick\",\"onItemClicked\"],[0,\"ix-select-item:valueChange\",\"onLabelChange\"],[0,\"ix-select-item:labelChange\",\"onLabelChange\"]],{\"value\":[\"watchValue\"],\"dropdownShow\":[\"watchDropdownShow\"]}]]],[\"ix-time-picker\",[[1,\"ix-time-picker\",{\"format\":[1],\"corners\":[1],\"standaloneAppearance\":[4,\"standalone-appearance\"],\"showHour\":[4,\"show-hour\"],\"showMinutes\":[4,\"show-minutes\"],\"showSeconds\":[4,\"show-seconds\"],\"time\":[1],\"timeReference\":[1,\"time-reference\"],\"textSelectTime\":[1,\"text-select-time\"],\"textTime\":[1,\"text-time\"],\"_time\":[32],\"_timeRef\":[32],\"_formattedTime\":[32],\"getCurrentTime\":[64]},null,{\"time\":[\"watchTimePropHandler\"],\"_time\":[\"formatTime\",\"onInternalTimeChange\"]}]]],[\"ix-map-navigation-overlay\",[[1,\"ix-map-navigation-overlay\",{\"name\":[1],\"icon\":[1],\"color\":[1],\"iconColor\":[1,\"icon-color\"]}]]],[\"ix-toast\",[[1,\"ix-toast\",{\"type\":[1],\"toastTitle\":[1,\"toast-title\"],\"autoCloseDelay\":[2,\"auto-close-delay\"],\"autoClose\":[4,\"auto-close\"],\"icon\":[1],\"iconColor\":[1,\"icon-color\"],\"progress\":[32],\"touched\":[32]}]]],[\"ix-breadcrumb-item\",[[1,\"ix-breadcrumb-item\",{\"label\":[1],\"icon\":[1],\"ghost\":[4],\"visible\":[4],\"showChevron\":[4,\"show-chevron\"],\"isDropdownTrigger\":[4,\"is-dropdown-trigger\"],\"a11y\":[32]}]]],[\"ix-tree-item\",[[1,\"ix-tree-item\",{\"text\":[1],\"hasChildren\":[4,\"has-children\"],\"context\":[16]}]]],[\"ix-group-context-menu_2\",[[1,\"ix-group-context-menu\",{\"showContextMenu\":[32]}],[1,\"ix-group-item\",{\"icon\":[1],\"text\":[1],\"secondaryText\":[1,\"secondary-text\"],\"suppressSelection\":[4,\"suppress-selection\"],\"selected\":[4],\"focusable\":[4],\"index\":[2]},[[1,\"click\",\"clickListen\"]]]]],[\"ix-card-accordion_2\",[[1,\"ix-card-accordion\",{\"collapse\":[4],\"expandContent\":[32]},null,{\"collapse\":[\"onInitialExpandChange\"]}],[1,\"ix-card-title\"]]],[\"ix-icon-button_2\",[[1,\"ix-icon-button\",{\"a11yLabel\":[1,\"a11y-label\"],\"variant\":[1],\"outline\":[4],\"ghost\":[4],\"oval\":[4],\"icon\":[1],\"size\":[1],\"iconColor\":[1,\"icon-color\"],\"disabled\":[4],\"type\":[1],\"loading\":[4]}],[1,\"ix-spinner\",{\"variant\":[1],\"size\":[1],\"hideTrack\":[4,\"hide-track\"]}]]],[\"ix-menu-expand-icon\",[[1,\"ix-menu-expand-icon\",{\"ixAriaLabel\":[1,\"ix-aria-label\"],\"expanded\":[516],\"breakpoint\":[513],\"pinned\":[4]}]]],[\"ix-typography\",[[1,\"ix-typography\",{\"format\":[1],\"textColor\":[1,\"text-color\"],\"bold\":[4],\"textDecoration\":[1,\"text-decoration\"]}]]],[\"ix-application-header\",[[1,\"ix-application-header\",{\"name\":[1],\"showMenu\":[1028,\"show-menu\"],\"breakpoint\":[32],\"menuExpanded\":[32],\"suppressResponsive\":[32],\"hasSlottedElements\":[32],\"applicationLayoutContext\":[32]},null,{\"applicationLayoutContext\":[\"watchApplicationLayoutContext\"],\"suppressResponsive\":[\"watchSuppressResponsive\"]}]]],[\"ix-modal-content_2\",[[1,\"ix-modal-header\",{\"hideClose\":[4,\"hide-close\"],\"icon\":[1],\"iconColor\":[1,\"icon-color\"]},null,{\"icon\":[\"onIconChange\"]}],[1,\"ix-modal-content\"]]],[\"ix-menu-item\",[[1,\"ix-menu-item\",{\"label\":[1],\"home\":[4],\"bottom\":[4],\"icon\":[1025],\"notifications\":[2],\"active\":[4],\"disabled\":[4],\"isCategory\":[4,\"is-category\"],\"tooltip\":[32],\"menuExpanded\":[32]},null,{\"icon\":[\"onIconChange\"]}]]],[\"ix-divider\",[[1,\"ix-divider\"]]],[\"ix-date-time-card\",[[1,\"ix-date-time-card\",{\"standaloneAppearance\":[4,\"standalone-appearance\"],\"individual\":[4],\"corners\":[1]}]]],[\"ix-card_2\",[[1,\"ix-card\",{\"variant\":[1],\"selected\":[4]}],[1,\"ix-card-content\"]]],[\"ix-dropdown-item\",[[1,\"ix-dropdown-item\",{\"label\":[1],\"icon\":[1],\"hover\":[4],\"disabled\":[4],\"checked\":[4],\"isSubMenu\":[4,\"is-sub-menu\"],\"suppressChecked\":[4,\"suppress-checked\"],\"emitItemClick\":[64],\"getDropdownItemElement\":[64]}]]],[\"ix-avatar_2\",[[1,\"ix-avatar\",{\"image\":[1],\"initials\":[1],\"username\":[1],\"extra\":[1],\"isClosestApplicationHeader\":[32],\"hasSlottedElements\":[32]}],[1,\"ix-menu-avatar-item\",{\"icon\":[1],\"label\":[1],\"getDropdownItemElement\":[64]}]]],[\"ix-button\",[[1,\"ix-button\",{\"variant\":[1],\"outline\":[4],\"ghost\":[4],\"disabled\":[516],\"type\":[1],\"loading\":[4],\"form\":[1],\"icon\":[1],\"alignment\":[1],\"iconSize\":[1,\"icon-size\"]},[[2,\"click\",\"handleClick\"]],{\"form\":[\"handleFormChange\"]}]]],[\"ix-col_4\",[[1,\"ix-col\",{\"size\":[1],\"sizeSm\":[1,\"size-sm\"],\"sizeMd\":[1,\"size-md\"],\"sizeLg\":[1,\"size-lg\"]},[[9,\"resize\",\"onResize\"]]],[1,\"ix-layout-grid\",{\"noMargin\":[4,\"no-margin\"],\"gap\":[1],\"columns\":[2]}],[1,\"ix-row\"],[1,\"ix-date-picker\",{\"format\":[1],\"range\":[4],\"corners\":[1],\"from\":[1],\"to\":[1],\"minDate\":[1,\"min-date\"],\"maxDate\":[1,\"max-date\"],\"i18nDone\":[1,\"i18n-done\"],\"weekStartIndex\":[2,\"week-start-index\"],\"locale\":[1],\"showWeekNumbers\":[4,\"show-week-numbers\"],\"standaloneAppearance\":[4,\"standalone-appearance\"],\"today\":[1],\"currFromDate\":[32],\"currToDate\":[32],\"selectedYear\":[32],\"tempYear\":[32],\"startYear\":[32],\"endYear\":[32],\"selectedMonth\":[32],\"tempMonth\":[32],\"dayNames\":[32],\"monthNames\":[32],\"focusedDay\":[32],\"getCurrentDate\":[64]},null,{\"from\":[\"watchFromPropHandler\"],\"to\":[\"watchToPropHandler\"],\"locale\":[\"onLocaleChange\"]}]]],[\"ix-tooltip\",[[1,\"ix-tooltip\",{\"for\":[1],\"titleContent\":[1,\"title-content\"],\"interactive\":[4],\"placement\":[1],\"showDelay\":[2,\"show-delay\"],\"hideDelay\":[2,\"hide-delay\"],\"animationFrame\":[4,\"animation-frame\"],\"visible\":[32],\"showTooltip\":[64],\"hideTooltip\":[64]}]]],[\"ix-dropdown\",[[1,\"ix-dropdown\",{\"suppressAutomaticPlacement\":[4,\"suppress-automatic-placement\"],\"show\":[1540],\"trigger\":[1],\"anchor\":[1],\"closeBehavior\":[8,\"close-behavior\"],\"placement\":[1],\"positioningStrategy\":[1,\"positioning-strategy\"],\"header\":[1],\"offset\":[16],\"overwriteDropdownStyle\":[16,\"overwrite-dropdown-style\"],\"discoverAllSubmenus\":[4,\"discover-all-submenus\"],\"ignoreRelatedSubmenu\":[4,\"ignore-related-submenu\"],\"suppressOverflowBehavior\":[4,\"suppress-overflow-behavior\"],\"discoverSubmenu\":[64],\"updatePosition\":[64]},[[0,\"ix-assign-sub-menu\",\"cacheSubmenuId\"]],{\"show\":[\"changedShow\"],\"trigger\":[\"changedTrigger\"]}]]],[\"ix-field-label_2\",[[1,\"ix-field-wrapper\",{\"helperText\":[1,\"helper-text\"],\"label\":[1],\"invalidText\":[1,\"invalid-text\"],\"validText\":[1,\"valid-text\"],\"infoText\":[1,\"info-text\"],\"warningText\":[1,\"warning-text\"],\"isInvalid\":[4,\"is-invalid\"],\"isValid\":[4,\"is-valid\"],\"isInfo\":[4,\"is-info\"],\"isWarning\":[4,\"is-warning\"],\"showTextAsTooltip\":[4,\"show-text-as-tooltip\"],\"required\":[4],\"htmlForLabel\":[1,\"html-for-label\"],\"controlRef\":[16,\"control-ref\"]}],[1,\"ix-field-label\",{\"required\":[1540],\"htmlFor\":[513,\"html-for\"],\"controlRef\":[16,\"control-ref\"],\"isInvalid\":[1028,\"is-invalid\"]},null,{\"htmlFor\":[\"registerHtmlForObserver\"],\"controlRef\":[\"registerControlRefObserver\"]}]]]]"), options);
};

(function(){if("undefined"!==typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var a=HTMLElement;window.HTMLElement=function(){return Reflect.construct(a,[],this.constructor)};HTMLElement.prototype=a.prototype;HTMLElement.prototype.constructor=HTMLElement;Object.setPrototypeOf(HTMLElement,a);}})();

const NAMESPACE = 'ix-icons';
const BUILD = /* ix-icons */ { hydratedSelectorName: "hydrated", lazyLoad: true, updatable: true};

/*
 Stencil Client Platform v4.35.3 | MIT Licensed | https://stenciljs.com
 */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/utils/constants.ts
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";

// src/client/client-host-ref.ts
var getHostRef = (ref) => {
  if (ref.__stencil__getHostRef) {
    return ref.__stencil__getHostRef();
  }
  return void 0;
};
var registerInstance = (lazyInstance, hostRef) => {
  lazyInstance.__stencil__getHostRef = () => hostRef;
  hostRef.$lazyInstance$ = lazyInstance;
};
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  const ref = hostRef;
  hostElement.__stencil__getHostRef = () => ref;
  return ref;
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var consoleError = (e, el) => (0, console.error)(e, el);

// src/client/client-load-module.ts
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (!bundleId) {
    return void 0;
  }
  const module = cmpModules.get(bundleId) ;
  if (module) {
    return module[exportName];
  }
  
        {
          const processMod = importedModule => {
              cmpModules.set(bundleId, importedModule);
              return importedModule[exportName];
          };
          switch(bundleId) {
              
                case 'ix-icon':
                    return import(
                      /* webpackMode: "lazy" */
                      './ix-icon.entry-DD6BQEF-.js').then(processMod, consoleError);
          }
      }
  return import(
    /* @vite-ignore */
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${""}`
  ).then(
    (importedModule) => {
      {
        cmpModules.set(bundleId, importedModule);
      }
      return importedModule[exportName];
    },
    (e) => {
      consoleError(e, hostRef.$hostElement$);
    }
  );
};

// src/client/client-style.ts
var styles = /* @__PURE__ */ new Map();
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var win = typeof window !== "undefined" ? window : {};
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var promiseResolve = (v) => Promise.resolve(v);
var supportsConstructableStylesheets = /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})() ;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (plt.$flags$ & 4 /* queueSync */) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
var consume = (queue) => {
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
var flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = (cb) => promiseResolve().then(cb);
var writeTask = /* @__PURE__ */ queueTask(queueDomWrites);

// src/runtime/asset-path.ts
var getAssetPath = (path) => {
  const assetUrl = new URL(path, plt.$resourcesUrl$);
  return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent(doc) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}

// src/utils/regular-expression.ts
var escapeRegExpSpecialCharacters = (text) => {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

// src/utils/result.ts
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};

// src/utils/style.ts
function createStyleSheetIfNeededAndSupported(styles2) {
  return void 0;
}

// src/utils/shadow-root.ts
var globalStyleSheet;
function createShadowRoot(cmpMeta) {
  var _a;
  const shadowRoot = this.attachShadow({ mode: "open" });
  if (globalStyleSheet === void 0) globalStyleSheet = (_a = createStyleSheetIfNeededAndSupported()) != null ? _a : null;
  if (globalStyleSheet) shadowRoot.adoptedStyleSheets.push(globalStyleSheet);
}
var createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
var addStyle = (styleContainerNode, cmpMeta, mode) => {
  var _a;
  const scopeId2 = getScopeId(cmpMeta);
  const style = styles.get(scopeId2);
  if (!win.document) {
    return scopeId2;
  }
  styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : win.document;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        {
          styleElm = win.document.createElement("style");
          styleElm.innerHTML = style;
          const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          if (!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */)) {
            if (styleContainerNode.nodeName === "HEAD") {
              const preconnectLinks = styleContainerNode.querySelectorAll("link[rel=preconnect]");
              const referenceNode2 = preconnectLinks.length > 0 ? preconnectLinks[preconnectLinks.length - 1].nextSibling : styleContainerNode.querySelector("style");
              styleContainerNode.insertBefore(
                styleElm,
                (referenceNode2 == null ? void 0 : referenceNode2.parentNode) === styleContainerNode ? referenceNode2 : null
              );
            } else if ("host" in styleContainerNode) {
              if (supportsConstructableStylesheets) {
                const stylesheet = new CSSStyleSheet();
                stylesheet.replaceSync(style);
                styleContainerNode.adoptedStyleSheets.unshift(stylesheet);
              } else {
                const existingStyleContainer = styleContainerNode.querySelector("style");
                if (existingStyleContainer) {
                  existingStyleContainer.innerHTML = style + existingStyleContainer.innerHTML;
                } else {
                  styleContainerNode.prepend(styleElm);
                }
              }
            } else {
              styleContainerNode.append(styleElm);
            }
          }
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            styleContainerNode.insertBefore(styleElm, null);
          }
        }
        if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
          styleElm.innerHTML += SLOT_FB_CSS;
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets.push(style);
    }
  }
  return scopeId2;
};
var attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(
    elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(),
    cmpMeta);
  if (flags & 10 /* needsScopedEncapsulation */) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + (cmp.$tagName$);
var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
          vNodeChildren.push(simple ? newVNode(null, child) : child);
        }
        lastSimple = simple;
      }
    }
  };
  walk(children);
  if (vnodeData) {
    if (vnodeData.key) {
      key = vnodeData.key;
    }
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
      }
    }
  }
  const vnode = newVNode(nodeName, null);
  vnode.$attrs$ = vnodeData;
  if (vNodeChildren.length > 0) {
    vnode.$children$ = vNodeChildren;
  }
  {
    vnode.$key$ = key;
  }
  return vnode;
};
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
  };
  {
    vnode.$attrs$ = null;
  }
  {
    vnode.$key$ = null;
  }
  return vnode;
};
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;
var createSupportsRuleRe = (selector) => {
  const safeSelector2 = escapeRegExpSpecialCharacters(selector);
  return new RegExp(
    // First capture group: match any context before the selector that's not inside @supports selector()
    // Using negative lookahead to avoid matching inside @supports selector(...) condition
    `(^|[^@]|@(?!supports\\s+selector\\s*\\([^{]*?${safeSelector2}))(${safeSelector2}\\b)`,
    "g"
  );
};
createSupportsRuleRe("::slotted");
createSupportsRuleRe(":host");
createSupportsRuleRe(":host-context");
var parsePropertyValue = (propValue, propType, isFormAssociated) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4 /* Boolean */) {
      {
        return propValue === "false" ? false : propValue === "" || !!propValue;
      }
    }
    if (propType & 1 /* String */) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getElement = (ref) => getHostRef(ref).$hostElement$ ;
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags, initialRender) => {
  if (oldValue === newValue) {
    return;
  }
  let isProp = isMemberInElement(elm, memberName);
  memberName.toLowerCase();
  if (memberName === "class") {
    const classList = elm.classList;
    const oldClasses = parseClassList(oldValue);
    let newClasses = parseClassList(newValue);
    {
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    }
  } else if (memberName === "style") {
    {
      for (const prop in oldValue) {
        if (!newValue || newValue[prop] == null) {
          if (prop.includes("-")) {
            elm.style.removeProperty(prop);
          } else {
            elm.style[prop] = "";
          }
        }
      }
    }
    for (const prop in newValue) {
      if (!oldValue || newValue[prop] !== oldValue[prop]) {
        if (prop.includes("-")) {
          elm.style.setProperty(prop, newValue[prop]);
        } else {
          elm.style[prop] = newValue[prop];
        }
      }
    }
  } else if (memberName === "key") ; else {
    const isComplex = isComplexType(newValue);
    if ((isProp || isComplex && newValue !== null) && !isSvg) {
      try {
        if (!elm.tagName.includes("-")) {
          const n = newValue == null ? "" : newValue;
          if (memberName === "list") {
            isProp = false;
          } else if (oldValue == null || elm[memberName] != n) {
            if (typeof elm.__lookupSetter__(memberName) === "function") {
              elm[memberName] = n;
            } else {
              elm.setAttribute(memberName, n);
            }
          }
        } else if (elm[memberName] !== newValue) {
          elm[memberName] = newValue;
        }
      } catch (e) {
      }
    }
    if (newValue == null || newValue === false) {
      if (newValue !== false || elm.getAttribute(memberName) === "") {
        {
          elm.removeAttribute(memberName);
        }
      }
    } else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex && elm.nodeType === 1 /* ElementNode */) {
      newValue = newValue === true ? "" : newValue;
      {
        elm.setAttribute(memberName, newValue);
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = (value) => {
  if (typeof value === "object" && value && "baseVal" in value) {
    value = value.baseVal;
  }
  if (!value || typeof value !== "string") {
    return [];
  }
  return value.split(parseClassListRegex);
};

// src/runtime/vdom/update-element.ts
var updateElement = (oldVnode, newVnode, isSvgMode2, isInitialRender) => {
  const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || {};
  const newVnodeAttrs = newVnode.$attrs$ || {};
  {
    for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(
          elm,
          memberName,
          oldVnodeAttrs[memberName],
          void 0,
          isSvgMode2,
          newVnode.$flags$);
      }
    }
  }
  for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(
      elm,
      memberName,
      oldVnodeAttrs[memberName],
      newVnodeAttrs[memberName],
      isSvgMode2,
      newVnode.$flags$);
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...attrNames.filter((attr) => attr !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    attrNames
  );
}
var hostTagName;
var isSvgMode = false;
var createElm = (oldParentVNode, newParentVNode, childIndex) => {
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    if (!win.document) {
      throw new Error(
        "You are trying to render a Stencil component in an environment that doesn't support the DOM. Make sure to populate the [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window/window) object before rendering a component."
      );
    }
    elm = newVNode2.$elm$ = win.document.createElementNS(
      isSvgMode ? SVG_NS : HTML_NS,
      newVNode2.$tag$
    ) ;
    if (isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (newVNode2.$children$) {
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  elm["s-hn"] = hostTagName;
  return elm;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        insertBefore(containerElm, childNode, before);
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      if (elm) {
        elm.remove();
      }
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  let newEndIdx = newCh.length - 1;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let node;
  let elmToMove;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (oldStartVnode == null) {
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      patch(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore(parentElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(parentElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          insertBefore(oldStartVnode.$elm$.parentNode, node, oldStartVnode.$elm$);
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(
      parentElm,
      newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$,
      newVNode2,
      newCh,
      newStartIdx,
      newEndIdx
    );
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    if (isInitialRender && !leftVNode.$key$ && rightVNode.$key$) {
      leftVNode.$key$ = rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      updateElement(oldVNode, newVNode2, isSvgMode);
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (
      // don't do this on initial render as it can cause non-hydrated content to be removed
      !isInitialRender && BUILD.updatable && oldChildren !== null
    ) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    } else ;
    if (isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  }
};
var insertBefore = (parent, newNode, reference) => {
  {
    return parent == null ? void 0 : parent.insertBefore(newNode, reference);
  }
};
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  const hostElm = hostRef.$hostElement$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const isHostElement = isHost(renderFnResults);
  const rootVnode = isHostElement ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4 /* isHost */;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm ;
  patch(oldVNode, rootVnode, isInitialLoad);
};

// src/runtime/update-component.ts
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    const index = ancestorComponent["s-p"].push(
      new Promise(
        (r) => hostRef.$onRenderResolve$ = () => {
          ancestorComponent["s-p"].splice(index - 1, 1);
          r();
        }
      )
    );
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
  }
  if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
    hostRef.$flags$ |= 512 /* needsRerender */;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  return writeTask(dispatch) ;
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$ ;
  if (!instance) {
    throw new Error(
      `Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  }
  let maybePromise;
  if (isInitialLoad) {
    maybePromise = safeCall(instance, "componentWillLoad", void 0, elm);
  } else {
    maybePromise = safeCall(instance, "componentWillUpdate", void 0, elm);
  }
  maybePromise = enqueue(maybePromise, () => safeCall(instance, "componentWillRender", void 0, elm));
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn).catch((err2) => {
  console.error(err2);
  fn();
}) : fn();
var isPromisey = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = async (hostRef, instance, isInitialLoad) => {
  var _a;
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance, elm, isInitialLoad);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4 /* isWaitingForChildren */;
      childrenPromises.length = 0;
    }
  }
};
var callRender = (hostRef, instance, elm, isInitialLoad) => {
  try {
    instance = instance.render() ;
    {
      hostRef.$flags$ &= -17 /* isQueuedForUpdate */;
    }
    {
      hostRef.$flags$ |= 2 /* hasRendered */;
    }
    {
      {
        {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
var postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = hostRef.$lazyInstance$ ;
  const ancestorComponent = hostRef.$ancestorComponent$;
  safeCall(instance, "componentDidRender", void 0, elm);
  if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
    hostRef.$flags$ |= 64 /* hasLoadedComponent */;
    {
      addHydratedFlag(elm);
    }
    safeCall(instance, "componentDidLoad", void 0, elm);
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    safeCall(instance, "componentDidUpdate", void 0, elm);
    endPostUpdate();
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512 /* needsRerender */) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= -517;
  }
};
var appDidLoad = (who) => {
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: NAMESPACE } }));
};
var safeCall = (instance, method, arg, elm) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e, elm);
    }
  }
  return void 0;
};
var addHydratedFlag = (elm) => {
  var _a;
  return elm.classList.add((_a = BUILD.hydratedSelectorName) != null ? _a : "hydrated") ;
};

// src/runtime/set-value.ts
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  if (!hostRef) {
    throw new Error(
      `Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/stenciljs/core/issues/5457).`
    );
  }
  const elm = hostRef.$hostElement$ ;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$ ;
  newVal = parsePropertyValue(
    newVal,
    cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8 /* isConstructingInstance */) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map((watchMethodName) => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError(e, elm);
            }
          });
        }
      }
      if ((flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
        if (instance.componentShouldUpdate) {
          if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
            return;
          }
        }
        scheduleUpdate(hostRef, false);
      }
    }
  }
};

// src/runtime/proxy-component.ts
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a, _b;
  const prototype = Cstr.prototype;
  if (cmpMeta.$members$ || (cmpMeta.$watchers$ || Cstr.watchers)) {
    if (Cstr.watchers && !cmpMeta.$watchers$) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries((_a = cmpMeta.$members$) != null ? _a : {});
    members.map(([memberName, [memberFlags]]) => {
      if ((memberFlags & 31 /* Prop */ || (flags & 2 /* proxyState */) && memberFlags & 32 /* State */)) {
        const { get: origGetter, set: origSetter } = Object.getOwnPropertyDescriptor(prototype, memberName) || {};
        if (origGetter) cmpMeta.$members$[memberName][0] |= 2048 /* Getter */;
        if (origSetter) cmpMeta.$members$[memberName][0] |= 4096 /* Setter */;
        if (flags & 1 /* isElementConstructor */ || !origGetter) {
          Object.defineProperty(prototype, memberName, {
            get() {
              {
                if ((cmpMeta.$members$[memberName][0] & 2048 /* Getter */) === 0) {
                  return getValue(this, memberName);
                }
                const ref = getHostRef(this);
                const instance = ref ? ref.$lazyInstance$ : prototype;
                if (!instance) return;
                return instance[memberName];
              }
            },
            configurable: true,
            enumerable: true
          });
        }
        Object.defineProperty(prototype, memberName, {
          set(newValue) {
            const ref = getHostRef(this);
            if (origSetter) {
              const currentValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              if (typeof currentValue === "undefined" && ref.$instanceValues$.get(memberName)) {
                newValue = ref.$instanceValues$.get(memberName);
              } else if (!ref.$instanceValues$.get(memberName) && currentValue) {
                ref.$instanceValues$.set(memberName, currentValue);
              }
              origSetter.apply(this, [
                parsePropertyValue(
                  newValue,
                  memberFlags)
              ]);
              newValue = memberFlags & 32 /* State */ ? this[memberName] : ref.$hostElement$[memberName];
              setValue(this, memberName, newValue, cmpMeta);
              return;
            }
            {
              if ((flags & 1 /* isElementConstructor */) === 0 || (cmpMeta.$members$[memberName][0] & 4096 /* Setter */) === 0) {
                setValue(this, memberName, newValue, cmpMeta);
                if (flags & 1 /* isElementConstructor */ && !ref.$lazyInstance$) {
                  ref.$onReadyPromise$.then(() => {
                    if (cmpMeta.$members$[memberName][0] & 4096 /* Setter */ && ref.$lazyInstance$[memberName] !== ref.$instanceValues$.get(memberName)) {
                      ref.$lazyInstance$[memberName] = newValue;
                    }
                  });
                }
                return;
              }
              const setterSetVal = () => {
                const currentValue = ref.$lazyInstance$[memberName];
                if (!ref.$instanceValues$.get(memberName) && currentValue) {
                  ref.$instanceValues$.set(memberName, currentValue);
                }
                ref.$lazyInstance$[memberName] = parsePropertyValue(
                  newValue,
                  memberFlags);
                setValue(this, memberName, ref.$lazyInstance$[memberName], cmpMeta);
              };
              if (ref.$lazyInstance$) {
                setterSetVal();
              } else {
                ref.$onReadyPromise$.then(() => setterSetVal());
              }
            }
          }
        });
      }
    });
    if ((flags & 1 /* isElementConstructor */)) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName) && BUILD.lazyLoad) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && // cast type to number to avoid TS compiler issues
          this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const hostRef = getHostRef(this);
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (flags2 && !(flags2 & 8 /* isConstructingInstance */) && flags2 & 128 /* isWatchReady */ && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$ ;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((callbackName) => {
                if (instance[callbackName] != null) {
                  instance[callbackName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          const propDesc = Object.getOwnPropertyDescriptor(prototype, propName);
          newValue = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
          if (newValue !== this[propName] && (!propDesc.get || !!propDesc.set)) {
            this[propName] = newValue;
          }
        });
      };
      Cstr.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((_b = cmpMeta.$watchers$) != null ? _b : {}),
          ...members.filter(([_, m]) => m[0] & 15 /* HasAttribute */).map(([propName, m]) => {
            const attrName = m[1] || propName;
            attrNameToPropName.set(attrName, propName);
            return attrName;
          })
        ])
      );
    }
  }
  return Cstr;
};

// src/runtime/initialize-component.ts
var initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId) => {
  let Cstr;
  if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
    hostRef.$flags$ |= 32 /* hasInitializedComponent */;
    const bundleId = cmpMeta.$lazyBundleId$;
    if (bundleId) {
      const CstrImport = loadModule(cmpMeta, hostRef);
      if (CstrImport && "then" in CstrImport) {
        const endLoad = uniqueTime();
        Cstr = await CstrImport;
        endLoad();
      } else {
        Cstr = CstrImport;
      }
      if (!Cstr) {
        throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
      }
      if (!Cstr.isProxied) {
        {
          cmpMeta.$watchers$ = Cstr.watchers;
        }
        proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
      {
        hostRef.$flags$ |= 8 /* isConstructingInstance */;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e, elm);
      }
      {
        hostRef.$flags$ &= -9 /* isConstructingInstance */;
      }
      {
        hostRef.$flags$ |= 128 /* isWatchReady */;
      }
      endNewInstance();
      fireConnectedCallback(hostRef.$lazyInstance$, elm);
    } else {
      Cstr = elm.constructor;
      const cmpTag = elm.localName;
      customElements.whenDefined(cmpTag).then(() => hostRef.$flags$ |= 128 /* isWatchReady */);
    }
    if (Cstr && Cstr.style) {
      let style;
      if (typeof Cstr.style === "string") {
        style = Cstr.style;
      }
      const scopeId2 = getScopeId(cmpMeta);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
};
var fireConnectedCallback = (instance, elm) => {
  {
    safeCall(instance, "connectedCallback", void 0, elm);
  }
};

// src/runtime/connected-callback.ts
var connectedCallback = (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
      hostRef.$flags$ |= 1 /* hasConnected */;
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$, elm);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$, elm));
      }
    }
    endConnected();
  }
};
var disconnectInstance = (instance, elm) => {
  {
    safeCall(instance, "disconnectedCallback", void 0, elm || instance);
  }
};
var disconnectedCallback = async (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
      disconnectInstance(hostRef.$lazyInstance$, elm);
    } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$, elm));
    }
  }
  if (rootAppliedStyles.has(elm)) {
    rootAppliedStyles.delete(elm);
  }
  if (elm.shadowRoot && rootAppliedStyles.has(elm.shadowRoot)) {
    rootAppliedStyles.delete(elm.shadowRoot);
  }
};

// src/runtime/bootstrap-lazy.ts
var bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  if (!win.document) {
    console.warn("Stencil: No document found. Skipping bootstrapping lazy components.");
    return;
  }
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements2 = win.customElements;
  const head = win.document.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const dataStyles = /* @__PURE__ */ win.document.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", win.document.baseURI).href;
  let hasSlotRelocation = false;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      var _a2;
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
        hasSlotRelocation = true;
      }
      {
        cmpMeta.$members$ = compactMeta[2];
      }
      {
        cmpMeta.$watchers$ = (_a2 = compactMeta[4]) != null ? _a2 : {};
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self) {
          super(self);
          this.hasRegisteredEventListeners = false;
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            {
              if (!self.shadowRoot) {
                createShadowRoot.call(self, cmpMeta);
              } else {
                if (self.shadowRoot.mode !== "open") {
                  throw new Error(
                    `Unable to re-use existing shadow root for ${cmpMeta.$tagName$}! Mode is set to ${self.shadowRoot.mode} but Stencil only supports open shadow roots.`
                  );
                }
              }
            }
          }
        }
        connectedCallback() {
          getHostRef(this);
          if (!this.hasRegisteredEventListeners) {
            this.hasRegisteredEventListeners = true;
          }
          if (appLoadFallback) {
            clearTimeout(appLoadFallback);
            appLoadFallback = null;
          }
          if (isBootstrapping) {
            deferredConnectedCallbacks.push(this);
          } else {
            plt.jmp(() => connectedCallback(this));
          }
        }
        disconnectedCallback() {
          plt.jmp(() => disconnectedCallback(this));
          plt.raf(() => {
            var _a3;
            const hostRef = getHostRef(this);
            const i2 = deferredConnectedCallbacks.findIndex((host) => host === this);
            if (i2 > -1) {
              deferredConnectedCallbacks.splice(i2, 1);
            }
            if (((_a3 = hostRef == null ? void 0 : hostRef.$vnode$) == null ? void 0 : _a3.$elm$) instanceof Node && !hostRef.$vnode$.$elm$.isConnected) {
              delete hostRef.$vnode$.$elm$;
            }
          });
        }
        componentOnReady() {
          return getHostRef(this).$onReadyPromise$;
        }
      };
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(
          tagName,
          proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */)
        );
      }
    });
  });
  if (cmpTags.length > 0) {
    if (hasSlotRelocation) {
      dataStyles.textContent += SLOT_FB_CSS;
    }
    {
      dataStyles.textContent += cmpTags.sort() + HYDRATED_CSS;
    }
    if (dataStyles.innerHTML.length) {
      dataStyles.setAttribute("data-styles", "");
      const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(win.document);
      if (nonce != null) {
        dataStyles.setAttribute("nonce", nonce);
      }
      head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};

const globalScripts = () => {};

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["ix-icon",[[1,"ix-icon",{"size":[1],"color":[1],"name":[1],"lazyLoading":[4,"lazy-loading"],"svgContent":[32],"isVisible":[32]},null,{"name":["loadIconContent"]}]]]], options);
};

(function(){if("undefined"!==typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var a=HTMLElement;window.HTMLElement=function(){return Reflect.construct(a,[],this.constructor)};HTMLElement.prototype=a.prototype;HTMLElement.prototype.constructor=HTMLElement;Object.setPrototypeOf(HTMLElement,a);}})();

defineCustomElements$1();
defineCustomElements();

export { Fragment as F, Host$1 as H, readTask as a, registerInstance as b, createEvent as c, h as d, Host as e, forceUpdate as f, getElement$1 as g, h$1 as h, getElement as i, getAssetPath as j, registerInstance$1 as r };
//# sourceMappingURL=index-BbuAcMrL.js.map

//# sourceMappingURL=index-BbuAcMrL.js.map