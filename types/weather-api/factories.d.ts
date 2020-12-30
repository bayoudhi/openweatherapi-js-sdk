export function getWeatherByCityName({ axios, endpoint, apiKey }: DefaultDependencies, { cityName, stateCode, countryCode, lang, units }: GetWeatherByCityNameOptions): Promise<any>;
export function getWeatherByCityId({ axios, endpoint, apiKey }: DefaultDependencies, { cityId, lang, units }: GetWeatherByCityIdOptions): Promise<any>;
export function getWeatherByGeo({ axios, endpoint, apiKey }: DefaultDependencies, { latitude, longitude, lang, units }: GetWeatherByGeoOptions): Promise<any>;
export function getWeatherByZipCode({ axios, endpoint, apiKey }: DefaultDependencies, { zipCode, countryCode, lang, units }: GetWeatherByZipCodeOptions): Promise<any>;
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
export type GetWeatherByCityNameOptions = {
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
export type GetWeatherByCityIdOptions = {
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
export type GetWeatherByGeoOptions = {
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
export type GetWeatherByZipCodeOptions = {
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
