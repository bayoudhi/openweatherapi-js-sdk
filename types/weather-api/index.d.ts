export function createAPI(apiKey: string): {
    getWeatherByCityName: (params: any) => Promise<any>;
    getWeatherByCityId: (params: any) => Promise<any>;
    /**
     * @param {Object} params Params
     * @param {number} params.latitude Geographical coordinates (latitude, longitude)
     * @param {number} params.longitude Geographical coordinates (latitude, longitude)
     * @param {string} params.lang
     * @param {string} params.units must one of 'standard', 'imperial' or 'metric'
     * @returns {Promise}
     */
    getWeatherByGeo: (params: {
        latitude: number;
        longitude: number;
        lang: string;
        units: string;
    }) => Promise<any>;
    /**
     * @param {Object} params Params
     * @param {number} params.zipCode Zip code
     * @param {string} params.countryCode Country code
     * @param {string} params.lang
     * @param {string} params.units must one of 'standard', 'imperial' or 'metric'
     * @returns {Promise}
     */
    getWeatherByZipCode: (params: {
        zipCode: number;
        countryCode: string;
        lang: string;
        units: string;
    }) => Promise<any>;
};
