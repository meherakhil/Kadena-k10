webpackJsonp([43],{391:function(module,exports,__webpack_require__){try{(function(){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var Redirection=function Redirection(link){_classCallCheck(this,Redirection);var _link$dataset=link.dataset,url=_link$dataset.url,blank=_link$dataset.blank;link.addEventListener("click",function(event){event.target.classList.contains("js-redirection-ignore")||("true"===blank?window.open(url,"_blank"):document.location=url)})};exports.default=Redirection}).call(this)}finally{}}});