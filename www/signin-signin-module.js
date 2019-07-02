(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signin-signin-module"],{

/***/ "./src/app/signin/signin.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.module.ts ***!
  \*****************************************/
/*! exports provided: SigninPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signin.page */ "./src/app/signin/signin.page.ts");








var routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_7__["SigninPage"]
    }
];
var SigninPageModule = /** @class */ (function () {
    function SigninPageModule() {
    }
    SigninPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_7__["SigninPage"]]
        })
    ], SigninPageModule);
    return SigninPageModule;
}());



/***/ }),

/***/ "./src/app/signin/signin.page.html":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-container\">\r\n\r\n\r\n  <div class=\"container-fluid\" >\r\n      <div class=\"row\">\r\n        <div class=\"col-12 col-md-12 col-sm-12 mt-4\">\r\n          <ion-grid>\r\n            <ion-row>\r\n          <ion-col size=\"12\" class=\"text-center\">\r\n            <h3>Application</h3>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg class=\"mt-4\">\r\n          <form class=\"example-form mt-4\">\r\n              <mat-form-field class=\"full-width\">\r\n              <input matInput placeholder=\"Mobile / Email id\">\r\n              </mat-form-field>\r\n      \r\n              <mat-form-field class=\"full-width mt-3\">\r\n                  <input type=\"{{inputtype}}\" matInput placeholder=\"Password\">\r\n                  <mat-icon id=\"passwordvisibility\" class=\"showhidepassword anchoreffect\" (click)=\"showHidePassword()\"  matSuffix>{{visibilityicon}}</mat-icon>\r\n              </mat-form-field>\r\n      \r\n              <div class=\"row p-2\">\r\n                <button mat-raised-button class=\"full-width p-1 btn-prim\" (click)=\"redirectionToUrl()\" color=\"primary\">Sign In <ion-icon name=\"arrow-round-forward\"></ion-icon></button>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <ion-label color=\"medium\">Or sign in with,</ion-label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row p-2\">\r\n                <div class=\"col-6 text-center\">\r\n                    <ion-text color=\"danger\"><h4><ion-icon name=\"logo-google\"></ion-icon> Google</h4></ion-text>\r\n                </div>\r\n                <div class=\"col-6 text-center\">\r\n                    <ion-text color=\"primary\"><h4><ion-icon name=\"logo-facebook\"></ion-icon> Facebook</h4></ion-text>\r\n                </div>\r\n              </div>\r\n              <!-- <ion-grid class=\"p-1\">\r\n                  <ion-row>\r\n                    <ion-col size=\"6\" class=\"text-center\">\r\n                          <ion-button fill=\"outline\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>&nbsp;Facebook</ion-button>\r\n                      </ion-col>\r\n                      <ion-col size=\"6\" class=\"text-center\">\r\n                        <ion-button fill=\"outline\"  color=\"danger\" (click)=\"doGoogleLogin()\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i>&nbsp;Google</ion-button>\r\n                      </ion-col>\r\n              </ion-row>\r\n          </ion-grid>   -->\r\n                          \r\n              <ion-grid class=\"p-1\">\r\n                  <ion-row>\r\n                    <ion-col  size=\"6\" size-lg class=\"text-nowrap text-left\" (click)='redirectionToUrl(\"forgotpassword\")'>\r\n                        <label class=\"anchoreffect\">Forgot password?</label>\r\n                    </ion-col>\r\n                    <ion-col  size=\"6\" size-lg size-lg class=\"text-nowrap text-left\" (click)='redirectionToUrl(\"signup\")'>\r\n                        <label class=\"anchoreffect\">New User? Sign up</label>\r\n                    </ion-col>\r\n              </ion-row>\r\n          </ion-grid>                \r\n            </form>\r\n          </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n  \r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/signin/signin.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/signin/signin.page.ts":
/*!***************************************!*\
  !*** ./src/app/signin/signin.page.ts ***!
  \***************************************/
/*! exports provided: SigninPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPage", function() { return SigninPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var SigninPage = /** @class */ (function () {
    function SigninPage(router, location) {
        this.router = router;
        this.location = location;
        this.inputtype = 'password';
        this.visibilityicon = 'visibility';
    }
    SigninPage.prototype.ngOnInit = function () {
    };
    SigninPage.prototype.showHidePassword = function () {
        if (this.inputtype == 'password') {
            this.inputtype = 'text';
            this.visibilityicon = 'visibility_off';
        }
        else {
            this.inputtype = 'password';
            this.visibilityicon = 'visibility';
        }
    };
    SigninPage.prototype.redirectionToUrl = function (path, fieldid) {
        if (fieldid)
            this.router.navigate([path, fieldid]);
        else
            this.router.navigate([path]);
    };
    SigninPage.prototype.userAuthentication = function () {
        this.location.back();
    };
    SigninPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.page.html */ "./src/app/signin/signin.page.html"),
            styles: [__webpack_require__(/*! ./signin.page.scss */ "./src/app/signin/signin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], SigninPage);
    return SigninPage;
}());



/***/ })

}]);
//# sourceMappingURL=signin-signin-module.js.map