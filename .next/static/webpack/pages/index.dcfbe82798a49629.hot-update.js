"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Web; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var crt_terminal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crt-terminal */ \"./node_modules/crt-terminal/dist/esm/index.js\");\n/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout/Layout */ \"./components/Layout/Layout.tsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.scss */ \"./pages/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Parser_GTONCapitalProjects_GTONCapitalRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Parser/GTONCapitalProjects/GTONCapitalRouter */ \"./pages/Parser/GTONCapitalProjects/GTONCapitalRouter.tsx\");\n/* harmony import */ var _Messages_Messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Messages/Messages */ \"./pages/Messages/Messages.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Projects1;\n(function(Projects) {\n    Projects[Projects[\"gton\"] = 0] = \"gton\";\n    Projects[Projects[\"candyshop\"] = 1] = \"candyshop\";\n    Projects[Projects[\"ogswap\"] = 2] = \"ogswap\";\n})(Projects1 || (Projects1 = {\n}));\nvar CurrentDirectory = Projects1.gton;\nfunction Web() {\n    _s();\n    var eventQueue = (0,crt_terminal__WEBPACK_IMPORTED_MODULE_2__.useEventQueue)();\n    var _handlers = eventQueue.handlers, lock = _handlers.lock, loading = _handlers.loading, clear = _handlers.clear, print = _handlers.print, focus = _handlers.focus;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\eureq\\\\Desktop\\\\GTOMTERMINAL\\\\web\\\\pages\\\\index.tsx\",\n            lineNumber: 31,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"main\", {\n            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().mainContainer),\n            __source: {\n                fileName: \"C:\\\\Users\\\\eureq\\\\Desktop\\\\GTOMTERMINAL\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(crt_terminal__WEBPACK_IMPORTED_MODULE_2__.Terminal, {\n                queue: eventQueue,\n                onCommand: function(command) {\n                    if (command.split(' ')[0] == \"cd\") {\n                        switch(command){\n                            case Projects1.gton.toString():\n                                CurrentDirectory = Projects1.gton;\n                                break;\n                            case Projects1.candyshop.toString():\n                                CurrentDirectory = Projects1.candyshop;\n                                break;\n                            case Projects1.ogswap.toString():\n                                CurrentDirectory = Projects1.ogswap;\n                                break;\n                        }\n                    }\n                    switch(CurrentDirectory){\n                        case Projects1.gton:\n                            (0,_Parser_GTONCapitalProjects_GTONCapitalRouter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(eventQueue, command);\n                            break;\n                        case Projects1.candyshop:\n                            break;\n                        case Projects1.ogswap:\n                            break;\n                        default:\n                            print([\n                                (0,crt_terminal__WEBPACK_IMPORTED_MODULE_2__.textLine)({\n                                    words: [\n                                        (0,crt_terminal__WEBPACK_IMPORTED_MODULE_2__.textWord)({\n                                            characters: \"Error: please refresh page\"\n                                        })\n                                    ]\n                                })\n                            ]);\n                            break;\n                    }\n                },\n                banner: [\n                    (0,crt_terminal__WEBPACK_IMPORTED_MODULE_2__.textLine)({\n                        words: [\n                            (0,crt_terminal__WEBPACK_IMPORTED_MODULE_2__.textWord)({\n                                characters: _Messages_Messages__WEBPACK_IMPORTED_MODULE_5__[\"default\"].banner\n                            })\n                        ]\n                    }), \n                ],\n                __source: {\n                    fileName: \"C:\\\\Users\\\\eureq\\\\Desktop\\\\GTOMTERMINAL\\\\web\\\\pages\\\\index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                },\n                __self: this\n            })\n        })\n    }));\n};\n_s(Web, \"Q+wrAUdMl2/ApYts9ZVcQBekC6c=\", false, function() {\n    return [\n        crt_terminal__WEBPACK_IMPORTED_MODULE_2__.useEventQueue\n    ];\n});\n_c = Web;\nvar _c;\n$RefreshReg$(_c, \"Web\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBUZXJtaW5hbCxcclxuICB1c2VFdmVudFF1ZXVlLFxyXG4gIHRleHRMaW5lLFxyXG4gIGNvbW1hbmRMaW5lLFxyXG4gIHRleHRXb3JkLFxyXG4gIGFuY2hvcldvcmQsXHJcbiAgYnV0dG9uV29yZCxcclxuICBjb21tYW5kV29yZCxcclxufSBmcm9tICdjcnQtdGVybWluYWwnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0L0xheW91dCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnO1xyXG5cclxuaW1wb3J0IEdUT05QYXJzZXIgZnJvbSAnLi9QYXJzZXIvR1RPTkNhcGl0YWxQcm9qZWN0cy9HVE9OQ2FwaXRhbFJvdXRlcic7XHJcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuL01lc3NhZ2VzL01lc3NhZ2VzJztcclxuXHJcbmVudW0gUHJvamVjdHNcclxue1xyXG4gIFwiZ3RvblwiLCBcImNhbmR5c2hvcFwiLCBcIm9nc3dhcFwiXHJcbn1cclxuXHJcbnZhciBDdXJyZW50RGlyZWN0b3J5ID0gUHJvamVjdHMuZ3RvbjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlYigpIHtcclxuXHJcbiAgY29uc3QgZXZlbnRRdWV1ZSA9IHVzZUV2ZW50UXVldWUoKTtcclxuICBjb25zdCB7IGxvY2ssIGxvYWRpbmcsIGNsZWFyLCBwcmludCwgZm9jdXMgfSA9IGV2ZW50UXVldWUuaGFuZGxlcnM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgPFRlcm1pbmFsXHJcbiAgICAgICAgICBxdWV1ZT17ZXZlbnRRdWV1ZX1cclxuICAgICAgICAgIG9uQ29tbWFuZD17KGNvbW1hbmQpID0+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGNvbW1hbmQuc3BsaXQoJyAnKVswXSA9PSBcImNkXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzd2l0Y2goY29tbWFuZClcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFByb2plY3RzLmd0b24udG9TdHJpbmcoKTpcclxuICAgICAgICAgICAgICAgICAgQ3VycmVudERpcmVjdG9yeSA9IFByb2plY3RzLmd0b247XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBQcm9qZWN0cy5jYW5keXNob3AudG9TdHJpbmcoKTpcclxuICAgICAgICAgICAgICAgICAgQ3VycmVudERpcmVjdG9yeSA9IFByb2plY3RzLmNhbmR5c2hvcFxyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgUHJvamVjdHMub2dzd2FwLnRvU3RyaW5nKCk6XHJcbiAgICAgICAgICAgICAgICAgIEN1cnJlbnREaXJlY3RvcnkgPSBQcm9qZWN0cy5vZ3N3YXBcclxuICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2goQ3VycmVudERpcmVjdG9yeSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNhc2UgUHJvamVjdHMuZ3RvbjpcclxuICAgICAgICAgICAgICAgIEdUT05QYXJzZXIoZXZlbnRRdWV1ZSwgY29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBjYXNlIFByb2plY3RzLmNhbmR5c2hvcDpcclxuICAgICAgICAgICAgICAgIC8vIGltcG9ydCBDYW5keVBhcnNlciBmcm9tICcuL1BhcnNlci9DYW5keVNob3AvQ2FuZHlTaG9wUGFyc2VyJ1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgY2FzZSBQcm9qZWN0cy5vZ3N3YXA6XHJcbiAgICAgICAgICAgICAgICAvLyBpbXBvcnQgT0dTd2FwUGFyc2VyIGZyb20gJy4vUGFyc2VyL09HU3dhcC9PR1N3YXBQYXJzZXInXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcHJpbnQoW3RleHRMaW5lKHt3b3JkczpbdGV4dFdvcmQoeyBjaGFyYWN0ZXJzOiBcIkVycm9yOiBwbGVhc2UgcmVmcmVzaCBwYWdlXCIgfSldfSldKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgIGJhbm5lcj17W1xyXG4gICAgICAgICAgICB0ZXh0TGluZSh7IHdvcmRzOiBbdGV4dFdvcmQoeyBjaGFyYWN0ZXJzOiBtZXNzYWdlcy5iYW5uZXIgfSldIH0pLFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRlcm1pbmFsIiwidXNlRXZlbnRRdWV1ZSIsInRleHRMaW5lIiwidGV4dFdvcmQiLCJMYXlvdXQiLCJjbGFzc2VzIiwiR1RPTlBhcnNlciIsIm1lc3NhZ2VzIiwiQ3VycmVudERpcmVjdG9yeSIsIlByb2plY3RzIiwiZ3RvbiIsIldlYiIsImV2ZW50UXVldWUiLCJoYW5kbGVycyIsImxvY2siLCJsb2FkaW5nIiwiY2xlYXIiLCJwcmludCIsImZvY3VzIiwibWFpbiIsImNsYXNzTmFtZSIsIm1haW5Db250YWluZXIiLCJxdWV1ZSIsIm9uQ29tbWFuZCIsImNvbW1hbmQiLCJzcGxpdCIsInRvU3RyaW5nIiwiY2FuZHlzaG9wIiwib2dzd2FwIiwid29yZHMiLCJjaGFyYWN0ZXJzIiwiYmFubmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});