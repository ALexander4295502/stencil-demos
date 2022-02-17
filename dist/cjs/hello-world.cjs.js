'use strict';

const index = require('./index-03438580.js');

/*
 Stencil Client Patch Browser v2.14.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('hello-world.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["my-dropdown_2.cjs",[[0,"my-name",null,[[0,"onToggle","log"]]],[4,"my-dropdown",{"title":[1],"toggle":[32],"someType":[16]}]]]], options);
});
