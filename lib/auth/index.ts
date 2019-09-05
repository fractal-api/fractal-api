import { FractalApi } from "..";
import Axios, { AxiosInstance } from "axios";
import * as config from "../config";

export interface FractalToken {

}

export default class AuthApi implements FractalApi {
    apiKey: string;
    partner: string;
    defaultHeaders: object;
    authAxios: AxiosInstance;

    constructor(apiKey: string, partner: string) {
        this.apiKey = apiKey;
        this.partner = partner;
        this.defaultHeaders = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'x-partner-id': partner
        }
        this.authAxios = Axios.create({
            baseURL: config.authUrl,
            timeout: 1000,
            headers: this.defaultHeaders
        })
    }

    createToken() : FractalToken {
        return this.authAxios.post('/');
    }
}