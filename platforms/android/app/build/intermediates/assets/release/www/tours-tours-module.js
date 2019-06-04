(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tours-tours-module"],{

/***/ "./src/app/home/tours/tours.module.ts":
/*!********************************************!*\
  !*** ./src/app/home/tours/tours.module.ts ***!
  \********************************************/
/*! exports provided: ToursPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToursPageModule", function() { return ToursPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tours_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tours.page */ "./src/app/home/tours/tours.page.ts");







var routes = [
    {
        path: '',
        component: _tours_page__WEBPACK_IMPORTED_MODULE_6__["ToursPage"]
    }
];
var ToursPageModule = /** @class */ (function () {
    function ToursPageModule() {
    }
    ToursPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tours_page__WEBPACK_IMPORTED_MODULE_6__["ToursPage"]]
        })
    ], ToursPageModule);
    return ToursPageModule;
}());



/***/ }),

/***/ "./src/app/home/tours/tours.page.html":
/*!********************************************!*\
  !*** ./src/app/home/tours/tours.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>tours</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/tours/tours.page.scss":
/*!********************************************!*\
  !*** ./src/app/home/tours/tours.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdG91cnMvdG91cnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/tours/tours.page.ts":
/*!******************************************!*\
  !*** ./src/app/home/tours/tours.page.ts ***!
  \******************************************/
/*! exports provided: ToursPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToursPage", function() { return ToursPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToursPage = /** @class */ (function () {
    function ToursPage() {
    }
    ToursPage.prototype.ngOnInit = function () {
    };
    ToursPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tours',
            template: __webpack_require__(/*! ./tours.page.html */ "./src/app/home/tours/tours.page.html"),
            styles: [__webpack_require__(/*! ./tours.page.scss */ "./src/app/home/tours/tours.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToursPage);
    return ToursPage;
}());



/***/ })

}]);
//# sourceMappingURL=tours-tours-module.js.map