(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./src/app/home/main/main.module.ts":
/*!******************************************!*\
  !*** ./src/app/home/main/main.module.ts ***!
  \******************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/home/main/main.page.ts");







var routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]
    }
];
var MainPageModule = /** @class */ (function () {
    function MainPageModule() {
    }
    MainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
        })
    ], MainPageModule);
    return MainPageModule;
}());



/***/ }),

/***/ "./src/app/home/main/main.page.html":
/*!******************************************!*\
  !*** ./src/app/home/main/main.page.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ion-header>\r\n   \r\n     \r\n          <ion-tab-bar slot=\"top\" class=\"pt-2 pb-2\">\r\n              <ion-tab-button (click)=\"redirectionToUrl('hotels')\">\r\n                  <i class=\"material-icons icon icon-resort text-light-primary\"></i>\r\n                <ion-label>Hotels</ion-label>\r\n              </ion-tab-button>\r\n    \r\n              <ion-tab-button (click)=\"redirectionToUrl('restraunrants')\">\r\n                  <i class=\"material-icons icon icon-restraurant text-light-primary\"></i>\r\n                <ion-label>Restraurant</ion-label>\r\n              </ion-tab-button>\r\n    \r\n    \r\n              <ion-tab-button (click)=\"redirectionToUrl('experiences')\">\r\n                  <i class=\"material-icons icon icon-amusement-park text-light-primary\">\r\n                    \r\n                      </i>\r\n                <ion-label>Experiences</ion-label>\r\n              </ion-tab-button>\r\n        \r\n             \r\n            </ion-tab-bar>\r\n      \r\n            <ion-tab-bar slot=\"top\"  class=\"pt-2 pb-2\">\r\n           \r\n                <ion-tab-button (click)=\"redirectionToUrl('buses')\">\r\n                    <i class=\"material-icons icon icon-bus text-light-primary\"></i>\r\n                  <ion-label>Bus</ion-label>\r\n                </ion-tab-button>\r\n          \r\n                <ion-tab-button (click)=\"redirectionToUrl('cars')\">\r\n                    <i class=\"material-icons icon icon-car text-light-primary\"></i>\r\n                  <ion-label>Cab</ion-label>\r\n                </ion-tab-button>\r\n    \r\n                <ion-tab-button (click)=\"redirectionToUrl('trains')\">\r\n                    <i class=\"material-icons icon icon-train text-light-primary\"></i>\r\n                  <ion-label>Trains</ion-label>\r\n                </ion-tab-button>\r\n    \r\n            </ion-tab-bar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n      <ion-slides #mySlider (ionSlidesDidLoad)=\"slidesDidLoad(mySlider)\"  pager=\"true\" [options]=\"slideOpts\" class=\"mt-1\">\r\n          <ion-slide>\r\n          <img class=\"slider-image\" src=\"../../assets/images/misc/slider1.jpg\">\r\n          </ion-slide>\r\n          <ion-slide>\r\n          <img class=\"slider-image\"  src=\"../../assets/images/misc/slider2.jpg\">\r\n          </ion-slide>\r\n          <ion-slide>\r\n          <img class=\"slider-image\"  src=\"../../assets/images/misc/slider3.jpg\">\r\n          </ion-slide>\r\n        </ion-slides>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/main/main.page.scss":
/*!******************************************!*\
  !*** ./src/app/home/main/main.page.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slider-image {\n  max-height: 100vh;\n  max-width: 100%; }\n\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300msopacity;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  z-index: 10; }\n\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0; }\n\n/* Common Styles */\n\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 10px;\n  left: 0;\n  width: 100%; }\n\n/* Bullets */\n\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0; }\n\n.swiper-pagination-bullets-dynamic.swiper-pagination-bullet {\n  -webkit-transform: scale(0.33);\n  transform: scale(0.33);\n  position: relative; }\n\n.swiper-pagination-bullets-dynamic.swiper-pagination-bullet-active {\n  -webkit-transform: scale(1);\n  transform: scale(1); }\n\n.swiper-pagination-bullets-dynamic.swiper-pagination-bullet-active-main {\n  -webkit-transform: scale(1);\n  transform: scale(1); }\n\n.swiper-pagination-bullets-dynamic.swiper-pagination-bullet-active-prev {\n  -webkit-transform: scale(0.66);\n  transform: scale(0.66); }\n\n.swiper-pagination-bullets-dynamic.swiper-pagination-bullet-active-prev-prev {\n  -webkit-transform: scale(0.33);\n  transform: scale(0.33); }\n\n.swiper-pagination-bullets-dynamic.swiper-pagination-bullet-active-next {\n  -webkit-transform: scale(0.66);\n  transform: scale(0.66); }\n\n.swiper-pagination-bullets-dynamic.swiper-pagination-bullet-active-next-next {\n  -webkit-transform: scale(0.33);\n  transform: scale(0.33); }\n\n.swiper-pagination-bullet {\n  width: 6px;\n  height: 6px;\n  display: inline-block;\n  border-radius: 100%;\n  background: #fff;\n  opacity: 0.2; }\n\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.swiper-pagination-clickable.swiper-pagination-bullet {\n  cursor: pointer; }\n\n.swiper-pagination-bullet-active {\n  opacity: 1;\n  background: #fff; }\n\n.swiper-container-vertical > .swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translate3d(0px, -50%, 0);\n  transform: translate3d(0px, -50%, 0); }\n\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullet {\n  margin: 6px0;\n  display: block; }\n\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  width: 8px; }\n\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic.swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200mstop, 200ms -webkit-transform;\n  transition: 200mstransform, 200mstop;\n  transition: 200mstransform, 200mstop, 200ms -webkit-transform; }\n\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullet {\n  margin: 04px; }\n\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  white-space: nowrap; }\n\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic.swiper-pagination-bullet {\n  transition: 200msleft, 200ms -webkit-transform;\n  transition: 200mstransform, 200msleft;\n  transition: 200mstransform, 200msleft, 200ms -webkit-transform; }\n\n.swiper-container-horizontal.swiper-container-rtl > .swiper-pagination-bullets-dynamic.swiper-pagination-bullet {\n  transition: 200msright, 200ms -webkit-transform;\n  transition: 200mstransform, 200msright;\n  transition: 200mstransform, 200msright, 200ms -webkit-transform; }\n\nion-label {\n  font-size: 15px !important; }\n\nion-badge {\n  color: #fff;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  border-radius: 100%; }\n\n.category-block {\n  margin-bottom: 4px; }\n\n.category-banner {\n  border-left: 8px solid var(--ion-color-secondary);\n  background: var(--ion-color-light);\n  height: 40px;\n  padding: 10px;\n  font-weight: 500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tYWluL0Q6XFxNYXl1ciAyMy03LTE4XFwyMDE5XFxJT05JQ1xcaW9uaWNIL3NyY1xcYXBwXFxob21lXFxtYWluXFxtYWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFpQjtFQUNqQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUdsQix3QkFBd0I7RUFDeEIsdUNBQXVDO0VBQ3ZDLCtCQUErQjtFQUMvQixXQUFXLEVBQUE7O0FBRVg7RUFDQSxVQUFVLEVBQUE7O0FBRVYsa0JBQUE7O0FBQ0E7OztFQUdBLFlBQVk7RUFDWixPQUFPO0VBQ1AsV0FBVyxFQUFBOztBQUVYLFlBQUE7O0FBQ0E7RUFDQSxnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUVaO0VBQ0EsOEJBQThCO0VBRTlCLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFFbEI7RUFDQSwyQkFBMkI7RUFFM0IsbUJBQW1CLEVBQUE7O0FBRW5CO0VBQ0EsMkJBQTJCO0VBRTNCLG1CQUFtQixFQUFBOztBQUVuQjtFQUNBLDhCQUE4QjtFQUU5QixzQkFBc0IsRUFBQTs7QUFFdEI7RUFDQSw4QkFBOEI7RUFFOUIsc0JBQXNCLEVBQUE7O0FBRXRCO0VBQ0EsOEJBQThCO0VBRTlCLHNCQUFzQixFQUFBOztBQUV0QjtFQUNBLDhCQUE4QjtFQUU5QixzQkFBc0IsRUFBQTs7QUFFdEI7RUFDQSxVQUFVO0VBQ1YsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTs7QUFFWjtFQUNBLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUVWLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLGdCQUFnQixFQUFBOztBQUVoQjtFQUNBLGVBQWUsRUFBQTs7QUFFZjtFQUNBLFVBQVU7RUFDVixnQkFBZ0IsRUFBQTs7QUFFaEI7RUFDQSxXQUFXO0VBQ1gsUUFBUTtFQUNSLDRDQUE0QztFQUM1QyxvQ0FBb0MsRUFBQTs7QUFFcEM7RUFDQSxZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUVkO0VBQ0EsUUFBUTtFQUNSLG1DQUFtQztFQUVuQywyQkFBMkI7RUFDM0IsVUFBVSxFQUFBOztBQUVWO0VBQ0EscUJBQXFCO0VBRXJCLDZDQUE2QztFQUU3QyxvQ0FBb0M7RUFDcEMsNkRBQTZELEVBQUE7O0FBRTdEO0VBQ0EsWUFBWSxFQUFBOztBQUVaO0VBQ0EsU0FBUztFQUNULG1DQUFtQztFQUVuQywyQkFBMkI7RUFDM0IsbUJBQW1CLEVBQUE7O0FBRW5CO0VBRUEsOENBQThDO0VBRTlDLHFDQUFxQztFQUNyQyw4REFBOEQsRUFBQTs7QUFFOUQ7RUFFQSwrQ0FBK0M7RUFFL0Msc0NBQXNDO0VBQ3RDLCtEQUErRCxFQUFBOztBQUcvRDtFQUNJLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpREFBaUQ7RUFDakQsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL21haW4vbWFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5zbGlkZXItaW1hZ2V7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtc29wYWNpdHk7XHJcbiAgICAtby10cmFuc2l0aW9uOiAzMDBtc29wYWNpdHk7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtc29wYWNpdHk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24taGlkZGVuIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAvKiBDb21tb24gU3R5bGVzICovXHJcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb24sXHJcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLFxyXG4gICAgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC8qIEJ1bGxldHMgKi9cclxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGZvbnQtc2l6ZTogMDtcclxuICAgIH1cclxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMzKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMzKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbWFpbiB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldiB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC42Nik7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42Nik7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtcHJldi1wcmV2IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMzKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMzKTtcclxuICAgIH1cclxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuNjYpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcclxuICAgIH1cclxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0LW5leHQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC4zMyk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIH1cclxuICAgIGJ1dHRvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWNsaWNrYWJsZS5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtNTAlLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtNTAlLCAwKTtcclxuICAgIH1cclxuICAgIC5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICAgIG1hcmdpbjogNnB4MDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMjAwbXN0b3AsIDIwMG1zIC13ZWJraXQtdHJhbnNmb3JtO1xyXG4gICAgdHJhbnNpdGlvbjogMjAwbXN0b3AsIDIwMG1zIC13ZWJraXQtdHJhbnNmb3JtO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogMjAwbXN0cmFuc2Zvcm0sIDIwMG1zdG9wO1xyXG4gICAgdHJhbnNpdGlvbjogMjAwbXN0cmFuc2Zvcm0sIDIwMG1zdG9wO1xyXG4gICAgdHJhbnNpdGlvbjogMjAwbXN0cmFuc2Zvcm0sIDIwMG1zdG9wLCAyMDBtcyAtd2Via2l0LXRyYW5zZm9ybTtcclxuICAgIH1cclxuICAgIC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gICAgbWFyZ2luOiAwNHB4O1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG4gICAgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAyMDBtc2xlZnQsIDIwMG1zIC13ZWJraXQtdHJhbnNmb3JtO1xyXG4gICAgdHJhbnNpdGlvbjogMjAwbXNsZWZ0LCAyMDBtcyAtd2Via2l0LXRyYW5zZm9ybTtcclxuICAgIC1vLXRyYW5zaXRpb246IDIwMG1zdHJhbnNmb3JtLCAyMDBtc2xlZnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAyMDBtc3RyYW5zZm9ybSwgMjAwbXNsZWZ0O1xyXG4gICAgdHJhbnNpdGlvbjogMjAwbXN0cmFuc2Zvcm0sIDIwMG1zbGVmdCwgMjAwbXMgLXdlYmtpdC10cmFuc2Zvcm07XHJcbiAgICB9XHJcbiAgICAuc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsLnN3aXBlci1jb250YWluZXItcnRsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAyMDBtc3JpZ2h0LCAyMDBtcyAtd2Via2l0LXRyYW5zZm9ybTtcclxuICAgIHRyYW5zaXRpb246IDIwMG1zcmlnaHQsIDIwMG1zIC13ZWJraXQtdHJhbnNmb3JtO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogMjAwbXN0cmFuc2Zvcm0sIDIwMG1zcmlnaHQ7XHJcbiAgICB0cmFuc2l0aW9uOiAyMDBtc3RyYW5zZm9ybSwgMjAwbXNyaWdodDtcclxuICAgIHRyYW5zaXRpb246IDIwMG1zdHJhbnNmb3JtLCAyMDBtc3JpZ2h0LCAyMDBtcyAtd2Via2l0LXRyYW5zZm9ybTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJhZGdlIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgLmNhdGVnb3J5LWJsb2NrIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICAuY2F0ZWdvcnktYmFubmVyIHtcclxuICAgICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgXHJcblxyXG5cclxuICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/home/main/main.page.ts":
/*!****************************************!*\
  !*** ./src/app/home/main/main.page.ts ***!
  \****************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MainPage = /** @class */ (function () {
    function MainPage(router) {
        this.router = router;
        this.slideOpts = {
            loop: true,
        };
    }
    MainPage.prototype.ngOnInit = function () {
    };
    MainPage.prototype.slidesDidLoad = function (slides) {
        slides.startAutoplay();
    };
    MainPage.prototype.doRefresh = function (event) {
        console.log('Begin async operation');
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 600);
    };
    MainPage.prototype.redirectionToUrl = function (path, fieldid) {
        if (fieldid)
            this.router.navigate([path, fieldid]);
        else
            this.router.navigate([path]);
    };
    MainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.page.html */ "./src/app/home/main/main.page.html"),
            styles: [__webpack_require__(/*! ./main.page.scss */ "./src/app/home/main/main.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MainPage);
    return MainPage;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map