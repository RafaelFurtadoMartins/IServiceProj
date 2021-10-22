"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var register_module_1 = require("./register/register.module");
var login_module_1 = require("./login/login.module");
var http_1 = require("@angular/common/http");
var native_storage_1 = require("@ionic-native/native-storage");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent
            ],
            entryComponents: [],
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, angular_1.IonicModule.forRoot(), login_module_1.LoginPageModule, register_module_1.RegisterPageModule, http_1.HttpClientModule, native_storage_1.NativeStorage,],
            providers: [{ provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy },
                native_storage_1.NativeStorage,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
