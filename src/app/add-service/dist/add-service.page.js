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
    function AddServicePage(alertService, addService) {
        this.alertService = alertService;
        this.addService = addService;
    }
    AddServicePage.prototype.ngOnInit = function () {
    };
    AddServicePage.prototype.cadastroServico = function (form) {
        var _this = this;
        this.addService.registerServico(form.value.categoria, form.value.subCategoria, form.value.titulo, form.value.descricao, form.value.cidade).subscribe(function (data) {
            console.log(data);
            _this.alertService.presentToast("Serviço salvo com sucesso");
        }, function (error) {
            console.log(error);
        });
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
