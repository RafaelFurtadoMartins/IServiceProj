"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var AuthService = /** @class */ (function () {
    function AuthService(http, storage, env) {
        this.http = http;
        this.storage = storage;
        this.env = env;
        // baseUrl = 'http://127.0.0.1:8000/login'; //I added a '/' to the end
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(this.env.API_URL + 'auth/login', { email: email, password: password }).pipe(operators_1.tap(function (token) {
            _this.storage.setItem('token', token)
                .then(function () {
                console.log('Token Stored');
            }, function (error) { return console.error('Error storing item', error); });
            _this.token = token;
            _this.isLoggedIn = true;
            return token;
        }));
    };
    AuthService.prototype.register = function (fName, lName, email, password) {
        return this.http.post(this.env.API_URL + 'auth/register', { fName: fName, lName: lName, email: email, password: password });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var headers = new http_1.HttpHeaders({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
        });
        return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
            .pipe(operators_1.tap(function (data) {
            _this.storage.remove("token");
            _this.isLoggedIn = false;
            delete _this.token;
            return data;
        }));
    };
    AuthService.prototype.user = function () {
        var headers = new http_1.HttpHeaders({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
        });
        return this.http.get(this.env.API_URL + 'auth/user', { headers: headers })
            .pipe(operators_1.tap(function (user) {
            return user;
        }));
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        return this.storage.getItem('token').then(function (data) {
            _this.token = data;
            if (_this.token != null) {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        }, function (error) {
            _this.token = null;
            _this.isLoggedIn = false;
        });
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
