export declare class FractalApi {
    apiKey: string;
    partner: string;
    constructor(apiKey: string, partner: string);
}
export declare class AuthApi extends FractalApi {
    apiKey: string;
    partner: string;
    defaultHeaders: object;
    authAxios: any;
    constructor(apiKey: string, partner: string);
    createToken(): any;
}
export declare function setup(apiKey: string, partner: string): FractalApi;
