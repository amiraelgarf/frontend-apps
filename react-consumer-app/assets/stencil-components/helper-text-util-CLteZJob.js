import { h } from './index-DcMv3VsE.js';
import { i as iconError, a as iconWarning, b as iconInfo, c as iconSuccess } from './index-BLniyGcy.js';

/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function hasAnyText({ invalidText, warningText, infoText, validText, helperText, }) {
    return invalidText || warningText || infoText || validText || helperText;
}
function renderHelperText({ isInvalid, invalidText, isWarning, warningText, isInfo, infoText, isValid, validText, helperText, }) {
    if (isInvalid && invalidText !== undefined) {
        return (h("ix-typography", { textColor: "alarm", class: "bottom-text" }, h("ix-icon", { class: "text-icon invalid", name: iconError, size: "16" }), invalidText));
    }
    if (isWarning && warningText !== undefined) {
        return (h("ix-typography", { textColor: "std", class: "bottom-text" }, h("ix-icon", { class: "text-icon warning", name: iconWarning, size: "16" }), warningText));
    }
    if (isInfo && infoText !== undefined) {
        return (h("ix-typography", { textColor: "std", class: "bottom-text" }, h("ix-icon", { class: "text-icon info", name: iconInfo, size: "16" }), infoText));
    }
    if (isValid && validText !== undefined) {
        return (h("ix-typography", { textColor: "std", class: "bottom-text" }, h("ix-icon", { class: "text-icon valid", name: iconSuccess, size: "16" }), validText));
    }
    return (helperText && (h("ix-typography", { class: "bottom-text", textColor: "soft" }, helperText)));
}

export { hasAnyText as h, renderHelperText as r };
//# sourceMappingURL=helper-text-util-CLteZJob.js.map

//# sourceMappingURL=helper-text-util-CLteZJob.js.map