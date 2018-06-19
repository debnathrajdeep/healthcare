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
        return this.http.get("http://ec2-13-232-36-28.ap-south-1.compute.amazonaws.com/Pareto/getPatient.php");
    };
    ApiService.prototype.save = function (formsBody) {
        var url = "http://ec2-13-232-36-28.ap-south-1.compute.amazonaws.com/Pareto/postPatient.php";
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n"

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

module.exports = ""

/***/ }),

/***/ "./src/app/new-cmp/new-cmp.component.html":
/*!************************************************!*\
  !*** ./src/app/new-cmp/new-cmp.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row border border-primary border-top-0 border-right-0 border-left-0\">\r\n      <div class=\"col-lg-12 col-md-12 bg-light\">\r\n        <h3 class=\"text-primary\">Pareto</h3>  \r\n      </div>\r\n    </div>\r\n    <div class=\"row p-3\">\r\n      <div class=\"col-lg-4 col-md-5 border border-primary border-top-0 border-left-0 border-bottom-0\"\r\n            style=\"height:500px;overflow-y: auto;\">\r\n            <div class=\"py-2\">\r\n                <button class=\"btn btn-primary\" (click)=\"getAllPatient()\">Refresh</button>\r\n                &nbsp;\r\n                <span class=\"text-success\">\r\n                    {{this.isUpdateSuccess}}\r\n                </span>\r\n            </div>\r\n          <table class=\"table-hover table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <td class=\"align-middle text-center p-2 font-weight-bold\">Patient Name</td>\r\n                <td class=\"align-middle text-center p-2 font-weight-bold\">Time</td>\r\n                <td colspan=\"2\" class=\"align-middle text-center p-2 font-weight-bold\">Action</td>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let x of patientList\">\r\n                <td class=\"align-middle text-center p-2\">{{x.Name}}</td>\r\n                <td class=\"p-2\">{{x.Time}}</td>\r\n                <td class=\"p-2\"><button class=\"btn btn-primary\" (click)=\"showPatientDetails(x.Id)\">View</button></td>\r\n                <td class=\"p-2\"><button class=\"btn btn-outline-primary\" (click)=\"close(x.Id)\">Close</button></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n      </div>\r\n      <div class=\"col-lg-8 col-md-7\">\r\n        <div class=\"container\">\r\n          <div class=\"row\" style=\"height: 300px;\">\r\n            <table class=\"border-0\">\r\n              <tbody>\r\n                <tr>\r\n                  <td class=\"border-0\">Patient Name: </td>\r\n                  <td class=\"border-0 font-weight-bold\">{{this.selectedPatient.Name}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td class=\"border-0\">Call details: </td>\r\n                  <td class=\"border-0 text-primary\">{{this.selectedPatient.CallDetails}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12 form-group\">\r\n                <form action=\"\">\r\n                  <label for=\"comment\" class=\"font-weight-bold\">Comment:</label>\r\n                  <textarea class=\"form-control\" name=\"Comments\" cols=\"20\" rows=\"5\"\r\n                  [(ngModel)]=\"this.selectedPatient.Comments\"></textarea>\r\n                  <button class=\"btn btn-primary mt-1 float-lg-right float-md-none mx-auto\"\r\n                    (click)=\"saveComments()\">Save</button>\r\n                </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

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
    NewCmpComponent.prototype.showPatientDetails = function (patientId) {
        this.selectedPatient = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.patientList, { "Id": patientId });
        console.log(this.selectedPatient);
    };
    NewCmpComponent.prototype.saveComments = function () {
        var _this = this;
        this.isUpdateSuccess = "updating...";
        console.log(this.selectedPatient);
        var formsBody = "id=" + this.selectedPatient.Id + "&iscompleted=0&comments=" + this.selectedPatient.Comments;
        this.api.save(formsBody)
            .subscribe(function (res) {
            console.log(res);
            _this.isUpdateSuccess = "updated successfully";
        }, function (error) { return console.log("Server error: " + error.status + " - Details: " + error.error); });
    };
    NewCmpComponent.prototype.close = function (patientId) {
        var _this = this;
        this.isUpdateSuccess = "updating...";
        var closePatient = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.patientList, { "Id": patientId });
        console.log(closePatient);
        var formsBody = "id=" + closePatient.Id + "&iscompleted=1&comments=" + closePatient.Comments;
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

module.exports = __webpack_require__(/*! D:\Raj\study\Sat\healthcare\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map