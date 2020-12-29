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
   * @param {Object} params - Params
   * @param {string} params.cityName - City name
   * @param {string=} params.stateCode - State code
   * @param {string=} params.countryCode - Country code
   * @param {string=} params.lang
   * @param {string=} params.units - must be one of 'standard', 'imperial' or 'metric'
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
   * @param {Object} params - Params
   * @param {number} params.cityId - City ID List of city ID 'city.list.json.gz' can be downloaded here http://bulk.openweathermap.org/sample/.
   * @param {string=} params.lang
   * @param {string=} params.units - must be one of 'standard', 'imperial' or 'metric'
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
   * @param {Object} params - Params
   * @param {number} params.latitude - Geographical coordinates (latitude, longitude)
   * @param {number} params.longitude - Geographical coordinates (latitude, longitude)
   * @param {string=} params.lang
   * @param {string=} params.units - must be one of 'standard', 'imperial' or 'metric'
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
   * @param {Object} params - Params
   * @param {number} params.zipCode - Zip code
   * @param {string=} params.countryCode - Country code
   * @param {string=} params.lang
   * @param {string=} params.units - must be one of 'standard', 'imperial' or 'metric'
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
