webpackJsonp([1],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      items: [{
        tabName: 'item1'
      }, {
        tabName: 'item2'
      }, {
        tabName: 'item3'
      }],
      tabContent: 'item1'
    };
  },

  mounted: function mounted() {
    console.log("Tabs1.vue mounted");
    this.loadTabContent("item1");
  },
  methods: {
    loadTabContent: function loadTabContent(item) {
      // console.log(item);
      this.tabContent = item;
    }
  }
});

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nav', {
    staticClass: "tabs1-01"
  }, [_vm._l((_vm.items), function(i) {
    return [_c('div', {
      staticClass: "tabs",
      on: {
        "click": function($event) {
          _vm.loadTabContent(i.tabName)
        }
      }
    }, [_vm._v("\n        " + _vm._s(i.tabName) + "\n      ")])]
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "row col-sm-12 tabs1-01_content"
  }, [(_vm.tabContent === 'item1') ? _c('div', [_vm._v("\n      " + _vm._s(_vm.tabContent) + "\n    ")]) : _vm._e(), _vm._v(" "), (_vm.tabContent === 'item2') ? _c('div', [_vm._v("\n      " + _vm._s(_vm.tabContent) + "\n    ")]) : _vm._e(), _vm._v(" "), (_vm.tabContent === 'item3') ? _c('div', [_vm._v("\n      " + _vm._s(_vm.tabContent) + "\n    ")]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ef62474c", module.exports)
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(11),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\WINDOWS\\GD2\\web\\testfiles\\webpack2\\_node_dev\\td_git_vueTabs\\src\\vue-components\\Tabs1.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Tabs1.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ef62474c", Component.options)
  } else {
    hotAPI.reload("data-v-ef62474c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});