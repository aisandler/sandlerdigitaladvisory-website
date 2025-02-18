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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   googleProvider: () => (/* binding */ googleProvider),\n/* harmony export */   storage: () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCW1J7vqYyhSCaB4egJlmwFj0b1Efyd75I\",\n    authDomain: \"sda-client-portal.firebaseapp.com\",\n    projectId: \"sda-client-portal\",\n    storageBucket: \"sda-client-portal.appspot.com\",\n    messagingSenderId: \"608424811993\",\n    appId: \"1:608424811993:web:da7b03d4fc620cb65a4dc8\"\n};\n// Initialize Firebase only if it hasn't been initialized yet\nconst app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)()[0];\n// Initialize Firebase services\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);\n// Initialize Google Auth Provider\nconst googleProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\ngoogleProvider.setCustomParameters({\n    hd: \"sandlerdigitaladvisory.com\"\n});\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZmlyZWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDTTtBQUNWO0FBQ0o7QUFFOUMsTUFBTU0saUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztBQUNUO0FBRUEsNkRBQTZEO0FBQzdELE1BQU1DLE1BQU0sQ0FBQ1oscURBQU9BLEdBQUdhLE1BQU0sR0FBR2QsMkRBQWFBLENBQUNNLGtCQUFrQkwscURBQU9BLEVBQUUsQ0FBQyxFQUFFO0FBRTVFLCtCQUErQjtBQUMvQixNQUFNYyxPQUFPYixzREFBT0EsQ0FBQ1c7QUFDckIsTUFBTUcsS0FBS1osZ0VBQVlBLENBQUNTO0FBQ3hCLE1BQU1JLFVBQVVaLDREQUFVQSxDQUFDUTtBQUUzQixrQ0FBa0M7QUFDbEMsTUFBTUssaUJBQWlCLElBQUlmLDZEQUFrQkE7QUFDN0NlLGVBQWVDLG1CQUFtQixDQUFDO0lBQ2pDQyxJQUFJO0FBQ047QUFFNkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvZmlyZWJhc2UudHM/YzkyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwLCBnZXRBcHBzIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcbmltcG9ydCB7IGdldEF1dGgsIEdvb2dsZUF1dGhQcm92aWRlciB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tICdmaXJlYmFzZS9zdG9yYWdlJztcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lDVzFKN3ZxWXloU0NhQjRlZ0psbXdGajBiMUVmeWQ3NUlcIixcbiAgYXV0aERvbWFpbjogXCJzZGEtY2xpZW50LXBvcnRhbC5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcInNkYS1jbGllbnQtcG9ydGFsXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwic2RhLWNsaWVudC1wb3J0YWwuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjA4NDI0ODExOTkzXCIsXG4gIGFwcElkOiBcIjE6NjA4NDI0ODExOTkzOndlYjpkYTdiMDNkNGZjNjIwY2I2NWE0ZGM4XCJcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2Ugb25seSBpZiBpdCBoYXNuJ3QgYmVlbiBpbml0aWFsaXplZCB5ZXRcbmNvbnN0IGFwcCA9ICFnZXRBcHBzKCkubGVuZ3RoID8gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiBnZXRBcHBzKClbMF07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2Ugc2VydmljZXNcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoYXBwKTtcblxuLy8gSW5pdGlhbGl6ZSBHb29nbGUgQXV0aCBQcm92aWRlclxuY29uc3QgZ29vZ2xlUHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG5nb29nbGVQcm92aWRlci5zZXRDdXN0b21QYXJhbWV0ZXJzKHtcbiAgaGQ6IFwic2FuZGxlcmRpZ2l0YWxhZHZpc29yeS5jb21cIlxufSk7XG5cbmV4cG9ydCB7IGF1dGgsIGRiLCBzdG9yYWdlLCBnb29nbGVQcm92aWRlciB9OyAiXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEFwcHMiLCJnZXRBdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZ2V0RmlyZXN0b3JlIiwiZ2V0U3RvcmFnZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwibGVuZ3RoIiwiYXV0aCIsImRiIiwic3RvcmFnZSIsImdvb2dsZVByb3ZpZGVyIiwic2V0Q3VzdG9tUGFyYW1ldGVycyIsImhkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/firebase.ts\n");

