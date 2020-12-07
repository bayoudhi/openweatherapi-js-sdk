const createAPI = require("./weather-api").createAPI;

module.exports = {
  /**
   * @type {Function}
   */
  createWeatherAPI: createAPI,
};