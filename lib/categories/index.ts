import { FractalApi, CategorisedTrx, FractalToken } from "..";
import Axios from "axios";
import * as config from "../config";
import { createHeaders } from "../helpers";

export default class CategoriesApi extends FractalApi {
    constructor(apiKey: string, partner: string) {
        super(apiKey, partner, Axios.create({
            baseURL: config.categoriesUrl,
            timeout: 1000,
        }));
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