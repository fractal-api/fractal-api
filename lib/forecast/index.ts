import Axios from "axios";
import * as config from "../config";
import { createHeaders } from "../helpers";
import { FractalApi, FractalToken } from "..";

export default class Forecasts extends FractalApi {

    constructor(apiKey: string, partner: string) {
        super(apiKey, partner, Axios.create({
            baseURL: config.forecastsUrl,
            timeout: 1000,
        }));
    }

    getForecastedTransactions(authToken: FractalToken, companyId: number) {
        let url = `/`;
        if (companyId) {
            url = `${url}?companyId=${companyId}`;
        }
        return this.fractalAxios.get(url, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }
}