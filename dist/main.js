(()=>{"use strict";var e={989:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"#container{\r\n    display: grid;\r\n    grid-template-columns: repeat(5,1fr);\r\ngap: 10px;\r\nwidth: 80%;\r\nmargin: auto;\r\n}\r\n#img img{\r\n\r\n    width: 100%;\r\n    height: 300px;\r\n}\r\n",""]);const s=i},126:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"#navbar{\r\n  \r\n    width: 80%;\r\n    margin: 10px auto;\r\n}\r\n\r\n#query{\r\n    width: 100%;\r\n    height: 35px;\r\n    border: 1px solid teal;\r\n    border-radius: 20px;\r\n    padding: 5px;\r\n    font-size: medium;\r\n}\r\n#categories{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    ;\r\n}\r\n#categories h3{\r\n    border: 1px solid teal ;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n}",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],u=a[c]||0,d="".concat(c," ").concat(u);a[c]=u+1;var p=n(d),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var g=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:g,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var l=r(e,o),c=0;c<a.length;c++){var u=n(a[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=l}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),l=n.n(s),c=n(216),u=n.n(c),d=n(589),p=n.n(d),h=n(126),g={};g.styleTagTransform=p(),g.setAttributes=l(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=u(),t()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;var m=n(989),f={};f.styleTagTransform=p(),f.setAttributes=l(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;let v=async(e,t,n)=>{console.log(t,n);try{if(console.log(t,n),""==t&&""==n){let t=await fetch(`https://api.unsplash.com/search/photos/?query=${e}&per_page=20&client_id=ND2G1af36fgH_eJCAZbiKvnsgKx9uzBKrxKmA459QV0`),n=await t.json();return console.log(n),n}if(""==t){let t=await fetch(`https://api.unsplash.com/search/photos/?query=${e}&per_page=20&orientation=${n}&client_id=ND2G1af36fgH_eJCAZbiKvnsgKx9uzBKrxKmA459QV0`),r=await t.json();return console.log(r),r}if(""==n){let n=await fetch(`https://api.unsplash.com/search/photos/?query=${e}&per_page=20&order_by=${t}&client_id=ND2G1af36fgH_eJCAZbiKvnsgKx9uzBKrxKmA459QV0`),r=await n.json();return console.log(r),r}{let r=await fetch(`https://api.unsplash.com/search/photos/?query=${e}&per_page=20&order_by=${t}&orientation=${n}&client_id=ND2G1af36fgH_eJCAZbiKvnsgKx9uzBKrxKmA459QV0`),o=await r.json();return console.log(o),o}}catch(e){console.log("err:",e)}},y=(e,t)=>{e.map((({alt_description:e,urls:{small:n}})=>{let r=document.createElement("div"),o=document.createElement("img"),a=document.createElement("h3");r.setAttribute("id","img"),o.src=n,a.innerHTML=e,r.append(o,a),t.append(r)}))};document.getElementById("navbar").innerHTML='<div id="search_bar">\n    <input type="text" placeholder="Search here" id="query">\n    <div id="select">\n    <select name="sorting" id="sorting">\n            <option value="">Sorting</option>\n            <option value="latest">latest</option>\n            <option value="oldest">oldest</option>\n            <option value="popular">popular</option>\n    </select>\n    <select name="filter" id="filter">\n            <option value="">Filter</option>\n            <option value="landscape">landscape</option>\n            <option value="portrait">portrait</option>\n            <option value="squarish">squarish</option>\n    </select>\n    </div>\n</div>\n<div id="categories">\n    <h3 id="Nature">Nature</h3>\n    <h3 id="Cars">Cars</h3>\n    <h3 id="Music">Music</h3>\n    <h3 id="Cartoons">Cartoons</h3>\n    <h3 id="Technology">Technology</h3>\n    <h3 id="Marvel">Marvel</h3>\n</div>';let x=document.getElementById("filter"),b=document.getElementById("sorting");document.getElementById("query").addEventListener("keydown",(e=>{if("Enter"===e.key){let e=document.getElementById("sorting").value;console.log(x.value);let t=document.getElementById("query").value;v(t,e,x.value).then((e=>{let t=document.getElementById("container");console.log(e),t.innerHTML=null,y(e.results,t)}))}}));let E=document.getElementById("categories").children;function w(){let e=document.getElementById("sorting").value;console.log(e),console.log(this.id),v(this.id,e,x.value).then((e=>{let t=document.getElementById("container");console.log(e),t.innerHTML=null,y(e.results,t)}))}console.log(E);for(let e of E)e.addEventListener("click",w);x.addEventListener("change",(function(){let e=document.getElementById("sorting").value;console.log(e),console.log(this.id),v(this.id,e,x.value).then((e=>{let t=document.getElementById("container");console.log(e),t.innerHTML=null,y(e.results,t)}))})),b.addEventListener("change",(function(){let e=document.getElementById("sorting").value;console.log(e),console.log(this.id),v(this.id,e,x.value).then((e=>{let t=document.getElementById("container");console.log(e),t.innerHTML=null,y(e.results,t)}))}))})()})();