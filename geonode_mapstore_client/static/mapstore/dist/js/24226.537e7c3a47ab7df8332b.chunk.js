(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[24226],{542872:(e,t,r)=>{"use strict";r.d(t,{Z:()=>F});var n=r(124852),o=r.n(n),i=r(675263),s=r.n(i),a=r(396606),c=r(615402),u=r(805346),l=r(480681);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,g(n.key),n)}}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function d(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function h(e,t,r){return(t=g(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===p(t)?t:String(t)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(a,e);var t,r,n,i,s=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(n);if(i){var r=v(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return d(this,e)});function a(){var e;f(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return h(m(e=s.call.apply(s,[this].concat(r))),"onTouchStart",(function(t){var r=t.touches[0];e.startX=r.pageX,e.startY=r.pageY,e.setState({scrolling:!1})})),h(m(e),"onTouchMove",(function(t){var r=t.touches[0],n=t.currentTarget;if(e.state.scrolling)t.stopPropagation();else if(Math.abs(e.startY-r.pageY)>Math.abs(e.startX-r.pageX))t.stopPropagation();else{var o=e.startX<r.pageX?"left":"right";(n&&"left"===o&&n.clientWidth<n.scrollWidth&&0!==n.scrollLeft||n&&"right"===o&&n.clientWidth+n.scrollLeft!==n.scrollWidth)&&(e.setState({scrolling:!0}),t.stopPropagation())}})),h(m(e),"onTouchEnd",(function(){e.setState({scrolling:!1})})),h(m(e),"renderPage",(function(){var t="function"==typeof e.props.viewers?e.props.viewers:e.props.viewers[e.props.format];return t?o().createElement(t,{response:e.props.response,layer:e.props.layer}):null})),e}return t=a,(r=[{key:"render",value:function(){return o().createElement("div",{style:{width:"100%",height:"100%",overflowX:"auto"},onTouchMove:this.onTouchMove,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd},this.renderPage())}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);h(O,"propTypes",{format:s().string,viewers:s().oneOfType([s().func,s().object]),response:s().oneOfType([s().string,s().object,s().node]),layer:s().object});var w=r(441609),P=r.n(w),j=r(531351),E=r.n(j),S=r(410240),R=r.n(S),x=r(902870);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(this,arguments)}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,D(n.key),n)}}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function k(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return M(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}function B(e,t,r){return(t=D(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function D(e){var t=function(e,t){if("object"!==T(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===T(t)?t:String(t)}var Z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(p,e);var t,r,n,i,s=(n=p,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(n);if(i){var r=A(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return k(this,e)});function p(){var e;C(this,p);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return B(M(e=s.call.apply(s,[this].concat(r))),"getResponseProperties",(function(){var t=e.props.validator(e.props.format),r=e.props.responses.map((function(e){return void 0===e?{}:e})),n=e.props.renderValidOnly?t.getValidResponses(r):r,o=t.getNoValidResponses(e.props.responses),i=e.props.requests.length===o.length;return{validResponses:n,currResponse:e.getCurrentResponse(n[e.props.index]),emptyResponses:i,invalidResponses:o}})),B(M(e),"getCurrentResponse",(function(t){return e.props.validator(e.props.format).getValidResponses([t])})),B(M(e),"renderEmptyLayers",(function(){var t=e.getResponseProperties(),r=t.invalidResponses,n=t.emptyResponses;if(0===e.props.missingResponses&&n)return null;var i=0!==r.length;if(e.props.renderValidOnly||(i=i&&0===e.props.missingResponses),i){var s=r.map((function(e){return e.layerMetadata.title}));return e.props.showEmptyMessageGFI&&!e.props.disableInfoAlert?o().createElement(l.Alert,{bsStyle:"info"},o().createElement(u.Z,{msgId:"noInfoForLayers"}),o().createElement("b",null,s.join(", "))):null}return null})),B(M(e),"renderPage",(function(t){var r=e.props.viewers[e.props.format];return r?o().createElement(r,{response:t}):null})),B(M(e),"renderEmptyPages",(function(){var t=e.getResponseProperties().emptyResponses;return 0===e.props.missingResponses&&t?o().createElement(l.Alert,{bsStyle:"danger"},o().createElement("h4",null,o().createElement(c.Z,{msgId:"noFeatureInfo"}))):null})),B(M(e),"renderPages",(function(){var t=e.getResponseProperties().validResponses;return t.map((function(r,n){var i,s,c=r.response,u=r.layerMetadata,p=(0,x.Qo)(r,e.props),f=e.props.header;null!=u&&null!==(i=u.viewer)&&void 0!==i&&i.type&&(s=(0,a.gA)(u.viewer.type));var y=t.filter((function(e){return!R()(e.response,"no features were found")})).length;return o().createElement(l.Panel,{eventKey:n,key:n,collapsible:e.props.collapsible,header:f?o().createElement("span",null,o().createElement(f,_({size:y},e.props.headerOptions,u,{index:e.props.index,onNext:function(){return e.props.onNext()},onPrevious:function(){return e.props.onPrevious()}}))):null,style:e.props.style},o().createElement(O,{response:c,format:p,viewers:s||e.props.viewers,layer:u}))}))})),B(M(e),"containerStyle",(function(t){return P()(t)&&e.props.isMobile?{height:"100%"}:{display:P()(t)?"none":"block"}})),e}return t=p,(r=[{key:"shouldComponentUpdate",value:function(e){return e.responses!==this.props.responses||e.missingResponses!==this.props.missingResponses||e.index!==this.props.index}},{key:"render",value:function(){var e=this,t=this.props.container,r=this.getResponseProperties(),n=r.currResponse,i=r.emptyResponses,s=[this.renderEmptyLayers(),o().createElement(t,_({},this.props.containerProps,{onChangeIndex:function(t){e.props.setIndex(t)},ref:"container",index:this.props.index||0,key:"swiper",style:this.containerStyle(n),className:"swipeable-view"}),this.renderPages())];return s=this.props.isMobile?s:E()(s),o().createElement("div",{className:"mapstore-identify-viewer"},i?this.renderEmptyPages():s.map((function(e){return e})))}}])&&N(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),p}(o().Component);B(Z,"propTypes",{format:s().string,collapsible:s().bool,requests:s().array,responses:s().array,missingResponses:s().number,container:s().oneOfType([s().object,s().func]),header:s().oneOfType([s().object,s().func]),headerOptions:s().object,validator:s().func,viewers:s().object,style:s().object,containerProps:s().object,index:s().number,onNext:s().func,onPrevious:s().func,onUpdateIndex:s().func,setIndex:s().func,showEmptyMessageGFI:s().bool,renderValidOnly:s().bool,loaded:s().bool,isMobile:s().bool,disableInfoAlert:s().bool}),B(Z,"defaultProps",{format:(0,a.wR)(),responses:[],requests:[],missingResponses:0,collapsible:!1,headerOptions:{},container:l.Accordion,validator:a.Te,viewers:(0,a.Qm)(),style:{position:"relative",marginBottom:0},containerProps:{},showEmptyMessageGFI:!0,renderValidOnly:!1,onNext:function(){},onPrevious:function(){},setIndex:function(){},isMobile:!1,disableInfoAlert:!1});const F=Z},979870:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var n=r(675263),o=r.n(n),i=r(124852),s=r.n(i),a=r(480681),c=r(38560);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,v(n.key),n)}}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function y(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function m(e,t,r){return(t=v(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){var t=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===u(t)?t:String(t)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(n);if(o){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return y(this,e)});function u(){var e;l(this,u);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return m(b(e=i.call.apply(i,[this].concat(r))),"renderLeftButton",(function(){var t=0===e.props.index;return e.props.useButtons?s().createElement(c.Z,{ref:"left",disabled:t,className:e.props.btnClassName||"square-button-md no-border",onClick:function(){e.props.onPrevious()}},s().createElement(a.Glyphicon,{glyph:"back"})):s().createElement("a",{ref:"left",disabled:t,className:e.props.btnClassName||"square-button-md",onClick:function(){e.props.onPrevious()}},s().createElement(a.Glyphicon,{glyph:"back"}))})),m(b(e),"renderRightButton",(function(){var t=e.props.index===e.props.size-1;return e.props.useButtons?s().createElement(c.Z,{ref:"right",disabled:t,className:e.props.btnClassName||"square-button-md no-border",onClick:function(){e.props.onNext()}},s().createElement(a.Glyphicon,{glyph:"next"})):s().createElement("a",{ref:"right",disabled:t,className:e.props.btnClassName||"square-button-md",onClick:function(){e.props.onNext()}},s().createElement(a.Glyphicon,{glyph:"next"}))})),e}return t=u,(r=[{key:"componentWillUnmount",value:function(){this.interval&&clearInterval(this.interval)}},{key:"render",value:function(){return s().createElement("div",{className:"ms-identify-swipe-header"},this.props.size>1&&s().createElement("div",{className:"ms-identify-swipe-header-arrow"},this.renderLeftButton()),s().createElement("div",{className:"ms-identify-swipe-header-title"},this.props.title),this.props.size>1&&s().createElement("div",{className:"ms-identify-swipe-header-arrow"},this.renderRightButton()))}}])&&p(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(s().Component);m(h,"propTypes",{title:o().string,index:o().number,size:o().number,container:o().oneOfType([o().object,o().func]),useButtons:o().bool,onPrevious:o().func,onNext:o().func,btnClassName:o().string}),m(h,"defaultProps",{useButtons:!0});const g=h},11196:(e,t,r)=>{"use strict";r.d(t,{mI:()=>i,Yy:()=>s});var n=r(867076),o=r(396606),i=(0,n.withHandlers)({onNext:function(e){var t=e.index,r=void 0===t?0:t,n=e.setIndex,o=void 0===n?function(){}:n,i=e.validResponses,s=void 0===i?[]:i;return function(){o(Math.min(s.length-1,r+1))}},onPrevious:function(e){var t=e.index,r=e.setIndex,n=void 0===r?function(){}:r;return function(){n(Math.max(0,t-1))}}}),s=(0,n.defaultProps)({format:(0,o.wR)(),validator:o.Te})},82110:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(124852),o=r.n(n),i=r(496259),s=r(532425);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const p=function(e){var t=e.width,r=e.height,n=e.className,a=void 0===n?"loader-container":n,c=e.contentStyle,l=void 0===c?{}:c;return o().createElement("div",{className:a},o().createElement(i.Z,null,(function(e){var n=e.width,i=void 0===n?200:n,a=e.height,c=void 0===a?200:a,p=t||(c>0?Math.min(i,c):i),f=r||(c>0?Math.min(i,c):i),y=Math.min(p,f);return o().createElement(s.Z,{size:y,style:u({padding:y/10,margin:"auto",display:"flex"},l)})})))}},173014:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(124852),o=r.n(n),i=r(867076),s=r(82110);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}var c=function(e){var t=e.loading,r=e.isLoading;return t||r&&("function"==typeof r?r():!0===r)};const u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.Z;return(0,i.branch)(e,(function(){return function(e){var n=e.loaderProps;return o().createElement(r,a({},t,n))}}))}},902870:(e,t,r)=>{"use strict";r.d(t,{Qo:()=>y,jg:()=>b,oH:()=>d});var n=r(227361),o=r.n(n),i=r(453005),s=r(986267),a=r(552259);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t);if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var y=function(e,t){var r=e.format,n=e.queryParams,o=void 0===n?{}:n;return o.info_format||o.outputFormat||r&&i.O7[r]||t.format},b=function(e){return!!o()(e,"layer.search.url")},d=function(e,t){var r,n,i,c=o()(e,"latlng.lng"),u=o()(e,"latlng.lat"),p=(0,s.reproject)([c,u],"EPSG:4326",t),y=(0,a.getHook)(a.GET_PIXEL_FROM_COORDINATES_HOOK);if(y){var b=(n=y([p.x,p.y]),i=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,s,a=[],c=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(u)throw o}}return a}}(n,i)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}(n,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());r={x:b[0],y:b[1]}}else r=e.pixel;var d=(0,a.getHook)(a.GET_COORDINATES_FROM_PIXEL_HOOK),m=(0,s.calculateCircleRadiusFromPixel)(d,r,p,5),v={type:"geometry",enabled:!0,value:{geometry:{center:[p.x,p.y],coordinates:(0,s.calculateCircleCoordinates)(p,m,12),extent:[p.x-m,p.y-m,p.x+m,p.y+m],projection:t,radius:m,type:"Polygon"},method:"Circle",operation:"INTERSECTS"}};return l(l({},e),{},{pixel:r,geometricFilter:v})}}}]);