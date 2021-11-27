"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddServicePage = void 0;
var core_1 = require("@angular/core");
var AddServicePage = /** @class */ (function () {
    function AddServicePage(addService) {
        this.addService = addService;
    }
    AddServicePage.prototype.ngOnInit = function () {
    };
    AddServicePage.prototype.cadastroServico = function (form) {
        this.addService.registerServico(form.value.titulo, form.value.descricao, form.value.cidade).subscribe;
    };
    AddServicePage = __decorate([
        core_1.Component({
            selector: 'app-add-service',
            templateUrl: './add-service.page.html',
            styleUrls: ['./add-service.page.scss']
        })
    ], AddServicePage);
    return AddServicePage;
}());
exports.AddServicePage = AddServicePage;
