import { Component, Event, Prop, State } from '@stencil/core';
export class Dropdown {
  constructor() {
    this.title = '';
    this.toggle = false;
  }
  render() {
    return (h("div", null,
      h("button", { onClick: () => this.toggleClick() },
        this.title,
        " ",
        this.toggle ? h("span", null, "\u25B2") : h("span", null, "\u25BC")),
      h("div", { style: { display: this.toggle ? 'block' : 'none' } },
        h("slot", null))));
  }
  toggleClick() {
    this.toggle = !this.toggle;
    this.onToggle.emit({ visible: this.toggle });
  }
  static get is() { return "my-dropdown"; }
  static get originalStyleUrls() { return {
    "$": ["dropdown.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["dropdown.css"]
  }; }
  static get properties() { return {
    "title": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "title",
      "reflect": false,
      "defaultValue": "''"
    },
    "toggle": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "toggle",
      "reflect": false,
      "defaultValue": "false"
    },
    "someType": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "SomeInterface",
        "resolved": "SomeInterface",
        "references": {
          "SomeInterface": {
            "location": "import",
            "path": "src/types/type"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      }
    }
  }; }
  static get states() { return {
    "toggle": {}
  }; }
  static get events() { return [{
      "method": "onToggle",
      "name": "onToggle",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
}
