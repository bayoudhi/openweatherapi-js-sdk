const axios = require("axios");
const partial = require("ramda").partial;
const {
  getWeatherByCityName,
  getWeatherByCityId,
  getWeatherByGeo,
  getWeatherByZipCode,
} = require("./factories");

const createAPI = (apiKey) => ({
  getWeatherByCityName: partial(getWeatherByCityName, [
    {
      axios,
      apiKey,
      endpoint: "https://api.openweathermap.org/data/2.5/weather",
    },
  ]),
  getWeatherByCityId: partial(getWeatherByCityId, [
    {
      axios,
      apiKey,
      endpoint: "https://api.openweathermap.org/data/2.5/weather",
    },
  ]),
  getWeatherByGeo: partial(getWeatherByGeo, [
    {
      axios,
      apiKey,
      endpoint: "https://api.openweathermap.org/data/2.5/weather",
    },
  ]),
  getWeatherByZipCode: partial(getWeatherByZipCode, [
    {
      axios,
      apiKey,
      endpoint: "https://api.openweathermap.org/data/2.5/weather",
    },
  ]),
});

module.exports = createAPI;

module.exports.default = createAPI;
