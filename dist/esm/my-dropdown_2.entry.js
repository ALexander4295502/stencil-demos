import { r as registerInstance, c as createEvent } from './index-7d091875.js';

const dropdownScss = "";

let Dropdown = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.onToggle = createEvent(this, "onToggle", 7);
    this.title = '';
    this.toggle = false;
  }
  render() {
    return (h("div", null, h("button", { onClick: () => this.toggleClick() }, this.title, " ", this.toggle ? h("span", null, "\u25B2") : h("span", null, "\u25BC")), h("div", { style: { display: this.toggle ? 'block' : 'none' } }, h("slot", null))));
  }
  toggleClick() {
    this.toggle = !this.toggle;
    this.onToggle.emit({ visible: this.toggle });
  }
};
Dropdown.style = dropdownScss;

const myNameScss = "my-name{font-family:Courier New, Courier, monospace;font-weight:bold}";

let MyName = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("h1", null, "My Web Component App"), h("my-dropdown", { title: "Toggle" }, "Hello World")));
  }
  log(event) {
    console.log(event);
  }
};
MyName.style = myNameScss;

export { Dropdown as my_dropdown, MyName as my_name };
