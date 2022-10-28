/*! For license information please see iso-download-plugin.63b6aaabcf872c770a9e.chunk.js.LICENSE.txt */
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[32355],{788554:(n,e,t)=>{"use strict";t.d(e,{Wr:()=>r,KA:()=>o,AT:()=>a,d_:()=>i});var r="GEONODE:DOWNLOAD_METADATA",o="GEONODE:DOWNLOAD_METADATA_COMPLETE";function a(n,e){return{type:r,link:n,pk:e}}function i(n,e){return{type:o,link:n,pk:e}}},228261:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var r=t(124852),o=t.n(r),a=t(675263),i=t.n(a),l=["id","className","style","children"];function u(){return u=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},u.apply(this,arguments)}function c(n){var e=n.id,t=n.className,r=n.style,a=n.children,i=function(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}(n,l),c=t?" "+t:"";return o().createElement(o().Fragment,null,o().createElement("div",u({},i,{id:e,className:"gn-spinner".concat(c),style:r}),o().createElement("div",null)),a)}c.propTypes={id:i().string,className:i().string,style:i().object},c.defaultProps={};const s=c},51605:(n,e,t)=>{"use strict";t.d(e,{Z:()=>r.Z});var r=t(228261)},985774:(n,e,t)=>{"use strict";t.d(e,{l:()=>c});var r=t(49977),o=t(375875),a=t.n(o),i=t(178598),l=t(788554),u=t(197395),c=function(n,e){return n.ofType(l.Wr).switchMap((function(n){var t,o,c,s,d,f=e.getState(),p=null===(t=f.gnresource)||void 0===t||null===(o=t.data)||void 0===o||null===(c=o.links)||void 0===c?void 0:c.find((function(e){return e.name===n.link})).url,v=null===(s=f.gnresource)||void 0===s||null===(d=s.data)||void 0===d?void 0:d.title;return r.Observable.defer((function(){return a().get(p).then((function(n){return n}))})).switchMap((function(e){var t=e.data,o=e.headers;if("application/xml"===o["content-type"]||"application/xml; charset=UTF-8"===o["content-type"]){var a=String.fromCharCode.apply(null,new Uint8Array(t));if(0===a.indexOf("<ows:ExceptionReport"))throw a}return(0,i.saveAs)(new Blob([t],{type:o&&o["content-type"]}),"".concat(v,"_").concat(n.link.split(" ").join("_"),"_Metadata")),r.Observable.of((0,l.d_)(n.link,n.pk))})).catch((function(e){var t,o,a;return r.Observable.of((0,l.d_)(n.link,n.pk),(0,u.vU)({title:"gnviewer.cannotPerfomAction",message:(null==e||null===(t=e.data)||void 0===t?void 0:t.message)||(null==e||null===(o=e.data)||void 0===o?void 0:o.detail)||(null==e||null===(a=e.originalError)||void 0===a?void 0:a.message)||"gnviewer.syncErrorDefault"}))}))}))}},11800:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>g});var r=t(124852),o=t.n(r),a=t(171703),i=t(22222),l=t(322843),u=t(805346),c=t(693473),s=t(788554),d=t(985774),f=t(51605),p=t(894176);function v(n){var e=n.onDownload,t=n.resourcePk,r=n.isDownloading;return o().createElement(c.Z,{variant:"default",onClick:function(){return e("Dublin Core",t)}},r&&o().createElement(f.Z,{animation:"border",role:"status"},o().createElement("span",{className:"sr-only"},"Loading..."))," ",o().createElement(u.Z,{msgId:"gnviewer.dublinCore"}))}var w=(0,a.connect)((0,i.P1)([function(n){var e;return(null==n||null===(e=n.gnresource)||void 0===e?void 0:e.data.pk)||null},function(n){var e,t;return(null==n||null===(e=n.gnDownload)||void 0===e||null===(t=e.downloads)||void 0===t?void 0:t.DublinCore)||{}}],(function(n,e){return{resourcePk:n,isDownloading:e[n]}})),{onDownload:s.AT})(v);v.defaultProps={onDownload:function(){},resourcePk:null,isDownloading:!1};const g=(0,l.rx)("DublinCoreDownload",{component:function(){return null},containers:{ActionNavbar:{name:"DublinCoreDownload",Component:w}},epics:{gnDownloadMetaData:d.l},reducers:{gnDownload:p.Z}})},125762:(n,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>g});var r=t(124852),o=t.n(r),a=t(171703),i=t(22222),l=t(322843),u=t(805346),c=t(693473),s=t(788554),d=t(985774),f=t(51605),p=t(894176);function v(n){var e=n.onDownload,t=n.resourcePk,r=n.isDownloading;return o().createElement(c.Z,{variant:"default",onClick:function(){return e("ISO",t)},className:"isobutton"},r&&o().createElement(f.Z,{animation:"border",role:"status"},o().createElement("span",{className:"sr-only"},"Loading..."))," ",o().createElement(u.Z,{msgId:"gnviewer.iso"}))}var w=(0,a.connect)((0,i.P1)([function(n){var e;return(null==n||null===(e=n.gnresource)||void 0===e?void 0:e.data.pk)||null},function(n){var e,t;return(null==n||null===(e=n.gnDownload)||void 0===e||null===(t=e.downloads)||void 0===t?void 0:t.ISO)||{}}],(function(n,e){return{resourcePk:n,isDownloading:e[n]}})),{onDownload:s.AT})(v);v.defaultProps={onDownload:function(){},resourcePk:null,isDownloading:!1};const g=(0,l.rx)("IsoDownload",{component:function(){return null},containers:{ActionNavbar:{name:"IsoDownload",Component:w}},epics:{gnDownloadMetaData:d.l},reducers:{gnDownload:p.Z}})},894176:(n,e,t)=>{"use strict";t.d(e,{Z:()=>u});var r=t(788554);function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var l={downloads:{ISO:{},DublinCore:{}}};const u=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case r.Wr:var t,o=null==e||null===(t=e.link)||void 0===t?void 0:t.split(" ").join("");return a(a({},n),{},{downloads:a(a({},n.downloads),{},i({},o,i({},e.pk,!0)))});case r.KA:var u,c=a({},n),s=null==e||null===(u=e.link)||void 0===u?void 0:u.split(" ").join(""),d=c.downloads[s];return delete d[e.pk],a(a({},c),{},{downloads:a(a({},c.downloads),{},i({},s,a({},d)))});default:return n}}},178598:function(n,e,t){var r,o=o||function(n){"use strict";if(!(void 0===n||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=n.document,t=function(){return n.URL||n.webkitURL||n},r=e.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in r,a=/constructor/i.test(n.HTMLElement)||n.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent),l=function(e){(n.setImmediate||n.setTimeout)((function(){throw e}),0)},u=function(n){setTimeout((function(){"string"==typeof n?t().revokeObjectURL(n):n.remove()}),4e4)},c=function(n){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(n.type)?new Blob([String.fromCharCode(65279),n],{type:n.type}):n},s=function(e,s,d){d||(e=c(e));var f,p=this,v="application/octet-stream"===e.type,w=function(){!function(n,e,t){for(var r=(e=[].concat(e)).length;r--;){var o=n["on"+e[r]];if("function"==typeof o)try{o.call(n,n)}catch(n){l(n)}}}(p,"writestart progress write writeend".split(" "))};if(p.readyState=p.INIT,o)return f=t().createObjectURL(e),void setTimeout((function(){var n,e;r.href=f,r.download=s,n=r,e=new MouseEvent("click"),n.dispatchEvent(e),w(),u(f),p.readyState=p.DONE}));!function(){if((i||v&&a)&&n.FileReader){var r=new FileReader;return r.onloadend=function(){var e=i?r.result:r.result.replace(/^data:[^;]*;/,"data:attachment/file;");n.open(e,"_blank")||(n.location.href=e),e=void 0,p.readyState=p.DONE,w()},r.readAsDataURL(e),void(p.readyState=p.INIT)}f||(f=t().createObjectURL(e)),v?n.location.href=f:n.open(f,"_blank")||(n.location.href=f),p.readyState=p.DONE,w(),u(f)}()},d=s.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(n,e,t){return e=e||n.name||"download",t||(n=c(n)),navigator.msSaveOrOpenBlob(n,e)}:(d.abort=function(){},d.readyState=d.INIT=0,d.WRITING=1,d.DONE=2,d.error=d.onwritestart=d.onprogress=d.onwrite=d.onabort=d.onerror=d.onwriteend=null,function(n,e,t){return new s(n,e||n.name||"download",t)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);n.exports?n.exports.saveAs=o:null!==t.amdD&&null!==t.amdO&&(void 0===(r=function(){return o}.call(e,t,e,n))||(n.exports=r))}}]);