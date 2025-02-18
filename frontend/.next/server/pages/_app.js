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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/firebase.ts":
/*!****************************!*\
  !*** ./config/firebase.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   googleProvider: () => (/* binding */ googleProvider)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCW1J7vqYyhSCaB4egJlmwFj0b1Efyd75I\",\n    authDomain: \"sda-client-portal.firebaseapp.com\",\n    projectId: \"sda-client-portal\",\n    storageBucket: \"sda-client-portal.firebasestorage.app\",\n    messagingSenderId: \"608424811993\",\n    appId: \"1:608424811993:web:da7b03d4fc620cb65a4dc8\"\n};\n// Initialize Firebase only if it hasn't been initialized\nconst app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)()[0];\n// Initialize Firebase services\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst googleProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\n// Configure Google provider\ngoogleProvider.setCustomParameters({\n    prompt: \"select_account\",\n    hd: \"sandlerdigitaladvisory.com\"\n});\nconsole.log(\"Firebase initialized successfully\");\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZmlyZWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdFO0FBQ0Q7QUFDTDtBQUVsRSx3Q0FBd0M7QUFDeEMsTUFBTUssaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztBQUNUO0FBRUEseURBQXlEO0FBQ3pELE1BQU1DLE1BQW1CLENBQUNYLHFEQUFPQSxHQUFHWSxNQUFNLEdBQUdiLDJEQUFhQSxDQUFDSyxrQkFBa0JKLHFEQUFPQSxFQUFFLENBQUMsRUFBRTtBQUV6RiwrQkFBK0I7QUFDL0IsTUFBTWEsT0FBYVosc0RBQU9BLENBQUNVO0FBQzNCLE1BQU1HLEtBQWdCWCxnRUFBWUEsQ0FBQ1E7QUFDbkMsTUFBTUksaUJBQWlCLElBQUliLDZEQUFrQkE7QUFFN0MsNEJBQTRCO0FBQzVCYSxlQUFlQyxtQkFBbUIsQ0FBQztJQUNqQ0MsUUFBUTtJQUNSQyxJQUFJO0FBQ047QUFFQUMsUUFBUUMsR0FBRyxDQUFDO0FBRXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29uZmlnL2ZpcmViYXNlLnRzP2M5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCwgZ2V0QXBwcywgdHlwZSBGaXJlYmFzZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBnZXRBdXRoLCB0eXBlIEF1dGgsIEdvb2dsZUF1dGhQcm92aWRlciB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCB0eXBlIEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5cbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5Q1cxSjd2cVl5aFNDYUI0ZWdKbG13RmowYjFFZnlkNzVJXCIsXG4gIGF1dGhEb21haW46IFwic2RhLWNsaWVudC1wb3J0YWwuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJzZGEtY2xpZW50LXBvcnRhbFwiLFxuICBzdG9yYWdlQnVja2V0OiBcInNkYS1jbGllbnQtcG9ydGFsLmZpcmViYXNlc3RvcmFnZS5hcHBcIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjA4NDI0ODExOTkzXCIsXG4gIGFwcElkOiBcIjE6NjA4NDI0ODExOTkzOndlYjpkYTdiMDNkNGZjNjIwY2I2NWE0ZGM4XCJcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2Ugb25seSBpZiBpdCBoYXNuJ3QgYmVlbiBpbml0aWFsaXplZFxuY29uc3QgYXBwOiBGaXJlYmFzZUFwcCA9ICFnZXRBcHBzKCkubGVuZ3RoID8gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiBnZXRBcHBzKClbMF07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2Ugc2VydmljZXNcbmNvbnN0IGF1dGg6IEF1dGggPSBnZXRBdXRoKGFwcCk7XG5jb25zdCBkYjogRmlyZXN0b3JlID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG5jb25zdCBnb29nbGVQcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcblxuLy8gQ29uZmlndXJlIEdvb2dsZSBwcm92aWRlclxuZ29vZ2xlUHJvdmlkZXIuc2V0Q3VzdG9tUGFyYW1ldGVycyh7XG4gIHByb21wdDogJ3NlbGVjdF9hY2NvdW50JyxcbiAgaGQ6ICdzYW5kbGVyZGlnaXRhbGFkdmlzb3J5LmNvbSdcbn0pO1xuXG5jb25zb2xlLmxvZygnRmlyZWJhc2UgaW5pdGlhbGl6ZWQgc3VjY2Vzc2Z1bGx5Jyk7XG5cbmV4cG9ydCB7IGF1dGgsIGRiLCBnb29nbGVQcm92aWRlciB9OyAiXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFwcHMiLCJnZXRBdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZ2V0RmlyZXN0b3JlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJhcHAiLCJsZW5ndGgiLCJhdXRoIiwiZGIiLCJnb29nbGVQcm92aWRlciIsInNldEN1c3RvbVBhcmFtZXRlcnMiLCJwcm9tcHQiLCJoZCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/firebase.ts\n");

