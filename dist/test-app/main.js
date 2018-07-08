(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/apiservice.ts":
/*!*******************************!*\
  !*** ./src/app/apiservice.ts ***!
  \*******************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getAll = function () {
        return this.http.get("http://www.paretohealthcare.com/callcenter/getPatient.php");
    };
    ApiService.prototype.getAllCommunication = function () {
        return this.http.get("http://www.paretohealthcare.com/callcenter/getCommunication.php");
    };
    ApiService.prototype.getAllVisits = function () {
        return this.http.get("http://www.paretohealthcare.com/callcenter/getVisits.php");
    };
    ApiService.prototype.getAllValues = function () {
        return this.http.get("http://www.paretohealthcare.com/callcenter/getValues.php");
    };
    ApiService.prototype.save = function (formsBody) {
        var url = "http://www.paretohealthcare.com/callcenter/postPatient.php";
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.post(url, formsBody, {
            headers: httpHeaders,
            observe: 'response'
        });
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _new_cmp_new_cmp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-cmp/new-cmp.component */ "./src/app/new-cmp/new-cmp.component.ts");
/* harmony import */ var _apiservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apiservice */ "./src/app/apiservice.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _new_cmp_new_cmp_component__WEBPACK_IMPORTED_MODULE_3__["NewCmpComponent"]
            ],
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [_apiservice__WEBPACK_IMPORTED_MODULE_4__["ApiService"]],
            bootstrap: [_new_cmp_new_cmp_component__WEBPACK_IMPORTED_MODULE_3__["NewCmpComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/new-cmp/new-cmp.component.css":
/*!***********************************************!*\
  !*** ./src/app/new-cmp/new-cmp.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* -------------------- Page Styles (not required) */\r\ntd,th{\r\n    padding: .30rem;\r\n    width: auto;\r\n}\r\n.selected {\r\n    background-color: #2780e3;\r\n    color: rgb(0, 0, 0);\r\n    opacity: 0.8;\r\n}\r\n/* -------------------- Select Box Styles: bavotasan.com Method (with special adaptations by ericrasch.com) */\r\n/* -------------------- Source: http://bavotasan.com/2011/style-select-box-using-only-css/ */\r\n.styled-select {\r\n   background: url(http://i62.tinypic.com/15xvbd5.png) no-repeat 96% 0;\r\n   height: 29px;\r\n   overflow: hidden;\r\n   width: 240px;\r\n}\r\n.styled-select select {\r\n   background: transparent;\r\n   border: none;\r\n   font-size: 14px;\r\n   height: 29px;\r\n   padding: 5px; /* If you add too much padding here, the options won't show in IE */\r\n   width: 268px;\r\n}\r\n.styled-select.slate {\r\n   background: url(http://i62.tinypic.com/2e3ybe1.jpg) no-repeat right center;\r\n   height: 34px;\r\n   width: 240px;\r\n}\r\n.styled-select.slate select {\r\n   border: 1px solid #ccc;\r\n   font-size: 16px;\r\n   height: 34px;\r\n   width: 268px;\r\n}\r\n/* -------------------- Rounded Corners */\r\n.rounded {\r\n   border-radius: 20px;\r\n}\r\n.semi-square {\r\n   border-radius: 5px;\r\n}\r\n/* -------------------- Colors: Background */\r\n.slate   { background-color: #ddd; }\r\n.green   { background-color: #779126; }\r\n.blue    { background-color: #3b8ec2; }\r\n.yellow  { background-color: #eec111; }\r\n.black   { background-color: #000; }\r\n/* -------------------- Colors: Text */\r\n.slate select   { color: #000; }\r\n.green select   { color: #fff; }\r\n.blue select    { color: #fff; }\r\n.yellow select  { color: #000; }\r\n.black select   { color: #fff; }\r\n/* -------------------- Select Box Styles: danielneumann.com Method */\r\n/* -------------------- Source: http://danielneumann.com/blog/how-to-style-dropdown-with-css-only/ */\r\n#mainselection select {\r\n   border: 0;\r\n   color: #EEE;\r\n   background: transparent;\r\n   font-size: 20px;\r\n   font-weight: bold;\r\n   padding: 2px 10px;\r\n   width: 378px;\r\n   *width: 350px;\r\n   *background: #58B14C;\r\n   -webkit-appearance: none;\r\n}\r\n#mainselection {\r\n   overflow:hidden;\r\n   width:350px;\r\n   border-radius: 9px 9px 9px 9px;\r\n   box-shadow: 1px 1px 11px #330033;\r\n   background: #58B14C url(\"http://i62.tinypic.com/15xvbd5.png\") no-repeat scroll 319px center;\r\n}\r\n/* -------------------- Select Box Styles: stackoverflow.com Method */\r\n/* -------------------- Source: http://stackoverflow.com/a/5809186 */\r\nselect#soflow, select#soflow-color {\r\n   -webkit-appearance: button;\r\n   -webkit-border-radius: 2px;\r\n   -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);\r\n   -webkit-padding-end: 20px;\r\n   -webkit-padding-start: 2px;\r\n   -webkit-user-select: none;\r\n   background-image: url(http://i62.tinypic.com/15xvbd5.png), -webkit-linear-gradient(#FAFAFA, #F4F4F4 40%, #E5E5E5);\r\n   background-position: 97% center;\r\n   background-repeat: no-repeat;\r\n   border: 1px solid #AAA;\r\n   color: #555;\r\n   font-size: inherit;\r\n   margin: 20px;\r\n   overflow: hidden;\r\n   padding: 5px 10px;\r\n   text-overflow: ellipsis;\r\n   white-space: nowrap;\r\n   width: 300px;\r\n}\r\nselect#soflow-color {\r\n   color: #fff;\r\n   background-image: url(http://i62.tinypic.com/15xvbd5.png), -webkit-linear-gradient(#779126, #779126 40%, #779126);\r\n   background-color: #779126;\r\n   border-radius: 20px;\r\n   padding-left: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/new-cmp/new-cmp.component.html":
/*!************************************************!*\
  !*** ./src/app/new-cmp/new-cmp.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light\" style=\"color: whitesmoke;background-color: #2780e3; height: auto;\">\r\n  <ul class=\"navbar-nav mr-auto\">  <h1 style=\"text-align: center; width: 100%\">Pareto Healthcare Call list CRM</h1>     </ul>\r\n    <form class=\"form-inline\">\r\n            <a href=\"#\" style=\"text-align: right; color: whitesmoke; padding-bottom: 15px\">Welcome, Sathappan</a>\r\n        </form>\r\n</nav>\r\n\r\n<br><br><br><br>\r\n<div class=\"container\" style=\"max-width: 100%;\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <div class=\"styled-select blue semi-square\">\r\n                <select>\r\n                    <option style=\"color: whitesmoke;background-color: #2780e3;\">Select an Location</option>\r\n                    <option style=\"color: whitesmoke;background-color: #2780e3;\">Mumbai</option>\r\n                    <option style=\"color: whitesmoke;background-color: #2780e3;\">Chennai</option>\r\n                </select>\r\n            </div>\r\n            <br>\r\n            <div class=\"card\">\r\n                <div class=\"card-body\" style=\"padding-left: 10px;padding-right: 10px\">\r\n          <div class=\"table-responsive\">          <table class=\"table\" id=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>ParetoID</th>\r\n                                <th>Name</th>\r\n                                <th>Location</th>\r\n                                <th>Source</th>\r\n                                <th>Time</th>\r\n                                <th colspan=\"2\" class=\"align-middle text-center p-2 font-weight-bold\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let x of patientList\">\r\n                                <td>{{x.ParetoID}}</td>\r\n                                <td>{{x.Name}}</td>\r\n                                <td>{{x.Location}}</td>\r\n                                <td><select (onchange)=\"saveComments()\">\r\n                                    <option value=\"{{x.Source}}\">{{x.Source}}</option>\r\n                                    <option value=\"Done\">Done</option>\r\n                                    </select></td>\r\n                                          <td>{{x.Time}}</td>\r\n                                <td class=\"p-2\"><button type=\"button\" class=\"btn btn-primary\" (click)=\"showPatientDetails(x.ParetoID); getAllCommunication(); getAllVisits(); getAllValues()\">View</button></td>\r\n                                <td class=\"p-2\"><button type=\"button\" class=\"btn btn-elegant\" (click)=\"close(x.ParetoID)\">Close</button></td>\r\n                            </tr >\r\n                        </tbody>\r\n                    </table>\r\n                </div>  </div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header primary-color lighten-1 white-text\">Script</div>\r\n                <div class=\"card-body\">\r\n                    <br>\r\n                    <p class=\"card-text\" style=\"padding-left: 10px;padding-right: 15px\">This call is in continuation of the interest that you had expressed on the diabetic communication, that\r\n                        we sent for\r\n                        <b>{{this.selectedPatient.Name}}</b> yesterday. I believe that you are Mr. Madhu. Is be a good time to speak to you ?\r\n                    </p>\r\n                    <p class=\"card-text\" style=\"padding-left: 10px;padding-right: 15px\">Thank you. Our records shows that your last blood test done with us was on\r\n                        <b>13 months</b> before, in May 2018. Sone of the tests like\r\n                        <b>HbA1c</b>, a, b, c etc and the results were a bit abnormal. Have you taken any test after that ?\r\n                        yes / no\r\n                    </p>\r\n                    <p class=\"card-text\" style=\"padding-left: 10px;padding-right: 15px\">Ask more questions\r\n                    </p>\r\n                    <p class=\"card-text\" style=\"padding-left: 10px;padding-right: 15px\">\r\n                        Explain why this package\r\n                        <br>\r\n                        <br> How the package works ?\r\n                        <br>\r\n                        <br> Last time,\r\n                        <b>Dr. Ravi</b> had referred; Do we share the test results with\r\n                        <b>Dr. Ravi</b>\r\n                    </p>\r\n\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"container\" style=\"max-width: 100%; padding-left: 0px;padding-right: 0px;\">\r\n                <h3>\r\n                    <strong>Questions to ask</strong>\r\n                </h3><hr>\r\n                <div class=\"col-md-5\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\" style=\"padding-left: 10px;padding-right: 15px\">\r\n\r\n\r\n                            <table class=\"table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Question</th>\r\n                                        <th>Answer</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <th scope=\"row\">How long diabetic\r\n                                        </th>\r\n\r\n                                        <td>-</td>\r\n\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <th scope=\"row\">Family history of diabetes\r\n                                        </th>\r\n\r\n                                        <td>-</td>\r\n\r\n                                    </tr>\r\n\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-7\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\" style=\"padding-left: 10px;padding-right: 15px\">\r\n                            <table class=\"table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Communication</th>\r\n                                        <th>Outcomes</th>\r\n                                        <th>Dates</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr  *ngFor=\"let x of communicationList\">\r\n                                        <th scope=\"row\">{{this.communicationPatient.Communication}}</th>\r\n                                        <td>{{x.Outcomes}}</td>\r\n                                        <td>{{x.Date}}</td>\r\n                                    </tr>\r\n\r\n\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n            </div>\r\n            <div class=\"container\" style=\"max-width: 100%; padding-left: 0px;padding-right: 0px;\">\r\n                <h3>\r\n                    <strong>Last Visit Details</strong>\r\n                </h3><hr>\r\n                <div class=\"col-md-5\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\" style=\"padding-left: 10px;padding-right: 15px\">\r\n\r\n\r\n                            <table class=\"table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Date</th>\r\n                                        <th>Home / Center</th>\r\n                                        <th>Reffered by</th>\r\n                                        <th>Bill</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let x of visitsList\">\r\n                                        <td>{{x.Date}}</td>\r\n                                        <td>{{x.Center}}</td>\r\n                                        <td>{{x.Referred_By}}</td>\r\n                                        <td>{{x.Bill}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-7\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-body\" style=\"padding-left: 10px;padding-right: 15px\">\r\n\r\n                            <table class=\"table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th>Date</th>\r\n                                        <th>Test</th>\r\n                                        <th>Value</th>\r\n                                        <th>Range</th>\r\n                                        <th>Significance</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let x of valuesList\">\r\n                                        <td>{{x.Date}}</td>\r\n                                        <td>{{x.Test}}</td>\r\n                                        <td>{{x.Value}}</td>\r\n                                        <td>{{x.Range}}</td>\r\n                                        <td>{{x.Significance}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    </div>\r\n    <footer class=\"page-footer center-on-small-only\">\r\n\r\n\r\n            <!--Copyright-->\r\n            <div class=\"footer-copyright\">\r\n                <div class=\"container-fluid\">\r\n                    © 2018 Copyright: <a href=\"#\"> Pareto Healthcare </a>\r\n                </div>\r\n            </div>\r\n            <!--/.Copyright-->\r\n        </footer>\r\n"

/***/ }),

/***/ "./src/app/new-cmp/new-cmp.component.ts":
/*!**********************************************!*\
  !*** ./src/app/new-cmp/new-cmp.component.ts ***!
  \**********************************************/
/*! exports provided: NewCmpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCmpComponent", function() { return NewCmpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apiservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apiservice */ "./src/app/apiservice.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewCmpComponent = /** @class */ (function () {
    function NewCmpComponent(api) {
        this.api = api;
    }
    NewCmpComponent.prototype.ngOnInit = function () {
        this.getAllPatient();
    };
    NewCmpComponent.prototype.getAllPatient = function () {
        var _this = this;
        this.isUpdateSuccess = "";
        this.api.getAll()
            .subscribe(function (res) { return _this.patientList = res; }, function (error) { return console.log("Server error: " + error.status + " - Details: " + error.error); });
        this.selectedPatient = { "Id": "0", "Name": "", "Country": "" };
    };
    NewCmpComponent.prototype.getAllCommunication = function () {
        var _this = this;
        this.isUpdateSuccess = "";
        this.api.getAllCommunication()
            .subscribe(function (res) { return _this.communicationList = res; }, function (error) { return console.log("Server error: " + error.status + " - Details: " + error.error); });
        // this.selectedPatient = {"Id":"0","Name":"","Country":""};
    };
    NewCmpComponent.prototype.getAllVisits = function () {
        var _this = this;
        this.isUpdateSuccess = "";
        this.api.getAllVisits()
            .subscribe(function (res) { return _this.visitsList = res; }, function (error) { return console.log("Server error: " + error.status + " - Details: " + error.error); });
        // this.selectedPatient = {"Id":"0","Name":"","Country":""};
    };
    NewCmpComponent.prototype.getAllValues = function () {
        var _this = this;
        this.isUpdateSuccess = "";
        this.api.getAllValues()
            .subscribe(function (res) { return _this.valuesList = res; }, function (error) { return console.log("Server error: " + error.status + " - Details: " + error.error); });
        // this.selectedPatient = {"Id":"0","Name":"","Country":""};
    };
    NewCmpComponent.prototype.showPatientDetails = function (ParetoID) {
        this.selectedPatient = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.patientList, { "ParetoID": ParetoID });
        console.log(this.selectedPatient);
    };
    NewCmpComponent.prototype.showCommunicationDetails = function (ParetoID) {
        this.communicationPatient = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.communicationList, { "ParetoID": ParetoID });
        console.log(this.selectedPatient);
    };
    NewCmpComponent.prototype.saveComments = function () {
        var _this = this;
        this.isUpdateSuccess = "updating...";
        console.log(this.selectedPatient);
        var formsBody = "ParetoID=" + this.selectedPatient.ParetoID + "&iscompleted=0&comments=" + this.selectedPatient.Source;
        this.api.save(formsBody)
            .subscribe(function (res) {
            console.log(res);
            _this.isUpdateSuccess = "updated successfully";
        }, function (error) { return console.log("Server error: " + error.status + " - Details: " + error.error); });
    };
    NewCmpComponent.prototype.close = function (ParetoID) {
        var _this = this;
        this.isUpdateSuccess = "updating...";
        var closePatient = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.patientList, { "ParetoID": ParetoID });
        console.log(closePatient);
        var formsBody = "ParetoID=" + closePatient.ParetoID + "&iscompleted=1&comments=" + closePatient.Source;
        this.api.save(formsBody)
            .subscribe(function (res) {
            console.log(res);
            _this.getAllPatient();
            _this.isUpdateSuccess = "updated successfully";
        }, function (error) { return console.log("Server error: " + error.status + " - Details: " + error.error); });
    };
    NewCmpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-cmp',
            template: __webpack_require__(/*! ./new-cmp.component.html */ "./src/app/new-cmp/new-cmp.component.html"),
            styles: [__webpack_require__(/*! ./new-cmp.component.css */ "./src/app/new-cmp/new-cmp.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_apiservice__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], NewCmpComponent);
    return NewCmpComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Master\Ananth\healthcare\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map