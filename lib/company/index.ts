import { FractalCompany, FractalToken } from "..";
import Axios, { AxiosInstance } from "axios";
import * as config from "../config";
import { createHeaders } from "../helpers";

export default class CompanyApi {

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

    getCompanies = (authToken: FractalToken) : Promise<any> => {
        return this.fractalAxios.get("/", { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    getCompanyById = (authToken: FractalToken, cId: number) : Promise<any> => {
        return this.fractalAxios.get(`/${cId}`, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }
    
    createCompany = (authToken: FractalToken, company: FractalCompany) : Promise<any> => {
        return this.fractalAxios.post("/", company, { headers: createHeaders(authToken, this.apiKey, this.partner) });
    }
}
