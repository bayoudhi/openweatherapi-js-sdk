export function getWeatherByCityName({ axios, endpoint, apiKey }: any, { cityName, stateCode, countryCode, lang, units }: {
    cityName: string;
    stateCode: string;
    countryCode: string;
    lang: string;
    units: string;
}): Promise<any>;
export function getWeatherByCityId({ axios, endpoint, apiKey }: any, { cityId, lang, units }: {
    cityId: number;
    lang: string;
    units: string;
}): Promise<any>;
export function getWeatherByGeo({ axios, endpoint, apiKey }: any, { latitude, longitude, lang, units }: {
    latitude: number;
    longitude: number;
    lang: string;
    units: string;
}): Promise<any>;
export function getWeatherByZipCode({ axios, endpoint, apiKey }: any, { zipCode, countryCode, lang, units }: {
    zipCode: number;
    countryCode: string;
    lang: string;
    units: string;
}): Promise<any>;
