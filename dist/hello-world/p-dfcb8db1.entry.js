import{r as t,c as l}from"./p-2fb4d904.js";let o=class{constructor(o){t(this,o),this.onToggle=l(this,"onToggle",7),this.title="",this.toggle=!1}render(){return h("div",null,h("button",{onClick:()=>this.toggleClick()},this.title," ",this.toggle?h("span",null,"▲"):h("span",null,"▼")),h("div",{style:{display:this.toggle?"block":"none"}},h("slot",null)))}toggleClick(){this.toggle=!this.toggle,this.onToggle.emit({visible:this.toggle})}};o.style="";let s=class{constructor(l){t(this,l)}render(){return h("div",null,h("h1",null,"My Web Component App"),h("my-dropdown",{title:"Toggle"},"Hello World"))}log(t){console.log(t)}};s.style="my-name{font-family:Courier New, Courier, monospace;font-weight:bold}";export{o as my_dropdown,s as my_name}