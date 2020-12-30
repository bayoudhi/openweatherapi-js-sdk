const axios = require("axios");
const {
  getWeatherByCityName,
  getWeatherByCityId,
  getWeatherByGeo,
  getWeatherByZipCode,
} = require("./factories");

/**
 * @function createAPI
 * @param {string} apiKey - API KEY
 */
module.exports.createAPI = (apiKey) => ({
  /**
   * @function
   * @param {import("./factories").GetWeatherByCityNameOptions} params - Params
   * @returns {Promise}
   */
  getWeatherByCityName: (params) =>
    getWeatherByCityName(
      {
        axios,
        apiKey,
        endpoint: "https://api.openweathermap.org/data/2.5/weather",
      },
      params
    ),
  /**
   * @function
   * @param {import("./factories").GetWeatherByCityIdOptions} params - Params
   * @returns {Promise}
   */
  getWeatherByCityId: (params) =>
    getWeatherByCityId(
      {
        axios,
        apiKey,
        endpoint: "https://api.openweathermap.org/data/2.5/weather",
      },
      params
    ),
  /**
   * @function
   * @param {import("../forecast-api/factories").GetForecastByGeoOptions} params - Params
   * @returns {Promise}
   */
  getWeatherByGeo: (params) =>
    getWeatherByGeo(
      {
        axios,
        apiKey,
        endpoint: "https://api.openweathermap.org/data/2.5/weather",
      },
      params
    ),
  /**
   * @function
   * @param {import("./factories").GetWeatherByGeoOptions} params - Params
   * @returns {Promise}
   */
  getWeatherByZipCode: (params) =>
    getWeatherByZipCode(
      {
        axios,
        apiKey,
        endpoint: "https://api.openweathermap.org/data/2.5/weather",
      },
      params
    ),
});
