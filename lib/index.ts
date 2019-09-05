import AuthApi from "./auth";
import BankApi from "./banking";

export interface FractalApi {
    apiKey: string;
    partner: string;
}

export function banks (apiKey: string, partner: string) : object {
    return new BankApi(apiKey, partner);
}

export function auth (apiKey: string, partner: string) : AuthApi {
    return new AuthApi(apiKey, partner);
}

// export function companies (apiKey: string, partner: string) : object {
//     return compApi.createCompanyApi(apiKey, partner);
// }

// export function forecasts (apiKey: string, partner: string) : object {
//     return forecastApi.createForecastApi(apiKey, partner);
// }

// export function categories (apiKey: string, partner: string) : object {
//     return catApi.createCategoriesApi(apiKey, partner);
// }
