(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9901:function(e,i,s){"use strict";s.d(i,{BH:function(){return Deferred},G6:function(){return isSafari},L:function(){return base64urlEncodeWithoutPadding},LL:function(){return ErrorFactory},L_:function(){return isCloudflareWorker},P0:function(){return getDefaultEmulatorHostnameAndPort},Pz:function(){return getExperimentalSetting},Sg:function(){return createMockUserToken},ZR:function(){return FirebaseError},aH:function(){return getDefaultAppConfig},b$:function(){return isReactNative},eu:function(){return validateIndexedDBOpenable},hl:function(){return isIndexedDBAvailable},m9:function(){return getModularInstance},ne:function(){return createSubscribe},pd:function(){return extractQuerystring},q4:function(){return getDefaultEmulatorHost},ru:function(){return isBrowserExtension},tV:function(){return base64Decode},uI:function(){return isMobileCordova},vZ:function(){return function deepEqual(e,i){if(e===i)return!0;let s=Object.keys(e),o=Object.keys(i);for(let l of s){if(!o.includes(l))return!1;let s=e[l],h=i[l];if(isObject(s)&&isObject(h)){if(!deepEqual(s,h))return!1}else if(s!==h)return!1}for(let e of o)if(!s.includes(e))return!1;return!0}},w1:function(){return isIE},xO:function(){return querystring},xb:function(){return isEmpty},z$:function(){return getUA},zd:function(){return querystringDecode}});var o=s(4284);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let stringToByteArray$1=function(e){let i=[],s=0;for(let o=0;o<e.length;o++){let l=e.charCodeAt(o);l<128?i[s++]=l:(l<2048?i[s++]=l>>6|192:((64512&l)==55296&&o+1<e.length&&(64512&e.charCodeAt(o+1))==56320?(l=65536+((1023&l)<<10)+(1023&e.charCodeAt(++o)),i[s++]=l>>18|240,i[s++]=l>>12&63|128):i[s++]=l>>12|224,i[s++]=l>>6&63|128),i[s++]=63&l|128)}return i},byteArrayToString=function(e){let i=[],s=0,o=0;for(;s<e.length;){let l=e[s++];if(l<128)i[o++]=String.fromCharCode(l);else if(l>191&&l<224){let h=e[s++];i[o++]=String.fromCharCode((31&l)<<6|63&h)}else if(l>239&&l<365){let h=e[s++],d=e[s++],f=e[s++],_=((7&l)<<18|(63&h)<<12|(63&d)<<6|63&f)-65536;i[o++]=String.fromCharCode(55296+(_>>10)),i[o++]=String.fromCharCode(56320+(1023&_))}else{let h=e[s++],d=e[s++];i[o++]=String.fromCharCode((15&l)<<12|(63&h)<<6|63&d)}}return i.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,i){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let s=i?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let i=0;i<e.length;i+=3){let l=e[i],h=i+1<e.length,d=h?e[i+1]:0,f=i+2<e.length,_=f?e[i+2]:0,g=l>>2,w=(3&l)<<4|d>>4,b=(15&d)<<2|_>>6,k=63&_;f||(k=64,h||(b=64)),o.push(s[g],s[w],s[b],s[k])}return o.join("")},encodeString(e,i){return this.HAS_NATIVE_SUPPORT&&!i?btoa(e):this.encodeByteArray(stringToByteArray$1(e),i)},decodeString(e,i){return this.HAS_NATIVE_SUPPORT&&!i?atob(e):byteArrayToString(this.decodeStringToByteArray(e,i))},decodeStringToByteArray(e,i){this.init_();let s=i?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let i=0;i<e.length;){let l=s[e.charAt(i++)],h=i<e.length,d=h?s[e.charAt(i)]:0;++i;let f=i<e.length,_=f?s[e.charAt(i)]:64;++i;let g=i<e.length,w=g?s[e.charAt(i)]:64;if(++i,null==l||null==d||null==_||null==w)throw new DecodeBase64StringError;let b=l<<2|d>>4;if(o.push(b),64!==_){let e=d<<4&240|_>>2;if(o.push(e),64!==w){let e=_<<6&192|w;o.push(e)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};let DecodeBase64StringError=class DecodeBase64StringError extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};let base64Encode=function(e){let i=stringToByteArray$1(e);return l.encodeByteArray(i,!0)},base64urlEncodeWithoutPadding=function(e){return base64Encode(e).replace(/\./g,"")},base64Decode=function(e){try{return l.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},getDefaultsFromGlobal=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==s.g)return s.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,getDefaultsFromEnvVariable=()=>{if(void 0===o||void 0===o.env)return;let e=o.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},getDefaultsFromCookie=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let i=e&&base64Decode(e[1]);return i&&JSON.parse(i)},getDefaults=()=>{try{return getDefaultsFromGlobal()||getDefaultsFromEnvVariable()||getDefaultsFromCookie()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},getDefaultEmulatorHost=e=>{var i,s;return null===(s=null===(i=getDefaults())||void 0===i?void 0:i.emulatorHosts)||void 0===s?void 0:s[e]},getDefaultEmulatorHostnameAndPort=e=>{let i=getDefaultEmulatorHost(e);if(!i)return;let s=i.lastIndexOf(":");if(s<=0||s+1===i.length)throw Error(`Invalid host ${i} with no separate hostname and port!`);let o=parseInt(i.substring(s+1),10);return"["===i[0]?[i.substring(1,s-1),o]:[i.substring(0,s),o]},getDefaultAppConfig=()=>{var e;return null===(e=getDefaults())||void 0===e?void 0:e.config},getExperimentalSetting=e=>{var i;return null===(i=getDefaults())||void 0===i?void 0:i[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Deferred=class Deferred{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,s)=>{i?this.reject(i):this.resolve(s),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(i):e(i,s))}}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function createMockUserToken(e,i){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let s=i||"demo-project",o=e.iat||0,l=e.sub||e.user_id;if(!l)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},e);return[base64urlEncodeWithoutPadding(JSON.stringify({alg:"none",type:"JWT"})),base64urlEncodeWithoutPadding(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getUA(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function isMobileCordova(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())}function isCloudflareWorker(){return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function isBrowserExtension(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function isReactNative(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function isIE(){let e=getUA();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function isSafari(){return!function(){var e;let i=null===(e=getDefaults())||void 0===e?void 0:e.forceEnvironment;if("node"===i)return!0;if("browser"===i)return!1;try{return"[object process]"===Object.prototype.toString.call(s.g.process)}catch(e){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function isIndexedDBAvailable(){try{return"object"==typeof indexedDB}catch(e){return!1}}function validateIndexedDBOpenable(){return new Promise((e,i)=>{try{let s=!0,o="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(o);l.onsuccess=()=>{l.result.close(),s||self.indexedDB.deleteDatabase(o),e(!0)},l.onupgradeneeded=()=>{s=!1},l.onerror=()=>{var e;i((null===(e=l.error)||void 0===e?void 0:e.message)||"")}}catch(e){i(e)}})}let FirebaseError=class FirebaseError extends Error{constructor(e,i,s){super(i),this.code=e,this.customData=s,this.name="FirebaseError",Object.setPrototypeOf(this,FirebaseError.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ErrorFactory.prototype.create)}};let ErrorFactory=class ErrorFactory{constructor(e,i,s){this.service=e,this.serviceName=i,this.errors=s}create(e,...i){let s=i[0]||{},o=`${this.service}/${e}`,l=this.errors[e],d=l?l.replace(h,(e,i)=>{let o=s[i];return null!=o?String(o):`<${i}?>`}):"Error",f=`${this.serviceName}: ${d} (${o}).`,_=new FirebaseError(o,f,s);return _}};let h=/\{\$([^}]+)}/g;function isEmpty(e){for(let i in e)if(Object.prototype.hasOwnProperty.call(e,i))return!1;return!0}function isObject(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function querystring(e){let i=[];for(let[s,o]of Object.entries(e))Array.isArray(o)?o.forEach(e=>{i.push(encodeURIComponent(s)+"="+encodeURIComponent(e))}):i.push(encodeURIComponent(s)+"="+encodeURIComponent(o));return i.length?"&"+i.join("&"):""}function querystringDecode(e){let i={},s=e.replace(/^\?/,"").split("&");return s.forEach(e=>{if(e){let[s,o]=e.split("=");i[decodeURIComponent(s)]=decodeURIComponent(o)}}),i}function extractQuerystring(e){let i=e.indexOf("?");if(!i)return"";let s=e.indexOf("#",i);return e.substring(i,s>0?s:void 0)}function createSubscribe(e,i){let s=new ObserverProxy(e,i);return s.subscribe.bind(s)}let ObserverProxy=class ObserverProxy{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,s){let o;if(void 0===e&&void 0===i&&void 0===s)throw Error("Missing Observer.");void 0===(o=!function(e,i){if("object"!=typeof e||null===e)return!1;for(let s of i)if(s in e&&"function"==typeof e[s])return!0;return!1}(e,["next","error","complete"])?{next:e,error:i,complete:s}:e).next&&(o.next=noop),void 0===o.error&&(o.error=noop),void 0===o.complete&&(o.complete=noop);let l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch(e){}}),this.observers.push(o),l}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{i(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function noop(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getModularInstance(e){return e&&e._delegate?e._delegate:e}},4782:function(e,i){"use strict";i.byteLength=function(e){var i=getLens(e),s=i[0],o=i[1];return(s+o)*3/4-o},i.toByteArray=function(e){var i,s,h=getLens(e),d=h[0],f=h[1],_=new l((d+f)*3/4-f),g=0,w=f>0?d-4:d;for(s=0;s<w;s+=4)i=o[e.charCodeAt(s)]<<18|o[e.charCodeAt(s+1)]<<12|o[e.charCodeAt(s+2)]<<6|o[e.charCodeAt(s+3)],_[g++]=i>>16&255,_[g++]=i>>8&255,_[g++]=255&i;return 2===f&&(i=o[e.charCodeAt(s)]<<2|o[e.charCodeAt(s+1)]>>4,_[g++]=255&i),1===f&&(i=o[e.charCodeAt(s)]<<10|o[e.charCodeAt(s+1)]<<4|o[e.charCodeAt(s+2)]>>2,_[g++]=i>>8&255,_[g++]=255&i),_},i.fromByteArray=function(e){for(var i,o=e.length,l=o%3,h=[],d=0,f=o-l;d<f;d+=16383)h.push(function(e,i,o){for(var l,h=[],d=i;d<o;d+=3)h.push(s[(l=(e[d]<<16&16711680)+(e[d+1]<<8&65280)+(255&e[d+2]))>>18&63]+s[l>>12&63]+s[l>>6&63]+s[63&l]);return h.join("")}(e,d,d+16383>f?f:d+16383));return 1===l?h.push(s[(i=e[o-1])>>2]+s[i<<4&63]+"=="):2===l&&h.push(s[(i=(e[o-2]<<8)+e[o-1])>>10]+s[i>>4&63]+s[i<<2&63]+"="),h.join("")};for(var s=[],o=[],l="undefined"!=typeof Uint8Array?Uint8Array:Array,h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d=0,f=h.length;d<f;++d)s[d]=h[d],o[h.charCodeAt(d)]=d;function getLens(e){var i=e.length;if(i%4>0)throw Error("Invalid string. Length must be a multiple of 4");var s=e.indexOf("=");-1===s&&(s=i);var o=s===i?0:4-s%4;return[s,o]}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},816:function(e,i,s){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */let o=s(4782),l=s(8898),h="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function createBuffer(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');let i=new Uint8Array(e);return Object.setPrototypeOf(i,Buffer.prototype),i}function Buffer(e,i,s){if("number"==typeof e){if("string"==typeof i)throw TypeError('The "string" argument must be of type string. Received type number');return allocUnsafe(e)}return from(e,i,s)}function from(e,i,s){if("string"==typeof e)return function(e,i){if(("string"!=typeof i||""===i)&&(i="utf8"),!Buffer.isEncoding(i))throw TypeError("Unknown encoding: "+i);let s=0|byteLength(e,i),o=createBuffer(s),l=o.write(e,i);return l!==s&&(o=o.slice(0,l)),o}(e,i);if(ArrayBuffer.isView(e))return function(e){if(isInstance(e,Uint8Array)){let i=new Uint8Array(e);return fromArrayBuffer(i.buffer,i.byteOffset,i.byteLength)}return fromArrayLike(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(isInstance(e,ArrayBuffer)||e&&isInstance(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(isInstance(e,SharedArrayBuffer)||e&&isInstance(e.buffer,SharedArrayBuffer)))return fromArrayBuffer(e,i,s);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let o=e.valueOf&&e.valueOf();if(null!=o&&o!==e)return Buffer.from(o,i,s);let l=function(e){var i;if(Buffer.isBuffer(e)){let i=0|checked(e.length),s=createBuffer(i);return 0===s.length||e.copy(s,0,0,i),s}return void 0!==e.length?"number"!=typeof e.length||(i=e.length)!=i?createBuffer(0):fromArrayLike(e):"Buffer"===e.type&&Array.isArray(e.data)?fromArrayLike(e.data):void 0}(e);if(l)return l;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return Buffer.from(e[Symbol.toPrimitive]("string"),i,s);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function assertSize(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function allocUnsafe(e){return assertSize(e),createBuffer(e<0?0:0|checked(e))}function fromArrayLike(e){let i=e.length<0?0:0|checked(e.length),s=createBuffer(i);for(let o=0;o<i;o+=1)s[o]=255&e[o];return s}function fromArrayBuffer(e,i,s){let o;if(i<0||e.byteLength<i)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<i+(s||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(o=void 0===i&&void 0===s?new Uint8Array(e):void 0===s?new Uint8Array(e,i):new Uint8Array(e,i,s),Buffer.prototype),o}function checked(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function byteLength(e,i){if(Buffer.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||isInstance(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let s=e.length,o=arguments.length>2&&!0===arguments[2];if(!o&&0===s)return 0;let l=!1;for(;;)switch(i){case"ascii":case"latin1":case"binary":return s;case"utf8":case"utf-8":return utf8ToBytes(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*s;case"hex":return s>>>1;case"base64":return base64ToBytes(e).length;default:if(l)return o?-1:utf8ToBytes(e).length;i=(""+i).toLowerCase(),l=!0}}function slowToString(e,i,s){let l=!1;if((void 0===i||i<0)&&(i=0),i>this.length||((void 0===s||s>this.length)&&(s=this.length),s<=0||(s>>>=0)<=(i>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,i,s){let o=e.length;(!i||i<0)&&(i=0),(!s||s<0||s>o)&&(s=o);let l="";for(let o=i;o<s;++o)l+=_[e[o]];return l}(this,i,s);case"utf8":case"utf-8":return utf8Slice(this,i,s);case"ascii":return function(e,i,s){let o="";s=Math.min(e.length,s);for(let l=i;l<s;++l)o+=String.fromCharCode(127&e[l]);return o}(this,i,s);case"latin1":case"binary":return function(e,i,s){let o="";s=Math.min(e.length,s);for(let l=i;l<s;++l)o+=String.fromCharCode(e[l]);return o}(this,i,s);case"base64":var h,d;return h=i,d=s,0===h&&d===this.length?o.fromByteArray(this):o.fromByteArray(this.slice(h,d));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,i,s){let o=e.slice(i,s),l="";for(let e=0;e<o.length-1;e+=2)l+=String.fromCharCode(o[e]+256*o[e+1]);return l}(this,i,s);default:if(l)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),l=!0}}function swap(e,i,s){let o=e[i];e[i]=e[s],e[s]=o}function bidirectionalIndexOf(e,i,s,o,l){var h;if(0===e.length)return -1;if("string"==typeof s?(o=s,s=0):s>2147483647?s=2147483647:s<-2147483648&&(s=-2147483648),(h=s=+s)!=h&&(s=l?0:e.length-1),s<0&&(s=e.length+s),s>=e.length){if(l)return -1;s=e.length-1}else if(s<0){if(!l)return -1;s=0}if("string"==typeof i&&(i=Buffer.from(i,o)),Buffer.isBuffer(i))return 0===i.length?-1:arrayIndexOf(e,i,s,o,l);if("number"==typeof i)return(i&=255,"function"==typeof Uint8Array.prototype.indexOf)?l?Uint8Array.prototype.indexOf.call(e,i,s):Uint8Array.prototype.lastIndexOf.call(e,i,s):arrayIndexOf(e,[i],s,o,l);throw TypeError("val must be string, number or Buffer")}function arrayIndexOf(e,i,s,o,l){let h,d=1,f=e.length,_=i.length;if(void 0!==o&&("ucs2"===(o=String(o).toLowerCase())||"ucs-2"===o||"utf16le"===o||"utf-16le"===o)){if(e.length<2||i.length<2)return -1;d=2,f/=2,_/=2,s/=2}function read(e,i){return 1===d?e[i]:e.readUInt16BE(i*d)}if(l){let o=-1;for(h=s;h<f;h++)if(read(e,h)===read(i,-1===o?0:h-o)){if(-1===o&&(o=h),h-o+1===_)return o*d}else -1!==o&&(h-=h-o),o=-1}else for(s+_>f&&(s=f-_),h=s;h>=0;h--){let s=!0;for(let o=0;o<_;o++)if(read(e,h+o)!==read(i,o)){s=!1;break}if(s)return h}return -1}function utf8Slice(e,i,s){s=Math.min(e.length,s);let o=[],l=i;for(;l<s;){let i=e[l],h=null,d=i>239?4:i>223?3:i>191?2:1;if(l+d<=s){let s,o,f,_;switch(d){case 1:i<128&&(h=i);break;case 2:(192&(s=e[l+1]))==128&&(_=(31&i)<<6|63&s)>127&&(h=_);break;case 3:s=e[l+1],o=e[l+2],(192&s)==128&&(192&o)==128&&(_=(15&i)<<12|(63&s)<<6|63&o)>2047&&(_<55296||_>57343)&&(h=_);break;case 4:s=e[l+1],o=e[l+2],f=e[l+3],(192&s)==128&&(192&o)==128&&(192&f)==128&&(_=(15&i)<<18|(63&s)<<12|(63&o)<<6|63&f)>65535&&_<1114112&&(h=_)}}null===h?(h=65533,d=1):h>65535&&(h-=65536,o.push(h>>>10&1023|55296),h=56320|1023&h),o.push(h),l+=d}return function(e){let i=e.length;if(i<=4096)return String.fromCharCode.apply(String,e);let s="",o=0;for(;o<i;)s+=String.fromCharCode.apply(String,e.slice(o,o+=4096));return s}(o)}function checkOffset(e,i,s){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+i>s)throw RangeError("Trying to access beyond buffer length")}function checkInt(e,i,s,o,l,h){if(!Buffer.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(i>l||i<h)throw RangeError('"value" argument is out of bounds');if(s+o>e.length)throw RangeError("Index out of range")}function wrtBigUInt64LE(e,i,s,o,l){checkIntBI(i,o,l,e,s,7);let h=Number(i&BigInt(4294967295));e[s++]=h,h>>=8,e[s++]=h,h>>=8,e[s++]=h,h>>=8,e[s++]=h;let d=Number(i>>BigInt(32)&BigInt(4294967295));return e[s++]=d,d>>=8,e[s++]=d,d>>=8,e[s++]=d,d>>=8,e[s++]=d,s}function wrtBigUInt64BE(e,i,s,o,l){checkIntBI(i,o,l,e,s,7);let h=Number(i&BigInt(4294967295));e[s+7]=h,h>>=8,e[s+6]=h,h>>=8,e[s+5]=h,h>>=8,e[s+4]=h;let d=Number(i>>BigInt(32)&BigInt(4294967295));return e[s+3]=d,d>>=8,e[s+2]=d,d>>=8,e[s+1]=d,d>>=8,e[s]=d,s+8}function checkIEEE754(e,i,s,o,l,h){if(s+o>e.length||s<0)throw RangeError("Index out of range")}function writeFloat(e,i,s,o,h){return i=+i,s>>>=0,h||checkIEEE754(e,i,s,4,34028234663852886e22,-34028234663852886e22),l.write(e,i,s,o,23,4),s+4}function writeDouble(e,i,s,o,h){return i=+i,s>>>=0,h||checkIEEE754(e,i,s,8,17976931348623157e292,-17976931348623157e292),l.write(e,i,s,o,52,8),s+8}i.lW=Buffer,i.h2=50,Buffer.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),i={foo:function(){return 42}};return Object.setPrototypeOf(i,Uint8Array.prototype),Object.setPrototypeOf(e,i),42===e.foo()}catch(e){return!1}}(),Buffer.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Buffer.prototype,"parent",{enumerable:!0,get:function(){if(Buffer.isBuffer(this))return this.buffer}}),Object.defineProperty(Buffer.prototype,"offset",{enumerable:!0,get:function(){if(Buffer.isBuffer(this))return this.byteOffset}}),Buffer.poolSize=8192,Buffer.from=function(e,i,s){return from(e,i,s)},Object.setPrototypeOf(Buffer.prototype,Uint8Array.prototype),Object.setPrototypeOf(Buffer,Uint8Array),Buffer.alloc=function(e,i,s){return(assertSize(e),e<=0)?createBuffer(e):void 0!==i?"string"==typeof s?createBuffer(e).fill(i,s):createBuffer(e).fill(i):createBuffer(e)},Buffer.allocUnsafe=function(e){return allocUnsafe(e)},Buffer.allocUnsafeSlow=function(e){return allocUnsafe(e)},Buffer.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==Buffer.prototype},Buffer.compare=function(e,i){if(isInstance(e,Uint8Array)&&(e=Buffer.from(e,e.offset,e.byteLength)),isInstance(i,Uint8Array)&&(i=Buffer.from(i,i.offset,i.byteLength)),!Buffer.isBuffer(e)||!Buffer.isBuffer(i))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===i)return 0;let s=e.length,o=i.length;for(let l=0,h=Math.min(s,o);l<h;++l)if(e[l]!==i[l]){s=e[l],o=i[l];break}return s<o?-1:o<s?1:0},Buffer.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Buffer.concat=function(e,i){let s;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return Buffer.alloc(0);if(void 0===i)for(s=0,i=0;s<e.length;++s)i+=e[s].length;let o=Buffer.allocUnsafe(i),l=0;for(s=0;s<e.length;++s){let i=e[s];if(isInstance(i,Uint8Array))l+i.length>o.length?(Buffer.isBuffer(i)||(i=Buffer.from(i)),i.copy(o,l)):Uint8Array.prototype.set.call(o,i,l);else if(Buffer.isBuffer(i))i.copy(o,l);else throw TypeError('"list" argument must be an Array of Buffers');l+=i.length}return o},Buffer.byteLength=byteLength,Buffer.prototype._isBuffer=!0,Buffer.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let i=0;i<e;i+=2)swap(this,i,i+1);return this},Buffer.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let i=0;i<e;i+=4)swap(this,i,i+3),swap(this,i+1,i+2);return this},Buffer.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let i=0;i<e;i+=8)swap(this,i,i+7),swap(this,i+1,i+6),swap(this,i+2,i+5),swap(this,i+3,i+4);return this},Buffer.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?utf8Slice(this,0,e):slowToString.apply(this,arguments)},Buffer.prototype.toLocaleString=Buffer.prototype.toString,Buffer.prototype.equals=function(e){if(!Buffer.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===Buffer.compare(this,e)},Buffer.prototype.inspect=function(){let e="",s=i.h2;return e=this.toString("hex",0,s).replace(/(.{2})/g,"$1 ").trim(),this.length>s&&(e+=" ... "),"<Buffer "+e+">"},h&&(Buffer.prototype[h]=Buffer.prototype.inspect),Buffer.prototype.compare=function(e,i,s,o,l){if(isInstance(e,Uint8Array)&&(e=Buffer.from(e,e.offset,e.byteLength)),!Buffer.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===i&&(i=0),void 0===s&&(s=e?e.length:0),void 0===o&&(o=0),void 0===l&&(l=this.length),i<0||s>e.length||o<0||l>this.length)throw RangeError("out of range index");if(o>=l&&i>=s)return 0;if(o>=l)return -1;if(i>=s)return 1;if(i>>>=0,s>>>=0,o>>>=0,l>>>=0,this===e)return 0;let h=l-o,d=s-i,f=Math.min(h,d),_=this.slice(o,l),g=e.slice(i,s);for(let e=0;e<f;++e)if(_[e]!==g[e]){h=_[e],d=g[e];break}return h<d?-1:d<h?1:0},Buffer.prototype.includes=function(e,i,s){return -1!==this.indexOf(e,i,s)},Buffer.prototype.indexOf=function(e,i,s){return bidirectionalIndexOf(this,e,i,s,!0)},Buffer.prototype.lastIndexOf=function(e,i,s){return bidirectionalIndexOf(this,e,i,s,!1)},Buffer.prototype.write=function(e,i,s,o){var l,h,d,f,_,g,w,b;if(void 0===i)o="utf8",s=this.length,i=0;else if(void 0===s&&"string"==typeof i)o=i,s=this.length,i=0;else if(isFinite(i))i>>>=0,isFinite(s)?(s>>>=0,void 0===o&&(o="utf8")):(o=s,s=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let k=this.length-i;if((void 0===s||s>k)&&(s=k),e.length>0&&(s<0||i<0)||i>this.length)throw RangeError("Attempt to write outside buffer bounds");o||(o="utf8");let O=!1;for(;;)switch(o){case"hex":return function(e,i,s,o){let l;s=Number(s)||0;let h=e.length-s;o?(o=Number(o))>h&&(o=h):o=h;let d=i.length;for(o>d/2&&(o=d/2),l=0;l<o;++l){let o=parseInt(i.substr(2*l,2),16);if(o!=o)break;e[s+l]=o}return l}(this,e,i,s);case"utf8":case"utf-8":return l=i,h=s,blitBuffer(utf8ToBytes(e,this.length-l),this,l,h);case"ascii":case"latin1":case"binary":return d=i,f=s,blitBuffer(function(e){let i=[];for(let s=0;s<e.length;++s)i.push(255&e.charCodeAt(s));return i}(e),this,d,f);case"base64":return _=i,g=s,blitBuffer(base64ToBytes(e),this,_,g);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return w=i,b=s,blitBuffer(function(e,i){let s,o;let l=[];for(let h=0;h<e.length&&!((i-=2)<0);++h)o=(s=e.charCodeAt(h))>>8,l.push(s%256),l.push(o);return l}(e,this.length-w),this,w,b);default:if(O)throw TypeError("Unknown encoding: "+o);o=(""+o).toLowerCase(),O=!0}},Buffer.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},Buffer.prototype.slice=function(e,i){let s=this.length;e=~~e,i=void 0===i?s:~~i,e<0?(e+=s)<0&&(e=0):e>s&&(e=s),i<0?(i+=s)<0&&(i=0):i>s&&(i=s),i<e&&(i=e);let o=this.subarray(e,i);return Object.setPrototypeOf(o,Buffer.prototype),o},Buffer.prototype.readUintLE=Buffer.prototype.readUIntLE=function(e,i,s){e>>>=0,i>>>=0,s||checkOffset(e,i,this.length);let o=this[e],l=1,h=0;for(;++h<i&&(l*=256);)o+=this[e+h]*l;return o},Buffer.prototype.readUintBE=Buffer.prototype.readUIntBE=function(e,i,s){e>>>=0,i>>>=0,s||checkOffset(e,i,this.length);let o=this[e+--i],l=1;for(;i>0&&(l*=256);)o+=this[e+--i]*l;return o},Buffer.prototype.readUint8=Buffer.prototype.readUInt8=function(e,i){return e>>>=0,i||checkOffset(e,1,this.length),this[e]},Buffer.prototype.readUint16LE=Buffer.prototype.readUInt16LE=function(e,i){return e>>>=0,i||checkOffset(e,2,this.length),this[e]|this[e+1]<<8},Buffer.prototype.readUint16BE=Buffer.prototype.readUInt16BE=function(e,i){return e>>>=0,i||checkOffset(e,2,this.length),this[e]<<8|this[e+1]},Buffer.prototype.readUint32LE=Buffer.prototype.readUInt32LE=function(e,i){return e>>>=0,i||checkOffset(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},Buffer.prototype.readUint32BE=Buffer.prototype.readUInt32BE=function(e,i){return e>>>=0,i||checkOffset(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},Buffer.prototype.readBigUInt64LE=defineBigIntMethod(function(e){validateNumber(e>>>=0,"offset");let i=this[e],s=this[e+7];(void 0===i||void 0===s)&&boundsError(e,this.length-8);let o=i+256*this[++e]+65536*this[++e]+16777216*this[++e],l=this[++e]+256*this[++e]+65536*this[++e]+16777216*s;return BigInt(o)+(BigInt(l)<<BigInt(32))}),Buffer.prototype.readBigUInt64BE=defineBigIntMethod(function(e){validateNumber(e>>>=0,"offset");let i=this[e],s=this[e+7];(void 0===i||void 0===s)&&boundsError(e,this.length-8);let o=16777216*i+65536*this[++e]+256*this[++e]+this[++e],l=16777216*this[++e]+65536*this[++e]+256*this[++e]+s;return(BigInt(o)<<BigInt(32))+BigInt(l)}),Buffer.prototype.readIntLE=function(e,i,s){e>>>=0,i>>>=0,s||checkOffset(e,i,this.length);let o=this[e],l=1,h=0;for(;++h<i&&(l*=256);)o+=this[e+h]*l;return o>=(l*=128)&&(o-=Math.pow(2,8*i)),o},Buffer.prototype.readIntBE=function(e,i,s){e>>>=0,i>>>=0,s||checkOffset(e,i,this.length);let o=i,l=1,h=this[e+--o];for(;o>0&&(l*=256);)h+=this[e+--o]*l;return h>=(l*=128)&&(h-=Math.pow(2,8*i)),h},Buffer.prototype.readInt8=function(e,i){return(e>>>=0,i||checkOffset(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},Buffer.prototype.readInt16LE=function(e,i){e>>>=0,i||checkOffset(e,2,this.length);let s=this[e]|this[e+1]<<8;return 32768&s?4294901760|s:s},Buffer.prototype.readInt16BE=function(e,i){e>>>=0,i||checkOffset(e,2,this.length);let s=this[e+1]|this[e]<<8;return 32768&s?4294901760|s:s},Buffer.prototype.readInt32LE=function(e,i){return e>>>=0,i||checkOffset(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},Buffer.prototype.readInt32BE=function(e,i){return e>>>=0,i||checkOffset(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},Buffer.prototype.readBigInt64LE=defineBigIntMethod(function(e){validateNumber(e>>>=0,"offset");let i=this[e],s=this[e+7];(void 0===i||void 0===s)&&boundsError(e,this.length-8);let o=this[e+4]+256*this[e+5]+65536*this[e+6]+(s<<24);return(BigInt(o)<<BigInt(32))+BigInt(i+256*this[++e]+65536*this[++e]+16777216*this[++e])}),Buffer.prototype.readBigInt64BE=defineBigIntMethod(function(e){validateNumber(e>>>=0,"offset");let i=this[e],s=this[e+7];(void 0===i||void 0===s)&&boundsError(e,this.length-8);let o=(i<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(o)<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+s)}),Buffer.prototype.readFloatLE=function(e,i){return e>>>=0,i||checkOffset(e,4,this.length),l.read(this,e,!0,23,4)},Buffer.prototype.readFloatBE=function(e,i){return e>>>=0,i||checkOffset(e,4,this.length),l.read(this,e,!1,23,4)},Buffer.prototype.readDoubleLE=function(e,i){return e>>>=0,i||checkOffset(e,8,this.length),l.read(this,e,!0,52,8)},Buffer.prototype.readDoubleBE=function(e,i){return e>>>=0,i||checkOffset(e,8,this.length),l.read(this,e,!1,52,8)},Buffer.prototype.writeUintLE=Buffer.prototype.writeUIntLE=function(e,i,s,o){if(e=+e,i>>>=0,s>>>=0,!o){let o=Math.pow(2,8*s)-1;checkInt(this,e,i,s,o,0)}let l=1,h=0;for(this[i]=255&e;++h<s&&(l*=256);)this[i+h]=e/l&255;return i+s},Buffer.prototype.writeUintBE=Buffer.prototype.writeUIntBE=function(e,i,s,o){if(e=+e,i>>>=0,s>>>=0,!o){let o=Math.pow(2,8*s)-1;checkInt(this,e,i,s,o,0)}let l=s-1,h=1;for(this[i+l]=255&e;--l>=0&&(h*=256);)this[i+l]=e/h&255;return i+s},Buffer.prototype.writeUint8=Buffer.prototype.writeUInt8=function(e,i,s){return e=+e,i>>>=0,s||checkInt(this,e,i,1,255,0),this[i]=255&e,i+1},Buffer.prototype.writeUint16LE=Buffer.prototype.writeUInt16LE=function(e,i,s){return e=+e,i>>>=0,s||checkInt(this,e,i,2,65535,0),this[i]=255&e,this[i+1]=e>>>8,i+2},Buffer.prototype.writeUint16BE=Buffer.prototype.writeUInt16BE=function(e,i,s){return e=+e,i>>>=0,s||checkInt(this,e,i,2,65535,0),this[i]=e>>>8,this[i+1]=255&e,i+2},Buffer.prototype.writeUint32LE=Buffer.prototype.writeUInt32LE=function(e,i,s){return e=+e,i>>>=0,s||checkInt(this,e,i,4,4294967295,0),this[i+3]=e>>>24,this[i+2]=e>>>16,this[i+1]=e>>>8,this[i]=255&e,i+4},Buffer.prototype.writeUint32BE=Buffer.prototype.writeUInt32BE=function(e,i,s){return e=+e,i>>>=0,s||checkInt(this,e,i,4,4294967295,0),this[i]=e>>>24,this[i+1]=e>>>16,this[i+2]=e>>>8,this[i+3]=255&e,i+4},Buffer.prototype.writeBigUInt64LE=defineBigIntMethod(function(e,i=0){return wrtBigUInt64LE(this,e,i,BigInt(0),BigInt("0xffffffffffffffff"))}),Buffer.prototype.writeBigUInt64BE=defineBigIntMethod(function(e,i=0){return wrtBigUInt64BE(this,e,i,BigInt(0),BigInt("0xffffffffffffffff"))}),Buffer.prototype.writeIntLE=function(e,i,s,o){if(e=+e,i>>>=0,!o){let o=Math.pow(2,8*s-1);checkInt(this,e,i,s,o-1,-o)}let l=0,h=1,d=0;for(this[i]=255&e;++l<s&&(h*=256);)e<0&&0===d&&0!==this[i+l-1]&&(d=1),this[i+l]=(e/h>>0)-d&255;return i+s},Buffer.prototype.writeIntBE=function(e,i,s,o){if(e=+e,i>>>=0,!o){let o=Math.pow(2,8*s-1);checkInt(this,e,i,s,o-1,-o)}let l=s-1,h=1,d=0;for(this[i+l]=255&e;--l>=0&&(h*=256);)e<0&&0===d&&0!==this[i+l+1]&&(d=1),this[i+l]=(e/h>>0)-d&255;return i+s},Buffer.prototype.writeInt8=function(e,i,s){return e=+e,i>>>=0,s||checkInt(this,e,i,1,127,-128),e<0&&(e=255+e+1),this[i]=255&e,i+1},Buffer.prototype.writeInt16LE=function(e,i,s){return e=+e,i>>>=0,s||checkInt(this,e,i,2,32767,-32768),this[i]=255&e,this[i+1]=e>>>8,i+2},Buffer.prototype.writeInt16BE=function(e,i,s){return e=+e,i>>>=0,s||checkInt(this,e,i,2,32767,-32768),this[i]=e>>>8,this[i+1]=255&e,i+2},Buffer.prototype.writeInt32LE=function(e,i,s){return e=+e,i>>>=0,s||checkInt(this,e,i,4,2147483647,-2147483648),this[i]=255&e,this[i+1]=e>>>8,this[i+2]=e>>>16,this[i+3]=e>>>24,i+4},Buffer.prototype.writeInt32BE=function(e,i,s){return e=+e,i>>>=0,s||checkInt(this,e,i,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[i]=e>>>24,this[i+1]=e>>>16,this[i+2]=e>>>8,this[i+3]=255&e,i+4},Buffer.prototype.writeBigInt64LE=defineBigIntMethod(function(e,i=0){return wrtBigUInt64LE(this,e,i,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),Buffer.prototype.writeBigInt64BE=defineBigIntMethod(function(e,i=0){return wrtBigUInt64BE(this,e,i,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),Buffer.prototype.writeFloatLE=function(e,i,s){return writeFloat(this,e,i,!0,s)},Buffer.prototype.writeFloatBE=function(e,i,s){return writeFloat(this,e,i,!1,s)},Buffer.prototype.writeDoubleLE=function(e,i,s){return writeDouble(this,e,i,!0,s)},Buffer.prototype.writeDoubleBE=function(e,i,s){return writeDouble(this,e,i,!1,s)},Buffer.prototype.copy=function(e,i,s,o){if(!Buffer.isBuffer(e))throw TypeError("argument should be a Buffer");if(s||(s=0),o||0===o||(o=this.length),i>=e.length&&(i=e.length),i||(i=0),o>0&&o<s&&(o=s),o===s||0===e.length||0===this.length)return 0;if(i<0)throw RangeError("targetStart out of bounds");if(s<0||s>=this.length)throw RangeError("Index out of range");if(o<0)throw RangeError("sourceEnd out of bounds");o>this.length&&(o=this.length),e.length-i<o-s&&(o=e.length-i+s);let l=o-s;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(i,s,o):Uint8Array.prototype.set.call(e,this.subarray(s,o),i),l},Buffer.prototype.fill=function(e,i,s,o){let l;if("string"==typeof e){if("string"==typeof i?(o=i,i=0,s=this.length):"string"==typeof s&&(o=s,s=this.length),void 0!==o&&"string"!=typeof o)throw TypeError("encoding must be a string");if("string"==typeof o&&!Buffer.isEncoding(o))throw TypeError("Unknown encoding: "+o);if(1===e.length){let i=e.charCodeAt(0);("utf8"===o&&i<128||"latin1"===o)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(i<0||this.length<i||this.length<s)throw RangeError("Out of range index");if(s<=i)return this;if(i>>>=0,s=void 0===s?this.length:s>>>0,e||(e=0),"number"==typeof e)for(l=i;l<s;++l)this[l]=e;else{let h=Buffer.isBuffer(e)?e:Buffer.from(e,o),d=h.length;if(0===d)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(l=0;l<s-i;++l)this[l+i]=h[l%d]}return this};let d={};function E(e,i,s){d[e]=class extends s{constructor(){super(),Object.defineProperty(this,"message",{value:i.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function addNumericalSeparator(e){let i="",s=e.length,o="-"===e[0]?1:0;for(;s>=o+4;s-=3)i=`_${e.slice(s-3,s)}${i}`;return`${e.slice(0,s)}${i}`}function checkIntBI(e,i,s,o,l,h){if(e>s||e<i){let o;let l="bigint"==typeof i?"n":"";throw o=h>3?0===i||i===BigInt(0)?`>= 0${l} and < 2${l} ** ${(h+1)*8}${l}`:`>= -(2${l} ** ${(h+1)*8-1}${l}) and < 2 ** ${(h+1)*8-1}${l}`:`>= ${i}${l} and <= ${s}${l}`,new d.ERR_OUT_OF_RANGE("value",o,e)}validateNumber(l,"offset"),(void 0===o[l]||void 0===o[l+h])&&boundsError(l,o.length-(h+1))}function validateNumber(e,i){if("number"!=typeof e)throw new d.ERR_INVALID_ARG_TYPE(i,"number",e)}function boundsError(e,i,s){if(Math.floor(e)!==e)throw validateNumber(e,s),new d.ERR_OUT_OF_RANGE(s||"offset","an integer",e);if(i<0)throw new d.ERR_BUFFER_OUT_OF_BOUNDS;throw new d.ERR_OUT_OF_RANGE(s||"offset",`>= ${s?1:0} and <= ${i}`,e)}E("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),E("ERR_INVALID_ARG_TYPE",function(e,i){return`The "${e}" argument must be of type number. Received type ${typeof i}`},TypeError),E("ERR_OUT_OF_RANGE",function(e,i,s){let o=`The value of "${e}" is out of range.`,l=s;return Number.isInteger(s)&&Math.abs(s)>4294967296?l=addNumericalSeparator(String(s)):"bigint"==typeof s&&(l=String(s),(s>BigInt(2)**BigInt(32)||s<-(BigInt(2)**BigInt(32)))&&(l=addNumericalSeparator(l)),l+="n"),o+=` It must be ${i}. Received ${l}`},RangeError);let f=/[^+/0-9A-Za-z-_]/g;function utf8ToBytes(e,i){let s;i=i||1/0;let o=e.length,l=null,h=[];for(let d=0;d<o;++d){if((s=e.charCodeAt(d))>55295&&s<57344){if(!l){if(s>56319||d+1===o){(i-=3)>-1&&h.push(239,191,189);continue}l=s;continue}if(s<56320){(i-=3)>-1&&h.push(239,191,189),l=s;continue}s=(l-55296<<10|s-56320)+65536}else l&&(i-=3)>-1&&h.push(239,191,189);if(l=null,s<128){if((i-=1)<0)break;h.push(s)}else if(s<2048){if((i-=2)<0)break;h.push(s>>6|192,63&s|128)}else if(s<65536){if((i-=3)<0)break;h.push(s>>12|224,s>>6&63|128,63&s|128)}else if(s<1114112){if((i-=4)<0)break;h.push(s>>18|240,s>>12&63|128,s>>6&63|128,63&s|128)}else throw Error("Invalid code point")}return h}function base64ToBytes(e){return o.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(f,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function blitBuffer(e,i,s,o){let l;for(l=0;l<o&&!(l+s>=i.length)&&!(l>=e.length);++l)i[l+s]=e[l];return l}function isInstance(e,i){return e instanceof i||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===i.name}let _=function(){let e="0123456789abcdef",i=Array(256);for(let s=0;s<16;++s){let o=16*s;for(let l=0;l<16;++l)i[o+l]=e[s]+e[l]}return i}();function defineBigIntMethod(e){return"undefined"==typeof BigInt?BufferBigIntNotDefined:e}function BufferBigIntNotDefined(){throw Error("BigInt not supported")}},8898:function(e,i){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */i.read=function(e,i,s,o,l){var h,d,f=8*l-o-1,_=(1<<f)-1,g=_>>1,w=-7,b=s?l-1:0,k=s?-1:1,O=e[i+b];for(b+=k,h=O&(1<<-w)-1,O>>=-w,w+=f;w>0;h=256*h+e[i+b],b+=k,w-=8);for(d=h&(1<<-w)-1,h>>=-w,w+=o;w>0;d=256*d+e[i+b],b+=k,w-=8);if(0===h)h=1-g;else{if(h===_)return d?NaN:(O?-1:1)*(1/0);d+=Math.pow(2,o),h-=g}return(O?-1:1)*d*Math.pow(2,h-o)},i.write=function(e,i,s,o,l,h){var d,f,_,g=8*h-l-1,w=(1<<g)-1,b=w>>1,k=23===l?5960464477539062e-23:0,O=o?0:h-1,q=o?1:-1,j=i<0||0===i&&1/i<0?1:0;for(isNaN(i=Math.abs(i))||i===1/0?(f=isNaN(i)?1:0,d=w):(d=Math.floor(Math.log(i)/Math.LN2),i*(_=Math.pow(2,-d))<1&&(d--,_*=2),d+b>=1?i+=k/_:i+=k*Math.pow(2,1-b),i*_>=2&&(d++,_/=2),d+b>=w?(f=0,d=w):d+b>=1?(f=(i*_-1)*Math.pow(2,l),d+=b):(f=i*Math.pow(2,b-1)*Math.pow(2,l),d=0));l>=8;e[s+O]=255&f,O+=q,f/=256,l-=8);for(d=d<<l|f,g+=l;g>0;e[s+O]=255&d,O+=q,d/=256,g-=8);e[s+O-q]|=128*j}},4284:function(e,i,s){"use strict";var o,l;e.exports=(null==(o=s.g.process)?void 0:o.env)&&"object"==typeof(null==(l=s.g.process)?void 0:l.env)?s.g.process:s(6118)},6321:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return s(4096)}])},9138:function(e,i,s){"use strict";s.d(i,{I:function(){return f},db:function(){return _},V:function(){return g}});var o=s(3042);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,o.KN)("firebase","11.1.0","app");var l=s(6022),h=s(2696);let d=(0,o.C6)().length?(0,o.C6)()[0]:(0,o.ZF)({apiKey:"AIzaSyCW1J7vqYyhSCaB4egJlmwFj0b1Efyd75I",authDomain:"sda-client-portal.firebaseapp.com",projectId:"sda-client-portal",storageBucket:"sda-client-portal.firebasestorage.app",messagingSenderId:"608424811993",appId:"1:608424811993:web:da7b03d4fc620cb65a4dc8"}),f=(0,l.v0)(d),_=(0,h.ad)(d),g=new l.hJ;g.setCustomParameters({prompt:"select_account",hd:"sandlerdigitaladvisory.com"}),console.log("Firebase initialized successfully")},4577:function(e,i,s){"use strict";s.d(i,{H:function(){return AuthProvider},a:function(){return useAuth}});var o=s(4246),l=s(7378),h=s(9138),d=s(6022),f=s(2696);let _=(0,l.createContext)();function useAuth(){return(0,l.useContext)(_)}function AuthProvider(e){let{children:i}=e,[s,g]=(0,l.useState)(null),[w,b]=(0,l.useState)(!0);async function login(e,i){let s=await (0,d.e5)(h.I,e,i),o=(0,f.JU)(h.db,"clients",s.user.uid),l=await (0,f.QT)(o);return l.exists()||await (0,f.pl)(o,{email:e,projects:[{name:"Initial Project",status:"Planning",progress:0}],documents:[],meetings:[]}),s}return(0,l.useEffect)(()=>{let e=(0,d.Aj)(h.I,e=>{g(e),b(!1)});return e},[]),(0,o.jsx)(_.Provider,{value:{user:s,login,logout:function(){return(0,d.w7)(h.I)}},children:!w&&i})}},4096:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return App}});var o=s(4246),l=s(8038),h=s.n(l),d=s(4577);function App(e){let{Component:i,pageProps:s}=e;return(0,o.jsxs)(d.H,{children:[(0,o.jsxs)(h(),{children:[(0,o.jsx)("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),(0,o.jsx)(i,{...s})]})}s(6142),s(9138)},6142:function(){},6118:function(e){!function(){var i={229:function(e){var i,s,o,l=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(i===setTimeout)return setTimeout(e,0);if((i===defaultSetTimout||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(s){try{return i.call(null,e,0)}catch(s){return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){i=defaultSetTimout}try{s="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){s=defaultClearTimeout}}();var h=[],d=!1,f=-1;function cleanUpNextTick(){d&&o&&(d=!1,o.length?h=o.concat(h):f=-1,h.length&&drainQueue())}function drainQueue(){if(!d){var e=runTimeout(cleanUpNextTick);d=!0;for(var i=h.length;i;){for(o=h,h=[];++f<i;)o&&o[f].run();f=-1,i=h.length}o=null,d=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===defaultClearTimeout||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(i){try{return s.call(null,e)}catch(i){return s.call(this,e)}}}(e)}}function Item(e,i){this.fun=e,this.array=i}function noop(){}l.nextTick=function(e){var i=Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)i[s-1]=arguments[s];h.push(new Item(e,i)),1!==h.length||d||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=noop,l.addListener=noop,l.once=noop,l.off=noop,l.removeListener=noop,l.removeAllListeners=noop,l.emit=noop,l.prependListener=noop,l.prependOnceListener=noop,l.listeners=function(e){return[]},l.binding=function(e){throw Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(e){throw Error("process.chdir is not supported")},l.umask=function(){return 0}}},s={};function __nccwpck_require__(e){var o=s[e];if(void 0!==o)return o.exports;var l=s[e]={exports:{}},h=!0;try{i[e](l,l.exports,__nccwpck_require__),h=!1}finally{h&&delete s[e]}return l.exports}__nccwpck_require__.ab="//";var o=__nccwpck_require__(229);e.exports=o}()},8038:function(e,i,s){e.exports=s(4069)},3042:function(e,i,s){"use strict";let o,l;s.d(i,{Jn:function(){return eh},qX:function(){return _getProvider},rh:function(){return _isFirebaseServerApp},Xd:function(){return _registerComponent},Mq:function(){return getApp},C6:function(){return getApps},ZF:function(){return initializeApp},KN:function(){return registerVersion}});var h,d=s(7087),f=s(4959),_=s(9901);let instanceOfAny=(e,i)=>i.some(i=>e instanceof i),g=new WeakMap,w=new WeakMap,b=new WeakMap,k=new WeakMap,O=new WeakMap,q={get(e,i,s){if(e instanceof IDBTransaction){if("done"===i)return w.get(e);if("objectStoreNames"===i)return e.objectStoreNames||b.get(e);if("store"===i)return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return wrap_idb_value_wrap(e[i])},set:(e,i,s)=>(e[i]=s,!0),has:(e,i)=>e instanceof IDBTransaction&&("done"===i||"store"===i)||i in e};function wrap_idb_value_wrap(e){var i;if(e instanceof IDBRequest)return function(e){let i=new Promise((i,s)=>{let unlisten=()=>{e.removeEventListener("success",success),e.removeEventListener("error",error)},success=()=>{i(wrap_idb_value_wrap(e.result)),unlisten()},error=()=>{s(e.error),unlisten()};e.addEventListener("success",success),e.addEventListener("error",error)});return i.then(i=>{i instanceof IDBCursor&&g.set(i,e)}).catch(()=>{}),O.set(i,e),i}(e);if(k.has(e))return k.get(e);let s="function"==typeof(i=e)?i!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(i)?function(...e){return i.apply(unwrap(this),e),wrap_idb_value_wrap(g.get(this))}:function(...e){return wrap_idb_value_wrap(i.apply(unwrap(this),e))}:function(e,...s){let o=i.call(unwrap(this),e,...s);return b.set(o,e.sort?e.sort():[e]),wrap_idb_value_wrap(o)}:(i instanceof IDBTransaction&&function(e){if(w.has(e))return;let i=new Promise((i,s)=>{let unlisten=()=>{e.removeEventListener("complete",complete),e.removeEventListener("error",error),e.removeEventListener("abort",error)},complete=()=>{i(),unlisten()},error=()=>{s(e.error||new DOMException("AbortError","AbortError")),unlisten()};e.addEventListener("complete",complete),e.addEventListener("error",error),e.addEventListener("abort",error)});w.set(e,i)}(i),instanceOfAny(i,o||(o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(i,q):i;return s!==e&&(k.set(e,s),O.set(s,e)),s}let unwrap=e=>O.get(e),j=["get","getKey","getAll","getAllKeys","count"],$=["put","add","delete","clear"],ee=new Map;function getMethod(e,i){if(!(e instanceof IDBDatabase&&!(i in e)&&"string"==typeof i))return;if(ee.get(i))return ee.get(i);let s=i.replace(/FromIndex$/,""),o=i!==s,l=$.includes(s);if(!(s in(o?IDBIndex:IDBObjectStore).prototype)||!(l||j.includes(s)))return;let method=async function(e,...i){let h=this.transaction(e,l?"readwrite":"readonly"),d=h.store;return o&&(d=d.index(i.shift())),(await Promise.all([d[s](...i),l&&h.done]))[0]};return ee.set(i,method),method}q={...h=q,get:(e,i,s)=>getMethod(e,i)||h.get(e,i,s),has:(e,i)=>!!getMethod(e,i)||h.has(e,i)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PlatformLoggerServiceImpl=class PlatformLoggerServiceImpl{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!function(e){let i=e.getComponent();return(null==i?void 0:i.type)==="VERSION"}(e))return null;{let i=e.getImmediate();return`${i.library}/${i.version}`}}).filter(e=>e).join(" ")}};let et="@firebase/app",er="0.10.17",en=new f.Yd("@firebase/app"),ei="[DEFAULT]",es={[et]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},eo=new Map,ea=new Map,el=new Map;function _addComponent(e,i){try{e.container.addComponent(i)}catch(s){en.debug(`Component ${i.name} failed to register with FirebaseApp ${e.name}`,s)}}function _registerComponent(e){let i=e.name;if(el.has(i))return en.debug(`There were multiple attempts to register component ${i}.`),!1;for(let s of(el.set(i,e),eo.values()))_addComponent(s,e);for(let i of ea.values())_addComponent(i,e);return!0}function _getProvider(e,i){let s=e.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),e.container.getProvider(i)}function _isFirebaseServerApp(e){return void 0!==e.settings}let eu=new _.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FirebaseAppImpl=class FirebaseAppImpl{constructor(e,i,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new d.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw eu.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh="11.1.0";function initializeApp(e,i={}){let s=e;if("object"!=typeof i){let e=i;i={name:e}}let o=Object.assign({name:ei,automaticDataCollectionEnabled:!1},i),l=o.name;if("string"!=typeof l||!l)throw eu.create("bad-app-name",{appName:String(l)});if(s||(s=(0,_.aH)()),!s)throw eu.create("no-options");let h=eo.get(l);if(h){if((0,_.vZ)(s,h.options)&&(0,_.vZ)(o,h.config))return h;throw eu.create("duplicate-app",{appName:l})}let f=new d.H0(l);for(let e of el.values())f.addComponent(e);let g=new FirebaseAppImpl(s,o,f);return eo.set(l,g),g}function getApp(e=ei){let i=eo.get(e);if(!i&&e===ei&&(0,_.aH)())return initializeApp();if(!i)throw eu.create("no-app",{appName:e});return i}function getApps(){return Array.from(eo.values())}function registerVersion(e,i,s){var o;let l=null!==(o=es[e])&&void 0!==o?o:e;s&&(l+=`-${s}`);let h=l.match(/\s|\//),f=i.match(/\s|\//);if(h||f){let e=[`Unable to register library "${l}" with version "${i}":`];h&&e.push(`library name "${l}" contains illegal characters (whitespace or "/")`),h&&f&&e.push("and"),f&&e.push(`version name "${i}" contains illegal characters (whitespace or "/")`),en.warn(e.join(" "));return}_registerComponent(new d.wA(`${l}-version`,()=>({library:l,version:i}),"VERSION"))}let ef="firebase-heartbeat-store",e_=null;function getDbPromise(){return e_||(e_=(function(e,i,{blocked:s,upgrade:o,blocking:l,terminated:h}={}){let d=indexedDB.open(e,1),f=wrap_idb_value_wrap(d);return o&&d.addEventListener("upgradeneeded",e=>{o(wrap_idb_value_wrap(d.result),e.oldVersion,e.newVersion,wrap_idb_value_wrap(d.transaction),e)}),s&&d.addEventListener("blocked",e=>s(e.oldVersion,e.newVersion,e)),f.then(e=>{h&&e.addEventListener("close",()=>h()),l&&e.addEventListener("versionchange",e=>l(e.oldVersion,e.newVersion,e))}).catch(()=>{}),f})("firebase-heartbeat-database",0,{upgrade:(e,i)=>{if(0===i)try{e.createObjectStore(ef)}catch(e){console.warn(e)}}}).catch(e=>{throw eu.create("idb-open",{originalErrorMessage:e.message})})),e_}async function readHeartbeatsFromIndexedDB(e){try{let i=await getDbPromise(),s=i.transaction(ef),o=await s.objectStore(ef).get(computeKey(e));return await s.done,o}catch(e){if(e instanceof _.ZR)en.warn(e.message);else{let i=eu.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});en.warn(i.message)}}}async function writeHeartbeatsToIndexedDB(e,i){try{let s=await getDbPromise(),o=s.transaction(ef,"readwrite"),l=o.objectStore(ef);await l.put(i,computeKey(e)),await o.done}catch(e){if(e instanceof _.ZR)en.warn(e.message);else{let i=eu.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});en.warn(i.message)}}}function computeKey(e){return`${e.name}!${e.options.appId}`}let HeartbeatServiceImpl=class HeartbeatServiceImpl{constructor(e){this.container=e,this._heartbeatsCache=null;let i=this.container.getProvider("app").getImmediate();this._storage=new HeartbeatStorageImpl(i),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,i;try{let s=this.container.getProvider("platform-logger").getImmediate(),o=s.getPlatformInfoString(),l=getUTCDateString();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(i=this._heartbeatsCache)||void 0===i?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(e=>e.date===l))return;return this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let i=new Date(e.date).valueOf(),s=Date.now();return s-i<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(e){en.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let i=getUTCDateString(),{heartbeatsToSend:s,unsentEntries:o}=function(e,i=1024){let s=[],o=e.slice();for(let l of e){let e=s.find(e=>e.agent===l.agent);if(e){if(e.dates.push(l.date),countBytes(s)>i){e.dates.pop();break}}else if(s.push({agent:l.agent,dates:[l.date]}),countBytes(s)>i){s.pop();break}o=o.slice(1)}return{heartbeatsToSend:s,unsentEntries:o}}(this._heartbeatsCache.heartbeats),l=(0,_.L)(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=i,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(e){return en.warn(e),""}}};function getUTCDateString(){let e=new Date;return e.toISOString().substring(0,10)}let HeartbeatStorageImpl=class HeartbeatStorageImpl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,_.hl)()&&(0,_.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await readHeartbeatsFromIndexedDB(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var i;let s=await this._canUseIndexedDBPromise;if(s){let s=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var i;let s=await this._canUseIndexedDBPromise;if(s){let s=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}}};function countBytes(e){return(0,_.L)(JSON.stringify({version:2,heartbeats:e})).length}_registerComponent(new d.wA("platform-logger",e=>new PlatformLoggerServiceImpl(e),"PRIVATE")),_registerComponent(new d.wA("heartbeat",e=>new HeartbeatServiceImpl(e),"PRIVATE")),registerVersion(et,er,""),registerVersion(et,er,"esm2017"),registerVersion("fire-js","")},7087:function(e,i,s){"use strict";s.d(i,{H0:function(){return ComponentContainer},wA:function(){return Component}});var o=s(9901);let Component=class Component{constructor(e,i,s){this.name=e,this.instanceFactory=i,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Provider=class Provider{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){let e=new o.BH;if(this.instancesDeferred.set(i,e),this.isInitialized(i)||this.shouldAutoInitialize())try{let s=this.getOrInitializeService({instanceIdentifier:i});s&&e.resolve(s)}catch(e){}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;let s=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),o=null!==(i=null==e?void 0:e.optional)&&void 0!==i&&i;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(e){if(o)return null;throw e}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:l})}catch(e){}for(let[e,i]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:s});i.resolve(e)}catch(e){}}}}clearInstance(e=l){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=l){return this.instances.has(e)}getOptions(e=l){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:i={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let o=this.getOrInitializeService({instanceIdentifier:s,options:i});for(let[e,i]of this.instancesDeferred.entries()){let l=this.normalizeInstanceIdentifier(e);s===l&&i.resolve(o)}return o}onInit(e,i){var s;let o=this.normalizeInstanceIdentifier(i),l=null!==(s=this.onInitCallbacks.get(o))&&void 0!==s?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);let h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,i){let s=this.onInitCallbacks.get(i);if(s)for(let o of s)try{o(e,i)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:e===l?void 0:e,options:i}),this.instances.set(e,s),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch(e){}return s||null}normalizeInstanceIdentifier(e=l){return this.component?this.component.multipleInstances?e:l:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ComponentContainer=class ComponentContainer{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let i=this.getProvider(e.name);if(i.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){let i=this.getProvider(e.name);i.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let i=new Provider(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}},4959:function(e,i,s){"use strict";var o,l;s.d(i,{Yd:function(){return Logger},in:function(){return o}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h=[];(l=o||(o={}))[l.DEBUG=0]="DEBUG",l[l.VERBOSE=1]="VERBOSE",l[l.INFO=2]="INFO",l[l.WARN=3]="WARN",l[l.ERROR=4]="ERROR",l[l.SILENT=5]="SILENT";let d={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},f=o.INFO,_={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},defaultLogHandler=(e,i,...s)=>{if(i<e.logLevel)return;let o=new Date().toISOString(),l=_[i];if(l)console[l](`[${o}]  ${e.name}:`,...s);else throw Error(`Attempted to log a message with an invalid logType (value: ${i})`)};let Logger=class Logger{constructor(e){this.name=e,this._logLevel=f,this._logHandler=defaultLogHandler,this._userLogHandler=null,h.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?d[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}},6022:function(e,i,s){"use strict";s.d(i,{hJ:function(){return GoogleAuthProvider},Xb:function(){return createUserWithEmailAndPassword},v0:function(){return getAuth},Aj:function(){return onAuthStateChanged},e5:function(){return signInWithEmailAndPassword},rh:function(){return signInWithPopup},w7:function(){return signOut}});var o,l=s(3042),h=s(9901),d=s(4959);function __rest(e,i){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>i.indexOf(o)&&(s[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,o=Object.getOwnPropertySymbols(e);l<o.length;l++)0>i.indexOf(o[l])&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(s[o[l]]=e[o[l]]);return s}"function"==typeof SuppressedError&&SuppressedError;var f=s(7087);function _prodErrorMap(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let _=new h.LL("auth","Firebase",_prodErrorMap()),g=new d.Yd("@firebase/auth");function _logError(e,...i){g.logLevel<=d.in.ERROR&&g.error(`Auth (${l.Jn}): ${e}`,...i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _fail(e,...i){throw createErrorInternal(e,...i)}function _createError(e,...i){return createErrorInternal(e,...i)}function _errorWithCustomMessage(e,i,s){let o=Object.assign(Object.assign({},_prodErrorMap()),{[i]:s}),l=new h.LL("auth","Firebase",o);return l.create(i,{appName:e.name})}function _serverAppCurrentUserOperationNotSupportedError(e){return _errorWithCustomMessage(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function createErrorInternal(e,...i){if("string"!=typeof e){let s=i[0],o=[...i.slice(1)];return o[0]&&(o[0].appName=e.name),e._errorFactory.create(s,...o)}return _.create(e,...i)}function _assert(e,i,...s){if(!e)throw createErrorInternal(i,...s)}function debugFail(e){let i="INTERNAL ASSERTION FAILED: "+e;throw _logError(i),Error(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getCurrentUrl(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function _getCurrentScheme(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Delay=class Delay{constructor(e,i){this.shortDelay=e,this.longDelay=i,i>e||debugFail("Short delay should be less than long delay!"),this.isMobile=(0,h.uI)()||(0,h.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===_getCurrentScheme()||"https:"===_getCurrentScheme()||(0,h.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _emulatorUrl(e,i){e.emulator||debugFail("Emulator should always be set here");let{url:s}=e.emulator;return i?`${s}${i.startsWith("/")?i.slice(1):i}`:s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FetchProvider=class FetchProvider{static initialize(e,i,s){this.fetchImpl=e,i&&(this.headersImpl=i),s&&(this.responseImpl=s)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let w={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},b=new Delay(3e4,6e4);function _addTidIfNecessary(e,i){return e.tenantId&&!i.tenantId?Object.assign(Object.assign({},i),{tenantId:e.tenantId}):i}async function _performApiRequest(e,i,s,o,l={}){return _performFetchWithErrorHandling(e,l,async()=>{let l={},d={};o&&("GET"===i?d=o:l={body:JSON.stringify(o)});let f=(0,h.xO)(Object.assign({key:e.config.apiKey},d)).slice(1),_=await e._getAdditionalHeaders();_["Content-Type"]="application/json",e.languageCode&&(_["X-Firebase-Locale"]=e.languageCode);let g=Object.assign({method:i,headers:_},l);return(0,h.L_)()||(g.referrerPolicy="no-referrer"),FetchProvider.fetch()(_getFinalTarget(e,e.config.apiHost,s,f),g)})}async function _performFetchWithErrorHandling(e,i,s){e._canInitEmulator=!1;let o=Object.assign(Object.assign({},w),i);try{let i=new NetworkTimeout(e),l=await Promise.race([s(),i.promise]);i.clearNetworkTimeout();let h=await l.json();if("needConfirmation"in h)throw _makeTaggedError(e,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{let i=l.ok?h.errorMessage:h.error.message,[s,d]=i.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===s)throw _makeTaggedError(e,"credential-already-in-use",h);if("EMAIL_EXISTS"===s)throw _makeTaggedError(e,"email-already-in-use",h);if("USER_DISABLED"===s)throw _makeTaggedError(e,"user-disabled",h);let f=o[s]||s.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw _errorWithCustomMessage(e,f,d);_fail(e,f)}}catch(i){if(i instanceof h.ZR)throw i;_fail(e,"network-request-failed",{message:String(i)})}}async function _performSignInRequest(e,i,s,o,l={}){let h=await _performApiRequest(e,i,s,o,l);return"mfaPendingCredential"in h&&_fail(e,"multi-factor-auth-required",{_serverResponse:h}),h}function _getFinalTarget(e,i,s,o){let l=`${i}${s}?${o}`;return e.config.emulator?_emulatorUrl(e.config,l):`${e.config.apiScheme}://${l}`}let NetworkTimeout=class NetworkTimeout{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,i)=>{this.timer=setTimeout(()=>i(_createError(this.auth,"network-request-failed")),b.get())})}};function _makeTaggedError(e,i,s){let o={appName:e.name};s.email&&(o.email=s.email),s.phoneNumber&&(o.phoneNumber=s.phoneNumber);let l=_createError(e,i,o);return l.customData._tokenResponse=s,l}function isEnterprise(e){return void 0!==e&&void 0!==e.enterprise}let RecaptchaConfig=class RecaptchaConfig{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let i of this.recaptchaEnforcementState)if(i.provider&&i.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(i.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function getRecaptchaConfig(e,i){return _performApiRequest(e,"GET","/v2/recaptchaConfig",_addTidIfNecessary(e,i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function deleteAccount(e,i){return _performApiRequest(e,"POST","/v1/accounts:delete",i)}async function getAccountInfo(e,i){return _performApiRequest(e,"POST","/v1/accounts:lookup",i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function utcTimestampToDateString(e){if(e)try{let i=new Date(Number(e));if(!isNaN(i.getTime()))return i.toUTCString()}catch(e){}}async function getIdTokenResult(e,i=!1){let s=(0,h.m9)(e),o=await s.getIdToken(i),l=_parseToken(o);_assert(l&&l.exp&&l.auth_time&&l.iat,s.auth,"internal-error");let d="object"==typeof l.firebase?l.firebase:void 0,f=null==d?void 0:d.sign_in_provider;return{claims:l,token:o,authTime:utcTimestampToDateString(secondsStringToMilliseconds(l.auth_time)),issuedAtTime:utcTimestampToDateString(secondsStringToMilliseconds(l.iat)),expirationTime:utcTimestampToDateString(secondsStringToMilliseconds(l.exp)),signInProvider:f||null,signInSecondFactor:(null==d?void 0:d.sign_in_second_factor)||null}}function secondsStringToMilliseconds(e){return 1e3*Number(e)}function _parseToken(e){let[i,s,o]=e.split(".");if(void 0===i||void 0===s||void 0===o)return _logError("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,h.tV)(s);if(!e)return _logError("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return _logError("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function _tokenExpiresIn(e){let i=_parseToken(e);return _assert(i,"internal-error"),_assert(void 0!==i.exp,"internal-error"),_assert(void 0!==i.iat,"internal-error"),Number(i.exp)-Number(i.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _logoutIfInvalidated(e,i,s=!1){if(s)return i;try{return await i}catch(i){throw i instanceof h.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ProactiveRefresh=class ProactiveRefresh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;let e=null!==(i=this.user.stsTokenManager.expirationTime)&&void 0!==i?i:0,s=e-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;let i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let UserMetadata=class UserMetadata{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=utcTimestampToDateString(this.lastLoginAt),this.creationTime=utcTimestampToDateString(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _reloadWithoutSaving(e){var i;let s=e.auth,o=await e.getIdToken(),l=await _logoutIfInvalidated(e,getAccountInfo(s,{idToken:o}));_assert(null==l?void 0:l.users.length,s,"internal-error");let h=l.users[0];e._notifyReloadListener(h);let d=(null===(i=h.providerUserInfo)||void 0===i?void 0:i.length)?extractProviderData(h.providerUserInfo):[],f=function(e,i){let s=e.filter(e=>!i.some(i=>i.providerId===e.providerId));return[...s,...i]}(e.providerData,d),_=e.isAnonymous,g=!(e.email&&h.passwordHash)&&!(null==f?void 0:f.length),w={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:f,metadata:new UserMetadata(h.createdAt,h.lastLoginAt),isAnonymous:!!_&&g};Object.assign(e,w)}async function reload(e){let i=(0,h.m9)(e);await _reloadWithoutSaving(i),await i.auth._persistUserIfCurrent(i),i.auth._notifyListenersIfCurrent(i)}function extractProviderData(e){return e.map(e=>{var{providerId:i}=e,s=__rest(e,["providerId"]);return{providerId:i,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function requestStsToken(e,i){let s=await _performFetchWithErrorHandling(e,{},async()=>{let s=(0,h.xO)({grant_type:"refresh_token",refresh_token:i}).slice(1),{tokenApiHost:o,apiKey:l}=e.config,d=_getFinalTarget(e,o,"/v1/token",`key=${l}`),f=await e._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",FetchProvider.fetch()(d,{method:"POST",headers:f,body:s})});return{accessToken:s.access_token,expiresIn:s.expires_in,refreshToken:s.refresh_token}}async function revokeToken(e,i){return _performApiRequest(e,"POST","/v2/accounts:revokeToken",_addTidIfNecessary(e,i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let StsTokenManager=class StsTokenManager{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_assert(e.idToken,"internal-error"),_assert(void 0!==e.idToken,"internal-error"),_assert(void 0!==e.refreshToken,"internal-error");let i="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):_tokenExpiresIn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){_assert(0!==e.length,"internal-error");let i=_tokenExpiresIn(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return i||!this.accessToken||this.isExpired?(_assert(this.refreshToken,e,"user-token-expired"),this.refreshToken)?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){let{accessToken:s,refreshToken:o,expiresIn:l}=await requestStsToken(e,i);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,i,s){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*s}static fromJSON(e,i){let{refreshToken:s,accessToken:o,expirationTime:l}=i,h=new StsTokenManager;return s&&(_assert("string"==typeof s,"internal-error",{appName:e}),h.refreshToken=s),o&&(_assert("string"==typeof o,"internal-error",{appName:e}),h.accessToken=o),l&&(_assert("number"==typeof l,"internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new StsTokenManager,this.toJSON())}_performRefresh(){return debugFail("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function assertStringOrUndefined(e,i){_assert("string"==typeof e||void 0===e,"internal-error",{appName:i})}let UserImpl=class UserImpl{constructor(e){var{uid:i,auth:s,stsTokenManager:o}=e,l=__rest(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ProactiveRefresh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new UserMetadata(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){let i=await _logoutIfInvalidated(this,this.stsTokenManager.getToken(this.auth,e));return _assert(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return getIdTokenResult(this,e)}reload(){return reload(this)}_assign(e){this!==e&&(_assert(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let i=new UserImpl(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){_assert(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),i&&await _reloadWithoutSaving(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if((0,l.rh)(this.auth.app))return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this.auth));let e=await this.getIdToken();return await _logoutIfInvalidated(this,deleteAccount(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var s,o,l,h,d,f,_,g;let w=null!==(s=i.displayName)&&void 0!==s?s:void 0,b=null!==(o=i.email)&&void 0!==o?o:void 0,k=null!==(l=i.phoneNumber)&&void 0!==l?l:void 0,O=null!==(h=i.photoURL)&&void 0!==h?h:void 0,q=null!==(d=i.tenantId)&&void 0!==d?d:void 0,j=null!==(f=i._redirectEventId)&&void 0!==f?f:void 0,$=null!==(_=i.createdAt)&&void 0!==_?_:void 0,ee=null!==(g=i.lastLoginAt)&&void 0!==g?g:void 0,{uid:et,emailVerified:er,isAnonymous:en,providerData:ei,stsTokenManager:es}=i;_assert(et&&es,e,"internal-error");let eo=StsTokenManager.fromJSON(this.name,es);_assert("string"==typeof et,e,"internal-error"),assertStringOrUndefined(w,e.name),assertStringOrUndefined(b,e.name),_assert("boolean"==typeof er,e,"internal-error"),_assert("boolean"==typeof en,e,"internal-error"),assertStringOrUndefined(k,e.name),assertStringOrUndefined(O,e.name),assertStringOrUndefined(q,e.name),assertStringOrUndefined(j,e.name),assertStringOrUndefined($,e.name),assertStringOrUndefined(ee,e.name);let ea=new UserImpl({uid:et,auth:e,email:b,emailVerified:er,displayName:w,isAnonymous:en,photoURL:O,phoneNumber:k,tenantId:q,stsTokenManager:eo,createdAt:$,lastLoginAt:ee});return ei&&Array.isArray(ei)&&(ea.providerData=ei.map(e=>Object.assign({},e))),j&&(ea._redirectEventId=j),ea}static async _fromIdTokenResponse(e,i,s=!1){let o=new StsTokenManager;o.updateFromServerResponse(i);let l=new UserImpl({uid:i.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await _reloadWithoutSaving(l),l}static async _fromGetAccountInfoResponse(e,i,s){let o=i.users[0];_assert(void 0!==o.localId,"internal-error");let l=void 0!==o.providerUserInfo?extractProviderData(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(null==l?void 0:l.length),d=new StsTokenManager;d.updateFromIdToken(s);let f=new UserImpl({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new UserMetadata(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(null==l?void 0:l.length)};return Object.assign(f,_),f}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k=new Map;function _getInstance(e){e instanceof Function||debugFail("Expected a class definition");let i=k.get(e);return i?i instanceof e||debugFail("Instance stored in cache mismatched with class"):(i=new e,k.set(e,i)),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let InMemoryPersistence=class InMemoryPersistence{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){let i=this.storage[e];return void 0===i?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _persistenceKeyName(e,i,s){return`firebase:${e}:${i}:${s}`}InMemoryPersistence.type="NONE";let PersistenceUserManager=class PersistenceUserManager{constructor(e,i,s){this.persistence=e,this.auth=i,this.userKey=s;let{config:o,name:l}=this.auth;this.fullUserKey=_persistenceKeyName(this.userKey,o.apiKey,l),this.fullPersistenceKey=_persistenceKeyName("persistence",o.apiKey,l),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?UserImpl._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,s="authUser"){if(!i.length)return new PersistenceUserManager(_getInstance(InMemoryPersistence),e,s);let o=(await Promise.all(i.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),l=o[0]||_getInstance(InMemoryPersistence),h=_persistenceKeyName(s,e.config.apiKey,e.name),d=null;for(let s of i)try{let i=await s._get(h);if(i){let o=UserImpl._fromJSON(e,i);s!==l&&(d=o),l=s;break}}catch(e){}let f=o.filter(e=>e._shouldAllowMigration);return l._shouldAllowMigration&&f.length&&(l=f[0],d&&await l._set(h,d.toJSON()),await Promise.all(i.map(async e=>{if(e!==l)try{await e._remove(h)}catch(e){}}))),new PersistenceUserManager(l,e,s)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getBrowserName(e){let i=e.toLowerCase();if(i.includes("opera/")||i.includes("opr/")||i.includes("opios/"))return"Opera";if(_isIEMobile(i))return"IEMobile";if(i.includes("msie")||i.includes("trident/"))return"IE";{if(i.includes("edge/"))return"Edge";if(_isFirefox(i))return"Firefox";if(i.includes("silk/"))return"Silk";if(_isBlackBerry(i))return"Blackberry";if(_isWebOS(i))return"Webos";if(_isSafari(i))return"Safari";if((i.includes("chrome/")||_isChromeIOS(i))&&!i.includes("edge/"))return"Chrome";if(_isAndroid(i))return"Android";let s=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==s?void 0:s.length)===2)return s[1]}return"Other"}function _isFirefox(e=(0,h.z$)()){return/firefox\//i.test(e)}function _isSafari(e=(0,h.z$)()){let i=e.toLowerCase();return i.includes("safari/")&&!i.includes("chrome/")&&!i.includes("crios/")&&!i.includes("android")}function _isChromeIOS(e=(0,h.z$)()){return/crios\//i.test(e)}function _isIEMobile(e=(0,h.z$)()){return/iemobile/i.test(e)}function _isAndroid(e=(0,h.z$)()){return/android/i.test(e)}function _isBlackBerry(e=(0,h.z$)()){return/blackberry/i.test(e)}function _isWebOS(e=(0,h.z$)()){return/webos/i.test(e)}function _isIOS(e=(0,h.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function _isMobileBrowser(e=(0,h.z$)()){return _isIOS(e)||_isAndroid(e)||_isWebOS(e)||_isBlackBerry(e)||/windows phone/i.test(e)||_isIEMobile(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getClientVersion(e,i=[]){let s;switch(e){case"Browser":s=_getBrowserName((0,h.z$)());break;case"Worker":s=`${_getBrowserName((0,h.z$)())}-${e}`;break;default:s=e}let o=i.length?i.join(","):"FirebaseCore-web";return`${s}/JsCore/${l.Jn}/${o}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AuthMiddlewareQueue=class AuthMiddlewareQueue{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){let wrappedCallback=i=>new Promise((s,o)=>{try{let o=e(i);s(o)}catch(e){o(e)}});wrappedCallback.onAbort=i,this.queue.push(wrappedCallback);let s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let i=[];try{for(let s of this.queue)await s(e),s.onAbort&&i.push(s.onAbort)}catch(e){for(let e of(i.reverse(),i))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _getPasswordPolicy(e,i={}){return _performApiRequest(e,"GET","/v2/passwordPolicy",_addTidIfNecessary(e,i))}let PasswordPolicyImpl=class PasswordPolicyImpl{constructor(e){var i,s,o,l;let h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(i=h.minPasswordLength)&&void 0!==i?i:6,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),void 0!==h.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),void 0!==h.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),void 0!==h.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),void 0!==h.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(o=null===(s=e.allowedNonAlphanumericCharacters)||void 0===s?void 0:s.join(""))&&void 0!==o?o:"",this.forceUpgradeOnSignin=null!==(l=e.forceUpgradeOnSignin)&&void 0!==l&&l,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,s,o,l,h,d;let f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=null===(i=f.meetsMinPasswordLength)||void 0===i||i),f.isValid&&(f.isValid=null===(s=f.meetsMaxPasswordLength)||void 0===s||s),f.isValid&&(f.isValid=null===(o=f.containsLowercaseLetter)||void 0===o||o),f.isValid&&(f.isValid=null===(l=f.containsUppercaseLetter)||void 0===l||l),f.isValid&&(f.isValid=null===(h=f.containsNumericCharacter)||void 0===h||h),f.isValid&&(f.isValid=null===(d=f.containsNonAlphanumericCharacter)||void 0===d||d),f}validatePasswordLengthOptions(e,i){let s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(i.meetsMinPasswordLength=e.length>=s),o&&(i.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,i){let s;this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(i,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,i,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AuthImpl=class AuthImpl{constructor(e,i,s,o){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Subscription(this),this.idTokenSubscription=new Subscription(this),this.beforeStateQueue=new AuthMiddlewareQueue(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=_getInstance(i)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await PersistenceUserManager.create(this,e),!this._deleted)){if(null===(s=this._popupRedirectResolver)||void 0===s?void 0:s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(i),this.lastNotifiedUid=(null===(o=this.currentUser)||void 0===o?void 0:o.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let i=await getAccountInfo(this,{idToken:e}),s=await UserImpl._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if((0,l.rh)(this.app)){let e=this.app.settings.authIdToken;return e?new Promise(i=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(i,i))}):this.directlySetCurrentUser(null)}let s=await this.assertedPersistence.getCurrentUser(),o=s,h=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let s=null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==o?void 0:o._redirectEventId,d=await this.tryRedirectSignIn(e);(!s||s===l)&&(null==d?void 0:d.user)&&(o=d.user,h=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(h)try{await this.beforeStateQueue.runMiddleware(o)}catch(e){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return(_assert(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId)?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await _reloadWithoutSaving(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if((0,l.rh)(this.app))return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));let i=e?(0,h.m9)(e):null;return i&&_assert(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&_assert(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(0,l.rh)(this.app)?Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return(0,l.rh)(this.app)?Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_getInstance(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await _getPasswordPolicy(this),i=new PasswordPolicyImpl(e);null===this.tenantId?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new h.LL("auth","Firebase",e())}onAuthStateChanged(e,i,s){return this.registerStateListener(this.authStateSubscription,e,i,s)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,s){return this.registerStateListener(this.idTokenSubscription,e,i,s)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{let s=this.onAuthStateChanged(()=>{s(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){let i=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};null!=this.tenantId&&(s.tenantId=this.tenantId),await revokeToken(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,i){let s=await this.getOrInitRedirectPersistenceManager(i);return null===e?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let i=e&&_getInstance(e)||this._popupRedirectResolver;_assert(i,this,"argument-error"),this.redirectPersistenceManager=await PersistenceUserManager.create(this,[_getInstance(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,s;return(this._isInitialized&&await this.queue(async()=>{}),(null===(i=this._currentUser)||void 0===i?void 0:i._redirectEventId)===e)?this._currentUser:(null===(s=this.redirectUser)||void 0===s?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let s=null!==(i=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==i?i:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,s,o){if(this._deleted)return()=>{};let l="function"==typeof i?i:i.next.bind(i),h=!1,d=this._isInitialized?Promise.resolve():this._initializationPromise;if(_assert(d,this,"internal-error"),d.then(()=>{h||l(this.currentUser)}),"function"==typeof i){let l=e.addObserver(i,s,o);return()=>{h=!0,l()}}{let s=e.addObserver(i);return()=>{h=!0,s()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _assert(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_getClientVersion(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);let s=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());s&&(i["X-Firebase-Client"]=s);let o=await this._getAppCheckToken();return o&&(i["X-Firebase-AppCheck"]=o),i}async _getAppCheckToken(){var e;let i=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==i?void 0:i.error)&&function(e,...i){g.logLevel<=d.in.WARN&&g.warn(`Auth (${l.Jn}): ${e}`,...i)}(`Error while retrieving App Check token: ${i.error}`),null==i?void 0:i.token}};function _castAuth(e){return(0,h.m9)(e)}let Subscription=class Subscription{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,h.ne)(e=>this.observer=e)}get next(){return _assert(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let O={async loadJS(){throw Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _generateCallbackName(e){return`__${e}${Math.floor(1e6*Math.random())}`}let MockGreCAPTCHATopLevel=class MockGreCAPTCHATopLevel{constructor(){this.enterprise=new MockGreCAPTCHA}ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}};let MockGreCAPTCHA=class MockGreCAPTCHA{ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}};let q="NO_RECAPTCHA";let RecaptchaEnterpriseVerifier=class RecaptchaEnterpriseVerifier{constructor(e){this.type="recaptcha-enterprise",this.auth=_castAuth(e)}async verify(e="verify",i=!1){async function retrieveSiteKey(e){if(!i){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(i,s)=>{getRecaptchaConfig(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(void 0===o.recaptchaKey)s(Error("recaptcha Enterprise site key undefined"));else{let s=new RecaptchaConfig(o);return null==e.tenantId?e._agentRecaptchaConfig=s:e._tenantRecaptchaConfigs[e.tenantId]=s,i(s.siteKey)}}).catch(e=>{s(e)})})}function retrieveRecaptchaToken(i,s,o){let l=window.grecaptcha;isEnterprise(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(e=>{s(e)}).catch(()=>{s(q)})}):o(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){let e=new MockGreCAPTCHATopLevel;return e.execute("siteKey",{action:"verify"})}return new Promise((e,s)=>{retrieveSiteKey(this.auth).then(o=>{if(!i&&isEnterprise(window.grecaptcha))retrieveRecaptchaToken(o,e,s);else{var l;if("undefined"==typeof window){s(Error("RecaptchaVerifier is only supported in browser"));return}let i=O.recaptchaEnterpriseScript;0!==i.length&&(i+=o),(l=i,O.loadJS(l)).then(()=>{retrieveRecaptchaToken(o,e,s)}).catch(e=>{s(e)})}}).catch(e=>{s(e)})})}};async function injectRecaptchaFields(e,i,s,o=!1,l=!1){let h;let d=new RecaptchaEnterpriseVerifier(e);if(l)h=q;else try{h=await d.verify(s)}catch(e){h=await d.verify(s,!0)}let f=Object.assign({},i);if("mfaSmsEnrollment"===s||"mfaSmsSignIn"===s){if("phoneEnrollmentInfo"in f){let e=f.phoneEnrollmentInfo.phoneNumber,i=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:i,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){let e=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return o?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function handleRecaptchaFlow(e,i,s,o,l){var h,d;if("EMAIL_PASSWORD_PROVIDER"===l){if(null===(h=e._getRecaptchaConfig())||void 0===h||!h.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return o(e,i).catch(async l=>{if("auth/missing-recaptcha-token"!==l.code)return Promise.reject(l);{console.log(`${s} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let l=await injectRecaptchaFields(e,i,s,"getOobCode"===s);return o(e,l)}});{let l=await injectRecaptchaFields(e,i,s,"getOobCode"===s);return o(e,l)}}if("PHONE_PROVIDER"!==l)return Promise.reject(l+" provider is not supported.");if(null===(d=e._getRecaptchaConfig())||void 0===d?void 0:d.isProviderEnabled("PHONE_PROVIDER")){let l=await injectRecaptchaFields(e,i,s);return o(e,l).catch(async l=>{var h;if((null===(h=e._getRecaptchaConfig())||void 0===h?void 0:h.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&("auth/missing-recaptcha-token"===l.code||"auth/invalid-app-credential"===l.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${s} flow.`);let l=await injectRecaptchaFields(e,i,s,!1,!0);return o(e,l)}return Promise.reject(l)})}{let l=await injectRecaptchaFields(e,i,s,!1,!0);return o(e,l)}}async function _initializeRecaptchaConfig(e){let i=_castAuth(e),s=await getRecaptchaConfig(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),o=new RecaptchaConfig(s);if(null==i.tenantId?i._agentRecaptchaConfig=o:i._tenantRecaptchaConfigs[i.tenantId]=o,o.isAnyProviderEnabled()){let e=new RecaptchaEnterpriseVerifier(i);e.verify()}}function extractProtocol(e){let i=e.indexOf(":");return i<0?"":e.substr(0,i+1)}function parsePort(e){if(!e)return null;let i=Number(e);return isNaN(i)?null:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AuthCredential=class AuthCredential{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return debugFail("not implemented")}_getIdTokenResponse(e){return debugFail("not implemented")}_linkToIdToken(e,i){return debugFail("not implemented")}_getReauthenticationResolver(e){return debugFail("not implemented")}};async function linkEmailPassword(e,i){return _performApiRequest(e,"POST","/v1/accounts:signUp",i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithPassword(e,i){return _performSignInRequest(e,"POST","/v1/accounts:signInWithPassword",_addTidIfNecessary(e,i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithEmailLink$1(e,i){return _performSignInRequest(e,"POST","/v1/accounts:signInWithEmailLink",_addTidIfNecessary(e,i))}async function signInWithEmailLinkForLinking(e,i){return _performSignInRequest(e,"POST","/v1/accounts:signInWithEmailLink",_addTidIfNecessary(e,i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EmailAuthCredential=class EmailAuthCredential extends AuthCredential{constructor(e,i,s,o=null){super("password",s),this._email=e,this._password=i,this._tenantId=o}static _fromEmailAndPassword(e,i){return new EmailAuthCredential(e,i,"password")}static _fromEmailAndCode(e,i,s=null){return new EmailAuthCredential(e,i,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let i="string"==typeof e?JSON.parse(e):e;if((null==i?void 0:i.email)&&(null==i?void 0:i.password)){if("password"===i.signInMethod)return this._fromEmailAndPassword(i.email,i.password);if("emailLink"===i.signInMethod)return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return handleRecaptchaFlow(e,i,"signInWithPassword",signInWithPassword,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return signInWithEmailLink$1(e,{email:this._email,oobCode:this._password});default:_fail(e,"internal-error")}}async _linkToIdToken(e,i){switch(this.signInMethod){case"password":let s={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return handleRecaptchaFlow(e,s,"signUpPassword",linkEmailPassword,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return signInWithEmailLinkForLinking(e,{idToken:i,email:this._email,oobCode:this._password});default:_fail(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithIdp(e,i){return _performSignInRequest(e,"POST","/v1/accounts:signInWithIdp",_addTidIfNecessary(e,i))}let OAuthCredential=class OAuthCredential extends AuthCredential{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let i=new OAuthCredential(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):_fail("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let i="string"==typeof e?JSON.parse(e):e,{providerId:s,signInMethod:o}=i,l=__rest(i,["providerId","signInMethod"]);if(!s||!o)return null;let h=new OAuthCredential(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){let i=this.buildRequest();return signInWithIdp(e,i)}_linkToIdToken(e,i){let s=this.buildRequest();return s.idToken=i,signInWithIdp(e,s)}_getReauthenticationResolver(e){let i=this.buildRequest();return i.autoCreate=!1,signInWithIdp(e,i)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=(0,h.xO)(i)}return e}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sendPhoneVerificationCode(e,i){return _performApiRequest(e,"POST","/v1/accounts:sendVerificationCode",_addTidIfNecessary(e,i))}async function signInWithPhoneNumber$1(e,i){return _performSignInRequest(e,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(e,i))}async function linkWithPhoneNumber$1(e,i){let s=await _performSignInRequest(e,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(e,i));if(s.temporaryProof)throw _makeTaggedError(e,"account-exists-with-different-credential",s);return s}let j={USER_NOT_FOUND:"user-not-found"};async function verifyPhoneNumberForExisting(e,i){let s=Object.assign(Object.assign({},i),{operation:"REAUTH"});return _performSignInRequest(e,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(e,s),j)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PhoneAuthCredential=class PhoneAuthCredential extends AuthCredential{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,i){return new PhoneAuthCredential({verificationId:e,verificationCode:i})}static _fromTokenResponse(e,i){return new PhoneAuthCredential({phoneNumber:e,temporaryProof:i})}_getIdTokenResponse(e){return signInWithPhoneNumber$1(e,this._makeVerificationRequest())}_linkToIdToken(e,i){return linkWithPhoneNumber$1(e,Object.assign({idToken:i},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return verifyPhoneNumberForExisting(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:i,verificationId:s,verificationCode:o}=this.params;return e&&i?{temporaryProof:e,phoneNumber:i}:{sessionInfo:s,code:o}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:i,verificationCode:s,phoneNumber:o,temporaryProof:l}=e;return s||i||o||l?new PhoneAuthCredential({verificationId:i,verificationCode:s,phoneNumber:o,temporaryProof:l}):null}};let ActionCodeURL=class ActionCodeURL{constructor(e){var i,s,o,l,d,f;let _=(0,h.zd)((0,h.pd)(e)),g=null!==(i=_.apiKey)&&void 0!==i?i:null,w=null!==(s=_.oobCode)&&void 0!==s?s:null,b=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(o=_.mode)&&void 0!==o?o:null);_assert(g&&w&&b,"argument-error"),this.apiKey=g,this.operation=b,this.code=w,this.continueUrl=null!==(l=_.continueUrl)&&void 0!==l?l:null,this.languageCode=null!==(d=_.languageCode)&&void 0!==d?d:null,this.tenantId=null!==(f=_.tenantId)&&void 0!==f?f:null}static parseLink(e){let i=function(e){let i=(0,h.zd)((0,h.pd)(e)).link,s=i?(0,h.zd)((0,h.pd)(i)).deep_link_id:null,o=(0,h.zd)((0,h.pd)(e)).deep_link_id,l=o?(0,h.zd)((0,h.pd)(o)).link:null;return l||o||s||i||e}(e);try{return new ActionCodeURL(i)}catch(e){return null}}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EmailAuthProvider=class EmailAuthProvider{constructor(){this.providerId=EmailAuthProvider.PROVIDER_ID}static credential(e,i){return EmailAuthCredential._fromEmailAndPassword(e,i)}static credentialWithLink(e,i){let s=ActionCodeURL.parseLink(i);return _assert(s,"argument-error"),EmailAuthCredential._fromEmailAndCode(e,s.code,s.tenantId)}};EmailAuthProvider.PROVIDER_ID="password",EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD="password",EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FederatedAuthProvider=class FederatedAuthProvider{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BaseOAuthProvider=class BaseOAuthProvider extends FederatedAuthProvider{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FacebookAuthProvider=class FacebookAuthProvider extends BaseOAuthProvider{constructor(){super("facebook.com")}static credential(e){return OAuthCredential._fromParams({providerId:FacebookAuthProvider.PROVIDER_ID,signInMethod:FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return FacebookAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return FacebookAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return FacebookAuthProvider.credential(e.oauthAccessToken)}catch(e){return null}}};FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD="facebook.com",FacebookAuthProvider.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GoogleAuthProvider=class GoogleAuthProvider extends BaseOAuthProvider{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return OAuthCredential._fromParams({providerId:GoogleAuthProvider.PROVIDER_ID,signInMethod:GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return GoogleAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return GoogleAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:i,oauthAccessToken:s}=e;if(!i&&!s)return null;try{return GoogleAuthProvider.credential(i,s)}catch(e){return null}}};GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD="google.com",GoogleAuthProvider.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GithubAuthProvider=class GithubAuthProvider extends BaseOAuthProvider{constructor(){super("github.com")}static credential(e){return OAuthCredential._fromParams({providerId:GithubAuthProvider.PROVIDER_ID,signInMethod:GithubAuthProvider.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return GithubAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return GithubAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return GithubAuthProvider.credential(e.oauthAccessToken)}catch(e){return null}}};GithubAuthProvider.GITHUB_SIGN_IN_METHOD="github.com",GithubAuthProvider.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TwitterAuthProvider=class TwitterAuthProvider extends BaseOAuthProvider{constructor(){super("twitter.com")}static credential(e,i){return OAuthCredential._fromParams({providerId:TwitterAuthProvider.PROVIDER_ID,signInMethod:TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return TwitterAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return TwitterAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:i,oauthTokenSecret:s}=e;if(!i||!s)return null;try{return TwitterAuthProvider.credential(i,s)}catch(e){return null}}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signUp(e,i){return _performSignInRequest(e,"POST","/v1/accounts:signUp",_addTidIfNecessary(e,i))}TwitterAuthProvider.TWITTER_SIGN_IN_METHOD="twitter.com",TwitterAuthProvider.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let UserCredentialImpl=class UserCredentialImpl{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,s,o=!1){let l=await UserImpl._fromIdTokenResponse(e,s,o),h=providerIdForResponse(s),d=new UserCredentialImpl({user:l,providerId:h,_tokenResponse:s,operationType:i});return d}static async _forOperation(e,i,s){await e._updateTokensIfNecessary(s,!0);let o=providerIdForResponse(s);return new UserCredentialImpl({user:e,providerId:o,_tokenResponse:s,operationType:i})}};function providerIdForResponse(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MultiFactorError=class MultiFactorError extends h.ZR{constructor(e,i,s,o){var l;super(i.code,i.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,MultiFactorError.prototype),this.customData={appName:e.name,tenantId:null!==(l=e.tenantId)&&void 0!==l?l:void 0,_serverResponse:i.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,i,s,o){return new MultiFactorError(e,i,s,o)}};function _processCredentialSavingMfaContextIfNecessary(e,i,s,o){let l="reauthenticate"===i?s._getReauthenticationResolver(e):s._getIdTokenResponse(e);return l.catch(s=>{if("auth/multi-factor-auth-required"===s.code)throw MultiFactorError._fromErrorAndOperation(e,s,i,o);throw s})}async function _link$1(e,i,s=!1){let o=await _logoutIfInvalidated(e,i._linkToIdToken(e.auth,await e.getIdToken()),s);return UserCredentialImpl._forOperation(e,"link",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _reauthenticate(e,i,s=!1){let{auth:o}=e;if((0,l.rh)(o.app))return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(o));let h="reauthenticate";try{let l=await _logoutIfInvalidated(e,_processCredentialSavingMfaContextIfNecessary(o,h,i,e),s);_assert(l.idToken,o,"internal-error");let d=_parseToken(l.idToken);_assert(d,o,"internal-error");let{sub:f}=d;return _assert(e.uid===f,o,"user-mismatch"),UserCredentialImpl._forOperation(e,h,l)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&_fail(o,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _signInWithCredential(e,i,s=!1){if((0,l.rh)(e.app))return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(e));let o="signIn",h=await _processCredentialSavingMfaContextIfNecessary(e,o,i),d=await UserCredentialImpl._fromIdTokenResponse(e,o,h);return s||await e._updateCurrentUser(d.user),d}async function signInWithCredential(e,i){return _signInWithCredential(_castAuth(e),i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function recachePasswordPolicy(e){let i=_castAuth(e);i._getPasswordPolicyInternal()&&await i._updatePasswordPolicy()}async function createUserWithEmailAndPassword(e,i,s){if((0,l.rh)(e.app))return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(e));let o=_castAuth(e),h=handleRecaptchaFlow(o,{returnSecureToken:!0,email:i,password:s,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",signUp,"EMAIL_PASSWORD_PROVIDER"),d=await h.catch(i=>{throw"auth/password-does-not-meet-requirements"===i.code&&recachePasswordPolicy(e),i}),f=await UserCredentialImpl._fromIdTokenResponse(o,"signIn",d);return await o._updateCurrentUser(f.user),f}function signInWithEmailAndPassword(e,i,s){return(0,l.rh)(e.app)?Promise.reject(_serverAppCurrentUserOperationNotSupportedError(e)):signInWithCredential((0,h.m9)(e),EmailAuthProvider.credential(i,s)).catch(async i=>{throw"auth/password-does-not-meet-requirements"===i.code&&recachePasswordPolicy(e),i})}function onAuthStateChanged(e,i,s,o){return(0,h.m9)(e).onAuthStateChanged(i,s,o)}function signOut(e){return(0,h.m9)(e).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function startEnrollPhoneMfa(e,i){return _performApiRequest(e,"POST","/v2/accounts/mfaEnrollment:start",_addTidIfNecessary(e,i))}new WeakMap;let $="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BrowserPersistenceClass=class BrowserPersistenceClass{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem($,"1"),this.storage.removeItem($),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){let i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};let BrowserLocalPersistence=class BrowserLocalPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_isMobileBrowser(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let i of Object.keys(this.listeners)){let s=this.storage.getItem(i),o=this.localCache[i];s!==o&&e(i,o,s)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((e,i,s)=>{this.notifyListeners(e,s)});return}let s=e.key;i?this.detachListener():this.stopPolling();let triggerListeners=()=>{let e=this.storage.getItem(s);(i||this.localCache[s]!==e)&&this.notifyListeners(s,e)},o=this.storage.getItem(s);(0,h.w1)()&&10===document.documentMode&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(triggerListeners,10):triggerListeners()}notifyListeners(e,i){this.localCache[e]=i;let s=this.listeners[e];if(s)for(let e of Array.from(s))e(i?JSON.parse(i):i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:s}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){let i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}};BrowserLocalPersistence.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BrowserSessionPersistence=class BrowserSessionPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}};BrowserSessionPersistence.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Receiver=class Receiver{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let i=this.receivers.find(i=>i.isListeningto(e));if(i)return i;let s=new Receiver(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:i,eventType:s,data:o}=e.data,l=this.handlersMap[s];if(!(null==l?void 0:l.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:s});let h=Array.from(l).map(async i=>i(e.origin,o)),d=await Promise.all(h.map(async e=>{try{let i=await e;return{fulfilled:!0,value:i}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:d})}_subscribe(e,i){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),i&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _generateEventId(e="",i=10){let s="";for(let e=0;e<i;e++)s+=Math.floor(10*Math.random());return e+s}Receiver.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sender=class Sender{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,s=50){let o,l;let h="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!h)throw Error("connection_unavailable");return new Promise((d,f)=>{let _=_generateEventId("",20);h.port1.start();let g=setTimeout(()=>{f(Error("unsupported_event"))},s);l={messageChannel:h,onMessage(e){if(e.data.eventId===_)switch(e.data.status){case"ack":clearTimeout(g),o=setTimeout(()=>{f(Error("timeout"))},3e3);break;case"done":clearTimeout(o),d(e.data.response);break;default:clearTimeout(g),clearTimeout(o),f(Error("invalid_response"))}}},this.handlers.add(l),h.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:_,data:i},[h.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _window(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _isWorker(){return void 0!==_window().WorkerGlobalScope&&"function"==typeof _window().importScripts}async function _getActiveServiceWorker(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ee="firebaseLocalStorageDb",et="firebaseLocalStorage",er="fbase_key";let DBPromise=class DBPromise{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}};function getObjectStore(e,i){return e.transaction([et],i?"readwrite":"readonly").objectStore(et)}function _openDatabase(){let e=indexedDB.open(ee,1);return new Promise((i,s)=>{e.addEventListener("error",()=>{s(e.error)}),e.addEventListener("upgradeneeded",()=>{let i=e.result;try{i.createObjectStore(et,{keyPath:er})}catch(e){s(e)}}),e.addEventListener("success",async()=>{let s=e.result;s.objectStoreNames.contains(et)?i(s):(s.close(),await function(){let e=indexedDB.deleteDatabase(ee);return new DBPromise(e).toPromise()}(),i(await _openDatabase()))})})}async function _putObject(e,i,s){let o=getObjectStore(e,!0).put({[er]:i,value:s});return new DBPromise(o).toPromise()}async function getObject(e,i){let s=getObjectStore(e,!1).get(i),o=await new DBPromise(s).toPromise();return void 0===o?null:o.value}function _deleteObject(e,i){let s=getObjectStore(e,!0).delete(i);return new DBPromise(s).toPromise()}let IndexedDBLocalPersistence=class IndexedDBLocalPersistence{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await _openDatabase()),this.db}async _withRetries(e){let i=0;for(;;)try{let i=await this._openDb();return await e(i)}catch(e){if(i++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _isWorker()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Receiver._getInstance(_isWorker()?self:null),this.receiver._subscribe("keyChanged",async(e,i)=>{let s=await this._poll();return{keyProcessed:s.includes(i.key)}}),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await _getActiveServiceWorker(),!this.activeServiceWorker)return;this.sender=new Sender(this.activeServiceWorker);let s=await this.sender._send("ping",{},800);s&&(null===(e=s[0])||void 0===e?void 0:e.fulfilled)&&(null===(i=s[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var i;if(this.sender&&this.activeServiceWorker&&((null===(i=null==navigator?void 0:navigator.serviceWorker)||void 0===i?void 0:i.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await _openDatabase();return await _putObject(e,$,"1"),await _deleteObject(e,$),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(s=>_putObject(s,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){let i=await this._withRetries(i=>getObject(i,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>_deleteObject(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>{let i=getObjectStore(e,!1).getAll();return new DBPromise(i).toPromise()});if(!e||0!==this.pendingWrites)return[];let i=[],s=new Set;if(0!==e.length)for(let{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),i.push(o));for(let e of Object.keys(this.localCache))this.localCache[e]&&!s.has(e)&&(this.notifyListeners(e,null),i.push(e));return i}notifyListeners(e,i){this.localCache[e]=i;let s=this.listeners[e];if(s)for(let e of Array.from(s))e(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function startSignInPhoneMfa(e,i){return _performApiRequest(e,"POST","/v2/accounts/mfaSignIn:start",_addTidIfNecessary(e,i))}IndexedDBLocalPersistence.type="LOCAL",_generateCallbackName("rcb"),new Delay(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let en="recaptcha";async function _verifyPhoneNumber(e,i,s){var o;if(!e._getRecaptchaConfig())try{await _initializeRecaptchaConfig(e)}catch(e){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let l;if(l="string"==typeof i?{phoneNumber:i}:i,"session"in l){let i=l.session;if("phoneNumber"in l){_assert("enroll"===i.type,e,"internal-error");let o={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:l.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},startEnrollPhoneMfaActionCallback=async(e,i)=>{if(i.phoneEnrollmentInfo.captchaResponse===q){_assert((null==s?void 0:s.type)===en,e,"argument-error");let o=await injectRecaptchaV2Token(e,i,s);return startEnrollPhoneMfa(e,o)}return startEnrollPhoneMfa(e,i)},h=handleRecaptchaFlow(e,o,"mfaSmsEnrollment",startEnrollPhoneMfaActionCallback,"PHONE_PROVIDER"),d=await h.catch(e=>Promise.reject(e));return d.phoneSessionInfo.sessionInfo}{_assert("signin"===i.type,e,"internal-error");let h=(null===(o=l.multiFactorHint)||void 0===o?void 0:o.uid)||l.multiFactorUid;_assert(h,e,"missing-multi-factor-info");let d={mfaPendingCredential:i.credential,mfaEnrollmentId:h,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},startSignInPhoneMfaActionCallback=async(e,i)=>{if(i.phoneSignInInfo.captchaResponse===q){_assert((null==s?void 0:s.type)===en,e,"argument-error");let o=await injectRecaptchaV2Token(e,i,s);return startSignInPhoneMfa(e,o)}return startSignInPhoneMfa(e,i)},f=handleRecaptchaFlow(e,d,"mfaSmsSignIn",startSignInPhoneMfaActionCallback,"PHONE_PROVIDER"),_=await f.catch(e=>Promise.reject(e));return _.phoneResponseInfo.sessionInfo}}{let i={phoneNumber:l.phoneNumber,clientType:"CLIENT_TYPE_WEB"},sendPhoneVerificationCodeActionCallback=async(e,i)=>{if(i.captchaResponse===q){_assert((null==s?void 0:s.type)===en,e,"argument-error");let o=await injectRecaptchaV2Token(e,i,s);return sendPhoneVerificationCode(e,o)}return sendPhoneVerificationCode(e,i)},o=handleRecaptchaFlow(e,i,"sendVerificationCode",sendPhoneVerificationCodeActionCallback,"PHONE_PROVIDER"),h=await o.catch(e=>Promise.reject(e));return h.sessionInfo}}finally{null==s||s._reset()}}async function injectRecaptchaV2Token(e,i,s){_assert(s.type===en,e,"argument-error");let o=await s.verify();_assert("string"==typeof o,e,"argument-error");let l=Object.assign({},i);if("phoneEnrollmentInfo"in l){let e=l.phoneEnrollmentInfo.phoneNumber,i=l.phoneEnrollmentInfo.captchaResponse,s=l.phoneEnrollmentInfo.clientType,h=l.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:o,captchaResponse:i,clientType:s,recaptchaVersion:h}}),l}if(!("phoneSignInInfo"in l))return Object.assign(l,{recaptchaToken:o}),l;{let e=l.phoneSignInInfo.captchaResponse,i=l.phoneSignInInfo.clientType,s=l.phoneSignInInfo.recaptchaVersion;return Object.assign(l,{phoneSignInInfo:{recaptchaToken:o,captchaResponse:e,clientType:i,recaptchaVersion:s}}),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PhoneAuthProvider=class PhoneAuthProvider{constructor(e){this.providerId=PhoneAuthProvider.PROVIDER_ID,this.auth=_castAuth(e)}verifyPhoneNumber(e,i){return _verifyPhoneNumber(this.auth,e,(0,h.m9)(i))}static credential(e,i){return PhoneAuthCredential._fromVerification(e,i)}static credentialFromResult(e){return PhoneAuthProvider.credentialFromTaggedObject(e)}static credentialFromError(e){return PhoneAuthProvider.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:i,temporaryProof:s}=e;return i&&s?PhoneAuthCredential._fromTokenResponse(i,s):null}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _withDefaultResolver(e,i){return i?_getInstance(i):(_assert(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}PhoneAuthProvider.PROVIDER_ID="phone",PhoneAuthProvider.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let IdpCredential=class IdpCredential extends AuthCredential{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return signInWithIdp(e,this._buildIdpRequest())}_linkToIdToken(e,i){return signInWithIdp(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return signInWithIdp(e,this._buildIdpRequest())}_buildIdpRequest(e){let i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}};function _signIn(e){return _signInWithCredential(e.auth,new IdpCredential(e),e.bypassAuthState)}function _reauth(e){let{auth:i,user:s}=e;return _assert(s,i,"internal-error"),_reauthenticate(s,new IdpCredential(e),e.bypassAuthState)}async function _link(e){let{auth:i,user:s}=e;return _assert(s,i,"internal-error"),_link$1(s,new IdpCredential(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AbstractPopupRedirectOperation=class AbstractPopupRedirectOperation{constructor(e,i,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:i,sessionId:s,postBody:o,tenantId:l,error:h,type:d}=e;if(h){this.reject(h);return}let f={auth:this.auth,requestUri:i,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _signIn;case"linkViaPopup":case"linkViaRedirect":return _link;case"reauthViaPopup":case"reauthViaRedirect":return _reauth;default:_fail(this.auth,"internal-error")}}resolve(e){this.pendingPromise||debugFail("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||debugFail("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei=new Delay(2e3,1e4);async function signInWithPopup(e,i,s){if((0,l.rh)(e.app))return Promise.reject(_createError(e,"operation-not-supported-in-this-environment"));let o=_castAuth(e);!function(e,i,s){if(!(i instanceof s))throw s.name!==i.constructor.name&&_fail(e,"argument-error"),_errorWithCustomMessage(e,"argument-error",`Type of ${i.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,i,FederatedAuthProvider);let h=_withDefaultResolver(o,s),d=new PopupOperation(o,"signInViaPopup",i,h);return d.executeNotNull()}let PopupOperation=class PopupOperation extends AbstractPopupRedirectOperation{constructor(e,i,s,o,l){super(e,i,o,l),this.provider=s,this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction&&PopupOperation.currentPopupAction.cancel(),PopupOperation.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return _assert(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||debugFail("Popup operations only handle one event");let e=_generateEventId();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(_createError(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(_createError(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction=null}pollUserCancellation(){let poll=()=>{var e,i;if(null===(i=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===i?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_createError(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(poll,ei.get())};poll()}};PopupOperation.currentPopupAction=null;let es=new Map;let RedirectAction=class RedirectAction extends AbstractPopupRedirectOperation{constructor(e,i,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,s),this.eventId=null}async execute(){let e=es.get(this.auth._key());if(!e){try{let i=await _getAndClearPendingRedirectStatus(this.resolver,this.auth),s=i?await super.execute():null;e=()=>Promise.resolve(s)}catch(i){e=()=>Promise.reject(i)}es.set(this.auth._key(),e)}return this.bypassAuthState||es.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function _getAndClearPendingRedirectStatus(e,i){let s=_persistenceKeyName("pendingRedirect",i.config.apiKey,i.name),o=_getInstance(e._redirectPersistence);if(!await o._isAvailable())return!1;let l=await o._get(s)==="true";return await o._remove(s),l}function _overrideRedirectResult(e,i){es.set(e._key(),i)}async function _getRedirectResult(e,i,s=!1){if((0,l.rh)(e.app))return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(e));let o=_castAuth(e),h=_withDefaultResolver(o,i),d=new RedirectAction(o,h,s),f=await d.execute();return f&&!s&&(delete f.user._redirectEventId,await o._persistUserIfCurrent(f.user),await o._setRedirectUser(null,i)),f}let AuthEventManager=class AuthEventManager{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(i=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return isNullRedirectEvent(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var s;if(e.error&&!isNullRedirectEvent(e)){let o=(null===(s=e.error.code)||void 0===s?void 0:s.split("auth/")[1])||"internal-error";i.onError(_createError(this.auth,o))}else i.onAuthEvent(e)}isEventForConsumer(e,i){let s=null===i.eventId||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(eventUid(e))}saveEventToCache(e){this.cachedEventUids.add(eventUid(e)),this.lastProcessedEventTime=Date.now()}};function eventUid(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function isNullRedirectEvent({type:e,error:i}){return"unknown"===e&&(null==i?void 0:i.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _getProjectConfig(e,i={}){return _performApiRequest(e,"GET","/v1/projects",i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ea=/^https?/;async function _validateOrigin(e){if(e.config.emulator)return;let{authorizedDomains:i}=await _getProjectConfig(e);for(let e of i)try{if(function(e){let i=_getCurrentUrl(),{protocol:s,hostname:o}=new URL(i);if(e.startsWith("chrome-extension://")){let l=new URL(e);return""===l.hostname&&""===o?"chrome-extension:"===s&&e.replace("chrome-extension://","")===i.replace("chrome-extension://",""):"chrome-extension:"===s&&l.hostname===o}if(!ea.test(s))return!1;if(eo.test(e))return o===e;let l=e.replace(/\./g,"\\."),h=RegExp("^(.+\\."+l+"|"+l+")$","i");return h.test(o)}(e))return}catch(e){}_fail(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el=new Delay(3e4,6e4);function resetUnloadedGapiModules(){let e=_window().___jsl;if(null==e?void 0:e.H){for(let i of Object.keys(e.H))if(e.H[i].r=e.H[i].r||[],e.H[i].L=e.H[i].L||[],e.H[i].r=[...e.H[i].L],e.CP)for(let i=0;i<e.CP.length;i++)e.CP[i]=null}}let eu=null,eh=new Delay(5e3,15e3),ef={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},e_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function _openIframe(e){let i=await (eu=eu||new Promise((i,s)=>{var o,l,h,d;function loadGapiIframe(){resetUnloadedGapiModules(),gapi.load("gapi.iframes",{callback:()=>{i(gapi.iframes.getContext())},ontimeout:()=>{resetUnloadedGapiModules(),s(_createError(e,"network-request-failed"))},timeout:el.get()})}if(null===(l=null===(o=_window().gapi)||void 0===o?void 0:o.iframes)||void 0===l?void 0:l.Iframe)i(gapi.iframes.getContext());else if(null===(h=_window().gapi)||void 0===h?void 0:h.load)loadGapiIframe();else{let i=_generateCallbackName("iframefcb");return _window()[i]=()=>{gapi.load?loadGapiIframe():s(_createError(e,"network-request-failed"))},(d=`${O.gapiScript}?onload=${i}`,O.loadJS(d)).catch(e=>s(e))}}).catch(e=>{throw eu=null,e})),s=_window().gapi;return _assert(s,e,"internal-error"),i.open({where:document.body,url:function(e){let i=e.config;_assert(i.authDomain,e,"auth-domain-config-required");let s=i.emulator?_emulatorUrl(i,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,o={apiKey:i.apiKey,appName:e.name,v:l.Jn},d=e_.get(e.config.apiHost);d&&(o.eid=d);let f=e._getFrameworks();return f.length&&(o.fw=f.join(",")),`${s}?${(0,h.xO)(o).slice(1)}`}(e),messageHandlersFilter:s.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ef,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});let l=_createError(e,"network-request-failed"),h=_window().setTimeout(()=>{o(l)},eh.get());function clearTimerAndResolve(){_window().clearTimeout(h),s(i)}i.ping(clearTimerAndResolve).then(clearTimerAndResolve,()=>{o(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ep={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};let AuthPopup=class AuthPopup{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}};let em=encodeURIComponent("fac");async function _getRedirectUrl(e,i,s,o,d,f){_assert(e.config.authDomain,e,"auth-domain-config-required"),_assert(e.config.apiKey,e,"invalid-api-key");let _={apiKey:e.config.apiKey,appName:e.name,authType:s,redirectUrl:o,v:l.Jn,eventId:d};if(i instanceof FederatedAuthProvider)for(let[s,o]of(i.setDefaultLanguage(e.languageCode),_.providerId=i.providerId||"",(0,h.xb)(i.getCustomParameters())||(_.customParameters=JSON.stringify(i.getCustomParameters())),Object.entries(f||{})))_[s]=o;if(i instanceof BaseOAuthProvider){let e=i.getScopes().filter(e=>""!==e);e.length>0&&(_.scopes=e.join(","))}for(let i of(e.tenantId&&(_.tid=e.tenantId),Object.keys(_)))void 0===_[i]&&delete _[i];let g=await e._getAppCheckToken(),w=g?`#${em}=${encodeURIComponent(g)}`:"";return`${function({config:e}){return e.emulator?_emulatorUrl(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${(0,h.xO)(_).slice(1)}${w}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eg="webStorageSupport",ey=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=BrowserSessionPersistence,this._completeRedirectFn=_getRedirectResult,this._overrideRedirectResult=_overrideRedirectResult}async _openPopup(e,i,s,o){var l;(null===(l=this.eventManagers[e._key()])||void 0===l?void 0:l.manager)||debugFail("_initialize() not called before _openPopup()");let d=await _getRedirectUrl(e,i,s,_getCurrentUrl(),o);return function(e,i,s,o=500,l=600){let d=Math.max((window.screen.availHeight-l)/2,0).toString(),f=Math.max((window.screen.availWidth-o)/2,0).toString(),_="",g=Object.assign(Object.assign({},ep),{width:o.toString(),height:l.toString(),top:d,left:f}),w=(0,h.z$)().toLowerCase();s&&(_=_isChromeIOS(w)?"_blank":s),_isFirefox(w)&&(i=i||"http://localhost",g.scrollbars="yes");let b=Object.entries(g).reduce((e,[i,s])=>`${e}${i}=${s},`,"");if(function(e=(0,h.z$)()){var i;return _isIOS(e)&&!!(null===(i=window.navigator)||void 0===i?void 0:i.standalone)}(w)&&"_self"!==_)return function(e,i){let s=document.createElement("a");s.href=e,s.target=i;let o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),s.dispatchEvent(o)}(i||"",_),new AuthPopup(null);let k=window.open(i||"",_,b);_assert(k,e,"popup-blocked");try{k.focus()}catch(e){}return new AuthPopup(k)}(e,d,_generateEventId())}async _openRedirect(e,i,s,o){await this._originValidation(e);let l=await _getRedirectUrl(e,i,s,_getCurrentUrl(),o);return _window().location.href=l,new Promise(()=>{})}_initialize(e){let i=e._key();if(this.eventManagers[i]){let{manager:e,promise:s}=this.eventManagers[i];return e?Promise.resolve(e):(s||debugFail("If manager is not set, promise should be"),s)}let s=this.initAndGetManager(e);return this.eventManagers[i]={promise:s},s.catch(()=>{delete this.eventManagers[i]}),s}async initAndGetManager(e){let i=await _openIframe(e),s=new AuthEventManager(e);return i.register("authEvent",i=>{_assert(null==i?void 0:i.authEvent,e,"invalid-auth-event");let o=s.onEvent(i.authEvent);return{status:o?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=i,s}_isIframeWebStorageSupported(e,i){let s=this.iframes[e._key()];s.send(eg,{type:eg},s=>{var o;let l=null===(o=null==s?void 0:s[0])||void 0===o?void 0:o[eg];void 0!==l&&i(!!l),_fail(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=_validateOrigin(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return _isMobileBrowser()||_isSafari()||_isIOS()}};let MultiFactorAssertionImpl=class MultiFactorAssertionImpl{constructor(e){this.factorId=e}_process(e,i,s){switch(i.type){case"enroll":return this._finalizeEnroll(e,i.credential,s);case"signin":return this._finalizeSignIn(e,i.credential);default:return debugFail("unexpected MultiFactorSessionType")}}};let PhoneMultiFactorAssertionImpl=class PhoneMultiFactorAssertionImpl extends MultiFactorAssertionImpl{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new PhoneMultiFactorAssertionImpl(e)}_finalizeEnroll(e,i,s){return _performApiRequest(e,"POST","/v2/accounts/mfaEnrollment:finalize",_addTidIfNecessary(e,{idToken:i,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,i){return _performApiRequest(e,"POST","/v2/accounts/mfaSignIn:finalize",_addTidIfNecessary(e,{mfaPendingCredential:i,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}};let TotpMultiFactorAssertionImpl=class TotpMultiFactorAssertionImpl extends MultiFactorAssertionImpl{constructor(e,i,s){super("totp"),this.otp=e,this.enrollmentId=i,this.secret=s}static _fromSecret(e,i){return new TotpMultiFactorAssertionImpl(i,void 0,e)}static _fromEnrollmentId(e,i){return new TotpMultiFactorAssertionImpl(i,e)}async _finalizeEnroll(e,i,s){return _assert(void 0!==this.secret,e,"argument-error"),_performApiRequest(e,"POST","/v2/accounts/mfaEnrollment:finalize",_addTidIfNecessary(e,{idToken:i,displayName:s,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,i){_assert(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let s={verificationCode:this.otp};return _performApiRequest(e,"POST","/v2/accounts/mfaSignIn:finalize",_addTidIfNecessary(e,{mfaPendingCredential:i,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:s}))}};let TotpSecret=class TotpSecret{constructor(e,i,s,o,l,h,d){this.sessionInfo=h,this.auth=d,this.secretKey=e,this.hashingAlgorithm=i,this.codeLength=s,this.codeIntervalSeconds=o,this.enrollmentCompletionDeadline=l}static _fromStartTotpMfaEnrollmentResponse(e,i){return new TotpSecret(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,i)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,i){var s;let o=!1;return(_isEmptyString(e)||_isEmptyString(i))&&(o=!0),o&&(_isEmptyString(e)&&(e=(null===(s=this.auth.currentUser)||void 0===s?void 0:s.email)||"unknownuser"),_isEmptyString(i)&&(i=this.auth.name)),`otpauth://totp/${i}:${e}?secret=${this.secretKey}&issuer=${i}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function _isEmptyString(e){return void 0===e||(null==e?void 0:e.length)===0}var eE="@firebase/auth",eI="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AuthInterop=class AuthInterop{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let i=await this.auth.currentUser.getIdToken(e);return{accessToken:i}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let i=this.auth.onIdTokenChanged(i=>{e((null==i?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){_assert(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};let eT=(0,h.Pz)("authIdTokenMaxAge")||300,ev=null,mintCookieFactory=e=>async i=>{let s=i&&await i.getIdTokenResult(),o=s&&(new Date().getTime()-Date.parse(s.issuedAtTime))/1e3;if(o&&o>eT)return;let l=null==s?void 0:s.token;ev!==l&&(ev=l,await fetch(e,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function getAuth(e=(0,l.Mq)()){let i=(0,l.qX)(e,"auth");if(i.isInitialized())return i.getImmediate();let s=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,i){let s=(0,l.qX)(e,"auth");if(s.isInitialized()){let e=s.getImmediate(),o=s.getOptions();if((0,h.vZ)(o,null!=i?i:{}))return e;_fail(e,"already-initialized")}let o=s.initialize({options:i});return o}(e,{popupRedirectResolver:ey,persistence:[IndexedDBLocalPersistence,BrowserLocalPersistence,BrowserSessionPersistence]}),o=(0,h.Pz)("authTokenSyncURL");if(o&&"boolean"==typeof isSecureContext&&isSecureContext){let e=new URL(o,location.origin);if(location.origin===e.origin){let i=mintCookieFactory(e.toString());(0,h.m9)(s).beforeAuthStateChanged(i,()=>i(s.currentUser)),(0,h.m9)(s).onIdTokenChanged(e=>i(e),void 0,void 0)}}let d=(0,h.q4)("auth");return d&&function(e,i,s){let o=_castAuth(e);_assert(o._canInitEmulator,o,"emulator-config-failed"),_assert(/^https?:\/\//.test(i),o,"invalid-emulator-scheme");let l=!!(null==s?void 0:s.disableWarnings),h=extractProtocol(i),{host:d,port:f}=function(e){let i=extractProtocol(e),s=/(\/\/)?([^?#/]+)/.exec(e.substr(i.length));if(!s)return{host:"",port:null};let o=s[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(o);if(l){let e=l[1];return{host:e,port:parsePort(o.substr(e.length+1))}}{let[e,i]=o.split(":");return{host:e,port:parsePort(i)}}}(i),_=null===f?"":`:${f}`;o.config.emulator={url:`${h}//${d}${_}/`},o.settings.appVerificationDisabledForTesting=!0,o.emulatorConfig=Object.freeze({host:d,port:f,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:l})}),l||function(){function attachBanner(){let e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",attachBanner):attachBanner())}()}(s,`http://${d}`),s}O={loadJS:e=>new Promise((i,s)=>{var o,l;let h=document.createElement("script");h.setAttribute("src",e),h.onload=i,h.onerror=e=>{let i=_createError("internal-error");i.customData=e,s(i)},h.type="text/javascript",h.charset="UTF-8",(null!==(l=null===(o=document.getElementsByTagName("head"))||void 0===o?void 0:o[0])&&void 0!==l?l:document).appendChild(h)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},o="Browser",(0,l.Xd)(new f.wA("auth",(e,{options:i})=>{let s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),h=e.getProvider("app-check-internal"),{apiKey:d,authDomain:f}=s.options;_assert(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});let _={apiKey:d,authDomain:f,clientPlatform:o,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_getClientVersion(o)},g=new AuthImpl(s,l,h,_);return function(e,i){let s=(null==i?void 0:i.persistence)||[],o=(Array.isArray(s)?s:[s]).map(_getInstance);(null==i?void 0:i.errorMap)&&e._updateErrorMap(i.errorMap),e._initializeWithPersistence(o,null==i?void 0:i.popupRedirectResolver)}(g,i),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,s)=>{let o=e.getProvider("auth-internal");o.initialize()})),(0,l.Xd)(new f.wA("auth-internal",e=>{let i=_castAuth(e.getProvider("auth").getImmediate());return new AuthInterop(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,l.KN)(eE,eI,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(o)),(0,l.KN)(eE,eI,"esm2017")},2696:function(e,i,s){"use strict";s.d(i,{ET:function(){return addDoc},hJ:function(){return collection},JU:function(){return doc},QT:function(){return getDoc},PL:function(){return getDocs},ad:function(){return getFirestore},Xo:function(){return orderBy},IO:function(){return query},pl:function(){return setDoc},r7:function(){return updateDoc},ar:function(){return where},qs:function(){return writeBatch}});var o,l,h,d,f,_,g,w,b,k,O,q,j,$,ee=s(3042),et=s(7087),er=s(4959),en=s(9901),ei="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},es={};(function(){function m(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,i,s){s||(s=0);var o=Array(16);if("string"==typeof i)for(var l=0;16>l;++l)o[l]=i.charCodeAt(s++)|i.charCodeAt(s++)<<8|i.charCodeAt(s++)<<16|i.charCodeAt(s++)<<24;else for(l=0;16>l;++l)o[l]=i[s++]|i[s++]<<8|i[s++]<<16|i[s++]<<24;i=e.g[0],s=e.g[1],l=e.g[2];var h=e.g[3],d=i+(h^s&(l^h))+o[0]+3614090360&4294967295;d=h+(l^(i=s+(d<<7&4294967295|d>>>25))&(s^l))+o[1]+3905402710&4294967295,d=l+(s^(h=i+(d<<12&4294967295|d>>>20))&(i^s))+o[2]+606105819&4294967295,d=s+(i^(l=h+(d<<17&4294967295|d>>>15))&(h^i))+o[3]+3250441966&4294967295,d=i+(h^(s=l+(d<<22&4294967295|d>>>10))&(l^h))+o[4]+4118548399&4294967295,d=h+(l^(i=s+(d<<7&4294967295|d>>>25))&(s^l))+o[5]+1200080426&4294967295,d=l+(s^(h=i+(d<<12&4294967295|d>>>20))&(i^s))+o[6]+2821735955&4294967295,d=s+(i^(l=h+(d<<17&4294967295|d>>>15))&(h^i))+o[7]+4249261313&4294967295,d=i+(h^(s=l+(d<<22&4294967295|d>>>10))&(l^h))+o[8]+1770035416&4294967295,d=h+(l^(i=s+(d<<7&4294967295|d>>>25))&(s^l))+o[9]+2336552879&4294967295,d=l+(s^(h=i+(d<<12&4294967295|d>>>20))&(i^s))+o[10]+4294925233&4294967295,d=s+(i^(l=h+(d<<17&4294967295|d>>>15))&(h^i))+o[11]+2304563134&4294967295,d=i+(h^(s=l+(d<<22&4294967295|d>>>10))&(l^h))+o[12]+1804603682&4294967295,d=h+(l^(i=s+(d<<7&4294967295|d>>>25))&(s^l))+o[13]+4254626195&4294967295,d=l+(s^(h=i+(d<<12&4294967295|d>>>20))&(i^s))+o[14]+2792965006&4294967295,d=s+(i^(l=h+(d<<17&4294967295|d>>>15))&(h^i))+o[15]+1236535329&4294967295,s=l+(d<<22&4294967295|d>>>10),d=i+(l^h&(s^l))+o[1]+4129170786&4294967295,i=s+(d<<5&4294967295|d>>>27),d=h+(s^l&(i^s))+o[6]+3225465664&4294967295,h=i+(d<<9&4294967295|d>>>23),d=l+(i^s&(h^i))+o[11]+643717713&4294967295,l=h+(d<<14&4294967295|d>>>18),d=s+(h^i&(l^h))+o[0]+3921069994&4294967295,s=l+(d<<20&4294967295|d>>>12),d=i+(l^h&(s^l))+o[5]+3593408605&4294967295,i=s+(d<<5&4294967295|d>>>27),d=h+(s^l&(i^s))+o[10]+38016083&4294967295,h=i+(d<<9&4294967295|d>>>23),d=l+(i^s&(h^i))+o[15]+3634488961&4294967295,l=h+(d<<14&4294967295|d>>>18),d=s+(h^i&(l^h))+o[4]+3889429448&4294967295,s=l+(d<<20&4294967295|d>>>12),d=i+(l^h&(s^l))+o[9]+568446438&4294967295,i=s+(d<<5&4294967295|d>>>27),d=h+(s^l&(i^s))+o[14]+3275163606&4294967295,h=i+(d<<9&4294967295|d>>>23),d=l+(i^s&(h^i))+o[3]+4107603335&4294967295,l=h+(d<<14&4294967295|d>>>18),d=s+(h^i&(l^h))+o[8]+1163531501&4294967295,s=l+(d<<20&4294967295|d>>>12),d=i+(l^h&(s^l))+o[13]+2850285829&4294967295,i=s+(d<<5&4294967295|d>>>27),d=h+(s^l&(i^s))+o[2]+4243563512&4294967295,h=i+(d<<9&4294967295|d>>>23),d=l+(i^s&(h^i))+o[7]+1735328473&4294967295,l=h+(d<<14&4294967295|d>>>18),d=s+(h^i&(l^h))+o[12]+2368359562&4294967295,d=i+((s=l+(d<<20&4294967295|d>>>12))^l^h)+o[5]+4294588738&4294967295,d=h+((i=s+(d<<4&4294967295|d>>>28))^s^l)+o[8]+2272392833&4294967295,d=l+((h=i+(d<<11&4294967295|d>>>21))^i^s)+o[11]+1839030562&4294967295,d=s+((l=h+(d<<16&4294967295|d>>>16))^h^i)+o[14]+4259657740&4294967295,d=i+((s=l+(d<<23&4294967295|d>>>9))^l^h)+o[1]+2763975236&4294967295,d=h+((i=s+(d<<4&4294967295|d>>>28))^s^l)+o[4]+1272893353&4294967295,d=l+((h=i+(d<<11&4294967295|d>>>21))^i^s)+o[7]+4139469664&4294967295,d=s+((l=h+(d<<16&4294967295|d>>>16))^h^i)+o[10]+3200236656&4294967295,d=i+((s=l+(d<<23&4294967295|d>>>9))^l^h)+o[13]+681279174&4294967295,d=h+((i=s+(d<<4&4294967295|d>>>28))^s^l)+o[0]+3936430074&4294967295,d=l+((h=i+(d<<11&4294967295|d>>>21))^i^s)+o[3]+3572445317&4294967295,d=s+((l=h+(d<<16&4294967295|d>>>16))^h^i)+o[6]+76029189&4294967295,d=i+((s=l+(d<<23&4294967295|d>>>9))^l^h)+o[9]+3654602809&4294967295,d=h+((i=s+(d<<4&4294967295|d>>>28))^s^l)+o[12]+3873151461&4294967295,d=l+((h=i+(d<<11&4294967295|d>>>21))^i^s)+o[15]+530742520&4294967295,d=s+((l=h+(d<<16&4294967295|d>>>16))^h^i)+o[2]+3299628645&4294967295,s=l+(d<<23&4294967295|d>>>9),d=i+(l^(s|~h))+o[0]+4096336452&4294967295,i=s+(d<<6&4294967295|d>>>26),d=h+(s^(i|~l))+o[7]+1126891415&4294967295,h=i+(d<<10&4294967295|d>>>22),d=l+(i^(h|~s))+o[14]+2878612391&4294967295,l=h+(d<<15&4294967295|d>>>17),d=s+(h^(l|~i))+o[5]+4237533241&4294967295,s=l+(d<<21&4294967295|d>>>11),d=i+(l^(s|~h))+o[12]+1700485571&4294967295,i=s+(d<<6&4294967295|d>>>26),d=h+(s^(i|~l))+o[3]+2399980690&4294967295,h=i+(d<<10&4294967295|d>>>22),d=l+(i^(h|~s))+o[10]+4293915773&4294967295,l=h+(d<<15&4294967295|d>>>17),d=s+(h^(l|~i))+o[1]+2240044497&4294967295,s=l+(d<<21&4294967295|d>>>11),d=i+(l^(s|~h))+o[8]+1873313359&4294967295,i=s+(d<<6&4294967295|d>>>26),d=h+(s^(i|~l))+o[15]+4264355552&4294967295,h=i+(d<<10&4294967295|d>>>22),d=l+(i^(h|~s))+o[6]+2734768916&4294967295,l=h+(d<<15&4294967295|d>>>17),d=s+(h^(l|~i))+o[13]+1309151649&4294967295,s=l+(d<<21&4294967295|d>>>11),d=i+(l^(s|~h))+o[4]+4149444226&4294967295,i=s+(d<<6&4294967295|d>>>26),d=h+(s^(i|~l))+o[11]+3174756917&4294967295,h=i+(d<<10&4294967295|d>>>22),d=l+(i^(h|~s))+o[2]+718787259&4294967295,l=h+(d<<15&4294967295|d>>>17),d=s+(h^(l|~i))+o[9]+3951481745&4294967295,e.g[0]=e.g[0]+i&4294967295,e.g[1]=e.g[1]+(l+(d<<21&4294967295|d>>>11))&4294967295,e.g[2]=e.g[2]+l&4294967295,e.g[3]=e.g[3]+h&4294967295}function t(e,i){this.h=i;for(var s=[],o=!0,l=e.length-1;0<=l;l--){var h=0|e[l];o&&h==i||(s[l]=h,o=!1)}this.g=s}!function(e,i){function c(){}c.prototype=i.prototype,e.D=i.prototype,e.prototype=new c,e.prototype.constructor=e,e.C=function(e,s,o){for(var l=Array(arguments.length-2),h=2;h<arguments.length;h++)l[h-2]=arguments[h];return i.prototype[s].apply(e,l)}}(m,function(){this.blockSize=-1}),m.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},m.prototype.u=function(e,i){void 0===i&&(i=e.length);for(var s=i-this.blockSize,o=this.B,l=this.h,h=0;h<i;){if(0==l)for(;h<=s;)n(this,e,h),h+=this.blockSize;if("string"==typeof e){for(;h<i;)if(o[l++]=e.charCodeAt(h++),l==this.blockSize){n(this,o),l=0;break}}else for(;h<i;)if(o[l++]=e[h++],l==this.blockSize){n(this,o),l=0;break}}this.h=l,this.o+=i},m.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var i=1;i<e.length-8;++i)e[i]=0;var s=8*this.o;for(i=e.length-8;i<e.length;++i)e[i]=255&s,s/=256;for(this.u(e),e=Array(16),i=s=0;4>i;++i)for(var o=0;32>o;o+=8)e[s++]=this.g[i]>>>o&255;return e};var e,i={};function u(e){return -128<=e&&128>e?Object.prototype.hasOwnProperty.call(i,e)?i[e]:i[e]=new t([0|e],0>e?-1:0):new t([0|e],0>e?-1:0)}function v(e){if(isNaN(e)||!isFinite(e))return s;if(0>e)return x(v(-e));for(var i=[],o=1,l=0;e>=o;l++)i[l]=e/o|0,o*=4294967296;return new t(i,0)}var s=u(0),h=u(1),d=u(16777216);function C(e){if(0!=e.h)return!1;for(var i=0;i<e.g.length;i++)if(0!=e.g[i])return!1;return!0}function B(e){return -1==e.h}function x(e){for(var i=e.g.length,s=[],o=0;o<i;o++)s[o]=~e.g[o];return new t(s,~e.h).add(h)}function F(e,i){return e.add(x(i))}function G(e,i){for(;(65535&e[i])!=e[i];)e[i+1]+=e[i]>>>16,e[i]&=65535,i++}function H(e,i){this.g=e,this.h=i}function D(e,i){if(C(i))throw Error("division by zero");if(C(e))return new H(s,s);if(B(e))return i=D(x(e),i),new H(x(i.g),x(i.h));if(B(i))return i=D(e,x(i)),new H(x(i.g),i.h);if(30<e.g.length){if(B(e)||B(i))throw Error("slowDivide_ only works with positive integers.");for(var o=h,l=i;0>=l.l(e);)o=I(o),l=I(l);var d=J(o,1),f=J(l,1);for(l=J(l,2),o=J(o,2);!C(l);){var _=f.add(l);0>=_.l(e)&&(d=d.add(o),f=_),l=J(l,1),o=J(o,1)}return i=F(e,d.j(i)),new H(d,i)}for(d=s;0<=e.l(i);){for(l=48>=(l=Math.ceil(Math.log(o=Math.max(1,Math.floor(e.m()/i.m())))/Math.LN2))?1:Math.pow(2,l-48),_=(f=v(o)).j(i);B(_)||0<_.l(e);)o-=l,_=(f=v(o)).j(i);C(f)&&(f=h),d=d.add(f),e=F(e,_)}return new H(d,e)}function I(e){for(var i=e.g.length+1,s=[],o=0;o<i;o++)s[o]=e.i(o)<<1|e.i(o-1)>>>31;return new t(s,e.h)}function J(e,i){var s=i>>5;i%=32;for(var o=e.g.length-s,l=[],h=0;h<o;h++)l[h]=0<i?e.i(h+s)>>>i|e.i(h+s+1)<<32-i:e.i(h+s);return new t(l,e.h)}(e=t.prototype).m=function(){if(B(this))return-x(this).m();for(var e=0,i=1,s=0;s<this.g.length;s++){var o=this.i(s);e+=(0<=o?o:4294967296+o)*i,i*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(C(this))return"0";if(B(this))return"-"+x(this).toString(e);for(var i=v(Math.pow(e,6)),s=this,o="";;){var l=D(s,i).g,h=((0<(s=F(s,l.j(i))).g.length?s.g[0]:s.h)>>>0).toString(e);if(C(s=l))return h+o;for(;6>h.length;)h="0"+h;o=h+o}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return B(e=F(this,e))?-1:C(e)?0:1},e.abs=function(){return B(this)?x(this):this},e.add=function(e){for(var i=Math.max(this.g.length,e.g.length),s=[],o=0,l=0;l<=i;l++){var h=o+(65535&this.i(l))+(65535&e.i(l)),d=(h>>>16)+(this.i(l)>>>16)+(e.i(l)>>>16);o=d>>>16,h&=65535,d&=65535,s[l]=d<<16|h}return new t(s,-2147483648&s[s.length-1]?-1:0)},e.j=function(e){if(C(this)||C(e))return s;if(B(this))return B(e)?x(this).j(x(e)):x(x(this).j(e));if(B(e))return x(this.j(x(e)));if(0>this.l(d)&&0>e.l(d))return v(this.m()*e.m());for(var i=this.g.length+e.g.length,o=[],l=0;l<2*i;l++)o[l]=0;for(l=0;l<this.g.length;l++)for(var h=0;h<e.g.length;h++){var f=this.i(l)>>>16,_=65535&this.i(l),g=e.i(h)>>>16,w=65535&e.i(h);o[2*l+2*h]+=_*w,G(o,2*l+2*h),o[2*l+2*h+1]+=f*w,G(o,2*l+2*h+1),o[2*l+2*h+1]+=_*g,G(o,2*l+2*h+1),o[2*l+2*h+2]+=f*g,G(o,2*l+2*h+2)}for(l=0;l<i;l++)o[l]=o[2*l+1]<<16|o[2*l];for(l=i;l<2*i;l++)o[l]=0;return new t(o,0)},e.A=function(e){return D(this,e).h},e.and=function(e){for(var i=Math.max(this.g.length,e.g.length),s=[],o=0;o<i;o++)s[o]=this.i(o)&e.i(o);return new t(s,this.h&e.h)},e.or=function(e){for(var i=Math.max(this.g.length,e.g.length),s=[],o=0;o<i;o++)s[o]=this.i(o)|e.i(o);return new t(s,this.h|e.h)},e.xor=function(e){for(var i=Math.max(this.g.length,e.g.length),s=[],o=0;o<i;o++)s[o]=this.i(o)^e.i(o);return new t(s,this.h^e.h)},m.prototype.digest=m.prototype.v,m.prototype.reset=m.prototype.s,m.prototype.update=m.prototype.u,l=es.Md5=m,t.prototype.add=t.prototype.add,t.prototype.multiply=t.prototype.j,t.prototype.modulo=t.prototype.A,t.prototype.compare=t.prototype.l,t.prototype.toNumber=t.prototype.m,t.prototype.toString=t.prototype.toString,t.prototype.getBits=t.prototype.i,t.fromNumber=v,t.fromString=function y(e,i){if(0==e.length)throw Error("number format error: empty string");if(2>(i=i||10)||36<i)throw Error("radix out of range: "+i);if("-"==e.charAt(0))return x(y(e.substring(1),i));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var o=v(Math.pow(i,8)),l=s,h=0;h<e.length;h+=8){var d=Math.min(8,e.length-h),f=parseInt(e.substring(h,h+d),i);8>d?(d=v(Math.pow(i,d)),l=l.j(d).add(v(f))):l=(l=l.j(o)).add(v(f))}return l},o=es.Integer=t}).apply(void 0!==ei?ei:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var eo="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},ea={};(function(){var e,i,s,o="function"==typeof Object.defineProperties?Object.defineProperty:function(e,i,s){return e==Array.prototype||e==Object.prototype||(e[i]=s.value),e},l=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof eo&&eo];for(var i=0;i<e.length;++i){var s=e[i];if(s&&s.Math==Math)return s}throw Error("Cannot find global object")}(this);!function(e,i){if(i)e:{var s=l;e=e.split(".");for(var h=0;h<e.length-1;h++){var d=e[h];if(!(d in s))break e;s=s[d]}(i=i(h=s[e=e[e.length-1]]))!=h&&null!=i&&o(s,e,{configurable:!0,writable:!0,value:i})}}("Array.prototype.values",function(e){return e||function(){var e,i,s,o;return e=this,e instanceof String&&(e+=""),i=0,s=!1,(o={next:function(){if(!s&&i<e.length)return{value:e[i++],done:!1};return s=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return o},o}});var O=O||{},q=this||self;function ha(e){var i=typeof e;return"array"==(i="object"!=i?i:e?Array.isArray(e)?"array":i:"null")||"object"==i&&"number"==typeof e.length}function n(e){var i=typeof e;return"object"==i&&null!=e||"function"==i}function ia(e,i,s){return e.call.apply(e.bind,arguments)}function ja(e,i,s){if(!e)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,o),e.apply(i,s)}}return function(){return e.apply(i,arguments)}}function p(e,i,s){return(p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja).apply(null,arguments)}function ka(e,i){var s=Array.prototype.slice.call(arguments,1);return function(){var i=s.slice();return i.push.apply(i,arguments),e.apply(this,i)}}function r(e,i){function c(){}c.prototype=i.prototype,e.aa=i.prototype,e.prototype=new c,e.prototype.constructor=e,e.Qb=function(e,s,o){for(var l=Array(arguments.length-2),h=2;h<arguments.length;h++)l[h-2]=arguments[h];return i.prototype[s].apply(e,l)}}function la(e){let i=e.length;if(0<i){let s=Array(i);for(let o=0;o<i;o++)s[o]=e[o];return s}return[]}function ma(e,i){for(let i=1;i<arguments.length;i++){let s=arguments[i];if(ha(s)){let i=e.length||0,o=s.length||0;e.length=i+o;for(let l=0;l<o;l++)e[i+l]=s[l]}else e.push(s)}}function t(e){return/^[\s\xa0]*$/.test(e)}function u(){var e=q.navigator;return e&&(e=e.userAgent)?e:""}function oa(e){return oa[" "](e),e}oa[" "]=function(){};var j=-1!=u().indexOf("Gecko")&&!(-1!=u().toLowerCase().indexOf("webkit")&&-1==u().indexOf("Edge"))&&!(-1!=u().indexOf("Trident")||-1!=u().indexOf("MSIE"))&&-1==u().indexOf("Edge");function qa(e,i,s){for(let o in e)i.call(s,e[o],o,e)}function sa(e){let i={};for(let s in e)i[s]=e[s];return i}let $="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ua(e,i){let s,o;for(let i=1;i<arguments.length;i++){for(s in o=arguments[i])e[s]=o[s];for(let i=0;i<$.length;i++)s=$[i],Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}}var ee=new class{constructor(e,i){this.i=e,this.j=i,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Ca,e=>e.reset());let Ca=class Ca{constructor(){this.next=this.g=this.h=null}set(e,i){this.h=e,this.g=i,this.next=null}reset(){this.next=this.g=this.h=null}};let et,er=!1,en=new class{constructor(){this.h=this.g=null}add(e,i){let s=ee.get();s.set(e,i),this.h?this.h.next=s:this.g=s,this.h=s}},Ea=()=>{let e=q.Promise.resolve(void 0);et=()=>{e.then(Da)}};var Da=()=>{let e;for(var i;e=null,en.g&&(e=en.g,en.g=en.g.next,en.g||(en.h=null),e.next=null),i=e;){try{i.h.call(i.g)}catch(e){!function(e){q.setTimeout(()=>{throw e},0)}(e)}ee.j(i),100>ee.h&&(ee.h++,i.next=ee.g,ee.g=i)}er=!1};function z(){this.s=this.s,this.C=this.C}function A(e,i){this.type=e,this.g=this.target=i,this.defaultPrevented=!1}z.prototype.s=!1,z.prototype.ma=function(){this.s||(this.s=!0,this.N())},z.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},A.prototype.h=function(){this.defaultPrevented=!0};var ei=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var e=!1,i=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let c=()=>{};q.addEventListener("test",c,i),q.removeEventListener("test",c,i)}catch(e){}return e}();function C(e,i){if(A.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var s=this.type=e.type,o=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=i,i=e.relatedTarget){if(j){e:{try{oa(i.nodeName);var l=!0;break e}catch(e){}l=!1}l||(i=null)}}else"mouseover"==s?i=e.fromElement:"mouseout"==s&&(i=e.toElement);this.relatedTarget=i,o?(this.clientX=void 0!==o.clientX?o.clientX:o.pageX,this.clientY=void 0!==o.clientY?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:es[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&C.aa.h.call(this)}}r(C,A);var es={2:"touch",3:"pen",4:"mouse"};C.prototype.h=function(){C.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var el="closure_listenable_"+(1e6*Math.random()|0),eu=0;function Ia(e,i,s,o,l){this.listener=e,this.proxy=null,this.src=i,this.type=s,this.capture=!!o,this.ha=l,this.key=++eu,this.da=this.fa=!1}function Ja(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Ka(e){this.src=e,this.g={},this.h=0}function Ma(e,i){var s=i.type;if(s in e.g){var o,l=e.g[s],h=Array.prototype.indexOf.call(l,i,void 0);(o=0<=h)&&Array.prototype.splice.call(l,h,1),o&&(Ja(i),0==e.g[s].length&&(delete e.g[s],e.h--))}}function La(e,i,s,o){for(var l=0;l<e.length;++l){var h=e[l];if(!h.da&&h.listener==i&&!!s==h.capture&&h.ha==o)return l}return -1}Ka.prototype.add=function(e,i,s,o,l){var h=e.toString();(e=this.g[h])||(e=this.g[h]=[],this.h++);var d=La(e,i,o,l);return -1<d?(i=e[d],s||(i.fa=!1)):((i=new Ia(i,this.src,h,!!o,l)).fa=s,e.push(i)),i};var eh="closure_lm_"+(1e6*Math.random()|0),ef={};function Ta(e,i,s,o,l,h){if(!i)throw Error("Invalid event type");var d=n(l)?!!l.capture:!!l,f=Ua(e);if(f||(e[eh]=f=new Ka(e)),(s=f.add(i,s,o,d,h)).proxy)return s;if(o=function a(e){return Xa.call(a.src,a.listener,e)},s.proxy=o,o.src=e,o.listener=s,e.addEventListener)ei||(l=d),void 0===l&&(l=!1),e.addEventListener(i.toString(),o,l);else if(e.attachEvent)e.attachEvent(Wa(i.toString()),o);else if(e.addListener&&e.removeListener)e.addListener(o);else throw Error("addEventListener and attachEvent are unavailable.");return s}function Za(e){if("number"!=typeof e&&e&&!e.da){var i=e.src;if(i&&i[el])Ma(i.i,e);else{var s=e.type,o=e.proxy;i.removeEventListener?i.removeEventListener(s,o,e.capture):i.detachEvent?i.detachEvent(Wa(s),o):i.addListener&&i.removeListener&&i.removeListener(o),(s=Ua(i))?(Ma(s,e),0==s.h&&(s.src=null,i[eh]=null)):Ja(e)}}}function Wa(e){return e in ef?ef[e]:ef[e]="on"+e}function Xa(e,i){if(e.da)e=!0;else{i=new C(i,this);var s=e.listener,o=e.ha||e.src;e.fa&&Za(e),e=s.call(o,i)}return e}function Ua(e){return(e=e[eh])instanceof Ka?e:null}var e_="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sa(e){return"function"==typeof e?e:(e[e_]||(e[e_]=function(i){return e.handleEvent(i)}),e[e_])}function E(){z.call(this),this.i=new Ka(this),this.M=this,this.F=null}function F(e,i){var s,o=e.F;if(o)for(s=[];o;o=o.F)s.push(o);if(e=e.M,o=i.type||i,"string"==typeof i)i=new A(i,e);else if(i instanceof A)i.target=i.target||e;else{var l=i;ua(i=new A(o,e),l)}if(l=!0,s)for(var h=s.length-1;0<=h;h--){var d=i.g=s[h];l=ab(d,o,!0,i)&&l}if(l=ab(d=i.g=e,o,!0,i)&&l,l=ab(d,o,!1,i)&&l,s)for(h=0;h<s.length;h++)l=ab(d=i.g=s[h],o,!1,i)&&l}function ab(e,i,s,o){if(!(i=e.i.g[String(i)]))return!0;i=i.concat();for(var l=!0,h=0;h<i.length;++h){var d=i[h];if(d&&!d.da&&d.capture==s){var f=d.listener,_=d.ha||d.src;d.fa&&Ma(e.i,d),l=!1!==f.call(_,o)&&l}}return l&&!o.defaultPrevented}function bb(e,i,s){if("function"==typeof e)s&&(e=p(e,s));else if(e&&"function"==typeof e.handleEvent)e=p(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(i)?-1:q.setTimeout(e,i||0)}r(E,z),E.prototype[el]=!0,E.prototype.removeEventListener=function(e,i,s,o){!function Ya(e,i,s,o,l){if(Array.isArray(i))for(var h=0;h<i.length;h++)Ya(e,i[h],s,o,l);else(o=n(o)?!!o.capture:!!o,s=Sa(s),e&&e[el])?(e=e.i,(i=String(i).toString())in e.g&&-1<(s=La(h=e.g[i],s,o,l))&&(Ja(h[s]),Array.prototype.splice.call(h,s,1),0==h.length&&(delete e.g[i],e.h--))):e&&(e=Ua(e))&&(i=e.g[i.toString()],e=-1,i&&(e=La(i,s,o,l)),(s=-1<e?i[e]:null)&&Za(s))}(this,e,i,s,o)},E.prototype.N=function(){if(E.aa.N.call(this),this.i){var e,i=this.i;for(e in i.g){for(var s=i.g[e],o=0;o<s.length;o++)Ja(s[o]);delete i.g[e],i.h--}}this.F=null},E.prototype.K=function(e,i,s,o){return this.i.add(String(e),i,!1,s,o)},E.prototype.L=function(e,i,s,o){return this.i.add(String(e),i,!0,s,o)};let eb=class eb extends z{constructor(e,i){super(),this.m=e,this.l=i,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function cb(e){e.g=bb(()=>{e.g=null,e.i&&(e.i=!1,cb(e))},e.l);let i=e.h;e.h=null,e.m.apply(null,i)}(this)}N(){super.N(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}};function G(e){z.call(this),this.h=e,this.g={}}r(G,z);var ep=[];function gb(e){qa(e.g,function(e,i){this.g.hasOwnProperty(i)&&Za(e)},e),e.g={}}G.prototype.N=function(){G.aa.N.call(this),gb(this)},G.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var em=q.JSON.stringify,eg=q.JSON.parse,ey=class{stringify(e){return q.JSON.stringify(e,void 0)}parse(e){return q.JSON.parse(e,void 0)}};function kb(){}function lb(e){return e.h||(e.h=e.i())}function mb(){}kb.prototype.h=null;var eE={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nb(){A.call(this,"d")}function ob(){A.call(this,"c")}r(nb,A),r(ob,A);var eI={},eT=null;function qb(){return eT=eT||new E}function rb(e){A.call(this,eI.La,e)}function J(e){let i=qb();F(i,new rb(i))}function sb(e,i){A.call(this,eI.STAT_EVENT,e),this.stat=i}function K(e){let i=qb();F(i,new sb(i,e))}function tb(e,i){A.call(this,eI.Ma,e),this.size=i}function ub(e,i){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){e()},i)}function vb(){this.g=!0}function L(e,i,s,o){e.info(function(){return"XMLHTTP TEXT ("+i+"): "+function(e,i){if(!e.g)return i;if(!i)return null;try{var s=JSON.parse(i);if(s){for(e=0;e<s.length;e++)if(Array.isArray(s[e])){var o=s[e];if(!(2>o.length)){var l=o[1];if(Array.isArray(l)&&!(1>l.length)){var h=l[0];if("noop"!=h&&"stop"!=h&&"close"!=h)for(var d=1;d<l.length;d++)l[d]=""}}}}return em(s)}catch(e){return i}}(e,s)+(o?" "+o:"")})}eI.La="serverreachability",r(rb,A),eI.STAT_EVENT="statevent",r(sb,A),eI.Ma="timingevent",r(tb,A),vb.prototype.xa=function(){this.g=!1},vb.prototype.info=function(){};var ev={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eP={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Db(){}function M(e,i,s,o){this.j=e,this.i=i,this.l=s,this.R=o||1,this.U=new G(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Eb}function Eb(){this.i=null,this.g="",this.h=!1}r(Db,kb),Db.prototype.g=function(){return new XMLHttpRequest},Db.prototype.i=function(){return{}},i=new Db;var eA={},eR={};function Hb(e,i,s){e.L=1,e.v=Ib(N(i)),e.m=s,e.P=!0,Jb(e,null)}function Jb(e,i){e.F=Date.now(),Kb(e),e.A=N(e.v);var s=e.A,o=e.R;Array.isArray(o)||(o=[String(o)]),Lb(s.i,"t",o),e.C=0,s=e.j.J,e.h=new Eb,e.g=Mb(e.j,s?i:null,!e.m),0<e.O&&(e.M=new eb(p(e.Y,e,e.g),e.O)),i=e.U,s=e.g,o=e.ca;var l="readystatechange";Array.isArray(l)||(l&&(ep[0]=l.toString()),l=ep);for(var h=0;h<l.length;h++){var d=function Qa(e,i,s,o,l){if(o&&o.once)return function Ra(e,i,s,o,l){if(Array.isArray(i)){for(var h=0;h<i.length;h++)Ra(e,i[h],s,o,l);return null}return s=Sa(s),e&&e[el]?e.L(i,s,n(o)?!!o.capture:!!o,l):Ta(e,i,s,!0,o,l)}(e,i,s,o,l);if(Array.isArray(i)){for(var h=0;h<i.length;h++)Qa(e,i[h],s,o,l);return null}return s=Sa(s),e&&e[el]?e.K(i,s,n(o)?!!o.capture:!!o,l):Ta(e,i,s,!1,o,l)}(s,l[h],o||i.handleEvent,!1,i.h||i);if(!d)break;i.g[d.key]=d}i=e.H?sa(e.H):{},e.m?(e.u||(e.u="POST"),i["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,i)):(e.u="GET",e.g.ea(e.A,e.u,null,i)),J(),function(e,i,s,o,l,h){e.info(function(){if(e.g){if(h)for(var d="",f=h.split("&"),_=0;_<f.length;_++){var g=f[_].split("=");if(1<g.length){var w=g[0];g=g[1];var b=w.split("_");d=2<=b.length&&"type"==b[1]?d+(w+"=")+g+"&":d+(w+"=redacted&")}}else d=null}else d=h;return"XMLHTTP REQ ("+o+") [attempt "+l+"]: "+i+"\n"+s+"\n"+d})}(e.i,e.u,e.A,e.l,e.R,e.m)}function Pb(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function Kb(e){e.S=Date.now()+e.I,Wb(e,e.I)}function Wb(e,i){if(null!=e.B)throw Error("WatchDog timer not null");e.B=ub(p(e.ba,e),i)}function Ob(e){e.B&&(q.clearTimeout(e.B),e.B=null)}function Qb(e){0==e.j.G||e.J||Ub(e.j,e)}function Q(e){Ob(e);var i=e.M;i&&"function"==typeof i.ma&&i.ma(),e.M=null,gb(e.U),e.g&&(i=e.g,e.g=null,i.abort(),i.ma())}function Rb(e,i){try{var s=e.j;if(0!=s.G&&(s.g==e||Xb(s.h,e))){if(!e.K&&Xb(s.h,e)&&3==s.G){try{var o=s.Da.g.parse(i)}catch(e){o=null}if(Array.isArray(o)&&3==o.length){var l=o;if(0==l[0]){e:if(!s.u){if(s.g){if(s.g.F+3e3<e.F)Yb(s),Zb(s);else break e}$b(s),K(18)}}else s.za=l[1],0<s.za-s.T&&37500>l[2]&&s.F&&0==s.v&&!s.C&&(s.C=ub(p(s.Za,s),6e3));if(1>=ac(s.h)&&s.ca){try{s.ca()}catch(e){}s.ca=void 0}}else R(s,11)}else if((e.K||s.g==e)&&Yb(s),!t(i))for(l=s.Da.g.parse(i),i=0;i<l.length;i++){let f=l[i];if(s.T=f[0],f=f[1],2==s.G){if("c"==f[0]){s.K=f[1],s.ia=f[2];let i=f[3];null!=i&&(s.la=i,s.j.info("VER="+s.la));let l=f[4];null!=l&&(s.Aa=l,s.j.info("SVER="+s.Aa));let _=f[5];null!=_&&"number"==typeof _&&0<_&&(o=1.5*_,s.L=o,s.j.info("backChannelRequestTimeoutMs_="+o)),o=s;let g=e.g;if(g){let e=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var h=o.h;h.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(h.j=h.l,h.g=new Set,h.h&&(bc(h,h.h),h.h=null))}if(o.D){let e=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(o.ya=e,S(o.I,o.D,e))}}if(s.G=3,s.l&&s.l.ua(),s.ba&&(s.R=Date.now()-e.F,s.j.info("Handshake RTT: "+s.R+"ms")),(o=s).qa=cc(o,o.J?o.ia:null,o.W),e.K){dc(o.h,e);var d=o.L;d&&(e.I=d),e.B&&(Ob(e),Kb(e)),o.g=e}else ec(o);0<s.i.length&&fc(s)}else"stop"!=f[0]&&"close"!=f[0]||R(s,7)}else 3==s.G&&("stop"==f[0]||"close"==f[0]?"stop"==f[0]?R(s,7):gc(s):"noop"!=f[0]&&s.l&&s.l.ta(f),s.v=0)}}J(4)}catch(e){}}M.prototype.ca=function(e){e=e.target;let i=this.M;i&&3==P(e)?i.j():this.Y(e)},M.prototype.Y=function(e){try{if(e==this.g)e:{let b=P(this.g);var i=this.g.Ba();let k=this.g.Z();if(!(3>b)&&(3!=b||this.g&&(this.h.h||this.g.oa()||Nb(this.g)))){this.J||4!=b||7==i||(8==i||0>=k?J(3):J(2)),Ob(this);var s=this.g.Z();this.X=s;t:if(Pb(this)){var o=Nb(this.g);e="";var l=o.length,h=4==P(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Q(this),Qb(this);var d="";break t}this.h.i=new q.TextDecoder}for(i=0;i<l;i++)this.h.h=!0,e+=this.h.i.decode(o[i],{stream:!(h&&i==l-1)});o.length=0,this.h.g+=e,this.C=0,d=this.h.g}else d=this.g.oa();if(this.o=200==s,function(e,i,s,o,l,h,d){e.info(function(){return"XMLHTTP RESP ("+o+") [ attempt "+l+"]: "+i+"\n"+s+"\n"+h+" "+d})}(this.i,this.u,this.A,this.l,this.R,b,s),this.o){if(this.T&&!this.K){t:{if(this.g){var f,_=this.g;if((f=_.g?_.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!t(f)){var g=f;break t}}g=null}if(s=g)L(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rb(this,s);else{this.o=!1,this.s=3,K(12),Q(this),Qb(this);break e}}if(this.P){let e;for(s=!0;!this.J&&this.C<d.length;)if((e=function(e,i){var s=e.C,o=i.indexOf("\n",s);return -1==o?eR:isNaN(s=Number(i.substring(s,o)))?eA:(o+=1)+s>i.length?eR:(i=i.slice(o,o+s),e.C=o+s,i)}(this,d))==eR){4==b&&(this.s=4,K(14),s=!1),L(this.i,this.l,null,"[Incomplete Response]");break}else if(e==eA){this.s=4,K(15),L(this.i,this.l,d,"[Invalid Chunk]"),s=!1;break}else L(this.i,this.l,e,null),Rb(this,e);if(Pb(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=b||0!=d.length||this.h.h||(this.s=1,K(16),s=!1),this.o=this.o&&s,s){if(0<d.length&&!this.W){this.W=!0;var w=this.j;w.g==this&&w.ba&&!w.M&&(w.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Tb(w),w.M=!0,K(11))}}else L(this.i,this.l,d,"[Invalid Chunked Response]"),Q(this),Qb(this)}else L(this.i,this.l,d,null),Rb(this,d);4==b&&Q(this),this.o&&!this.J&&(4==b?Ub(this.j,this):(this.o=!1,Kb(this)))}else(function(e){let i={};e=(e.g&&2<=P(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let o=0;o<e.length;o++){if(t(e[o]))continue;var s=function(e){var i=1;e=e.split(":");let s=[];for(;0<i&&e.length;)s.push(e.shift()),i--;return e.length&&s.push(e.join(":")),s}(e[o]);let l=s[0];if("string"!=typeof(s=s[1]))continue;s=s.trim();let h=i[l]||[];i[l]=h,h.push(s)}!function(e,i){for(let s in e)i.call(void 0,e[s],s,e)}(i,function(e){return e.join(", ")})})(this.g),400==s&&0<d.indexOf("Unknown SID")?(this.s=3,K(12)):(this.s=0,K(13)),Q(this),Qb(this)}}}catch(e){}finally{}},M.prototype.cancel=function(){this.J=!0,Q(this)},M.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(function(e,i){e.info(function(){return"TIMEOUT: "+i})}(this.i,this.A),2!=this.L&&(J(),K(17)),Q(this),this.s=2,Qb(this)):Wb(this,this.S-e)};var ew=class{constructor(e,i){this.g=e,this.map=i}};function ic(e){this.l=e||10,e=q.PerformanceNavigationTiming?0<(e=q.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(q.chrome&&q.chrome.loadTimes&&q.chrome.loadTimes()&&q.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jc(e){return!!e.h||!!e.g&&e.g.size>=e.j}function ac(e){return e.h?1:e.g?e.g.size:0}function Xb(e,i){return e.h?e.h==i:!!e.g&&e.g.has(i)}function bc(e,i){e.g?e.g.add(i):e.h=i}function dc(e,i){e.h&&e.h==i?e.h=null:e.g&&e.g.has(i)&&e.g.delete(i)}function kc(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let i=e.i;for(let s of e.g.values())i=i.concat(s.D);return i}return la(e.i)}function nc(e,i){if(e.forEach&&"function"==typeof e.forEach)e.forEach(i,void 0);else if(ha(e)||"string"==typeof e)Array.prototype.forEach.call(e,i,void 0);else for(var s=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(ha(e)||"string"==typeof e){var i=[];e=e.length;for(var s=0;s<e;s++)i.push(s);return i}for(let o in i=[],s=0,e)i[s++]=o;return i}}}(e),o=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(ha(e)){for(var i=[],s=e.length,o=0;o<s;o++)i.push(e[o]);return i}for(o in i=[],s=0,e)i[s++]=e[o];return i}(e),l=o.length,h=0;h<l;h++)i.call(void 0,o[h],s&&s[h],e)}ic.prototype.cancel=function(){if(this.i=kc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var eV=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function T(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof T){this.h=e.h,qc(this,e.j),this.o=e.o,this.g=e.g,rc(this,e.s),this.l=e.l;var i=e.i,s=new sc;s.i=i.i,i.g&&(s.g=new Map(i.g),s.h=i.h),tc(this,s),this.m=e.m}else e&&(i=String(e).match(eV))?(this.h=!1,qc(this,i[1]||"",!0),this.o=uc(i[2]||""),this.g=uc(i[3]||"",!0),rc(this,i[4]),this.l=uc(i[5]||"",!0),tc(this,i[6]||"",!0),this.m=uc(i[7]||"")):(this.h=!1,this.i=new sc(null,this.h))}function N(e){return new T(e)}function qc(e,i,s){e.j=s?uc(i,!0):i,e.j&&(e.j=e.j.replace(/:$/,""))}function rc(e,i){if(i){if(isNaN(i=Number(i))||0>i)throw Error("Bad port number "+i);e.s=i}else e.s=null}function tc(e,i,s){var o,l;i instanceof sc?(e.i=i,o=e.i,(l=e.h)&&!o.j&&(U(o),o.i=null,o.g.forEach(function(e,i){var s=i.toLowerCase();i!=s&&(Dc(this,i),Lb(this,s,e))},o)),o.j=l):(s||(i=vc(i,ek)),e.i=new sc(i,e.h))}function S(e,i,s){e.i.set(i,s)}function Ib(e){return S(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function uc(e,i){return e?i?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function vc(e,i,s){return"string"==typeof e?(e=encodeURI(e).replace(i,Cc),s&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Cc(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}T.prototype.toString=function(){var e=[],i=this.j;i&&e.push(vc(i,eS,!0),":");var s=this.g;return(s||"file"==i)&&(e.push("//"),(i=this.o)&&e.push(vc(i,eS,!0),"@"),e.push(encodeURIComponent(String(s)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(s=this.s)&&e.push(":",String(s))),(s=this.l)&&(this.g&&"/"!=s.charAt(0)&&e.push("/"),e.push(vc(s,"/"==s.charAt(0)?eD:eC,!0))),(s=this.i.toString())&&e.push("?",s),(s=this.m)&&e.push("#",vc(s,eN)),e.join("")};var eS=/[#\/\?@]/g,eC=/[#\?:]/g,eD=/[#\?]/g,ek=/[#\?@]/g,eN=/#/g;function sc(e,i){this.h=this.g=null,this.i=e||null,this.j=!!i}function U(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,i){if(e){e=e.split("&");for(var s=0;s<e.length;s++){var o=e[s].indexOf("="),l=null;if(0<=o){var h=e[s].substring(0,o);l=e[s].substring(o+1)}else h=e[s];i(h,l?decodeURIComponent(l.replace(/\+/g," ")):"")}}}(e.i,function(i,s){e.add(decodeURIComponent(i.replace(/\+/g," ")),s)}))}function Dc(e,i){U(e),i=V(e,i),e.g.has(i)&&(e.i=null,e.h-=e.g.get(i).length,e.g.delete(i))}function Ec(e,i){return U(e),i=V(e,i),e.g.has(i)}function Lb(e,i,s){Dc(e,i),0<s.length&&(e.i=null,e.g.set(V(e,i),la(s)),e.h+=s.length)}function V(e,i){return i=String(i),e.j&&(i=i.toLowerCase()),i}function W(e,i,s,o,l){try{l&&(l.onload=null,l.onerror=null,l.onabort=null,l.ontimeout=null),o(s)}catch(e){}}function Hc(){this.g=new ey}function Jc(e){this.l=e.Ub||null,this.j=e.eb||!1}function Kc(e,i){E.call(this),this.D=e,this.o=i,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Nc(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Mc(e){e.readyState=4,e.l=null,e.j=null,e.v=null,Lc(e)}function Lc(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Oc(e){let i="";return qa(e,function(e,s){i+=s+":"+e+"\r\n"}),i}function Pc(e,i,s){e:{for(o in s){var o=!1;break e}o=!0}o||(s=Oc(s),"string"==typeof e?null!=s&&encodeURIComponent(String(s)):S(e,i,s))}function X(e){E.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(s=sc.prototype).add=function(e,i){U(this),this.i=null,e=V(this,e);var s=this.g.get(e);return s||this.g.set(e,s=[]),s.push(i),this.h+=1,this},s.forEach=function(e,i){U(this),this.g.forEach(function(s,o){s.forEach(function(s){e.call(i,s,o,this)},this)},this)},s.na=function(){U(this);let e=Array.from(this.g.values()),i=Array.from(this.g.keys()),s=[];for(let o=0;o<i.length;o++){let l=e[o];for(let e=0;e<l.length;e++)s.push(i[o])}return s},s.V=function(e){U(this);let i=[];if("string"==typeof e)Ec(this,e)&&(i=i.concat(this.g.get(V(this,e))));else{e=Array.from(this.g.values());for(let s=0;s<e.length;s++)i=i.concat(e[s])}return i},s.set=function(e,i){return U(this),this.i=null,Ec(this,e=V(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[i]),this.h+=1,this},s.get=function(e,i){return e&&0<(e=this.V(e)).length?String(e[0]):i},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],i=Array.from(this.g.keys());for(var s=0;s<i.length;s++){var o=i[s];let h=encodeURIComponent(String(o)),d=this.V(o);for(o=0;o<d.length;o++){var l=h;""!==d[o]&&(l+="="+encodeURIComponent(String(d[o]))),e.push(l)}}return this.i=e.join("&")},r(Jc,kb),Jc.prototype.g=function(){return new Kc(this.l,this.j)},Jc.prototype.i=(e={},function(){return e}),r(Kc,E),(s=Kc.prototype).open=function(e,i){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=i,this.readyState=1,Lc(this)},s.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let i={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(i.body=e),(this.D||q).fetch(new Request(this.A,i)).then(this.Sa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Mc(this)),this.readyState=0},s.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Lc(this)),this.g&&(this.readyState=3,Lc(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==q.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nc(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))}},s.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var i=e.value?e.value:new Uint8Array(0);(i=this.v.decode(i,{stream:!e.done}))&&(this.response=this.responseText+=i)}e.done?Mc(this):Lc(this),3==this.readyState&&Nc(this)}},s.Ra=function(e){this.g&&(this.response=this.responseText=e,Mc(this))},s.Qa=function(e){this.g&&(this.response=e,Mc(this))},s.ga=function(){this.g&&Mc(this)},s.setRequestHeader=function(e,i){this.u.append(e,i)},s.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],i=this.h.entries();for(var s=i.next();!s.done;)e.push((s=s.value)[0]+": "+s[1]),s=i.next();return e.join("\r\n")},Object.defineProperty(Kc.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),r(X,E);var eO=/^https?$/i,eL=["POST","PUT"];function Sc(e,i){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=i,e.m=5,Uc(e),Vc(e)}function Uc(e){e.A||(e.A=!0,F(e,"complete"),F(e,"error"))}function Wc(e){if(e.h&&void 0!==O&&(!e.v[1]||4!=P(e)||2!=e.Z())){if(e.u&&4==P(e))bb(e.Ea,0,e);else if(F(e,"readystatechange"),4==P(e)){e.h=!1;try{let d=e.Z();switch(d){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i,s,o=!0;break;default:o=!1}if(!(i=o)){if(s=0===d){var l=String(e.D).match(eV)[1]||null;!l&&q.self&&q.self.location&&(l=q.self.location.protocol.slice(0,-1)),s=!eO.test(l?l.toLowerCase():"")}i=s}if(i)F(e,"complete"),F(e,"success");else{e.m=6;try{var h=2<P(e)?e.g.statusText:""}catch(e){h=""}e.l=h+" ["+e.Z()+"]",Uc(e)}}finally{Vc(e)}}}}function Vc(e,i){if(e.g){Tc(e);let s=e.g,o=e.v[0]?()=>{}:null;e.g=null,e.v=null,i||F(e,"ready");try{s.onreadystatechange=o}catch(e){}}}function Tc(e){e.I&&(q.clearTimeout(e.I),e.I=null)}function P(e){return e.g?e.g.readyState:0}function Nb(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xc(e,i,s){return s&&s.internalChannelParams&&s.internalChannelParams[e]||i}function Yc(e){this.Aa=0,this.i=[],this.j=new vb,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xc("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xc("baseRetryDelayMs",5e3,e),this.cb=Xc("retryDelaySeedMs",1e4,e),this.Wa=Xc("forwardChannelMaxRetries",2,e),this.wa=Xc("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new ic(e&&e.concurrentRequestLimit),this.Da=new Hc,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function gc(e){if(Zc(e),3==e.G){var i=e.U++,s=N(e.I);if(S(s,"SID",e.K),S(s,"RID",i),S(s,"TYPE","terminate"),$c(e,s),(i=new M(e,e.j,i)).L=2,i.v=Ib(N(s)),s=!1,q.navigator&&q.navigator.sendBeacon)try{s=q.navigator.sendBeacon(i.v.toString(),"")}catch(e){}!s&&q.Image&&((new Image).src=i.v,s=!0),s||(i.g=Mb(i.j,null),i.g.ea(i.v)),i.F=Date.now(),Kb(i)}ad(e)}function Zb(e){e.g&&(Tb(e),e.g.cancel(),e.g=null)}function Zc(e){Zb(e),e.u&&(q.clearTimeout(e.u),e.u=null),Yb(e),e.h.cancel(),e.s&&("number"==typeof e.s&&q.clearTimeout(e.s),e.s=null)}function fc(e){if(!jc(e.h)&&!e.s){e.s=!0;var i=e.Ga;et||Ea(),er||(et(),er=!0),en.add(i,e),e.B=0}}function ed(e,i){var s;s=i?i.l:e.U++;let o=N(e.I);S(o,"SID",e.K),S(o,"RID",s),S(o,"AID",e.T),$c(e,o),e.m&&e.o&&Pc(o,e.m,e.o),s=new M(e,e.j,s,e.B+1),null===e.m&&(s.H=e.o),i&&(e.i=i.D.concat(e.i)),i=dd(e,s,1e3),s.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),bc(e.h,s),Hb(s,o,i)}function $c(e,i){e.H&&qa(e.H,function(e,s){S(i,s,e)}),e.l&&nc({},function(e,s){S(i,s,e)})}function dd(e,i,s){s=Math.min(e.i.length,s);var o=e.l?p(e.l.Na,e.l,e):null;e:{var l=e.i;let i=-1;for(;;){let e=["count="+s];-1==i?0<s?(i=l[0].g,e.push("ofs="+i)):i=0:e.push("ofs="+i);let h=!0;for(let d=0;d<s;d++){let s=l[d].g,f=l[d].map;if(0>(s-=i))i=Math.max(0,l[d].g-100),h=!1;else try{!function(e,i,s){let o=s||"";try{nc(e,function(e,s){let l=e;n(e)&&(l=em(e)),i.push(o+s+"="+encodeURIComponent(l))})}catch(e){throw i.push(o+"type="+encodeURIComponent("_badmap")),e}}(f,e,"req"+s+"_")}catch(e){o&&o(f)}}if(h){o=e.join("&");break e}}}return e=e.i.splice(0,s),i.D=e,o}function ec(e){if(!e.g&&!e.u){e.Y=1;var i=e.Fa;et||Ea(),er||(et(),er=!0),en.add(i,e),e.v=0}}function $b(e){return!e.g&&!e.u&&!(3<=e.v)&&(e.Y++,e.u=ub(p(e.Fa,e),cd(e,e.v)),e.v++,!0)}function Tb(e){null!=e.A&&(q.clearTimeout(e.A),e.A=null)}function fd(e){e.g=new M(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var i=N(e.qa);S(i,"RID","rpc"),S(i,"SID",e.K),S(i,"AID",e.T),S(i,"CI",e.F?"0":"1"),!e.F&&e.ja&&S(i,"TO",e.ja),S(i,"TYPE","xmlhttp"),$c(e,i),e.m&&e.o&&Pc(i,e.m,e.o),e.L&&(e.g.I=e.L);var s=e.g;e=e.ia,s.L=1,s.v=Ib(N(i)),s.m=null,s.P=!0,Jb(s,e)}function Yb(e){null!=e.C&&(q.clearTimeout(e.C),e.C=null)}function Ub(e,i){var s=null;if(e.g==i){Yb(e),Tb(e),e.g=null;var o=2}else{if(!Xb(e.h,i))return;s=i.D,dc(e.h,i),o=1}if(0!=e.G){if(i.o){if(1==o){s=i.m?i.m.length:0,i=Date.now()-i.F;var l,h=e.B;F(o=qb(),new tb(o,s)),fc(e)}else ec(e)}else if(3==(h=i.s)||0==h&&0<i.X||!(1==o&&(l=i,!(ac(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=l.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.B>=(e.Va?0:e.Wa))&&(e.s=ub(p(e.Ga,e,l),cd(e,e.B)),e.B++,!0)))||2==o&&$b(e)))switch(s&&0<s.length&&((i=e.h).i=i.i.concat(s)),h){case 1:R(e,5);break;case 4:R(e,10);break;case 3:R(e,6);break;default:R(e,2)}}}function cd(e,i){let s=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(s*=2),s*i}function R(e,i){if(e.j.info("Error code "+i),2==i){var s=p(e.fb,e),o=e.Xa;let i=!o;o=new T(o||"//www.google.com/images/cleardot.gif"),q.location&&"http"==q.location.protocol||qc(o,"https"),Ib(o),i?function(e,i){let s=new vb;if(q.Image){let o=new Image;o.onload=ka(W,s,"TestLoadImage: loaded",!0,i,o),o.onerror=ka(W,s,"TestLoadImage: error",!1,i,o),o.onabort=ka(W,s,"TestLoadImage: abort",!1,i,o),o.ontimeout=ka(W,s,"TestLoadImage: timeout",!1,i,o),q.setTimeout(function(){o.ontimeout&&o.ontimeout()},1e4),o.src=e}else i(!1)}(o.toString(),s):function(e,i){let s=new vb,o=new AbortController,l=setTimeout(()=>{o.abort(),W(s,"TestPingServer: timeout",!1,i)},1e4);fetch(e,{signal:o.signal}).then(e=>{clearTimeout(l),e.ok?W(s,"TestPingServer: ok",!0,i):W(s,"TestPingServer: server error",!1,i)}).catch(()=>{clearTimeout(l),W(s,"TestPingServer: error",!1,i)})}(o.toString(),s)}else K(2);e.G=0,e.l&&e.l.sa(i),ad(e),Zc(e)}function ad(e){if(e.G=0,e.ka=[],e.l){let i=kc(e.h);(0!=i.length||0!=e.i.length)&&(ma(e.ka,i),ma(e.ka,e.i),e.h.i.length=0,la(e.i),e.i.length=0),e.l.ra()}}function cc(e,i,s){var o=s instanceof T?N(s):new T(s);if(""!=o.g)i&&(o.g=i+"."+o.g),rc(o,o.s);else{var l=q.location;o=l.protocol,i=i?i+"."+l.hostname:l.hostname,l=+l.port;var h=new T(null);o&&qc(h,o),i&&(h.g=i),l&&rc(h,l),s&&(h.l=s),o=h}return s=e.D,i=e.ya,s&&i&&S(o,s,i),S(o,"VER",e.la),$c(e,o),o}function Mb(e,i,s){if(i&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(i=new X(e.Ca&&!e.pa?new Jc({eb:s}):e.pa)).Ha(e.J),i}function gd(){}function hd(){}function Y(e,i){E.call(this),this.g=new Yc(i),this.l=e,this.h=i&&i.messageUrlParams||null,e=i&&i.messageHeaders||null,i&&i.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=i&&i.initMessageHeaders||null,i&&i.messageContentType&&(e?e["X-WebChannel-Content-Type"]=i.messageContentType:e={"X-WebChannel-Content-Type":i.messageContentType}),i&&i.va&&(e?e["X-WebChannel-Client-Profile"]=i.va:e={"X-WebChannel-Client-Profile":i.va}),this.g.S=e,(e=i&&i.Sb)&&!t(e)&&(this.g.m=e),this.v=i&&i.supportsCrossDomainXhr||!1,this.u=i&&i.sendRawJson||!1,(i=i&&i.httpSessionIdParam)&&!t(i)&&(this.g.D=i,null!==(e=this.h)&&i in e&&i in(e=this.h)&&delete e[i]),this.j=new Z(this)}function id(e){nb.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var i=e.__sm__;if(i){e:{for(let s in i){e=s;break e}e=void 0}(this.i=e)&&(e=this.i,i=null!==i&&e in i?i[e]:void 0),this.data=i}else this.data=e}function jd(){ob.call(this),this.status=1}function Z(e){this.g=e}(s=X.prototype).Ha=function(e){this.J=e},s.ea=function(e,s,o,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);s=s?s.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():i.g(),this.v=this.o?lb(this.o):lb(i),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(s,String(e),!0),this.B=!1}catch(e){Sc(this,e);return}if(e=o||"",o=new Map(this.headers),l){if(Object.getPrototypeOf(l)===Object.prototype)for(var h in l)o.set(h,l[h]);else if("function"==typeof l.keys&&"function"==typeof l.get)for(let e of l.keys())o.set(e,l.get(e));else throw Error("Unknown input type for opt_headers: "+String(l))}for(let[i,d]of(l=Array.from(o.keys()).find(e=>"content-type"==e.toLowerCase()),h=q.FormData&&e instanceof q.FormData,!(0<=Array.prototype.indexOf.call(eL,s,void 0))||l||h||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),o))this.g.setRequestHeader(i,d);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Tc(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){Sc(this,e)}},s.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,F(this,"complete"),F(this,"abort"),Vc(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vc(this,!0)),X.aa.N.call(this)},s.Ea=function(){this.s||(this.B||this.u||this.j?Wc(this):this.bb())},s.bb=function(){Wc(this)},s.isActive=function(){return!!this.g},s.Z=function(){try{return 2<P(this)?this.g.status:-1}catch(e){return -1}},s.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},s.Oa=function(e){if(this.g){var i=this.g.responseText;return e&&0==i.indexOf(e)&&(i=i.substring(e.length)),eg(i)}},s.Ba=function(){return this.m},s.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(s=Yc.prototype).la=8,s.G=1,s.connect=function(e,i,s,o){K(0),this.W=e,this.H=i||{},s&&void 0!==o&&(this.H.OSID=s,this.H.OAID=o),this.F=this.X,this.I=cc(this,null,this.W),fc(this)},s.Ga=function(e){if(this.s){if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let l=new M(this,this.j,e),h=this.o;if(this.S&&(h?ua(h=sa(h),this.S):h=this.S),null!==this.m||this.O||(l.H=h,h=null),this.P)e:{for(var i=0,s=0;s<this.i.length;s++){t:{var o=this.i[s];if("__data__"in o.map&&"string"==typeof(o=o.map.__data__)){o=o.length;break t}o=void 0}if(void 0===o)break;if(4096<(i+=o)){i=s;break e}if(4096===i||s===this.i.length-1){i=s+1;break e}}i=1e3}else i=1e3;i=dd(this,l,i),S(s=N(this.I),"RID",e),S(s,"CVER",22),this.D&&S(s,"X-HTTP-Session-Id",this.D),$c(this,s),h&&(this.O?i="headers="+encodeURIComponent(String(Oc(h)))+"&"+i:this.m&&Pc(s,this.m,h)),bc(this.h,l),this.Ua&&S(s,"TYPE","init"),this.P?(S(s,"$req",i),S(s,"SID","null"),l.T=!0,Hb(l,s,null)):Hb(l,s,i),this.G=2}}else 3==this.G&&(e?ed(this,e):0==this.i.length||jc(this.h)||ed(this))}},s.Fa=function(){if(this.u=null,fd(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=ub(p(this.ab,this),e)}},s.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,K(10),Zb(this),fd(this))},s.Za=function(){null!=this.C&&(this.C=null,Zb(this),$b(this),K(19))},s.fb=function(e){e?(this.j.info("Successfully pinged google.com"),K(2)):(this.j.info("Failed to ping google.com"),K(1))},s.isActive=function(){return!!this.l&&this.l.isActive(this)},(s=gd.prototype).ua=function(){},s.ta=function(){},s.sa=function(){},s.ra=function(){},s.isActive=function(){return!0},s.Na=function(){},hd.prototype.g=function(e,i){return new Y(e,i)},r(Y,E),Y.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Y.prototype.close=function(){gc(this.g)},Y.prototype.o=function(e){var i=this.g;if("string"==typeof e){var s={};s.__data__=e,e=s}else this.u&&((s={}).__data__=em(e),e=s);i.i.push(new ew(i.Ya++,e)),3==i.G&&fc(i)},Y.prototype.N=function(){this.g.l=null,delete this.j,gc(this.g),delete this.g,Y.aa.N.call(this)},r(id,nb),r(jd,ob),r(Z,gd),Z.prototype.ua=function(){F(this.g,"a")},Z.prototype.ta=function(e){F(this.g,new id(e))},Z.prototype.sa=function(e){F(this.g,new jd)},Z.prototype.ra=function(){F(this.g,"b")},hd.prototype.createWebChannel=hd.prototype.g,Y.prototype.send=Y.prototype.o,Y.prototype.open=Y.prototype.m,Y.prototype.close=Y.prototype.close,k=ea.createWebChannelTransport=function(){return new hd},b=ea.getStatEventTarget=function(){return qb()},w=ea.Event=eI,g=ea.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ev.NO_ERROR=0,ev.TIMEOUT=8,ev.HTTP_ERROR=6,_=ea.ErrorCode=ev,eP.COMPLETE="complete",f=ea.EventType=eP,mb.EventType=eE,eE.OPEN="a",eE.CLOSE="b",eE.ERROR="c",eE.MESSAGE="d",E.prototype.listen=E.prototype.K,d=ea.WebChannel=mb,ea.FetchXmlHttpFactory=Jc,X.prototype.listenOnce=X.prototype.L,X.prototype.getLastError=X.prototype.Ka,X.prototype.getLastErrorCode=X.prototype.Ba,X.prototype.getStatus=X.prototype.Z,X.prototype.getResponseJson=X.prototype.Oa,X.prototype.getResponseText=X.prototype.oa,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Ha,h=ea.XhrIo=X}).apply(void 0!==eo?eo:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),s(4284);var el=s(816).lW;let eu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let User=class User{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};User.UNAUTHENTICATED=new User(null),User.GOOGLE_CREDENTIALS=new User("google-credentials-uid"),User.FIRST_PARTY=new User("first-party-uid"),User.MOCK_USER=new User("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh="11.0.2",ef=new er.Yd("@firebase/firestore");function __PRIVATE_getLogLevel(){return ef.logLevel}function __PRIVATE_logDebug(e,...i){if(ef.logLevel<=er.in.DEBUG){let s=i.map(__PRIVATE_argToString);ef.debug(`Firestore (${eh}): ${e}`,...s)}}function __PRIVATE_logError(e,...i){if(ef.logLevel<=er.in.ERROR){let s=i.map(__PRIVATE_argToString);ef.error(`Firestore (${eh}): ${e}`,...s)}}function __PRIVATE_logWarn(e,...i){if(ef.logLevel<=er.in.WARN){let s=i.map(__PRIVATE_argToString);ef.warn(`Firestore (${eh}): ${e}`,...s)}}function __PRIVATE_argToString(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(i){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fail(e="Unexpected state"){let i=`FIRESTORE (${eh}) INTERNAL ASSERTION FAILED: `+e;throw __PRIVATE_logError(i),Error(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e_={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let FirestoreError=class FirestoreError extends en.ZR{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_Deferred=class __PRIVATE_Deferred{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_OAuthToken=class __PRIVATE_OAuthToken{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}};let __PRIVATE_EmptyAuthCredentialsProvider=class __PRIVATE_EmptyAuthCredentialsProvider{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(User.UNAUTHENTICATED))}shutdown(){}};let __PRIVATE_EmulatorAuthCredentialsProvider=class __PRIVATE_EmulatorAuthCredentialsProvider{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}};let __PRIVATE_FirebaseAuthCredentialsProvider=class __PRIVATE_FirebaseAuthCredentialsProvider{constructor(e){this.t=e,this.currentUser=User.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){void 0===this.o||fail();let s=this.i,__PRIVATE_guardedChangeListener=e=>this.i!==s?(s=this.i,i(e)):Promise.resolve(),o=new __PRIVATE_Deferred;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new __PRIVATE_Deferred,e.enqueueRetryable(()=>__PRIVATE_guardedChangeListener(this.currentUser))};let __PRIVATE_awaitNextToken=()=>{let i=o;e.enqueueRetryable(async()=>{await i.promise,await __PRIVATE_guardedChangeListener(this.currentUser)})},__PRIVATE_registerAuth=e=>{__PRIVATE_logDebug("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),__PRIVATE_awaitNextToken())};this.t.onInit(e=>__PRIVATE_registerAuth(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?__PRIVATE_registerAuth(e):(__PRIVATE_logDebug("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new __PRIVATE_Deferred)}},0),__PRIVATE_awaitNextToken()}getToken(){let e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(i=>this.i!==e?(__PRIVATE_logDebug("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?("string"==typeof i.accessToken||fail(),new __PRIVATE_OAuthToken(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||fail(),new User(e)}};let __PRIVATE_FirstPartyToken=class __PRIVATE_FirstPartyToken{constructor(e,i,s){this.l=e,this.h=i,this.P=s,this.type="FirstParty",this.user=User.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}};let __PRIVATE_FirstPartyAuthCredentialsProvider=class __PRIVATE_FirstPartyAuthCredentialsProvider{constructor(e,i,s){this.l=e,this.h=i,this.P=s}getToken(){return Promise.resolve(new __PRIVATE_FirstPartyToken(this.l,this.h,this.P))}start(e,i){e.enqueueRetryable(()=>i(User.FIRST_PARTY))}shutdown(){}invalidateToken(){}};let AppCheckToken=class AppCheckToken{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};let __PRIVATE_FirebaseAppCheckTokenProvider=class __PRIVATE_FirebaseAppCheckTokenProvider{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,i){void 0===this.o||fail();let onTokenChanged=e=>{null!=e.error&&__PRIVATE_logDebug("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let s=e.token!==this.R;return this.R=e.token,__PRIVATE_logDebug("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?i(e.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>onTokenChanged(i))};let __PRIVATE_registerAppCheck=e=>{__PRIVATE_logDebug("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>__PRIVATE_registerAppCheck(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?__PRIVATE_registerAppCheck(e):__PRIVATE_logDebug("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||fail(),this.R=e.token,new AppCheckToken(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_AutoId=class __PRIVATE_AutoId{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=Math.floor(256/e.length)*e.length,s="";for(;s.length<20;){let o=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let i="undefined"!=typeof self&&(self.crypto||self.msCrypto),s=new Uint8Array(e);if(i&&"function"==typeof i.getRandomValues)i.getRandomValues(s);else for(let i=0;i<e;i++)s[i]=Math.floor(256*Math.random());return s}(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<i&&(s+=e.charAt(o[l]%e.length))}return s}};function __PRIVATE_primitiveComparator(e,i){return e<i?-1:e>i?1:0}function __PRIVATE_arrayEquals(e,i,s){return e.length===i.length&&e.every((e,o)=>s(e,i[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Timestamp=class Timestamp{static now(){return Timestamp.fromMillis(Date.now())}static fromDate(e){return Timestamp.fromMillis(e.getTime())}static fromMillis(e){let i=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*i));return new Timestamp(i,s)}constructor(e,i){if(this.seconds=e,this.nanoseconds=i,i<0||i>=1e9)throw new FirestoreError(e_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+i);if(e<-62135596800||e>=253402300800)throw new FirestoreError(e_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?__PRIVATE_primitiveComparator(this.nanoseconds,e.nanoseconds):__PRIVATE_primitiveComparator(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SnapshotVersion=class SnapshotVersion{static fromTimestamp(e){return new SnapshotVersion(e)}static min(){return new SnapshotVersion(new Timestamp(0,0))}static max(){return new SnapshotVersion(new Timestamp(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BasePath=class BasePath{constructor(e,i,s){void 0===i?i=0:i>e.length&&fail(),void 0===s?s=e.length-i:s>e.length-i&&fail(),this.segments=e,this.offset=i,this.len=s}get length(){return this.len}isEqual(e){return 0===BasePath.comparator(this,e)}child(e){let i=this.segments.slice(this.offset,this.limit());return e instanceof BasePath?e.forEach(e=>{i.push(e)}):i.push(e),this.construct(i)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let i=0;i<this.length;i++)if(this.get(i)!==e.get(i))return!1;return!0}forEach(e){for(let i=this.offset,s=this.limit();i<s;i++)e(this.segments[i])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,i){let s=Math.min(e.length,i.length);for(let o=0;o<s;o++){let s=e.get(o),l=i.get(o);if(s<l)return -1;if(s>l)return 1}return e.length<i.length?-1:e.length>i.length?1:0}};let ResourcePath=class ResourcePath extends BasePath{construct(e,i,s){return new ResourcePath(e,i,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let i=[];for(let s of e){if(s.indexOf("//")>=0)throw new FirestoreError(e_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);i.push(...s.split("/").filter(e=>e.length>0))}return new ResourcePath(i)}static emptyPath(){return new ResourcePath([])}};let ep=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let FieldPath$1=class FieldPath$1 extends BasePath{construct(e,i,s){return new FieldPath$1(e,i,s)}static isValidIdentifier(e){return ep.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),FieldPath$1.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new FieldPath$1(["__name__"])}static fromServerFormat(e){let i=[],s="",o=0,__PRIVATE_addCurrentSegment=()=>{if(0===s.length)throw new FirestoreError(e_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);i.push(s),s=""},l=!1;for(;o<e.length;){let i=e[o];if("\\"===i){if(o+1===e.length)throw new FirestoreError(e_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let i=e[o+1];if("\\"!==i&&"."!==i&&"`"!==i)throw new FirestoreError(e_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=i,o+=2}else"`"===i?l=!l:"."!==i||l?s+=i:__PRIVATE_addCurrentSegment(),o++}if(__PRIVATE_addCurrentSegment(),l)throw new FirestoreError(e_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new FieldPath$1(i)}static emptyPath(){return new FieldPath$1([])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DocumentKey=class DocumentKey{constructor(e){this.path=e}static fromPath(e){return new DocumentKey(ResourcePath.fromString(e))}static fromName(e){return new DocumentKey(ResourcePath.fromString(e).popFirst(5))}static empty(){return new DocumentKey(ResourcePath.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ResourcePath.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,i){return ResourcePath.comparator(e.path,i.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new DocumentKey(new ResourcePath(e.slice()))}};let IndexOffset=class IndexOffset{constructor(e,i,s){this.readTime=e,this.documentKey=i,this.largestBatchId=s}static min(){return new IndexOffset(SnapshotVersion.min(),DocumentKey.empty(),-1)}static max(){return new IndexOffset(SnapshotVersion.max(),DocumentKey.empty(),-1)}};let PersistenceTransaction=class PersistenceTransaction{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __PRIVATE_ignoreIfPrimaryLeaseLoss(e){if(e.code!==e_.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;__PRIVATE_logDebug("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PersistencePromise=class PersistencePromise{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,i){return this.callbackAttached&&fail(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(i,this.error):this.wrapSuccess(e,this.result):new PersistencePromise((s,o)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,o)},this.catchCallback=e=>{this.wrapFailure(i,e).next(s,o)}})}toPromise(){return new Promise((e,i)=>{this.next(e,i)})}wrapUserFunction(e){try{let i=e();return i instanceof PersistencePromise?i:PersistencePromise.resolve(i)}catch(e){return PersistencePromise.reject(e)}}wrapSuccess(e,i){return e?this.wrapUserFunction(()=>e(i)):PersistencePromise.resolve(i)}wrapFailure(e,i){return e?this.wrapUserFunction(()=>e(i)):PersistencePromise.reject(i)}static resolve(e){return new PersistencePromise((i,s)=>{i(e)})}static reject(e){return new PersistencePromise((i,s)=>{s(e)})}static waitFor(e){return new PersistencePromise((i,s)=>{let o=0,l=0,h=!1;e.forEach(e=>{++o,e.next(()=>{++l,h&&l===o&&i()},e=>s(e))}),h=!0,l===o&&i()})}static or(e){let i=PersistencePromise.resolve(!1);for(let s of e)i=i.next(e=>e?PersistencePromise.resolve(e):s());return i}static forEach(e,i){let s=[];return e.forEach((e,o)=>{s.push(i.call(this,e,o))}),this.waitFor(s)}static mapArray(e,i){return new PersistencePromise((s,o)=>{let l=e.length,h=Array(l),d=0;for(let f=0;f<l;f++){let _=f;i(e[_]).next(e=>{h[_]=e,++d===l&&s(h)},e=>o(e))}})}static doWhile(e,i){return new PersistencePromise((s,o)=>{let process=()=>{!0===e()?i().next(()=>{process()},o):s()};process()})}};function __PRIVATE_isIndexedDbTransactionError(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_ListenSequence=class __PRIVATE_ListenSequence{constructor(e,i){this.previousValue=e,i&&(i.sequenceNumberHandler=e=>this.ie(e),this.se=e=>i.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}};function __PRIVATE_isNegativeZero(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_objectSize(e){let i=0;for(let s in e)Object.prototype.hasOwnProperty.call(e,s)&&i++;return i}function forEach(e,i){for(let s in e)Object.prototype.hasOwnProperty.call(e,s)&&i(s,e[s])}function isEmpty(e){for(let i in e)if(Object.prototype.hasOwnProperty.call(e,i))return!1;return!0}__PRIVATE_ListenSequence.oe=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SortedMap=class SortedMap{constructor(e,i){this.comparator=e,this.root=i||LLRBNode.EMPTY}insert(e,i){return new SortedMap(this.comparator,this.root.insert(e,i,this.comparator).copy(null,null,LLRBNode.BLACK,null,null))}remove(e){return new SortedMap(this.comparator,this.root.remove(e,this.comparator).copy(null,null,LLRBNode.BLACK,null,null))}get(e){let i=this.root;for(;!i.isEmpty();){let s=this.comparator(e,i.key);if(0===s)return i.value;s<0?i=i.left:s>0&&(i=i.right)}return null}indexOf(e){let i=0,s=this.root;for(;!s.isEmpty();){let o=this.comparator(e,s.key);if(0===o)return i+s.left.size;o<0?s=s.left:(i+=s.left.size+1,s=s.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((i,s)=>(e(i,s),!1))}toString(){let e=[];return this.inorderTraversal((i,s)=>(e.push(`${i}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new SortedMapIterator(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new SortedMapIterator(this.root,e,this.comparator,!1)}getReverseIterator(){return new SortedMapIterator(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new SortedMapIterator(this.root,e,this.comparator,!0)}};let SortedMapIterator=class SortedMapIterator{constructor(e,i,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=i?s(e.key,i):1,i&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(0===l){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),i={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return i}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}};let LLRBNode=class LLRBNode{constructor(e,i,s,o,l){this.key=e,this.value=i,this.color=null!=s?s:LLRBNode.RED,this.left=null!=o?o:LLRBNode.EMPTY,this.right=null!=l?l:LLRBNode.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,i,s,o,l){return new LLRBNode(null!=e?e:this.key,null!=i?i:this.value,null!=s?s:this.color,null!=o?o:this.left,null!=l?l:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,i,s){let o=this,l=s(e,o.key);return(o=l<0?o.copy(null,null,null,o.left.insert(e,i,s),null):0===l?o.copy(null,i,null,null,null):o.copy(null,null,null,null,o.right.insert(e,i,s))).fixUp()}removeMin(){if(this.left.isEmpty())return LLRBNode.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,i){let s,o=this;if(0>i(e,o.key))o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,i),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),0===i(e,o.key)){if(o.right.isEmpty())return LLRBNode.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,i))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,LLRBNode.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,LLRBNode.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),i=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,i)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fail();let e=this.left.check();if(e!==this.right.check())throw fail();return e+(this.isRed()?0:1)}};LLRBNode.EMPTY=null,LLRBNode.RED=!0,LLRBNode.BLACK=!1,LLRBNode.EMPTY=new class{constructor(){this.size=0}get key(){throw fail()}get value(){throw fail()}get color(){throw fail()}get left(){throw fail()}get right(){throw fail()}copy(e,i,s,o,l){return this}insert(e,i,s){return new LLRBNode(e,i)}remove(e,i){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SortedSet=class SortedSet{constructor(e){this.comparator=e,this.data=new SortedMap(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((i,s)=>(e(i),!1))}forEachInRange(e,i){let s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){let o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;i(o.key)}}forEachWhile(e,i){let s;for(s=void 0!==i?this.data.getIteratorFrom(i):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){let i=this.data.getIteratorFrom(e);return i.hasNext()?i.getNext().key:null}getIterator(){return new SortedSetIterator(this.data.getIterator())}getIteratorFrom(e){return new SortedSetIterator(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let i=this;return i.size<e.size&&(i=e,e=this),e.forEach(e=>{i=i.add(e)}),i}isEqual(e){if(!(e instanceof SortedSet)||this.size!==e.size)return!1;let i=this.data.getIterator(),s=e.data.getIterator();for(;i.hasNext();){let e=i.getNext().key,o=s.getNext().key;if(0!==this.comparator(e,o))return!1}return!0}toArray(){let e=[];return this.forEach(i=>{e.push(i)}),e}toString(){let e=[];return this.forEach(i=>e.push(i)),"SortedSet("+e.toString()+")"}copy(e){let i=new SortedSet(this.comparator);return i.data=e,i}};let SortedSetIterator=class SortedSetIterator{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FieldMask=class FieldMask{constructor(e){this.fields=e,e.sort(FieldPath$1.comparator)}static empty(){return new FieldMask([])}unionWith(e){let i=new SortedSet(FieldPath$1.comparator);for(let e of this.fields)i=i.add(e);for(let s of e)i=i.add(s);return new FieldMask(i.toArray())}covers(e){for(let i of this.fields)if(i.isPrefixOf(e))return!0;return!1}isEqual(e){return __PRIVATE_arrayEquals(this.fields,e.fields,(e,i)=>e.isEqual(i))}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_Base64DecodeError=class __PRIVATE_Base64DecodeError extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ByteString=class ByteString{constructor(e){this.binaryString=e}static fromBase64String(e){let i=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new __PRIVATE_Base64DecodeError("Invalid base64 string: "+e):e}}(e);return new ByteString(i)}static fromUint8Array(e){let i=function(e){let i="";for(let s=0;s<e.length;++s)i+=String.fromCharCode(e[s]);return i}(e);return new ByteString(i)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let i=new Uint8Array(e.length);for(let s=0;s<e.length;s++)i[s]=e.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return __PRIVATE_primitiveComparator(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};ByteString.EMPTY_BYTE_STRING=new ByteString("");let em=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function __PRIVATE_normalizeTimestamp(e){if(e||fail(),"string"==typeof e){let i=0,s=em.exec(e);if(s||fail(),s[1]){let e=s[1];i=Number(e=(e+"000000000").substr(0,9))}let o=new Date(e);return{seconds:Math.floor(o.getTime()/1e3),nanos:i}}return{seconds:__PRIVATE_normalizeNumber(e.seconds),nanos:__PRIVATE_normalizeNumber(e.nanos)}}function __PRIVATE_normalizeNumber(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function __PRIVATE_normalizeByteString(e){return"string"==typeof e?ByteString.fromBase64String(e):ByteString.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_isServerTimestamp(e){var i,s;return"server_timestamp"===(null===(s=((null===(i=null==e?void 0:e.mapValue)||void 0===i?void 0:i.fields)||{}).__type__)||void 0===s?void 0:s.stringValue)}function __PRIVATE_getPreviousValue(e){let i=e.mapValue.fields.__previous_value__;return __PRIVATE_isServerTimestamp(i)?__PRIVATE_getPreviousValue(i):i}function __PRIVATE_getLocalWriteTime(e){let i=__PRIVATE_normalizeTimestamp(e.mapValue.fields.__local_write_time__.timestampValue);return new Timestamp(i.seconds,i.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DatabaseInfo=class DatabaseInfo{constructor(e,i,s,o,l,h,d,f,_){this.databaseId=e,this.appId=i,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=_}};let DatabaseId=class DatabaseId{constructor(e,i){this.projectId=e,this.database=i||"(default)"}static empty(){return new DatabaseId("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof DatabaseId&&e.projectId===this.projectId&&e.database===this.database}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eg={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function __PRIVATE_typeOrder(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?__PRIVATE_isServerTimestamp(e)?4:__PRIVATE_isMaxValue(e)?9007199254740991:__PRIVATE_isVectorValue(e)?10:11:fail()}function __PRIVATE_valueEquals(e,i){if(e===i)return!0;let s=__PRIVATE_typeOrder(e);if(s!==__PRIVATE_typeOrder(i))return!1;switch(s){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===i.booleanValue;case 4:return __PRIVATE_getLocalWriteTime(e).isEqual(__PRIVATE_getLocalWriteTime(i));case 3:return function(e,i){if("string"==typeof e.timestampValue&&"string"==typeof i.timestampValue&&e.timestampValue.length===i.timestampValue.length)return e.timestampValue===i.timestampValue;let s=__PRIVATE_normalizeTimestamp(e.timestampValue),o=__PRIVATE_normalizeTimestamp(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(e,i);case 5:return e.stringValue===i.stringValue;case 6:return __PRIVATE_normalizeByteString(e.bytesValue).isEqual(__PRIVATE_normalizeByteString(i.bytesValue));case 7:return e.referenceValue===i.referenceValue;case 8:return __PRIVATE_normalizeNumber(e.geoPointValue.latitude)===__PRIVATE_normalizeNumber(i.geoPointValue.latitude)&&__PRIVATE_normalizeNumber(e.geoPointValue.longitude)===__PRIVATE_normalizeNumber(i.geoPointValue.longitude);case 2:return function(e,i){if("integerValue"in e&&"integerValue"in i)return __PRIVATE_normalizeNumber(e.integerValue)===__PRIVATE_normalizeNumber(i.integerValue);if("doubleValue"in e&&"doubleValue"in i){let s=__PRIVATE_normalizeNumber(e.doubleValue),o=__PRIVATE_normalizeNumber(i.doubleValue);return s===o?__PRIVATE_isNegativeZero(s)===__PRIVATE_isNegativeZero(o):isNaN(s)&&isNaN(o)}return!1}(e,i);case 9:return __PRIVATE_arrayEquals(e.arrayValue.values||[],i.arrayValue.values||[],__PRIVATE_valueEquals);case 10:case 11:return function(e,i){let s=e.mapValue.fields||{},o=i.mapValue.fields||{};if(__PRIVATE_objectSize(s)!==__PRIVATE_objectSize(o))return!1;for(let e in s)if(s.hasOwnProperty(e)&&(void 0===o[e]||!__PRIVATE_valueEquals(s[e],o[e])))return!1;return!0}(e,i);default:return fail()}}function __PRIVATE_arrayValueContains(e,i){return void 0!==(e.values||[]).find(e=>__PRIVATE_valueEquals(e,i))}function __PRIVATE_valueCompare(e,i){if(e===i)return 0;let s=__PRIVATE_typeOrder(e),o=__PRIVATE_typeOrder(i);if(s!==o)return __PRIVATE_primitiveComparator(s,o);switch(s){case 0:case 9007199254740991:return 0;case 1:return __PRIVATE_primitiveComparator(e.booleanValue,i.booleanValue);case 2:return function(e,i){let s=__PRIVATE_normalizeNumber(e.integerValue||e.doubleValue),o=__PRIVATE_normalizeNumber(i.integerValue||i.doubleValue);return s<o?-1:s>o?1:s===o?0:isNaN(s)?isNaN(o)?0:-1:1}(e,i);case 3:return __PRIVATE_compareTimestamps(e.timestampValue,i.timestampValue);case 4:return __PRIVATE_compareTimestamps(__PRIVATE_getLocalWriteTime(e),__PRIVATE_getLocalWriteTime(i));case 5:return __PRIVATE_primitiveComparator(e.stringValue,i.stringValue);case 6:return function(e,i){let s=__PRIVATE_normalizeByteString(e),o=__PRIVATE_normalizeByteString(i);return s.compareTo(o)}(e.bytesValue,i.bytesValue);case 7:return function(e,i){let s=e.split("/"),o=i.split("/");for(let e=0;e<s.length&&e<o.length;e++){let i=__PRIVATE_primitiveComparator(s[e],o[e]);if(0!==i)return i}return __PRIVATE_primitiveComparator(s.length,o.length)}(e.referenceValue,i.referenceValue);case 8:return function(e,i){let s=__PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e.latitude),__PRIVATE_normalizeNumber(i.latitude));return 0!==s?s:__PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e.longitude),__PRIVATE_normalizeNumber(i.longitude))}(e.geoPointValue,i.geoPointValue);case 9:return __PRIVATE_compareArrays(e.arrayValue,i.arrayValue);case 10:return function(e,i){var s,o,l,h;let d=e.fields||{},f=i.fields||{},_=null===(s=d.value)||void 0===s?void 0:s.arrayValue,g=null===(o=f.value)||void 0===o?void 0:o.arrayValue,w=__PRIVATE_primitiveComparator((null===(l=null==_?void 0:_.values)||void 0===l?void 0:l.length)||0,(null===(h=null==g?void 0:g.values)||void 0===h?void 0:h.length)||0);return 0!==w?w:__PRIVATE_compareArrays(_,g)}(e.mapValue,i.mapValue);case 11:return function(e,i){if(e===eg.mapValue&&i===eg.mapValue)return 0;if(e===eg.mapValue)return 1;if(i===eg.mapValue)return -1;let s=e.fields||{},o=Object.keys(s),l=i.fields||{},h=Object.keys(l);o.sort(),h.sort();for(let e=0;e<o.length&&e<h.length;++e){let i=__PRIVATE_primitiveComparator(o[e],h[e]);if(0!==i)return i;let d=__PRIVATE_valueCompare(s[o[e]],l[h[e]]);if(0!==d)return d}return __PRIVATE_primitiveComparator(o.length,h.length)}(e.mapValue,i.mapValue);default:throw fail()}}function __PRIVATE_compareTimestamps(e,i){if("string"==typeof e&&"string"==typeof i&&e.length===i.length)return __PRIVATE_primitiveComparator(e,i);let s=__PRIVATE_normalizeTimestamp(e),o=__PRIVATE_normalizeTimestamp(i),l=__PRIVATE_primitiveComparator(s.seconds,o.seconds);return 0!==l?l:__PRIVATE_primitiveComparator(s.nanos,o.nanos)}function __PRIVATE_compareArrays(e,i){let s=e.values||[],o=i.values||[];for(let e=0;e<s.length&&e<o.length;++e){let i=__PRIVATE_valueCompare(s[e],o[e]);if(i)return i}return __PRIVATE_primitiveComparator(s.length,o.length)}function __PRIVATE_canonifyValue(e){var i,s;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let i=__PRIVATE_normalizeTimestamp(e);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?__PRIVATE_normalizeByteString(e.bytesValue).toBase64():"referenceValue"in e?(i=e.referenceValue,DocumentKey.fromName(i).toString()):"geoPointValue"in e?(s=e.geoPointValue,`geo(${s.latitude},${s.longitude})`):"arrayValue"in e?function(e){let i="[",s=!0;for(let o of e.values||[])s?s=!1:i+=",",i+=__PRIVATE_canonifyValue(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(e){let i=Object.keys(e.fields||{}).sort(),s="{",o=!0;for(let l of i)o?o=!1:s+=",",s+=`${l}:${__PRIVATE_canonifyValue(e.fields[l])}`;return s+"}"}(e.mapValue):fail()}function __PRIVATE_refValue(e,i){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${i.path.canonicalString()}`}}function isInteger(e){return!!e&&"integerValue"in e}function isArray(e){return!!e&&"arrayValue"in e}function __PRIVATE_isNullValue(e){return!!e&&"nullValue"in e}function __PRIVATE_isNanValue(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function __PRIVATE_isMapValue(e){return!!e&&"mapValue"in e}function __PRIVATE_isVectorValue(e){var i,s;return"__vector__"===(null===(s=((null===(i=null==e?void 0:e.mapValue)||void 0===i?void 0:i.fields)||{}).__type__)||void 0===s?void 0:s.stringValue)}function __PRIVATE_deepClone(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let i={mapValue:{fields:{}}};return forEach(e.mapValue.fields,(e,s)=>i.mapValue.fields[e]=__PRIVATE_deepClone(s)),i}if(e.arrayValue){let i={arrayValue:{values:[]}};for(let s=0;s<(e.arrayValue.values||[]).length;++s)i.arrayValue.values[s]=__PRIVATE_deepClone(e.arrayValue.values[s]);return i}return Object.assign({},e)}function __PRIVATE_isMaxValue(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ObjectValue=class ObjectValue{constructor(e){this.value=e}static empty(){return new ObjectValue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let i=this.value;for(let s=0;s<e.length-1;++s)if(!__PRIVATE_isMapValue(i=(i.mapValue.fields||{})[e.get(s)]))return null;return(i=(i.mapValue.fields||{})[e.lastSegment()])||null}}set(e,i){this.getFieldsMap(e.popLast())[e.lastSegment()]=__PRIVATE_deepClone(i)}setAll(e){let i=FieldPath$1.emptyPath(),s={},o=[];e.forEach((e,l)=>{if(!i.isImmediateParentOf(l)){let e=this.getFieldsMap(i);this.applyChanges(e,s,o),s={},o=[],i=l.popLast()}e?s[l.lastSegment()]=__PRIVATE_deepClone(e):o.push(l.lastSegment())});let l=this.getFieldsMap(i);this.applyChanges(l,s,o)}delete(e){let i=this.field(e.popLast());__PRIVATE_isMapValue(i)&&i.mapValue.fields&&delete i.mapValue.fields[e.lastSegment()]}isEqual(e){return __PRIVATE_valueEquals(this.value,e.value)}getFieldsMap(e){let i=this.value;i.mapValue.fields||(i.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=i.mapValue.fields[e.get(s)];__PRIVATE_isMapValue(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},i.mapValue.fields[e.get(s)]=o),i=o}return i.mapValue.fields}applyChanges(e,i,s){for(let o of(forEach(i,(i,s)=>e[i]=s),s))delete e[o]}clone(){return new ObjectValue(__PRIVATE_deepClone(this.value))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MutableDocument=class MutableDocument{constructor(e,i,s,o,l,h,d){this.key=e,this.documentType=i,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=d}static newInvalidDocument(e){return new MutableDocument(e,0,SnapshotVersion.min(),SnapshotVersion.min(),SnapshotVersion.min(),ObjectValue.empty(),0)}static newFoundDocument(e,i,s,o){return new MutableDocument(e,1,i,SnapshotVersion.min(),s,o,0)}static newNoDocument(e,i){return new MutableDocument(e,2,i,SnapshotVersion.min(),SnapshotVersion.min(),ObjectValue.empty(),0)}static newUnknownDocument(e,i){return new MutableDocument(e,3,i,SnapshotVersion.min(),SnapshotVersion.min(),ObjectValue.empty(),2)}convertToFoundDocument(e,i){return this.createTime.isEqual(SnapshotVersion.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=i,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ObjectValue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ObjectValue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=SnapshotVersion.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof MutableDocument&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new MutableDocument(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bound=class Bound{constructor(e,i){this.position=e,this.inclusive=i}};function __PRIVATE_boundCompareToDocument(e,i,s){let o=0;for(let l=0;l<e.position.length;l++){let h=i[l],d=e.position[l];if(o=h.field.isKeyField()?DocumentKey.comparator(DocumentKey.fromName(d.referenceValue),s.key):__PRIVATE_valueCompare(d,s.data.field(h.field)),"desc"===h.dir&&(o*=-1),0!==o)break}return o}function __PRIVATE_boundEquals(e,i){if(null===e)return null===i;if(null===i||e.inclusive!==i.inclusive||e.position.length!==i.position.length)return!1;for(let s=0;s<e.position.length;s++)if(!__PRIVATE_valueEquals(e.position[s],i.position[s]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let OrderBy=class OrderBy{constructor(e,i="asc"){this.field=e,this.dir=i}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Filter=class Filter{};let FieldFilter=class FieldFilter extends Filter{constructor(e,i,s){super(),this.field=e,this.op=i,this.value=s}static create(e,i,s){return e.isKeyField()?"in"===i||"not-in"===i?this.createKeyFieldInFilter(e,i,s):new __PRIVATE_KeyFieldFilter(e,i,s):"array-contains"===i?new __PRIVATE_ArrayContainsFilter(e,s):"in"===i?new __PRIVATE_InFilter(e,s):"not-in"===i?new __PRIVATE_NotInFilter(e,s):"array-contains-any"===i?new __PRIVATE_ArrayContainsAnyFilter(e,s):new FieldFilter(e,i,s)}static createKeyFieldInFilter(e,i,s){return"in"===i?new __PRIVATE_KeyFieldInFilter(e,s):new __PRIVATE_KeyFieldNotInFilter(e,s)}matches(e){let i=e.data.field(this.field);return"!="===this.op?null!==i&&this.matchesComparison(__PRIVATE_valueCompare(i,this.value)):null!==i&&__PRIVATE_typeOrder(this.value)===__PRIVATE_typeOrder(i)&&this.matchesComparison(__PRIVATE_valueCompare(i,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return fail()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}};let CompositeFilter=class CompositeFilter extends Filter{constructor(e,i){super(),this.filters=e,this.op=i,this.ae=null}static create(e,i){return new CompositeFilter(e,i)}matches(e){return __PRIVATE_compositeFilterIsConjunction(this)?void 0===this.filters.find(i=>!i.matches(e)):void 0!==this.filters.find(i=>i.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,i)=>e.concat(i.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}};function __PRIVATE_compositeFilterIsConjunction(e){return"and"===e.op}function __PRIVATE_compositeFilterIsFlat(e){for(let i of e.filters)if(i instanceof CompositeFilter)return!1;return!0}let __PRIVATE_KeyFieldFilter=class __PRIVATE_KeyFieldFilter extends FieldFilter{constructor(e,i,s){super(e,i,s),this.key=DocumentKey.fromName(s.referenceValue)}matches(e){let i=DocumentKey.comparator(e.key,this.key);return this.matchesComparison(i)}};let __PRIVATE_KeyFieldInFilter=class __PRIVATE_KeyFieldInFilter extends FieldFilter{constructor(e,i){super(e,"in",i),this.keys=__PRIVATE_extractDocumentKeysFromArrayValue("in",i)}matches(e){return this.keys.some(i=>i.isEqual(e.key))}};let __PRIVATE_KeyFieldNotInFilter=class __PRIVATE_KeyFieldNotInFilter extends FieldFilter{constructor(e,i){super(e,"not-in",i),this.keys=__PRIVATE_extractDocumentKeysFromArrayValue("not-in",i)}matches(e){return!this.keys.some(i=>i.isEqual(e.key))}};function __PRIVATE_extractDocumentKeysFromArrayValue(e,i){var s;return((null===(s=i.arrayValue)||void 0===s?void 0:s.values)||[]).map(e=>DocumentKey.fromName(e.referenceValue))}let __PRIVATE_ArrayContainsFilter=class __PRIVATE_ArrayContainsFilter extends FieldFilter{constructor(e,i){super(e,"array-contains",i)}matches(e){let i=e.data.field(this.field);return isArray(i)&&__PRIVATE_arrayValueContains(i.arrayValue,this.value)}};let __PRIVATE_InFilter=class __PRIVATE_InFilter extends FieldFilter{constructor(e,i){super(e,"in",i)}matches(e){let i=e.data.field(this.field);return null!==i&&__PRIVATE_arrayValueContains(this.value.arrayValue,i)}};let __PRIVATE_NotInFilter=class __PRIVATE_NotInFilter extends FieldFilter{constructor(e,i){super(e,"not-in",i)}matches(e){if(__PRIVATE_arrayValueContains(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let i=e.data.field(this.field);return null!==i&&!__PRIVATE_arrayValueContains(this.value.arrayValue,i)}};let __PRIVATE_ArrayContainsAnyFilter=class __PRIVATE_ArrayContainsAnyFilter extends FieldFilter{constructor(e,i){super(e,"array-contains-any",i)}matches(e){let i=e.data.field(this.field);return!(!isArray(i)||!i.arrayValue.values)&&i.arrayValue.values.some(e=>__PRIVATE_arrayValueContains(this.value.arrayValue,e))}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_TargetImpl=class __PRIVATE_TargetImpl{constructor(e,i=null,s=[],o=[],l=null,h=null,d=null){this.path=e,this.collectionGroup=i,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=d,this.ue=null}};function __PRIVATE_newTarget(e,i=null,s=[],o=[],l=null,h=null,d=null){return new __PRIVATE_TargetImpl(e,i,s,o,l,h,d)}function __PRIVATE_canonifyTarget(e){if(null===e.ue){let i=e.path.canonicalString();null!==e.collectionGroup&&(i+="|cg:"+e.collectionGroup),i+="|f:"+e.filters.map(e=>(function __PRIVATE_canonifyFilter(e){if(e instanceof FieldFilter)return e.field.canonicalString()+e.op.toString()+__PRIVATE_canonifyValue(e.value);if(__PRIVATE_compositeFilterIsFlat(e)&&__PRIVATE_compositeFilterIsConjunction(e))return e.filters.map(e=>__PRIVATE_canonifyFilter(e)).join(",");{let i=e.filters.map(e=>__PRIVATE_canonifyFilter(e)).join(",");return`${e.op}(${i})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(i+="|l:"+e.limit),e.startAt&&(i+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>__PRIVATE_canonifyValue(e)).join(",")),e.endAt&&(i+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>__PRIVATE_canonifyValue(e)).join(",")),e.ue=i}return e.ue}function __PRIVATE_targetEquals(e,i){if(e.limit!==i.limit||e.orderBy.length!==i.orderBy.length)return!1;for(let l=0;l<e.orderBy.length;l++){var s,o;if(s=e.orderBy[l],o=i.orderBy[l],!(s.dir===o.dir&&s.field.isEqual(o.field)))return!1}if(e.filters.length!==i.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(!function __PRIVATE_filterEquals(e,i){return e instanceof FieldFilter?i instanceof FieldFilter&&e.op===i.op&&e.field.isEqual(i.field)&&__PRIVATE_valueEquals(e.value,i.value):e instanceof CompositeFilter?i instanceof CompositeFilter&&e.op===i.op&&e.filters.length===i.filters.length&&e.filters.reduce((e,s,o)=>e&&__PRIVATE_filterEquals(s,i.filters[o]),!0):void fail()}(e.filters[s],i.filters[s]))return!1;return e.collectionGroup===i.collectionGroup&&!!e.path.isEqual(i.path)&&!!__PRIVATE_boundEquals(e.startAt,i.startAt)&&__PRIVATE_boundEquals(e.endAt,i.endAt)}function __PRIVATE_targetIsDocumentTarget(e){return DocumentKey.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_QueryImpl=class __PRIVATE_QueryImpl{constructor(e,i=null,s=[],o=[],l=null,h="F",d=null,f=null){this.path=e,this.collectionGroup=i,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=d,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}};function __PRIVATE_queryMatchesAllDocuments(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function __PRIVATE_isCollectionGroupQuery(e){return null!==e.collectionGroup}function __PRIVATE_queryNormalizedOrderBy(e){if(null===e.ce){let i;e.ce=[];let s=new Set;for(let i of e.explicitOrderBy)e.ce.push(i),s.add(i.field.canonicalString());let o=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",l=(i=new SortedSet(FieldPath$1.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(i=i.add(e.field))})}),i);l.forEach(i=>{s.has(i.canonicalString())||i.isKeyField()||e.ce.push(new OrderBy(i,o))}),s.has(FieldPath$1.keyField().canonicalString())||e.ce.push(new OrderBy(FieldPath$1.keyField(),o))}return e.ce}function __PRIVATE_queryToTarget(e){return e.le||(e.le=function(e,i){if("F"===e.limitType)return __PRIVATE_newTarget(e.path,e.collectionGroup,i,e.filters,e.limit,e.startAt,e.endAt);{i=i.map(e=>{let i="desc"===e.dir?"asc":"desc";return new OrderBy(e.field,i)});let s=e.endAt?new Bound(e.endAt.position,e.endAt.inclusive):null,o=e.startAt?new Bound(e.startAt.position,e.startAt.inclusive):null;return __PRIVATE_newTarget(e.path,e.collectionGroup,i,e.filters,e.limit,s,o)}}(e,__PRIVATE_queryNormalizedOrderBy(e))),e.le}function __PRIVATE_queryWithAddedFilter(e,i){let s=e.filters.concat([i]);return new __PRIVATE_QueryImpl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),s,e.limit,e.limitType,e.startAt,e.endAt)}function __PRIVATE_queryWithLimit(e,i,s){return new __PRIVATE_QueryImpl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),i,s,e.startAt,e.endAt)}function __PRIVATE_queryEquals(e,i){return __PRIVATE_targetEquals(__PRIVATE_queryToTarget(e),__PRIVATE_queryToTarget(i))&&e.limitType===i.limitType}function __PRIVATE_canonifyQuery(e){return`${__PRIVATE_canonifyTarget(__PRIVATE_queryToTarget(e))}|lt:${e.limitType}`}function __PRIVATE_stringifyQuery(e){var i;let s;return`Query(target=${s=(i=__PRIVATE_queryToTarget(e)).path.canonicalString(),null!==i.collectionGroup&&(s+=" collectionGroup="+i.collectionGroup),i.filters.length>0&&(s+=`, filters: [${i.filters.map(e=>(function __PRIVATE_stringifyFilter(e){return e instanceof FieldFilter?`${e.field.canonicalString()} ${e.op} ${__PRIVATE_canonifyValue(e.value)}`:e instanceof CompositeFilter?e.op.toString()+" {"+e.getFilters().map(__PRIVATE_stringifyFilter).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==i.limit||(s+=", limit: "+i.limit),i.orderBy.length>0&&(s+=`, orderBy: [${i.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),i.startAt&&(s+=", startAt: "+(i.startAt.inclusive?"b:":"a:")+i.startAt.position.map(e=>__PRIVATE_canonifyValue(e)).join(",")),i.endAt&&(s+=", endAt: "+(i.endAt.inclusive?"a:":"b:")+i.endAt.position.map(e=>__PRIVATE_canonifyValue(e)).join(",")),`Target(${s})`}; limitType=${e.limitType})`}function __PRIVATE_queryMatches(e,i){return i.isFoundDocument()&&function(e,i){let s=i.key.path;return null!==e.collectionGroup?i.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(s):DocumentKey.isDocumentKey(e.path)?e.path.isEqual(s):e.path.isImmediateParentOf(s)}(e,i)&&function(e,i){for(let s of __PRIVATE_queryNormalizedOrderBy(e))if(!s.field.isKeyField()&&null===i.data.field(s.field))return!1;return!0}(e,i)&&function(e,i){for(let s of e.filters)if(!s.matches(i))return!1;return!0}(e,i)&&(!e.startAt||!!function(e,i,s){let o=__PRIVATE_boundCompareToDocument(e,i,s);return e.inclusive?o<=0:o<0}(e.startAt,__PRIVATE_queryNormalizedOrderBy(e),i))&&(!e.endAt||!!function(e,i,s){let o=__PRIVATE_boundCompareToDocument(e,i,s);return e.inclusive?o>=0:o>0}(e.endAt,__PRIVATE_queryNormalizedOrderBy(e),i))}function __PRIVATE_newQueryComparator(e){return(i,s)=>{let o=!1;for(let l of __PRIVATE_queryNormalizedOrderBy(e)){let e=function(e,i,s){let o=e.field.isKeyField()?DocumentKey.comparator(i.key,s.key):function(e,i,s){let o=i.data.field(e),l=s.data.field(e);return null!==o&&null!==l?__PRIVATE_valueCompare(o,l):fail()}(e.field,i,s);switch(e.dir){case"asc":return o;case"desc":return -1*o;default:return fail()}}(l,i,s);if(0!==e)return e;o=o||l.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ObjectMap=class ObjectMap{constructor(e,i){this.mapKeyFn=e,this.equalsFn=i,this.inner={},this.innerSize=0}get(e){let i=this.mapKeyFn(e),s=this.inner[i];if(void 0!==s){for(let[i,o]of s)if(this.equalsFn(i,e))return o}}has(e){return void 0!==this.get(e)}set(e,i){let s=this.mapKeyFn(e),o=this.inner[s];if(void 0===o)return this.inner[s]=[[e,i]],void this.innerSize++;for(let s=0;s<o.length;s++)if(this.equalsFn(o[s][0],e))return void(o[s]=[e,i]);o.push([e,i]),this.innerSize++}delete(e){let i=this.mapKeyFn(e),s=this.inner[i];if(void 0===s)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return 1===s.length?delete this.inner[i]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){forEach(this.inner,(i,s)=>{for(let[i,o]of s)e(i,o)})}isEmpty(){return isEmpty(this.inner)}size(){return this.innerSize}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ey=new SortedMap(DocumentKey.comparator),eE=new SortedMap(DocumentKey.comparator);function documentMap(...e){let i=eE;for(let s of e)i=i.insert(s.key,s);return i}function __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e){let i=eE;return e.forEach((e,s)=>i=i.insert(e,s.overlayedDocument)),i}function __PRIVATE_newDocumentKeyMap(){return new ObjectMap(e=>e.toString(),(e,i)=>e.isEqual(i))}let eI=new SortedMap(DocumentKey.comparator),eT=new SortedSet(DocumentKey.comparator);function __PRIVATE_documentKeySet(...e){let i=eT;for(let s of e)i=i.add(s);return i}let ev=new SortedSet(__PRIVATE_primitiveComparator);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_toDouble(e,i){if(e.useProto3Json){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:__PRIVATE_isNegativeZero(i)?"-0":i}}function __PRIVATE_toInteger(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TransformOperation=class TransformOperation{constructor(){this._=void 0}};function __PRIVATE_computeTransformOperationBaseValue(e,i){return e instanceof __PRIVATE_NumericIncrementTransformOperation?isInteger(i)||i&&"doubleValue"in i?i:{integerValue:0}:null}let __PRIVATE_ServerTimestampTransform=class __PRIVATE_ServerTimestampTransform extends TransformOperation{};let __PRIVATE_ArrayUnionTransformOperation=class __PRIVATE_ArrayUnionTransformOperation extends TransformOperation{constructor(e){super(),this.elements=e}};function __PRIVATE_applyArrayUnionTransformOperation(e,i){let s=__PRIVATE_coercedFieldValuesArray(i);for(let i of e.elements)s.some(e=>__PRIVATE_valueEquals(e,i))||s.push(i);return{arrayValue:{values:s}}}let __PRIVATE_ArrayRemoveTransformOperation=class __PRIVATE_ArrayRemoveTransformOperation extends TransformOperation{constructor(e){super(),this.elements=e}};function __PRIVATE_applyArrayRemoveTransformOperation(e,i){let s=__PRIVATE_coercedFieldValuesArray(i);for(let i of e.elements)s=s.filter(e=>!__PRIVATE_valueEquals(e,i));return{arrayValue:{values:s}}}let __PRIVATE_NumericIncrementTransformOperation=class __PRIVATE_NumericIncrementTransformOperation extends TransformOperation{constructor(e,i){super(),this.serializer=e,this.Pe=i}};function asNumber(e){return __PRIVATE_normalizeNumber(e.integerValue||e.doubleValue)}function __PRIVATE_coercedFieldValuesArray(e){return isArray(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}let MutationResult=class MutationResult{constructor(e,i){this.version=e,this.transformResults=i}};let Precondition=class Precondition{constructor(e,i){this.updateTime=e,this.exists=i}static none(){return new Precondition}static exists(e){return new Precondition(void 0,e)}static updateTime(e){return new Precondition(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function __PRIVATE_preconditionIsValidForDocument(e,i){return void 0!==e.updateTime?i.isFoundDocument()&&i.version.isEqual(e.updateTime):void 0===e.exists||e.exists===i.isFoundDocument()}let Mutation=class Mutation{};function __PRIVATE_calculateOverlayMutation(e,i){if(!e.hasLocalMutations||i&&0===i.fields.length)return null;if(null===i)return e.isNoDocument()?new __PRIVATE_DeleteMutation(e.key,Precondition.none()):new __PRIVATE_SetMutation(e.key,e.data,Precondition.none());{let s=e.data,o=ObjectValue.empty(),l=new SortedSet(FieldPath$1.comparator);for(let e of i.fields)if(!l.has(e)){let i=s.field(e);null===i&&e.length>1&&(e=e.popLast(),i=s.field(e)),null===i?o.delete(e):o.set(e,i),l=l.add(e)}return new __PRIVATE_PatchMutation(e.key,o,new FieldMask(l.toArray()),Precondition.none())}}function __PRIVATE_mutationApplyToLocalView(e,i,s,o){return e instanceof __PRIVATE_SetMutation?function(e,i,s,o){if(!__PRIVATE_preconditionIsValidForDocument(e.precondition,i))return s;let l=e.value.clone(),h=__PRIVATE_localTransformResults(e.fieldTransforms,o,i);return l.setAll(h),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(e,i,s,o):e instanceof __PRIVATE_PatchMutation?function(e,i,s,o){if(!__PRIVATE_preconditionIsValidForDocument(e.precondition,i))return s;let l=__PRIVATE_localTransformResults(e.fieldTransforms,o,i),h=i.data;return(h.setAll(__PRIVATE_getPatch(e)),h.setAll(l),i.convertToFoundDocument(i.version,h).setHasLocalMutations(),null===s)?null:s.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,i,s,o):__PRIVATE_preconditionIsValidForDocument(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s}function __PRIVATE_mutationEquals(e,i){var s,o;return e.type===i.type&&!!e.key.isEqual(i.key)&&!!e.precondition.isEqual(i.precondition)&&(s=e.fieldTransforms,o=i.fieldTransforms,!!(void 0===s&&void 0===o||!(!s||!o)&&__PRIVATE_arrayEquals(s,o,(e,i)=>{var s,o;return e.field.isEqual(i.field)&&(s=e.transform,o=i.transform,s instanceof __PRIVATE_ArrayUnionTransformOperation&&o instanceof __PRIVATE_ArrayUnionTransformOperation||s instanceof __PRIVATE_ArrayRemoveTransformOperation&&o instanceof __PRIVATE_ArrayRemoveTransformOperation?__PRIVATE_arrayEquals(s.elements,o.elements,__PRIVATE_valueEquals):s instanceof __PRIVATE_NumericIncrementTransformOperation&&o instanceof __PRIVATE_NumericIncrementTransformOperation?__PRIVATE_valueEquals(s.Pe,o.Pe):s instanceof __PRIVATE_ServerTimestampTransform&&o instanceof __PRIVATE_ServerTimestampTransform)})))&&(0===e.type?e.value.isEqual(i.value):1!==e.type||e.data.isEqual(i.data)&&e.fieldMask.isEqual(i.fieldMask))}let __PRIVATE_SetMutation=class __PRIVATE_SetMutation extends Mutation{constructor(e,i,s,o=[]){super(),this.key=e,this.value=i,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}};let __PRIVATE_PatchMutation=class __PRIVATE_PatchMutation extends Mutation{constructor(e,i,s,o,l=[]){super(),this.key=e,this.data=i,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}};function __PRIVATE_getPatch(e){let i=new Map;return e.fieldMask.fields.forEach(s=>{if(!s.isEmpty()){let o=e.data.field(s);i.set(s,o)}}),i}function __PRIVATE_serverTransformResults(e,i,s){var o;let l=new Map;e.length===s.length||fail();for(let h=0;h<s.length;h++){let d=e[h],f=d.transform,_=i.data.field(d.field);l.set(d.field,(o=s[h],f instanceof __PRIVATE_ArrayUnionTransformOperation?__PRIVATE_applyArrayUnionTransformOperation(f,_):f instanceof __PRIVATE_ArrayRemoveTransformOperation?__PRIVATE_applyArrayRemoveTransformOperation(f,_):o))}return l}function __PRIVATE_localTransformResults(e,i,s){let o=new Map;for(let l of e){let e=l.transform,h=s.data.field(l.field);o.set(l.field,e instanceof __PRIVATE_ServerTimestampTransform?function(e,i){let s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return i&&__PRIVATE_isServerTimestamp(i)&&(i=__PRIVATE_getPreviousValue(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(i,h):e instanceof __PRIVATE_ArrayUnionTransformOperation?__PRIVATE_applyArrayUnionTransformOperation(e,h):e instanceof __PRIVATE_ArrayRemoveTransformOperation?__PRIVATE_applyArrayRemoveTransformOperation(e,h):function(e,i){let s=__PRIVATE_computeTransformOperationBaseValue(e,i),o=asNumber(s)+asNumber(e.Pe);return isInteger(s)&&isInteger(e.Pe)?__PRIVATE_toInteger(o):__PRIVATE_toDouble(e.serializer,o)}(e,h))}return o}let __PRIVATE_DeleteMutation=class __PRIVATE_DeleteMutation extends Mutation{constructor(e,i){super(),this.key=e,this.precondition=i,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}};let __PRIVATE_VerifyMutation=class __PRIVATE_VerifyMutation extends Mutation{constructor(e,i){super(),this.key=e,this.precondition=i,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MutationBatch=class MutationBatch{constructor(e,i,s,o){this.batchId=e,this.localWriteTime=i,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,i){let s=i.mutationResults;for(let i=0;i<this.mutations.length;i++){let l=this.mutations[i];if(l.key.isEqual(e.key)){var o;o=s[i],l instanceof __PRIVATE_SetMutation?function(e,i,s){let o=e.value.clone(),l=__PRIVATE_serverTransformResults(e.fieldTransforms,i,s.transformResults);o.setAll(l),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(l,e,o):l instanceof __PRIVATE_PatchMutation?function(e,i,s){if(!__PRIVATE_preconditionIsValidForDocument(e.precondition,i))return void i.convertToUnknownDocument(s.version);let o=__PRIVATE_serverTransformResults(e.fieldTransforms,i,s.transformResults),l=i.data;l.setAll(__PRIVATE_getPatch(e)),l.setAll(o),i.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(l,e,o):function(e,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,o)}}}applyToLocalView(e,i){for(let s of this.baseMutations)s.key.isEqual(e.key)&&(i=__PRIVATE_mutationApplyToLocalView(s,e,i,this.localWriteTime));for(let s of this.mutations)s.key.isEqual(e.key)&&(i=__PRIVATE_mutationApplyToLocalView(s,e,i,this.localWriteTime));return i}applyToLocalDocumentSet(e,i){let s=__PRIVATE_newDocumentKeyMap();return this.mutations.forEach(o=>{let l=e.get(o.key),h=l.overlayedDocument,d=this.applyToLocalView(h,l.mutatedFields);d=i.has(o.key)?null:d;let f=__PRIVATE_calculateOverlayMutation(h,d);null!==f&&s.set(o.key,f),h.isValidDocument()||h.convertToNoDocument(SnapshotVersion.min())}),s}keys(){return this.mutations.reduce((e,i)=>e.add(i.key),__PRIVATE_documentKeySet())}isEqual(e){return this.batchId===e.batchId&&__PRIVATE_arrayEquals(this.mutations,e.mutations,(e,i)=>__PRIVATE_mutationEquals(e,i))&&__PRIVATE_arrayEquals(this.baseMutations,e.baseMutations,(e,i)=>__PRIVATE_mutationEquals(e,i))}};let MutationBatchResult=class MutationBatchResult{constructor(e,i,s,o){this.batch=e,this.commitVersion=i,this.mutationResults=s,this.docVersions=o}static from(e,i,s){e.mutations.length===s.length||fail();let o=eI,l=e.mutations;for(let e=0;e<l.length;e++)o=o.insert(l[e].key,s[e].version);return new MutationBatchResult(e,i,s,o)}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Overlay=class Overlay{constructor(e,i){this.largestBatchId=e,this.mutation=i}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ExistenceFilter=class ExistenceFilter{constructor(e,i){this.count=e,this.unchangedNames=i}};function __PRIVATE_mapCodeFromRpcCode(e){if(void 0===e)return __PRIVATE_logError("GRPC error has no .code"),e_.UNKNOWN;switch(e){case O.OK:return e_.OK;case O.CANCELLED:return e_.CANCELLED;case O.UNKNOWN:return e_.UNKNOWN;case O.DEADLINE_EXCEEDED:return e_.DEADLINE_EXCEEDED;case O.RESOURCE_EXHAUSTED:return e_.RESOURCE_EXHAUSTED;case O.INTERNAL:return e_.INTERNAL;case O.UNAVAILABLE:return e_.UNAVAILABLE;case O.UNAUTHENTICATED:return e_.UNAUTHENTICATED;case O.INVALID_ARGUMENT:return e_.INVALID_ARGUMENT;case O.NOT_FOUND:return e_.NOT_FOUND;case O.ALREADY_EXISTS:return e_.ALREADY_EXISTS;case O.PERMISSION_DENIED:return e_.PERMISSION_DENIED;case O.FAILED_PRECONDITION:return e_.FAILED_PRECONDITION;case O.ABORTED:return e_.ABORTED;case O.OUT_OF_RANGE:return e_.OUT_OF_RANGE;case O.UNIMPLEMENTED:return e_.UNIMPLEMENTED;case O.DATA_LOSS:return e_.DATA_LOSS;default:return fail()}}(q=O||(O={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eP=new o([4294967295,4294967295],0);function __PRIVATE_getMd5HashValue(e){let i=(new TextEncoder).encode(e),s=new l;return s.update(i),new Uint8Array(s.digest())}function __PRIVATE_get64BitUints(e){let i=new DataView(e.buffer),s=i.getUint32(0,!0),l=i.getUint32(4,!0),h=i.getUint32(8,!0),d=i.getUint32(12,!0);return[new o([s,l],0),new o([h,d],0)]}let BloomFilter=class BloomFilter{constructor(e,i,s){if(this.bitmap=e,this.padding=i,this.hashCount=s,i<0||i>=8)throw new __PRIVATE_BloomFilterError(`Invalid padding: ${i}`);if(s<0||e.length>0&&0===this.hashCount)throw new __PRIVATE_BloomFilterError(`Invalid hash count: ${s}`);if(0===e.length&&0!==i)throw new __PRIVATE_BloomFilterError(`Invalid padding when bitmap length is 0: ${i}`);this.Te=8*e.length-i,this.Ie=o.fromNumber(this.Te)}Ee(e,i,s){let l=e.add(i.multiply(o.fromNumber(s)));return 1===l.compare(eP)&&(l=new o([l.getBits(0),l.getBits(1)],0)),l.modulo(this.Ie).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let i=__PRIVATE_getMd5HashValue(e),[s,o]=__PRIVATE_get64BitUints(i);for(let e=0;e<this.hashCount;e++){let i=this.Ee(s,o,e);if(!this.de(i))return!1}return!0}static create(e,i,s){let o=new Uint8Array(Math.ceil(e/8)),l=new BloomFilter(o,e%8==0?0:8-e%8,i);return s.forEach(e=>l.insert(e)),l}insert(e){if(0===this.Te)return;let i=__PRIVATE_getMd5HashValue(e),[s,o]=__PRIVATE_get64BitUints(i);for(let e=0;e<this.hashCount;e++){let i=this.Ee(s,o,e);this.Ae(i)}}Ae(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}};let __PRIVATE_BloomFilterError=class __PRIVATE_BloomFilterError extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RemoteEvent=class RemoteEvent{constructor(e,i,s,o,l){this.snapshotVersion=e,this.targetChanges=i,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,i,s){let o=new Map;return o.set(e,TargetChange.createSynthesizedTargetChangeForCurrentChange(e,i,s)),new RemoteEvent(SnapshotVersion.min(),o,new SortedMap(__PRIVATE_primitiveComparator),ey,__PRIVATE_documentKeySet())}};let TargetChange=class TargetChange{constructor(e,i,s,o,l){this.resumeToken=e,this.current=i,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,i,s){return new TargetChange(s,i,__PRIVATE_documentKeySet(),__PRIVATE_documentKeySet(),__PRIVATE_documentKeySet())}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_DocumentWatchChange=class __PRIVATE_DocumentWatchChange{constructor(e,i,s,o){this.Re=e,this.removedTargetIds=i,this.key=s,this.Ve=o}};let __PRIVATE_ExistenceFilterChange=class __PRIVATE_ExistenceFilterChange{constructor(e,i){this.targetId=e,this.me=i}};let __PRIVATE_WatchTargetChange=class __PRIVATE_WatchTargetChange{constructor(e,i,s=ByteString.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=i,this.resumeToken=s,this.cause=o}};let __PRIVATE_TargetState=class __PRIVATE_TargetState{constructor(){this.fe=0,this.ge=__PRIVATE_snapshotChangesMap(),this.pe=ByteString.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=__PRIVATE_documentKeySet(),i=__PRIVATE_documentKeySet(),s=__PRIVATE_documentKeySet();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:i=i.add(o);break;case 1:s=s.add(o);break;default:fail()}}),new TargetChange(this.pe,this.ye,e,i,s)}Ce(){this.we=!1,this.ge=__PRIVATE_snapshotChangesMap()}Fe(e,i){this.we=!0,this.ge=this.ge.insert(e,i)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,this.fe>=0||fail()}Ne(){this.we=!0,this.ye=!0}};let __PRIVATE_WatchChangeAggregator=class __PRIVATE_WatchChangeAggregator{constructor(e){this.Le=e,this.Be=new Map,this.ke=ey,this.qe=__PRIVATE_documentTargetMap(),this.Qe=__PRIVATE_documentTargetMap(),this.Ke=new SortedMap(__PRIVATE_primitiveComparator)}$e(e){for(let i of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(i,e.Ve):this.We(i,e.key,e.Ve);for(let i of e.removedTargetIds)this.We(i,e.key,e.Ve)}Ge(e){this.forEachTarget(e,i=>{let s=this.ze(i);switch(e.state){case 0:this.je(i)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(i);break;case 3:this.je(i)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(i)&&(this.He(i),s.De(e.resumeToken));break;default:fail()}})}forEachTarget(e,i){e.targetIds.length>0?e.targetIds.forEach(i):this.Be.forEach((e,s)=>{this.je(s)&&i(s)})}Je(e){let i=e.targetId,s=e.me.count,o=this.Ye(i);if(o){let l=o.target;if(__PRIVATE_targetIsDocumentTarget(l)){if(0===s){let e=new DocumentKey(l.path);this.We(i,e,MutableDocument.newNoDocument(e,SnapshotVersion.min()))}else 1===s||fail()}else{let o=this.Ze(i);if(o!==s){let s=this.Xe(e),l=s?this.et(s,e,o):1;0!==l&&(this.He(i),this.Ke=this.Ke.insert(i,2===l?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let i,s;let o=e.me.unchangedNames;if(!o||!o.bits)return null;let{bits:{bitmap:l="",padding:h=0},hashCount:d=0}=o;try{i=__PRIVATE_normalizeByteString(l).toUint8Array()}catch(e){if(e instanceof __PRIVATE_Base64DecodeError)return __PRIVATE_logWarn("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{s=new BloomFilter(i,h,d)}catch(e){return __PRIVATE_logWarn(e instanceof __PRIVATE_BloomFilterError?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===s.Te?null:s}et(e,i,s){return i.me.count===s-this.rt(e,i.targetId)?0:2}rt(e,i){let s=this.Le.getRemoteKeysForTarget(i),o=0;return s.forEach(s=>{let l=this.Le.nt(),h=`projects/${l.projectId}/databases/${l.database}/documents/${s.path.canonicalString()}`;e.mightContain(h)||(this.We(i,s,null),o++)}),o}it(e){let i=new Map;this.Be.forEach((s,o)=>{let l=this.Ye(o);if(l){if(s.current&&__PRIVATE_targetIsDocumentTarget(l.target)){let i=new DocumentKey(l.target.path);this.st(i).has(o)||this.ot(o,i)||this.We(o,i,MutableDocument.newNoDocument(i,e))}s.be&&(i.set(o,s.ve()),s.Ce())}});let s=__PRIVATE_documentKeySet();this.Qe.forEach((e,i)=>{let o=!0;i.forEachWhile(e=>{let i=this.Ye(e);return!i||"TargetPurposeLimboResolution"===i.purpose||(o=!1,!1)}),o&&(s=s.add(e))}),this.ke.forEach((i,s)=>s.setReadTime(e));let o=new RemoteEvent(e,i,this.Ke,this.ke,s);return this.ke=ey,this.qe=__PRIVATE_documentTargetMap(),this.Qe=__PRIVATE_documentTargetMap(),this.Ke=new SortedMap(__PRIVATE_primitiveComparator),o}Ue(e,i){if(!this.je(e))return;let s=this.ot(e,i.key)?2:0;this.ze(e).Fe(i.key,s),this.ke=this.ke.insert(i.key,i),this.qe=this.qe.insert(i.key,this.st(i.key).add(e)),this.Qe=this.Qe.insert(i.key,this._t(i.key).add(e))}We(e,i,s){if(!this.je(e))return;let o=this.ze(e);this.ot(e,i)?o.Fe(i,1):o.Me(i),this.Qe=this.Qe.insert(i,this._t(i).delete(e)),this.Qe=this.Qe.insert(i,this._t(i).add(e)),s&&(this.ke=this.ke.insert(i,s))}removeTarget(e){this.Be.delete(e)}Ze(e){let i=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+i.addedDocuments.size-i.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let i=this.Be.get(e);return i||(i=new __PRIVATE_TargetState,this.Be.set(e,i)),i}_t(e){let i=this.Qe.get(e);return i||(i=new SortedSet(__PRIVATE_primitiveComparator),this.Qe=this.Qe.insert(e,i)),i}st(e){let i=this.qe.get(e);return i||(i=new SortedSet(__PRIVATE_primitiveComparator),this.qe=this.qe.insert(e,i)),i}je(e){let i=null!==this.Ye(e);return i||__PRIVATE_logDebug("WatchChangeAggregator","Detected inactive target",e),i}Ye(e){let i=this.Be.get(e);return i&&i.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new __PRIVATE_TargetState),this.Le.getRemoteKeysForTarget(e).forEach(i=>{this.We(e,i,null)})}ot(e,i){return this.Le.getRemoteKeysForTarget(e).has(i)}};function __PRIVATE_documentTargetMap(){return new SortedMap(DocumentKey.comparator)}function __PRIVATE_snapshotChangesMap(){return new SortedMap(DocumentKey.comparator)}let eA={asc:"ASCENDING",desc:"DESCENDING"},eR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ew={and:"AND",or:"OR"};let JsonProtoSerializer=class JsonProtoSerializer{constructor(e,i){this.databaseId=e,this.useProto3Json=i}};function __PRIVATE_toInt32Proto(e,i){return e.useProto3Json||null==i?i:{value:i}}function toTimestamp(e,i){return e.useProto3Json?`${new Date(1e3*i.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+i.nanoseconds).slice(-9)}Z`:{seconds:""+i.seconds,nanos:i.nanoseconds}}function __PRIVATE_toBytes(e,i){return e.useProto3Json?i.toBase64():i.toUint8Array()}function __PRIVATE_fromVersion(e){return e||fail(),SnapshotVersion.fromTimestamp(function(e){let i=__PRIVATE_normalizeTimestamp(e);return new Timestamp(i.seconds,i.nanos)}(e))}function __PRIVATE_toResourceName(e,i){return __PRIVATE_toResourcePath(e,i).canonicalString()}function __PRIVATE_toResourcePath(e,i){let s=new ResourcePath(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===i?s:s.child(i)}function __PRIVATE_fromResourceName(e){let i=ResourcePath.fromString(e);return __PRIVATE_isValidResourceName(i)||fail(),i}function __PRIVATE_toName(e,i){return __PRIVATE_toResourceName(e.databaseId,i.path)}function fromName(e,i){let s=__PRIVATE_fromResourceName(i);if(s.get(1)!==e.databaseId.projectId)throw new FirestoreError(e_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+s.get(1)+" vs "+e.databaseId.projectId);if(s.get(3)!==e.databaseId.database)throw new FirestoreError(e_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+s.get(3)+" vs "+e.databaseId.database);return new DocumentKey(__PRIVATE_extractLocalPathFromResourceName(s))}function __PRIVATE_toQueryPath(e,i){return __PRIVATE_toResourceName(e.databaseId,i)}function __PRIVATE_getEncodedDatabaseId(e){return new ResourcePath(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function __PRIVATE_extractLocalPathFromResourceName(e){return e.length>4&&"documents"===e.get(4)||fail(),e.popFirst(5)}function __PRIVATE_toMutationDocument(e,i,s){return{name:__PRIVATE_toName(e,i),fields:s.value.mapValue.fields}}function __PRIVATE_toFieldPathReference(e){return{fieldPath:e.canonicalString()}}function __PRIVATE_fromFieldPathReference(e){return FieldPath$1.fromServerFormat(e.fieldPath)}function __PRIVATE_isValidResourceName(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TargetData=class TargetData{constructor(e,i,s,o,l=SnapshotVersion.min(),h=SnapshotVersion.min(),d=ByteString.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=i,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new TargetData(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,i){return new TargetData(this.target,this.targetId,this.purpose,this.sequenceNumber,i,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new TargetData(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new TargetData(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_LocalSerializer=class __PRIVATE_LocalSerializer{constructor(e){this.ht=e}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_FirestoreIndexValueWriter=class __PRIVATE_FirestoreIndexValueWriter{constructor(){}Et(e,i){this.dt(e,i),i.At()}dt(e,i){if("nullValue"in e)this.Rt(i,5);else if("booleanValue"in e)this.Rt(i,10),i.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(i,15),i.Vt(__PRIVATE_normalizeNumber(e.integerValue));else if("doubleValue"in e){let s=__PRIVATE_normalizeNumber(e.doubleValue);isNaN(s)?this.Rt(i,13):(this.Rt(i,15),__PRIVATE_isNegativeZero(s)?i.Vt(0):i.Vt(s))}else if("timestampValue"in e){let s=e.timestampValue;this.Rt(i,20),"string"==typeof s&&(s=__PRIVATE_normalizeTimestamp(s)),i.ft(`${s.seconds||""}`),i.Vt(s.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,i),this.yt(i);else if("bytesValue"in e)this.Rt(i,30),i.wt(__PRIVATE_normalizeByteString(e.bytesValue)),this.yt(i);else if("referenceValue"in e)this.St(e.referenceValue,i);else if("geoPointValue"in e){let s=e.geoPointValue;this.Rt(i,45),i.Vt(s.latitude||0),i.Vt(s.longitude||0)}else"mapValue"in e?__PRIVATE_isMaxValue(e)?this.Rt(i,Number.MAX_SAFE_INTEGER):__PRIVATE_isVectorValue(e)?this.bt(e.mapValue,i):(this.Dt(e.mapValue,i),this.yt(i)):"arrayValue"in e?(this.vt(e.arrayValue,i),this.yt(i)):fail()}gt(e,i){this.Rt(i,25),this.Ct(e,i)}Ct(e,i){i.ft(e)}Dt(e,i){let s=e.fields||{};for(let e of(this.Rt(i,55),Object.keys(s)))this.gt(e,i),this.dt(s[e],i)}bt(e,i){var s,o;let l=e.fields||{};this.Rt(i,53);let h="value",d=(null===(o=null===(s=l[h].arrayValue)||void 0===s?void 0:s.values)||void 0===o?void 0:o.length)||0;this.Rt(i,15),i.Vt(__PRIVATE_normalizeNumber(d)),this.gt(h,i),this.dt(l[h],i)}vt(e,i){let s=e.values||[];for(let e of(this.Rt(i,50),s))this.dt(e,i)}St(e,i){this.Rt(i,37),DocumentKey.fromName(e).path.forEach(e=>{this.Rt(i,60),this.Ct(e,i)})}Rt(e,i){e.Vt(i)}yt(e){e.Vt(2)}};__PRIVATE_FirestoreIndexValueWriter.Ft=new __PRIVATE_FirestoreIndexValueWriter;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryIndexManager=class __PRIVATE_MemoryIndexManager{constructor(){this.ln=new __PRIVATE_MemoryCollectionParentIndex}addToCollectionParentIndex(e,i){return this.ln.add(i),PersistencePromise.resolve()}getCollectionParents(e,i){return PersistencePromise.resolve(this.ln.getEntries(i))}addFieldIndex(e,i){return PersistencePromise.resolve()}deleteFieldIndex(e,i){return PersistencePromise.resolve()}deleteAllFieldIndexes(e){return PersistencePromise.resolve()}createTargetIndexes(e,i){return PersistencePromise.resolve()}getDocumentsMatchingTarget(e,i){return PersistencePromise.resolve(null)}getIndexType(e,i){return PersistencePromise.resolve(0)}getFieldIndexes(e,i){return PersistencePromise.resolve([])}getNextCollectionGroupToUpdate(e){return PersistencePromise.resolve(null)}getMinOffset(e,i){return PersistencePromise.resolve(IndexOffset.min())}getMinOffsetFromCollectionGroup(e,i){return PersistencePromise.resolve(IndexOffset.min())}updateCollectionGroup(e,i,s){return PersistencePromise.resolve()}updateIndexEntries(e,i){return PersistencePromise.resolve()}};let __PRIVATE_MemoryCollectionParentIndex=class __PRIVATE_MemoryCollectionParentIndex{constructor(){this.index={}}add(e){let i=e.lastSegment(),s=e.popLast(),o=this.index[i]||new SortedSet(ResourcePath.comparator),l=!o.has(s);return this.index[i]=o.add(s),l}has(e){let i=e.lastSegment(),s=e.popLast(),o=this.index[i];return o&&o.has(s)}getEntries(e){return(this.index[e]||new SortedSet(ResourcePath.comparator)).toArray()}};new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eV={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};let LruParams=class LruParams{static withCacheSize(e){return new LruParams(e,LruParams.DEFAULT_COLLECTION_PERCENTILE,LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,i,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=i,this.maximumSequenceNumbersToCollect=s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */LruParams.DEFAULT_COLLECTION_PERCENTILE=10,LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,LruParams.DEFAULT=new LruParams(41943040,LruParams.DEFAULT_COLLECTION_PERCENTILE,LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),LruParams.DISABLED=new LruParams(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_TargetIdGenerator=class __PRIVATE_TargetIdGenerator{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new __PRIVATE_TargetIdGenerator(0)}static Qn(){return new __PRIVATE_TargetIdGenerator(-1)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_bufferEntryComparator([e,i],[s,o]){let l=__PRIVATE_primitiveComparator(e,s);return 0===l?__PRIVATE_primitiveComparator(i,o):l}let __PRIVATE_RollingSequenceNumberBuffer=class __PRIVATE_RollingSequenceNumberBuffer{constructor(e){this.Gn=e,this.buffer=new SortedSet(__PRIVATE_bufferEntryComparator),this.zn=0}jn(){return++this.zn}Hn(e){let i=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(i);else{let e=this.buffer.last();0>__PRIVATE_bufferEntryComparator(i,e)&&(this.buffer=this.buffer.delete(e).add(i))}}get maxValue(){return this.buffer.last()[0]}};let __PRIVATE_LruScheduler=class __PRIVATE_LruScheduler{constructor(e,i,s){this.garbageCollector=e,this.asyncQueue=i,this.localStore=s,this.Jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return null!==this.Jn}Yn(e){__PRIVATE_logDebug("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){__PRIVATE_isIndexedDbTransactionError(e)?__PRIVATE_logDebug("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await __PRIVATE_ignoreIfPrimaryLeaseLoss(e)}await this.Yn(3e5)})}};let __PRIVATE_LruGarbageCollectorImpl=class __PRIVATE_LruGarbageCollectorImpl{constructor(e,i){this.Zn=e,this.params=i}calculateTargetCount(e,i){return this.Zn.Xn(e).next(e=>Math.floor(i/100*e))}nthSequenceNumber(e,i){if(0===i)return PersistencePromise.resolve(__PRIVATE_ListenSequence.oe);let s=new __PRIVATE_RollingSequenceNumberBuffer(i);return this.Zn.forEachTarget(e,e=>s.Hn(e.sequenceNumber)).next(()=>this.Zn.er(e,e=>s.Hn(e))).next(()=>s.maxValue)}removeTargets(e,i,s){return this.Zn.removeTargets(e,i,s)}removeOrphanedDocuments(e,i){return this.Zn.removeOrphanedDocuments(e,i)}collect(e,i){return -1===this.params.cacheSizeCollectionThreshold?(__PRIVATE_logDebug("LruGarbageCollector","Garbage collection skipped; disabled"),PersistencePromise.resolve(eV)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(__PRIVATE_logDebug("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),eV):this.tr(e,i))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,i){let s,o,l,h,d,f,_;let g=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(i=>(i>this.params.maximumSequenceNumbersToCollect?(__PRIVATE_logDebug("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${i}`),o=this.params.maximumSequenceNumbersToCollect):o=i,h=Date.now(),this.nthSequenceNumber(e,o))).next(o=>(s=o,d=Date.now(),this.removeTargets(e,s,i))).next(i=>(l=i,f=Date.now(),this.removeOrphanedDocuments(e,s))).next(e=>(_=Date.now(),__PRIVATE_getLogLevel()<=er.in.DEBUG&&__PRIVATE_logDebug("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-g}ms
	Determined least recently used ${o} in `+(d-h)+"ms\n"+`	Removed ${l} targets in `+(f-d)+"ms\n"+`	Removed ${e} documents in `+(_-f)+"ms\n"+`Total Duration: ${_-g}ms`),PersistencePromise.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:e})))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RemoteDocumentChangeBuffer=class RemoteDocumentChangeBuffer{constructor(){this.changes=new ObjectMap(e=>e.toString(),(e,i)=>e.isEqual(i)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,i){this.assertNotApplied(),this.changes.set(e,MutableDocument.newInvalidDocument(e).setReadTime(i))}getEntry(e,i){this.assertNotApplied();let s=this.changes.get(i);return void 0!==s?PersistencePromise.resolve(s):this.getFromCache(e,i)}getEntries(e,i){return this.getAllFromCache(e,i)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let OverlayedDocument=class OverlayedDocument{constructor(e,i){this.overlayedDocument=e,this.mutatedFields=i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let LocalDocumentsView=class LocalDocumentsView{constructor(e,i,s,o){this.remoteDocumentCache=e,this.mutationQueue=i,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,i){let s=null;return this.documentOverlayCache.getOverlay(e,i).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,i))).next(e=>(null!==s&&__PRIVATE_mutationApplyToLocalView(s.mutation,e,FieldMask.empty(),Timestamp.now()),e))}getDocuments(e,i){return this.remoteDocumentCache.getEntries(e,i).next(i=>this.getLocalViewOfDocuments(e,i,__PRIVATE_documentKeySet()).next(()=>i))}getLocalViewOfDocuments(e,i,s=__PRIVATE_documentKeySet()){let o=__PRIVATE_newDocumentKeyMap();return this.populateOverlays(e,o,i).next(()=>this.computeViews(e,i,o,s).next(e=>{let i=documentMap();return e.forEach((e,s)=>{i=i.insert(e,s.overlayedDocument)}),i}))}getOverlayedDocuments(e,i){let s=__PRIVATE_newDocumentKeyMap();return this.populateOverlays(e,s,i).next(()=>this.computeViews(e,i,s,__PRIVATE_documentKeySet()))}populateOverlays(e,i,s){let o=[];return s.forEach(e=>{i.has(e)||o.push(e)}),this.documentOverlayCache.getOverlays(e,o).next(e=>{e.forEach((e,s)=>{i.set(e,s)})})}computeViews(e,i,s,o){let l=ey,h=__PRIVATE_newDocumentKeyMap(),d=__PRIVATE_newDocumentKeyMap();return i.forEach((e,i)=>{let d=s.get(i.key);o.has(i.key)&&(void 0===d||d.mutation instanceof __PRIVATE_PatchMutation)?l=l.insert(i.key,i):void 0!==d?(h.set(i.key,d.mutation.getFieldMask()),__PRIVATE_mutationApplyToLocalView(d.mutation,i,d.mutation.getFieldMask(),Timestamp.now())):h.set(i.key,FieldMask.empty())}),this.recalculateAndSaveOverlays(e,l).next(e=>(e.forEach((e,i)=>h.set(e,i)),i.forEach((e,i)=>{var s;return d.set(e,new OverlayedDocument(i,null!==(s=h.get(e))&&void 0!==s?s:null))}),d))}recalculateAndSaveOverlays(e,i){let s=__PRIVATE_newDocumentKeyMap(),o=new SortedMap((e,i)=>e-i),l=__PRIVATE_documentKeySet();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,i).next(e=>{for(let l of e)l.keys().forEach(e=>{let h=i.get(e);if(null===h)return;let d=s.get(e)||FieldMask.empty();d=l.applyToLocalView(h,d),s.set(e,d);let f=(o.get(l.batchId)||__PRIVATE_documentKeySet()).add(e);o=o.insert(l.batchId,f)})}).next(()=>{let h=[],d=o.getReverseIterator();for(;d.hasNext();){let o=d.getNext(),f=o.key,_=o.value,g=__PRIVATE_newDocumentKeyMap();_.forEach(e=>{if(!l.has(e)){let o=__PRIVATE_calculateOverlayMutation(i.get(e),s.get(e));null!==o&&g.set(e,o),l=l.add(e)}}),h.push(this.documentOverlayCache.saveOverlays(e,f,g))}return PersistencePromise.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,i){return this.remoteDocumentCache.getEntries(e,i).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,i,s,o){return DocumentKey.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,i.path):__PRIVATE_isCollectionGroupQuery(i)?this.getDocumentsMatchingCollectionGroupQuery(e,i,s,o):this.getDocumentsMatchingCollectionQuery(e,i,s,o)}getNextDocuments(e,i,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,i,s,o).next(l=>{let h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,i,s.largestBatchId,o-l.size):PersistencePromise.resolve(__PRIVATE_newDocumentKeyMap()),d=-1,f=l;return h.next(i=>PersistencePromise.forEach(i,(i,s)=>(d<s.largestBatchId&&(d=s.largestBatchId),l.get(i)?PersistencePromise.resolve():this.remoteDocumentCache.getEntry(e,i).next(e=>{f=f.insert(i,e)}))).next(()=>this.populateOverlays(e,i,l)).next(()=>this.computeViews(e,f,i,__PRIVATE_documentKeySet())).next(e=>({batchId:d,changes:__PRIVATE_convertOverlayedDocumentMapToDocumentMap(e)})))})}getDocumentsMatchingDocumentQuery(e,i){return this.getDocument(e,new DocumentKey(i)).next(e=>{let i=documentMap();return e.isFoundDocument()&&(i=i.insert(e.key,e)),i})}getDocumentsMatchingCollectionGroupQuery(e,i,s,o){let l=i.collectionGroup,h=documentMap();return this.indexManager.getCollectionParents(e,l).next(d=>PersistencePromise.forEach(d,d=>{var f;let _=(f=d.child(l),new __PRIVATE_QueryImpl(f,null,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next(e=>{e.forEach((e,i)=>{h=h.insert(e,i)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,i,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,i.path,s.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,i,s,l,o))).next(e=>{l.forEach((i,s)=>{let o=s.getKey();null===e.get(o)&&(e=e.insert(o,MutableDocument.newInvalidDocument(o)))});let s=documentMap();return e.forEach((e,o)=>{let h=l.get(e);void 0!==h&&__PRIVATE_mutationApplyToLocalView(h.mutation,o,FieldMask.empty(),Timestamp.now()),__PRIVATE_queryMatches(i,o)&&(s=s.insert(e,o))}),s})}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryBundleCache=class __PRIVATE_MemoryBundleCache{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,i){return PersistencePromise.resolve(this.Tr.get(i))}saveBundleMetadata(e,i){return this.Tr.set(i.id,{id:i.id,version:i.version,createTime:__PRIVATE_fromVersion(i.createTime)}),PersistencePromise.resolve()}getNamedQuery(e,i){return PersistencePromise.resolve(this.Ir.get(i))}saveNamedQuery(e,i){return this.Ir.set(i.name,{name:i.name,query:function(e){let i=function(e){var i,s,o,l,h,d,f,_;let g,w=function(e){let i=__PRIVATE_fromResourceName(e);return 4===i.length?ResourcePath.emptyPath():__PRIVATE_extractLocalPathFromResourceName(i)}(e.parent),b=e.structuredQuery,k=b.from?b.from.length:0,O=null;if(k>0){1===k||fail();let e=b.from[0];e.allDescendants?O=e.collectionId:w=w.child(e.collectionId)}let q=[];b.where&&(q=function(e){var i;let s=function __PRIVATE_fromFilter(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let i=__PRIVATE_fromFieldPathReference(e.unaryFilter.field);return FieldFilter.create(i,"==",{doubleValue:NaN});case"IS_NULL":let s=__PRIVATE_fromFieldPathReference(e.unaryFilter.field);return FieldFilter.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let o=__PRIVATE_fromFieldPathReference(e.unaryFilter.field);return FieldFilter.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let l=__PRIVATE_fromFieldPathReference(e.unaryFilter.field);return FieldFilter.create(l,"!=",{nullValue:"NULL_VALUE"});default:return fail()}}(e):void 0!==e.fieldFilter?FieldFilter.create(__PRIVATE_fromFieldPathReference(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fail()}}(e.fieldFilter.op),e.fieldFilter.value):void 0!==e.compositeFilter?CompositeFilter.create(e.compositeFilter.filters.map(e=>__PRIVATE_fromFilter(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return fail()}}(e.compositeFilter.op)):fail()}(e);return s instanceof CompositeFilter&&__PRIVATE_compositeFilterIsFlat(i=s)&&__PRIVATE_compositeFilterIsConjunction(i)?s.getFilters():[s]}(b.where));let j=[];b.orderBy&&(j=b.orderBy.map(e=>new OrderBy(__PRIVATE_fromFieldPathReference(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let $=null;b.limit&&($=null==(g="object"==typeof(i=b.limit)?i.value:i)?null:g);let ee=null;b.startAt&&(ee=function(e){let i=!!e.before,s=e.values||[];return new Bound(s,i)}(b.startAt));let et=null;return b.endAt&&(et=function(e){let i=!e.before,s=e.values||[];return new Bound(s,i)}(b.endAt)),s=w,o=O,l=j,h=q,d=$,f=ee,_=et,new __PRIVATE_QueryImpl(s,o,l,h,d,"F",f,_)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?__PRIVATE_queryWithLimit(i,i.limit,"L"):i}(i.bundledQuery),readTime:__PRIVATE_fromVersion(i.readTime)}),PersistencePromise.resolve()}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryDocumentOverlayCache=class __PRIVATE_MemoryDocumentOverlayCache{constructor(){this.overlays=new SortedMap(DocumentKey.comparator),this.Er=new Map}getOverlay(e,i){return PersistencePromise.resolve(this.overlays.get(i))}getOverlays(e,i){let s=__PRIVATE_newDocumentKeyMap();return PersistencePromise.forEach(i,i=>this.getOverlay(e,i).next(e=>{null!==e&&s.set(i,e)})).next(()=>s)}saveOverlays(e,i,s){return s.forEach((s,o)=>{this.Tt(e,i,o)}),PersistencePromise.resolve()}removeOverlaysForBatchId(e,i,s){let o=this.Er.get(s);return void 0!==o&&(o.forEach(e=>this.overlays=this.overlays.remove(e)),this.Er.delete(s)),PersistencePromise.resolve()}getOverlaysForCollection(e,i,s){let o=__PRIVATE_newDocumentKeyMap(),l=i.length+1,h=new DocumentKey(i.child("")),d=this.overlays.getIteratorFrom(h);for(;d.hasNext();){let e=d.getNext().value,h=e.getKey();if(!i.isPrefixOf(h.path))break;h.path.length===l&&e.largestBatchId>s&&o.set(e.getKey(),e)}return PersistencePromise.resolve(o)}getOverlaysForCollectionGroup(e,i,s,o){let l=new SortedMap((e,i)=>e-i),h=this.overlays.getIterator();for(;h.hasNext();){let e=h.getNext().value;if(e.getKey().getCollectionGroup()===i&&e.largestBatchId>s){let i=l.get(e.largestBatchId);null===i&&(i=__PRIVATE_newDocumentKeyMap(),l=l.insert(e.largestBatchId,i)),i.set(e.getKey(),e)}}let d=__PRIVATE_newDocumentKeyMap(),f=l.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((e,i)=>d.set(e,i)),!(d.size()>=o)););return PersistencePromise.resolve(d)}Tt(e,i,s){let o=this.overlays.get(s.key);if(null!==o){let e=this.Er.get(o.largestBatchId).delete(s.key);this.Er.set(o.largestBatchId,e)}this.overlays=this.overlays.insert(s.key,new Overlay(i,s));let l=this.Er.get(i);void 0===l&&(l=__PRIVATE_documentKeySet(),this.Er.set(i,l)),this.Er.set(i,l.add(s.key))}};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryGlobalsCache=class __PRIVATE_MemoryGlobalsCache{constructor(){this.sessionToken=ByteString.EMPTY_BYTE_STRING}getSessionToken(e){return PersistencePromise.resolve(this.sessionToken)}setSessionToken(e,i){return this.sessionToken=i,PersistencePromise.resolve()}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_ReferenceSet=class __PRIVATE_ReferenceSet{constructor(){this.dr=new SortedSet(__PRIVATE_DocReference.Ar),this.Rr=new SortedSet(__PRIVATE_DocReference.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,i){let s=new __PRIVATE_DocReference(e,i);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,i){e.forEach(e=>this.addReference(e,i))}removeReference(e,i){this.gr(new __PRIVATE_DocReference(e,i))}pr(e,i){e.forEach(e=>this.removeReference(e,i))}yr(e){let i=new DocumentKey(new ResourcePath([])),s=new __PRIVATE_DocReference(i,e),o=new __PRIVATE_DocReference(i,e+1),l=[];return this.Rr.forEachInRange([s,o],e=>{this.gr(e),l.push(e.key)}),l}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){let i=new DocumentKey(new ResourcePath([])),s=new __PRIVATE_DocReference(i,e),o=new __PRIVATE_DocReference(i,e+1),l=__PRIVATE_documentKeySet();return this.Rr.forEachInRange([s,o],e=>{l=l.add(e.key)}),l}containsKey(e){let i=new __PRIVATE_DocReference(e,0),s=this.dr.firstAfterOrEqual(i);return null!==s&&e.isEqual(s.key)}};let __PRIVATE_DocReference=class __PRIVATE_DocReference{constructor(e,i){this.key=e,this.br=i}static Ar(e,i){return DocumentKey.comparator(e.key,i.key)||__PRIVATE_primitiveComparator(e.br,i.br)}static Vr(e,i){return __PRIVATE_primitiveComparator(e.br,i.br)||DocumentKey.comparator(e.key,i.key)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryMutationQueue=class __PRIVATE_MemoryMutationQueue{constructor(e,i){this.indexManager=e,this.referenceDelegate=i,this.mutationQueue=[],this.Dr=1,this.vr=new SortedSet(__PRIVATE_DocReference.Ar)}checkEmpty(e){return PersistencePromise.resolve(0===this.mutationQueue.length)}addMutationBatch(e,i,s,o){let l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let h=new MutationBatch(l,i,s,o);for(let i of(this.mutationQueue.push(h),o))this.vr=this.vr.add(new __PRIVATE_DocReference(i.key,l)),this.indexManager.addToCollectionParentIndex(e,i.key.path.popLast());return PersistencePromise.resolve(h)}lookupMutationBatch(e,i){return PersistencePromise.resolve(this.Cr(i))}getNextMutationBatchAfterBatchId(e,i){let s=this.Fr(i+1),o=s<0?0:s;return PersistencePromise.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return PersistencePromise.resolve(0===this.mutationQueue.length?-1:this.Dr-1)}getAllMutationBatches(e){return PersistencePromise.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,i){let s=new __PRIVATE_DocReference(i,0),o=new __PRIVATE_DocReference(i,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([s,o],e=>{let i=this.Cr(e.br);l.push(i)}),PersistencePromise.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,i){let s=new SortedSet(__PRIVATE_primitiveComparator);return i.forEach(e=>{let i=new __PRIVATE_DocReference(e,0),o=new __PRIVATE_DocReference(e,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],e=>{s=s.add(e.br)})}),PersistencePromise.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,i){let s=i.path,o=s.length+1,l=s;DocumentKey.isDocumentKey(l)||(l=l.child(""));let h=new __PRIVATE_DocReference(new DocumentKey(l),0),d=new SortedSet(__PRIVATE_primitiveComparator);return this.vr.forEachWhile(e=>{let i=e.key.path;return!!s.isPrefixOf(i)&&(i.length===o&&(d=d.add(e.br)),!0)},h),PersistencePromise.resolve(this.Mr(d))}Mr(e){let i=[];return e.forEach(e=>{let s=this.Cr(e);null!==s&&i.push(s)}),i}removeMutationBatch(e,i){0===this.Or(i.batchId,"removed")||fail(),this.mutationQueue.shift();let s=this.vr;return PersistencePromise.forEach(i.mutations,o=>{let l=new __PRIVATE_DocReference(o.key,i.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,i){let s=new __PRIVATE_DocReference(i,0),o=this.vr.firstAfterOrEqual(s);return PersistencePromise.resolve(i.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,PersistencePromise.resolve()}Or(e,i){return this.Fr(e)}Fr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Cr(e){let i=this.Fr(e);return i<0||i>=this.mutationQueue.length?null:this.mutationQueue[i]}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryRemoteDocumentCacheImpl=class __PRIVATE_MemoryRemoteDocumentCacheImpl{constructor(e){this.Nr=e,this.docs=new SortedMap(DocumentKey.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,i){let s=i.key,o=this.docs.get(s),l=o?o.size:0,h=this.Nr(i);return this.docs=this.docs.insert(s,{document:i.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){let i=this.docs.get(e);i&&(this.docs=this.docs.remove(e),this.size-=i.size)}getEntry(e,i){let s=this.docs.get(i);return PersistencePromise.resolve(s?s.document.mutableCopy():MutableDocument.newInvalidDocument(i))}getEntries(e,i){let s=ey;return i.forEach(e=>{let i=this.docs.get(e);s=s.insert(e,i?i.document.mutableCopy():MutableDocument.newInvalidDocument(e))}),PersistencePromise.resolve(s)}getDocumentsMatchingQuery(e,i,s,o){let l=ey,h=i.path,d=new DocumentKey(h.child("")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){let{key:e,value:{document:d}}=f.getNext();if(!h.isPrefixOf(e.path))break;e.path.length>h.length+1||0>=function(e,i){let s=e.readTime.compareTo(i.readTime);return 0!==s?s:0!==(s=DocumentKey.comparator(e.documentKey,i.documentKey))?s:__PRIVATE_primitiveComparator(e.largestBatchId,i.largestBatchId)}(new IndexOffset(d.readTime,d.key,-1),s)||(o.has(d.key)||__PRIVATE_queryMatches(i,d))&&(l=l.insert(d.key,d.mutableCopy()))}return PersistencePromise.resolve(l)}getAllFromCollectionGroup(e,i,s,o){fail()}Lr(e,i){return PersistencePromise.forEach(this.docs,e=>i(e))}newChangeBuffer(e){return new __PRIVATE_MemoryRemoteDocumentChangeBuffer(this)}getSize(e){return PersistencePromise.resolve(this.size)}};let __PRIVATE_MemoryRemoteDocumentChangeBuffer=class __PRIVATE_MemoryRemoteDocumentChangeBuffer extends RemoteDocumentChangeBuffer{constructor(e){super(),this.hr=e}applyChanges(e){let i=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?i.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),PersistencePromise.waitFor(i)}getFromCache(e,i){return this.hr.getEntry(e,i)}getAllFromCache(e,i){return this.hr.getEntries(e,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryTargetCache=class __PRIVATE_MemoryTargetCache{constructor(e){this.persistence=e,this.Br=new ObjectMap(e=>__PRIVATE_canonifyTarget(e),__PRIVATE_targetEquals),this.lastRemoteSnapshotVersion=SnapshotVersion.min(),this.highestTargetId=0,this.kr=0,this.qr=new __PRIVATE_ReferenceSet,this.targetCount=0,this.Qr=__PRIVATE_TargetIdGenerator.qn()}forEachTarget(e,i){return this.Br.forEach((e,s)=>i(s)),PersistencePromise.resolve()}getLastRemoteSnapshotVersion(e){return PersistencePromise.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return PersistencePromise.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),PersistencePromise.resolve(this.highestTargetId)}setTargetsMetadata(e,i,s){return s&&(this.lastRemoteSnapshotVersion=s),i>this.kr&&(this.kr=i),PersistencePromise.resolve()}Un(e){this.Br.set(e.target,e);let i=e.targetId;i>this.highestTargetId&&(this.Qr=new __PRIVATE_TargetIdGenerator(i),this.highestTargetId=i),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,i){return this.Un(i),this.targetCount+=1,PersistencePromise.resolve()}updateTargetData(e,i){return this.Un(i),PersistencePromise.resolve()}removeTargetData(e,i){return this.Br.delete(i.target),this.qr.yr(i.targetId),this.targetCount-=1,PersistencePromise.resolve()}removeTargets(e,i,s){let o=0,l=[];return this.Br.forEach((h,d)=>{d.sequenceNumber<=i&&null===s.get(d.targetId)&&(this.Br.delete(h),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),PersistencePromise.waitFor(l).next(()=>o)}getTargetCount(e){return PersistencePromise.resolve(this.targetCount)}getTargetData(e,i){let s=this.Br.get(i)||null;return PersistencePromise.resolve(s)}addMatchingKeys(e,i,s){return this.qr.mr(i,s),PersistencePromise.resolve()}removeMatchingKeys(e,i,s){this.qr.pr(i,s);let o=this.persistence.referenceDelegate,l=[];return o&&i.forEach(i=>{l.push(o.markPotentiallyOrphaned(e,i))}),PersistencePromise.waitFor(l)}removeMatchingKeysForTargetId(e,i){return this.qr.yr(i),PersistencePromise.resolve()}getMatchingKeysForTargetId(e,i){let s=this.qr.Sr(i);return PersistencePromise.resolve(s)}containsKey(e,i){return PersistencePromise.resolve(this.qr.containsKey(i))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_MemoryPersistence=class __PRIVATE_MemoryPersistence{constructor(e,i){this.Kr={},this.overlays={},this.$r=new __PRIVATE_ListenSequence(0),this.Ur=!1,this.Ur=!0,this.Wr=new __PRIVATE_MemoryGlobalsCache,this.referenceDelegate=e(this),this.Gr=new __PRIVATE_MemoryTargetCache(this),this.indexManager=new __PRIVATE_MemoryIndexManager,this.remoteDocumentCache=new __PRIVATE_MemoryRemoteDocumentCacheImpl(e=>this.referenceDelegate.zr(e)),this.serializer=new __PRIVATE_LocalSerializer(i),this.jr=new __PRIVATE_MemoryBundleCache(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let i=this.overlays[e.toKey()];return i||(i=new __PRIVATE_MemoryDocumentOverlayCache,this.overlays[e.toKey()]=i),i}getMutationQueue(e,i){let s=this.Kr[e.toKey()];return s||(s=new __PRIVATE_MemoryMutationQueue(i,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,i,s){__PRIVATE_logDebug("MemoryPersistence","Starting transaction:",e);let o=new __PRIVATE_MemoryTransaction(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(e=>this.referenceDelegate.Jr(o).next(()=>e)).toPromise().then(e=>(o.raiseOnCommittedEvent(),e))}Yr(e,i){return PersistencePromise.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,i)))}};let __PRIVATE_MemoryTransaction=class __PRIVATE_MemoryTransaction extends PersistenceTransaction{constructor(e){super(),this.currentSequenceNumber=e}};let __PRIVATE_MemoryEagerDelegate=class __PRIVATE_MemoryEagerDelegate{constructor(e){this.persistence=e,this.Zr=new __PRIVATE_ReferenceSet,this.Xr=null}static ei(e){return new __PRIVATE_MemoryEagerDelegate(e)}get ti(){if(this.Xr)return this.Xr;throw fail()}addReference(e,i,s){return this.Zr.addReference(s,i),this.ti.delete(s.toString()),PersistencePromise.resolve()}removeReference(e,i,s){return this.Zr.removeReference(s,i),this.ti.add(s.toString()),PersistencePromise.resolve()}markPotentiallyOrphaned(e,i){return this.ti.add(i.toString()),PersistencePromise.resolve()}removeTarget(e,i){this.Zr.yr(i.targetId).forEach(e=>this.ti.add(e.toString()));let s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,i.targetId).next(e=>{e.forEach(e=>this.ti.add(e.toString()))}).next(()=>s.removeTargetData(e,i))}Hr(){this.Xr=new Set}Jr(e){let i=this.persistence.getRemoteDocumentCache().newChangeBuffer();return PersistencePromise.forEach(this.ti,s=>{let o=DocumentKey.fromPath(s);return this.ni(e,o).next(e=>{e||i.removeEntry(o,SnapshotVersion.min())})}).next(()=>(this.Xr=null,i.apply(e)))}updateLimboDocument(e,i){return this.ni(e,i).next(e=>{e?this.ti.delete(i.toString()):this.ti.add(i.toString())})}zr(e){return 0}ni(e,i){return PersistencePromise.or([()=>PersistencePromise.resolve(this.Zr.containsKey(i)),()=>this.persistence.getTargetCache().containsKey(e,i),()=>this.persistence.Yr(e,i)])}};let __PRIVATE_MemoryLruDelegate=class __PRIVATE_MemoryLruDelegate{constructor(e,i){this.persistence=e,this.ri=new ObjectMap(e=>/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){var i,s;let o="";for(let i=0;i<e.length;i++)o.length>0&&(o=o+"\x01\x01"),o=function(e,i){let s=i,o=e.length;for(let i=0;i<o;i++){let o=e.charAt(i);switch(o){case"\x00":s+="\x01\x10";break;case"\x01":s+="\x01\x11";break;default:s+=o}}return s}(e.get(i),o);return o+"\x01\x01"})(e.path),(e,i)=>e.isEqual(i)),this.garbageCollector=new __PRIVATE_LruGarbageCollectorImpl(this,i)}static ei(e,i){return new __PRIVATE_MemoryLruDelegate(e,i)}Hr(){}Jr(e){return PersistencePromise.resolve()}forEachTarget(e,i){return this.persistence.getTargetCache().forEachTarget(e,i)}Xn(e){let i=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>i.next(i=>e+i))}nr(e){let i=0;return this.er(e,e=>{i++}).next(()=>i)}er(e,i){return PersistencePromise.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(e=>e?PersistencePromise.resolve():i(o)))}removeTargets(e,i,s){return this.persistence.getTargetCache().removeTargets(e,i,s)}removeOrphanedDocuments(e,i){let s=0,o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Lr(e,o=>this.ir(e,o,i).next(e=>{e||(s++,l.removeEntry(o,SnapshotVersion.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,i){return this.ri.set(i,e.currentSequenceNumber),PersistencePromise.resolve()}removeTarget(e,i){let s=i.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,i,s){return this.ri.set(s,e.currentSequenceNumber),PersistencePromise.resolve()}removeReference(e,i,s){return this.ri.set(s,e.currentSequenceNumber),PersistencePromise.resolve()}updateLimboDocument(e,i){return this.ri.set(i,e.currentSequenceNumber),PersistencePromise.resolve()}zr(e){let i=e.key.toString().length;return e.isFoundDocument()&&(i+=function __PRIVATE_estimateByteSize(e){switch(__PRIVATE_typeOrder(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let i=__PRIVATE_getPreviousValue(e);return i?16+__PRIVATE_estimateByteSize(i):16;case 5:return 2*e.stringValue.length;case 6:return __PRIVATE_normalizeByteString(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(e.arrayValue.values||[]).reduce((e,i)=>e+__PRIVATE_estimateByteSize(i),0);case 10:case 11:var s;let o;return s=e.mapValue,o=0,forEach(s.fields,(e,i)=>{o+=e.length+__PRIVATE_estimateByteSize(i)}),o;default:throw fail()}}(e.data.value)),i}ir(e,i,s){return PersistencePromise.or([()=>this.persistence.Yr(e,i),()=>this.persistence.getTargetCache().containsKey(e,i),()=>{let e=this.ri.get(i);return PersistencePromise.resolve(void 0!==e&&e>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_LocalViewChanges=class __PRIVATE_LocalViewChanges{constructor(e,i,s,o){this.targetId=e,this.fromCache=i,this.Wi=s,this.Gi=o}static zi(e,i){let s=__PRIVATE_documentKeySet(),o=__PRIVATE_documentKeySet();for(let e of i.docChanges)switch(e.type){case 0:s=s.add(e.doc.key);break;case 1:o=o.add(e.doc.key)}return new __PRIVATE_LocalViewChanges(e,i.fromCache,s,o)}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QueryContext=class QueryContext{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_QueryEngine=class __PRIVATE_QueryEngine{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=(0,en.G6)()?8:function(e){let i=e.match(/Android ([\d.]+)/i),s=i?i[1].split(".").slice(0,2).join("."):"-1";return Number(s)}((0,en.z$)())>0?6:4}initialize(e,i){this.Zi=e,this.indexManager=i,this.ji=!0}getDocumentsMatchingQuery(e,i,s,o){let l={result:null};return this.Xi(e,i).next(e=>{l.result=e}).next(()=>{if(!l.result)return this.es(e,i,o,s).next(e=>{l.result=e})}).next(()=>{if(l.result)return;let s=new QueryContext;return this.ts(e,i,s).next(o=>{if(l.result=o,this.Hi)return this.ns(e,i,s,o.size)})}).next(()=>l.result)}ns(e,i,s,o){return s.documentReadCount<this.Ji?(__PRIVATE_getLogLevel()<=er.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","SDK will not create cache indexes for query:",__PRIVATE_stringifyQuery(i),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),PersistencePromise.resolve()):(__PRIVATE_getLogLevel()<=er.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","Query:",__PRIVATE_stringifyQuery(i),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(__PRIVATE_getLogLevel()<=er.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","The SDK decides to create cache indexes for query:",__PRIVATE_stringifyQuery(i),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,__PRIVATE_queryToTarget(i))):PersistencePromise.resolve())}Xi(e,i){if(__PRIVATE_queryMatchesAllDocuments(i))return PersistencePromise.resolve(null);let s=__PRIVATE_queryToTarget(i);return this.indexManager.getIndexType(e,s).next(o=>0===o?null:(null!==i.limit&&1===o&&(s=__PRIVATE_queryToTarget(i=__PRIVATE_queryWithLimit(i,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{let l=__PRIVATE_documentKeySet(...o);return this.Zi.getDocuments(e,l).next(o=>this.indexManager.getMinOffset(e,s).next(s=>{let h=this.rs(i,o);return this.ss(i,h,l,s.readTime)?this.Xi(e,__PRIVATE_queryWithLimit(i,null,"F")):this.os(e,h,i,s)}))})))}es(e,i,s,o){return __PRIVATE_queryMatchesAllDocuments(i)||o.isEqual(SnapshotVersion.min())?PersistencePromise.resolve(null):this.Zi.getDocuments(e,s).next(l=>{let h=this.rs(i,l);return this.ss(i,h,s,o)?PersistencePromise.resolve(null):(__PRIVATE_getLogLevel()<=er.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),__PRIVATE_stringifyQuery(i)),this.os(e,h,i,function(e,i){let s=e.toTimestamp().seconds,o=e.toTimestamp().nanoseconds+1,l=SnapshotVersion.fromTimestamp(1e9===o?new Timestamp(s+1,0):new Timestamp(s,o));return new IndexOffset(l,DocumentKey.empty(),-1)}(o,0)).next(e=>e))})}rs(e,i){let s=new SortedSet(__PRIVATE_newQueryComparator(e));return i.forEach((i,o)=>{__PRIVATE_queryMatches(e,o)&&(s=s.add(o))}),s}ss(e,i,s,o){if(null===e.limit)return!1;if(s.size!==i.size)return!0;let l="F"===e.limitType?i.last():i.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,i,s){return __PRIVATE_getLogLevel()<=er.in.DEBUG&&__PRIVATE_logDebug("QueryEngine","Using full collection scan to execute query:",__PRIVATE_stringifyQuery(i)),this.Zi.getDocumentsMatchingQuery(e,i,IndexOffset.min(),s)}os(e,i,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(e=>(i.forEach(i=>{e=e.insert(i.key,i)}),e))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_LocalStoreImpl=class __PRIVATE_LocalStoreImpl{constructor(e,i,s,o){this.persistence=e,this._s=i,this.serializer=o,this.us=new SortedMap(__PRIVATE_primitiveComparator),this.cs=new ObjectMap(e=>__PRIVATE_canonifyTarget(e),__PRIVATE_targetEquals),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LocalDocumentsView(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",i=>e.collect(i,this.us))}};async function __PRIVATE_localStoreHandleUserChange(e,i){return await e.persistence.runTransaction("Handle user change","readonly",s=>{let o;return e.mutationQueue.getAllMutationBatches(s).next(l=>(o=l,e.Ps(i),e.mutationQueue.getAllMutationBatches(s))).next(i=>{let l=[],h=[],d=__PRIVATE_documentKeySet();for(let e of o)for(let i of(l.push(e.batchId),e.mutations))d=d.add(i.key);for(let e of i)for(let i of(h.push(e.batchId),e.mutations))d=d.add(i.key);return e.localDocuments.getDocuments(s,d).next(e=>({Ts:e,removedBatchIds:l,addedBatchIds:h}))})})}function __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",i=>e.Gr.getLastRemoteSnapshotVersion(i))}async function __PRIVATE_localStoreReleaseTarget(e,i,s){let o=e.us.get(i);try{s||await e.persistence.runTransaction("Release target",s?"readwrite":"readwrite-primary",i=>e.persistence.referenceDelegate.removeTarget(i,o))}catch(e){if(!__PRIVATE_isIndexedDbTransactionError(e))throw e;__PRIVATE_logDebug("LocalStore",`Failed to update sequence numbers for target ${i}: ${e}`)}e.us=e.us.remove(i),e.cs.delete(o.target)}function __PRIVATE_localStoreExecuteQuery(e,i,s){let o=SnapshotVersion.min(),l=__PRIVATE_documentKeySet();return e.persistence.runTransaction("Execute query","readwrite",h=>(function(e,i,s){let o=e.cs.get(s);return void 0!==o?PersistencePromise.resolve(e.us.get(o)):e.Gr.getTargetData(i,s)})(e,h,__PRIVATE_queryToTarget(i)).next(i=>{if(i)return o=i.lastLimboFreeSnapshotVersion,e.Gr.getMatchingKeysForTargetId(h,i.targetId).next(e=>{l=e})}).next(()=>e._s.getDocumentsMatchingQuery(h,i,s?o:SnapshotVersion.min(),s?l:__PRIVATE_documentKeySet())).next(s=>{var o;let h;return o=i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2)),h=e.ls.get(o)||SnapshotVersion.min(),s.forEach((e,i)=>{i.readTime.compareTo(h)>0&&(h=i.readTime)}),e.ls.set(o,h),{documents:s,ds:l}}))}let __PRIVATE_LocalClientState=class __PRIVATE_LocalClientState{constructor(){this.activeTargetIds=ev}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};let __PRIVATE_MemorySharedClientState=class __PRIVATE_MemorySharedClientState{constructor(){this._o=new __PRIVATE_LocalClientState,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,i,s){}addLocalQueryTarget(e,i=!0){return i&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,i,s){this.ao[e]=i}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new __PRIVATE_LocalClientState,Promise.resolve()}handleUserChange(e,i,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_NoopConnectivityMonitor=class __PRIVATE_NoopConnectivityMonitor{uo(e){}shutdown(){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_BrowserConnectivityMonitor=class __PRIVATE_BrowserConnectivityMonitor{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){for(let e of(__PRIVATE_logDebug("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.To))e(0)}Po(){for(let e of(__PRIVATE_logDebug("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.To))e(1)}static p(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eS=null;function __PRIVATE_generateUniqueDebugId(){return null===eS?eS=268435456+Math.round(2147483648*Math.random()):eS++,"0x"+eS.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_StreamBridge=class __PRIVATE_StreamBridge{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eD="WebChannelConnection";let __PRIVATE_WebChannelConnection=class __PRIVATE_WebChannelConnection extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let i=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+e.host,this.Mo=`projects/${s}/databases/${o}`,this.xo="(default)"===this.databaseId.database?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Oo(e,i,s,o,l){let h=__PRIVATE_generateUniqueDebugId(),d=this.No(e,i.toUriEncodedString());__PRIVATE_logDebug("RestConnection",`Sending RPC '${e}' ${h}:`,d,s);let f={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(f,o,l),this.Bo(e,d,f,s).then(i=>(__PRIVATE_logDebug("RestConnection",`Received RPC '${e}' ${h}: `,i),i),i=>{throw __PRIVATE_logWarn("RestConnection",`RPC '${e}' ${h} failed with error: `,i,"url: ",d,"request:",s),i})}ko(e,i,s,o,l,h){return this.Oo(e,i,s,o,l)}Lo(e,i,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+eh}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((i,s)=>e[s]=i),s&&s.headers.forEach((i,s)=>e[s]=i)}No(e,i){let s=eC[e];return`${this.Fo}/v1/${i}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,i,s,o){let l=__PRIVATE_generateUniqueDebugId();return new Promise((d,g)=>{let w=new h;w.setWithCredentials(!0),w.listenOnce(f.COMPLETE,()=>{try{switch(w.getLastErrorCode()){case _.NO_ERROR:let i=w.getResponseJson();__PRIVATE_logDebug(eD,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(i)),d(i);break;case _.TIMEOUT:__PRIVATE_logDebug(eD,`RPC '${e}' ${l} timed out`),g(new FirestoreError(e_.DEADLINE_EXCEEDED,"Request time out"));break;case _.HTTP_ERROR:let s=w.getStatus();if(__PRIVATE_logDebug(eD,`RPC '${e}' ${l} failed with status:`,s,"response text:",w.getResponseText()),s>0){let e=w.getResponseJson();Array.isArray(e)&&(e=e[0]);let i=null==e?void 0:e.error;if(i&&i.status&&i.message){let e=function(e){let i=e.toLowerCase().replace(/_/g,"-");return Object.values(e_).indexOf(i)>=0?i:e_.UNKNOWN}(i.status);g(new FirestoreError(e,i.message))}else g(new FirestoreError(e_.UNKNOWN,"Server responded with status "+w.getStatus()))}else g(new FirestoreError(e_.UNAVAILABLE,"Connection failed."));break;default:fail()}}finally{__PRIVATE_logDebug(eD,`RPC '${e}' ${l} completed.`)}});let b=JSON.stringify(o);__PRIVATE_logDebug(eD,`RPC '${e}' ${l} sending request:`,o),w.send(i,"POST",b,s,15)})}qo(e,i,s){let o=__PRIVATE_generateUniqueDebugId(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=k(),f=b(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},q=this.longPollingOptions.timeoutSeconds;void 0!==q&&(_.longPollingTimeout=Math.round(1e3*q)),this.useFetchStreams&&(_.useFetchStreams=!0),this.Lo(_.initMessageHeaders,i,s),_.encodeInitMessageHeaders=!0;let j=l.join("");__PRIVATE_logDebug(eD,`Creating RPC '${e}' stream ${o}: ${j}`,_);let $=h.createWebChannel(j,_),ee=!1,et=!1,er=new __PRIVATE_StreamBridge({Eo:i=>{et?__PRIVATE_logDebug(eD,`Not sending because RPC '${e}' stream ${o} is closed:`,i):(ee||(__PRIVATE_logDebug(eD,`Opening RPC '${e}' stream ${o} transport.`),$.open(),ee=!0),__PRIVATE_logDebug(eD,`RPC '${e}' stream ${o} sending:`,i),$.send(i))},Ao:()=>$.close()}),__PRIVATE_unguardedEventListen=(e,i,s)=>{e.listen(i,e=>{try{s(e)}catch(e){setTimeout(()=>{throw e},0)}})};return __PRIVATE_unguardedEventListen($,d.EventType.OPEN,()=>{et||(__PRIVATE_logDebug(eD,`RPC '${e}' stream ${o} transport opened.`),er.So())}),__PRIVATE_unguardedEventListen($,d.EventType.CLOSE,()=>{et||(et=!0,__PRIVATE_logDebug(eD,`RPC '${e}' stream ${o} transport closed`),er.Do())}),__PRIVATE_unguardedEventListen($,d.EventType.ERROR,i=>{et||(et=!0,__PRIVATE_logWarn(eD,`RPC '${e}' stream ${o} transport errored:`,i),er.Do(new FirestoreError(e_.UNAVAILABLE,"The operation could not be completed")))}),__PRIVATE_unguardedEventListen($,d.EventType.MESSAGE,i=>{var s;if(!et){let l=i.data[0];l||fail();let h=(null==l?void 0:l.error)||(null===(s=l[0])||void 0===s?void 0:s.error);if(h){__PRIVATE_logDebug(eD,`RPC '${e}' stream ${o} received error:`,h);let i=h.status,s=function(e){let i=O[e];if(void 0!==i)return __PRIVATE_mapCodeFromRpcCode(i)}(i),l=h.message;void 0===s&&(s=e_.INTERNAL,l="Unknown error status: "+i+" with message "+h.message),et=!0,er.Do(new FirestoreError(s,l)),$.close()}else __PRIVATE_logDebug(eD,`RPC '${e}' stream ${o} received:`,l),er.vo(l)}}),__PRIVATE_unguardedEventListen(f,w.STAT_EVENT,i=>{i.stat===g.PROXY?__PRIVATE_logDebug(eD,`RPC '${e}' stream ${o} detected buffering proxy`):i.stat===g.NOPROXY&&__PRIVATE_logDebug(eD,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{er.bo()},0),er}};function getDocument(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_newSerializer(e){return new JsonProtoSerializer(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_ExponentialBackoff=class __PRIVATE_ExponentialBackoff{constructor(e,i,s=1e3,o=1.5,l=6e4){this.li=e,this.timerId=i,this.Qo=s,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();let i=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,i-s);o>0&&__PRIVATE_logDebug("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${i} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){null!==this.Wo&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){null!==this.Wo&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_PersistentStream=class __PRIVATE_PersistentStream{constructor(e,i,s,o,l,h,d,f){this.li=e,this.Yo=s,this.Zo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new __PRIVATE_ExponentialBackoff(e,i)}i_(){return 1===this.state||5===this.state||this.s_()}s_(){return 2===this.state||3===this.state}start(){this.n_=0,4!==this.state?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&null===this.e_&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,i){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,4!==e?this.r_.reset():i&&i.code===e_.RESOURCE_EXHAUSTED?(__PRIVATE_logError(i.toString()),__PRIVATE_logError("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):i&&i.code===e_.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(i)}P_(){}auth(){this.state=1;let e=this.T_(this.Xo),i=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,s])=>{this.Xo===i&&this.I_(e,s)},i=>{e(()=>{let e=new FirestoreError(e_.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(e)})})}I_(e,i){let s=this.T_(this.Xo);this.stream=this.d_(e,i),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(e=>{s(()=>this.E_(e))}),this.stream.onMessage(e=>{s(()=>1==++this.n_?this.A_(e):this.onNext(e))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return __PRIVATE_logDebug("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return i=>{this.li.enqueueAndForget(()=>this.Xo===e?i():(__PRIVATE_logDebug("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}};let __PRIVATE_PersistentListenStream=class __PRIVATE_PersistentListenStream extends __PRIVATE_PersistentStream{constructor(e,i,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",i,s,o,h),this.serializer=l}d_(e,i){return this.connection.qo("Listen",e,i)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();let i=function(e,i){let s;if("targetChange"in i){var o,l;i.targetChange;let h="NO_CHANGE"===(o=i.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===o?1:"REMOVE"===o?2:"CURRENT"===o?3:"RESET"===o?4:fail(),d=i.targetChange.targetIds||[],f=(l=i.targetChange.resumeToken,e.useProto3Json?(void 0===l||"string"==typeof l||fail(),ByteString.fromBase64String(l||"")):(void 0===l||l instanceof el||l instanceof Uint8Array||fail(),ByteString.fromUint8Array(l||new Uint8Array))),_=i.targetChange.cause,g=_&&function(e){let i=void 0===e.code?e_.UNKNOWN:__PRIVATE_mapCodeFromRpcCode(e.code);return new FirestoreError(i,e.message||"")}(_);s=new __PRIVATE_WatchTargetChange(h,d,f,g||null)}else if("documentChange"in i){i.documentChange;let o=i.documentChange;o.document,o.document.name,o.document.updateTime;let l=fromName(e,o.document.name),h=__PRIVATE_fromVersion(o.document.updateTime),d=o.document.createTime?__PRIVATE_fromVersion(o.document.createTime):SnapshotVersion.min(),f=new ObjectValue({mapValue:{fields:o.document.fields}}),_=MutableDocument.newFoundDocument(l,h,d,f),g=o.targetIds||[],w=o.removedTargetIds||[];s=new __PRIVATE_DocumentWatchChange(g,w,_.key,_)}else if("documentDelete"in i){i.documentDelete;let o=i.documentDelete;o.document;let l=fromName(e,o.document),h=o.readTime?__PRIVATE_fromVersion(o.readTime):SnapshotVersion.min(),d=MutableDocument.newNoDocument(l,h),f=o.removedTargetIds||[];s=new __PRIVATE_DocumentWatchChange([],f,d.key,d)}else if("documentRemove"in i){i.documentRemove;let o=i.documentRemove;o.document;let l=fromName(e,o.document),h=o.removedTargetIds||[];s=new __PRIVATE_DocumentWatchChange([],h,l,null)}else{if(!("filter"in i))return fail();{i.filter;let e=i.filter;e.targetId;let{count:o=0,unchangedNames:l}=e,h=new ExistenceFilter(o,l),d=e.targetId;s=new __PRIVATE_ExistenceFilterChange(d,h)}}return s}(this.serializer,e),s=function(e){if(!("targetChange"in e))return SnapshotVersion.min();let i=e.targetChange;return i.targetIds&&i.targetIds.length?SnapshotVersion.min():i.readTime?__PRIVATE_fromVersion(i.readTime):SnapshotVersion.min()}(e);return this.listener.R_(i,s)}V_(e){let i={};i.database=__PRIVATE_getEncodedDatabaseId(this.serializer),i.addTarget=function(e,i){let s;let o=i.target;if((s=__PRIVATE_targetIsDocumentTarget(o)?{documents:{documents:[__PRIVATE_toQueryPath(e,o.path)]}}:{query:function(e,i){var s,o;let l;let h={structuredQuery:{}},d=i.path;null!==i.collectionGroup?(l=d,h.structuredQuery.from=[{collectionId:i.collectionGroup,allDescendants:!0}]):(l=d.popLast(),h.structuredQuery.from=[{collectionId:d.lastSegment()}]),h.parent=__PRIVATE_toQueryPath(e,l);let f=function(e){if(0!==e.length)return function __PRIVATE_toFilter(e){return e instanceof FieldFilter?function(e){if("=="===e.op){if(__PRIVATE_isNanValue(e.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(e.field),op:"IS_NAN"}};if(__PRIVATE_isNullValue(e.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(__PRIVATE_isNanValue(e.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(e.field),op:"IS_NOT_NAN"}};if(__PRIVATE_isNullValue(e.value))return{unaryFilter:{field:__PRIVATE_toFieldPathReference(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:__PRIVATE_toFieldPathReference(e.field),op:eR[e.op],value:e.value}}}(e):e instanceof CompositeFilter?function(e){let i=e.getFilters().map(e=>__PRIVATE_toFilter(e));return 1===i.length?i[0]:{compositeFilter:{op:ew[e.op],filters:i}}}(e):fail()}(CompositeFilter.create(e,"and"))}(i.filters);f&&(h.structuredQuery.where=f);let _=function(e){if(0!==e.length)return e.map(e=>({field:__PRIVATE_toFieldPathReference(e.field),direction:eA[e.dir]}))}(i.orderBy);_&&(h.structuredQuery.orderBy=_);let g=__PRIVATE_toInt32Proto(e,i.limit);return null!==g&&(h.structuredQuery.limit=g),i.startAt&&(h.structuredQuery.startAt={before:(s=i.startAt).inclusive,values:s.position}),i.endAt&&(h.structuredQuery.endAt={before:!(o=i.endAt).inclusive,values:o.position}),{ct:h,parent:l}}(e,o).ct}).targetId=i.targetId,i.resumeToken.approximateByteSize()>0){s.resumeToken=__PRIVATE_toBytes(e,i.resumeToken);let o=__PRIVATE_toInt32Proto(e,i.expectedCount);null!==o&&(s.expectedCount=o)}else if(i.snapshotVersion.compareTo(SnapshotVersion.min())>0){s.readTime=toTimestamp(e,i.snapshotVersion.toTimestamp());let o=__PRIVATE_toInt32Proto(e,i.expectedCount);null!==o&&(s.expectedCount=o)}return s}(this.serializer,e);let s=function(e,i){let s=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fail()}}(i.purpose);return null==s?null:{"goog-listen-tags":s}}(this.serializer,e);s&&(i.labels=s),this.c_(i)}m_(e){let i={};i.database=__PRIVATE_getEncodedDatabaseId(this.serializer),i.removeTarget=e,this.c_(i)}};let __PRIVATE_PersistentWriteStream=class __PRIVATE_PersistentWriteStream extends __PRIVATE_PersistentStream{constructor(e,i,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,s,o,h),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,i){return this.connection.qo("Write",e,i)}A_(e){return e.streamToken||fail(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&fail(),this.listener.p_()}onNext(e){var i,s;e.streamToken||fail(),this.lastStreamToken=e.streamToken,this.r_.reset();let o=(i=e.writeResults,s=e.commitTime,i&&i.length>0?(void 0!==s||fail(),i.map(e=>{let i;return(i=e.updateTime?__PRIVATE_fromVersion(e.updateTime):__PRIVATE_fromVersion(s)).isEqual(SnapshotVersion.min())&&(i=__PRIVATE_fromVersion(s)),new MutationResult(i,e.transformResults||[])})):[]),l=__PRIVATE_fromVersion(e.commitTime);return this.listener.y_(l,o)}w_(){let e={};e.database=__PRIVATE_getEncodedDatabaseId(this.serializer),this.c_(e)}g_(e){let i={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,i){var s;let o;if(i instanceof __PRIVATE_SetMutation)o={update:__PRIVATE_toMutationDocument(e,i.key,i.value)};else if(i instanceof __PRIVATE_DeleteMutation)o={delete:__PRIVATE_toName(e,i.key)};else if(i instanceof __PRIVATE_PatchMutation)o={update:__PRIVATE_toMutationDocument(e,i.key,i.data),updateMask:function(e){let i=[];return e.fields.forEach(e=>i.push(e.canonicalString())),{fieldPaths:i}}(i.fieldMask)};else{if(!(i instanceof __PRIVATE_VerifyMutation))return fail();o={verify:__PRIVATE_toName(e,i.key)}}return i.fieldTransforms.length>0&&(o.updateTransforms=i.fieldTransforms.map(e=>(function(e,i){let s=i.transform;if(s instanceof __PRIVATE_ServerTimestampTransform)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(s instanceof __PRIVATE_ArrayUnionTransformOperation)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:s.elements}};if(s instanceof __PRIVATE_ArrayRemoveTransformOperation)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:s.elements}};if(s instanceof __PRIVATE_NumericIncrementTransformOperation)return{fieldPath:i.field.canonicalString(),increment:s.Pe};throw fail()})(0,e))),i.precondition.isNone||(o.currentDocument=void 0!==(s=i.precondition).updateTime?{updateTime:toTimestamp(e,s.updateTime.toTimestamp())}:void 0!==s.exists?{exists:s.exists}:fail()),o})(this.serializer,e))};this.c_(i)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_DatastoreImpl=class __PRIVATE_DatastoreImpl extends class{}{constructor(e,i,s,o){super(),this.authCredentials=e,this.appCheckCredentials=i,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new FirestoreError(e_.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,i,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Oo(e,__PRIVATE_toResourcePath(i,s),o,l,h)).catch(e=>{throw"FirebaseError"===e.name?(e.code===e_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new FirestoreError(e_.UNKNOWN,e.toString())})}ko(e,i,s,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,d])=>this.connection.ko(e,__PRIVATE_toResourcePath(i,s),o,h,d,l)).catch(e=>{throw"FirebaseError"===e.name?(e.code===e_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new FirestoreError(e_.UNKNOWN,e.toString())})}terminate(){this.S_=!0,this.connection.terminate()}};let __PRIVATE_OnlineStateTracker=class __PRIVATE_OnlineStateTracker{constructor(e,i){this.asyncQueue=e,this.onlineStateHandler=i,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){0===this.D_&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){"Online"===this.state?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,"Online"===e&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){let i=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(__PRIVATE_logError(i),this.C_=!1):__PRIVATE_logDebug("OnlineStateTracker",i)}N_(){null!==this.v_&&(this.v_.cancel(),this.v_=null)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_RemoteStoreImpl=class __PRIVATE_RemoteStoreImpl{constructor(e,i,s,o,l){this.localStore=e,this.datastore=i,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(e=>{s.enqueueAndForget(async()=>{__PRIVATE_canUseNetwork(this)&&(__PRIVATE_logDebug("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.k_.add(4),await __PRIVATE_disableNetworkInternal(e),e.K_.set("Unknown"),e.k_.delete(4),await __PRIVATE_enableNetworkInternal(e)}(this))})}),this.K_=new __PRIVATE_OnlineStateTracker(s,o)}};async function __PRIVATE_enableNetworkInternal(e){if(__PRIVATE_canUseNetwork(e))for(let i of e.q_)await i(!0)}async function __PRIVATE_disableNetworkInternal(e){for(let i of e.q_)await i(!1)}function __PRIVATE_remoteStoreListen(e,i){e.B_.has(i.targetId)||(e.B_.set(i.targetId,i),__PRIVATE_shouldStartWatchStream(e)?__PRIVATE_startWatchStream(e):__PRIVATE_ensureWatchStream(e).s_()&&__PRIVATE_sendWatchRequest(e,i))}function __PRIVATE_remoteStoreUnlisten(e,i){let s=__PRIVATE_ensureWatchStream(e);e.B_.delete(i),s.s_()&&__PRIVATE_sendUnwatchRequest(e,i),0===e.B_.size&&(s.s_()?s.a_():__PRIVATE_canUseNetwork(e)&&e.K_.set("Unknown"))}function __PRIVATE_sendWatchRequest(e,i){if(e.U_.xe(i.targetId),i.resumeToken.approximateByteSize()>0||i.snapshotVersion.compareTo(SnapshotVersion.min())>0){let s=e.remoteSyncer.getRemoteKeysForTarget(i.targetId).size;i=i.withExpectedCount(s)}__PRIVATE_ensureWatchStream(e).V_(i)}function __PRIVATE_sendUnwatchRequest(e,i){e.U_.xe(i),__PRIVATE_ensureWatchStream(e).m_(i)}function __PRIVATE_startWatchStream(e){e.U_=new __PRIVATE_WatchChangeAggregator({getRemoteKeysForTarget:i=>e.remoteSyncer.getRemoteKeysForTarget(i),ut:i=>e.B_.get(i)||null,nt:()=>e.datastore.serializer.databaseId}),__PRIVATE_ensureWatchStream(e).start(),e.K_.F_()}function __PRIVATE_shouldStartWatchStream(e){return __PRIVATE_canUseNetwork(e)&&!__PRIVATE_ensureWatchStream(e).i_()&&e.B_.size>0}function __PRIVATE_canUseNetwork(e){return 0===e.k_.size}async function __PRIVATE_onWatchStreamConnected(e){e.K_.set("Online")}async function __PRIVATE_onWatchStreamOpen(e){e.B_.forEach((i,s)=>{__PRIVATE_sendWatchRequest(e,i)})}async function __PRIVATE_onWatchStreamClose(e,i){e.U_=void 0,__PRIVATE_shouldStartWatchStream(e)?(e.K_.O_(i),__PRIVATE_startWatchStream(e)):e.K_.set("Unknown")}async function __PRIVATE_onWatchStreamChange(e,i,s){if(e.K_.set("Online"),i instanceof __PRIVATE_WatchTargetChange&&2===i.state&&i.cause)try{await async function(e,i){let s=i.cause;for(let o of i.targetIds)e.B_.has(o)&&(await e.remoteSyncer.rejectListen(o,s),e.B_.delete(o),e.U_.removeTarget(o))}(e,i)}catch(s){__PRIVATE_logDebug("RemoteStore","Failed to remove targets %s: %s ",i.targetIds.join(","),s),await __PRIVATE_disableNetworkUntilRecovery(e,s)}else if(i instanceof __PRIVATE_DocumentWatchChange?e.U_.$e(i):i instanceof __PRIVATE_ExistenceFilterChange?e.U_.Je(i):e.U_.Ge(i),!s.isEqual(SnapshotVersion.min()))try{let i=await __PRIVATE_localStoreGetLastRemoteSnapshotVersion(e.localStore);s.compareTo(i)>=0&&await function(e,i){let s=e.U_.it(i);return s.targetChanges.forEach((s,o)=>{if(s.resumeToken.approximateByteSize()>0){let l=e.B_.get(o);l&&e.B_.set(o,l.withResumeToken(s.resumeToken,i))}}),s.targetMismatches.forEach((i,s)=>{let o=e.B_.get(i);if(!o)return;e.B_.set(i,o.withResumeToken(ByteString.EMPTY_BYTE_STRING,o.snapshotVersion)),__PRIVATE_sendUnwatchRequest(e,i);let l=new TargetData(o.target,i,s,o.sequenceNumber);__PRIVATE_sendWatchRequest(e,l)}),e.remoteSyncer.applyRemoteEvent(s)}(e,s)}catch(i){__PRIVATE_logDebug("RemoteStore","Failed to raise snapshot:",i),await __PRIVATE_disableNetworkUntilRecovery(e,i)}}async function __PRIVATE_disableNetworkUntilRecovery(e,i,s){if(!__PRIVATE_isIndexedDbTransactionError(i))throw i;e.k_.add(1),await __PRIVATE_disableNetworkInternal(e),e.K_.set("Offline"),s||(s=()=>__PRIVATE_localStoreGetLastRemoteSnapshotVersion(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{__PRIVATE_logDebug("RemoteStore","Retrying IndexedDB access"),await s(),e.k_.delete(1),await __PRIVATE_enableNetworkInternal(e)})}function __PRIVATE_executeWithRecovery(e,i){return i().catch(s=>__PRIVATE_disableNetworkUntilRecovery(e,s,i))}async function __PRIVATE_fillWritePipeline(e){let i=__PRIVATE_ensureWriteStream(e),s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;__PRIVATE_canUseNetwork(e)&&e.L_.length<10;)try{let o=await function(e,i){return e.persistence.runTransaction("Get next mutation batch","readonly",s=>(void 0===i&&(i=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(s,i)))}(e.localStore,s);if(null===o){0===e.L_.length&&i.a_();break}s=o.batchId,function(e,i){e.L_.push(i);let s=__PRIVATE_ensureWriteStream(e);s.s_()&&s.f_&&s.g_(i.mutations)}(e,o)}catch(i){await __PRIVATE_disableNetworkUntilRecovery(e,i)}__PRIVATE_shouldStartWriteStream(e)&&__PRIVATE_startWriteStream(e)}function __PRIVATE_shouldStartWriteStream(e){return __PRIVATE_canUseNetwork(e)&&!__PRIVATE_ensureWriteStream(e).i_()&&e.L_.length>0}function __PRIVATE_startWriteStream(e){__PRIVATE_ensureWriteStream(e).start()}async function __PRIVATE_onWriteStreamOpen(e){__PRIVATE_ensureWriteStream(e).w_()}async function __PRIVATE_onWriteHandshakeComplete(e){let i=__PRIVATE_ensureWriteStream(e);for(let s of e.L_)i.g_(s.mutations)}async function __PRIVATE_onMutationResult(e,i,s){let o=e.L_.shift(),l=MutationBatchResult.from(o,i,s);await __PRIVATE_executeWithRecovery(e,()=>e.remoteSyncer.applySuccessfulWrite(l)),await __PRIVATE_fillWritePipeline(e)}async function __PRIVATE_onWriteStreamClose(e,i){i&&__PRIVATE_ensureWriteStream(e).f_&&await async function(e,i){var s;if(function(e){switch(e){default:return fail();case e_.CANCELLED:case e_.UNKNOWN:case e_.DEADLINE_EXCEEDED:case e_.RESOURCE_EXHAUSTED:case e_.INTERNAL:case e_.UNAVAILABLE:case e_.UNAUTHENTICATED:return!1;case e_.INVALID_ARGUMENT:case e_.NOT_FOUND:case e_.ALREADY_EXISTS:case e_.PERMISSION_DENIED:case e_.FAILED_PRECONDITION:case e_.ABORTED:case e_.OUT_OF_RANGE:case e_.UNIMPLEMENTED:case e_.DATA_LOSS:return!0}}(s=i.code)&&s!==e_.ABORTED){let s=e.L_.shift();__PRIVATE_ensureWriteStream(e).__(),await __PRIVATE_executeWithRecovery(e,()=>e.remoteSyncer.rejectFailedWrite(s.batchId,i)),await __PRIVATE_fillWritePipeline(e)}}(e,i),__PRIVATE_shouldStartWriteStream(e)&&__PRIVATE_startWriteStream(e)}async function __PRIVATE_remoteStoreHandleCredentialChange(e,i){e.asyncQueue.verifyOperationInProgress(),__PRIVATE_logDebug("RemoteStore","RemoteStore received new credentials");let s=__PRIVATE_canUseNetwork(e);e.k_.add(3),await __PRIVATE_disableNetworkInternal(e),s&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(i),e.k_.delete(3),await __PRIVATE_enableNetworkInternal(e)}async function __PRIVATE_remoteStoreApplyPrimaryState(e,i){i?(e.k_.delete(2),await __PRIVATE_enableNetworkInternal(e)):i||(e.k_.add(2),await __PRIVATE_disableNetworkInternal(e),e.K_.set("Unknown"))}function __PRIVATE_ensureWatchStream(e){var i,s,o;return e.W_||(e.W_=(i=e.datastore,s=e.asyncQueue,o={Ro:__PRIVATE_onWatchStreamConnected.bind(null,e),mo:__PRIVATE_onWatchStreamOpen.bind(null,e),po:__PRIVATE_onWatchStreamClose.bind(null,e),R_:__PRIVATE_onWatchStreamChange.bind(null,e)},i.b_(),new __PRIVATE_PersistentListenStream(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,o)),e.q_.push(async i=>{i?(e.W_.__(),__PRIVATE_shouldStartWatchStream(e)?__PRIVATE_startWatchStream(e):e.K_.set("Unknown")):(await e.W_.stop(),e.U_=void 0)})),e.W_}function __PRIVATE_ensureWriteStream(e){var i,s,o;return e.G_||(e.G_=(i=e.datastore,s=e.asyncQueue,o={Ro:()=>Promise.resolve(),mo:__PRIVATE_onWriteStreamOpen.bind(null,e),po:__PRIVATE_onWriteStreamClose.bind(null,e),p_:__PRIVATE_onWriteHandshakeComplete.bind(null,e),y_:__PRIVATE_onMutationResult.bind(null,e)},i.b_(),new __PRIVATE_PersistentWriteStream(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,o)),e.q_.push(async i=>{i?(e.G_.__(),await __PRIVATE_fillWritePipeline(e)):(await e.G_.stop(),e.L_.length>0&&(__PRIVATE_logDebug("RemoteStore",`Stopping write stream with ${e.L_.length} pending writes`),e.L_=[]))})),e.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DelayedOperation=class DelayedOperation{constructor(e,i,s,o,l){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new __PRIVATE_Deferred,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,s,o,l){let h=Date.now()+s,d=new DelayedOperation(e,i,h,o,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new FirestoreError(e_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function __PRIVATE_wrapInUserErrorIfRecoverable(e,i){if(__PRIVATE_logError("AsyncQueue",`${i}: ${e}`),__PRIVATE_isIndexedDbTransactionError(e))return new FirestoreError(e_.UNAVAILABLE,`${i}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DocumentSet=class DocumentSet{static emptySet(e){return new DocumentSet(e.comparator)}constructor(e){this.comparator=e?(i,s)=>e(i,s)||DocumentKey.comparator(i.key,s.key):(e,i)=>DocumentKey.comparator(e.key,i.key),this.keyedMap=documentMap(),this.sortedSet=new SortedMap(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let i=this.keyedMap.get(e);return i?this.sortedSet.indexOf(i):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((i,s)=>(e(i),!1))}add(e){let i=this.delete(e.key);return i.copy(i.keyedMap.insert(e.key,e),i.sortedSet.insert(e,null))}delete(e){let i=this.get(e);return i?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(i)):this}isEqual(e){if(!(e instanceof DocumentSet)||this.size!==e.size)return!1;let i=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;i.hasNext();){let e=i.getNext().key,o=s.getNext().key;if(!e.isEqual(o))return!1}return!0}toString(){let e=[];return this.forEach(i=>{e.push(i.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,i){let s=new DocumentSet;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=i,s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_DocumentChangeSet=class __PRIVATE_DocumentChangeSet{constructor(){this.z_=new SortedMap(DocumentKey.comparator)}track(e){let i=e.doc.key,s=this.z_.get(i);s?0!==e.type&&3===s.type?this.z_=this.z_.insert(i,e):3===e.type&&1!==s.type?this.z_=this.z_.insert(i,{type:s.type,doc:e.doc}):2===e.type&&2===s.type?this.z_=this.z_.insert(i,{type:2,doc:e.doc}):2===e.type&&0===s.type?this.z_=this.z_.insert(i,{type:0,doc:e.doc}):1===e.type&&0===s.type?this.z_=this.z_.remove(i):1===e.type&&2===s.type?this.z_=this.z_.insert(i,{type:1,doc:s.doc}):0===e.type&&1===s.type?this.z_=this.z_.insert(i,{type:2,doc:e.doc}):fail():this.z_=this.z_.insert(i,e)}j_(){let e=[];return this.z_.inorderTraversal((i,s)=>{e.push(s)}),e}};let ViewSnapshot=class ViewSnapshot{constructor(e,i,s,o,l,h,d,f,_){this.query=e,this.docs=i,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=_}static fromInitialDocuments(e,i,s,o,l){let h=[];return i.forEach(e=>{h.push({type:0,doc:e})}),new ViewSnapshot(e,i,DocumentSet.emptySet(i),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&__PRIVATE_queryEquals(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let i=this.docChanges,s=e.docChanges;if(i.length!==s.length)return!1;for(let e=0;e<i.length;e++)if(i[e].type!==s[e].type||!i[e].doc.isEqual(s[e].doc))return!1;return!0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_QueryListenersInfo=class __PRIVATE_QueryListenersInfo{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}};let __PRIVATE_EventManagerImpl=class __PRIVATE_EventManagerImpl{constructor(){this.queries=__PRIVATE_newQueriesObjectMap(),this.onlineState="Unknown",this.X_=new Set}terminate(){!function(e,i){let s=e.queries;e.queries=__PRIVATE_newQueriesObjectMap(),s.forEach((e,s)=>{for(let e of s.J_)e.onError(i)})}(this,new FirestoreError(e_.ABORTED,"Firestore shutting down"))}};function __PRIVATE_newQueriesObjectMap(){return new ObjectMap(e=>__PRIVATE_canonifyQuery(e),__PRIVATE_queryEquals)}async function __PRIVATE_eventManagerListen(e,i){let s=3,o=i.query,l=e.queries.get(o);l?!l.Y_()&&i.Z_()&&(s=2):(l=new __PRIVATE_QueryListenersInfo,s=i.Z_()?0:1);try{switch(s){case 0:l.H_=await e.onListen(o,!0);break;case 1:l.H_=await e.onListen(o,!1);break;case 2:await e.onFirstRemoteStoreListen(o)}}catch(s){let e=__PRIVATE_wrapInUserErrorIfRecoverable(s,`Initialization of query '${__PRIVATE_stringifyQuery(i.query)}' failed`);return void i.onError(e)}e.queries.set(o,l),l.J_.push(i),i.ea(e.onlineState),l.H_&&i.ta(l.H_)&&__PRIVATE_raiseSnapshotsInSyncEvent(e)}async function __PRIVATE_eventManagerUnlisten(e,i){let s=i.query,o=3,l=e.queries.get(s);if(l){let e=l.J_.indexOf(i);e>=0&&(l.J_.splice(e,1),0===l.J_.length?o=i.Z_()?0:1:!l.Y_()&&i.Z_()&&(o=2))}switch(o){case 0:return e.queries.delete(s),e.onUnlisten(s,!0);case 1:return e.queries.delete(s),e.onUnlisten(s,!1);case 2:return e.onLastRemoteStoreUnlisten(s);default:return}}function __PRIVATE_eventManagerOnWatchChange(e,i){let s=!1;for(let o of i){let i=o.query,l=e.queries.get(i);if(l){for(let e of l.J_)e.ta(o)&&(s=!0);l.H_=o}}s&&__PRIVATE_raiseSnapshotsInSyncEvent(e)}function __PRIVATE_eventManagerOnWatchError(e,i,s){let o=e.queries.get(i);if(o)for(let e of o.J_)e.onError(s);e.queries.delete(i)}function __PRIVATE_raiseSnapshotsInSyncEvent(e){e.X_.forEach(e=>{e.next()})}($=j||(j={})).na="default",$.Cache="cache";let __PRIVATE_QueryListener=class __PRIVATE_QueryListener{constructor(e,i,s){this.query=e,this.ra=i,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){let i=[];for(let s of e.docChanges)3!==s.type&&i.push(s);e=new ViewSnapshot(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let i=!1;return this.ia?this.oa(e)&&(this.ra.next(e),i=!0):this._a(e,this.onlineState)&&(this.aa(e),i=!0),this.sa=e,i}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let i=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),i=!0),i}_a(e,i){return!(e.fromCache&&this.Z_())||(!this.options.ua||!("Offline"!==i))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===i)}oa(e){if(e.docChanges.length>0)return!0;let i=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!i)&&!0===this.options.includeMetadataChanges}aa(e){e=ViewSnapshot.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==j.Cache}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_AddedLimboDocument=class __PRIVATE_AddedLimboDocument{constructor(e){this.key=e}};let __PRIVATE_RemovedLimboDocument=class __PRIVATE_RemovedLimboDocument{constructor(e){this.key=e}};let __PRIVATE_View=class __PRIVATE_View{constructor(e,i){this.query=e,this.da=i,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=__PRIVATE_documentKeySet(),this.mutatedKeys=__PRIVATE_documentKeySet(),this.Va=__PRIVATE_newQueryComparator(e),this.ma=new DocumentSet(this.Va)}get fa(){return this.da}ga(e,i){let s=i?i.pa:new __PRIVATE_DocumentChangeSet,o=i?i.ma:this.ma,l=i?i.mutatedKeys:this.mutatedKeys,h=o,d=!1,f="F"===this.query.limitType&&o.size===this.query.limit?o.last():null,_="L"===this.query.limitType&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((e,i)=>{let g=o.get(e),w=__PRIVATE_queryMatches(this.query,i)?i:null,b=!!g&&this.mutatedKeys.has(g.key),k=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations),O=!1;g&&w?g.data.isEqual(w.data)?b!==k&&(s.track({type:3,doc:w}),O=!0):this.ya(g,w)||(s.track({type:2,doc:w}),O=!0,(f&&this.Va(w,f)>0||_&&0>this.Va(w,_))&&(d=!0)):!g&&w?(s.track({type:0,doc:w}),O=!0):g&&!w&&(s.track({type:1,doc:g}),O=!0,(f||_)&&(d=!0)),O&&(w?(h=h.add(w),l=k?l.add(e):l.delete(e)):(h=h.delete(e),l=l.delete(e)))}),null!==this.query.limit)for(;h.size>this.query.limit;){let e="F"===this.query.limitType?h.last():h.first();h=h.delete(e.key),l=l.delete(e.key),s.track({type:1,doc:e})}return{ma:h,pa:s,ss:d,mutatedKeys:l}}ya(e,i){return e.hasLocalMutations&&i.hasCommittedMutations&&!i.hasLocalMutations}applyChanges(e,i,s,o){let l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;let h=e.pa.j_();h.sort((e,i)=>(function(e,i){let order=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fail()}};return order(e)-order(i)})(e.type,i.type)||this.Va(e.doc,i.doc)),this.wa(s),o=null!=o&&o;let d=i&&!o?this.Sa():[],f=0===this.Ra.size&&this.current&&!o?1:0,_=f!==this.Aa;return(this.Aa=f,0!==h.length||_)?{snapshot:new ViewSnapshot(this.query,e.ma,l,h,e.mutatedKeys,0===f,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ma:this.ma,pa:new __PRIVATE_DocumentChangeSet,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(e=>this.da=this.da.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.da=this.da.delete(e)),this.current=e.current)}Sa(){if(!this.current)return[];let e=this.Ra;this.Ra=__PRIVATE_documentKeySet(),this.ma.forEach(e=>{this.Da(e.key)&&(this.Ra=this.Ra.add(e.key))});let i=[];return e.forEach(e=>{this.Ra.has(e)||i.push(new __PRIVATE_RemovedLimboDocument(e))}),this.Ra.forEach(s=>{e.has(s)||i.push(new __PRIVATE_AddedLimboDocument(s))}),i}va(e){this.da=e.ds,this.Ra=__PRIVATE_documentKeySet();let i=this.ga(e.documents);return this.applyChanges(i,!0)}Ca(){return ViewSnapshot.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,0===this.Aa,this.hasCachedResults)}};let __PRIVATE_QueryView=class __PRIVATE_QueryView{constructor(e,i,s){this.query=e,this.targetId=i,this.view=s}};let LimboResolution=class LimboResolution{constructor(e){this.key=e,this.Fa=!1}};let __PRIVATE_SyncEngineImpl=class __PRIVATE_SyncEngineImpl{constructor(e,i,s,o,l,h){this.localStore=e,this.remoteStore=i,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new ObjectMap(e=>__PRIVATE_canonifyQuery(e),__PRIVATE_queryEquals),this.Oa=new Map,this.Na=new Set,this.La=new SortedMap(DocumentKey.comparator),this.Ba=new Map,this.ka=new __PRIVATE_ReferenceSet,this.qa={},this.Qa=new Map,this.Ka=__PRIVATE_TargetIdGenerator.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return!0===this.$a}};async function __PRIVATE_syncEngineListen(e,i,s=!0){let o;let l=__PRIVATE_ensureWatchCallbacks(e),h=l.xa.get(i);return h?(l.sharedClientState.addLocalQueryTarget(h.targetId),o=h.view.Ca()):o=await __PRIVATE_allocateTargetAndMaybeListen(l,i,s,!0),o}async function __PRIVATE_triggerRemoteStoreListen(e,i){let s=__PRIVATE_ensureWatchCallbacks(e);await __PRIVATE_allocateTargetAndMaybeListen(s,i,!0,!1)}async function __PRIVATE_allocateTargetAndMaybeListen(e,i,s,o){var l,h;let d;let f=await (l=e.localStore,h=__PRIVATE_queryToTarget(i),l.persistence.runTransaction("Allocate target","readwrite",e=>{let i;return l.Gr.getTargetData(e,h).next(s=>s?(i=s,PersistencePromise.resolve(i)):l.Gr.allocateTargetId(e).next(s=>(i=new TargetData(h,s,"TargetPurposeListen",e.currentSequenceNumber),l.Gr.addTargetData(e,i).next(()=>i))))}).then(e=>{let i=l.us.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(l.us=l.us.insert(e.targetId,e),l.cs.set(h,e.targetId)),e})),_=f.targetId,g=e.sharedClientState.addLocalQueryTarget(_,s);return o&&(d=await __PRIVATE_initializeViewAndComputeSnapshot(e,i,_,"current"===g,f.resumeToken)),e.isPrimaryClient&&s&&__PRIVATE_remoteStoreListen(e.remoteStore,f),d}async function __PRIVATE_initializeViewAndComputeSnapshot(e,i,s,o,l){e.Ua=(i,s,o)=>(async function(e,i,s,o){let l=i.view.ga(s);l.ss&&(l=await __PRIVATE_localStoreExecuteQuery(e.localStore,i.query,!1).then(({documents:e})=>i.view.ga(e,l)));let h=o&&o.targetChanges.get(i.targetId),d=o&&null!=o.targetMismatches.get(i.targetId),f=i.view.applyChanges(l,e.isPrimaryClient,h,d);return __PRIVATE_updateTrackedLimbos(e,i.targetId,f.ba),f.snapshot})(e,i,s,o);let h=await __PRIVATE_localStoreExecuteQuery(e.localStore,i,!0),d=new __PRIVATE_View(i,h.ds),f=d.ga(h.documents),_=TargetChange.createSynthesizedTargetChangeForCurrentChange(s,o&&"Offline"!==e.onlineState,l),g=d.applyChanges(f,e.isPrimaryClient,_);__PRIVATE_updateTrackedLimbos(e,s,g.ba);let w=new __PRIVATE_QueryView(i,s,d);return e.xa.set(i,w),e.Oa.has(s)?e.Oa.get(s).push(i):e.Oa.set(s,[i]),g.snapshot}async function __PRIVATE_syncEngineUnlisten(e,i,s){let o=e.xa.get(i),l=e.Oa.get(o.targetId);if(l.length>1)return e.Oa.set(o.targetId,l.filter(e=>!__PRIVATE_queryEquals(e,i))),void e.xa.delete(i);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(o.targetId),e.sharedClientState.isActiveQueryTarget(o.targetId)||await __PRIVATE_localStoreReleaseTarget(e.localStore,o.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(o.targetId),s&&__PRIVATE_remoteStoreUnlisten(e.remoteStore,o.targetId),__PRIVATE_removeAndCleanupTarget(e,o.targetId)}).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss)):(__PRIVATE_removeAndCleanupTarget(e,o.targetId),await __PRIVATE_localStoreReleaseTarget(e.localStore,o.targetId,!0))}async function __PRIVATE_triggerRemoteStoreUnlisten(e,i){let s=e.xa.get(i),o=e.Oa.get(s.targetId);e.isPrimaryClient&&1===o.length&&(e.sharedClientState.removeLocalQueryTarget(s.targetId),__PRIVATE_remoteStoreUnlisten(e.remoteStore,s.targetId))}async function __PRIVATE_syncEngineWrite(e,i,s){var o;let l=(e.remoteStore.remoteSyncer.applySuccessfulWrite=__PRIVATE_syncEngineApplySuccessfulWrite.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=__PRIVATE_syncEngineRejectFailedWrite.bind(null,e),e);try{let e;let h=await function(e,i){let s,o;let l=Timestamp.now(),h=i.reduce((e,i)=>e.add(i.key),__PRIVATE_documentKeySet());return e.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=ey,_=__PRIVATE_documentKeySet();return e.hs.getEntries(d,h).next(e=>{(f=e).forEach((e,i)=>{i.isValidDocument()||(_=_.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(d,f)).next(o=>{s=o;let h=[];for(let e of i){let i=function(e,i){let s=null;for(let o of e.fieldTransforms){let e=i.data.field(o.field),l=__PRIVATE_computeTransformOperationBaseValue(o.transform,e||null);null!=l&&(null===s&&(s=ObjectValue.empty()),s.set(o.field,l))}return s||null}(e,s.get(e.key).overlayedDocument);null!=i&&h.push(new __PRIVATE_PatchMutation(e.key,i,function __PRIVATE_extractFieldMask(e){let i=[];return forEach(e.fields,(e,s)=>{let o=new FieldPath$1([e]);if(__PRIVATE_isMapValue(s)){let e=__PRIVATE_extractFieldMask(s.mapValue).fields;if(0===e.length)i.push(o);else for(let s of e)i.push(o.child(s))}else i.push(o)}),new FieldMask(i)}(i.value.mapValue),Precondition.exists(!0)))}return e.mutationQueue.addMutationBatch(d,l,h,i)}).next(i=>{o=i;let l=i.applyToLocalDocumentSet(s,_);return e.documentOverlayCache.saveOverlays(d,i.batchId,l)})}).then(()=>({batchId:o.batchId,changes:__PRIVATE_convertOverlayedDocumentMapToDocumentMap(s)}))}(l.localStore,i);l.sharedClientState.addPendingMutation(h.batchId),o=h.batchId,(e=l.qa[l.currentUser.toKey()])||(e=new SortedMap(__PRIVATE_primitiveComparator)),e=e.insert(o,s),l.qa[l.currentUser.toKey()]=e,await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(l,h.changes),await __PRIVATE_fillWritePipeline(l.remoteStore)}catch(i){let e=__PRIVATE_wrapInUserErrorIfRecoverable(i,"Failed to persist write");s.reject(e)}}async function __PRIVATE_syncEngineApplyRemoteEvent(e,i){try{let s=await function(e,i){let s=i.snapshotVersion,o=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{var h;let d,f;let _=e.hs.newChangeBuffer({trackRemovals:!0});o=e.us;let g=[];i.targetChanges.forEach((h,d)=>{var f;let _=o.get(d);if(!_)return;g.push(e.Gr.removeMatchingKeys(l,h.removedDocuments,d).next(()=>e.Gr.addMatchingKeys(l,h.addedDocuments,d)));let w=_.withSequenceNumber(l.currentSequenceNumber);null!==i.targetMismatches.get(d)?w=w.withResumeToken(ByteString.EMPTY_BYTE_STRING,SnapshotVersion.min()).withLastLimboFreeSnapshotVersion(SnapshotVersion.min()):h.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(h.resumeToken,s)),o=o.insert(d,w),f=w,(0===_.resumeToken.approximateByteSize()||f.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&g.push(e.Gr.updateTargetData(l,w))});let w=ey,b=__PRIVATE_documentKeySet();if(i.documentUpdates.forEach(s=>{i.resolvedLimboDocuments.has(s)&&g.push(e.persistence.referenceDelegate.updateLimboDocument(l,s))}),g.push((h=i.documentUpdates,d=__PRIVATE_documentKeySet(),f=__PRIVATE_documentKeySet(),h.forEach(e=>d=d.add(e)),_.getEntries(l,d).next(e=>{let i=ey;return h.forEach((s,o)=>{let l=e.get(s);o.isFoundDocument()!==l.isFoundDocument()&&(f=f.add(s)),o.isNoDocument()&&o.version.isEqual(SnapshotVersion.min())?(_.removeEntry(s,o.readTime),i=i.insert(s,o)):!l.isValidDocument()||o.version.compareTo(l.version)>0||0===o.version.compareTo(l.version)&&l.hasPendingWrites?(_.addEntry(o),i=i.insert(s,o)):__PRIVATE_logDebug("LocalStore","Ignoring outdated watch update for ",s,". Current version:",l.version," Watch version:",o.version)}),{Is:i,Es:f}})).next(e=>{w=e.Is,b=e.Es})),!s.isEqual(SnapshotVersion.min())){let i=e.Gr.getLastRemoteSnapshotVersion(l).next(i=>e.Gr.setTargetsMetadata(l,l.currentSequenceNumber,s));g.push(i)}return PersistencePromise.waitFor(g).next(()=>_.apply(l)).next(()=>e.localDocuments.getLocalViewOfDocuments(l,w,b)).next(()=>w)}).then(i=>(e.us=o,i))}(e.localStore,i);i.targetChanges.forEach((i,s)=>{let o=e.Ba.get(s);o&&(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1||fail(),i.addedDocuments.size>0?o.Fa=!0:i.modifiedDocuments.size>0?o.Fa||fail():i.removedDocuments.size>0&&(o.Fa||fail(),o.Fa=!1))}),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e,s,i)}catch(e){await __PRIVATE_ignoreIfPrimaryLeaseLoss(e)}}function __PRIVATE_syncEngineApplyOnlineStateChange(e,i,s){var o;if(e.isPrimaryClient&&0===s||!e.isPrimaryClient&&1===s){let s;let l=[];e.xa.forEach((e,s)=>{let o=s.view.ea(i);o.snapshot&&l.push(o.snapshot)}),(o=e.eventManager).onlineState=i,s=!1,o.queries.forEach((e,o)=>{for(let e of o.J_)e.ea(i)&&(s=!0)}),s&&__PRIVATE_raiseSnapshotsInSyncEvent(o),l.length&&e.Ma.R_(l),e.onlineState=i,e.isPrimaryClient&&e.sharedClientState.setOnlineState(i)}}async function __PRIVATE_syncEngineRejectListen(e,i,s){e.sharedClientState.updateQueryState(i,"rejected",s);let o=e.Ba.get(i),l=o&&o.key;if(l){let s=new SortedMap(DocumentKey.comparator);s=s.insert(l,MutableDocument.newNoDocument(l,SnapshotVersion.min()));let o=__PRIVATE_documentKeySet().add(l),h=new RemoteEvent(SnapshotVersion.min(),new Map,new SortedMap(__PRIVATE_primitiveComparator),s,o);await __PRIVATE_syncEngineApplyRemoteEvent(e,h),e.La=e.La.remove(l),e.Ba.delete(i),__PRIVATE_pumpEnqueuedLimboResolutions(e)}else await __PRIVATE_localStoreReleaseTarget(e.localStore,i,!1).then(()=>__PRIVATE_removeAndCleanupTarget(e,i,s)).catch(__PRIVATE_ignoreIfPrimaryLeaseLoss)}async function __PRIVATE_syncEngineApplySuccessfulWrite(e,i){var s;let o=i.batch.batchId;try{let l=await (s=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let o=i.batch.keys(),l=s.hs.newChangeBuffer({trackRemovals:!0});return(function(e,i,s,o){let l=s.batch,h=l.keys(),d=PersistencePromise.resolve();return h.forEach(e=>{d=d.next(()=>o.getEntry(i,e)).next(i=>{let h=s.docVersions.get(e);null!==h||fail(),0>i.version.compareTo(h)&&(l.applyToRemoteDocument(i,s),i.isValidDocument()&&(i.setReadTime(s.commitVersion),o.addEntry(i)))})}),d.next(()=>e.mutationQueue.removeMutationBatch(i,l))})(s,e,i,l).next(()=>l.apply(e)).next(()=>s.mutationQueue.performConsistencyCheck(e)).next(()=>s.documentOverlayCache.removeOverlaysForBatchId(e,o,i.batch.batchId)).next(()=>s.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let i=__PRIVATE_documentKeySet();for(let s=0;s<e.mutationResults.length;++s)e.mutationResults[s].transformResults.length>0&&(i=i.add(e.batch.mutations[s].key));return i}(i))).next(()=>s.localDocuments.getDocuments(e,o))});__PRIVATE_processUserCallback(e,o,null),__PRIVATE_triggerPendingWritesCallbacks(e,o),e.sharedClientState.updateMutationState(o,"acknowledged"),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e,l)}catch(e){await __PRIVATE_ignoreIfPrimaryLeaseLoss(e)}}async function __PRIVATE_syncEngineRejectFailedWrite(e,i,s){var o;try{let l=await (o=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let s;return o.mutationQueue.lookupMutationBatch(e,i).next(i=>(null!==i||fail(),s=i.keys(),o.mutationQueue.removeMutationBatch(e,i))).next(()=>o.mutationQueue.performConsistencyCheck(e)).next(()=>o.documentOverlayCache.removeOverlaysForBatchId(e,s,i)).next(()=>o.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,s)).next(()=>o.localDocuments.getDocuments(e,s))});__PRIVATE_processUserCallback(e,i,s),__PRIVATE_triggerPendingWritesCallbacks(e,i),e.sharedClientState.updateMutationState(i,"rejected",s),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e,l)}catch(e){await __PRIVATE_ignoreIfPrimaryLeaseLoss(e)}}function __PRIVATE_triggerPendingWritesCallbacks(e,i){(e.Qa.get(i)||[]).forEach(e=>{e.resolve()}),e.Qa.delete(i)}function __PRIVATE_processUserCallback(e,i,s){let o=e.qa[e.currentUser.toKey()];if(o){let l=o.get(i);l&&(s?l.reject(s):l.resolve(),o=o.remove(i)),e.qa[e.currentUser.toKey()]=o}}function __PRIVATE_removeAndCleanupTarget(e,i,s=null){for(let o of(e.sharedClientState.removeLocalQueryTarget(i),e.Oa.get(i)))e.xa.delete(o),s&&e.Ma.Wa(o,s);e.Oa.delete(i),e.isPrimaryClient&&e.ka.yr(i).forEach(i=>{e.ka.containsKey(i)||__PRIVATE_removeLimboTarget(e,i)})}function __PRIVATE_removeLimboTarget(e,i){e.Na.delete(i.path.canonicalString());let s=e.La.get(i);null!==s&&(__PRIVATE_remoteStoreUnlisten(e.remoteStore,s),e.La=e.La.remove(i),e.Ba.delete(s),__PRIVATE_pumpEnqueuedLimboResolutions(e))}function __PRIVATE_updateTrackedLimbos(e,i,s){for(let o of s)o instanceof __PRIVATE_AddedLimboDocument?(e.ka.addReference(o.key,i),function(e,i){let s=i.key,o=s.path.canonicalString();e.La.get(s)||e.Na.has(o)||(__PRIVATE_logDebug("SyncEngine","New document in limbo: "+s),e.Na.add(o),__PRIVATE_pumpEnqueuedLimboResolutions(e))}(e,o)):o instanceof __PRIVATE_RemovedLimboDocument?(__PRIVATE_logDebug("SyncEngine","Document no longer in limbo: "+o.key),e.ka.removeReference(o.key,i),e.ka.containsKey(o.key)||__PRIVATE_removeLimboTarget(e,o.key)):fail()}function __PRIVATE_pumpEnqueuedLimboResolutions(e){for(;e.Na.size>0&&e.La.size<e.maxConcurrentLimboResolutions;){var i;let s=e.Na.values().next().value;e.Na.delete(s);let o=new DocumentKey(ResourcePath.fromString(s)),l=e.Ka.next();e.Ba.set(l,new LimboResolution(o)),e.La=e.La.insert(o,l),__PRIVATE_remoteStoreListen(e.remoteStore,new TargetData(__PRIVATE_queryToTarget((i=o.path,new __PRIVATE_QueryImpl(i))),l,"TargetPurposeLimboResolution",__PRIVATE_ListenSequence.oe))}}async function __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e,i,s){let o=[],l=[],h=[];e.xa.isEmpty()||(e.xa.forEach((d,f)=>{h.push(e.Ua(f,i,s).then(i=>{var h;if((i||s)&&e.isPrimaryClient){let o=i?!i.fromCache:null===(h=null==s?void 0:s.targetChanges.get(f.targetId))||void 0===h?void 0:h.current;e.sharedClientState.updateQueryState(f.targetId,o?"current":"not-current")}if(i){o.push(i);let e=__PRIVATE_LocalViewChanges.zi(f.targetId,i);l.push(e)}}))}),await Promise.all(h),e.Ma.R_(o),await async function(e,i){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",s=>PersistencePromise.forEach(i,i=>PersistencePromise.forEach(i.Wi,o=>e.persistence.referenceDelegate.addReference(s,i.targetId,o)).next(()=>PersistencePromise.forEach(i.Gi,o=>e.persistence.referenceDelegate.removeReference(s,i.targetId,o)))))}catch(e){if(!__PRIVATE_isIndexedDbTransactionError(e))throw e;__PRIVATE_logDebug("LocalStore","Failed to update sequence numbers: "+e)}for(let s of i){let i=s.targetId;if(!s.fromCache){let s=e.us.get(i),o=s.snapshotVersion,l=s.withLastLimboFreeSnapshotVersion(o);e.us=e.us.insert(i,l)}}}(e.localStore,l))}async function __PRIVATE_syncEngineHandleCredentialChange(e,i){if(!e.currentUser.isEqual(i)){__PRIVATE_logDebug("SyncEngine","User change. New user:",i.toKey());let s=await __PRIVATE_localStoreHandleUserChange(e.localStore,i);e.currentUser=i,e.Qa.forEach(e=>{e.forEach(e=>{e.reject(new FirestoreError(e_.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Qa.clear(),e.sharedClientState.handleUserChange(i,s.removedBatchIds,s.addedBatchIds),await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e,s.Ts)}}function __PRIVATE_syncEngineGetRemoteKeysForTarget(e,i){let s=e.Ba.get(i);if(s&&s.Fa)return __PRIVATE_documentKeySet().add(s.key);{let s=__PRIVATE_documentKeySet(),o=e.Oa.get(i);if(!o)return s;for(let i of o){let o=e.xa.get(i);s=s.unionWith(o.view.fa)}return s}}function __PRIVATE_ensureWatchCallbacks(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=__PRIVATE_syncEngineApplyRemoteEvent.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=__PRIVATE_syncEngineGetRemoteKeysForTarget.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=__PRIVATE_syncEngineRejectListen.bind(null,e),e.Ma.R_=__PRIVATE_eventManagerOnWatchChange.bind(null,e.eventManager),e.Ma.Wa=__PRIVATE_eventManagerOnWatchError.bind(null,e.eventManager),e}let __PRIVATE_MemoryOfflineComponentProvider=class __PRIVATE_MemoryOfflineComponentProvider{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=__PRIVATE_newSerializer(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,i){return null}Ya(e,i){return null}Ha(e){var i,s,o,l;return i=this.persistence,s=new __PRIVATE_QueryEngine,o=e.initialUser,l=this.serializer,new __PRIVATE_LocalStoreImpl(i,s,o,l)}ja(e){return new __PRIVATE_MemoryPersistence(__PRIVATE_MemoryEagerDelegate.ei,this.serializer)}za(e){return new __PRIVATE_MemorySharedClientState}async terminate(){var e,i;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(i=this.indexBackfillerScheduler)||void 0===i||i.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};__PRIVATE_MemoryOfflineComponentProvider.provider={build:()=>new __PRIVATE_MemoryOfflineComponentProvider};let __PRIVATE_LruGcMemoryOfflineComponentProvider=class __PRIVATE_LruGcMemoryOfflineComponentProvider extends __PRIVATE_MemoryOfflineComponentProvider{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,i){this.persistence.referenceDelegate instanceof __PRIVATE_MemoryLruDelegate||fail();let s=this.persistence.referenceDelegate.garbageCollector;return new __PRIVATE_LruScheduler(s,e.asyncQueue,i)}ja(e){let i=void 0!==this.cacheSizeBytes?LruParams.withCacheSize(this.cacheSizeBytes):LruParams.DEFAULT;return new __PRIVATE_MemoryPersistence(e=>__PRIVATE_MemoryLruDelegate.ei(e,i),this.serializer)}};let OnlineComponentProvider=class OnlineComponentProvider{async initialize(e,i){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(i),this.remoteStore=this.createRemoteStore(i),this.eventManager=this.createEventManager(i),this.syncEngine=this.createSyncEngine(i,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>__PRIVATE_syncEngineApplyOnlineStateChange(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=__PRIVATE_syncEngineHandleCredentialChange.bind(null,this.syncEngine),await __PRIVATE_remoteStoreApplyPrimaryState(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new __PRIVATE_EventManagerImpl}createDatastore(e){var i,s,o;let l=__PRIVATE_newSerializer(e.databaseInfo.databaseId),h=(i=e.databaseInfo,new __PRIVATE_WebChannelConnection(i));return s=e.authCredentials,o=e.appCheckCredentials,new __PRIVATE_DatastoreImpl(s,o,h,l)}createRemoteStore(e){var i,s,o,l;return i=this.localStore,s=this.datastore,o=e.asyncQueue,l=__PRIVATE_BrowserConnectivityMonitor.p()?new __PRIVATE_BrowserConnectivityMonitor:new __PRIVATE_NoopConnectivityMonitor,new __PRIVATE_RemoteStoreImpl(i,s,o,e=>__PRIVATE_syncEngineApplyOnlineStateChange(this.syncEngine,e,0),l)}createSyncEngine(e,i){return function(e,i,s,o,l,h,d){let f=new __PRIVATE_SyncEngineImpl(e,i,s,o,l,h);return d&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,i)}async terminate(){var e,i;await async function(e){__PRIVATE_logDebug("RemoteStore","RemoteStore shutting down."),e.k_.add(5),await __PRIVATE_disableNetworkInternal(e),e.Q_.shutdown(),e.K_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(i=this.eventManager)||void 0===i||i.terminate()}};OnlineComponentProvider.provider={build:()=>new OnlineComponentProvider};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_AsyncObserver=class __PRIVATE_AsyncObserver{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):__PRIVATE_logError("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,i){setTimeout(()=>{this.muted||e(i)},0)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FirestoreClient=class FirestoreClient{constructor(e,i,s,o,l){this.authCredentials=e,this.appCheckCredentials=i,this.asyncQueue=s,this.databaseInfo=o,this.user=User.UNAUTHENTICATED,this.clientId=__PRIVATE_AutoId.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async e=>{__PRIVATE_logDebug("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(s,e=>(__PRIVATE_logDebug("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new __PRIVATE_Deferred;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(s){let i=__PRIVATE_wrapInUserErrorIfRecoverable(s,"Failed to shutdown persistence");e.reject(i)}}),e.promise}};async function __PRIVATE_setOfflineComponentProvider(e,i){e.asyncQueue.verifyOperationInProgress(),__PRIVATE_logDebug("FirestoreClient","Initializing OfflineComponentProvider");let s=e.configuration;await i.initialize(s);let o=s.initialUser;e.setCredentialChangeListener(async e=>{o.isEqual(e)||(await __PRIVATE_localStoreHandleUserChange(i.localStore,e),o=e)}),i.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=i}async function __PRIVATE_setOnlineComponentProvider(e,i){e.asyncQueue.verifyOperationInProgress();let s=await __PRIVATE_ensureOfflineComponents(e);__PRIVATE_logDebug("FirestoreClient","Initializing OnlineComponentProvider"),await i.initialize(s,e.configuration),e.setCredentialChangeListener(e=>__PRIVATE_remoteStoreHandleCredentialChange(i.remoteStore,e)),e.setAppCheckTokenChangeListener((e,s)=>__PRIVATE_remoteStoreHandleCredentialChange(i.remoteStore,s)),e._onlineComponents=i}async function __PRIVATE_ensureOfflineComponents(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){__PRIVATE_logDebug("FirestoreClient","Using user provided OfflineComponentProvider");try{await __PRIVATE_setOfflineComponentProvider(e,e._uninitializedComponentsProvider._offline)}catch(i){if(!("FirebaseError"===i.name?i.code===e_.FAILED_PRECONDITION||i.code===e_.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&i instanceof DOMException)||22===i.code||20===i.code||11===i.code))throw i;__PRIVATE_logWarn("Error using user provided cache. Falling back to memory cache: "+i),await __PRIVATE_setOfflineComponentProvider(e,new __PRIVATE_MemoryOfflineComponentProvider)}}else __PRIVATE_logDebug("FirestoreClient","Using default OfflineComponentProvider"),await __PRIVATE_setOfflineComponentProvider(e,new __PRIVATE_LruGcMemoryOfflineComponentProvider(void 0))}return e._offlineComponents}async function __PRIVATE_ensureOnlineComponents(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(__PRIVATE_logDebug("FirestoreClient","Using user provided OnlineComponentProvider"),await __PRIVATE_setOnlineComponentProvider(e,e._uninitializedComponentsProvider._online)):(__PRIVATE_logDebug("FirestoreClient","Using default OnlineComponentProvider"),await __PRIVATE_setOnlineComponentProvider(e,new OnlineComponentProvider))),e._onlineComponents}async function __PRIVATE_getEventManager(e){let i=await __PRIVATE_ensureOnlineComponents(e),s=i.eventManager;return s.onListen=__PRIVATE_syncEngineListen.bind(null,i.syncEngine),s.onUnlisten=__PRIVATE_syncEngineUnlisten.bind(null,i.syncEngine),s.onFirstRemoteStoreListen=__PRIVATE_triggerRemoteStoreListen.bind(null,i.syncEngine),s.onLastRemoteStoreUnlisten=__PRIVATE_triggerRemoteStoreUnlisten.bind(null,i.syncEngine),s}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_cloneLongPollingOptions(e){let i={};return void 0!==e.timeoutSeconds&&(i.timeoutSeconds=e.timeoutSeconds),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ek=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_validateNonEmptyArgument(e,i,s){if(!s)throw new FirestoreError(e_.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${i}.`)}function __PRIVATE_validateDocumentPath(e){if(!DocumentKey.isDocumentKey(e))throw new FirestoreError(e_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function __PRIVATE_validateCollectionPath(e){if(DocumentKey.isDocumentKey(e))throw new FirestoreError(e_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function __PRIVATE_valueDescription(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var i;let s=(i=e).constructor?i.constructor.name:null;return s?`a custom ${s} object`:"an object"}}return"function"==typeof e?"a function":fail()}function __PRIVATE_cast(e,i){if("_delegate"in e&&(e=e._delegate),!(e instanceof i)){if(i.name===e.constructor.name)throw new FirestoreError(e_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let s=__PRIVATE_valueDescription(e);throw new FirestoreError(e_.INVALID_ARGUMENT,`Expected type '${i.name}', but it was: ${s}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FirestoreSettingsImpl=class FirestoreSettingsImpl{constructor(e){var i,s;if(void 0===e.host){if(void 0!==e.ssl)throw new FirestoreError(e_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(i=e.ssl)||void 0===i||i;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new FirestoreError(e_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,i,s,o){if(!0===i&&!0===o)throw new FirestoreError(e_.INVALID_ARGUMENT,`${e} and ${s} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=__PRIVATE_cloneLongPollingOptions(null!==(s=e.experimentalLongPollingOptions)&&void 0!==s?s:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new FirestoreError(e_.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new FirestoreError(e_.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new FirestoreError(e_.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var i,s;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(i=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,i.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}};let Firestore$1=class Firestore$1{constructor(e,i,s,o){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new FirestoreSettingsImpl({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new FirestoreError(e_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new FirestoreError(e_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new FirestoreSettingsImpl(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new __PRIVATE_EmptyAuthCredentialsProvider;switch(e.type){case"firstParty":return new __PRIVATE_FirstPartyAuthCredentialsProvider(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new FirestoreError(e_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let i=ek.get(e);i&&(__PRIVATE_logDebug("ComponentProvider","Removing Datastore"),ek.delete(e),i.terminate())}(this),Promise.resolve()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Query=class Query{constructor(e,i,s){this.converter=i,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Query(this.firestore,e,this._query)}};let DocumentReference=class DocumentReference{constructor(e,i,s){this.converter=i,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new CollectionReference(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new DocumentReference(this.firestore,e,this._key)}};let CollectionReference=class CollectionReference extends Query{constructor(e,i,s){super(e,i,new __PRIVATE_QueryImpl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new DocumentReference(this.firestore,null,new DocumentKey(e))}withConverter(e){return new CollectionReference(this.firestore,e,this._path)}};function collection(e,i,...s){if(e=(0,en.m9)(e),__PRIVATE_validateNonEmptyArgument("collection","path",i),e instanceof Firestore$1){let o=ResourcePath.fromString(i,...s);return __PRIVATE_validateCollectionPath(o),new CollectionReference(e,null,o)}{if(!(e instanceof DocumentReference||e instanceof CollectionReference))throw new FirestoreError(e_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let o=e._path.child(ResourcePath.fromString(i,...s));return __PRIVATE_validateCollectionPath(o),new CollectionReference(e.firestore,null,o)}}function doc(e,i,...s){if(e=(0,en.m9)(e),1==arguments.length&&(i=__PRIVATE_AutoId.newId()),__PRIVATE_validateNonEmptyArgument("doc","path",i),e instanceof Firestore$1){let o=ResourcePath.fromString(i,...s);return __PRIVATE_validateDocumentPath(o),new DocumentReference(e,null,new DocumentKey(o))}{if(!(e instanceof DocumentReference||e instanceof CollectionReference))throw new FirestoreError(e_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let o=e._path.child(ResourcePath.fromString(i,...s));return __PRIVATE_validateDocumentPath(o),new DocumentReference(e.firestore,e instanceof CollectionReference?e.converter:null,new DocumentKey(o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let __PRIVATE_AsyncQueueImpl=class __PRIVATE_AsyncQueueImpl{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new __PRIVATE_ExponentialBackoff(this,"async_queue_retry"),this.fu=()=>{let e=getDocument();e&&__PRIVATE_logDebug("AsyncQueue","Visibility state changed to "+e.visibilityState),this.r_.Jo()},this.gu=e;let i=getDocument();i&&"function"==typeof i.addEventListener&&i.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;let i=getDocument();i&&"function"==typeof i.removeEventListener&&i.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});let i=new __PRIVATE_Deferred;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(0!==this.Iu.length){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!__PRIVATE_isIndexedDbTransactionError(e))throw e;__PRIVATE_logDebug("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){let i=this.gu.then(()=>(this.Ru=!0,e().catch(e=>{let i;this.Au=e,this.Ru=!1;let s=(i=e.message||"",e.stack&&(i=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),i);throw __PRIVATE_logError("INTERNAL UNHANDLED ERROR: ",s),e}).then(e=>(this.Ru=!1,e))));return this.gu=i,i}enqueueAfterDelay(e,i,s){this.pu(),this.mu.indexOf(e)>-1&&(i=0);let o=DelayedOperation.createAndSchedule(this,e,i,s,e=>this.Su(e));return this.du.push(o),o}pu(){this.Au&&fail()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(let i of this.du)if(i.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{for(let i of(this.du.sort((e,i)=>e.targetTimeMs-i.targetTimeMs),this.du))if(i.skipDelay(),"all"!==e&&i.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){let i=this.du.indexOf(e);this.du.splice(i,1)}};let Firestore=class Firestore extends Firestore$1{constructor(e,i,s,o){super(e,i,s,o),this.type="firestore",this._queue=new __PRIVATE_AsyncQueueImpl,this._persistenceKey=(null==o?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new __PRIVATE_AsyncQueueImpl(e),this._firestoreClient=void 0,await e}}};function getFirestore(e,i){let s="object"==typeof e?e:(0,ee.Mq)(),o=(0,ee.qX)(s,"firestore").getImmediate({identifier:"string"==typeof e?e:i||"(default)"});if(!o._initialized){let e=(0,en.P0)("firestore");e&&function(e,i,s,o={}){var l;let h=(e=__PRIVATE_cast(e,Firestore$1))._getSettings(),d=`${i}:${s}`;if("firestore.googleapis.com"!==h.host&&h.host!==d&&__PRIVATE_logWarn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},h),{host:d,ssl:!1})),o.mockUserToken){let i,s;if("string"==typeof o.mockUserToken)i=o.mockUserToken,s=User.MOCK_USER;else{i=(0,en.Sg)(o.mockUserToken,null===(l=e._app)||void 0===l?void 0:l.options.projectId);let h=o.mockUserToken.sub||o.mockUserToken.user_id;if(!h)throw new FirestoreError(e_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");s=new User(h)}e._authCredentials=new __PRIVATE_EmulatorAuthCredentialsProvider(new __PRIVATE_OAuthToken(i,s))}}(o,...e)}return o}function ensureFirestoreConfigured(e){if(e._terminated)throw new FirestoreError(e_.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var i,s,o,l,h,d;let f=e._freezeSettings(),_=(l=e._databaseId,h=(null===(i=e._app)||void 0===i?void 0:i.options.appId)||"",d=e._persistenceKey,new DatabaseInfo(l,h,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,__PRIVATE_cloneLongPollingOptions(f.experimentalLongPollingOptions),f.useFetchStreams));e._componentsProvider||(null===(s=f.localCache)||void 0===s?void 0:s._offlineComponentProvider)&&(null===(o=f.localCache)||void 0===o?void 0:o._onlineComponentProvider)&&(e._componentsProvider={_offline:f.localCache._offlineComponentProvider,_online:f.localCache._onlineComponentProvider}),e._firestoreClient=new FirestoreClient(e._authCredentials,e._appCheckCredentials,e._queue,_,e._componentsProvider&&function(e){let i=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(i),_online:i}}(e._componentsProvider))}(e),e._firestoreClient}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bytes=class Bytes{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bytes(ByteString.fromBase64String(e))}catch(e){throw new FirestoreError(e_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Bytes(ByteString.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FieldPath=class FieldPath{constructor(...e){for(let i=0;i<e.length;++i)if(0===e[i].length)throw new FirestoreError(e_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new FieldPath$1(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FieldValue=class FieldValue{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GeoPoint=class GeoPoint{constructor(e,i){if(!isFinite(e)||e<-90||e>90)throw new FirestoreError(e_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(i)||i<-180||i>180)throw new FirestoreError(e_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+i);this._lat=e,this._long=i}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return __PRIVATE_primitiveComparator(this._lat,e._lat)||__PRIVATE_primitiveComparator(this._long,e._long)}};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let VectorValue=class VectorValue{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,i){if(e.length!==i.length)return!1;for(let s=0;s<e.length;++s)if(e[s]!==i[s])return!1;return!0}(this._values,e._values)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eN=/^__.*__$/;let ParsedSetData=class ParsedSetData{constructor(e,i,s){this.data=e,this.fieldMask=i,this.fieldTransforms=s}toMutation(e,i){return null!==this.fieldMask?new __PRIVATE_PatchMutation(e,this.data,this.fieldMask,i,this.fieldTransforms):new __PRIVATE_SetMutation(e,this.data,i,this.fieldTransforms)}};let ParsedUpdateData=class ParsedUpdateData{constructor(e,i,s){this.data=e,this.fieldMask=i,this.fieldTransforms=s}toMutation(e,i){return new __PRIVATE_PatchMutation(e,this.data,this.fieldMask,i,this.fieldTransforms)}};function __PRIVATE_isWrite(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fail()}}let __PRIVATE_ParseContextImpl=class __PRIVATE_ParseContextImpl{constructor(e,i,s,o,l,h){this.settings=e,this.databaseId=i,this.serializer=s,this.ignoreUndefinedProperties=o,void 0===l&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new __PRIVATE_ParseContextImpl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var i;let s=null===(i=this.path)||void 0===i?void 0:i.child(e),o=this.xu({path:s,Nu:!1});return o.Lu(e),o}Bu(e){var i;let s=null===(i=this.path)||void 0===i?void 0:i.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return __PRIVATE_createError(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return void 0!==this.fieldMask.find(i=>e.isPrefixOf(i))||void 0!==this.fieldTransforms.find(i=>e.isPrefixOf(i.field))}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(0===e.length)throw this.qu("Document fields must not be empty");if(__PRIVATE_isWrite(this.Mu)&&eN.test(e))throw this.qu('Document fields cannot begin and end with "__"')}};let __PRIVATE_UserDataReader=class __PRIVATE_UserDataReader{constructor(e,i,s){this.databaseId=e,this.ignoreUndefinedProperties=i,this.serializer=s||__PRIVATE_newSerializer(e)}$u(e,i,s,o=!1){return new __PRIVATE_ParseContextImpl({Mu:e,methodName:i,Ku:s,path:FieldPath$1.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function __PRIVATE_newUserDataReader(e){let i=e._freezeSettings(),s=__PRIVATE_newSerializer(e._databaseId);return new __PRIVATE_UserDataReader(e._databaseId,!!i.ignoreUndefinedProperties,s)}function __PRIVATE_parseSetData(e,i,s,o,l,h={}){let d,f;let _=e.$u(h.merge||h.mergeFields?2:0,i,s,l);__PRIVATE_validatePlainObject("Data must be an object, but it was:",_,o);let g=__PRIVATE_parseObject(o,_);if(h.merge)d=new FieldMask(_.fieldMask),f=_.fieldTransforms;else if(h.mergeFields){let e=[];for(let o of h.mergeFields){let l=__PRIVATE_fieldPathFromArgument$1(i,o,s);if(!_.contains(l))throw new FirestoreError(e_.INVALID_ARGUMENT,`Field '${l}' is specified in your field mask but missing from your input data.`);__PRIVATE_fieldMaskContains(e,l)||e.push(l)}d=new FieldMask(e),f=_.fieldTransforms.filter(e=>d.covers(e.field))}else d=null,f=_.fieldTransforms;return new ParsedSetData(new ObjectValue(g),d,f)}let __PRIVATE_DeleteFieldValueImpl=class __PRIVATE_DeleteFieldValueImpl extends FieldValue{_toFieldTransform(e){if(2!==e.Mu)throw 1===e.Mu?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof __PRIVATE_DeleteFieldValueImpl}};function __PRIVATE_parseUpdateData(e,i,s,o){let l=e.$u(1,i,s);__PRIVATE_validatePlainObject("Data must be an object, but it was:",l,o);let h=[],d=ObjectValue.empty();forEach(o,(e,o)=>{let f=__PRIVATE_fieldPathFromDotSeparatedString(i,e,s);o=(0,en.m9)(o);let _=l.Bu(f);if(o instanceof __PRIVATE_DeleteFieldValueImpl)h.push(f);else{let e=__PRIVATE_parseData(o,_);null!=e&&(h.push(f),d.set(f,e))}});let f=new FieldMask(h);return new ParsedUpdateData(d,f,l.fieldTransforms)}function __PRIVATE_parseUpdateVarargs(e,i,s,o,l,h){let d=e.$u(1,i,s),f=[__PRIVATE_fieldPathFromArgument$1(i,o,s)],_=[l];if(h.length%2!=0)throw new FirestoreError(e_.INVALID_ARGUMENT,`Function ${i}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<h.length;e+=2)f.push(__PRIVATE_fieldPathFromArgument$1(i,h[e])),_.push(h[e+1]);let g=[],w=ObjectValue.empty();for(let e=f.length-1;e>=0;--e)if(!__PRIVATE_fieldMaskContains(g,f[e])){let i=f[e],s=_[e];s=(0,en.m9)(s);let o=d.Bu(i);if(s instanceof __PRIVATE_DeleteFieldValueImpl)g.push(i);else{let e=__PRIVATE_parseData(s,o);null!=e&&(g.push(i),w.set(i,e))}}let b=new FieldMask(g);return new ParsedUpdateData(w,b,d.fieldTransforms)}function __PRIVATE_parseData(e,i){if(__PRIVATE_looksLikeJsonObject(e=(0,en.m9)(e)))return __PRIVATE_validatePlainObject("Unsupported field value:",i,e),__PRIVATE_parseObject(e,i);if(e instanceof FieldValue)return function(e,i){if(!__PRIVATE_isWrite(i.Mu))throw i.qu(`${e._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${e._methodName}() is not currently supported inside arrays`);let s=e._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,i),null;if(void 0===e&&i.ignoreUndefinedProperties)return null;if(i.path&&i.fieldMask.push(i.path),e instanceof Array){if(i.settings.Nu&&4!==i.Mu)throw i.qu("Nested arrays are not supported");return function(e,i){let s=[],o=0;for(let l of e){let e=__PRIVATE_parseData(l,i.ku(o));null==e&&(e={nullValue:"NULL_VALUE"}),s.push(e),o++}return{arrayValue:{values:s}}}(e,i)}return function(e,i){var s,o,l;if(null===(e=(0,en.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return s=i.serializer,"number"==typeof(l=o=e)&&Number.isInteger(l)&&!__PRIVATE_isNegativeZero(l)&&l<=Number.MAX_SAFE_INTEGER&&l>=Number.MIN_SAFE_INTEGER?__PRIVATE_toInteger(o):__PRIVATE_toDouble(s,o);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let s=Timestamp.fromDate(e);return{timestampValue:toTimestamp(i.serializer,s)}}if(e instanceof Timestamp){let s=new Timestamp(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:toTimestamp(i.serializer,s)}}if(e instanceof GeoPoint)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Bytes)return{bytesValue:__PRIVATE_toBytes(i.serializer,e._byteString)};if(e instanceof DocumentReference){let s=i.databaseId,o=e.firestore._databaseId;if(!o.isEqual(s))throw i.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:__PRIVATE_toResourceName(e.firestore._databaseId||i.databaseId,e._key.path)}}if(e instanceof VectorValue)return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw i.qu("VectorValues must only contain numeric values.");return __PRIVATE_toDouble(i.serializer,e)})}}}}};throw i.qu(`Unsupported field value: ${__PRIVATE_valueDescription(e)}`)}(e,i)}function __PRIVATE_parseObject(e,i){let s={};return isEmpty(e)?i.path&&i.path.length>0&&i.fieldMask.push(i.path):forEach(e,(e,o)=>{let l=__PRIVATE_parseData(o,i.Ou(e));null!=l&&(s[e]=l)}),{mapValue:{fields:s}}}function __PRIVATE_looksLikeJsonObject(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Timestamp||e instanceof GeoPoint||e instanceof Bytes||e instanceof DocumentReference||e instanceof FieldValue||e instanceof VectorValue)}function __PRIVATE_validatePlainObject(e,i,s){if(!__PRIVATE_looksLikeJsonObject(s)||!("object"==typeof s&&null!==s&&(Object.getPrototypeOf(s)===Object.prototype||null===Object.getPrototypeOf(s)))){let o=__PRIVATE_valueDescription(s);throw"an object"===o?i.qu(e+" a custom object"):i.qu(e+" "+o)}}function __PRIVATE_fieldPathFromArgument$1(e,i,s){if((i=(0,en.m9)(i))instanceof FieldPath)return i._internalPath;if("string"==typeof i)return __PRIVATE_fieldPathFromDotSeparatedString(e,i);throw __PRIVATE_createError("Field path arguments must be of type string or ",e,!1,void 0,s)}let eO=RegExp("[~\\*/\\[\\]]");function __PRIVATE_fieldPathFromDotSeparatedString(e,i,s){if(i.search(eO)>=0)throw __PRIVATE_createError(`Invalid field path (${i}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,s);try{return new FieldPath(...i.split("."))._internalPath}catch(o){throw __PRIVATE_createError(`Invalid field path (${i}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,s)}}function __PRIVATE_createError(e,i,s,o,l){let h=o&&!o.isEmpty(),d=void 0!==l,f=`Function ${i}() called with invalid data`;s&&(f+=" (via `toFirestore()`)"),f+=". ";let _="";return(h||d)&&(_+=" (found",h&&(_+=` in field ${o}`),d&&(_+=` in document ${l}`),_+=")"),new FirestoreError(e_.INVALID_ARGUMENT,f+e+_)}function __PRIVATE_fieldMaskContains(e,i){return e.some(e=>e.isEqual(i))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DocumentSnapshot$1=class DocumentSnapshot$1{constructor(e,i,s,o,l){this._firestore=e,this._userDataWriter=i,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new DocumentReference(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new QueryDocumentSnapshot$1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let i=this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get",e));if(null!==i)return this._userDataWriter.convertValue(i)}}};let QueryDocumentSnapshot$1=class QueryDocumentSnapshot$1 extends DocumentSnapshot$1{data(){return super.data()}};function __PRIVATE_fieldPathFromArgument(e,i){return"string"==typeof i?__PRIVATE_fieldPathFromDotSeparatedString(e,i):i instanceof FieldPath?i._internalPath:i._delegate._internalPath}let AppliableConstraint=class AppliableConstraint{};let QueryConstraint=class QueryConstraint extends AppliableConstraint{};function query(e,i,...s){let o=[];for(let l of(i instanceof AppliableConstraint&&o.push(i),function(e){let i=e.filter(e=>e instanceof QueryCompositeFilterConstraint).length,s=e.filter(e=>e instanceof QueryFieldFilterConstraint).length;if(i>1||i>0&&s>0)throw new FirestoreError(e_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(o=o.concat(s)),o))e=l._apply(e);return e}let QueryFieldFilterConstraint=class QueryFieldFilterConstraint extends QueryConstraint{constructor(e,i,s){super(),this._field=e,this._op=i,this._value=s,this.type="where"}static _create(e,i,s){return new QueryFieldFilterConstraint(e,i,s)}_apply(e){let i=this._parse(e);return __PRIVATE_validateNewFieldFilter(e._query,i),new Query(e.firestore,e.converter,__PRIVATE_queryWithAddedFilter(e._query,i))}_parse(e){let i=__PRIVATE_newUserDataReader(e.firestore),s=function(e,i,s,o,l,h,d){let f;if(l.isKeyField()){if("array-contains"===h||"array-contains-any"===h)throw new FirestoreError(e_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if("in"===h||"not-in"===h){__PRIVATE_validateDisjunctiveFilterElements(d,h);let i=[];for(let s of d)i.push(__PRIVATE_parseDocumentIdValue(o,e,s));f={arrayValue:{values:i}}}else f=__PRIVATE_parseDocumentIdValue(o,e,d)}else"in"!==h&&"not-in"!==h&&"array-contains-any"!==h||__PRIVATE_validateDisjunctiveFilterElements(d,h),f=function(e,i,s,o=!1){return __PRIVATE_parseData(s,e.$u(o?4:3,i))}(s,i,d,"in"===h||"not-in"===h);return FieldFilter.create(l,h,f)}(e._query,"where",i,e.firestore._databaseId,this._field,this._op,this._value);return s}};function where(e,i,s){let o=__PRIVATE_fieldPathFromArgument("where",e);return QueryFieldFilterConstraint._create(o,i,s)}let QueryCompositeFilterConstraint=class QueryCompositeFilterConstraint extends AppliableConstraint{constructor(e,i){super(),this.type=e,this._queryConstraints=i}static _create(e,i){return new QueryCompositeFilterConstraint(e,i)}_parse(e){let i=this._queryConstraints.map(i=>i._parse(e)).filter(e=>e.getFilters().length>0);return 1===i.length?i[0]:CompositeFilter.create(i,this._getOperator())}_apply(e){let i=this._parse(e);return 0===i.getFilters().length?e:(function(e,i){let s=e,o=i.getFlattenedFilters();for(let e of o)__PRIVATE_validateNewFieldFilter(s,e),s=__PRIVATE_queryWithAddedFilter(s,e)}(e._query,i),new Query(e.firestore,e.converter,__PRIVATE_queryWithAddedFilter(e._query,i)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}};let QueryOrderByConstraint=class QueryOrderByConstraint extends QueryConstraint{constructor(e,i){super(),this._field=e,this._direction=i,this.type="orderBy"}static _create(e,i){return new QueryOrderByConstraint(e,i)}_apply(e){let i=function(e,i,s){if(null!==e.startAt)throw new FirestoreError(e_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new FirestoreError(e_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new OrderBy(i,s)}(e._query,this._field,this._direction);return new Query(e.firestore,e.converter,function(e,i){let s=e.explicitOrderBy.concat([i]);return new __PRIVATE_QueryImpl(e.path,e.collectionGroup,s,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,i))}};function orderBy(e,i="asc"){let s=__PRIVATE_fieldPathFromArgument("orderBy",e);return QueryOrderByConstraint._create(s,i)}function __PRIVATE_parseDocumentIdValue(e,i,s){if("string"==typeof(s=(0,en.m9)(s))){if(""===s)throw new FirestoreError(e_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!__PRIVATE_isCollectionGroupQuery(i)&&-1!==s.indexOf("/"))throw new FirestoreError(e_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${s}' contains a '/' character.`);let o=i.path.child(ResourcePath.fromString(s));if(!DocumentKey.isDocumentKey(o))throw new FirestoreError(e_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${o}' is not because it has an odd number of segments (${o.length}).`);return __PRIVATE_refValue(e,new DocumentKey(o))}if(s instanceof DocumentReference)return __PRIVATE_refValue(e,s._key);throw new FirestoreError(e_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${__PRIVATE_valueDescription(s)}.`)}function __PRIVATE_validateDisjunctiveFilterElements(e,i){if(!Array.isArray(e)||0===e.length)throw new FirestoreError(e_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${i.toString()}' filters.`)}function __PRIVATE_validateNewFieldFilter(e,i){let s=function(e,i){for(let s of e)for(let e of s.getFlattenedFilters())if(i.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(i.op));if(null!==s)throw s===i.op?new FirestoreError(e_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${i.op.toString()}' filter.`):new FirestoreError(e_.INVALID_ARGUMENT,`Invalid query. You cannot use '${i.op.toString()}' filters with '${s.toString()}' filters.`)}let AbstractUserDataWriter=class AbstractUserDataWriter{convertValue(e,i="none"){switch(__PRIVATE_typeOrder(e)){case 0:return null;case 1:return e.booleanValue;case 2:return __PRIVATE_normalizeNumber(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,i);case 5:return e.stringValue;case 6:return this.convertBytes(__PRIVATE_normalizeByteString(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,i);case 11:return this.convertObject(e.mapValue,i);case 10:return this.convertVectorValue(e.mapValue);default:throw fail()}}convertObject(e,i){return this.convertObjectMap(e.fields,i)}convertObjectMap(e,i="none"){let s={};return forEach(e,(e,o)=>{s[e]=this.convertValue(o,i)}),s}convertVectorValue(e){var i,s,o;let l=null===(o=null===(s=null===(i=e.fields)||void 0===i?void 0:i.value.arrayValue)||void 0===s?void 0:s.values)||void 0===o?void 0:o.map(e=>__PRIVATE_normalizeNumber(e.doubleValue));return new VectorValue(l)}convertGeoPoint(e){return new GeoPoint(__PRIVATE_normalizeNumber(e.latitude),__PRIVATE_normalizeNumber(e.longitude))}convertArray(e,i){return(e.values||[]).map(e=>this.convertValue(e,i))}convertServerTimestamp(e,i){switch(i){case"previous":let s=__PRIVATE_getPreviousValue(e);return null==s?null:this.convertValue(s,i);case"estimate":return this.convertTimestamp(__PRIVATE_getLocalWriteTime(e));default:return null}}convertTimestamp(e){let i=__PRIVATE_normalizeTimestamp(e);return new Timestamp(i.seconds,i.nanos)}convertDocumentKey(e,i){let s=ResourcePath.fromString(e);__PRIVATE_isValidResourceName(s)||fail();let o=new DatabaseId(s.get(1),s.get(3)),l=new DocumentKey(s.popFirst(5));return o.isEqual(i)||__PRIVATE_logError(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${i.projectId}/${i.database}) instead.`),l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __PRIVATE_applyFirestoreDataConverter(e,i,s){return e?s&&(s.merge||s.mergeFields)?e.toFirestore(i,s):e.toFirestore(i):i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SnapshotMetadata=class SnapshotMetadata{constructor(e,i){this.hasPendingWrites=e,this.fromCache=i}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}};let DocumentSnapshot=class DocumentSnapshot extends DocumentSnapshot$1{constructor(e,i,s,o,l,h){super(e,i,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let i=new QueryDocumentSnapshot(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(i,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,i={}){if(this._document){let s=this._document.data.field(__PRIVATE_fieldPathFromArgument("DocumentSnapshot.get",e));if(null!==s)return this._userDataWriter.convertValue(s,i.serverTimestamps)}}};let QueryDocumentSnapshot=class QueryDocumentSnapshot extends DocumentSnapshot{data(e={}){return super.data(e)}};let QuerySnapshot=class QuerySnapshot{constructor(e,i,s,o){this._firestore=e,this._userDataWriter=i,this._snapshot=o,this.metadata=new SnapshotMetadata(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){let e=[];return this.forEach(i=>e.push(i)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,i){this._snapshot.docs.forEach(s=>{e.call(i,new QueryDocumentSnapshot(this._firestore,this._userDataWriter,s.key,s,new SnapshotMetadata(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let i=!!e.includeMetadataChanges;if(i&&this._snapshot.excludesMetadataChanges)throw new FirestoreError(e_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===i||(this._cachedChanges=function(e,i){if(e._snapshot.oldDocs.isEmpty()){let i=0;return e._snapshot.docChanges.map(s=>{let o=new QueryDocumentSnapshot(e._firestore,e._userDataWriter,s.doc.key,s.doc,new SnapshotMetadata(e._snapshot.mutatedKeys.has(s.doc.key),e._snapshot.fromCache),e.query.converter);return s.doc,{type:"added",doc:o,oldIndex:-1,newIndex:i++}})}{let s=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>i||3!==e.type).map(i=>{let o=new QueryDocumentSnapshot(e._firestore,e._userDataWriter,i.doc.key,i.doc,new SnapshotMetadata(e._snapshot.mutatedKeys.has(i.doc.key),e._snapshot.fromCache),e.query.converter),l=-1,h=-1;return 0!==i.type&&(l=s.indexOf(i.doc.key),s=s.delete(i.doc.key)),1!==i.type&&(h=(s=s.add(i.doc)).indexOf(i.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fail()}}(i.type),doc:o,oldIndex:l,newIndex:h}})}}(this,i),this._cachedChangesIncludeMetadataChanges=i),this._cachedChanges}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getDoc(e){e=__PRIVATE_cast(e,DocumentReference);let i=__PRIVATE_cast(e.firestore,Firestore);return(function(e,i,s={}){let o=new __PRIVATE_Deferred;return e.asyncQueue.enqueueAndForget(async()=>(function(e,i,s,o,l){var h;let d=new __PRIVATE_AsyncObserver({next:h=>{d.eu(),i.enqueueAndForget(()=>__PRIVATE_eventManagerUnlisten(e,f));let _=h.docs.has(s);!_&&h.fromCache?l.reject(new FirestoreError(e_.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&h.fromCache&&o&&"server"===o.source?l.reject(new FirestoreError(e_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:e=>l.reject(e)}),f=new __PRIVATE_QueryListener((h=s.path,new __PRIVATE_QueryImpl(h)),d,{includeMetadataChanges:!0,ua:!0});return __PRIVATE_eventManagerListen(e,f)})(await __PRIVATE_getEventManager(e),e.asyncQueue,i,s,o)),o.promise})(ensureFirestoreConfigured(i),e._key).then(s=>(function(e,i,s){let o=s.docs.get(i._key),l=new __PRIVATE_ExpUserDataWriter(e);return new DocumentSnapshot(e,l,i._key,o,new SnapshotMetadata(s.hasPendingWrites,s.fromCache),i.converter)})(i,e,s))}let __PRIVATE_ExpUserDataWriter=class __PRIVATE_ExpUserDataWriter extends AbstractUserDataWriter{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bytes(e)}convertReference(e){let i=this.convertDocumentKey(e,this.firestore._databaseId);return new DocumentReference(this.firestore,null,i)}};function getDocs(e){e=__PRIVATE_cast(e,Query);let i=__PRIVATE_cast(e.firestore,Firestore),s=ensureFirestoreConfigured(i),o=new __PRIVATE_ExpUserDataWriter(i);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new FirestoreError(e_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,i,s={}){let o=new __PRIVATE_Deferred;return e.asyncQueue.enqueueAndForget(async()=>(function(e,i,s,o,l){let h=new __PRIVATE_AsyncObserver({next:s=>{h.eu(),i.enqueueAndForget(()=>__PRIVATE_eventManagerUnlisten(e,d)),s.fromCache&&"server"===o.source?l.reject(new FirestoreError(e_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(s)},error:e=>l.reject(e)}),d=new __PRIVATE_QueryListener(s,h,{includeMetadataChanges:!0,ua:!0});return __PRIVATE_eventManagerListen(e,d)})(await __PRIVATE_getEventManager(e),e.asyncQueue,i,s,o)),o.promise})(s,e._query).then(s=>new QuerySnapshot(i,o,e,s)))}function setDoc(e,i,s){e=__PRIVATE_cast(e,DocumentReference);let o=__PRIVATE_cast(e.firestore,Firestore),l=__PRIVATE_applyFirestoreDataConverter(e.converter,i,s);return executeWrite(o,[__PRIVATE_parseSetData(__PRIVATE_newUserDataReader(o),"setDoc",e._key,l,null!==e.converter,s).toMutation(e._key,Precondition.none())])}function updateDoc(e,i,s,...o){e=__PRIVATE_cast(e,DocumentReference);let l=__PRIVATE_cast(e.firestore,Firestore),h=__PRIVATE_newUserDataReader(l);return executeWrite(l,[("string"==typeof(i=(0,en.m9)(i))||i instanceof FieldPath?__PRIVATE_parseUpdateVarargs(h,"updateDoc",e._key,i,s,o):__PRIVATE_parseUpdateData(h,"updateDoc",e._key,i)).toMutation(e._key,Precondition.exists(!0))])}function addDoc(e,i){let s=__PRIVATE_cast(e.firestore,Firestore),o=doc(e),l=__PRIVATE_applyFirestoreDataConverter(e.converter,i);return executeWrite(s,[__PRIVATE_parseSetData(__PRIVATE_newUserDataReader(e.firestore),"addDoc",o._key,l,null!==e.converter,{}).toMutation(o._key,Precondition.exists(!1))]).then(()=>o)}function executeWrite(e,i){return function(e,i){let s=new __PRIVATE_Deferred;return e.asyncQueue.enqueueAndForget(async()=>__PRIVATE_syncEngineWrite(await __PRIVATE_ensureOnlineComponents(e).then(e=>e.syncEngine),i,s)),s.promise}(ensureFirestoreConfigured(e),i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let WriteBatch=class WriteBatch{constructor(e,i){this._firestore=e,this._commitHandler=i,this._mutations=[],this._committed=!1,this._dataReader=__PRIVATE_newUserDataReader(e)}set(e,i,s){this._verifyNotCommitted();let o=__PRIVATE_validateReference(e,this._firestore),l=__PRIVATE_applyFirestoreDataConverter(o.converter,i,s),h=__PRIVATE_parseSetData(this._dataReader,"WriteBatch.set",o._key,l,null!==o.converter,s);return this._mutations.push(h.toMutation(o._key,Precondition.none())),this}update(e,i,s,...o){let l;this._verifyNotCommitted();let h=__PRIVATE_validateReference(e,this._firestore);return l="string"==typeof(i=(0,en.m9)(i))||i instanceof FieldPath?__PRIVATE_parseUpdateVarargs(this._dataReader,"WriteBatch.update",h._key,i,s,o):__PRIVATE_parseUpdateData(this._dataReader,"WriteBatch.update",h._key,i),this._mutations.push(l.toMutation(h._key,Precondition.exists(!0))),this}delete(e){this._verifyNotCommitted();let i=__PRIVATE_validateReference(e,this._firestore);return this._mutations=this._mutations.concat(new __PRIVATE_DeleteMutation(i._key,Precondition.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new FirestoreError(e_.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function __PRIVATE_validateReference(e,i){if((e=(0,en.m9)(e)).firestore!==i)throw new FirestoreError(e_.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function writeBatch(e){return ensureFirestoreConfigured(e=__PRIVATE_cast(e,Firestore)),new WriteBatch(e,i=>executeWrite(e,i))}new WeakMap,function(e=!0){eh=ee.Jn,(0,ee.Xd)(new et.wA("firestore",(i,{instanceIdentifier:s,options:o})=>{let l=i.getProvider("app").getImmediate(),h=new Firestore(new __PRIVATE_FirebaseAuthCredentialsProvider(i.getProvider("auth-internal")),new __PRIVATE_FirebaseAppCheckTokenProvider(i.getProvider("app-check-internal")),function(e,i){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new FirestoreError(e_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new DatabaseId(e.options.projectId,i)}(l,s),l);return o=Object.assign({useFetchStreams:e},o),h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),(0,ee.KN)(eu,"4.7.5",void 0),(0,ee.KN)(eu,"4.7.5","esm2017")}()}},function(e){var __webpack_exec__=function(i){return e(e.s=i)};e.O(0,[774,179],function(){return __webpack_exec__(6321),__webpack_exec__(6250)}),_N_E=e.O()}]);