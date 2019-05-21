(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
                        children: [
                            {
                                path: 'main',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: './main/main.module#MainPageModule'
                                    }
                                ]
                            },
                            {
                                path: 'tours',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: './tours/tours.module#ToursPageModule'
                                    }
                                ]
                            },
                            {
                                path: 'offers',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: './offers/offers.module#OffersPageModule'
                                    }
                                ]
                            },
                            {
                                path: 'profile',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: './profile/profile.module#ProfilePageModule'
                                    }
                                ]
                            },
                            {
                                path: 'help',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: './help/help.module#HelpPageModule'
                                    }
                                ]
                            },
                            {
                                path: '',
                                redirectTo: 'main',
                                pathMatch: 'full'
                            }
                        ]
                    },
                    {
                        path: '',
                        redirectTo: 'main',
                        pathMatch: 'full'
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
            entryComponents: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-tabs>\r\n\r\n    <ion-tab-bar slot=\"bottom\" color=\"primary\">\r\n      <ion-tab-button tab=\"main\">\r\n        <i class=\"material-icons icon icon-homepage tab-icons\"></i>\r\n        <ion-label>Home</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"tours\">\r\n        <i class=\"material-icons icon icon-backpack tab-icons\"></i>\r\n        <ion-label>Tours</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button >\r\n          \r\n        </ion-tab-button>\r\n      \r\n\r\n      <ion-tab-button tab=\"offers\">\r\n        <i class=\"material-icons icon icon-tag tab-icons\"></i>\r\n          \r\n        <ion-label>Offers</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"help\">\r\n        <i class=\"material-icons icon icon-question tab-icons\"></i>\r\n          \r\n        <ion-label>Help</ion-label>\r\n      </ion-tab-button>\r\n    </ion-tab-bar>\r\n\r\n\r\n      <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" class=\"mb-2\" >\r\n        <ion-fab-button>\r\n            <ion-tab-button  tab=\"profile\" >\r\n                <img src=\"../../assets/images/icons/travell.png\" class=\"\">\r\n              </ion-tab-button>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n\r\n  </ion-tabs>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ion-fab{\r\n  \r\n      .tab-icon {\r\n        max-width: 130%;\r\n    }\r\n  } */\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcTWF5dXIgMjMtNy0xOFxcMjAxOVxcSU9OSUNcXGlvbmljSC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0tDS0siLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW9uLWZhYntcclxuICBcclxuICAgICAgLnRhYi1pY29uIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEzMCU7XHJcbiAgICB9XHJcbiAgfSAqLyIsIi8qIGlvbi1mYWJ7XHJcbiAgXHJcbiAgICAgIC50YWItaWNvbiB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMzAlO1xyXG4gICAgfVxyXG4gIH0gKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.page */ "./src/app/home/profile/profile.page.ts");




var HomePage = /** @class */ (function () {
    function HomePage(modalController) {
        this.modalController = modalController;
    }
    HomePage.prototype.OpenProfileModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"],
                            componentProps: { value: 123 }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.clickonionfab = function () {
        this.clickevent = 'tab="offers"';
        console.log(this.clickevent);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map