"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./context/auth.js":
/*!*************************!*\
  !*** ./context/auth.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContext\": () => (/* binding */ AuthContext),\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst AuthProvider = ({ children  })=>{\n    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: null,\n        token: \"\"\n    });\n    // config axios\n    if (process.server) {\n        (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = process.env.API;\n        (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = `Bearer ${auth?.token}`;\n    } else {\n        (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = \"http://localhost:8080/api/v1\";\n        (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = `Bearer ${auth?.token}`;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (localStorage.getItem(\"auth\")) {\n            setAuth(JSON.parse(localStorage.getItem(\"auth\")));\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: [\n            auth,\n            setAuth\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\mern\\\\CMS_MERN\\\\client\\\\context\\\\auth.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2F1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUEyRDtBQUNqQztBQUNBO0FBRTFCLE1BQU1LLFdBQVcsaUJBQUdILG9EQUFhLEVBQUU7QUFFbkMsTUFBTUksWUFBWSxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDckMsTUFBTSxLQUFDQyxJQUFJLE1BQUVDLE9BQU8sTUFBSVQsK0NBQVEsQ0FBQztRQUMvQlUsSUFBSSxFQUFFLElBQUk7UUFDVkMsS0FBSyxFQUFFLEVBQUU7S0FDVixDQUFDO0lBRUYsZUFBZTtJQUNmLElBQUlDLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFO1FBQ2xCVCwrREFBc0IsR0FBR1EsT0FBTyxDQUFDSSxHQUFHLENBQUNDLEdBQUcsQ0FBQztRQUN6Q2Isb0ZBQThDLEdBQUcsQ0FBQyxPQUFPLEVBQUVJLElBQUksRUFBRUcsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUMxRSxNQUFNO1FBQ0xQLCtEQUFzQixHQUFHUSw4QkFBMkIsQ0FBQztRQUNyRFIsb0ZBQThDLEdBQUcsQ0FBQyxPQUFPLEVBQUVJLElBQUksRUFBRUcsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUMxRTtJQUVEVixnREFBUyxDQUFDLElBQU07UUFDZCxJQUFJb0IsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaENiLE9BQU8sQ0FBQ2MsSUFBSSxDQUFDQyxLQUFLLENBQUNILFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuRDtLQUNGLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ2pCLFdBQVcsQ0FBQ29CLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQUNsQixJQUFJO1lBQUVDLE9BQU87U0FBQztrQkFDekNGLFFBQVE7Ozs7O2lCQUNZLENBQ3ZCO0NBQ0g7QUFFb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L2F1dGguanM/ODE0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhvaXMgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKHtcbiAgICB1c2VyOiBudWxsLFxuICAgIHRva2VuOiBcIlwiLFxuICB9KTtcblxuICAvLyBjb25maWcgYXhpb3NcbiAgaWYgKHByb2Nlc3Muc2VydmVyKSB7XG4gICAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IHByb2Nlc3MuZW52LkFQSTtcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIkF1dGhvcml6YXRpb25cIl0gPSBgQmVhcmVyICR7YXV0aD8udG9rZW59YDtcbiAgfSBlbHNlIHtcbiAgICBheGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJO1xuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiQXV0aG9yaXphdGlvblwiXSA9IGBCZWFyZXIgJHthdXRoPy50b2tlbn1gO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpKSB7XG4gICAgICBzZXRBdXRoKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoXCIpKSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1thdXRoLCBzZXRBdXRoXX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IEF1dGhDb250ZXh0LCBBdXRoUHJvdmlkZXIgfTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZUNvbnRleHQiLCJheG9pcyIsImF4aW9zIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImF1dGgiLCJzZXRBdXRoIiwidXNlciIsInRva2VuIiwicHJvY2VzcyIsInNlcnZlciIsImRlZmF1bHRzIiwiYmFzZVVSTCIsImVudiIsIkFQSSIsImhlYWRlcnMiLCJjb21tb24iLCJORVhUX1BVQkxJQ19BUEkiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/auth.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/auth */ \"./context/auth.js\");\n\n\n\nfunction Home() {\n    // context\n    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_auth__WEBPACK_IMPORTED_MODULE_2__.AuthContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Home\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\mern\\\\CMS_MERN\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\mern\\\\CMS_MERN\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(auth, null, 4)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\mern\\\\CMS_MERN\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\LS\\\\Desktop\\\\mern\\\\CMS_MERN\\\\client\\\\pages\\\\index.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFtQztBQUNXO0FBRTlDLFNBQVNFLElBQUksR0FBRztJQUNkLFVBQVU7SUFDVixNQUFNLEtBQUNDLElBQUksTUFBRUMsT0FBTyxNQUFJSixpREFBVSxDQUFDQyxzREFBVyxDQUFDO0lBRS9DLHFCQUNFLDhEQUFDSSxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxNQUFJOzs7OztvQkFBSzswQkFFYiw4REFBQ0MsSUFBRTs7OztvQkFBRzswQkFDTiw4REFBQ0MsS0FBRzswQkFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNQLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDOzs7OztvQkFBTzs7Ozs7O1lBQ3RDLENBQ047Q0FDSDtBQUVELGlFQUFlRCxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvYXV0aFwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICAvLyBjb250ZXh0XG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5Ib21lPC9oMT5cblxuICAgICAgPGJyIC8+XG4gICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShhdXRoLCBudWxsLCA0KX08L3ByZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJIb21lIiwiYXV0aCIsInNldEF1dGgiLCJkaXYiLCJoMSIsImJyIiwicHJlIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();