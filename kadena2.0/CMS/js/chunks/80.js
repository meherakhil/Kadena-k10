webpackJsonp([80],{366:function(module,exports,__webpack_require__){try{(function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.cutWords=function(text,number){var array=text.split(" "),filteredArray=array.filter(function(word,i){return i<number-1}),string=filteredArray.join(" ");return array.length>number?string+"...":string},exports.bla=1}).call(this)}finally{}}});