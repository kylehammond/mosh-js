(()=>{"use strict";function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=new WeakMap;new(function(){function t(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),n.set(this,e)}var r,a;return r=t,(a=[{key:"draw",value:function(){console.log("Circle with radius "+n.get(this))}}])&&e(r.prototype,a),Object.defineProperty(r,"prototype",{writable:!1}),t}())(10).draw(),console.log("Changed")})();