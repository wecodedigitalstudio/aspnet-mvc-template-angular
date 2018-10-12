(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module2-module2-module"],{

/***/ "./src/module2/component2/component2.component.css":
/*!*********************************************************!*\
  !*** ./src/module2/component2/component2.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/module2/component2/component2.component.html":
/*!**********************************************************!*\
  !*** ./src/module2/component2/component2.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  component2 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/module2/component2/component2.component.ts":
/*!********************************************************!*\
  !*** ./src/module2/component2/component2.component.ts ***!
  \********************************************************/
/*! exports provided: Component2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component2Component", function() { return Component2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Component2Component = /** @class */ (function () {
    function Component2Component() {
    }
    Component2Component.prototype.ngOnInit = function () {
    };
    Component2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component2',
            template: __webpack_require__(/*! ./component2.component.html */ "./src/module2/component2/component2.component.html"),
            styles: [__webpack_require__(/*! ./component2.component.css */ "./src/module2/component2/component2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Component2Component);
    return Component2Component;
}());



/***/ }),

/***/ "./src/module2/module2.module.ts":
/*!***************************************!*\
  !*** ./src/module2/module2.module.ts ***!
  \***************************************/
/*! exports provided: Module2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module2Module", function() { return Module2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _module2_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module2.routing */ "./src/module2/module2.routing.ts");
/* harmony import */ var _component2_component2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component2/component2.component */ "./src/module2/component2/component2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Module2Module = /** @class */ (function () {
    function Module2Module() {
    }
    Module2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _module2_routing__WEBPACK_IMPORTED_MODULE_2__["Module2RoutingModule"]
            ],
            declarations: [_component2_component2_component__WEBPACK_IMPORTED_MODULE_3__["Component2Component"]],
            entryComponents: [_component2_component2_component__WEBPACK_IMPORTED_MODULE_3__["Component2Component"]]
        })
    ], Module2Module);
    return Module2Module;
}());



/***/ }),

/***/ "./src/module2/module2.routing.ts":
/*!****************************************!*\
  !*** ./src/module2/module2.routing.ts ***!
  \****************************************/
/*! exports provided: Module2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module2RoutingModule", function() { return Module2RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component2_component2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component2/component2.component */ "./src/module2/component2/component2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _component2_component2_component__WEBPACK_IMPORTED_MODULE_2__["Component2Component"] },
];
var Module2RoutingModule = /** @class */ (function () {
    function Module2RoutingModule() {
    }
    Module2RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
        })
    ], Module2RoutingModule);
    return Module2RoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=module2-module2-module.js.map