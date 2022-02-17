import { p as promiseResolve, b as bootstrapLazy } from './index-7d091875.js';

/*
 Stencil Client Patch Esm v2.14.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["my-dropdown_2",[[0,"my-name",null,[[0,"onToggle","log"]]],[4,"my-dropdown",{"title":[1],"toggle":[32],"someType":[16]}]]]], options);
  });
};

export { defineCustomElements };
