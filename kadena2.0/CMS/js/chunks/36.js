webpackJsonp([36],{366:function(module,exports,__webpack_require__){try{(function(){"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var Close=function Close(closeContainer){_classCallCheck(this,Close);var animationLength=closeContainer.dataset.animationLength;Array.from(closeContainer.querySelectorAll(".js-close-this-trigger")).forEach(function(toggler){toggler.addEventListener("click",function(){closeContainer.classList.add("isAnimated"),setTimeout(function(){closeContainer.classList.add("isHidden")},animationLength)})})};exports.default=Close}).call(this)}finally{}}});