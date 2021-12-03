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
    // usuario: any = JSON.parse(this.authService.getToken())
    function AddServicePage(fb, Storage, alertService, authService, addService, route, router, servico, servicoservice, navCtrl) {
        this.fb = fb;
        this.Storage = Storage;
        this.alertService = alertService;
        this.authService = authService;
        this.addService = addService;
        this.route = route;
        this.router = router;
        this.servico = servico;
        this.servicoservice = servicoservice;
        this.navCtrl = navCtrl;
    }
    AddServicePage.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (response) {
            _this.createForm();
            if (response.hasOwnProperty('id')) {
                _this.Storage.getToken('token').then(function (token) {
                    _this.servico.show(response['id'], token).subscribe(function (responda) {
                        console.log(responda);
                        _this.createForm(responda);
                    });
                });
            }
        });
    };
    AddServicePage.prototype.cadastroServico = function () {
        var _this = this;
        this.Storage.getToken('token').then(function (token) {
            _this.addService.registerServico(_this.formulario.value, token).subscribe(function (data) {
                console.log(data);
                _this.alertService.presentToast("Serviço salvo com sucesso");
                return _this.navCtrl.navigateRoot('/feed');
            }, function (error) {
                console.log(error);
            });
        });
    };
    AddServicePage.prototype.createForm = function (data) {
        this.formulario = this.fb.group({
            id: data ? data.id : '',
            titulo: data ? data.titulo : '',
            descricao: data ? data.descricao : '',
            categoria: data ? data.categoria : '',
            subCategoria: data ? data.subcategoria : '',
            cidade: data ? data.Cidade_estado : ''
        });
    };
    AddServicePage.prototype.atualizarServico = function () {
        var _this = this;
        this.Storage.getToken('token').then(function (token) {
            _this.servicoservice.Atualizar(token, _this.formulario.value).subscribe(function (data) {
                console.log(data);
                _this.alertService.presentToast("Serviço salvo com sucesso");
                return _this.navCtrl.navigateRoot('/feed');
            }, function (error) {
                console.log(error);
            });
        });
    };
    AddServicePage.prototype.salvarDados = function () {
        return this.formulario.value.id ? this.atualizarServico() : this.cadastroServico();
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
