webpackJsonp([51,82],{396:function(module,exports,__webpack_require__){try{(function(){"use strict";function separate(str,symbol){if(str.length<4)return str;var array=Array.from(str),formattedArray=[];return array.reverse().forEach(function(item,index){index%3||!index||formattedArray.push(symbol),formattedArray.push(item)}),formattedArray.reverse().join("")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=separate}).call(this)}finally{}},419:function(module,exports,__webpack_require__){try{(function(){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _numbers=__webpack_require__(396),_numbers2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_numbers),MoneyFormat=function MoneyFormat(container){_classCallCheck(this,MoneyFormat);var str=container.innerHTML,separatedBy=str.split("."),strBeforeDot=separatedBy[0],strAfterDot=separatedBy[1],value=(0,_numbers2.default)(strBeforeDot,",");strAfterDot&&(value+="."+strAfterDot),container.innerHTML=value};exports.default=MoneyFormat}).call(this)}finally{}}});