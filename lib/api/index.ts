import { Fractalise } from "../fractal";
import { AxiosInstance } from "axios";
import Auth from "../auth";
import Bank from "../banking";
import Forecasts from "../forecast";
import Categories from "../categories";
import Company from "../company";

export default class Fractal implements Fractalise {
    apiKey: string;
    partner: string;
    constructor(apiKey: string, partner: string) {
        this.apiKey = apiKey;
        this.partner = partner;
    }

    banks(): Bank {
        return new Bank(this.apiKey, this.partner);
    }
    auth(): Auth {
        return new Auth(this.apiKey, this.partner);
    }
    company(): Company {
        return new Company(this.apiKey, this.partner);
    }
    categories(): Categories {
        return new Categories(this.apiKey, this.partner);
    }
    forecast(): Forecasts {
        return new Forecasts(this.apiKey, this.partner);
    }
}

export abstract class FractalApi {
    apiKey: string;
    partner: string;
    fractalAxios: AxiosInstance;

    constructor(apiKey: string, partner: string, axiosApi: AxiosInstance) {
        this.apiKey = apiKey;
        this.partner = partner;
        this.fractalAxios = axiosApi;
    }
}