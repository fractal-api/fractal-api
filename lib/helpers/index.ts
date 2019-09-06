import { FractalToken } from "..";

export const createHeaders = (auth: FractalToken, key: string, partner: string) => {
    return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': key,
        'x-partner-id': partner,
        'Authorization': `${auth.tokenType} ${auth.accessToken}`
    };
};