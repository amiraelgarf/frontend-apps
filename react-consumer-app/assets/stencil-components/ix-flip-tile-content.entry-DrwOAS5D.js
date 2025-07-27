import { r as registerInstance, h, H as Host } from './index-BbuAcMrL.js';

const flipTileContentCss = ":host{display:block}";

const FlipTileContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Controls the visibility of the content
         *
         * @internal
         */
        this.contentVisible = false;
    }
    render() {
        return h(Host, { key: '33ad76bf60ec2b3072cc6e0e89365e02071f1d9e' }, this.contentVisible ? h("slot", null) : null);
    }
};
FlipTileContent.style = flipTileContentCss;

export { FlipTileContent as ix_flip_tile_content };
//# sourceMappingURL=ix-flip-tile-content.entry-DrwOAS5D.js.map

//# sourceMappingURL=ix-flip-tile-content.entry-DrwOAS5D.js.map