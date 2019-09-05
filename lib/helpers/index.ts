export const createHeaders = (auth: string, key: string, partner: string) => {
    return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': key,
        'x-partner-id': partner,
        'Authorization': `Bearer ${auth}`
    }
}