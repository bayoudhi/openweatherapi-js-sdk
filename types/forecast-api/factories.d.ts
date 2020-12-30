export function getForecastByCityName({ axios, endpoint, apiKey }: DefaultDependencies, { cityName, stateCode, countryCode, lang, units }: GetForecastByCityNameOptions): Promise<any>;
export function getForecastByCityId({ axios, endpoint, apiKey }: DefaultDependencies, { cityId, lang, units }: GetForecastByCityIdOptions): Promise<any>;
export function getForecastByGeo({ axios, endpoint, apiKey }: DefaultDependencies, { latitude, longitude, lang, units }: GetForecastByGeoOptions): Promise<any>;
export function getForecastByZipCode({ axios, endpoint, apiKey }: DefaultDependencies, { zipCode, countryCode, lang, units }: GetForecastByZipCodeOptions): Promise<any>;
export type DefaultDependencies = {
    /**
     * - Axios instance
     */
    axios: any;
    /**
     * - Endpoint
     */
    endpoint: string;
    /**
     * - API Key
     */
    apiKey: string;
};
export type GetForecastByCityNameOptions = {
    /**
     * - City name
     */
    cityName: string;
    /**
     * - State code
     */
    stateCode?: string | undefined;
    /**
     * - Country code
     */
    countryCode?: string | undefined;
    lang?: string | undefined;
    /**
     * - must one of 'standard', 'imperial' or 'metric'
     */
    units?: string | undefined;
};
export type GetForecastByCityIdOptions = {
    /**
     * - City ID List of city ID 'city.list.json.gz' can be downloaded here http://bulk.openweathermap.org/sample/.
     */
    cityId: number;
    lang?: string | undefined;
    /**
     * - must be one of 'standard', 'imperial' or 'metric'
     */
    units?: string | undefined;
};
export type GetForecastByGeoOptions = {
    /**
     * - Geographical coordinates (latitude, longitude)
     */
    latitude: number;
    /**
     * - Geographical coordinates (latitude, longitude)
     */
    longitude: number;
    lang?: string | undefined;
    /**
     * - must be one of 'standard', 'imperial' or 'metric'
     */
    units?: string | undefined;
};
export type GetForecastByZipCodeOptions = {
    /**
     * - Zip code
     */
    zipCode: number;
    /**
     * - Country code
     */
    countryCode?: string | undefined;
    lang?: string | undefined;
    /**
     * - must be one of 'standard', 'imperial' or 'metric'
     */
    units?: string | undefined;
};
