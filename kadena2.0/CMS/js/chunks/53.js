webpackJsonp([53],{395:function(module,exports,__webpack_require__){try{(function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.x=exports.getSearch=void 0;var _urlQuery=__webpack_require__(839),_urlQuery2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_urlQuery);exports.getSearch=function(){var search=window.location.search;return search?(0,_urlQuery2.default)(search):{}},exports.x=1}).call(this)}finally{}},839:function(module,exports){module.exports=function(search){var queryString="string"==typeof search?search:"undefined"!=typeof location?location.search:null;if(!queryString)throw new TypeError("search argument missing");queryString=queryString.trim().replace(/^(\?)/,""),queryString=queryString.split("&");var query={};return queryString.forEach(function(q){var segment=q.split("=");segment[0]&&(query[segment[0]]=!(segment.length>1)||segment[1])}),query}}});