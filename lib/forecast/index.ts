import Axios, { AxiosInstance } from "axios";
import * as config from "../config";
import { createHeaders } from "../helpers";
import { FractalToken } from "..";

export default class Forecasts {

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

    getForecastedTransactions(authToken: FractalToken, companyId: number) {
        let url = `/`;
        if (companyId) {
            url = `${url}?companyId=${companyId}`;
        }
        return this.fractalAxios.get(url, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }
}