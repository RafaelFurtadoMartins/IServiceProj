"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var EditService = /** @class */ (function () {
    function EditService(http, auth) {
        this.http = http;
        this.auth = auth;
        this.API_URLms = 'http://localhost:8000/api/Mservice';
        this.API_URLat = 'http://localhost:8000/api';
        this.API_URLde = 'http://localhost:8000/api';
    }
    EditService.prototype.Mservice = function (token) {
        var headers = new http_1.HttpHeaders({
            'Authorization': token["token_type"] + " " + token["token"]
        });
        return this.http.get(this.API_URLms, { headers: headers });
    };
    EditService.prototype.Atualizar = function (token, servico) {
        var headers = new http_1.HttpHeaders({
            'Authorization': token["token_type"] + " " + token["token"]
        });
        return this.http.put(this.API_URLat + "/update/" + servico.id, servico, { headers: headers });
    };
    EditService.prototype.Deletar = function (token, servico) {
        var headers = new http_1.HttpHeaders({
            'Authorization': token["token_type"] + " " + token["token"]
        });
        return this.http["delete"](this.API_URLde + "/delete/" + servico, { headers: headers });
    };
    EditService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], EditService);
    return EditService;
}());
exports.EditService = EditService;
