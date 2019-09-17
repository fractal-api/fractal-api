import Axios, { AxiosInstance } from "axios";
import * as config from "../config";
import { createHeaders } from "../helpers";
import { FractalToken } from "..";

export default class Bank {
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

    connectBankAccount = (authToken: FractalToken, bankId: number, cId: number, redirect: string) : Promise<any> => {
        let url = `/${bankId}/auth`;
        const body = { redirect, companyId: cId };
        return this.fractalAxios.post(url, body, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }

    createConsent = (authToken: FractalToken, bankId: number, code: string, idToken: string, state: string) => {
        let url = `/${bankId}/consents`;
        const body = { code, id_token: idToken, state };
        return this.fractalAxios.post(url, body, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }

    getConsents = (authToken: FractalToken, bankId: number, cId?: number) : Promise<any> => {
        let url = `/${bankId}/consents`;
        if (cId) {
            url = `${url}?companyId=${cId}`;
        }
        return this.fractalAxios.get(url, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }

    getConsent = (authToken: FractalToken, bankId: number, consentId: string) : Promise<any> => {
        let url = `/${bankId}/consents/${consentId}`;
        return this.fractalAxios.get(url, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }

    deleteConsent = (authToken: FractalToken, bankId: number, consentId: string) : Promise<any> => {
        let url = `/${bankId}/consents/${consentId}`;
        return this.fractalAxios.delete(url, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }

    getAccounts = (authToken: FractalToken, bankId: number, cId?: number) : Promise<any> => {
        let url = `/${bankId}/accounts`;
        if (cId) {
            url = `${url}?companyId=${cId}`;
        }
        return this.fractalAxios.get(url, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    getAccountsById = (authToken: FractalToken, bankId: number, accountId: string, cId?: number) : Promise<any> => {
        let url = `/${bankId}/accounts/${accountId}`;
        if (cId) {
            url = `${url}?companyId=${cId}`;
        }
        return this.fractalAxios.get(url, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    getAccountTransactions = (authToken: FractalToken, bankId: number, accountId: string, cId?: number) : Promise<any> => {
        let url = `/${bankId}/accounts/${accountId}/transactions`;
        if (cId) {
            url = `${url}?companyId=${cId}`;
        }
        return this.fractalAxios.get(url, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    getAccountBalances = (authToken: FractalToken, bankId: number, accountId: string, cId?: number) : Promise<any> => {
        let url = `/${bankId}/accounts/${accountId}/balances`;
        if (cId) {
            url = `${url}?companyId=${cId}`;
        }
        return this.fractalAxios.get(url, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }
}