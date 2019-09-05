import { FractalApi } from "..";
import Axios, { AxiosInstance } from "axios";
import * as config from "../config";
import { createHeaders } from "../helpers";

export default class BankApi implements FractalApi {
    apiKey: string;
    partner: string;
    bankAxios: AxiosInstance;

    constructor(apiKey: string, partner: string) {
        this.apiKey = apiKey;
        this.partner = partner;
        this.bankAxios = Axios.create({
            baseURL: config.bankUrl,
            timeout: 1000,
        })
    }

    connectBankAccount(authToken: string, bankId: number, cId: number, redirect: string) {
        let url = `/${bankId}/auth`;
        const body = { redirect, companyId: cId };
        return this.bankAxios.post(url, body, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }

    createConsent(authToken: string, bankId: number, code: string, idToken: string, state: string) {
        let url = `/${bankId}/consents`;
        const body = { code, id_token: idToken, state };
        return this.bankAxios.post(url, body, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }

    getConsents(authToken: string, bankId: number, cId: number) {
        let url = `/${bankId}/consents`;
        if (cId) {
            url = `${url}?companyId=${cId}`;
        }
        return this.bankAxios.get(url, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }

    getConsent(authToken: string, bankId: number, consentId: string) {
        let url = `/${bankId}/consents/${consentId}`;
        return this.bankAxios.get(url, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }

    deleteConsent(authToken: string, bankId: number, consentId: string) {
        let url = `/${bankId}/consents/${consentId}`;
        return this.bankAxios.delete(url, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }

    getAccounts(authToken: string, bankId: number, cId: number) {
        let url = `/${bankId}/accounts`;
        if (cId) {
            url = `${url}?companyId=${cId}`;
        }
        return this.bankAxios.get(url, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    getAccountsById(authToken: string, bankId: number, accountId: string, cId: number) {
        let url = `/${bankId}/accounts/${accountId}`;
        if (cId) {
            url = `${url}?companyId=${cId}`;
        }
        return this.bankAxios.get(url, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    getAccountTransactions(authToken: string, bankId: number, accountId: string, cId: number) {
        let url = `/${bankId}/accounts/${accountId}/transactions`;
        if (cId) {
            url = `${url}?companyId=${cId}`;
        }
        return this.bankAxios.get(url, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    getAccountBalances(authToken: string, bankId: number, accountId: string, cId: number) {
        let url = `/${bankId}/accounts/${accountId}/balances`;
        if (cId) {
            url = `${url}?companyId=${cId}`;
        }
        return this.bankAxios.get(url, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }
}