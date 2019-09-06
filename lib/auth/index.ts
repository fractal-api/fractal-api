import { FractalApi } from "../api";
import Axios from "axios";
import * as config from "../config";

export interface FractalToken {
    accessToken: string;
    expires: Date;
    partnerId: string;
    parnterName: string;
    tokenType: string;
}

export default class AuthApi extends FractalApi {

    constructor(apiKey: string, partner: string) {
        super(apiKey, partner, Axios.create({
            baseURL: config.authUrl,
            timeout: 1000,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'x-partner-id': partner
            }
        }));
    }

    createToken() : Promise<any> {
        return this.fractalAxios.post('/');
    }
}