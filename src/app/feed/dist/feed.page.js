"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FeedPage = void 0;
var core_1 = require("@angular/core");
var FeedPage = /** @class */ (function () {
    function FeedPage(route, service) {
        this.route = route;
        this.service = service;
    }
    FeedPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll().subscribe(function (response) {
            _this.servicos = response;
        });
    };
    FeedPage.prototype.navigateService = function () {
        this.route.navigate(['/add-service']);
    };
    FeedPage.prototype.feed = function () {
        this.route.navigate(['/edit-service']);
    };
    FeedPage = __decorate([
        core_1.Component({
            selector: 'app-feed',
            templateUrl: './feed.page.html',
            styleUrls: ['./feed.page.scss']
        })
    ], FeedPage);
    return FeedPage;
}());
exports.FeedPage = FeedPage;
