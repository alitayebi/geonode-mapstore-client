(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2433,7654,9081,7506],{20273:(e,r,t)=>{var n=t(89049);function o(e,r,t){var n=!1;r[0][0]===r[r.length-1][0]&&r[0][1]===r[r.length-1][1]&&(r=r.slice(0,r.length-1));for(var o=0,i=r.length-1;o<r.length;i=o++){var a=r[o][0],u=r[o][1],s=r[i][0],c=r[i][1];if(e[1]*(a-s)+u*(s-e[0])+c*(e[0]-a)==0&&(a-e[0])*(s-e[0])<=0&&(u-e[1])*(c-e[1])<=0)return!t;u>e[1]!=c>e[1]&&e[0]<(s-a)*(e[1]-u)/(c-u)+a&&(n=!n)}return n}e.exports=function(e,r){var t=n.getCoord(e),i=r.geometry.coordinates;"Polygon"===r.geometry.type&&(i=[i]);for(var a=0,u=!1;a<i.length&&!u;a++)if(o(t,i[a][0])){for(var s=!1,c=1;c<i[a].length&&!s;)o(t,i[a][c],!0)&&(s=!0),c++;s||(u=!0)}return u}},89049:e=>{function r(e){if(!e)throw new Error("obj is required");var r;if(e.length?r=e:e.coordinates?r=e.coordinates:e.geometry&&e.geometry.coordinates&&(r=e.geometry.coordinates),r)return t(r),r;throw new Error("No valid coordinates")}function t(e){if(e.length>1&&"number"==typeof e[0]&&"number"==typeof e[1])return!0;if(Array.isArray(e[0])&&e[0].length)return t(e[0]);throw new Error("coordinates must only contain numbers")}function n(e){if(!e)throw new Error("geojson is required");if(void 0!==e.geometry)return e.geometry;if(e.coordinates||e.geometries)return e;throw new Error("geojson must be a valid Feature or Geometry Object")}e.exports={geojsonType:function(e,r,t){if(!r||!t)throw new Error("type and name required");if(!e||e.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.type)},collectionOf:function(e,r,t){if(!e)throw new Error("No featureCollection passed");if(!t)throw new Error(".collectionOf() requires a name");if(!e||"FeatureCollection"!==e.type)throw new Error("Invalid input to "+t+", FeatureCollection required");for(var n=0;n<e.features.length;n++){var o=e.features[n];if(!o||"Feature"!==o.type||!o.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!o.geometry||o.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+o.geometry.type)}},featureOf:function(e,r,t){if(!e)throw new Error("No feature passed");if(!t)throw new Error(".featureOf() requires a name");if(!e||"Feature"!==e.type||!e.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!e.geometry||e.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.geometry.type)},getCoord:function(e){if(!e)throw new Error("obj is required");var t=r(e);if(t.length>1&&"number"==typeof t[0]&&"number"==typeof t[1])return t;throw new Error("Coordinate is not a valid Point")},getCoords:r,containsNumber:t,getGeom:n,getGeomType:function(e){if(!e)throw new Error("geojson is required");var r=n(e);if(r)return r.type}}},35385:(e,r,t)=>{var n=t(55962).featureCollection,o=t(10172),i=t(40551),a=t(20273),u=t(49655);function s(e,r,t,n,o,i){if(Math.sqrt((o-t)*(o-t)+(i-n)*(i-n))===Math.sqrt((e-t)*(e-t)+(r-n)*(r-n))+Math.sqrt((o-e)*(o-e)+(i-r)*(i-r)))return!0}e.exports=function(e){"FeatureCollection"!==e.type&&("Feature"!==e.type&&(e={type:"Feature",geometry:e,properties:{}}),e=n([e]));for(var r=o(e),t=!1,c=0;!t&&c<e.features.length;){var f,l=e.features[c].geometry,p=!1;if("Point"===l.type)r.geometry.coordinates[0]===l.coordinates[0]&&r.geometry.coordinates[1]===l.coordinates[1]&&(t=!0);else if("MultiPoint"===l.type){var d=!1;for(f=0;!d&&f<l.coordinates.length;)r.geometry.coordinates[0]===l.coordinates[f][0]&&r.geometry.coordinates[1]===l.coordinates[f][1]&&(t=!0,d=!0),f++}else if("LineString"===l.type)for(f=0;!p&&f<l.coordinates.length-1;)s(r.geometry.coordinates[0],r.geometry.coordinates[1],l.coordinates[f][0],l.coordinates[f][1],l.coordinates[f+1][0],l.coordinates[f+1][1])&&(p=!0,t=!0),f++;else if("MultiLineString"===l.type)for(var h=0;h<l.coordinates.length;){p=!1,f=0;for(var y=l.coordinates[h];!p&&f<y.length-1;)s(r.geometry.coordinates[0],r.geometry.coordinates[1],y[f][0],y[f][1],y[f+1][0],y[f+1][1])&&(p=!0,t=!0),f++;h++}else"Polygon"!==l.type&&"MultiPolygon"!==l.type||a(r,{type:"Feature",geometry:l,properties:{}})&&(t=!0);c++}if(t)return r;var m,g=n([]);for(c=0;c<e.features.length;c++)g.features=g.features.concat(u(e.features[c]).features);var v=1/0;for(c=0;c<g.features.length;c++){var w=i(r,g.features[c],"miles");w<v&&(v=w,m=g.features[c])}return m}},23742:(e,r,t)=>{var n=t(63245).coordEach;e.exports=function(e){var r=[1/0,1/0,-1/0,-1/0];return n(e,(function(e){r[0]>e[0]&&(r[0]=e[0]),r[1]>e[1]&&(r[1]=e[1]),r[2]<e[0]&&(r[2]=e[0]),r[3]<e[1]&&(r[3]=e[1])})),r}},10172:(e,r,t)=>{var n=t(23742),o=t(55962).point;e.exports=function(e,r){var t=n(e),i=(t[0]+t[2])/2,a=(t[1]+t[3])/2;return o([i,a],r)}},40551:(e,r,t)=>{var n=t(98200).getCoord,o=t(55962).radiansToDistance;e.exports=function(e,r,t){var i=Math.PI/180,a=n(e),u=n(r),s=i*(u[1]-a[1]),c=i*(u[0]-a[0]),f=i*a[1],l=i*u[1],p=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(c/2),2)*Math.cos(f)*Math.cos(l);return o(2*Math.atan2(Math.sqrt(p),Math.sqrt(1-p)),t)}},49655:(e,r,t)=>{var n=t(63245),o=t(55962),i=o.point,a=n.coordEach,u=n.featureEach,s=o.featureCollection;e.exports=function(e){var r=[];return"FeatureCollection"===e.type?u(e,(function(e){a(e,(function(t){r.push(i(t,e.properties))}))})):a(e,(function(t){r.push(i(t,e.properties))})),s(r)}},55962:e=>{function r(e,r,t,n){if(void 0===e)throw new Error("geometry is required");if(r&&r.constructor!==Object)throw new Error("properties must be an Object");if(t&&4!==t.length)throw new Error("bbox must be an Array of 4 numbers");if(n&&-1===["string","number"].indexOf(typeof n))throw new Error("id must be a number or a string");var o={type:"Feature"};return n&&(o.id=n),t&&(o.bbox=t),o.properties=r||{},o.geometry=e,o}function t(e,t,n,o){if(!e)throw new Error("No coordinates passed");if(void 0===e.length)throw new Error("Coordinates must be an array");if(e.length<2)throw new Error("Coordinates must be at least 2 numbers long");if(!d(e[0])||!d(e[1]))throw new Error("Coordinates must contain numbers");return r({type:"Point",coordinates:e},t,n,o)}function n(e,t,n,o){if(!e)throw new Error("No coordinates passed");for(var i=0;i<e.length;i++){var a=e[i];if(a.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var u=0;u<a[a.length-1].length;u++){if(0===i&&0===u&&!d(a[0][0])||!d(a[0][1]))throw new Error("Coordinates must contain numbers");if(a[a.length-1][u]!==a[0][u])throw new Error("First and last Position are not equivalent.")}}return r({type:"Polygon",coordinates:e},t,n,o)}function o(e,t,n,o){if(!e)throw new Error("No coordinates passed");if(e.length<2)throw new Error("Coordinates must be an array of two or more positions");if(!d(e[0][1])||!d(e[0][1]))throw new Error("Coordinates must contain numbers");return r({type:"LineString",coordinates:e},t,n,o)}function i(e,t,n,o){if(!e)throw new Error("No coordinates passed");return r({type:"MultiLineString",coordinates:e},t,n,o)}function a(e,t,n,o){if(!e)throw new Error("No coordinates passed");return r({type:"MultiPoint",coordinates:e},t,n,o)}function u(e,t,n,o){if(!e)throw new Error("No coordinates passed");return r({type:"MultiPolygon",coordinates:e},t,n,o)}var s={miles:3960,nauticalmiles:3441.145,degrees:57.2957795,radians:1,inches:250905600,yards:6969600,meters:6373e3,metres:6373e3,centimeters:6373e5,centimetres:6373e5,kilometers:6373,kilometres:6373,feet:20908792.65},c={kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,centimetres:1e4,millimeter:1e6,acres:247105e-9,miles:386e-9,yards:1.195990046,feet:10.763910417,inches:1550.003100006};function f(e,r){if(null==e)throw new Error("radians is required");var t=s[r||"kilometers"];if(!t)throw new Error("units is invalid");return e*t}function l(e,r){if(null==e)throw new Error("distance is required");var t=s[r||"kilometers"];if(!t)throw new Error("units is invalid");return e/t}function p(e){if(null==e)throw new Error("radians is required");return e%(2*Math.PI)*180/Math.PI}function d(e){return!isNaN(e)&&null!==e&&!Array.isArray(e)}e.exports={feature:r,geometry:function(e,r,s){if(!e)throw new Error("type is required");if(!r)throw new Error("coordinates is required");if(!Array.isArray(r))throw new Error("coordinates must be an Array");if(s&&4!==s.length)throw new Error("bbox must be an Array of 4 numbers");var c;switch(e){case"Point":c=t(r).geometry;break;case"LineString":c=o(r).geometry;break;case"Polygon":c=n(r).geometry;break;case"MultiPoint":c=a(r).geometry;break;case"MultiLineString":c=i(r).geometry;break;case"MultiPolygon":c=u(r).geometry;break;default:throw new Error(e+" is invalid")}return s&&(c.bbox=s),c},featureCollection:function(e,r,t){if(!e)throw new Error("No features passed");if(!Array.isArray(e))throw new Error("features must be an Array");if(r&&4!==r.length)throw new Error("bbox must be an Array of 4 numbers");if(t&&-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string");var n={type:"FeatureCollection"};return t&&(n.id=t),r&&(n.bbox=r),n.features=e,n},geometryCollection:function(e,t,n,o){if(!e)throw new Error("geometries is required");if(!Array.isArray(e))throw new Error("geometries must be an Array");return r({type:"GeometryCollection",geometries:e},t,n,o)},point:t,multiPoint:a,lineString:o,multiLineString:i,polygon:n,multiPolygon:u,radiansToDistance:f,distanceToRadians:l,distanceToDegrees:function(e,r){return p(l(e,r))},radians2degrees:p,degrees2radians:function(e){if(null==e)throw new Error("degrees is required");return e%360*Math.PI/180},bearingToAngle:function(e){if(null==e)throw new Error("bearing is required");var r=e%360;return r<0&&(r+=360),r},convertDistance:function(e,r,t){if(null==e)throw new Error("distance is required");if(!(e>=0))throw new Error("distance must be a positive number");return f(l(e,r),t||"kilometers")},convertArea:function(e,r,t){if(null==e)throw new Error("area is required");if(!(e>=0))throw new Error("area must be a positive number");var n=c[r||"meters"];if(!n)throw new Error("invalid original units");var o=c[t||"kilometers"];if(!o)throw new Error("invalid final units");return e/n*o},round:function(e,r){if(null==e||isNaN(e))throw new Error("num is required");if(r&&!(r>=0))throw new Error("precision must be a positive number");var t=Math.pow(10,r||0);return Math.round(e*t)/t},isNumber:d}},98200:e=>{function r(e){if(!e)throw new Error("obj is required");var r;if(e.length?r=e:e.coordinates?r=e.coordinates:e.geometry&&e.geometry.coordinates&&(r=e.geometry.coordinates),r)return t(r),r;throw new Error("No valid coordinates")}function t(e){if(e.length>1&&"number"==typeof e[0]&&"number"==typeof e[1])return!0;if(Array.isArray(e[0])&&e[0].length)return t(e[0]);throw new Error("coordinates must only contain numbers")}function n(e){if(!e)throw new Error("geojson is required");if(void 0!==e.geometry)return e.geometry;if(e.coordinates||e.geometries)return e;throw new Error("geojson must be a valid Feature or Geometry Object")}e.exports={geojsonType:function(e,r,t){if(!r||!t)throw new Error("type and name required");if(!e||e.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.type)},collectionOf:function(e,r,t){if(!e)throw new Error("No featureCollection passed");if(!t)throw new Error(".collectionOf() requires a name");if(!e||"FeatureCollection"!==e.type)throw new Error("Invalid input to "+t+", FeatureCollection required");for(var n=0;n<e.features.length;n++){var o=e.features[n];if(!o||"Feature"!==o.type||!o.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!o.geometry||o.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+o.geometry.type)}},featureOf:function(e,r,t){if(!e)throw new Error("No feature passed");if(!t)throw new Error(".featureOf() requires a name");if(!e||"Feature"!==e.type||!e.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!e.geometry||e.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.geometry.type)},getCoord:function(e){if(!e)throw new Error("obj is required");var t=r(e);if(t.length>1&&"number"==typeof t[0]&&"number"==typeof t[1])return t;throw new Error("Coordinate is not a valid Point")},getCoords:r,containsNumber:t,getGeom:n,getGeomType:function(e){if(!e)throw new Error("geojson is required");var r=n(e);if(r)return r.type}}},63245:(e,r,t)=>{"use strict";function n(e,r,t){if(null!==e){var o,i,a,u,s,c,f,l,p,d,h=0,y=0,m=e.type,g="FeatureCollection"===m,v="Feature"===m,w=g?e.features.length:1;for(o=0;o<w;o++)for(f=(d=!!(p=g?e.features[o].geometry:v?e.geometry:e)&&"GeometryCollection"===p.type)?p.geometries.length:1,i=0;i<f;i++){var b=0;if(null!==(c=d?p.geometries[i]:p)){l=c.coordinates;var E=c.type;switch(h=!t||"Polygon"!==E&&"MultiPolygon"!==E?0:1,E){case null:break;case"Point":r(l,y,o,b),y++,b++;break;case"LineString":case"MultiPoint":for(a=0;a<l.length;a++)r(l[a],y,o,b),y++,"MultiPoint"===E&&b++;"LineString"===E&&b++;break;case"Polygon":case"MultiLineString":for(a=0;a<l.length;a++){for(u=0;u<l[a].length-h;u++)r(l[a][u],y,o,b),y++;"MultiLineString"===E&&b++}"Polygon"===E&&b++;break;case"MultiPolygon":for(a=0;a<l.length;a++){for(u=0;u<l[a].length;u++)for(s=0;s<l[a][u].length-h;s++)r(l[a][u][s],y,o,b),y++;b++}break;case"GeometryCollection":for(a=0;a<c.geometries.length;a++)n(c.geometries[a],r,t);break;default:throw new Error("Unknown Geometry Type")}}}}}function o(e,r,t,o){var i=t;return n(e,(function(e,n,o,a){i=0===n&&void 0===t?e:r(i,e,n,o,a)}),o),i}function i(e,r){var t;switch(e.type){case"FeatureCollection":for(t=0;t<e.features.length;t++)r(e.features[t].properties,t);break;case"Feature":r(e.properties,0)}}function a(e,r,t){var n=t;return i(e,(function(e,o){n=0===o&&void 0===t?e:r(n,e,o)})),n}function u(e,r){if("Feature"===e.type)r(e,0);else if("FeatureCollection"===e.type)for(var t=0;t<e.features.length;t++)r(e.features[t],t)}function s(e,r,t){var n=t;return u(e,(function(e,o){n=0===o&&void 0===t?e:r(n,e,o)})),n}function c(e){var r=[];return n(e,(function(e){r.push(e)})),r}function f(e,r){var t,n,o,i,a,u,s,c,f=0,l="FeatureCollection"===e.type,p="Feature"===e.type,d=l?e.features.length:1;for(t=0;t<d;t++){for(u=l?e.features[t].geometry:p?e.geometry:e,c=l?e.features[t].properties:p?e.properties:{},a=(s=!!u&&"GeometryCollection"===u.type)?u.geometries.length:1,o=0;o<a;o++)if(null!==(i=s?u.geometries[o]:u))switch(i.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":r(i,f,c);break;case"GeometryCollection":for(n=0;n<i.geometries.length;n++)r(i.geometries[n],f,c);break;default:throw new Error("Unknown Geometry Type")}else r(null,f,c);f++}}function l(e,r,t){var n=t;return f(e,(function(e,o,i){n=0===o&&void 0===t?e:r(n,e,o,i)})),n}function p(e,r){f(e,(function(e,t,n){var o,i=null===e?null:e.type;switch(i){case null:case"Point":case"LineString":case"Polygon":return void r(m(e,n),t,0)}switch(i){case"MultiPoint":o="Point";break;case"MultiLineString":o="LineString";break;case"MultiPolygon":o="Polygon"}e.coordinates.forEach((function(e,i){r(m({type:o,coordinates:e},n),t,i)}))}))}function d(e,r,t){var n=t;return p(e,(function(e,o,i){n=0===o&&0===i&&void 0===t?e:r(n,e,o,i)})),n}function h(e,r){p(e,(function(e,t,n){var i=0;if(e.geometry){var a=e.geometry.type;"Point"!==a&&"MultiPoint"!==a&&o(e,(function(o,a){var u=g([o,a],e.properties);return r(u,t,n,i),i++,a}))}}))}function y(e,r,t){var n=t,o=!1;return h(e,(function(e,i,a,u){n=!1===o&&void 0===t?e:r(n,e,i,a,u),o=!0})),n}function m(e,r){if(void 0===e)throw new Error("No geometry passed");return{type:"Feature",properties:r||{},geometry:e}}function g(e,r){if(!e)throw new Error("No coordinates passed");if(e.length<2)throw new Error("Coordinates must be an array of two or more positions");return{type:"Feature",properties:r||{},geometry:{type:"LineString",coordinates:e}}}function v(e,r){if(!e)throw new Error("geojson is required");var t=e.geometry?e.geometry.type:e.type;if(!t)throw new Error("invalid geojson");if("FeatureCollection"===t)throw new Error("FeatureCollection is not supported");if("GeometryCollection"===t)throw new Error("GeometryCollection is not supported");var n=e.geometry?e.geometry.coordinates:e.coordinates;if(!n)throw new Error("geojson must contain coordinates");switch(t){case"LineString":return void r(n,0,0);case"Polygon":case"MultiLineString":for(var o=0,i=0;i<n.length;i++)"MultiLineString"===t&&(o=i),r(n[i],i,o);return;case"MultiPolygon":for(var a=0;a<n.length;a++)for(var u=0;u<n[a].length;u++)r(n[a][u],u,a);return;default:throw new Error(t+" geometry not supported")}}function w(e,r,t){var n=t;return v(e,(function(e,o,i){n=0===o&&void 0===t?e:r(n,e,o,i)})),n}t.r(r),t.d(r,{coordEach:()=>n,coordReduce:()=>o,propEach:()=>i,propReduce:()=>a,featureEach:()=>u,featureReduce:()=>s,coordAll:()=>c,geomEach:()=>f,geomReduce:()=>l,flattenEach:()=>p,flattenReduce:()=>d,segmentEach:()=>h,segmentReduce:()=>y,feature:()=>m,lineString:()=>g,lineEach:()=>v,lineReduce:()=>w})},54625:e=>{e.exports=function(e){if(!e||!e.type)return null;var t=r[e.type];return t?"geometry"===t?{type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:e}]}:"feature"===t?{type:"FeatureCollection",features:[e]}:"featurecollection"===t?e:void 0:null};var r={Point:"geometry",MultiPoint:"geometry",LineString:"geometry",MultiLineString:"geometry",Polygon:"geometry",MultiPolygon:"geometry",GeometryCollection:"geometry",Feature:"feature",FeatureCollection:"featurecollection"}},7654:(e,r,t)=>{var n=t(81763);e.exports=function(e){return n(e)&&e!=+e}},19081:(e,r,t)=>{"use strict";e.exports=t(1174)},1852:function(e,r,t){var n;n=function(e){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}return t.m=e,t.c=r,t.p="",t(0)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i=l(t(15)),a=l(t(7)),u=l(t(11)),s=l(t(6)),c=l(t(4)),f=l(t(9));function l(e){return e&&e.__esModule?e:{default:e}}function p(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function d(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}var h={component:a.default.node,query:a.default.string,values:a.default.shape(c.default.matchers),children:a.default.oneOfType([a.default.node,a.default.function]),onChange:a.default.function,onBeforeChange:a.default.function},y=Object.keys(c.default.all),m=Object.keys(h),g=m.concat(y);function v(e,r){var t=o({},e);return r.forEach((function(e){return delete t[e]})),t}var w=function(e){function r(){var e,t,n;p(this,r);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=n=d(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(i))),n.state={matches:!1},n.updateMatches=function(){n._mql.matches!==n.state.matches&&n.setState({matches:n._mql.matches})},d(n,t)}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}(r,e),n(r,[{key:"componentWillMount",value:function(){this.updateQuery(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.updateQuery(e)}},{key:"updateQuery",value:function(e){var r=void 0;if(e.query?this.query=e.query:this.query=(0,f.default)(v(e,m)),!this.query)throw new Error("Invalid or missing MediaQuery!");e.values&&(r=Object.keys(e.values).reduce((function(r,t){return r[(0,s.default)(t)]=e.values[t],r}),{})),this._mql&&this._mql.removeListener(this.updateMatches),this._mql=(0,u.default)(this.query,r),this._mql.addListener(this.updateMatches),this.updateMatches()}},{key:"componentWillUpdate",value:function(e,r){this.props.onBeforeChange&&this.state.matches!==r.matches&&this.props.onBeforeChange(this.state.matches)}},{key:"componentDidUpdate",value:function(e,r){this.props.onChange&&r.matches!==this.state.matches&&this.props.onChange(this.state.matches)}},{key:"componentWillUnmount",value:function(){this._mql.removeListener(this.updateMatches)}},{key:"render",value:function(){if("function"==typeof this.props.children)return this.props.children(this.state.matches);if(!1===this.state.matches)return null;var e=v(this.props,g),r=Object.keys(e).length>0,t=i.default.Children.count(this.props.children);return this.props.component||t>1||"string"==typeof this.props.children||Array.isArray(this.props.children)&&1==t||void 0===this.props.children?i.default.createElement(this.props.component||"div",e,this.props.children):r?i.default.cloneElement(this.props.children,e):t?this.props.children:null}}]),r}(i.default.Component);w.displayName="MediaQuery",w.defaultProps={values:{}},r.default=w,e.exports=r.default},function(e,r){var t,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(e){n=a}}();var s,c=[],f=!1,l=-1;function p(){f&&s&&(f=!1,s.length?c=s.concat(c):l=-1,c.length&&d())}function d(){if(!f){var e=u(p);f=!0;for(var r=c.length;r;){for(s=c,c=[];++l<r;)s&&s[l].run();l=-1,r=c.length}s=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(r){return n.call(this,e)}}}(e)}}function h(e,r){this.fun=e,this.array=r}function y(){}o.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];c.push(new h(e,r)),1!==c.length||f||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,r){"use strict";function t(e){return function(){return e}}var n=function(){};n.thatReturns=t,n.thatReturnsFalse=t(!1),n.thatReturnsTrue=t(!0),n.thatReturnsNull=t(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},function(e,r,t){(function(r){"use strict";var t=function(e){};"production"!==r.env.NODE_ENV&&(t=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=function(e,r,n,o,i,a,u,s){if(t(r),!e){var c;if(void 0===r)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,o,i,a,u,s],l=0;(c=new Error(r.replace(/%s/g,(function(){return f[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}}).call(r,t(1))},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i=(n=t(7))&&n.__esModule?n:{default:n},a=i.default.oneOfType([i.default.string,i.default.number]),u={orientation:i.default.oneOf(["portrait","landscape"]),scan:i.default.oneOf(["progressive","interlace"]),aspectRatio:i.default.string,deviceAspectRatio:i.default.string,height:a,deviceHeight:a,width:a,deviceWidth:a,color:i.default.bool,colorIndex:i.default.bool,monochrome:i.default.bool,resolution:a},s=o({minAspectRatio:i.default.string,maxAspectRatio:i.default.string,minDeviceAspectRatio:i.default.string,maxDeviceAspectRatio:i.default.string,minHeight:a,maxHeight:a,minDeviceHeight:a,maxDeviceHeight:a,minWidth:a,maxWidth:a,minDeviceWidth:a,maxDeviceWidth:a,minColor:i.default.number,maxColor:i.default.number,minColorIndex:i.default.number,maxColorIndex:i.default.number,minMonochrome:i.default.number,maxMonochrome:i.default.number,minResolution:a,maxResolution:a},u),c={all:i.default.bool,grid:i.default.bool,aural:i.default.bool,braille:i.default.bool,handheld:i.default.bool,print:i.default.bool,projection:i.default.bool,screen:i.default.bool,tty:i.default.bool,tv:i.default.bool,embossed:i.default.bool},f=o({},c,s);u.type=Object.keys(c),r.default={all:f,types:c,matchers:u,features:s},e.exports=r.default},function(e,r,t){(function(r){"use strict";var n,o=t(2);"production"!==r.env.NODE_ENV&&(n=function(e){for(var r=arguments.length,t=Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var o=0,i="Warning: "+e.replace(/%s/g,(function(){return t[o++]}));"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(e){}},o=function(e,r){if(void 0===r)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==r.indexOf("Failed Composite propType: ")&&!e){for(var t=arguments.length,o=Array(t>2?t-2:0),i=2;i<t;i++)o[i-2]=arguments[i];n.apply(void 0,[r].concat(o))}}),e.exports=o}).call(r,t(1))},function(e,r){"use strict";var t=/[A-Z]/g,n=/^ms-/,o={};e.exports=function(e){return e in o?o[e]:o[e]=e.replace(t,"-$&").toLowerCase().replace(n,"-ms-")}},function(e,r,t){(function(r){if("production"!==r.env.NODE_ENV){var n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=t(14)((function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}),!0)}else e.exports=t(13)()}).call(r,t(1))},function(e,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){var r=[];return Object.keys(o.default.all).forEach((function(t){var o=e[t];null!=o&&r.push(function(e,r){var t=(0,n.default)(e);return"number"==typeof r&&(r+="px"),!0===r?e:!1===r?"not "+e:"("+t+": "+r+")"}(t,o))})),r.join(" and ")};var n=i(t(6)),o=i(t(4));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=r.default},function(e,r){"use strict";r.match=function(e,r){return u(e).some((function(e){var t=e.inverse,n="all"===e.type||r.type===e.type;if(n&&t||!n&&!t)return!1;var o=e.expressions.every((function(e){var t=e.feature,n=e.modifier,o=e.value,i=r[t];if(!i)return!1;switch(t){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=f(o),i=f(i);break;case"resolution":o=c(o),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=s(o),i=s(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!t||!o&&t}))},r.parse=u;var t=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function u(e){return e.split(",").map((function(e){var r=(e=e.trim()).match(t),i=r[1],a=r[2],u=r[3]||"",s={};return s.inverse=!!i&&"not"===i.toLowerCase(),s.type=a?a.toLowerCase():"all",u=u.match(/\([^\)]+\)/g)||[],s.expressions=u.map((function(e){var r=e.match(n),t=r[1].toLowerCase().match(o);return{modifier:t[1],feature:t[2],value:r[2]}})),s}))}function s(e){var r,t=Number(e);return t||(t=(r=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/r[2]),t}function c(e){var r=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return r/2.54;case"dppx":return 96*r;default:return r}}function f(e){var r=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*r;case"cm":return 96*r/2.54;case"mm":return 96*r/2.54/10;case"in":return 96*r;case"pt":return 72*r;case"pc":return 72*r/12;default:return r}}},function(e,r,t){"use strict";var n=t(10).match,o="undefined"!=typeof window?window.matchMedia:null;function i(e,r){var t=this;if(o){var i=o.call(window,e);this.matches=i.matches,this.media=i.media,i.addListener((function(e){t.matches=e.matches,t.media=e.media}))}else this.matches=n(e,r),this.media=e;this.addListener=function(e){i&&i.addListener(e)},this.removeListener=function(e){i&&i.removeListener(e)}}e.exports=function(e,r){return new i(e,r)}},function(e,r,t){(function(r){"use strict";if("production"!==r.env.NODE_ENV)var n=t(3),o=t(5),i=t(8),a={};e.exports=function(e,t,u,s,c){if("production"!==r.env.NODE_ENV)for(var f in e)if(e.hasOwnProperty(f)){var l;try{n("function"==typeof e[f],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",s||"React class",u,f),l=e[f](t,f,s,u,null,i)}catch(e){l=e}if(o(!l||l instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",s||"React class",u,f,typeof l),l instanceof Error&&!(l.message in a)){a[l.message]=!0;var p=c?c():"";o(!1,"Failed %s type: %s%s",u,l.message,null!=p?p:"")}}}}).call(r,t(1))},function(e,r,t){"use strict";var n=t(2),o=t(3);e.exports=function(){function e(){o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function r(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r};return t.checkPropTypes=n,t.PropTypes=t,t}},function(e,r,t){(function(r){"use strict";var n=t(2),o=t(3),i=t(5),a=t(8),u=t(12);e.exports=function(e,t){var s="function"==typeof Symbol&&Symbol.iterator,c="<<anonymous>>",f={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:p(n.thatReturnsNull),arrayOf:function(e){return p((function(r,t,n,o,i){if("function"!=typeof e)return new l("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var u=r[t];if(!Array.isArray(u))return new l("Invalid "+o+" `"+i+"` of type `"+y(u)+"` supplied to `"+n+"`, expected an array.");for(var s=0;s<u.length;s++){var c=e(u,s,n,o,i+"["+s+"]",a);if(c instanceof Error)return c}return null}))},element:p((function(r,t,n,o,i){var a=r[t];return e(a)?null:new l("Invalid "+o+" `"+i+"` of type `"+y(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),instanceOf:function(e){return p((function(r,t,n,o,i){if(!(r[t]instanceof e)){var a=e.name||c;return new l("Invalid "+o+" `"+i+"` of type `"+((u=r[t]).constructor&&u.constructor.name?u.constructor.name:c)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var u;return null}))},node:p((function(e,r,t,n,o){return h(e[r])?null:new l("Invalid "+n+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(r,t,n,o,i){if("function"!=typeof e)return new l("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var u=r[t],s=y(u);if("object"!==s)return new l("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+n+"`, expected an object.");for(var c in u)if(u.hasOwnProperty(c)){var f=e(u,c,n,o,i+"."+c,a);if(f instanceof Error)return f}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(r,t,n,o,i){for(var a=r[t],u=0;u<e.length;u++)if(s=a,c=e[u],s===c?0!==s||1/s==1/c:s!=s&&c!=c)return null;var s,c;return new l("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+n+"`, expected one of "+JSON.stringify(e)+".")})):("production"!==r.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOf, expected an instance of array."),n.thatReturnsNull)},oneOfType:function(e){return Array.isArray(e)?p((function(r,t,n,o,i){for(var u=0;u<e.length;u++)if(null==(0,e[u])(r,t,n,o,i,a))return null;return new l("Invalid "+o+" `"+i+"` supplied to `"+n+"`.")})):("production"!==r.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),n.thatReturnsNull)},shape:function(e){return p((function(r,t,n,o,i){var u=r[t],s=y(u);if("object"!==s)return new l("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var f=e[c];if(f){var p=f(u,c,n,o,i+"."+c,a);if(p)return p}}return null}))}};function l(e){this.message=e,this.stack=""}function p(e){if("production"!==r.env.NODE_ENV)var n={},u=0;function s(s,f,p,d,h,y,m){if(d=d||c,y=y||p,m!==a)if(t)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==r.env.NODE_ENV&&"undefined"!=typeof console){var g=d+":"+p;!n[g]&&u<3&&(i(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",y,d),n[g]=!0,u++)}return null==f[p]?s?null===f[p]?new l("The "+h+" `"+y+"` is marked as required in `"+d+"`, but its value is `null`."):new l("The "+h+" `"+y+"` is marked as required in `"+d+"`, but its value is `undefined`."):null:e(f,p,d,h,y)}var f=s.bind(null,!1);return f.isRequired=s.bind(null,!0),f}function d(e){return p((function(r,t,n,o,i,a){var u=r[t];if(y(u)!==e){var s=function(e){var r=y(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}(u);return new l("Invalid "+o+" `"+i+"` of type `"+s+"` supplied to `"+n+"`, expected `"+e+"`.")}return null}))}function h(r){switch(typeof r){case"number":case"string":case"undefined":return!0;case"boolean":return!r;case"object":if(Array.isArray(r))return r.every(h);if(null===r||e(r))return!0;var t=function(e){var r=e&&(s&&e[s]||e["@@iterator"]);if("function"==typeof r)return r}(r);if(!t)return!1;var n,o=t.call(r);if(t!==r.entries){for(;!(n=o.next()).done;)if(!h(n.value))return!1}else for(;!(n=o.next()).done;){var i=n.value;if(i&&!h(i[1]))return!1}return!0;default:return!1}}function y(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||"Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol}(r,e)?"symbol":r}return l.prototype=Error.prototype,f.checkPropTypes=u,f.PropTypes=f,f}}).call(r,t(1))},function(r,t){r.exports=e}])},e.exports=n(t(67294))},55745:(e,r,t)=>{var n=t(3465),o=n.featureCollection,i=t(98098),a=t(54625);e.exports=function(e,r,t){var u=n.distanceToDegrees(r,t),s=a(e),c=a(o(s.features.map((function(e){return function(e,r){var t=(new i.io.GeoJSONReader).read(e.geometry).buffer(r);return{type:"Feature",geometry:t=(new i.io.GeoJSONWriter).write(t),properties:{}}}(e,u)}))));return c.features.length>1?c:1===c.features.length?c.features[0]:void 0}},65442:(e,r,t)=>{var n=t(98098);e.exports=function(e,r){var t,o;t="Feature"===e.type?e.geometry:e,o="Feature"===r.type?r.geometry:r;var i=new n.io.GeoJSONReader,a=i.read(JSON.stringify(t)),u=i.read(JSON.stringify(o)),s=a.intersection(u);if(!s.isEmpty())return{type:"Feature",properties:{},geometry:(new n.io.GeoJSONWriter).write(s)}}}}]);