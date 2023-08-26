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
exports.id = "pages/[meetupId]";
exports.ids = ["pages/[meetupId]"];
exports.modules = {

/***/ "./components/meetups/MeetupItem.module.css":
/*!**************************************************!*\
  !*** ./components/meetups/MeetupItem.module.css ***!
  \**************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"item\": \"MeetupItem_item__pvgsv\",\n\t\"image\": \"MeetupItem_image__0jYm_\",\n\t\"content\": \"MeetupItem_content__fvTRB\",\n\t\"actions\": \"MeetupItem_actions__IeeH4\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBJdGVtLm1vZHVsZS5jc3M/ZTVmOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpdGVtXCI6IFwiTWVldHVwSXRlbV9pdGVtX19wdmdzdlwiLFxuXHRcImltYWdlXCI6IFwiTWVldHVwSXRlbV9pbWFnZV9fMGpZbV9cIixcblx0XCJjb250ZW50XCI6IFwiTWVldHVwSXRlbV9jb250ZW50X19mdlRSQlwiLFxuXHRcImFjdGlvbnNcIjogXCJNZWV0dXBJdGVtX2FjdGlvbnNfX0llZUg0XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupItem.module.css\n");

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"Card_card__73YTa\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL3VpL0NhcmQubW9kdWxlLmNzcz81NjMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJDYXJkX2NhcmRfXzczWVRhXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/Card.module.css\n");

/***/ }),

/***/ "./components/meetups/MeetupItem.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupItem.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/Card */ \"./components/ui/Card.js\");\n/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetupItem.module.css */ \"./components/meetups/MeetupItem.module.css\");\n/* harmony import */ var _MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction MeetupItem(props) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const showDetailsHandler = ()=>{\n        router.push(\"/\" + props.id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().item),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: props.image,\n                        alt: props.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\indus\\\\Downloads\\\\nextJsdeep\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupItem.js\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\indus\\\\Downloads\\\\nextJsdeep\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupItem.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: props.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\indus\\\\Downloads\\\\nextJsdeep\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupItem.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                            children: props.address\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\indus\\\\Downloads\\\\nextJsdeep\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupItem.js\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\indus\\\\Downloads\\\\nextJsdeep\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupItem.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_MeetupItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().actions),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: showDetailsHandler,\n                        children: \"Show Details\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\indus\\\\Downloads\\\\nextJsdeep\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupItem.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\indus\\\\Downloads\\\\nextJsdeep\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupItem.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\indus\\\\Downloads\\\\nextJsdeep\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupItem.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\indus\\\\Downloads\\\\nextJsdeep\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\meetups\\\\MeetupItem.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetupItem);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQ2dCO0FBQ047QUFDeEMsU0FBU0csVUFBVSxDQUFDQyxLQUFLLEVBQUU7SUFDekIsTUFBTUMsTUFBTSxHQUFHSCxzREFBUyxFQUFFO0lBQzFCLE1BQU1JLGtCQUFrQixHQUFHLElBQU07UUFDL0JELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBR0gsS0FBSyxDQUFDSSxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QscUJBQ0UsOERBQUNDLElBQUU7UUFBQ0MsU0FBUyxFQUFFVCxvRUFBWTtrQkFDekIsNEVBQUNELGdEQUFJOzs4QkFDSCw4REFBQ1ksS0FBRztvQkFBQ0YsU0FBUyxFQUFFVCxxRUFBYTs4QkFDM0IsNEVBQUNhLEtBQUc7d0JBQUNDLEdBQUcsRUFBRVgsS0FBSyxDQUFDUyxLQUFLO3dCQUFFRyxHQUFHLEVBQUVaLEtBQUssQ0FBQ2EsS0FBSzs7Ozs7NEJBQUk7Ozs7O3dCQUN2Qzs4QkFDTiw4REFBQ0wsS0FBRztvQkFBQ0YsU0FBUyxFQUFFVCx1RUFBZTs7c0NBQzdCLDhEQUFDa0IsSUFBRTtzQ0FBRWYsS0FBSyxDQUFDYSxLQUFLOzs7OztnQ0FBTTtzQ0FDdEIsOERBQUNHLFNBQU87c0NBQUVoQixLQUFLLENBQUNnQixPQUFPOzs7OztnQ0FBVzs7Ozs7O3dCQUM5Qjs4QkFDTiw4REFBQ1IsS0FBRztvQkFBQ0YsU0FBUyxFQUFFVCx1RUFBZTs4QkFDN0IsNEVBQUNxQixRQUFNO3dCQUFDQyxPQUFPLEVBQUVqQixrQkFBa0I7a0NBQUUsY0FBWTs7Ozs7NEJBQVM7Ozs7O3dCQUN0RDs7Ozs7O2dCQUNEOzs7OztZQUNKLENBQ0w7QUFDSixDQUFDO0FBRUQsaUVBQWVILFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwSXRlbS5qcz8wZDM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCIuLi91aS9DYXJkXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9NZWV0dXBJdGVtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuZnVuY3Rpb24gTWVldHVwSXRlbShwcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgc2hvd0RldGFpbHNIYW5kbGVyID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKFwiL1wiICsgcHJvcHMuaWQpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0+XG4gICAgICA8Q2FyZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gYWx0PXtwcm9wcy50aXRsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgIDxoMz57cHJvcHMudGl0bGV9PC9oMz5cbiAgICAgICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Nob3dEZXRhaWxzSGFuZGxlcn0+U2hvdyBEZXRhaWxzPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DYXJkPlxuICAgIDwvbGk+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cEl0ZW07XG4iXSwibmFtZXMiOlsiQ2FyZCIsImNsYXNzZXMiLCJ1c2VSb3V0ZXIiLCJNZWV0dXBJdGVtIiwicHJvcHMiLCJyb3V0ZXIiLCJzaG93RGV0YWlsc0hhbmRsZXIiLCJwdXNoIiwiaWQiLCJsaSIsImNsYXNzTmFtZSIsIml0ZW0iLCJkaXYiLCJpbWFnZSIsImltZyIsInNyYyIsImFsdCIsInRpdGxlIiwiY29udGVudCIsImgzIiwiYWRkcmVzcyIsImFjdGlvbnMiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/meetups/MeetupItem.js\n");

