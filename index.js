const bankApi = require("./banking").banking;
const compApi = require("./company").company;
const authApi =require("./auth").auth;
const forecastApi =require("./forecasts").forecast;
const catApi =require("./categories").categories;

class FractalApi {
    constructor(apiKey, partner) {
        this.apiKey = apiKey;
        this.partner = partner;
    }

    auth = () => {
        return authApi.createAuthApi(this.apiKey, this.partner);
    }

    banking = () => {
        return bankApi.createBankApi(this.apiKey, this.partner);
    }

    company = () => {
        return compApi.createCompanyApi(this.apiKey, this.partner);
    }

    forecast = () => {
        return forecastApi.createForecastApi(this.apiKey, this.partner); 
    }

    categories = () => {
        return catApi.createCategoriesApi(this.apiKey, this.partner);
    }
}

const Fractal = (apiKey, partner) => {
    return new FractalApi(apiKey, partner);
}

const FractalBank = (apiKey, partner) => {
    return bankApi.createBankApi(apiKey, partner);
}

const FractalAuth = (apiKey, partner) => {
    return authApi.createAuthApi(apiKey, partner);
}

const FractalCompany = (apiKey, partner) => {
    return compApi.createCompanyApi(apiKey, partner);
}

const FractalForecast = (apiKey, partner) => {
    return forecastApi.createForecastApi(apiKey, partner);
}

const FractalCategories = (apiKey, partner) => {
    return catApi.createCategoriesApi(apiKey, partner);
}

exports.api = {
    Fractal,
    FractalBank,
    FractalAuth,
    FractalCompany,
    FractalForecast,
    FractalCategories
}