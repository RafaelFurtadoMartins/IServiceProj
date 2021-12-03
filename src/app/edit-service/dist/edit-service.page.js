"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditServicePage = void 0;
var core_1 = require("@angular/core");
var EditServicePage = /** @class */ (function () {
    // usuario: any = JSON.parse(this.authService.getToken())
    function EditServicePage(fb, Storage, alertService, authService, addService, service, route, servico) {
        this.fb = fb;
        this.Storage = Storage;
        this.alertService = alertService;
        this.authService = authService;
        this.addService = addService;
        this.service = service;
        this.route = route;
        this.servico = servico;
    }
    // ngOnInit() {
    //   this.formulario=this.fb.group({
    //     titulo:'',
    //     descricao:'',  
    //     categoria:'',
    //     subCategoria:'',
    //    cidade:'',
    //   })
    EditServicePage.prototype.ngOnInit = function () {
        this.BuscarServicos();
    };
    EditServicePage.prototype.editService = function () {
        var _this = this;
        this.Storage.getToken('token').then(function (token) {
            _this.addService.registerServico(_this.formulario.value, token).subscribe(function (data) {
                console.log(data);
                _this.alertService.presentToast("Serviço alterado com sucesso");
            }, function (error) {
                console.log(error);
            });
        });
    };
    EditServicePage.prototype["delete"] = function (id) {
        var _this = this;
        this.Storage.getToken('token').then(function (token) {
            _this.service.Deletar(token, id).subscribe(function (data) {
                console.log(data);
                _this.alertService.presentToast("Serviço deletado com sucesso");
                _this.BuscarServicos();
            }, function (error) {
                console.log(error);
            });
        });
    };
    EditServicePage.prototype.BuscarServicos = function () {
        var _this = this;
        this.Storage.getToken('token').then(function (token) {
            _this.service.Mservice(token).subscribe(function (response) {
                _this.servicos = response;
            });
        });
    };
    EditServicePage = __decorate([
        core_1.Component({
            selector: 'app-edit-service',
            templateUrl: './edit-service.page.html',
            styleUrls: ['./edit-service.page.scss']
        })
    ], EditServicePage);
    return EditServicePage;
}());
exports.EditServicePage = EditServicePage;
