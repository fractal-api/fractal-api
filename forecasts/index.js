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

    getForecastedTransactions(authToken) {
        return this.fcastAxios.get("/", { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }
}

const createForecastApi = (apiKey, partner) => {
    return new ForecastsApi(apiKey, partner)
}

exports.forecast = {
    createForecastApi
}