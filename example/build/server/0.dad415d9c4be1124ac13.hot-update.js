require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/server/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("babel-runtime/core-js/json/stringify");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__("path");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_reducer__ = __webpack_require__("./src/common/reducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_app__ = __webpack_require__("./src/common/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_qs__ = __webpack_require__("qs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_qs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_fs__ = __webpack_require__("fs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_fs__);












var app = __WEBPACK_IMPORTED_MODULE_2_express___default()();
var port = 3000;

//Serve static files
app.use(__WEBPACK_IMPORTED_MODULE_2_express___default.a.static('build/client'));

// This is fired every time the server side receives a request
app.use(handleRender);

// We are going to fill these out in the sections to follow
function renderFullPage(html, preloadedState) {
  console.log(__WEBPACK_IMPORTED_MODULE_10_fs___default.a.readdirSync(__WEBPACK_IMPORTED_MODULE_1_path___default.a.join(__dirname, 'build/client/assets.json')));
  var assetMap = JSON.parse(__WEBPACK_IMPORTED_MODULE_10_fs___default.a.readdirSync('/'));
  console.log(assetMap);
  return '\n      <!doctype html>\n      <html>\n        <head>\n          <title>Redux Universal Example</title>\n        </head>\n        <body>\n          <div id="root">' + html + '</div>\n          <script>\n            // WARNING: See the following for security issues around embedding JSON in HTML:\n            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n            window.__PRELOADED_STATE__ = ' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(preloadedState).replace(/</g, '\\u003c') + '\n          </script>\n          \n          <script src="index.c5e1556b2b1f746a97e2.js"></script>\n        </body>\n      </html>\n      ';
}

function handleRender(req, res) {
  // Read the counter from the request, if provided
  var params = __WEBPACK_IMPORTED_MODULE_9_qs___default.a.parse(req.query);
  var num = parseInt(params.counter, 10) || 0;

  // Compile an initial state
  var preloadedState = num;

  // Create a new Redux store instance
  var store = Object(__WEBPACK_IMPORTED_MODULE_4_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_6__common_reducer__["a" /* default */], preloadedState);

  // Render the component to a string
  var html = Object(__WEBPACK_IMPORTED_MODULE_8_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_5_react_redux__["Provider"],
    { store: store },
    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__common_app__["a" /* default */], null)
  ));

  // Grab the initial state from our Redux store
  var finalState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, finalState));
}

app.listen(port);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/"))

/***/ }),

/***/ "path":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

};
//# sourceMappingURL=index.76c40f1af12e417d3a1e.js.map