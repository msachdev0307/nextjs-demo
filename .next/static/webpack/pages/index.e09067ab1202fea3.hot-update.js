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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\nvar _this = undefined;\n\n\n\nvar DUMMY_DATA = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1280px-London_Skyline_%28125508655%29.jpeg\",\n        address: \"Some Address\",\n        description: \"this is a 1st meetup\"\n    },\n    {\n        id: \"m2\",\n        title: \"A Second Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1280px-London_Skyline_%28125508655%29.jpeg\",\n        address: \"Some Address\",\n        description: \"this is a 2nd meetup\"\n    },\n    {\n        id: \"m3\",\n        title: \"A Third Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1280px-London_Skyline_%28125508655%29.jpeg\",\n        address: \"Some Address\",\n        description: \"this is a 3rd meetup\"\n    },\n    {\n        id: \"m4\",\n        title: \"A Fourth Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1280px-London_Skyline_%28125508655%29.jpeg\",\n        address: \"Some Address\",\n        description: \"this is a 4th meetup\"\n    }, \n];\nvar HomePage = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\indus\\\\Downloads\\\\nextJsdeep\\\\06-onwards-to-a-bigger-project-starting-project\\\\pages\\\\index.js\",\n        lineNumber: 39,\n        columnNumber: 10\n    }, _this);\n};\n_c = HomePage;\nvar __N_SSG = true;\n// export async function getServerSideProps() {\n//   return {\n//     props: {\n//       meetups: DUMMY_DATA,\n//     },\n//   };\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDa0I7QUFFMUQsSUFBTUcsVUFBVSxHQUFHO0lBQ2pCO1FBQ0VDLEVBQUUsRUFBRSxJQUFJO1FBQ1JDLEtBQUssRUFBRSxnQkFBZ0I7UUFDdkJDLEtBQUssRUFDSCwwSUFBMEk7UUFDNUlDLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCQyxXQUFXLEVBQUUsc0JBQXNCO0tBQ3BDO0lBQ0Q7UUFDRUosRUFBRSxFQUFFLElBQUk7UUFDUkMsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QkMsS0FBSyxFQUNILDBJQUEwSTtRQUM1SUMsT0FBTyxFQUFFLGNBQWM7UUFDdkJDLFdBQVcsRUFBRSxzQkFBc0I7S0FDcEM7SUFDRDtRQUNFSixFQUFFLEVBQUUsSUFBSTtRQUNSQyxLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCQyxLQUFLLEVBQ0gsMElBQTBJO1FBQzVJQyxPQUFPLEVBQUUsY0FBYztRQUN2QkMsV0FBVyxFQUFFLHNCQUFzQjtLQUNwQztJQUNEO1FBQ0VKLEVBQUUsRUFBRSxJQUFJO1FBQ1JDLEtBQUssRUFBRSxpQkFBaUI7UUFDeEJDLEtBQUssRUFDSCwwSUFBMEk7UUFDNUlDLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCQyxXQUFXLEVBQUUsc0JBQXNCO0tBQ3BDO0NBQ0Y7QUFDRCxJQUFNQyxRQUFRLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO0lBQzFCLHFCQUFPLDhEQUFDUixzRUFBVTtRQUFDUyxPQUFPLEVBQUVELEtBQUssQ0FBQ0MsT0FBTzs7Ozs7YUFBZSxDQUFDO0FBQzNELENBQUM7QUFGS0YsS0FBQUEsUUFBUTs7QUF1QmQsK0NBQStDO0FBQy9DLGFBQWE7QUFDYixlQUFlO0FBQ2YsNkJBQTZCO0FBQzdCLFNBQVM7QUFDVCxPQUFPO0FBRVAsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5jb25zdCBEVU1NWV9EQVRBID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIm0xXCIsXHJcbiAgICB0aXRsZTogXCJBIEZpcnN0IE1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi82LzY3L0xvbmRvbl9Ta3lsaW5lXyUyODEyNTUwODY1NSUyOS5qcGVnLzEyODBweC1Mb25kb25fU2t5bGluZV8lMjgxMjU1MDg2NTUlMjkuanBlZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIEFkZHJlc3NcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcInRoaXMgaXMgYSAxc3QgbWVldHVwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJtMlwiLFxyXG4gICAgdGl0bGU6IFwiQSBTZWNvbmQgTWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzYvNjcvTG9uZG9uX1NreWxpbmVfJTI4MTI1NTA4NjU1JTI5LmpwZWcvMTI4MHB4LUxvbmRvbl9Ta3lsaW5lXyUyODEyNTUwODY1NSUyOS5qcGVnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgQWRkcmVzc1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwidGhpcyBpcyBhIDJuZCBtZWV0dXBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0zXCIsXHJcbiAgICB0aXRsZTogXCJBIFRoaXJkIE1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi82LzY3L0xvbmRvbl9Ta3lsaW5lXyUyODEyNTUwODY1NSUyOS5qcGVnLzEyODBweC1Mb25kb25fU2t5bGluZV8lMjgxMjU1MDg2NTUlMjkuanBlZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIEFkZHJlc3NcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcInRoaXMgaXMgYSAzcmQgbWVldHVwXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJtNFwiLFxyXG4gICAgdGl0bGU6IFwiQSBGb3VydGggTWVldHVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iLzYvNjcvTG9uZG9uX1NreWxpbmVfJTI4MTI1NTA4NjU1JTI5LmpwZWcvMTI4MHB4LUxvbmRvbl9Ta3lsaW5lXyUyODEyNTUwODY1NSUyOS5qcGVnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgQWRkcmVzc1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwidGhpcyBpcyBhIDR0aCBtZWV0dXBcIixcclxuICB9LFxyXG5dO1xyXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfT48L01lZXR1cExpc3Q+O1xyXG59O1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgY2xpZW50ID0gTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9tYW5pa3NhY2hkZXY5OTptYW5pazEyM0BjbHVzdGVyMC51NWxjcmZoLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gKGF3YWl0IGNsaWVudCkuZGIoKTtcclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgICB0aXRsZTogaXRlbS50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiBpdGVtLmFkZHJlc3MsXHJcbiAgICAgICAgaW1hZ2U6IGl0ZW0uaW1hZ2UsXHJcbiAgICAgICAgaWQ6IGl0ZW0uX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgIH0pKSxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxMCxcclxuICB9O1xyXG59XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBtZWV0dXBzOiBEVU1NWV9EQVRBLFxyXG4vLyAgICAgfSxcclxuLy8gICB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTWVldHVwTGlzdCIsIkRVTU1ZX0RBVEEiLCJpZCIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});