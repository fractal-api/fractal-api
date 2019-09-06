import { FractalApi } from "..";
import Axios from "axios";
import * as config from "../config";

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