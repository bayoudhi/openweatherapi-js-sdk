export function getForecastByCityName({ axios, endpoint, apiKey }: any, { cityName, stateCode, countryCode, lang, units }: {
    cityName: string;
    stateCode?: string | undefined;
    countryCode?: string | undefined;
    lang?: string | undefined;
    units?: string | undefined;
}): Promise<any>;
export function getForecastByCityId({ axios, endpoint, apiKey }: any, { cityId, lang, units }: {
    cityId: number;
    lang?: string | undefined;
    units?: string | undefined;
}): Promise<any>;
export function getForecastByGeo({ axios, endpoint, apiKey }: any, { latitude, longitude, lang, units }: {
    latitude: number;
    longitude: number;
    lang?: string | undefined;
    units?: string | undefined;
}): Promise<any>;
export function getForecastByZipCode({ axios, endpoint, apiKey }: any, { zipCode, countryCode, lang, units }: {
    zipCode: number;
    countryCode?: string | undefined;
    lang?: string | undefined;
    units?: string | undefined;
}): Promise<any>;
