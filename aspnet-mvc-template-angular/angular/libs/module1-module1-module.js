(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module1-module1-module"],{

/***/ "./src/module1/component1/component1.component.css":
/*!*********************************************************!*\
  !*** ./src/module1/component1/component1.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/module1/component1/component1.component.html":
/*!**********************************************************!*\
  !*** ./src/module1/component1/component1.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  component1 works!\r\n</p>\r\n\r\n<nav>\r\n  <a routerLink=\"subComponent1\">SubComponent1</a>\r\n  <a routerLink=\"subComponent2\">SubComponent2</a>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/module1/component1/component1.component.ts":
/*!********************************************************!*\
  !*** ./src/module1/component1/component1.component.ts ***!
  \********************************************************/
/*! exports provided: Component1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component1Component", function() { return Component1Component; });
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

var Component1Component = /** @class */ (function () {
    function Component1Component() {
    }
    Component1Component.prototype.ngOnInit = function () {
    };
    Component1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-component1',
            template: __webpack_require__(/*! ./component1.component.html */ "./src/module1/component1/component1.component.html"),
            styles: [__webpack_require__(/*! ./component1.component.css */ "./src/module1/component1/component1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Component1Component);
    return Component1Component;
}());



/***/ }),

/***/ "./src/module1/component1/subComponent1.component.html":
/*!*************************************************************!*\
  !*** ./src/module1/component1/subComponent1.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  subComponent1 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/module1/component1/subComponent1.component.ts":
/*!***********************************************************!*\
  !*** ./src/module1/component1/subComponent1.component.ts ***!
  \***********************************************************/
/*! exports provided: SubComponent1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubComponent1Component", function() { return SubComponent1Component; });
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

var SubComponent1Component = /** @class */ (function () {
    function SubComponent1Component() {
    }
    SubComponent1Component.prototype.ngOnInit = function () {
    };
    SubComponent1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subcomponent1',
            template: __webpack_require__(/*! ./subComponent1.component.html */ "./src/module1/component1/subComponent1.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SubComponent1Component);
    return SubComponent1Component;
}());



/***/ }),

/***/ "./src/module1/component1/subComponent2.component.html":
/*!*************************************************************!*\
  !*** ./src/module1/component1/subComponent2.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  subComponent2 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/module1/component1/subComponent2.component.ts":
/*!***********************************************************!*\
  !*** ./src/module1/component1/subComponent2.component.ts ***!
  \***********************************************************/
/*! exports provided: SubComponent2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubComponent2Component", function() { return SubComponent2Component; });
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

var SubComponent2Component = /** @class */ (function () {
    function SubComponent2Component() {
    }
    SubComponent2Component.prototype.ngOnInit = function () {
    };
    SubComponent2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subcomponent2',
            template: __webpack_require__(/*! ./subComponent2.component.html */ "./src/module1/component1/subComponent2.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SubComponent2Component);
    return SubComponent2Component;
}());



/***/ }),

/***/ "./src/module1/module1.module.ts":
/*!***************************************!*\
  !*** ./src/module1/module1.module.ts ***!
  \***************************************/
/*! exports provided: Module1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module1Module", function() { return Module1Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _module1_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module1.routing */ "./src/module1/module1.routing.ts");
/* harmony import */ var _component1_component1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component1/component1.component */ "./src/module1/component1/component1.component.ts");
/* harmony import */ var _component1_subComponent1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component1/subComponent1.component */ "./src/module1/component1/subComponent1.component.ts");
/* harmony import */ var _component1_subComponent2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component1/subComponent2.component */ "./src/module1/component1/subComponent2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Module1Module = /** @class */ (function () {
    function Module1Module() {
    }
    Module1Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _module1_routing__WEBPACK_IMPORTED_MODULE_2__["Module1RoutingModule"]
            ],
            declarations: [_component1_component1_component__WEBPACK_IMPORTED_MODULE_3__["Component1Component"], _component1_subComponent1_component__WEBPACK_IMPORTED_MODULE_4__["SubComponent1Component"], _component1_subComponent2_component__WEBPACK_IMPORTED_MODULE_5__["SubComponent2Component"]],
            entryComponents: [_component1_component1_component__WEBPACK_IMPORTED_MODULE_3__["Component1Component"]]
        })
    ], Module1Module);
    return Module1Module;
}());



/***/ }),

/***/ "./src/module1/module1.routing.ts":
/*!****************************************!*\
  !*** ./src/module1/module1.routing.ts ***!
  \****************************************/
/*! exports provided: Module1RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module1RoutingModule", function() { return Module1RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component1_component1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component1/component1.component */ "./src/module1/component1/component1.component.ts");
/* harmony import */ var _component1_subComponent1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component1/subComponent1.component */ "./src/module1/component1/subComponent1.component.ts");
/* harmony import */ var _component1_subComponent2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component1/subComponent2.component */ "./src/module1/component1/subComponent2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _component1_component1_component__WEBPACK_IMPORTED_MODULE_2__["Component1Component"],
        children: [
            {
                path: 'subComponent1',
                component: _component1_subComponent1_component__WEBPACK_IMPORTED_MODULE_3__["SubComponent1Component"]
            },
            {
                path: 'subComponent2',
                component: _component1_subComponent2_component__WEBPACK_IMPORTED_MODULE_4__["SubComponent2Component"]
            }
        ]
    }
];
var Module1RoutingModule = /** @class */ (function () {
    function Module1RoutingModule() {
    }
    Module1RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)]
        })
    ], Module1RoutingModule);
    return Module1RoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=module1-module1-module.js.map