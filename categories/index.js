const axios = require('axios');
const config = require("../config").config
const apiHelper = require("../helper").helper

class CategoriesApi {
    constructor(apiKey, partner) {
        this.apiKey = apiKey;
        this.partner = partner;
        this.catAxios = axios.create({
            baseURL: config.categoriesUrl,
            timeout: 1000,
        })
    }

    getCategories(authToken) {
        return this.catAxios.get("/", { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }

    updateTransactionCategory(authToken, categorisedTrx) {
        return this.catAxios.put("/", categorisedTrx, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    getCategorisedTransactions(authToken, catId, companyId) {
        let url = `/${catId}/transactions`;
        if (companyId) {
            url = `${url}?companyId=${companyId}`;
        }
        return this.catAxios.get(url, { headers: apiHelper.createHeaders(authToken, this.apiKey, this.partner) });
    }
}

const createCategoriesApi = (apiKey, partner) => {
    return new CategoriesApi(apiKey, partner)
}

exports.categories = {
    createCategoriesApi
}