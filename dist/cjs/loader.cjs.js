'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-03438580.js');

/*
 Stencil Client Patch Esm v2.14.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["my-dropdown_2.cjs",[[0,"my-name",null,[[0,"onToggle","log"]]],[4,"my-dropdown",{"title":[1],"toggle":[32],"someType":[16]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
