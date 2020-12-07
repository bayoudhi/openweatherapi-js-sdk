const axios = require("axios");
const partial = require("ramda").partial;
const {
  getWeatherByCityName,
  getWeatherByCityId,
  getWeatherByGeo,
  getWeatherByZipCode,
} = require("./factories");

/**
 * createAPI
 * @param {string} apiKey API KEY
 */
module.exports.createAPI = (apiKey) => ({
  getWeatherByCityName: (params) =>
    getWeatherByCityName(
      {
        axios,
        apiKey,
        endpoint: "https://api.openweathermap.org/data/2.5/weather",
      },
      params
    ),
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
   * @param {Object} params Params
   * @param {number} params.latitude Geographical coordinates (latitude, longitude)
   * @param {number} params.longitude Geographical coordinates (latitude, longitude)
   * @param {string} params.lang
   * @param {string} params.units must one of 'standard', 'imperial' or 'metric'
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
   * @param {Object} params Params
   * @param {number} params.zipCode Zip code
   * @param {string} params.countryCode Country code
   * @param {string} params.lang
   * @param {string} params.units must one of 'standard', 'imperial' or 'metric'
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
