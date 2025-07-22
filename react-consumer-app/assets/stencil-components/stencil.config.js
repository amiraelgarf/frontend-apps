import { reactOutputTarget } from "@stencil/react-output-target";
import { angularOutputTarget } from "@stencil/angular-output-target";
export const config = {
    namespace: 'custom-frontend-library',
    outputTargets: [
        reactOutputTarget({
            outDir: 'react-lib/lib/components/stencil-generated/',
        }),
        angularOutputTarget({
            componentCorePackage: 'custom-frontend-library',
            directivesProxyFile: 'dist/angular/directives/index.ts',
            directivesArrayFile: 'dist/angular/directives/proxies.ts',
            outputType: 'component',
        }),
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements',
            customElementsExportBehavior: 'auto-define-custom-elements',
            externalRuntime: false,
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null,
        },
    ],
    testing: {
        browserHeadless: "shell",
        transformIgnorePatterns: [
            '/node_modules/(?!.*(d3|d3-array|d3-scale|d3-selection|d3-shape|d3-axis)).+\\.js$',
        ],
        moduleNameMapper: {
            '^d3$': '<rootDir>/node_modules/d3/dist/d3.min.js',
        },
    },
};
//# sourceMappingURL=stencil.config.js.map