/***/ }),

/***/ "./contexts/AuthContext.js":
/*!*********************************!*\
  !*** ./contexts/AuthContext.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.ts\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__]);\n([_config_firebase__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    async function login(email, password) {\n        const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_2__.auth, email, password);\n        // Check if client document exists, if not create it\n        const clientRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_config_firebase__WEBPACK_IMPORTED_MODULE_2__.db, \"clients\", userCredential.user.uid);\n        const clientSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(clientRef);\n        if (!clientSnap.exists()) {\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(clientRef, {\n                email: email,\n                projects: [\n                    {\n                        name: \"Initial Project\",\n                        status: \"Planning\",\n                        progress: 0\n                    }\n                ],\n                documents: [],\n                meetings: []\n            });\n        }\n        return userCredential;\n    }\n    function logout() {\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_config_firebase__WEBPACK_IMPORTED_MODULE_2__.auth);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(_config_firebase__WEBPACK_IMPORTED_MODULE_2__.auth, (user)=>{\n            setUser(user);\n            setLoading(false);\n        });\n        return unsubscribe;\n    }, []);\n    const value = {\n        user,\n        login,\n        logout\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: !loading && children\n    }, void 0, false, {\n        fileName: \"/Users/adamsandler/projects/sandlerdigitaladvisory-website-main/frontend/contexts/AuthContext.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BdXRoQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQThFO0FBQ2hDO0FBS3ZCO0FBQ2tDO0FBRXpELE1BQU1hLDRCQUFjWixvREFBYUE7QUFFMUIsU0FBU2E7SUFDZCxPQUFPWCxpREFBVUEsQ0FBQ1U7QUFDcEI7QUFFTyxTQUFTRSxhQUFhLEVBQUVDLFFBQVEsRUFBRTtJQUN2QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2lCLFNBQVNDLFdBQVcsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRXZDLGVBQWVtQixNQUFNQyxLQUFLLEVBQUVDLFFBQVE7UUFDbEMsTUFBTUMsaUJBQWlCLE1BQU1qQix5RUFBMEJBLENBQUNGLGtEQUFJQSxFQUFFaUIsT0FBT0M7UUFFckUsb0RBQW9EO1FBQ3BELE1BQU1FLFlBQVlmLHVEQUFHQSxDQUFDSixnREFBRUEsRUFBRSxXQUFXa0IsZUFBZVAsSUFBSSxDQUFDUyxHQUFHO1FBQzVELE1BQU1DLGFBQWEsTUFBTWYsMERBQU1BLENBQUNhO1FBRWhDLElBQUksQ0FBQ0UsV0FBV0MsTUFBTSxJQUFJO1lBQ3hCLE1BQU1qQiwwREFBTUEsQ0FBQ2MsV0FBVztnQkFDdEJILE9BQU9BO2dCQUNQTyxVQUFVO29CQUNSO3dCQUNFQyxNQUFNO3dCQUNOQyxRQUFRO3dCQUNSQyxVQUFVO29CQUNaO2lCQUNEO2dCQUNEQyxXQUFXLEVBQUU7Z0JBQ2JDLFVBQVUsRUFBRTtZQUNkO1FBQ0Y7UUFFQSxPQUFPVjtJQUNUO0lBRUEsU0FBU1c7UUFDUCxPQUFPM0Isc0RBQU9BLENBQUNILGtEQUFJQTtJQUNyQjtJQUVBRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1nQyxjQUFjM0IsaUVBQWtCQSxDQUFDSixrREFBSUEsRUFBRSxDQUFDWTtZQUM1Q0MsUUFBUUQ7WUFDUkcsV0FBVztRQUNiO1FBRUEsT0FBT2dCO0lBQ1QsR0FBRyxFQUFFO0lBRUwsTUFBTUMsUUFBUTtRQUNacEI7UUFDQUk7UUFDQWM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDdEIsWUFBWXlCLFFBQVE7UUFBQ0QsT0FBT0E7a0JBQzFCLENBQUNsQixXQUFXSDs7Ozs7O0FBR25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29udGV4dHMvQXV0aENvbnRleHQuanM/NTljZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSAnLi4vY29uZmlnL2ZpcmViYXNlJztcbmltcG9ydCB7IFxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgc2lnbk91dCxcbiAgb25BdXRoU3RhdGVDaGFuZ2VkXG59IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0IHsgZG9jLCBzZXREb2MsIGdldERvYyB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gbG9naW4oZW1haWwsIHBhc3N3b3JkKSB7XG4gICAgY29uc3QgdXNlckNyZWRlbnRpYWwgPSBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpO1xuICAgIFxuICAgIC8vIENoZWNrIGlmIGNsaWVudCBkb2N1bWVudCBleGlzdHMsIGlmIG5vdCBjcmVhdGUgaXRcbiAgICBjb25zdCBjbGllbnRSZWYgPSBkb2MoZGIsICdjbGllbnRzJywgdXNlckNyZWRlbnRpYWwudXNlci51aWQpO1xuICAgIGNvbnN0IGNsaWVudFNuYXAgPSBhd2FpdCBnZXREb2MoY2xpZW50UmVmKTtcbiAgICBcbiAgICBpZiAoIWNsaWVudFNuYXAuZXhpc3RzKCkpIHtcbiAgICAgIGF3YWl0IHNldERvYyhjbGllbnRSZWYsIHtcbiAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICBwcm9qZWN0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiSW5pdGlhbCBQcm9qZWN0XCIsXG4gICAgICAgICAgICBzdGF0dXM6IFwiUGxhbm5pbmdcIixcbiAgICAgICAgICAgIHByb2dyZXNzOiAwXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBkb2N1bWVudHM6IFtdLFxuICAgICAgICBtZWV0aW5nczogW11cbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdXNlckNyZWRlbnRpYWw7XG4gIH1cblxuICBmdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgcmV0dXJuIHNpZ25PdXQoYXV0aCk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XG4gICAgICBzZXRVc2VyKHVzZXIpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdW5zdWJzY3JpYmU7XG4gIH0sIFtdKTtcblxuICBjb25zdCB2YWx1ZSA9IHtcbiAgICB1c2VyLFxuICAgIGxvZ2luLFxuICAgIGxvZ291dFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XG4gICAgICB7IWxvYWRpbmcgJiYgY2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn0gIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsImF1dGgiLCJkYiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwic2lnbk91dCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImRvYyIsInNldERvYyIsImdldERvYyIsIkF1dGhDb250ZXh0IiwidXNlQXV0aCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXJDcmVkZW50aWFsIiwiY2xpZW50UmVmIiwidWlkIiwiY2xpZW50U25hcCIsImV4aXN0cyIsInByb2plY3RzIiwibmFtZSIsInN0YXR1cyIsInByb2dyZXNzIiwiZG9jdW1lbnRzIiwibWVldGluZ3MiLCJsb2dvdXQiLCJ1bnN1YnNjcmliZSIsInZhbHVlIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/AuthContext.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__, _config_firebase__WEBPACK_IMPORTED_MODULE_4__]);\n([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__, _config_firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n// Initialize Firebase last to ensure all dependencies are loaded\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        type: \"image/svg+xml\",\n                        href: \"/favicon.svg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adamsandler/projects/sandlerdigitaladvisory-website-main/frontend/pages/_app.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adamsandler/projects/sandlerdigitaladvisory-website-main/frontend/pages/_app.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adamsandler/projects/sandlerdigitaladvisory-website-main/frontend/pages/_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/adamsandler/projects/sandlerdigitaladvisory-website-main/frontend/pages/_app.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adamsandler/projects/sandlerdigitaladvisory-website-main/frontend/pages/_app.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQzZCO0FBQzBCO0FBQ3hCO0FBRS9CLGlFQUFpRTtBQUNyQztBQUViLFNBQVNFLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDNUQscUJBQ0UsOERBQUNILCtEQUFZQTs7MEJBQ1gsOERBQUNELGtEQUFJQTs7a0NBQ0gsOERBQUNLO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLO3dCQUFnQkMsTUFBSzs7Ozs7O2tDQUMzQyw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFFaEMsOERBQUNSO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvQXV0aENvbnRleHQnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlIGxhc3QgdG8gZW5zdXJlIGFsbCBkZXBlbmRlbmNpZXMgYXJlIGxvYWRlZFxuaW1wb3J0ICcuLi9jb25maWcvZmlyZWJhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgaHJlZj1cIi9mYXZpY29uLnN2Z1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKTtcbn0gIl0sIm5hbWVzIjpbIkhlYWQiLCJBdXRoUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsaW5rIiwicmVsIiwidHlwZSIsImhyZWYiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();