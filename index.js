const bankApi = require("./api/banking").banking;
const compApi = require("./api/company").company;
const authApi =require("./api/auth").auth;

const FractalBank = (apiKey, partner) => {
    return bankApi.createBankApi(apiKey, partner)
}

const FractalAuth = (apiKey, partner) => {
    return authApi.createAuthApi(apiKey, partner)
}

const FractalCompany = (apiKey, partner) => {
    return compApi.createCompanyApi(apiKey, partner)
}

exports.api = {
    FractalBank,
    FractalAuth,
    FractalCompany
}