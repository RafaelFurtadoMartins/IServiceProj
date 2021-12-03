"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServicoService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ServicoService = /** @class */ (function () {
    function ServicoService(http) {
        this.http = http;
        this.url = 'http://127.0.0.1:8000/api/servico';
    }
    ServicoService.prototype.getAll = function () {
        return this.http.get(this.url);
    };
    ServicoService.prototype.show = function (id, token) {
        var headers = new http_1.HttpHeaders({
            'Authorization': token["token_type"] + " " + token["token"]
        });
        return this.http.get(this.url + "/show/" + id, { headers: headers });
    };
    ServicoService.prototype["delete"] = function () {
    };
    ServicoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ServicoService);
    return ServicoService;
}());
exports.ServicoService = ServicoService;
