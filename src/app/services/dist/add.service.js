"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var AddService = /** @class */ (function () {
    function AddService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.API_URL = 'http://localhost:8000/api/service';
    }
    AddService.prototype.registerServico = function (servico, token) {
        var headers = new http_1.HttpHeaders({
            'Authorization': token["token_type"] + " " + token["token"]
        });
        return this.http.post(this.API_URL, servico, { headers: headers });
    };
    AddService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AddService);
    return AddService;
}());
exports.AddService = AddService;
