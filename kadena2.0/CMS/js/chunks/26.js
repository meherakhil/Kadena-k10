webpackJsonp([26],{352:function(module,exports,__webpack_require__){eval('/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\\\Projects\\\\SourceTree\\\\kadena-k10-core\\\\frontend\\\\node_modules\\\\react-hot-api\\\\modules\\\\index.js"), RootInstanceProvider = require("c:\\\\Projects\\\\SourceTree\\\\kadena-k10-core\\\\frontend\\\\node_modules\\\\react-hot-loader\\\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nvar AddTr = function () {\n  function AddTr(container) {\n    var _this = this;\n\n    _classCallCheck(this, AddTr);\n\n    this.lastRow = container;\n    this.count = 1;\n    this.tbody = this.lastRow.parentNode;\n    this.firstRowClass = \'js-first-tr\';\n    this.firstRow = this.tbody.querySelector(\'.\' + this.firstRowClass);\n\n    var togglers = Array.from(this.lastRow.getElementsByClassName(\'js-add-tr-toggler\'));\n\n    togglers.forEach(function (toggler) {\n      toggler.addEventListener(\'click\', function () {\n        _this.count += 1;\n        var clonnedRow = _this.firstRow.cloneNode(true);\n        var newNode = _this.getNewRow(clonnedRow);\n        _this.tbody.insertBefore(newNode, _this.lastRow);\n      });\n    });\n  }\n\n  _createClass(AddTr, [{\n    key: \'getNewRow\',\n    value: function getNewRow(oldRow) {\n      var _this2 = this;\n\n      oldRow.classList.remove(this.firstRowClass);\n      var elements = Array.from(oldRow.querySelectorAll(\'[name]\'));\n      elements.forEach(function (element) {\n        var name = element.dataset.name + \'-\' + _this2.count;\n        element.name = name;\n      });\n      return oldRow;\n    }\n  }]);\n\n  return AddTr;\n}();\n\nexports.default = AddTr;\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\\\Projects\\\\SourceTree\\\\kadena-k10-core\\\\frontend\\\\node_modules\\\\react-hot-loader\\\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdGF0aWMvYWRkLXRyL2luZGV4LmpzP2I3N2UiXSwic291cmNlc0NvbnRlbnQiOlsiLyogUkVBQ1QgSE9UIExPQURFUiAqLyBpZiAobW9kdWxlLmhvdCkgeyAoZnVuY3Rpb24gKCkgeyB2YXIgUmVhY3RIb3RBUEkgPSByZXF1aXJlKFwiYzpcXFxcUHJvamVjdHNcXFxcU291cmNlVHJlZVxcXFxrYWRlbmEtazEwLWNvcmVcXFxcZnJvbnRlbmRcXFxcbm9kZV9tb2R1bGVzXFxcXHJlYWN0LWhvdC1hcGlcXFxcbW9kdWxlc1xcXFxpbmRleC5qc1wiKSwgUm9vdEluc3RhbmNlUHJvdmlkZXIgPSByZXF1aXJlKFwiYzpcXFxcUHJvamVjdHNcXFxcU291cmNlVHJlZVxcXFxrYWRlbmEtazEwLWNvcmVcXFxcZnJvbnRlbmRcXFxcbm9kZV9tb2R1bGVzXFxcXHJlYWN0LWhvdC1sb2FkZXJcXFxcUm9vdEluc3RhbmNlUHJvdmlkZXIuanNcIiksIFJlYWN0TW91bnQgPSByZXF1aXJlKFwicmVhY3QtZG9tL2xpYi9SZWFjdE1vdW50XCIpLCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTsgbW9kdWxlLm1ha2VIb3QgPSBtb2R1bGUuaG90LmRhdGEgPyBtb2R1bGUuaG90LmRhdGEubWFrZUhvdCA6IFJlYWN0SG90QVBJKGZ1bmN0aW9uICgpIHsgcmV0dXJuIFJvb3RJbnN0YW5jZVByb3ZpZGVyLmdldFJvb3RJbnN0YW5jZXMoUmVhY3RNb3VudCk7IH0sIFJlYWN0KTsgfSkoKTsgfSB0cnkgeyAoZnVuY3Rpb24gKCkge1xuXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBBZGRUciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQWRkVHIoY29udGFpbmVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBZGRUcik7XG5cbiAgICB0aGlzLmxhc3RSb3cgPSBjb250YWluZXI7XG4gICAgdGhpcy5jb3VudCA9IDE7XG4gICAgdGhpcy50Ym9keSA9IHRoaXMubGFzdFJvdy5wYXJlbnROb2RlO1xuICAgIHRoaXMuZmlyc3RSb3dDbGFzcyA9ICdqcy1maXJzdC10cic7XG4gICAgdGhpcy5maXJzdFJvdyA9IHRoaXMudGJvZHkucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLmZpcnN0Um93Q2xhc3MpO1xuXG4gICAgdmFyIHRvZ2dsZXJzID0gQXJyYXkuZnJvbSh0aGlzLmxhc3RSb3cuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnanMtYWRkLXRyLXRvZ2dsZXInKSk7XG5cbiAgICB0b2dnbGVycy5mb3JFYWNoKGZ1bmN0aW9uICh0b2dnbGVyKSB7XG4gICAgICB0b2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5jb3VudCArPSAxO1xuICAgICAgICB2YXIgY2xvbm5lZFJvdyA9IF90aGlzLmZpcnN0Um93LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgdmFyIG5ld05vZGUgPSBfdGhpcy5nZXROZXdSb3coY2xvbm5lZFJvdyk7XG4gICAgICAgIF90aGlzLnRib2R5Lmluc2VydEJlZm9yZShuZXdOb2RlLCBfdGhpcy5sYXN0Um93KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFkZFRyLCBbe1xuICAgIGtleTogJ2dldE5ld1JvdycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE5ld1JvdyhvbGRSb3cpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICBvbGRSb3cuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmZpcnN0Um93Q2xhc3MpO1xuICAgICAgdmFyIGVsZW1lbnRzID0gQXJyYXkuZnJvbShvbGRSb3cucXVlcnlTZWxlY3RvckFsbCgnW25hbWVdJykpO1xuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgbmFtZSA9IGVsZW1lbnQuZGF0YXNldC5uYW1lICsgJy0nICsgX3RoaXMyLmNvdW50O1xuICAgICAgICBlbGVtZW50Lm5hbWUgPSBuYW1lO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gb2xkUm93O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBZGRUcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWRkVHI7XG5cbi8qIFJFQUNUIEhPVCBMT0FERVIgKi8gfSkuY2FsbCh0aGlzKTsgfSBmaW5hbGx5IHsgaWYgKG1vZHVsZS5ob3QpIHsgKGZ1bmN0aW9uICgpIHsgdmFyIGZvdW5kUmVhY3RDbGFzc2VzID0gbW9kdWxlLmhvdC5kYXRhICYmIG1vZHVsZS5ob3QuZGF0YS5mb3VuZFJlYWN0Q2xhc3NlcyB8fCBmYWxzZTsgaWYgKG1vZHVsZS5leHBvcnRzICYmIG1vZHVsZS5tYWtlSG90KSB7IHZhciBtYWtlRXhwb3J0c0hvdCA9IHJlcXVpcmUoXCJjOlxcXFxQcm9qZWN0c1xcXFxTb3VyY2VUcmVlXFxcXGthZGVuYS1rMTAtY29yZVxcXFxmcm9udGVuZFxcXFxub2RlX21vZHVsZXNcXFxccmVhY3QtaG90LWxvYWRlclxcXFxtYWtlRXhwb3J0c0hvdC5qc1wiKTsgaWYgKG1ha2VFeHBvcnRzSG90KG1vZHVsZSwgcmVxdWlyZShcInJlYWN0XCIpKSkgeyBmb3VuZFJlYWN0Q2xhc3NlcyA9IHRydWU7IH0gdmFyIHNob3VsZEFjY2VwdE1vZHVsZSA9IHRydWUgJiYgZm91bmRSZWFjdENsYXNzZXM7IGlmIChzaG91bGRBY2NlcHRNb2R1bGUpIHsgbW9kdWxlLmhvdC5hY2NlcHQoZnVuY3Rpb24gKGVycikgeyBpZiAoZXJyKSB7IGNvbnNvbGUuZXJyb3IoXCJDYW5ub3QgYXBwbHkgaG90IHVwZGF0ZSB0byBcIiArIFwiaW5kZXguanNcIiArIFwiOiBcIiArIGVyci5tZXNzYWdlKTsgfSB9KTsgfSB9IG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkgeyBkYXRhLm1ha2VIb3QgPSBtb2R1bGUubWFrZUhvdDsgZGF0YS5mb3VuZFJlYWN0Q2xhc3NlcyA9IGZvdW5kUmVhY3RDbGFzc2VzOyB9KTsgfSkoKTsgfSB9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3N0YXRpYy9hZGQtdHIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDI2Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=')}});