/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ \"./components/ui/Card.module.css\");\n/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Card(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),\n        children: props.children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\indus\\\\Downloads\\\\nextJsdeep\\\\06-onwards-to-a-bigger-project-starting-project\\\\components\\\\ui\\\\Card.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VpL0NhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUF3QztBQUV4QyxTQUFTQyxJQUFJLENBQUNDLEtBQUssRUFBRTtJQUNuQixxQkFBTyw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVKLDhEQUFZO2tCQUFHRSxLQUFLLENBQUNJLFFBQVE7Ozs7O1lBQU8sQ0FBQztBQUM5RCxDQUFDO0FBRUQsaUVBQWVMLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9jb21wb25lbnRzL3VpL0NhcmQuanM/ZDBkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL0NhcmQubW9kdWxlLmNzcyc7XG5cbmZ1bmN0aW9uIENhcmQocHJvcHMpIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwibmFtZXMiOlsiY2xhc3NlcyIsIkNhcmQiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImNhcmQiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/Card.js\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupItem */ \"./components/meetups/MeetupItem.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst MeetupDetails = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            props: props\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\indus\\\\Downloads\\\\nextJsdeep\\\\06-onwards-to-a-bigger-project-starting-project\\\\pages\\\\[meetupId]\\\\index.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\indus\\\\Downloads\\\\nextJsdeep\\\\06-onwards-to-a-bigger-project-starting-project\\\\pages\\\\[meetupId]\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\nasync function getStaticPaths() {\n    const client = mongodb__WEBPACK_IMPORTED_MODULE_3__.MongoClient.connect(\"mongodb+srv://maniksachdev99:manik123@cluster0.u5lcrfh.mongodb.net/meetups?retryWrites=true&w=majority\");\n    const db = (await client).db();\n    const meetupsCollection = db.collection(\"meetups\");\n    const meetups = await meetupsCollection.find({}, {\n        _id: 1\n    }).toArray();\n    (await client).close();\n    return {\n        fallback: false,\n        paths: meetups.map((meetup)=>({\n                params: {\n                    meetupId: meetup._id.toString()\n                }\n            }))\n    };\n}\nasync function getStaticProps(context) {\n    const meetupId = context.params.meetupId;\n    return {\n        props: {\n            id: meetupId,\n            title: \"A First Meetup\",\n            image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1280px-London_Skyline_%28125508655%29.jpeg\",\n            address: \"Some Address\",\n            description: \"this is a 1st meetup\"\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetupDetails);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNxQjtBQUN2QjtBQUN0QyxNQUFNSSxhQUFhLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO0lBQy9CLHFCQUNFLDhEQUFDSiwyQ0FBUTtrQkFDUCw0RUFBQ0Msc0VBQVU7WUFBQ0csS0FBSyxFQUFFQSxLQUFLOzs7OztxQkFBSTs7Ozs7aUJBQ25CLENBQ1g7QUFDSixDQUFDO0FBQ00sZUFBZUMsY0FBYyxHQUFHO0lBQ3JDLE1BQU1DLE1BQU0sR0FBR0osd0RBQW1CLENBQ2hDLHdHQUF3RyxDQUN6RztJQUNELE1BQU1NLEVBQUUsR0FBRyxDQUFDLE1BQU1GLE1BQU0sRUFBRUUsRUFBRSxFQUFFO0lBQzlCLE1BQU1DLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDbEQsTUFBTUMsT0FBTyxHQUFHLE1BQU1GLGlCQUFpQixDQUFDRyxJQUFJLENBQUMsRUFBRSxFQUFFO1FBQUVDLEdBQUcsRUFBRSxDQUFDO0tBQUUsQ0FBQyxDQUFDQyxPQUFPLEVBQUU7SUFDckUsT0FBTVIsTUFBTSxFQUFFUyxLQUFLLEVBQUUsQ0FBQztJQUN2QixPQUFPO1FBQ0xDLFFBQVEsRUFBRSxLQUFLO1FBQ2ZDLEtBQUssRUFBRU4sT0FBTyxDQUFDTyxHQUFHLENBQUMsQ0FBQ0MsTUFBTSxHQUFNO2dCQUM5QkMsTUFBTSxFQUFFO29CQUFFQyxRQUFRLEVBQUVGLE1BQU0sQ0FBQ04sR0FBRyxDQUFDUyxRQUFRLEVBQUU7aUJBQUU7YUFDNUMsRUFBRTtLQUNKLENBQUM7QUFDSixDQUFDO0FBRU0sZUFBZUMsY0FBYyxDQUFDQyxPQUFPLEVBQUU7SUFDNUMsTUFBTUgsUUFBUSxHQUFHRyxPQUFPLENBQUNKLE1BQU0sQ0FBQ0MsUUFBUTtJQUN4QyxPQUFPO1FBQ0xqQixLQUFLLEVBQUU7WUFDTHFCLEVBQUUsRUFBRUosUUFBUTtZQUNaSyxLQUFLLEVBQUUsZ0JBQWdCO1lBQ3ZCQyxLQUFLLEVBQ0gsMElBQTBJO1lBQzVJQyxPQUFPLEVBQUUsY0FBYztZQUN2QkMsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQztLQUNGLENBQUM7QUFDSixDQUFDO0FBRUQsaUVBQWUxQixhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcz84ZmYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWVldHVwSXRlbSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cEl0ZW1cIjtcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5jb25zdCBNZWV0dXBEZXRhaWxzID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPE1lZXR1cEl0ZW0gcHJvcHM9e3Byb3BzfSAvPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgY2xpZW50ID0gTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9tYW5pa3NhY2hkZXY5OTptYW5pazEyM0BjbHVzdGVyMC51NWxjcmZoLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gKGF3YWl0IGNsaWVudCkuZGIoKTtcclxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9LCB7IF9pZDogMSB9KS50b0FycmF5KCk7XHJcbiAgKGF3YWl0IGNsaWVudCkuY2xvc2UoKTtcclxuICByZXR1cm4ge1xyXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgcGF0aHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XHJcbiAgICAgIHBhcmFtczogeyBtZWV0dXBJZDogbWVldHVwLl9pZC50b1N0cmluZygpIH0sXHJcbiAgICB9KSksXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpZDogbWVldHVwSWQsXHJcbiAgICAgIHRpdGxlOiBcIkEgRmlyc3QgTWVldHVwXCIsXHJcbiAgICAgIGltYWdlOlxyXG4gICAgICAgIFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi82LzY3L0xvbmRvbl9Ta3lsaW5lXyUyODEyNTUwODY1NSUyOS5qcGVnLzEyODBweC1Mb25kb25fU2t5bGluZV8lMjgxMjU1MDg2NTUlMjkuanBlZ1wiLFxyXG4gICAgICBhZGRyZXNzOiBcIlNvbWUgQWRkcmVzc1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJ0aGlzIGlzIGEgMXN0IG1lZXR1cFwiLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJGcmFnbWVudCIsIk1lZXR1cEl0ZW0iLCJNb25nb0NsaWVudCIsIk1lZXR1cERldGFpbHMiLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwibWVldHVwcyIsImZpbmQiLCJfaWQiLCJ0b0FycmF5IiwiY2xvc2UiLCJmYWxsYmFjayIsInBhdGhzIiwibWFwIiwibWVldHVwIiwicGFyYW1zIiwibWVldHVwSWQiLCJ0b1N0cmluZyIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[meetupId]/index.js"));
module.exports = __webpack_exports__;

})();