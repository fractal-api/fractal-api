import { CategorisedTrx, FractalToken } from "..";
import Axios, { AxiosInstance } from "axios";
import * as config from "../config";
import { createHeaders } from "../helpers";

export default class CategoriesApi {
    apiKey: string;
    partner: string;
    fractalAxios: AxiosInstance;
    constructor(apiKey: string, partner: string) {
        this.apiKey = apiKey;
        this.partner = partner;
        this.fractalAxios = Axios.create({
            baseURL: config.bankUrl,
            timeout: 1000,
        });
    }

    getCategories(authToken: FractalToken) : Promise<any> {
        return this.fractalAxios.get("/", { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }

    updateTransactionCategory(authToken: FractalToken, categorisedTrx: CategorisedTrx) : Promise<any> {
        return this.fractalAxios.put("/", categorisedTrx, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    getCategorisedTransactions(authToken: FractalToken, catId: string, companyId: number) : Promise<any> {
        let url = `/${catId}/transactions`;
        if (companyId) {
            url = `${url}?companyId=${companyId}`;
        }
        return this.fractalAxios.get(url, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }
}