(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[35701],{761444:(t,e,r)=>{"use strict";r.r(e);var n=r(556307),i=r.n(n),o=r(244712),a=r.n(o),s=(r(371851),r(727418)),l=r.n(s);i().BingLayer.prototype.loadMetadata=function(){if(!this.metaRequested){this.metaRequested=!0;var t=this,e="_bing_metadata_"+i().Util.stamp(this);window[e]=function(r){t.meta=r,window[e]=void 0;var n=document.getElementById(e);return n.parentNode.removeChild(n),r.errorDetails?(t.fire("load",{layer:t}),t.onError(r)):(t.initMetadata(r),null)};var r="file:"===document.location.protocol?"https":document.location.protocol.slice(0,-1),n=r+"://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+this.options.type+"?include=ImageryProviders&jsonp="+e+"&key="+this._key+"&UriScheme="+r,o=document.createElement("script");o.type="text/javascript",o.src=n,o.id=e,document.getElementsByTagName("head")[0].appendChild(o)}},i().BingLayer.prototype.onError=function(t){return this.options.onError?this.options.onError(t):null},a().registerType("bing",{create:function(t){var e=t.apiKey,r={subdomains:[0,1,2,3],type:t.name,attribution:"Bing",culture:"",onError:t.onError,maxNativeZoom:t.maxNativeZoom||19,maxZoom:t.maxZoom||23};return t.zoomOffset&&(r=l()({},r,{zoomOffset:t.zoomOffset})),new(i().BingLayer)(e,r)},isValid:function(t){return!t.meta||!t.meta.statusCode||200===t.meta.statusCode}})},951735:(t,e,r)=>{var n=r(556307);t.exports=n.TileLayer.extend({initialize:function(t){n.TileLayer.prototype.initialize.call(this,this.url,t)}})},826696:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(556307),a=r.n(o);r(514767),i().registerType("google",(function(t){return(null===(e=window)||void 0===e||null===(r=e.google)||void 0===r?void 0:r.maps)?a().gridLayer.googleMutant({type:t.name.toLowerCase(),maxNativeZoom:t.maxNativeZoom||18,maxZoom:t.maxZoom||20}):null;var e,r}))},790671:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(471305),a=r.n(o),s=r(727418),l=r.n(s);r(522729),i().registerType("graticule",{create:function(t){var e=l()({interval:20,showOriginLabel:!0,redraw:"move"},t);return a()?new(a())(e):null},isValid:function(){return!!a()}})},352031:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(357167),a=r.n(o);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}i().registerType("mapquest",{create:function(t){return a()?a().mapLayer(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({maxZoom:23},t)):(t&&t.onError&&t.onError(),!1)},isValid:function(){return!!a()}})},151254:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(556307),a=r.n(o);i().registerType("osm",(function(t){return a().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',zoomOffset:t.zoomOffset||0,maxNativeZoom:t.maxNativeZoom||19,maxZoom:t.maxZoom||23})}))},135659:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(556307),a=r.n(o);i().registerType("tms",(function(t){return a().tileLayer("".concat(t.tileMapUrl,"/{z}/{x}/{y}.").concat(t.extension),{hideErrors:t.hideErrors||!0,tms:!0})}))},70826:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(556307),a=r.n(o),s=r(45992);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}i().registerType("tileprovider",(function(t){var e,r,n=s.Z.getLayerConfig(t.provider,function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({maxZoom:23},t)),i=(r=2,function(t){if(Array.isArray(t))return t}(e=n)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o=[],a=!0,s=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(o.push(n.value),!e||o.length!==e);a=!0);}catch(t){s=!0,i=t}finally{try{a||null==r.return||r.return()}finally{if(s)throw i}}return o}}(e,r)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],m=i[1];return a().tileLayer(o,m)}))},510733:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(414293),a=r.n(o),s=r(556307),l=r.n(s),u=function t(e,r){e.eachLayer&&e.eachLayer((function(e){e.setOpacity&&e.setOpacity(r),t(e,r)}))};i().registerType("vector",{create:function(t){var e=function(t){var e=t.hideLoading,r=l().geoJson([],{pointToLayer:"marker"!==t.styleName?function(e,r){return l().circleMarker(r,e.style||t.style)}:null,hideLoading:e});return r.setOpacity=function(t){u(r,t)},r.on("layeradd",(function(e){var n=e.layer;r.setOpacity(a()(r.opacity)?t.opacity:r.opacity,n)})),r}(t);return e.opacity=a()(t.opacity)?1:t.opacity,e},update:function(t,e,r){e.opacity!==r.opacity&&(t.opacity=e.opacity)},render:function(){return null}})},622946:(t,e,r)=>{"use strict";var n=r(414293),i=r.n(n),o=r(618446),a=r.n(o),s=r(556307),l=r.n(s),u=r(443143),c=r(986267),m=r(244712),p=r.n(m),f=r(143378),y=r(432420),d=r(838848),h=["color","fillColor"];function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){S(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function S(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var x=function(t,e){t.fireEvent("loading");var r=(0,f.v)(e),n=function(){t.fireEvent("loadError")};return(0,y.Bm)(e.url,e.name,v({outputFormat:"application/json",maxFeatures:1e3,srsname:(0,c.normalizeSRS)("EPSG:4326")},r)).then((function(e){return 200===e.status?(t.clearLayers(),t.addData(e.data),t.fireEvent("load")):(console.error(e),n(new Error("status code of response:"+e.status))),t})).catch((function(t){n()}))},b=function(t){var e=t||{},r=e.color,n=e.fillColor;return v(v({},function(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}(e,h)),{},{color:(0,u.qq)(r,1),fillColor:(0,u.qq)(n,1)})},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.style&&t.style[0]||t.style;return b(e)},w=function(t,e){var r=O(e);t.setStyle(r),t.options.style=r,t.styleName=e.styleName},P=function t(e,r){e.eachLayer&&e.eachLayer((function(e){e.setOpacity&&e.setOpacity(r),t(e,r)}))},T=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=O(t),n=function(e,n){return"marker"===t.styleName?l().marker(n,r):l().circleMarker(n,r)},o=new(l().GeoJSON)(e,{pointToLayer:n,style:r});return o.setOpacity=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=v({},o.options.style||{}),r=e.fillOpacity,n=void 0===r?1:r,i=e.opacity,a=void 0===i?1:i,s=v(v({},e),{},{opacity:a*t,fillOpacity:n*t});o.setStyle(b(s)),P(o,t)},o.on("layeradd",(function(){w(o,t),o.setOpacity(i()(o.opacity)?t.opacity:o.opacity)})),o};p().registerType("wfs",{create:function(t){var e=T(t);return x(e,t),e.opacity=i()(t.opacity)?1:t.opacity,e},update:function(t,e,r){if(e.opacity!==r.opacity&&(t.opacity=e.opacity),(0,d.Es)(r,e)&&x(t,e),a()(e.style,r.style)||w(t,e),e.styleName!==r.styleName){var n=t.toGeoJSON().features;return T(e,n)}return null},render:function(){return null}})},136366:(t,e,r)=>{"use strict";r.r(e);var n=r(124852),i=r.n(n),o=r(805346),a=r(244712),s=r.n(a),l=r(143378),u=r(73785),c=r.n(u),m=r(556307),p=r.n(m),f=r(727418),y=r.n(f),d=r(701469),h=r.n(d),g=r(414293),v=r.n(g),S=r(233044),x=r(503901),b=r(624262),O=r(333358);function w(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r(312787),p().NonTiledLayer.WMSCustom=p().NonTiledLayer.WMS.extend({initialize:function(t,e){this._wmsUrl=t;var r=p().extend({},this.defaultWmsParams);for(var n in e)this.options.hasOwnProperty(n)||"CRS"===n.toUpperCase()||"maxNativeZoom"===n||(r[n]=e[n]);this.wmsParams=r,p().setOptions(this,e)},removeParams:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;return e.forEach((function(e){return delete t.wmsParams[e]})),r||this.redraw(),this}}),p().nonTiledLayer.wmsCustom=function(t,e){return new(p().NonTiledLayer.WMSCustom)(t,e)},p().TileLayer.MultipleUrlWMS=p().TileLayer.WMS.extend({initialize:function(t,e){this._url=t[0],this._urls=t,this._urlsIndex=0;var r=p().extend({},this.defaultWmsParams),n=e.tileSize||this.options.tileSize;for(var i in e.detectRetina&&p().Browser.retina?r.width=r.height=2*n:r.width=r.height=n,e)this.options.hasOwnProperty(i)||"CRS"===i.toUpperCase()||"maxNativeZoom"===i||(r[i]=e[i]);this.wmsParams=r,p().setOptions(this,e)},getTileUrl:function(t){var e=this._map,r=this.options.tileSize,n=t.multiplyBy(r),i=n.add([r,r]),o=this._crs.project(e.unproject(n,t.z)),a=this._crs.project(e.unproject(i,t.z)),s=this._wmsVersion>=1.3&&this._crs===p().CRS.EPSG4326?[a.y,o.x,o.y,a.x].join(","):[o.x,a.y,a.x,o.y].join(",");this._urlsIndex++,this._urlsIndex===this._urls.length&&(this._urlsIndex=0);var l=p().Util.template(this._urls[this._urlsIndex],{s:this._getSubdomain(t)});return l+p().Util.getParamString(this.wmsParams,l,!0)+"&BBOX="+s},removeParams:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;return e.forEach((function(e){return delete t.wmsParams[e]})),r||this.redraw(),this}}),p().tileLayer.multipleUrlWMS=function(t,e){return new(p().TileLayer.MultipleUrlWMS)(t,e)},p().TileLayer.ElevationWMS=p().TileLayer.MultipleUrlWMS.extend({initialize:function(t,e,r,n){this._tiles={},this._nodata=r,this._littleendian=n,p().TileLayer.MultipleUrlWMS.prototype.initialize.apply(this,arguments)},_addTile:function(t){var e=this.getTileUrl(t);(0,x.qR)(e,t,this._tileCoordsToKey(t))},getElevation:function(t,e){try{var r=this._getTileFromCoords(t),n=(0,x.yQ)(this._tileCoordsToKey(r),this._getTileRelativePixel(r,e),this.getTileSize().x,this._nodata,this._littleendian);return n.available?n.value:i().createElement(o.Z,{msgId:n.message})}catch(t){return i().createElement(o.Z,{msgId:"elevationLoadingError"})}},_getTileFromCoords:function(t){var e=this._map.project(t).divideBy(256).floor();return y()(e,{z:this._tileZoom})},_getTileRelativePixel:function(t,e){var r=Math.floor(e.x-this._getTilePos(t).x-this._map._getMapPanePos().x),n=Math.min(this.getTileSize().x-1,Math.floor(e.y-this._getTilePos(t).y-this._map._getMapPanePos().y));return new(p().Point)(r,n)},_removeTile:function(){},_abortLoading:function(){}}),p().tileLayer.elevationWMS=function(t,e,r,n){return new(p().TileLayer.ElevationWMS)(t,e,r,n)};var P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(t).reduce((function(e,r){return v()(t[r])?e:y()(e,w({},r,t[r]))}),{})};function T(t){var e=void 0!==t.opacity?t.opacity:1,r=(0,l.v)(t),n=y()({},t.baseParams,{attribution:t.credits&&(0,b.go)(t.credits),layers:t.name,styles:t.style||"",format:((0,O.z)(t.format)?"image/png":t.format)||"image/png",transparent:void 0===t.transparent||t.transparent,tiled:void 0===t.tiled||t.tiled,opacity:e,zIndex:t.zIndex,version:t.version||"1.3.0",tileSize:t.tileSize||256,maxZoom:t.maxZoom||23,maxNativeZoom:t.maxNativeZoom||18},y()(t._v_?{_v_:t._v_}:{},r||{}));return(0,S.addAuthenticationToSLD)(n,t)}function L(t){return t.map((function(t){return t.split("?")[0]}))}s().registerType("wms",{create:function(t){var e=L(h()(t.url)?t.url:[t.url]),r=P(T(t)||{});return e.forEach((function(e){return(0,S.addAuthenticationParameter)(e,r,t.securityToken)})),t.useForElevation?p().tileLayer.elevationWMS(e,r,t.nodata||-9999,t.littleendian||!1):t.singleTile?p().nonTiledLayer.wmsCustom(e[0],r):p().tileLayer.multipleUrlWMS(e,r)},update:function(t,e,r){if(r.singleTile!==e.singleTile||r.tileSize!==e.tileSize||r.securityToken!==e.securityToken&&e.visibility){var n=L(h()(e.url)?e.url:[e.url]),i=T(e)||{};return n.forEach((function(t){return(0,S.addAuthenticationParameter)(t,i,e.securityToken)})),e.singleTile?p().nonTiledLayer.wmsCustom(n[0],i):p().tileLayer.multipleUrlWMS(n,i)}var o=y()({},c().filterWMSParamOptions(T(r)),(0,S.addAuthenticationToSLD)(r.params||{},r)),a=y()({},c().filterWMSParamOptions(T(e)),(0,S.addAuthenticationToSLD)(e.params||{},e)),s=Object.keys(a).filter((function(t){return a[t]!==o[t]})),l=Object.keys(o).filter((function(t){return o[t]!==a[t]})),u={};return l.length>0&&t.removeParams(l,s.length>0),s.length>0&&(u=s.reduce((function(t,e){return y()({},t,w({},e,a[e]))}),u),t.setParams(P(y()(u,u.params,(0,S.addAuthenticationToSLD)(e.params||{},e))))),null}})},485365:(t,e,r)=>{"use strict";r.r(e);var n=r(244712),i=r.n(n),o=r(986267),a=r(556307),s=r.n(a),l=r(727418),u=r.n(l),c=r(233044),m=r(707294),p=r(552259),f=r(91175),y=r.n(f),d=r(281763),h=r.n(d);function g(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const S=s().TileLayer.extend({defaultWmtsParams:{service:"WMTS",request:"GetTile",version:"1.3.0",layer:"",style:"",tileMatrixSet:"",format:"image/jpeg"},initialize:function(t,e,r){this._url=t[0],this._urls=t,this._urlsIndex=0;var n=s().extend({},this.defaultWmtsParams),i=e.tileSize||this.options.tileSize;for(var o in e.detectRetina&&s().Browser.retina?n.width=n.height=2*i:n.width=n.height=i,e)this.options.hasOwnProperty(o)||"crs"===o||(n[o]=e[o]);this.wmtsParams=n,this.matrixIds=r.matrixIds&&this.getMatrix(r.matrixIds,r)||this.getDefaultMatrix(r),this.matrixSet=r.matrixSet&&r.matrixSet.TileMatrix||[],this.ignoreErrors=r.ignoreErrors||!1,s().setOptions(this,e)},getWMTSParams:function(t,e,r,n,i){var a=(0,p.getScales)()[r],s=y()(t.map((function(e,r){if(r===t.length-1)return null;var n=parseFloat(e.ScaleDenominator),i=parseFloat(t[r+1].ScaleDenominator);return n>=a&&i<a?a-i>(n-i)/2?{id:r,data:e}:{id:r+1,data:t[r+1]}:null})).filter((function(t){return t}))),l=s&&h()(s.id)&&s.id+""||0===t.length&&r||null;if(!e[l])return null;var u=e[l].identifier,c=s.data&&s.data.TopLeftCorner&&(0,o.parseString)(s.data.TopLeftCorner)||e[l].topLeftCorner,m=c.lng||c.x,f=c.lat||c.y,d=Math.round((n.x-m)/i),g=-Math.round((n.y-f)/i),v=s.data&&s.data.MatrixWidth&&s.data.MatrixHeight&&{cols:{min:0,max:s.data.MatrixWidth-1},rows:{min:0,max:s.data.MatrixHeight-1}},S=e[l].ranges||v;return S&&!function(t,e,r){return!(t<r.cols.min||t>r.cols.max||e<r.rows.min||e>r.rows.max)}(d,g,S)?null:{ident:u,tilecol:d,tilerow:g}},getTileUrl:function(t){var e=this._map,r=e.options.crs,n=this.options.tileSize,i=t.multiplyBy(n);i.x+=1,i.y-=1;var o=i.add([n,n]),a=r.project(e.unproject(i,t.z)),l=r.project(e.unproject(o,t.z)).x-a.x,u=this.getWMTSParams(g(this.matrixSet),g(this.matrixIds),t.z,a,l);if(!u)return"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";this._urlsIndex++,this._urlsIndex===this._urls.length&&(this._urlsIndex=0);var c=s().Util.template(this._urls[this._urlsIndex],{s:this._getSubdomain(t),TileRow:u.tilerow,TileCol:u.tilecol,TileMatrixSet:this.options.tileMatrixSet,TileMatrix:u.ident,Style:this.options.style});return"RESTful"===this.options.requestEncoding?c:c+s().Util.getParamString(this.wmtsParams,c,!0)+"&tilematrix="+u.ident+"&tilerow="+u.tilerow+"&tilecol="+u.tilecol},getMatrix:function(t,e){return t.map((function(t){return{identifier:t.identifier,topLeftCorner:new(s().LatLng)(e.originY,e.originX),ranges:t.ranges||null}}))},getDefaultMatrix:function(t){for(var e=new Array(22),r=0;r<22;r++)e[r]={identifier:t.tileMatrixPrefix+r,topLeftCorner:new(s().LatLng)(t.originY,t.originX)};return e},onError:function(){return!this.ignoreErrors}});var x=r(701469),b=r.n(x),O=r(333358);s().tileLayer.wmts=function(t,e,r){return new S(t,e,r)};var w=function(t){var e=function(t){return t.map((function(t){return t.split("?")[0]}))}(b()(t.url)?t.url:[t.url]),r=function(t){var e=(0,o.normalizeSRS)(t.srs||"EPSG:3857",t.allowedSRS),r=m.C2(t.tileMatrixSet,e,t.allowedSRS,t.matrixIds);return u()({requestEncoding:t.requestEncoding,layer:t.name,style:t.style||"",format:((0,O.z)(t.format)?"image/png":t.format)||"image/png",tileMatrixSet:r,version:t.version||"1.0.0",tileSize:t.tileSize||256,CRS:(0,o.normalizeSRS)(t.srs||"EPSG:3857",t.allowedSRS),maxZoom:t.maxZoom||23,maxNativeZoom:t.maxNativeZoom||18},t.params||{})}(t)||{};e.forEach((function(e){return(0,c.addAuthenticationParameter)(e,r,t.securityToken)}));var n=(0,o.normalizeSRS)(t.srs||"EPSG:3857",t.allowedSRS),i=m.h7(t,n),a=i.tileMatrixSet,l=i.matrixIds;return s().tileLayer.wmts(e,r,{tileMatrixPrefix:t.tileMatrixPrefix||r.tileMatrixSet+":"||n+":",originY:t.originY||20037508.3428,originX:t.originX||-20037508.3428,ignoreErrors:t.ignoreErrors||!1,matrixIds:l,matrixSet:a})};i().registerType("wmts",{create:w,update:function(t,e,r){return r.securityToken!==e.securityToken||r.format!==e.format?w(e):null}})},935701:(t,e,r)=>{t.exports={BingLayer:r(761444),Commons:r(951735),GraticuleLayer:r(790671),GoogleLayer:r(826696),MapQuest:r(352031),OSMLayer:r(151254),TMSLayer:r(135659),TileProviderLayer:r(70826),WFSLayer:r(622946).default,WMSLayer:r(136366),WMTSLayer:r(485365),VectorLayer:r(510733)}},357167:t=>{t.exports=window.MQ},503901:(t,e,r)=>{"use strict";r.d(e,{qR:()=>c,yQ:()=>m});var n=r(375875),i=r.n(n),o=r(581399),a=r.n(o),s=r(882702),l=new(a())(100),u=function(t,e,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-9999,o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=n*t+r;try{var s=e.dataView.getInt16(2*a,o);if(s!==i&&32767!==s&&-32768!==s)return s}catch(t){}return null},c=function(t,e,r){return l.has(r)?null:new s.Promise((function(n,o){i().get(t,{responseType:"arraybuffer"}).then((function(t){!function(t,e,r){l.set(r,{data:t,dataView:new DataView(t),coords:e,current:!0,status:"success"})}(t.data,e,r),n()})).catch((function(t){!function(t,e,r){l.set(r,{coords:e,current:!0,status:"error: "+t})}(t.message,e,r),o(t)}))}))},m=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:-9999,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=l.get(t);return o&&"success"===o.status?{available:!0,value:u(r,o,e.x,e.y,n,i)}:o&&"loading"===o.status?{available:!1,message:"elevationLoading"}:o&&"error"===o.status?{available:!1,message:"elevationLoadingError"}:{available:!1,message:"elevationNotAvailable"}}},333358:(t,e,r)=>{"use strict";r.d(e,{z:()=>i});var n=["application/vnd.mapbox-vector-tile","application/json;type=geojson","application/json;type=topojson"],i=function(t){return-1!==n.indexOf(t)}},73785:(t,e,r)=>{var n=r(727418),i={PARAM_OPTIONS:["layers","styles","format","transparent","version","tiled","zindex","_v_","cql_filter","sld"],wmsToLeafletOptions:function(t){var e=void 0!==t.opacity?t.opacity:1;return n({layers:t.name,styles:t.style||"",format:t.format||"image/png",transparent:void 0===t.transparent||t.transparent,tiled:void 0===t.tiled||t.tiled,opacity:e},t.params||{})},getWMSURL:function(t){return t.split("?")[0]},filterWMSParamOptions:function(t){var e={};return Object.keys(t).forEach((function(r){r&&r.toLowerCase&&i.PARAM_OPTIONS.indexOf(r.toLowerCase())>=0&&(e[r]=t[r])})),e}};t.exports=i}}]);