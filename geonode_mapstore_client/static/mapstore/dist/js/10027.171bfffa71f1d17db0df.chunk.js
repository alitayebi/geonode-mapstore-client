(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[10027],{280800:(t,e,r)=>{"use strict";r.d(e,{o:()=>o,B:()=>s});var n=r(864011),i=r(934007);function o(t,e,r,n){return function(o,s,a){var u=new XMLHttpRequest;u.open("GET","function"==typeof t?t(o,s,a):t,!0),e.getType()==i.Z.ARRAY_BUFFER&&(u.responseType="arraybuffer"),u.onload=function(t){if(!u.status||u.status>=200&&u.status<300){var o,s=e.getType();s==i.Z.JSON||s==i.Z.TEXT?o=u.responseText:s==i.Z.XML?(o=u.responseXML)||(o=(new DOMParser).parseFromString(u.responseText,"application/xml")):s==i.Z.ARRAY_BUFFER&&(o=u.response),o?r.call(this,e.readFeatures(o,{featureProjection:a}),e.readProjection(o),e.getLastExtent()):n.call(this)}else n.call(this)}.bind(this),u.onerror=function(){n.call(this)}.bind(this),u.send()}}function s(t,e){return o(t,e,(function(t,e){"function"==typeof this.addFeatures&&this.addFeatures(t)}),n.Zn)}},429902:(t,e,r)=>{"use strict";r.d(e,{Z:()=>d});var n=r(666901),i=r(677701),o=r(556510),s=r(913580),a=r(831219),u="renderOrder",h=function(t){function e(e){var r=e||{},i=(0,s.f0)({},r);delete i.style,delete i.renderBuffer,delete i.updateWhileAnimating,delete i.updateWhileInteracting,t.call(this,i),this.declutter_=void 0!==r.declutter&&r.declutter,this.renderBuffer_=void 0!==r.renderBuffer?r.renderBuffer:100,this.style_=null,this.styleFunction_=void 0,this.setStyle(r.style),this.updateWhileAnimating_=void 0!==r.updateWhileAnimating&&r.updateWhileAnimating,this.updateWhileInteracting_=void 0!==r.updateWhileInteracting&&r.updateWhileInteracting,this.renderMode_=r.renderMode||o.Z.VECTOR,this.type=n.Z.VECTOR}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDeclutter=function(){return this.declutter_},e.prototype.setDeclutter=function(t){this.declutter_=t},e.prototype.getRenderBuffer=function(){return this.renderBuffer_},e.prototype.getRenderOrder=function(){return this.get(u)},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.getUpdateWhileAnimating=function(){return this.updateWhileAnimating_},e.prototype.getUpdateWhileInteracting=function(){return this.updateWhileInteracting_},e.prototype.setRenderOrder=function(t){this.set(u,t)},e.prototype.setStyle=function(t){this.style_=void 0!==t?t:a.createDefaultStyle,this.styleFunction_=null===t?void 0:(0,a.toFunction)(this.style_),this.changed()},e.prototype.getRenderMode=function(){return this.renderMode_},e}(i.Z);h.prototype.getSource;const d=h},880161:(t,e,r)=>{"use strict";function n(t,e){return[[-1/0,-1/0,1/0,1/0]]}function i(t,e){return[t]}r.d(e,{$6:()=>n,VW:()=>i})},973410:(t,e,r)=>{"use strict";r.d(e,{Z:()=>x});var n=r(949179),i=r(378426),o=r(919629),s=r(713910),a=r(179682),u=r(438906),h=r(613002),d=r(9520),l=r(173381),f=r(421915),c=r(280800),p=r(864011),_=r(880161),y=r(913580),v=r(771405),g=r(582418),E=r(925753),m=r(273101),I=function(t){function e(e,r){t.call(this,e),this.feature=r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(d.ZP);const x=function(t){function e(e){var r=e||{};t.call(this,{attributions:r.attributions,projection:void 0,state:g.Z.READY,wrapX:void 0===r.wrapX||r.wrapX}),this.loader_=p.Zn,this.format_=r.format,this.overlaps_=null==r.overlaps||r.overlaps,this.url_=r.url,void 0!==r.loader?this.loader_=r.loader:void 0!==this.url_&&((0,u.h)(this.format_,7),this.loader_=(0,c.B)(this.url_,this.format_)),this.strategy_=void 0!==r.strategy?r.strategy:_.$6;var n,o,s=void 0===r.useSpatialIndex||r.useSpatialIndex;this.featuresRtree_=s?new m.Z:null,this.loadedExtentsRtree_=new m.Z,this.nullGeometryFeatures_={},this.idIndex_={},this.undefIdIndex_={},this.featureChangeKeys_={},this.featuresCollection_=null,Array.isArray(r.features)?o=r.features:r.features&&(o=(n=r.features).getArray()),s||void 0!==n||(n=new i.Z(o)),void 0!==o&&this.addFeaturesInternal(o),void 0!==n&&this.bindFeaturesCollection_(n)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.addFeature=function(t){this.addFeatureInternal(t),this.changed()},e.prototype.addFeatureInternal=function(t){var e=(0,n.sq)(t);if(this.addToIndex_(e,t)){this.setupChangeEvents_(e,t);var r=t.getGeometry();if(r){var i=r.getExtent();this.featuresRtree_&&this.featuresRtree_.insert(i,t)}else this.nullGeometryFeatures_[e]=t;this.dispatchEvent(new I(E.Z.ADDFEATURE,t))}},e.prototype.setupChangeEvents_=function(t,e){this.featureChangeKeys_[t]=[(0,h.oL)(e,l.Z.CHANGE,this.handleFeatureChange_,this),(0,h.oL)(e,s.Z.PROPERTYCHANGE,this.handleFeatureChange_,this)]},e.prototype.addToIndex_=function(t,e){var r=!0,n=e.getId();return void 0!==n?n.toString()in this.idIndex_?r=!1:this.idIndex_[n.toString()]=e:((0,u.h)(!(t in this.undefIdIndex_),30),this.undefIdIndex_[t]=e),r},e.prototype.addFeatures=function(t){this.addFeaturesInternal(t),this.changed()},e.prototype.addFeaturesInternal=function(t){for(var e=[],r=[],i=[],o=0,s=t.length;o<s;o++){var a=t[o],u=(0,n.sq)(a);this.addToIndex_(u,a)&&r.push(a)}for(var h=0,d=r.length;h<d;h++){var l=r[h],f=(0,n.sq)(l);this.setupChangeEvents_(f,l);var c=l.getGeometry();if(c){var p=c.getExtent();e.push(p),i.push(l)}else this.nullGeometryFeatures_[f]=l}this.featuresRtree_&&this.featuresRtree_.load(e,i);for(var _=0,y=r.length;_<y;_++)this.dispatchEvent(new I(E.Z.ADDFEATURE,r[_]))},e.prototype.bindFeaturesCollection_=function(t){var e=!1;(0,h.oL)(this,E.Z.ADDFEATURE,(function(r){e||(e=!0,t.push(r.feature),e=!1)})),(0,h.oL)(this,E.Z.REMOVEFEATURE,(function(r){e||(e=!0,t.remove(r.feature),e=!1)})),(0,h.oL)(t,o.Z.ADD,(function(t){e||(e=!0,this.addFeature(t.element),e=!1)}),this),(0,h.oL)(t,o.Z.REMOVE,(function(t){e||(e=!0,this.removeFeature(t.element),e=!1)}),this),this.featuresCollection_=t},e.prototype.clear=function(t){if(t){for(var e in this.featureChangeKeys_)this.featureChangeKeys_[e].forEach(h.bN);this.featuresCollection_||(this.featureChangeKeys_={},this.idIndex_={},this.undefIdIndex_={})}else if(this.featuresRtree_)for(var r in this.featuresRtree_.forEach(this.removeFeatureInternal,this),this.nullGeometryFeatures_)this.removeFeatureInternal(this.nullGeometryFeatures_[r]);this.featuresCollection_&&this.featuresCollection_.clear(),this.featuresRtree_&&this.featuresRtree_.clear(),this.loadedExtentsRtree_.clear(),this.nullGeometryFeatures_={};var n=new I(E.Z.CLEAR);this.dispatchEvent(n),this.changed()},e.prototype.forEachFeature=function(t){if(this.featuresRtree_)return this.featuresRtree_.forEach(t);this.featuresCollection_&&this.featuresCollection_.forEach(t)},e.prototype.forEachFeatureAtCoordinateDirect=function(t,e){var r=[t[0],t[1],t[0],t[1]];return this.forEachFeatureInExtent(r,(function(r){return r.getGeometry().intersectsCoordinate(t)?e(r):void 0}))},e.prototype.forEachFeatureInExtent=function(t,e){if(this.featuresRtree_)return this.featuresRtree_.forEachInExtent(t,e);this.featuresCollection_&&this.featuresCollection_.forEach(e)},e.prototype.forEachFeatureIntersectingExtent=function(t,e){return this.forEachFeatureInExtent(t,(function(r){if(r.getGeometry().intersectsExtent(t)){var n=e(r);if(n)return n}}))},e.prototype.getFeaturesCollection=function(){return this.featuresCollection_},e.prototype.getFeatures=function(){var t;return this.featuresCollection_?t=this.featuresCollection_.getArray():this.featuresRtree_&&(t=this.featuresRtree_.getAll(),(0,y.xb)(this.nullGeometryFeatures_)||(0,a.l7)(t,(0,y.KX)(this.nullGeometryFeatures_))),t},e.prototype.getFeaturesAtCoordinate=function(t){var e=[];return this.forEachFeatureAtCoordinateDirect(t,(function(t){e.push(t)})),e},e.prototype.getFeaturesInExtent=function(t){return this.featuresRtree_.getInExtent(t)},e.prototype.getClosestFeatureToCoordinate=function(t,e){var r=t[0],n=t[1],i=null,o=[NaN,NaN],s=1/0,a=[-1/0,-1/0,1/0,1/0],u=e||p.uX;return this.featuresRtree_.forEachInExtent(a,(function(t){if(u(t)){var e=t.getGeometry(),h=s;if((s=e.closestPointXY(r,n,o,s))<h){i=t;var d=Math.sqrt(s);a[0]=r-d,a[1]=n-d,a[2]=r+d,a[3]=n+d}}})),i},e.prototype.getExtent=function(t){return this.featuresRtree_.getExtent(t)},e.prototype.getFeatureById=function(t){var e=this.idIndex_[t.toString()];return void 0!==e?e:null},e.prototype.getFormat=function(){return this.format_},e.prototype.getOverlaps=function(){return this.overlaps_},e.prototype.getUrl=function(){return this.url_},e.prototype.handleFeatureChange_=function(t){var e=t.target,r=(0,n.sq)(e),i=e.getGeometry();if(i){var o=i.getExtent();r in this.nullGeometryFeatures_?(delete this.nullGeometryFeatures_[r],this.featuresRtree_&&this.featuresRtree_.insert(o,e)):this.featuresRtree_&&this.featuresRtree_.update(o,e)}else r in this.nullGeometryFeatures_||(this.featuresRtree_&&this.featuresRtree_.remove(e),this.nullGeometryFeatures_[r]=e);var s=e.getId();if(void 0!==s){var a=s.toString();r in this.undefIdIndex_?(delete this.undefIdIndex_[r],this.idIndex_[a]=e):this.idIndex_[a]!==e&&(this.removeFromIdIndex_(e),this.idIndex_[a]=e)}else r in this.undefIdIndex_||(this.removeFromIdIndex_(e),this.undefIdIndex_[r]=e);this.changed(),this.dispatchEvent(new I(E.Z.CHANGEFEATURE,e))},e.prototype.hasFeature=function(t){var e=t.getId();return void 0!==e?e in this.idIndex_:(0,n.sq)(t)in this.undefIdIndex_},e.prototype.isEmpty=function(){return this.featuresRtree_.isEmpty()&&(0,y.xb)(this.nullGeometryFeatures_)},e.prototype.loadFeatures=function(t,e,r){var n=this,i=this.loadedExtentsRtree_,o=this.strategy_(t,e);this.loading=!1;for(var s=function(t,s){var a=o[t];i.forEachInExtent(a,(function(t){return(0,f.r4)(t.extent,a)}))||(n.loader_.call(n,a,e,r),i.insert(a,{extent:a.slice()}),n.loading=n.loader_!==p.Zn)},a=0,u=o.length;a<u;++a)s(a)},e.prototype.removeLoadedExtent=function(t){var e,r=this.loadedExtentsRtree_;r.forEachInExtent(t,(function(r){if((0,f.fS)(r.extent,t))return e=r,!0})),e&&r.remove(e)},e.prototype.removeFeature=function(t){var e=(0,n.sq)(t);e in this.nullGeometryFeatures_?delete this.nullGeometryFeatures_[e]:this.featuresRtree_&&this.featuresRtree_.remove(t),this.removeFeatureInternal(t),this.changed()},e.prototype.removeFeatureInternal=function(t){var e=(0,n.sq)(t);this.featureChangeKeys_[e].forEach(h.bN),delete this.featureChangeKeys_[e];var r=t.getId();void 0!==r?delete this.idIndex_[r.toString()]:delete this.undefIdIndex_[e],this.dispatchEvent(new I(E.Z.REMOVEFEATURE,t))},e.prototype.removeFromIdIndex_=function(t){var e=!1;for(var r in this.idIndex_)if(this.idIndex_[r]===t){delete this.idIndex_[r],e=!0;break}return e},e.prototype.setLoader=function(t){this.loader_=t},e}(v.Z)},925753:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n={ADDFEATURE:"addfeature",CHANGEFEATURE:"changefeature",CLEAR:"clear",REMOVEFEATURE:"removefeature"}},273101:(t,e,r)=>{"use strict";r.d(e,{Z:()=>h});var n=r(949179),i=r(46358),o=r.n(i),s=r(421915),a=r(913580),u=function(t){this.rbush_=o()(t,void 0),this.items_={}};u.prototype.insert=function(t,e){var r={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3],value:e};this.rbush_.insert(r),this.items_[(0,n.sq)(e)]=r},u.prototype.load=function(t,e){for(var r=new Array(e.length),i=0,o=e.length;i<o;i++){var s=t[i],a=e[i],u={minX:s[0],minY:s[1],maxX:s[2],maxY:s[3],value:a};r[i]=u,this.items_[(0,n.sq)(a)]=u}this.rbush_.load(r)},u.prototype.remove=function(t){var e=(0,n.sq)(t),r=this.items_[e];return delete this.items_[e],null!==this.rbush_.remove(r)},u.prototype.update=function(t,e){var r=this.items_[(0,n.sq)(e)],i=[r.minX,r.minY,r.maxX,r.maxY];(0,s.fS)(i,t)||(this.remove(e),this.insert(t,e))},u.prototype.getAll=function(){return this.rbush_.all().map((function(t){return t.value}))},u.prototype.getInExtent=function(t){var e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]};return this.rbush_.search(e).map((function(t){return t.value}))},u.prototype.forEach=function(t,e){return this.forEach_(this.getAll(),t,e)},u.prototype.forEachInExtent=function(t,e,r){return this.forEach_(this.getInExtent(t),e,r)},u.prototype.forEach_=function(t,e,r){for(var n,i=0,o=t.length;i<o;i++)if(n=e.call(r,t[i]))return n;return n},u.prototype.isEmpty=function(){return(0,a.xb)(this.items_)},u.prototype.clear=function(){this.rbush_.clear(),this.items_={}},u.prototype.getExtent=function(t){var e=this.rbush_.toJSON();return(0,s.T9)(e.minX,e.minY,e.maxX,e.maxY,t)},u.prototype.concat=function(t){for(var e in this.rbush_.load(t.rbush_.all()),t.items_)this.items_[e]=t.items_[e]};const h=u}}]);