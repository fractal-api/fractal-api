const axios = require('axios');
const config = require("../config").config
const apiHelper = require("../helper").helper

class ForecastsApi {
    constructor(apiKey, partner) {
        this.apiKey = apiKey;
        this.partner = partner;
        this.fcastAxios = axios.create({
            baseURL: config.forecastsUrl,
            timeout: 1000,
        })
    }

    getForecastedTransactions(authToken, companyId) {
        let url = `/`;
        if (companyId) {
            url = `${url}?companyId=${companyId}`;
        }
        return this.fcastAxios.get(url, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }
}

const createForecastApi = (apiKey, partner) => {
    return new ForecastsApi(apiKey, partner)
}

exports.forecast = {
    createForecastApi
}