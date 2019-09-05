const axios = require('axios');
const config = require("../config").config
const apiHelper = require("../helper").helper

class CompanyApi {
    constructor(apiKey, partner) {
        this.apiKey = apiKey;
        this.partner = partner;
        this.compAxios = axios.create({
            baseURL: config.companyUrl,
            timeout: 1000,
        })
    }

    getCompanies = (authToken) => {
        return this.compAxios.get("/", { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    getCompanyById = (authToken, cId) => {
        return this.compAxios.get(`/${cId}`, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    createCompany = (authToken, company) => {
        return this.compAxios.post("/", company, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }
}

const createCompanyApi = (apiKey, partner) => {
    return new CompanyApi(apiKey, partner)
}

exports.company = {
    createCompanyApi
}