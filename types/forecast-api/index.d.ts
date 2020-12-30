export function createAPI(apiKey: string): {
    /**
     * @function
     * @param {import("./factories").GetForecastByCityNameOptions} params - Params
     * @returns {Promise}
     */
    getForecastByCityName: (params: import("./factories").GetForecastByCityNameOptions) => Promise<any>;
    /**
     * @function
     * @param {import("./factories").GetForecastByCityIdOptions} params - Params
     * @returns {Promise}
     */
    getForecastByCityId: (params: import("./factories").GetForecastByCityIdOptions) => Promise<any>;
    /**
     * @function
     * @param {import("./factories").GetForecastByGeoOptions} params - Params
     * @returns {Promise}
     */
    getForecastByGeo: (params: import("./factories").GetForecastByGeoOptions) => Promise<any>;
    /**
     * @function
     * @param {import("./factories").GetForecastByZipCodeOptions} params - Params
     * @returns {Promise}
     */
    getForecastByZipCode: (params: import("./factories").GetForecastByZipCodeOptions) => Promise<any>;
};
