import { a as setPlatformHelpers } from './index-CALO0PMU.js';

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

const globalScripts = appGlobalScript;

export { globalScripts as g };
//# sourceMappingURL=app-globals-nBgs1_F8.js.map

//# sourceMappingURL=app-globals-nBgs1_F8.js.map