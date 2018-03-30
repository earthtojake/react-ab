require("source-map-support").install();
!function(e){function n(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var r={};n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/",n(n.s=6)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("babel-runtime/core-js/object/get-prototype-of")},function(e,n){e.exports=require("babel-runtime/helpers/classCallCheck")},function(e,n){e.exports=require("babel-runtime/helpers/createClass")},function(e,n){e.exports=require("babel-runtime/helpers/possibleConstructorReturn")},function(e,n){e.exports=require("babel-runtime/helpers/inherits")},function(e,n,r){r(7),r(8),e.exports=r(12)},function(e,n){e.exports=require("raf/polyfill")},function(e,n,r){"use strict";function t(e,n,r){e[n]||Object[i](e,n,{writable:!0,configurable:!0,value:r})}if(r(9),r(10),r(11),global._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");global._babelPolyfill=!0;var i="defineProperty";t(String.prototype,"padLeft","".padStart),t(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(e){[][e]&&t(Array,e,Function.call.bind([][e]))})},function(e,n){e.exports=require("core-js/shim")},function(e,n){e.exports=require("regenerator-runtime/runtime")},function(e,n){e.exports=require("core-js/fn/regexp/escape")},function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){function n(e,n){console.log(E.a.readdirSync("/"));var r=JSON.parse(E.a.readdirSync("/"));return console.log(r),'\n      <!doctype html>\n      <html>\n        <head>\n          <title>Redux Universal Example</title>\n        </head>\n        <body>\n          <div id="root">'+e+"</div>\n          <script>\n            // WARNING: See the following for security issues around embedding JSON in HTML:\n            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n            window.__PRELOADED_STATE__ = "+o()(n).replace(/</g,"\\u003c")+'\n          <\/script>\n          \n          <script src="index.c5e1556b2b1f746a97e2.js"><\/script>\n        </body>\n      </html>\n      '}function t(e,r){var t=x.a.parse(e.query),i=parseInt(t.counter,10)||0,o=Object(f.createStore)(m.a,i),c=Object(h.renderToString)(p.a.createElement(d.Provider,{store:o},p.a.createElement(b.a,null))),u=o.getState();r.send(n(c,u))}var i=r(13),o=r.n(i),c=r(14),u=r.n(c),s=r(15),a=r.n(s),l=r(0),p=r.n(l),f=r(16),d=(r.n(f),r(17)),m=(r.n(d),r(18)),b=r(19),h=r(21),y=(r.n(h),r(22)),x=r.n(y),v=r(23),E=r.n(v),q=a()();q.use(a.a.static(u.a.join(e,"../client"))),q.use(t),q.listen(3e3)}.call(n,"/")},function(e,n){e.exports=require("babel-runtime/core-js/json/stringify")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("redux")},function(e,n){e.exports=require("react-redux")},function(e,n,r){"use strict";n.a=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;switch(arguments[1].type){case"INCREMENT":return e+1;case"DECREMENT":return e-1;default:return e}}},function(e,n,r){"use strict";var t=r(1),i=r.n(t),o=r(2),c=r.n(o),u=r(3),s=r.n(u),a=r(4),l=r.n(a),p=r(5),f=r.n(p),d=r(0),m=r.n(d),b=r(20),h=r.n(b),y=function(e){function n(e){c()(this,n);var r=l()(this,(n.__proto__||i()(n)).call(this,e));return r.incrementAsync=r.incrementAsync.bind(r),r.incrementIfOdd=r.incrementIfOdd.bind(r),r}return f()(n,e),s()(n,[{key:"incrementIfOdd",value:function(){0!=this.props.value%2&&this.props.onIncrement()}},{key:"incrementAsync",value:function(){setTimeout(this.props.onIncrement,1e3)}},{key:"render",value:function(){var e=this.props,n=e.value,r=e.onIncrement,t=e.onDecrement;return m.a.createElement("p",null,"Clicked: ",n," times"," ",m.a.createElement("button",{onClick:r},"+")," ",m.a.createElement("button",{onClick:t},"-")," ",m.a.createElement("button",{onClick:this.incrementIfOdd},"Increment if odd")," ",m.a.createElement("button",{onClick:this.incrementAsync},"Increment async"))}}]),n}(d.Component);y.propTypes={value:h.a.number.isRequired,onIncrement:h.a.func.isRequired,onDecrement:h.a.func.isRequired};var x=y;r.d(n,"a",function(){return v});var v=function(e){function n(){return c()(this,n),l()(this,(n.__proto__||i()(n)).apply(this,arguments))}return f()(n,e),s()(n,[{key:"render",value:function(){return m.a.createElement(x,{value:this.props.num||0,onIncrement:function(){return dispatch({type:"INCREMENT"})},onDecrement:function(){return dispatch({type:"DECREMENT"})}})}}]),n}(d.Component)},function(e,n){e.exports=require("prop-types")},function(e,n){e.exports=require("react-dom/server")},function(e,n){e.exports=require("qs")},function(e,n){e.exports=require("fs")}]);
//# sourceMappingURL=index.js.map