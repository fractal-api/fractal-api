const bankApi = require("./banking").banking;
const compApi = require("./company").company;
const authApi =require("./auth").auth;

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