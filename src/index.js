const createWeatherAPI = require("./weather-api").createAPI;
const createForecastAPI = require('./forecast-api').createAPI;

module.exports = {
  /**
   * @type {Function}
   */
  createWeatherAPI,
  /**
   * @type {Function}
   */
  createForecastAPI
};