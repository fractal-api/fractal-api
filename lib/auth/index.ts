import Axios, { AxiosInstance } from "axios";
import * as config from "../config";

export default class AuthApi {
    apiKey: string;
    partner: string;
    fractalAxios: AxiosInstance;
    constructor(apiKey: string, partner: string) {
        this.apiKey = apiKey;
        this.partner = partner; 
        this.fractalAxios = Axios.create({
            baseURL: config.authUrl,
            timeout: 1000,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'x-partner-id': partner
            }
        });
    }

    createToken() : Promise<any> {
        return this.fractalAxios.post("");
    }
}