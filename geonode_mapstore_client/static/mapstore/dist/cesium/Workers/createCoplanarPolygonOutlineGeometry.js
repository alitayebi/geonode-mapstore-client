define(["./arrayRemoveDuplicates-b1a32b72","./Transforms-0becfc64","./Matrix2-860854d4","./RuntimeError-1349fdaf","./ComponentDatatype-8f55628c","./CoplanarPolygonGeometryLibrary-d76103b7","./when-4bbc8319","./GeometryAttribute-4590b388","./GeometryAttributes-7827a6c2","./GeometryInstance-ace7be43","./GeometryPipeline-8721156a","./IndexDatatype-1d853600","./PolygonGeometryLibrary-70493175","./combine-e9466e32","./WebGLConstants-508b9636","./OrientedBoundingBox-07e6723c","./EllipsoidTangentPlane-407b38a6","./AxisAlignedBoundingBox-ebc959c9","./IntersectionTests-1d677ce2","./Plane-0e4269ac","./AttributeCompression-5f6be9e6","./EncodedCartesian3-6e74751e","./ArcType-fc72c06c","./EllipsoidRhumbLine-d4d43630","./PolygonPipeline-bfbb6016"],(function(e,t,n,o,r,i,a,c,y,l,s,p,u,d,m,b,g,f,h,P,G,L,T,E,A){"use strict";function C(e){const t=e.length,n=new Float64Array(3*t),o=p.IndexDatatype.createTypedArray(t,2*t);let i=0,a=0;for(let r=0;r<t;r++){const c=e[r];n[i++]=c.x,n[i++]=c.y,n[i++]=c.z,o[a++]=r,o[a++]=(r+1)%t}const l=new y.GeometryAttributes({position:new c.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n})});return new c.Geometry({attributes:l,indices:o,primitiveType:c.PrimitiveType.LINES})}function H(e){const t=(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).polygonHierarchy;this._polygonHierarchy=t,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=u.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+1}H.fromPositions=function(e){return new H({polygonHierarchy:{positions:(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).positions}})},H.pack=function(e,t,n){return n=a.defaultValue(n,0),t[n=u.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,n)]=e.packedLength,t};const k={polygonHierarchy:{}};return H.unpack=function(e,t,n){t=a.defaultValue(t,0);const o=u.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=o.startingIndex,delete o.startingIndex;const r=e[t];return a.defined(n)||(n=new H(k)),n._polygonHierarchy=o,n.packedLength=r,n},H.createGeometry=function(o){const r=o._polygonHierarchy;let a=r.positions;if(a=e.arrayRemoveDuplicates(a,n.Cartesian3.equalsEpsilon,!0),a.length<3)return;if(!i.CoplanarPolygonGeometryLibrary.validOutline(a))return;const y=u.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(r,!1);if(0===y.length)return;const p=[];for(let e=0;e<y.length;e++){const t=new l.GeometryInstance({geometry:C(y[e])});p.push(t)}const d=s.GeometryPipeline.combineInstances(p)[0],m=t.BoundingSphere.fromPoints(r.positions);return new c.Geometry({attributes:d.attributes,indices:d.indices,primitiveType:d.primitiveType,boundingSphere:m})},function(e,t){return a.defined(t)&&(e=H.unpack(e,t)),e._ellipsoid=n.Ellipsoid.clone(e._ellipsoid),H.createGeometry(e)}}));