!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){km.importData("json",(0,c["default"])(document.querySelector("#skillset-input").value))}function i(){km.exportData("png").then(function(e){var t=document.createElement("a");t.href=e,t.download="skill-set.png",t.click(),document.querySelector("canvas").remove()})}var a=n(1),c=r(a);window.onload=function(){var e=window.km=new kityminder.Minder;e.renderTo("#minder-view"),o(),e.disable(),e.execCommand("hand"),document.querySelector("#generate-btn").onclick=o,document.querySelector("#save-btn").onclick=i}},function(e,t){"use strict";function n(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}function r(e){e=JSON.parse(e);try{var t={root:{data:{text:e.name+"'s Skill Set"},children:[]}};return o(e.skillset,t.root.children),JSON.stringify(t)}catch(n){return null}}function o(e,t){for(var r in e)if(e.hasOwnProperty(r)&&!r.startsWith(".")){var i={data:{text:r},children:[]},a=e[r];"object"==("undefined"==typeof a?"undefined":n(a))||"string"==typeof a?(a[".level"]&&(i.data.priority=a[".level"]),o(a,i.children)):i.data.priority=a,t.push(i)}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r}]);