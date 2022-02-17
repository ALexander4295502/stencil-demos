import { Component, Listen } from '@stencil/core';
export class MyName {
  render() {
    return (h("div", null,
      h("h1", null, "My Web Component App"),
      h("my-dropdown", { title: "Toggle" }, "Hello World")));
  }
  log(event) {
    console.log(event);
  }
  static get is() { return "my-name"; }
  static get originalStyleUrls() { return {
    "$": ["my-name.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["my-name.css"]
  }; }
  static get listeners() { return [{
      "name": "onToggle",
      "method": "log",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
