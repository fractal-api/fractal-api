import Auth from "./auth";
import Bank from "./banking";
import Forecasts from "./forecast";
import Categories from "./categories";
import Company from "./company";

interface Fractalise {
    banks(): Bank;
    auth(): Auth;
    company(): Company;
    categories(): Categories;
    forecast(): Forecasts;
}

class Fractal implements Fractalise {
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

export const api = (apiKey: string, partner: string) : Fractal => {
    return new Fractal(apiKey, partner);
}

export interface CategorisedTrx {

}

export interface FractalCompany {
    
}

export interface FractalToken {
    accessToken: string;
    expires: Number;
    partnerId: string;
    partnerName: string;
    tokenType: string;
}