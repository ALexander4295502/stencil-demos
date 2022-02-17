import { p as promiseResolve, b as bootstrapLazy } from './index-7d091875.js';

/*
 Stencil Client Patch Browser v2.14.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["my-dropdown_2",[[0,"my-name",null,[[0,"onToggle","log"]]],[4,"my-dropdown",{"title":[1],"toggle":[32],"someType":[16]}]]]], options);
});
