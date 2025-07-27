import './animation-Dp15M30K.js';
import { s as showModal } from './modal-CsizKf_Q.js';

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
async function showAppSwitch(config) {
    const modal = document.createElement('ix-application-switch-modal');
    modal.config = config;
    const result = await showModal({
        content: modal,
        size: '840',
        closeOnBackdropClick: true,
    });
    const appSwitchElement = result.htmlElement.querySelector('ix-application-switch-modal');
    return (updateAppSwitchConfig) => {
        if (!appSwitchElement) {
            console.warn('ix-application-switch-modal element not found!');
            return;
        }
        appSwitchElement.config = updateAppSwitchConfig;
    };
}

export { showAppSwitch as s };
//# sourceMappingURL=index-DCtxcns0.js.map

//# sourceMappingURL=index-DCtxcns0.js.map