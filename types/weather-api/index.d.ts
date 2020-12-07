export function createAPI(apiKey: string): {
    /**
     * @function
     * @param {Object} params - Params
     * @param {string} params.cityName - City name
     * @param {string=} params.stateCode - State code
     * @param {string=} params.countryCode - Country code
     * @param {string=} params.lang
     * @param {string=} params.units - must be one of 'standard', 'imperial' or 'metric'
     * @returns {Promise}
     */
    getWeatherByCityName: (params: {
        cityName: string;
        stateCode?: string | undefined;
        countryCode?: string | undefined;
        lang?: string | undefined;
        units?: string | undefined;
    }) => Promise<any>;
    /**
     * @function
     * @param {Object} params - Params
     * @param {number} params.cityId - City ID List of city ID 'city.list.json.gz' can be downloaded here http://bulk.openweathermap.org/sample/.
     * @param {string=} params.lang
     * @param {string=} params.units - must be one of 'standard', 'imperial' or 'metric'
     * @returns {Promise}
     */
    getWeatherByCityId: (params: {
        cityId: number;
        lang?: string | undefined;
        units?: string | undefined;
    }) => Promise<any>;
    /**
     * @function
     * @param {Object} params - Params
     * @param {number} params.latitude - Geographical coordinates (latitude, longitude)
     * @param {number} params.longitude - Geographical coordinates (latitude, longitude)
     * @param {string=} params.lang
     * @param {string=} params.units - must be one of 'standard', 'imperial' or 'metric'
     * @returns {Promise}
     */
    getWeatherByGeo: (params: {
        latitude: number;
        longitude: number;
        lang?: string | undefined;
        units?: string | undefined;
    }) => Promise<any>;
    /**
     * @function
     * @param {Object} params - Params
     * @param {number} params.zipCode - Zip code
     * @param {string=} params.countryCode - Country code
     * @param {string=} params.lang
     * @param {string=} params.units - must be one of 'standard', 'imperial' or 'metric'
     * @returns {Promise}
     */
    getWeatherByZipCode: (params: {
        zipCode: number;
        countryCode?: string | undefined;
        lang?: string | undefined;
        units?: string | undefined;
    }) => Promise<any>;
};
