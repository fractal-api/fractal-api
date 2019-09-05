const apiDomain = "apis.fractal-dev.co.uk";

const bankUrl = `https://${apiDomain}/banking`;
const companyUrl = `https://${apiDomain}/companies`;
const forecastsUrl = `https://${apiDomain}/forecasts`;
const categoriesUrl = `https://${apiDomain}/categories`;
const authUrl = `https://${apiDomain}/token`;

exports.config = {
    apiDomain,
    bankUrl,
    companyUrl,
    forecastsUrl,
    categoriesUrl,
    authUrl
};
