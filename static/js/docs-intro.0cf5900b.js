(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./docs/intro.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return l});var o=t("./node_modules/react/index.js"),a=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function p(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,n){return!n||"object"!==s(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var l=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=m(this,i(n).call(this,e))).layout=null,t}var t,o,s;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,a.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components;c(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"introduction"}},"Introduction"),a.a.createElement(r.MDXTag,{name:"p",components:n},a.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Use Events")," - Events turned into React Hooks.\nRead about ",a.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://reactjs.org/docs/hooks-intro.html"}},"Hooks")," feature."),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"install"}},"Install"),a.a.createElement(r.MDXTag,{name:"blockquote",components:n},a.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Note: React 16.8+ is required for Hooks.")),a.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"with-npm"}},"With npm"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh"}},"npm i use-events\n")),a.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"or-with-yarn"}},"Or with yarn"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-sh"}},"yarn add use-events\n")),a.a.createElement(r.MDXTag,{name:"p",components:n},"exposed as ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"UseEvents")),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"quick-examples"}},"Quick Examples"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import { useActive, useHover, useMousePosition } from 'use-events';\n")),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"const App = () => {\n  const [isActive, bind] = useActive();\n\n  return (\n    <button style={{ color: isActive ? 'white' : 'black' }} {...bind}>\n      Click me\n    </button>\n  );\n};\n")),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"const App = () => {\n  const [isHovered, hoverBind] = useHover();\n  const [x, y, mousePositionBind] = useMousePosition();\n\n  return (\n    <div {...hoverBind} {...mousePositionBind}>\n      {isHovered && (\n        <span>\n          {x} - {y}\n        </span>\n      )}\n    </div>\n  );\n};\n")))}}])&&p(t.prototype,o),s&&p(t,s),n}()}}]);
//# sourceMappingURL=docs-intro.58eacfb642ba318ca84a.js.map