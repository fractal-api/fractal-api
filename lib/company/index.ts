import { FractalApi } from "../api";
import Axios from "axios";
import * as config from "../config";
import { FractalToken } from "../auth";
import { createHeaders } from "../helpers";

export default class CompanyApi extends FractalApi {

    constructor(apiKey: string, partner: string) {
        super(apiKey, partner, Axios.create({
            baseURL: config.companyUrl,
            timeout: 1000,
        }));
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

export interface FractalCompany {
    
}
