(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs/useClickOutside.mdx":function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return d});var r=e("./node_modules/react/index.js"),o=e.n(r),u=e("./node_modules/@mdx-js/tag/dist/index.js"),i=e("./node_modules/docz/dist/index.m.js"),c=e("./src/index.ts");function a(n){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function s(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(a){o=!0,u=a}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},u=Object.keys(n);for(r=0;r<u.length;r++)e=u[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(r=0;r<u.length;r++)e=u[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}function f(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function A(n,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function g(n){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function p(n,t){return(p=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}var d=function(n){function t(n){var e;return function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=A(this,g(t).call(this,n))).layout=null,e}var e,r,a;return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&p(n,t)}(t,o.a.Component),e=t,(r=[{key:"render",value:function(){var n=this.props,t=n.components,e=l(n,["components"]);return o.a.createElement(u.MDXTag,{name:"wrapper",components:t},o.a.createElement(u.MDXTag,{name:"h1",components:t,props:{id:"useclickoutside"}},"useClickOutside"),o.a.createElement(u.MDXTag,{name:"pre",components:t},o.a.createElement(u.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"import { useClickOutside } from 'use-events';\n")),o.a.createElement(u.MDXTag,{name:"pre",components:t},o.a.createElement(u.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx"}},"const Example = () => {\n  const ref = React.useRef(null);\n  const [isActive] = useClickOutside(ref, event => console.log(event));\n\n  return (\n    <div ref={ref}>\n      You are {isActive ? 'clicking' : 'not clicking'} outside of this div\n    </div>\n  );\n};\n")),o.a.createElement(i.Playground,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKZgFyOAYHsKBYm2XVwnyTB2HkN0TXaT04AEch_QFe1NXNTC5QVc12jtDV2GgzQfAw40yIAARgIgRAGVBAWFGBKIDVBdFRY5TgAL2cAhEmxdhuBo9YogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnJSABYNPYAA2DStPWMAQIAMR9aBEiU_hnEORFHTQgAFIR-CWNifjgXTEUsmtrJoZwIGEy52AARkM7T5HBfjqEEgBBOYpPYSNoPIGwoHQcN0M5KSxEymMZHYVEJJgbhgEPUTxOxeRt1rYAcugfLggAMk68ZEnmShmjavKCu4Ub5TAUJ-J7VB2nYAB-DZ2vDSMiquIaOtQBKaykGRq3fMxYWozAwDCKAphW4rSu2tKVxrCxgAu7gSuAVcLAEqYumaaSgylHA8hgcUwEjVBQkXV6i1QQSAG1bBSqU2BgABdDL_vgxDkIIVCYEjT6lhgVhXSeiG4EoWAcCgSgUkjfH9E5d9a1rLoCD6cxozuhm63Kz6as-prwYZgBNFZXC6GjYfhgn5vlcgEJ2ApZqUn4phlxD5Yw_Ysb2ZoJlsY42H5utd1kcH6dreQtp3G69rMb8QFw8hJFUbAcExoDdFAgxwMOh1oOO06pn8GCYDhmJJYY91sMkf6Q4Rx2I001UXSwIiaOOGATtBgO7FR2WkJQrhunDrDPRz9H88wOO1H9b2oLTjOzpCbPYJs048nQ0iPSj5vW7gSvsGr5PqN99P_cboOAAlfgydvGM7_7J4JgQ-4Tg7B59uvR8D_79UGGAPMofJppniOS9gnf_v3w-OOXgeU-H-us6Dyw2hy4_i67mBn9CHKb8T237Y_jHAmy8XZwCwG7EC-gGCEWokYMeP1pQRzNEqROZh3pByAd0aSK0rhQ3WF4UmEpUDaXuquag59YLalGIpTKUUEE4AoTAc8BMaBFSJqwSgXBE4M3IbvAAqjMK41Mrj0MYcw2ml0OFcPWFtZGRMXo1nQTDOAmCliwQIJguR7B6H_TElkSMJ0oCwU_IlN6yUpgeFUBlBRPDUCMKoSMGhwjtFagYbvcRrDLrqMwZGNEjJOQkNrLw_6AihF0NcWIlhBA2ElW8RLbGhjjGBPkKgmsTMWbsGUao9gliMCI0TikxKNcN6ZwwfEv-Sg7Z4Q_mjHYGMsYgMxuA7Q7soHgRgQ6OBgcEEd3IigxK6DS51PLlgq6FhPoiNcYDXUHh1BbAIIwcelh9QABlLysX0GIQJ1Bal50xgXMJVxIkSPYZw9AZhOS4IIRSVAcjnrrCUeLUOMA1Fjk0RlHRsE9G0AMfEYxqSzGQxbLvE4jiMrOOOZ4-Rq50HZT6OGKYGFpKfQBbWCAzRIy9AEAi9gABCMaIMEjsG6nirFCKPggVcGgOA1MXYizPGPJZqz1nXmiUVGxHM4nPN8eiGAJj2YWB2bnepBdqb8oZhbdCqL0FsX-qEGY4KoqQuiZdDlgLBJwuxa6JFk506oosOizKZLXT4ukoSqAxKeq4uNTQClNAqWQ1pQQelY5GXLLWVeWm7LwZcoRr8oxfLuFmxkaiz5TCwBgHmWzBmj17kCqEkeE8ekPEEBWbYUCUZ2iytgqCmavkQXUPFRzQ8oRWU4GTVEtNqJ0gCCfNmmA8qtLsHrfK_l4N0kCFZjEmS8aLAlrLV0NiBMU1VozbWrNBbHFNvrbmotHME2lpPIOqeI7001rrbvRt-a5UzDnWbINFglCrihkKsu-zMCI3WG2tJY4MlZPifkswhS-LFL9qUoZeysYVOUAA_6Ldei9ydrgJpEC9BgQginLpdgemzz6a-VJgzu4AfBZczJ-DhA3MCWqvYqB_15EOS480OA8NwBTd2qR6AD04ZvFAPoBH6EkbI5Is5QbZGqoeeYzJtgSPZFeQQHj6AtFhu-Qkv5gbTHEwsVY6S2HqAkfo64xjUTu3qIEzy_xgTBWoBo3R2hkyiNKZObEscanEl8uSaijt5hlECaWLkwTBTUmvpHu-pDeRv1VIdvPKeS8gOgOaRQSB4GOlTCg4RqUvTkHwYGZx7zi8UO4PQ4Q9wWGyF2PcXocsenwsEDcf9JjpzpHs2CbBFZEoCYKaI8q8jLGZFmDuT29VUxlELwuIsCqY5WtdEEx81xujnU_LM9eprOTpONaCel_LmXKu_Wq14zrPnsjqfM2lxhZXXAVey6I9xyn5sEC60tobFmJNWa43AA77X7OPs2k5teUw30NzixkDzv6z670vi8a-fmQMtKC57CDsD4Faki1qf0aDYtvYvgfT7LJsGobwTWEGRBAgCECUjlHWGcOMJ3pt5x238u7cKzkNj0LFGcahlgPjAANITfWvkDexspItSjEh8YFrToj_X9FM-lZx-z1jVu7xx1FLK7BUDRARimq40EBpgHUVTpYsv1EC3bvIfTs2dtGfGwzeXkYldjip3uiwyu9cRuV3uo9NZn3rFOxTpYrPRt5Mc0Uu7JTHuQ9gh96aL3qn_S_j_b7YDQMe2gZBdgYWYNINBwhiHn8X74jh4lms1yiGpeK6gf3eA9Eihm7lzPBWSoUao9QfPGBc84Hz4TwvtWrf1fY2ToFZ3M-8Y6wQZvPXvp05gCJ_1_yJPoP5zJtLmfs8EHL5XrX6j2_LYCcP-P54y9bdcRPqFxm2_x8O2J2fVvLO3s7U3jfl3VDXet0nFOD2ph-_jx5wK2xXBpAAiTVAwe2kgA5fwcXx5-BXH4ECYkVRvAMgLRfxyQmQQBAl-BF58hqBv92B-BlIcAEDlIfJ1h-ByhyB-gZhppYD-AUoKpCJYAYQsAfRQC05yRKBEg8w8gChdVzQLQ_8QRACBAUCax-Aog0AcCVB45H8WCLA0CYB5gIx-IIB4BYDsN-AotODopTIcAAAOHAQyXg2sCQrUK0SIKQmQ-QxQkAOrTaf-Rg3AXQSAFIR_agF_cDF6EAWgX0LIb_X_M0WgC0KLC0WYGYfgeQBQc2IAA",__position:0,__code:"() => {\n  const ref = React.useRef(null)\n  const [isActive] = useClickOutside(ref, event => console.log(event))\n  return (\n    <div ref={ref}>\n      You are {isActive ? 'clicking' : 'not clicking'} outside of this div\n    </div>\n  )\n}",__scope:{props:this?this.props:e,useClickOutside:c.b}},function(){var n=o.a.useRef(null),t=s(Object(c.b)(n,function(n){return console.log(n)}),1)[0];return o.a.createElement("div",{ref:n},"You are ",t?"clicking":"not clicking"," outside of this div")}))}}])&&f(e.prototype,r),a&&f(e,a),t}()},"./src/index.ts":function(n,t,e){"use strict";var r=e("./node_modules/react/index.js");function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(a){o=!0,u=a}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=function(){var n=o(r.useState(!1),2),t=n[0],e=n[1];return[t,{onMouseDown:function(n){return e(!0)},onMouseUp:function(n){return e(!1)}}]};function i(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(a){o=!0,u=a}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=function(n,t){var e=i(r.useState(!1),2),o=e[0],u=e[1],c=function(e){var r=n.current;null===r||r.contains(e.target)||(u(!0),t(e))},a=function(t){var e=n.current;null===e||e.contains(t.target)||u(!1)};return r.useEffect(function(){return document.addEventListener("mousedown",c),document.addEventListener("mouseup",a),function(){document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",a)}},[t]),[o]};function a(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(a){o=!0,u=a}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=function(){var n=a(r.useState(!1),2),t=n[0],e=n[1];return[t,{onFocus:function(n){return e(!0)},onBlur:function(n){return e(!1)}}]};function l(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(a){o=!0,u=a}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f=function(){var n=l(r.useState(!1),2),t=n[0],e=n[1];return[t,{onMouseEnter:function(n){return e(!0)},onMouseLeave:function(n){return e(!1)}}]};function A(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(a){o=!0,u=a}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(){var n=A(r.useState(0),2),t=n[0],e=n[1],o=A(r.useState(0),2),u=o[0],i=o[1];return[t,u,{onMouseMove:function(n){var t=n.nativeEvent,r=t.offsetX,o=t.offsetY;e(r),i(o)}}]};function p(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=[],r=!0,o=!1,u=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(a){o=!0,u=a}finally{try{r||null==c.return||c.return()}finally{if(o)throw u}}return e}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=function(){var n=p(r.useState(!1),2),t=n[0],e=n[1];return[t,{onTouchStart:function(n){return e(!0)},onTouchEnd:function(n){return e(!1)}}]};e.d(t,"a",function(){return u}),e.d(t,"b",function(){return c}),e.d(t,"c",function(){return s}),e.d(t,"d",function(){return f}),e.d(t,"e",function(){return g}),e.d(t,"f",function(){return d})}}]);
//# sourceMappingURL=docs-use-click-outside.58eacfb642ba318ca84a.js.map