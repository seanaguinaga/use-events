(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docs/useActive.mdx":function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return p});var r=e("./node_modules/react/index.js"),o=e.n(r),u=e("./node_modules/@mdx-js/tag/dist/index.js"),i=e("./node_modules/docz/dist/index.m.js"),a=e("./src/index.ts");function c(n){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function l(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(r=(i=a.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(c){o=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function A(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},u=Object.keys(n);for(r=0;r<u.length;r++)e=u[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(r=0;r<u.length;r++)e=u[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}function f(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function s(n,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function g(n){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function d(n,t){return(d=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}var p=function(n){function t(n){var e;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=s(this,g(t).call(this,n))).layout=null,e}var e,r,c;return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&d(n,t)}(t,o.a.Component),e=t,(r=[{key:"render",value:function(){var n=this.props,t=n.components,e=A(n,["components"]);return o.a.createElement(u.MDXTag,{name:"wrapper",components:t},o.a.createElement(u.MDXTag,{name:"h1",components:t,props:{id:"useactive"}},"useActive"),o.a.createElement(u.MDXTag,{name:"pre",components:t},o.a.createElement(u.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { useActive } from 'use-events';\n")),o.a.createElement(u.MDXTag,{name:"pre",components:t},o.a.createElement(u.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx"}},"const Example = () => {\n  const [isActive, bind] = useActive();\n\n  return (\n    <div {...bind}>\n      You are {isActive ? 'clicking' : 'not clicking'} this div\n    </div>\n  );\n};\n")),o.a.createElement(i.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgFyOAYAAQSlNhunkN0TXaT04AEch_QFe1NXNVC5QVc12jtDV2GgzQfBQ40iIAARgIgRAGVBAWFGBSIDVBdFRY5TgAL2cAhEmxdhuAo9YogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnOSABYVPYAA2FS1PWMAQIAMR9aBEjk_hnEORFHUwdgAAUhH4JYmJ-OBNMRUya3MmhnAgfjLnYABGXT1PkcFuOoXi4LmMT2EjaDyBsKB0HDdh5E5MSxFSmMZHYVERJgbhgEPQThOxeRt1rYAMugbLggAMja8ZEnmShmmarKcu4Ib5TAUJuJ7VB2nYAB-DYWvDSN8qufrWtQWKaykGRq3fMxYXIzAwDCKApkWgqio2pKVxrCxgFO7hCuAVcLB4qYAG1bAQmJWBgJYPFUABdFK8ngxDvsWp7JzHPpzGja7a0TErgBwZG_oweqIfhgBNFZXC6CiPtB7pZvacgoFibYCimuSfimUnycplCJlsY42Axutd1kCH33h-R1p3S7trMb8QEw8hJFUbAcAILQKBA_QGD2h1oIOo6pn8GCQa-5DCI9SRgc-pDxYjVTVRdLA8Io44YEO0JjpCOxgfsMmdl1cJ8hcmj3XQvXYKd8nXelrgYCNtR_UVqCrZtu31eBizTjyXKde92P47gEPsDD83yOV63VftjWAAlfgyRPaN14Gi--gR05N3as6VyO85j2D9UGGBXMofIJtLr3PWB1vgY7ruWJrzOLZzqO1Yd2DLDaDKe7QvuZ7nvBR9N4XRZ9zXDYl3BpawIDdFAgxwNw8ijHzoMpSTs0lVNswXo1g3vpSxarle9YvEoClUHUm7V2oAPWC2pRiyVSuFK-BAcBAJgOeb6NB8r3XYKwSgXBTbw0AW3AAqjMK4kYIFamgW3OB-hEGFRQWg9Y61AZIMejWR-704DPx-qVMczCaHsEgTgYGQksiRkOlAWCn44rPQSlMVGORxJ0IwagGBICRhgPwVcLhMCSEILOrBAgzDIxokZJyP-tZMHAxwXggh5oiHAzUQQMhrCtGE34fEIRBj5D3xrF0Ag0N2CMOYb9AGpsXFxXDo3W2Ux9aE3XkoEWWEt5-xdm7IONcpZwAPtoI-8tT6QXYBfdWkCb5an9A_MRGtYnbADu7bo4lYYWC6GAZRhDxRgF1B4dQWwCCMALpYfUAAZS8jF9BiAMdQEpZSg6mKuKo-B1izoUPQGYTk78v4_xoQ9dYDCCZayWJo9hKUuE8IIHwgRQjXGiNQLxJiwMTgKNfuFCZpCzrSNrI_dKfRwxTBQuJGpxzawQGaJGXoAhXnsAAITDVQLbKA7AOrAv-a8j4IFXBoDgPgqWuMzz5w6d03p15rH5QefDLZ9jdEwGEXDCwQznalPiZgfBJKeZUK-Y_c5sFQgzGueM4hkybF4qLKciOMLXTvMhmAL5FgfmpX5VmEF4kwUJEhZ1IFEqoFHwRac5F-zpJjnRZ0npV5SG4ohgSrWDjBHEvQbWPmuUvm7NgueMAYBWlVNrHdFZpK-JHhPFpKxXTbCgSjO0Jl2RQFqXYAGy5H4zXw0PKEbFOBPWTO9aidIAgnwBpZcG1NMwSUQ3cZ451ElXUWCjTGroTFvpep9UmlNbcw3puraA2l8NaxFpPCW4u5bE0umTf6tuaavI9szRG81g6lCrleuS_2VKYD_XWFmtxUMBDmG8YTf6_jXFBJViE4pFKRmYAicoTeKdehp13kklJss9BgQghbbJdhcll2InfOKj9D0J0qfMrxn9hA_wMdy6gccj1jM4YQ_9eQrE2JmYO6gN4oB9EA1wkDcAwPTNQegM11D7mrKKYwhD2RNljhw-gDh1qYC8NoMao5IieW8QkSlX9qAENweA6nJDSDNEEZ0eiYlBiyWoGg7B8BdTzEIZY4VNjqdsjka4_SyjOaF1eNsAR3xGAV1mACVxddudN0vrgHuqJYsK7F2rie_eh85aXrPg6G9QGCL3tvq-Vxz7YKVxLm-9-n7v4Sl_usOjqi9DlgE9ZqUFibWcuQ5QuGRjYJdIlN9Rj5jbnqKQRBqhZhln5pObxRhzmuiLFsdl7IRHCF7IOY401lHH40akQA2RxC_NxaCwlqZrGxz5cfES_R1WYHRdcLFgLKiOV3OawQVrkmOs1jU-sWTi7bCtaU4R1dgT65TA3XbAzVddMHpbm3IeLwR7GeSaZi9J8r3n0vlqPJJEHNFP7ttzuu2WSuY_TWMFRBAgCAMS9t7P69g1Zu71pRgWoGNfAyh3KqWMP0Kw1gPDBAAAahXzHFbI_JBtDDEgw8xgjoLSOYCRhRwyoplX0uGN-1t_70FUDRCQlYq40FepgE0bDpY9PNGY0TvIQTDWBuJZdY22xsPIws7HLDht-KxyY0F3a1novcrOK-VNrx0OWhzZU2tNdS3gmra24PO7E0NvROBrPUIGVEkmdSWZ47FmphWbvV7OzBT4q8o1kb-ej2P41kWZ5n91WXd4F4SKerUDfcieQShyDqBg8YEDzgYPoWkth5S6gNLDy1lwF97h2x6fCM7KK7BUjuPDlla4hl8RqhaM-5Xv7gg0fY-DdE2OLPHG9HcZ-5H9ANeV4h80Y3wvY2LATbnR4uTjCs8q4W-pjXK3QnL2N3gXTfltiuDSABOA1BDvHwYA8_glPjz8CuPwIExIqjeAyBaX85ImQgAMfwKu-RqB7_YPweSOBn_yU8usfg5RyD9BmBNB__A4JSpcJYAYQsAfQL8rZyRKBEg8w8gChIZzQLRD8QQT8BB38ax-Aog0B_8VBjYV90CLBP8YB5gIxuIIB4AH9uV-A7McCIpDIcAAAOHAXSAg2sagrUK0SIWg-gpglgkARPeQDeFA3AXQSAFIFfNfc3I7TffgWgX0LIPfA_M0WgC0OzC0WYGYfgQQ3meQIAA",__position:0,__code:"() => {\n  const [isActive, bind] = useActive()\n  return (\n    <div {...bind}>\n      You are {isActive ? 'clicking' : 'not clicking'} this div\n    </div>\n  )\n}",__scope:{props:this?this.props:e,useActive:a.a}},function(){var n=l(Object(a.a)(),2),t=n[0],e=n[1];return o.a.createElement("div",e,"You are ",t?"clicking":"not clicking"," this div")}))}}])&&f(e.prototype,r),c&&f(e,c),t}()},"./src/index.ts":function(n,t,e){"use strict";var r=e("./node_modules/react/index.js");function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(r=(i=a.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(c){o=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=function(){var n=o(r.useState(!1),2),t=n[0],e=n[1];return[t,{onMouseDown:function(n){return e(!0)},onMouseUp:function(n){return e(!1)}}]};function i(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(r=(i=a.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(c){o=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var a=function(n,t){var e=i(r.useState(!1),2),o=e[0],u=e[1],a=function(e){var r=n.current;null===r||r.contains(e.target)||(u(!0),t(e))},c=function(t){var e=n.current;null===e||e.contains(t.target)||u(!1)};return r.useEffect(function(){return document.addEventListener("mousedown",a),document.addEventListener("mouseup",c),function(){document.removeEventListener("mousedown",a),document.removeEventListener("mouseup",c)}},[t]),[o]};function c(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(r=(i=a.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(c){o=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var l=function(){var n=c(r.useState(!1),2),t=n[0],e=n[1];return[t,{onFocus:function(n){return e(!0)},onBlur:function(n){return e(!1)}}]};function A(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(r=(i=a.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(c){o=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=function(){var n=A(r.useState(!1),2),t=n[0],e=n[1];return[t,{onMouseEnter:function(n){return e(!0)},onMouseLeave:function(n){return e(!1)}}]};function s(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(r=(i=a.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(c){o=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(){var n=s(r.useState(0),2),t=n[0],e=n[1],o=s(r.useState(0),2),u=o[0],i=o[1];return[t,u,{onMouseMove:function(n){var t=n.nativeEvent,r=t.offsetX,o=t.offsetY;e(r),i(o)}}]};function d(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,a=n[Symbol.iterator]();!(r=(i=a.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(c){o=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=function(){var n=d(r.useState(!1),2),t=n[0],e=n[1];return[t,{onTouchStart:function(n){return e(!0)},onTouchEnd:function(n){return e(!1)}}]};e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a}),e.d(t,"c",function(){return l}),e.d(t,"d",function(){return f}),e.d(t,"e",function(){return g}),e.d(t,"f",function(){return p})}}]);
//# sourceMappingURL=docs-use-active.58eacfb642ba318ca84a.js.map