/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { SomeInterface } from "src/types/type";
export namespace Components {
    interface MyDropdown {
        "someType": SomeInterface;
        "title": string;
        "toggle": boolean;
    }
    interface MyName {
    }
}
declare global {
    interface HTMLMyDropdownElement extends Components.MyDropdown, HTMLStencilElement {
    }
    var HTMLMyDropdownElement: {
        prototype: HTMLMyDropdownElement;
        new (): HTMLMyDropdownElement;
    };
    interface HTMLMyNameElement extends Components.MyName, HTMLStencilElement {
    }
    var HTMLMyNameElement: {
        prototype: HTMLMyNameElement;
        new (): HTMLMyNameElement;
    };
    interface HTMLElementTagNameMap {
        "my-dropdown": HTMLMyDropdownElement;
        "my-name": HTMLMyNameElement;
    }
}
declare namespace LocalJSX {
    interface MyDropdown {
        "onOnToggle"?: (event: CustomEvent<any>) => void;
        "someType"?: SomeInterface;
        "title"?: string;
        "toggle"?: boolean;
    }
    interface MyName {
    }
    interface IntrinsicElements {
        "my-dropdown": MyDropdown;
        "my-name": MyName;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-dropdown": LocalJSX.MyDropdown & JSXBase.HTMLAttributes<HTMLMyDropdownElement>;
            "my-name": LocalJSX.MyName & JSXBase.HTMLAttributes<HTMLMyNameElement>;
        }
    }
}