/***/ }),

/***/ "./contexts/AuthContext.tsx":
/*!**********************************!*\
  !*** ./contexts/AuthContext.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/firebase */ \"./config/firebase.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, _config_firebase__WEBPACK_IMPORTED_MODULE_5__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_3__, firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, _config_firebase__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isAdminViewingAsClient, setAdminViewingAsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"Setting up auth state listener\");\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(_config_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, async (firebaseUser)=>{\n            try {\n                if (firebaseUser) {\n                    console.log(\"User authenticated:\", firebaseUser.uid);\n                    const userDoc = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_config_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"users\", firebaseUser.uid));\n                    if (!userDoc.exists()) {\n                        console.log(\"User document not found, signing out\");\n                        await signOut();\n                        setUser(null);\n                        router.push(\"/login\");\n                        return;\n                    }\n                    const idToken = await firebaseUser.getIdToken(true);\n                    await fetch(\"/api/auth/session\", {\n                        method: \"POST\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        credentials: \"include\",\n                        body: JSON.stringify({\n                            idToken\n                        })\n                    });\n                    setUser(firebaseUser);\n                } else {\n                    console.log(\"No user authenticated\");\n                    setUser(null);\n                }\n            } catch (error) {\n                console.error(\"Auth state change error:\", error);\n                setUser(null);\n            } finally{\n                setLoading(false);\n            }\n        });\n        return ()=>{\n            console.log(\"Cleaning up auth state listener\");\n            unsubscribe();\n        };\n    }, [\n        router\n    ]);\n    const signIn = async (email, password)=>{\n        console.log(\"SignIn function called with:\", email);\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_config_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, email, password);\n    };\n    const signInWithGoogle = async ()=>{\n        console.log(\"SignInWithGoogle function called\");\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_config_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, _config_firebase__WEBPACK_IMPORTED_MODULE_5__.googleProvider);\n    };\n    const signOut = async ()=>{\n        console.log(\"SignOut function called\");\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_config_firebase__WEBPACK_IMPORTED_MODULE_5__.auth);\n        await fetch(\"/api/auth/logout\", {\n            method: \"POST\",\n            credentials: \"include\"\n        });\n    };\n    const value = {\n        user,\n        loading,\n        signIn,\n        signInWithGoogle,\n        signOut,\n        isAdminViewingAsClient,\n        setAdminViewingAsClient\n    };\n    console.log(\"AuthProvider rendering with value:\", {\n        hasUser: !!user,\n        loading,\n        hasSignIn: !!signIn\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/adamsandler/projects/sandlerdigitaladvisory-website-main/frontend/contexts/AuthContext.tsx\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, this);\n}\nfunction useAuth() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (!context) {\n        throw new Error(\"useAuth must be used within an AuthProvider\");\n    }\n    console.log(\"useAuth hook called, returning context with signIn:\", !!context.signIn);\n    return context;\n}\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVFULE1BQU07SUFDbkYsT0FBT1M7QUFDVDtBQUV1QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeD82ZDgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgc2lnbkluV2l0aFBvcHVwLFxuICBzaWduT3V0IGFzIGZpcmViYXNlU2lnbk91dCxcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxuICB0eXBlIFVzZXJcbn0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG5pbXBvcnQgeyBkb2MsIGdldERvYyB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5pbXBvcnQgeyBhdXRoLCBkYiwgZ29vZ2xlUHJvdmlkZXIgfSBmcm9tICcuLi9jb25maWcvZmlyZWJhc2UnO1xuXG50eXBlIEF1dGhDb250ZXh0VHlwZSA9IHtcbiAgdXNlcjogVXNlciB8IG51bGw7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIHNpZ25JbjogKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG4gIHNpZ25JbldpdGhHb29nbGU6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIHNpZ25PdXQ6ICgpID0+IFByb21pc2U8dm9pZD47XG4gIGlzQWRtaW5WaWV3aW5nQXNDbGllbnQ6IGJvb2xlYW47XG4gIHNldEFkbWluVmlld2luZ0FzQ2xpZW50OiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XG59O1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QXV0aENvbnRleHRUeXBlIHwgbnVsbD4obnVsbCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbaXNBZG1pblZpZXdpbmdBc0NsaWVudCwgc2V0QWRtaW5WaWV3aW5nQXNDbGllbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdTZXR0aW5nIHVwIGF1dGggc3RhdGUgbGlzdGVuZXInKTtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCBhc3luYyAoZmlyZWJhc2VVc2VyKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoZmlyZWJhc2VVc2VyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgYXV0aGVudGljYXRlZDonLCBmaXJlYmFzZVVzZXIudWlkKTtcbiAgICAgICAgICBjb25zdCB1c2VyRG9jID0gYXdhaXQgZ2V0RG9jKGRvYyhkYiwgJ3VzZXJzJywgZmlyZWJhc2VVc2VyLnVpZCkpO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmICghdXNlckRvYy5leGlzdHMoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgZG9jdW1lbnQgbm90IGZvdW5kLCBzaWduaW5nIG91dCcpO1xuICAgICAgICAgICAgYXdhaXQgc2lnbk91dCgpO1xuICAgICAgICAgICAgc2V0VXNlcihudWxsKTtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpZFRva2VuID0gYXdhaXQgZmlyZWJhc2VVc2VyLmdldElkVG9rZW4odHJ1ZSk7XG4gICAgICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvYXV0aC9zZXNzaW9uJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkVG9rZW4gfSksXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBzZXRVc2VyKGZpcmViYXNlVXNlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ05vIHVzZXIgYXV0aGVudGljYXRlZCcpO1xuICAgICAgICAgIHNldFVzZXIobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0F1dGggc3RhdGUgY2hhbmdlIGVycm9yOicsIGVycm9yKTtcbiAgICAgICAgc2V0VXNlcihudWxsKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdDbGVhbmluZyB1cCBhdXRoIHN0YXRlIGxpc3RlbmVyJyk7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtyb3V0ZXJdKTtcblxuICBjb25zdCBzaWduSW4gPSBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnNvbGUubG9nKCdTaWduSW4gZnVuY3Rpb24gY2FsbGVkIHdpdGg6JywgZW1haWwpO1xuICAgIGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCk7XG4gIH07XG5cbiAgY29uc3Qgc2lnbkluV2l0aEdvb2dsZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zb2xlLmxvZygnU2lnbkluV2l0aEdvb2dsZSBmdW5jdGlvbiBjYWxsZWQnKTtcbiAgICBhd2FpdCBzaWduSW5XaXRoUG9wdXAoYXV0aCwgZ29vZ2xlUHJvdmlkZXIpO1xuICB9O1xuXG4gIGNvbnN0IHNpZ25PdXQgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc29sZS5sb2coJ1NpZ25PdXQgZnVuY3Rpb24gY2FsbGVkJyk7XG4gICAgYXdhaXQgZmlyZWJhc2VTaWduT3V0KGF1dGgpO1xuICAgIGF3YWl0IGZldGNoKCcvYXBpL2F1dGgvbG9nb3V0Jywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdmFsdWUgPSB7XG4gICAgdXNlcixcbiAgICBsb2FkaW5nLFxuICAgIHNpZ25JbixcbiAgICBzaWduSW5XaXRoR29vZ2xlLFxuICAgIHNpZ25PdXQsXG4gICAgaXNBZG1pblZpZXdpbmdBc0NsaWVudCxcbiAgICBzZXRBZG1pblZpZXdpbmdBc0NsaWVudFxuICB9O1xuXG4gIGNvbnNvbGUubG9nKCdBdXRoUHJvdmlkZXIgcmVuZGVyaW5nIHdpdGggdmFsdWU6JywgeyBcbiAgICBoYXNVc2VyOiAhIXVzZXIsIFxuICAgIGxvYWRpbmcsIFxuICAgIGhhc1NpZ25JbjogISFzaWduSW4gXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VBdXRoIG11c3QgYmUgdXNlZCB3aXRoaW4gYW4gQXV0aFByb3ZpZGVyJyk7XG4gIH1cbiAgY29uc29sZS5sb2coJ3VzZUF1dGggaG9vayBjYWxsZWQsIHJldHVybmluZyBjb250ZXh0IHdpdGggc2lnbkluOicsICEhY29udGV4dC5zaWduSW4pO1xuICByZXR1cm4gY29udGV4dDtcbn1cblxuZXhwb3J0IHsgQXV0aENvbnRleHQgfTsgIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhQb3B1cCIsInNpZ25PdXQiLCJmaXJlYmFzZVNpZ25PdXQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJkb2MiLCJnZXREb2MiLCJhdXRoIiwiZGIiLCJnb29nbGVQcm92aWRlciIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNBZG1pblZpZXdpbmdBc0NsaWVudCIsInNldEFkbWluVmlld2luZ0FzQ2xpZW50Iiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInVuc3Vic2NyaWJlIiwiZmlyZWJhc2VVc2VyIiwidWlkIiwidXNlckRvYyIsImV4aXN0cyIsInB1c2giLCJpZFRva2VuIiwiZ2V0SWRUb2tlbiIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImNyZWRlbnRpYWxzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsInNpZ25JbiIsImVtYWlsIiwicGFzc3dvcmQiLCJzaWduSW5XaXRoR29vZ2xlIiwidmFsdWUiLCJoYXNVc2VyIiwiaGFzU2lnbkluIiwiUHJvdmlkZXIiLCJ1c2VBdXRoIiwiY29udGV4dCIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);\n_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction App({ Component, pageProps }) {\n    console.log(\"App component rendering, about to mount AuthProvider\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        type: \"image/svg+xml\",\n                        href: \"/favicon.svg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adamsandler/projects/sandlerdigitaladvisory-website-main/frontend/pages/_app.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adamsandler/projects/sandlerdigitaladvisory-website-main/frontend/pages/_app.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adamsandler/projects/sandlerdigitaladvisory-website-main/frontend/pages/_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/adamsandler/projects/sandlerdigitaladvisory-website-main/frontend/pages/_app.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adamsandler/projects/sandlerdigitaladvisory-website-main/frontend/pages/_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDMEI7QUFDeEI7QUFFL0IsU0FBU0UsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM3Q0MsUUFBUUMsR0FBRyxDQUFDO0lBRVoscUJBQ0UsOERBQUNMLCtEQUFZQTs7MEJBQ1gsOERBQUNELGtEQUFJQTs7a0NBQ0gsOERBQUNPO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLO3dCQUFnQkMsTUFBSzs7Ozs7O2tDQUMzQyw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7Ozs7Ozs7OzswQkFFaEMsOERBQUNWO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9BdXRoQ29udGV4dCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5cbmZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnNvbGUubG9nKCdBcHAgY29tcG9uZW50IHJlbmRlcmluZywgYWJvdXQgdG8gbW91bnQgQXV0aFByb3ZpZGVyJyk7XG4gIFxuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgaHJlZj1cIi9mYXZpY29uLnN2Z1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0F1dGhQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyAiXSwibmFtZXMiOlsiSGVhZCIsIkF1dGhQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJsaW5rIiwicmVsIiwidHlwZSIsImhyZWYiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

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

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/storage");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();