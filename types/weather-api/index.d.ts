export function createAPI(apiKey: string): {
    /**
     * @function
     * @param {import("./factories").GetWeatherByCityNameOptions} params - Params
     * @returns {Promise}
     */
    getWeatherByCityName: (params: import("./factories").GetWeatherByCityNameOptions) => Promise<any>;
    /**
     * @function
     * @param {import("./factories").GetWeatherByCityIdOptions} params - Params
     * @returns {Promise}
     */
    getWeatherByCityId: (params: import("./factories").GetWeatherByCityIdOptions) => Promise<any>;
    /**
     * @function
     * @param {import("../forecast-api/factories").GetForecastByGeoOptions} params - Params
     * @returns {Promise}
     */
    getWeatherByGeo: (params: import("../forecast-api/factories").GetForecastByGeoOptions) => Promise<any>;
    /**
     * @function
     * @param {import("./factories").GetWeatherByGeoOptions} params - Params
     * @returns {Promise}
     */
    getWeatherByZipCode: (params: import("./factories").GetWeatherByGeoOptions) => Promise<any>;
};
