webpackJsonp([45,95],{342:function(t,e,r){try{(function(){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=config,r=t.localization,n=r.login,o=r.checkout,i=r.spotfire,s=r.userSettings,u=r.searchPage,a=r.search,f=r.orderDetail,c=r.recentOrders;e.LOGIN=n,e.CHECKOUT=o,e.SPOTFIRE=i,e.USER_SETTINGS=s,e.ORDER_DETAIL=f,e.SEARCH_PAGE=u,e.SEARCH=a,e.RECENT_ORDERS=c}).call(this)}finally{}},384:function(t,e,r){try{(function(){"use strict";function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}Object.defineProperty(e,"__esModule",{value:!0}),e.getRows=e.getHeadings=void 0;var n=r(783),o=function(t){return t&&t.__esModule?t:{default:t}}(n),i=r(37),s=r(342);e.getHeadings=function(){return function(t){t({type:i.GET_RECENT_ORDERS_HEADINGS_FETCH}),(0,o.default)({method:"get",url:s.RECENT_ORDERS.getHeaders}).then(function(e){var r=e.data,n=r.payload,o=r.success,s=r.errorMessage;o?t({type:i.GET_RECENT_ORDERS_HEADINGS_SUCCESS,payload:{headings:n.headings,pageInfo:n.pageInfo,noOrdersMessage:n.noOrdersMessage}}):(t({type:i.GET_RECENT_ORDERS_HEADINGS_FAILURE}),alert(s))}).catch(function(e){t({type:i.GET_RECENT_ORDERS_HEADINGS_FAILURE}),alert(e)})}},e.getRows=function(e){return function(r){r({type:i.GET_RECENT_ORDERS_ROWS_FETCH}),r({type:i.APP_LOADING_START}),(0,o.default)({method:"get",url:s.RECENT_ORDERS.getPageItems+"/"+e}).then(function(n){var o=n.data,s=o.payload,u=o.success,a=o.errorMessage;u?(r({type:i.GET_RECENT_ORDERS_ROWS_SUCCESS,payload:{rows:t({},e-1,s.rows)}}),r({type:i.APP_LOADING_FINISH})):(r({type:i.GET_RECENT_ORDERS_ROWS_FAILURE}),alert(a),r({type:i.APP_LOADING_FINISH}))}).catch(function(t){r({type:i.GET_RECENT_ORDERS_ROWS_FAILURE}),alert(t),r({type:i.APP_LOADING_FINISH})})}}}).call(this)}finally{}},667:function(t,e,r){"use strict";(function(e){function n(t){return"[object Array]"===b.call(t)}function o(t){return void 0!==e&&e.isBuffer&&e.isBuffer(t)}function i(t){return"[object ArrayBuffer]"===b.call(t)}function s(t){return"undefined"!=typeof FormData&&t instanceof FormData}function u(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function a(t){return"string"==typeof t}function f(t){return"number"==typeof t}function c(t){return void 0===t}function h(t){return null!==t&&"object"==typeof t}function p(t){return"[object Date]"===b.call(t)}function l(t){return"[object File]"===b.call(t)}function d(t){return"[object Blob]"===b.call(t)}function g(t){return"[object Function]"===b.call(t)}function y(t){return h(t)&&g(t.pipe)}function w(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function E(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function m(t,e){if(null!==t&&void 0!==t)if("object"==typeof t||n(t)||(t=[t]),n(t))for(var r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function R(){function t(t,r){"object"==typeof e[r]&&"object"==typeof t?e[r]=R(e[r],t):e[r]=t}for(var e={},r=0,n=arguments.length;r<n;r++)m(arguments[r],t);return e}function A(t,e,r){return m(e,function(e,n){t[n]=r&&"function"==typeof e?_(e,r):e}),t}var _=r(778),b=Object.prototype.toString;t.exports={isArray:n,isArrayBuffer:i,isBuffer:o,isFormData:s,isArrayBufferView:u,isString:a,isNumber:f,isObject:h,isUndefined:c,isDate:p,isFile:l,isBlob:d,isFunction:g,isStream:y,isURLSearchParams:w,isStandardBrowserEnv:v,forEach:m,merge:R,extend:A,trim:E}}).call(e,r(780).Buffer)},773:function(t,e,r){"use strict";(function(e){function n(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=r(667),i=r(798),s={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=r(774):void 0!==e&&(t=r(774)),t}(),transformRequest:[function(t,e){return i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(n(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(n(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){u.headers[t]={}}),o.forEach(["post","put","patch"],function(t){u.headers[t]=o.merge(s)}),t.exports=u}).call(e,r(63))},774:function(t,e,r){"use strict";var n=r(667),o=r(790),i=r(793),s=r(799),u=r(797),a=r(777),f="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(792);t.exports=function(t){return new Promise(function(e,c){var h=t.data,p=t.headers;n.isFormData(h)&&delete p["Content-Type"];var l=new XMLHttpRequest,d="onreadystatechange",g=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in l||u(t.url)||(l=new window.XDomainRequest,d="onload",g=!0,l.onprogress=function(){},l.ontimeout=function(){}),t.auth){var y=t.auth.username||"",w=t.auth.password||"";p.Authorization="Basic "+f(y+":"+w)}if(l.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),l.timeout=t.timeout,l[d]=function(){if(l&&(4===l.readyState||g)&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in l?s(l.getAllResponseHeaders()):null,n=t.responseType&&"text"!==t.responseType?l.response:l.responseText,i={data:n,status:1223===l.status?204:l.status,statusText:1223===l.status?"No Content":l.statusText,headers:r,config:t,request:l};o(e,c,i),l=null}},l.onerror=function(){c(a("Network Error",t)),l=null},l.ontimeout=function(){c(a("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED")),l=null},n.isStandardBrowserEnv()){var E=r(795),v=(t.withCredentials||u(t.url))&&t.xsrfCookieName?E.read(t.xsrfCookieName):void 0;v&&(p[t.xsrfHeaderName]=v)}if("setRequestHeader"in l&&n.forEach(p,function(t,e){void 0===h&&"content-type"===e.toLowerCase()?delete p[e]:l.setRequestHeader(e,t)}),t.withCredentials&&(l.withCredentials=!0),t.responseType)try{l.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&l.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){l&&(l.abort(),c(t),l=null)}),void 0===h&&(h=null),l.send(h)})}},775:function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},776:function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},777:function(t,e,r){"use strict";var n=r(789);t.exports=function(t,e,r,o){var i=new Error(t);return n(i,e,r,o)}},778:function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},779:function(t,e,r){"use strict";function n(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[e-2]?2:"="===t[e-1]?1:0}function o(t){return 3*t.length/4-n(t)}function i(t){var e,r,o,i,s,u,a=t.length;s=n(t),u=new h(3*a/4-s),o=s>0?a-4:a;var f=0;for(e=0,r=0;e<o;e+=4,r+=3)i=c[t.charCodeAt(e)]<<18|c[t.charCodeAt(e+1)]<<12|c[t.charCodeAt(e+2)]<<6|c[t.charCodeAt(e+3)],u[f++]=i>>16&255,u[f++]=i>>8&255,u[f++]=255&i;return 2===s?(i=c[t.charCodeAt(e)]<<2|c[t.charCodeAt(e+1)]>>4,u[f++]=255&i):1===s&&(i=c[t.charCodeAt(e)]<<10|c[t.charCodeAt(e+1)]<<4|c[t.charCodeAt(e+2)]>>2,u[f++]=i>>8&255,u[f++]=255&i),u}function s(t){return f[t>>18&63]+f[t>>12&63]+f[t>>6&63]+f[63&t]}function u(t,e,r){for(var n,o=[],i=e;i<r;i+=3)n=(t[i]<<16)+(t[i+1]<<8)+t[i+2],o.push(s(n));return o.join("")}function a(t){for(var e,r=t.length,n=r%3,o="",i=[],s=0,a=r-n;s<a;s+=16383)i.push(u(t,s,s+16383>a?a:s+16383));return 1===n?(e=t[r-1],o+=f[e>>2],o+=f[e<<4&63],o+="=="):2===n&&(e=(t[r-2]<<8)+t[r-1],o+=f[e>>10],o+=f[e>>4&63],o+=f[e<<2&63],o+="="),i.push(o),i.join("")}e.byteLength=o,e.toByteArray=i,e.fromByteArray=a;for(var f=[],c=[],h="undefined"!=typeof Uint8Array?Uint8Array:Array,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,d=p.length;l<d;++l)f[l]=p[l],c[p.charCodeAt(l)]=l;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63},780:function(t,e,r){"use strict";(function(t){function n(){return i.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,e){if(n()<e)throw new RangeError("Invalid typed array length");return i.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=i.prototype):(null===t&&(t=new i(e)),t.length=e),t}function i(t,e,r){if(!(i.TYPED_ARRAY_SUPPORT||this instanceof i))return new i(t,e,r);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return f(this,t)}return s(this,t,e,r)}function s(t,e,r,n){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?p(t,e,r,n):"string"==typeof e?c(t,e,r):l(t,e)}function u(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function a(t,e,r,n){return u(e),e<=0?o(t,e):void 0!==r?"string"==typeof n?o(t,e).fill(r,n):o(t,e).fill(r):o(t,e)}function f(t,e){if(u(e),t=o(t,e<0?0:0|d(e)),!i.TYPED_ARRAY_SUPPORT)for(var r=0;r<e;++r)t[r]=0;return t}function c(t,e,r){if("string"==typeof r&&""!==r||(r="utf8"),!i.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding');var n=0|y(e,r);t=o(t,n);var s=t.write(e,r);return s!==n&&(t=t.slice(0,s)),t}function h(t,e){var r=e.length<0?0:0|d(e.length);t=o(t,r);for(var n=0;n<r;n+=1)t[n]=255&e[n];return t}function p(t,e,r,n){if(e.byteLength,r<0||e.byteLength<r)throw new RangeError("'offset' is out of bounds");if(e.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds");return e=void 0===r&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,r):new Uint8Array(e,r,n),i.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=i.prototype):t=h(t,e),t}function l(t,e){if(i.isBuffer(e)){var r=0|d(e.length);return t=o(t,r),0===t.length?t:(e.copy(t,0,0,r),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||W(e.length)?o(t,0):h(t,e);if("Buffer"===e.type&&Z(e.data))return h(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function d(t){if(t>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|t}function g(t){return+t!=t&&(t=0),i.alloc(+t)}function y(t,e){if(i.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":case void 0:return q(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return V(t).length;default:if(n)return q(t).length;e=(""+e).toLowerCase(),n=!0}}function w(t,e,r){var n=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if(r>>>=0,e>>>=0,r<=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return I(this,e,r);case"utf8":case"utf-8":return B(this,e,r);case"ascii":return U(this,e,r);case"latin1":case"binary":return O(this,e,r);case"base64":return P(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function E(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function v(t,e,r,n,o){if(0===t.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),r=+r,isNaN(r)&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return-1;r=t.length-1}else if(r<0){if(!o)return-1;r=0}if("string"==typeof e&&(e=i.from(e,n)),i.isBuffer(e))return 0===e.length?-1:m(t,e,r,n,o);if("number"==typeof e)return e&=255,i.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):m(t,[e],r,n,o);throw new TypeError("val must be string, number or Buffer")}function m(t,e,r,n,o){function i(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}var s=1,u=t.length,a=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return-1;s=2,u/=2,a/=2,r/=2}var f;if(o){var c=-1;for(f=r;f<u;f++)if(i(t,f)===i(e,-1===c?0:f-c)){if(-1===c&&(c=f),f-c+1===a)return c*s}else-1!==c&&(f-=f-c),c=-1}else for(r+a>u&&(r=u-a),f=r;f>=0;f--){for(var h=!0,p=0;p<a;p++)if(i(t,f+p)!==i(e,p)){h=!1;break}if(h)return f}return-1}function R(t,e,r,n){r=Number(r)||0;var o=t.length-r;n?(n=Number(n))>o&&(n=o):n=o;var i=e.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var s=0;s<n;++s){var u=parseInt(e.substr(2*s,2),16);if(isNaN(u))return s;t[r+s]=u}return s}function A(t,e,r,n){return J(q(e,t.length-r),t,r,n)}function _(t,e,r,n){return J(z(e),t,r,n)}function b(t,e,r,n){return _(t,e,r,n)}function S(t,e,r,n){return J(V(e),t,r,n)}function T(t,e,r,n){return J(X(e,t.length-r),t,r,n)}function P(t,e,r){return 0===e&&r===t.length?K.fromByteArray(t):K.fromByteArray(t.slice(e,r))}function B(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i=t[o],s=null,u=i>239?4:i>223?3:i>191?2:1;if(o+u<=r){var a,f,c,h;switch(u){case 1:i<128&&(s=i);break;case 2:a=t[o+1],128==(192&a)&&(h=(31&i)<<6|63&a)>127&&(s=h);break;case 3:a=t[o+1],f=t[o+2],128==(192&a)&&128==(192&f)&&(h=(15&i)<<12|(63&a)<<6|63&f)>2047&&(h<55296||h>57343)&&(s=h);break;case 4:a=t[o+1],f=t[o+2],c=t[o+3],128==(192&a)&&128==(192&f)&&128==(192&c)&&(h=(15&i)<<18|(63&a)<<12|(63&f)<<6|63&c)>65535&&h<1114112&&(s=h)}}null===s?(s=65533,u=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),o+=u}return C(n)}function C(t){var e=t.length;if(e<=Q)return String.fromCharCode.apply(String,t);for(var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=Q));return r}function U(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}function O(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}function I(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=G(t[i]);return o}function x(t,e,r){for(var n=t.slice(e,r),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function D(t,e,r){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function L(t,e,r,n,o,s){if(!i.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<s)throw new RangeError('"value" argument is out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}function N(t,e,r,n){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-r,2);o<i;++o)t[r+o]=(e&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function Y(t,e,r,n){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-r,4);o<i;++o)t[r+o]=e>>>8*(n?o:3-o)&255}function M(t,e,r,n,o,i){if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function j(t,e,r,n,o){return o||M(t,e,r,4,3.4028234663852886e38,-3.4028234663852886e38),$.write(t,e,r,n,23,4),r+4}function k(t,e,r,n,o){return o||M(t,e,r,8,1.7976931348623157e308,-1.7976931348623157e308),$.write(t,e,r,n,52,8),r+8}function F(t){if(t=H(t).replace(tt,""),t.length<2)return"";for(;t.length%4!=0;)t+="=";return t}function H(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function G(t){return t<16?"0"+t.toString(16):t.toString(16)}function q(t,e){e=e||1/0;for(var r,n=t.length,o=null,i=[],s=0;s<n;++s){if((r=t.charCodeAt(s))>55295&&r<57344){if(!o){if(r>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===n){(e-=3)>-1&&i.push(239,191,189);continue}o=r;continue}if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}r=65536+(o-55296<<10|r-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function z(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}function X(t,e){for(var r,n,o,i=[],s=0;s<t.length&&!((e-=2)<0);++s)r=t.charCodeAt(s),n=r>>8,o=r%256,i.push(o),i.push(n);return i}function V(t){return K.toByteArray(F(t))}function J(t,e,r,n){for(var o=0;o<n&&!(o+r>=e.length||o>=t.length);++o)e[o+r]=t[o];return o}function W(t){return t!==t}var K=r(779),$=r(781),Z=r(782);e.Buffer=i,e.SlowBuffer=g,e.INSPECT_MAX_BYTES=50,i.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=n(),i.poolSize=8192,i._augment=function(t){return t.__proto__=i.prototype,t},i.from=function(t,e,r){return s(null,t,e,r)},i.TYPED_ARRAY_SUPPORT&&(i.prototype.__proto__=Uint8Array.prototype,i.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&i[Symbol.species]===i&&Object.defineProperty(i,Symbol.species,{value:null,configurable:!0})),i.alloc=function(t,e,r){return a(null,t,e,r)},i.allocUnsafe=function(t){return f(null,t)},i.allocUnsafeSlow=function(t){return f(null,t)},i.isBuffer=function(t){return!(null==t||!t._isBuffer)},i.compare=function(t,e){if(!i.isBuffer(t)||!i.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var r=t.length,n=e.length,o=0,s=Math.min(r,n);o<s;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},i.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.concat=function(t,e){if(!Z(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return i.alloc(0);var r;if(void 0===e)for(e=0,r=0;r<t.length;++r)e+=t[r].length;var n=i.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var s=t[r];if(!i.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,o),o+=s.length}return n},i.byteLength=y,i.prototype._isBuffer=!0,i.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)E(this,e,e+1);return this},i.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)E(this,e,e+3),E(this,e+1,e+2);return this},i.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)E(this,e,e+7),E(this,e+1,e+6),E(this,e+2,e+5),E(this,e+3,e+4);return this},i.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?B(this,0,t):w.apply(this,arguments)},i.prototype.equals=function(t){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===i.compare(this,t)},i.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},i.prototype.compare=function(t,e,r,n,o){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return-1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,o>>>=0,this===t)return 0;for(var s=o-n,u=r-e,a=Math.min(s,u),f=this.slice(n,o),c=t.slice(e,r),h=0;h<a;++h)if(f[h]!==c[h]){s=f[h],u=c[h];break}return s<u?-1:u<s?1:0},i.prototype.includes=function(t,e,r){return-1!==this.indexOf(t,e,r)},i.prototype.indexOf=function(t,e,r){return v(this,t,e,r,!0)},i.prototype.lastIndexOf=function(t,e,r){return v(this,t,e,r,!1)},i.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(r)?(r|=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(r<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return R(this,t,e,r);case"utf8":case"utf-8":return A(this,t,e,r);case"ascii":return _(this,t,e,r);case"latin1":case"binary":return b(this,t,e,r);case"base64":return S(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,t,e,r);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Q=4096;i.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n;if(i.TYPED_ARRAY_SUPPORT)n=this.subarray(t,e),n.__proto__=i.prototype;else{var o=e-t;n=new i(o,void 0);for(var s=0;s<o;++s)n[s]=this[s+t]}return n},i.prototype.readUIntLE=function(t,e,r){t|=0,e|=0,r||D(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},i.prototype.readUIntBE=function(t,e,r){t|=0,e|=0,r||D(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},i.prototype.readUInt8=function(t,e){return e||D(t,1,this.length),this[t]},i.prototype.readUInt16LE=function(t,e){return e||D(t,2,this.length),this[t]|this[t+1]<<8},i.prototype.readUInt16BE=function(t,e){return e||D(t,2,this.length),this[t]<<8|this[t+1]},i.prototype.readUInt32LE=function(t,e){return e||D(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},i.prototype.readUInt32BE=function(t,e){return e||D(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},i.prototype.readIntLE=function(t,e,r){t|=0,e|=0,r||D(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*e)),n},i.prototype.readIntBE=function(t,e,r){t|=0,e|=0,r||D(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},i.prototype.readInt8=function(t,e){return e||D(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},i.prototype.readInt16LE=function(t,e){e||D(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},i.prototype.readInt16BE=function(t,e){e||D(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},i.prototype.readInt32LE=function(t,e){return e||D(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},i.prototype.readInt32BE=function(t,e){return e||D(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},i.prototype.readFloatLE=function(t,e){return e||D(t,4,this.length),$.read(this,t,!0,23,4)},i.prototype.readFloatBE=function(t,e){return e||D(t,4,this.length),$.read(this,t,!1,23,4)},i.prototype.readDoubleLE=function(t,e){return e||D(t,8,this.length),$.read(this,t,!0,52,8)},i.prototype.readDoubleBE=function(t,e){return e||D(t,8,this.length),$.read(this,t,!1,52,8)},i.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){L(this,t,e,r,Math.pow(2,8*r)-1,0)}var o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},i.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e|=0,r|=0,!n){L(this,t,e,r,Math.pow(2,8*r)-1,0)}var o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},i.prototype.writeUInt8=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,1,255,0),i.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},i.prototype.writeUInt16LE=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):N(this,t,e,!0),e+2},i.prototype.writeUInt16BE=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):N(this,t,e,!1),e+2},i.prototype.writeUInt32LE=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):Y(this,t,e,!0),e+4},i.prototype.writeUInt32BE=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):Y(this,t,e,!1),e+4},i.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);L(this,t,e,r,o-1,-o)}var i=0,s=1,u=0;for(this[e]=255&t;++i<r&&(s*=256);)t<0&&0===u&&0!==this[e+i-1]&&(u=1),this[e+i]=(t/s>>0)-u&255;return e+r},i.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e|=0,!n){var o=Math.pow(2,8*r-1);L(this,t,e,r,o-1,-o)}var i=r-1,s=1,u=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===u&&0!==this[e+i+1]&&(u=1),this[e+i]=(t/s>>0)-u&255;return e+r},i.prototype.writeInt8=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,1,127,-128),i.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},i.prototype.writeInt16LE=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):N(this,t,e,!0),e+2},i.prototype.writeInt16BE=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):N(this,t,e,!1),e+2},i.prototype.writeInt32LE=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,4,2147483647,-2147483648),i.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):Y(this,t,e,!0),e+4},i.prototype.writeInt32BE=function(t,e,r){return t=+t,e|=0,r||L(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):Y(this,t,e,!1),e+4},i.prototype.writeFloatLE=function(t,e,r){return j(this,t,e,!0,r)},i.prototype.writeFloatBE=function(t,e,r){return j(this,t,e,!1,r)},i.prototype.writeDoubleLE=function(t,e,r){return k(this,t,e,!0,r)},i.prototype.writeDoubleBE=function(t,e,r){return k(this,t,e,!1,r)},i.prototype.copy=function(t,e,r,n){if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o,s=n-r;if(this===t&&r<e&&e<n)for(o=s-1;o>=0;--o)t[o+e]=this[o+r];else if(s<1e3||!i.TYPED_ARRAY_SUPPORT)for(o=0;o<s;++o)t[o+e]=this[o+r];else Uint8Array.prototype.set.call(t,this.subarray(r,r+s),e);return s},i.prototype.fill=function(t,e,r,n){if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!i.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<r)throw new RangeError("Out of range index");if(r<=e)return this;e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0);var s;if("number"==typeof t)for(s=e;s<r;++s)this[s]=t;else{var u=i.isBuffer(t)?t:q(new i(t,n).toString()),a=u.length;for(s=0;s<r-e;++s)this[s+e]=u[s%a]}return this};var tt=/[^+\/0-9A-Za-z-_]/g}).call(e,r(49))},781:function(t,e){e.read=function(t,e,r,n,o){var i,s,u=8*o-n-1,a=(1<<u)-1,f=a>>1,c=-7,h=r?o-1:0,p=r?-1:1,l=t[e+h];for(h+=p,i=l&(1<<-c)-1,l>>=-c,c+=u;c>0;i=256*i+t[e+h],h+=p,c-=8);for(s=i&(1<<-c)-1,i>>=-c,c+=n;c>0;s=256*s+t[e+h],h+=p,c-=8);if(0===i)i=1-f;else{if(i===a)return s?NaN:1/0*(l?-1:1);s+=Math.pow(2,n),i-=f}return(l?-1:1)*s*Math.pow(2,i-n)},e.write=function(t,e,r,n,o,i){var s,u,a,f=8*i-o-1,c=(1<<f)-1,h=c>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,l=n?0:i-1,d=n?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(a=Math.pow(2,-s))<1&&(s--,a*=2),e+=s+h>=1?p/a:p*Math.pow(2,1-h),e*a>=2&&(s++,a/=2),s+h>=c?(u=0,s=c):s+h>=1?(u=(e*a-1)*Math.pow(2,o),s+=h):(u=e*Math.pow(2,h-1)*Math.pow(2,o),s=0));o>=8;t[r+l]=255&u,l+=d,u/=256,o-=8);for(s=s<<o|u,f+=o;f>0;t[r+l]=255&s,l+=d,s/=256,f-=8);t[r+l-d]|=128*g}},782:function(t,e){var r={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==r.call(t)}},783:function(t,e,r){t.exports=r(784)},784:function(t,e,r){"use strict";function n(t){var e=new s(t),r=i(s.prototype.request,e);return o.extend(r,s.prototype,e),o.extend(r,e),r}var o=r(667),i=r(778),s=r(786),u=r(773),a=n(u);a.Axios=s,a.create=function(t){return n(o.merge(u,t))},a.Cancel=r(775),a.CancelToken=r(785),a.isCancel=r(776),a.all=function(t){return Promise.all(t)},a.spread=r(800),t.exports=a,t.exports.default=a},785:function(t,e,r){"use strict";function n(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var r=this;t(function(t){r.reason||(r.reason=new o(t),e(r.reason))})}var o=r(775);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var t;return{token:new n(function(e){t=e}),cancel:t}},t.exports=n},786:function(t,e,r){"use strict";function n(t){this.defaults=t,this.interceptors={request:new s,response:new s}}var o=r(773),i=r(667),s=r(787),u=r(788),a=r(796),f=r(794);n.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.baseURL&&!a(t.url)&&(t.url=f(t.baseURL,t.url));var e=[u,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)r=r.then(e.shift(),e.shift());return r},i.forEach(["delete","get","head","options"],function(t){n.prototype[t]=function(e,r){return this.request(i.merge(r||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){n.prototype[t]=function(e,r,n){return this.request(i.merge(n||{},{method:t,url:e,data:r}))}}),t.exports=n},787:function(t,e,r){"use strict";function n(){this.handlers=[]}var o=r(667);n.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},n.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},n.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=n},788:function(t,e,r){"use strict";function n(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=r(667),i=r(791),s=r(776),u=r(773);t.exports=function(t){return n(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||u.adapter)(t).then(function(e){return n(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(n(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},789:function(t,e,r){"use strict";t.exports=function(t,e,r,n){return t.config=e,r&&(t.code=r),t.response=n,t}},790:function(t,e,r){"use strict";var n=r(777);t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(n("Request failed with status code "+r.status,r.config,null,r)):t(r)}},791:function(t,e,r){"use strict";var n=r(667);t.exports=function(t,e,r){return n.forEach(r,function(r){t=r(t,e)}),t}},792:function(t,e,r){"use strict";function n(){this.message="String contains an invalid character"}function o(t){for(var e,r,o=String(t),s="",u=0,a=i;o.charAt(0|u)||(a="=",u%1);s+=a.charAt(63&e>>8-u%1*8)){if((r=o.charCodeAt(u+=.75))>255)throw new n;e=e<<8|r}return s}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",t.exports=o},793:function(t,e,r){"use strict";function n(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(667);t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(o.isURLSearchParams(e))i=e.toString();else{var s=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),s.push(n(e)+"="+n(t))}))}),i=s.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},794:function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},795:function(t,e,r){"use strict";var n=r(667);t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,r,o,i,s){var u=[];u.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&u.push("expires="+new Date(r).toGMTString()),n.isString(o)&&u.push("path="+o),n.isString(i)&&u.push("domain="+i),!0===s&&u.push("secure"),document.cookie=u.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},796:function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},797:function(t,e,r){"use strict";var n=r(667);t.exports=n.isStandardBrowserEnv()?function(){function t(t){var e=t;return r&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(r){var o=n.isString(r)?t(r):r;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},798:function(t,e,r){"use strict";var n=r(667);t.exports=function(t,e){n.forEach(t,function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])})}},799:function(t,e,r){"use strict";var n=r(667);t.exports=function(t){var e,r,o,i={};return t?(n.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=n.trim(t.substr(0,o)).toLowerCase(),r=n.trim(t.substr(o+1)),e&&(i[e]=i[e]?i[e]+", "+r:r)}),i):i}},800:function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}}});