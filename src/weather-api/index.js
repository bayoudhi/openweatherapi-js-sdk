const axios = require("axios");
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
   * @param {Object} params - Params
   * @param {number} params.cityId - City ID List of city ID 'city.list.json.gz' can be downloaded here http://bulk.openweathermap.org/sample/.
   * @param {string=} params.lang
   * @param {string=} params.units - must be one of 'standard', 'imperial' or 'metric'
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
   * @param {Object} params - Params
   * @param {number} params.latitude - Geographical coordinates (latitude, longitude)
   * @param {number} params.longitude - Geographical coordinates (latitude, longitude)
   * @param {string=} params.lang
   * @param {string=} params.units - must be one of 'standard', 'imperial' or 'metric'
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
   * @param {Object} params - Params
   * @param {number} params.zipCode - Zip code
   * @param {string=} params.countryCode - Country code
   * @param {string=} params.lang
   * @param {string=} params.units - must be one of 'standard', 'imperial' or 'metric'
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
