const axios = require("axios");
const {
  getForecastByCityName,
  getForecastByCityId,
  getForecastByGeo,
  getForecastByZipCode
} = require("./factories");

/**
 * createAPI
 * @param {string} apiKey API KEY
 */
module.exports.createAPI = (apiKey) => ({
  /**
   * @function
   * @param {import("./factories").GetForecastByCityNameOptions} params - Params
   * @returns {Promise}
   */
  getForecastByCityName: (params) =>
    getForecastByCityName(
      {
        axios,
        apiKey,
        endpoint: "https://api.openweathermap.org/data/2.5/forecast",
      },
      params
    ),
  /**
   * @function
   * @param {import("./factories").GetForecastByCityIdOptions} params - Params   
   * @returns {Promise}
   */
  getForecastByCityId: (params) =>
    getForecastByCityId(
      {
        axios,
        apiKey,
        endpoint: "https://api.openweathermap.org/data/2.5/forecast",
      },
      params
    ),
  /**
   * @function
   * @param {import("./factories").GetForecastByGeoOptions} params - Params   
   * @returns {Promise}
   */
  getForecastByGeo: (params) =>
    getForecastByGeo(
      {
        axios,
        apiKey,
        endpoint: "https://api.openweathermap.org/data/2.5/weather",
      },
      params
    ),
  /**
   * @function
   * @param {import("./factories").GetForecastByZipCodeOptions} params - Params
   * @returns {Promise}
   */
  getForecastByZipCode: (params) =>
    getForecastByZipCode(
      {
        axios,
        apiKey,
        endpoint: "https://api.openweathermap.org/data/2.5/weather",
      },
      params
    ),
});
