"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var config = require("./config");
var FractalApi = /** @class */ (function () {
    function FractalApi(apiKey, partner) {
        this.apiKey = apiKey;
        this.partner = partner;
    }
    return FractalApi;
}());
exports.FractalApi = FractalApi;
var AuthApi = /** @class */ (function (_super) {
    __extends(AuthApi, _super);
    function AuthApi(apiKey, partner) {
        var _this = _super.call(this, apiKey, partner) || this;
        _this.apiKey = apiKey;
        _this.partner = partner;
        _this.defaultHeaders = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'x-partner-id': partner
        };
        _this.authAxios = axios_1.default.create({
            baseURL: config.authUrl,
            timeout: 1000,
            headers: _this.defaultHeaders
        });
        return _this;
    }
    AuthApi.prototype.createToken = function () {
        return this.authAxios.post('/');
    };
    return AuthApi;
}(FractalApi));
exports.AuthApi = AuthApi;
function setup(apiKey, partner) {
    return new FractalApi(apiKey, partner);
}
exports.setup = setup;
// export function banks (apiKey: string, partner: string) : object {
//     return bankApi.createBankApi(apiKey, partner);
// }
// export function auth (apiKey: string, partner: string) : AuthApi {
//     return new AuthApi(apiKey, partner);
// }
// export function companies (apiKey: string, partner: string) : object {
//     return compApi.createCompanyApi(apiKey, partner);
// }
// export function forecasts (apiKey: string, partner: string) : object {
//     return forecastApi.createForecastApi(apiKey, partner);
// }
// export function categories (apiKey: string, partner: string) : object {
//     return catApi.createCategoriesApi(apiKey, partner);
// }
