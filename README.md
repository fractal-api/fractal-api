# FRACTAL API NODE SDK

## Installation

NPM:

```npm install fractalise --save```

YARN:

```yarn add fractalise```

## Usage

Obtain Access Token:
```
const fractalApi = fractalise.api(<API_KEY>, <PARTNER_ID>);
const authApi = fractalApi.auth();
authApi.createToken().then(resp => {
    return resp.data;
});
```

Pass token into other APIs to call endpoints:
```
const fractalApi = fractalise.api("HI", "hsafci");
const bankApi = fractalApi.banks();
bankApi.getAccountTransactions({ authToken }, <bank_id>, <account_id>).then();
```

## Developers

To obtain an API key and Partner ID, please sign up to the Fractal Developer platform:

https://developer.askfractal.com