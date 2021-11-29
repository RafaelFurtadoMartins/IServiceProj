"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddService = void 0;
var core_1 = require("@angular/core");
var models_servicos_component_1 = require("../models/models.servicos.component");
var AddService = /** @class */ (function () {
    function AddService(http) {
        this.http = http;
        this.API_URL = 'http://localhost:8000/api/service';
    }
    AddService.prototype.registerServico = function (categoria, subCategoria, titulo, descricao, cidade) {
        return this.http.post(this.API_URL, models_servicos_component_1.service);
    };
    AddService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AddService);
    return AddService;
}());
exports.AddService = AddService;
