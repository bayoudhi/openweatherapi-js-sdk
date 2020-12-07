/**
 * Get weather by city name
 * @param {Object} deps Dependencies
 * @param {Object} params Params
 * @param {string} params.cityName City name
 * @param {string} params.stateCode State code
 * @param {string} params.countryCode Country code
 * @param {string} params.lang
 * @param {string} params.units must one of 'standard', 'imperial' or 'metric'
 */
module.exports.getWeatherByCityName = async (
  { axios, endpoint, apiKey },
  { cityName, stateCode, countryCode, lang, units }
) => {
  if (!cityName) {
    throw new Error("cityName is missing");
  }
  const result = await axios({
    url: endpoint,
    params: {
      q: [cityName, stateCode, countryCode].filter((item) => item).join(","),
      appid: apiKey,
      lang,
      units,
    },
  });
  return result.data;
};

/**
 * Get weather by city id
 * @param {Object} deps Dependencies
 * @param {Object} params Params
 * @param {number} params.cityId City ID List of city ID 'city.list.json.gz' can be downloaded here http://bulk.openweathermap.org/sample/.
 * @param {string} params.lang
 * @param {string} params.units must one of 'standard', 'imperial' or 'metric'
 */
module.exports.getWeatherByCityId = async (
  { axios, endpoint, apiKey },
  { cityId, lang, units }
) => {
  if (!cityId) {
    throw new Error("cityId is missing");
  }
  const result = await axios({
    url: endpoint,
    params: {
      id: cityId,
      appid: apiKey,
      lang,
      units,
    },
  });
  return result.data;
};

/**
 * Get weather by geo
 * @param {Object} deps Dependencies
 * @param {Object} params Params
 * @param {number} params.latitude Geographical coordinates (latitude, longitude)
 * @param {number} params.longitude Geographical coordinates (latitude, longitude)
 * @param {string} params.lang
 * @param {string} params.units must one of 'standard', 'imperial' or 'metric'
 */
module.exports.getWeatherByGeo = async (
  { axios, endpoint, apiKey },
  { latitude, longitude, lang, units }
) => {
  if (!latitude) {
    throw new Error("latitude is missing");
  }
  if (!longitude) {
    throw new Error("longitude is missing");
  }
  const result = await axios({
    url: endpoint,
    params: {
      lat: latitude,
      lon: longitude,
      appid: apiKey,
      lang,
      units,
    },
  });
  return result.data;
};

/**
 * Get weather by zip code
 * @param {Object} deps Dependencies
 * @param {Object} params Params
 * @param {number} params.zipCode Zip code
 * @param {string} params.countryCode Country code
 * @param {string} params.lang
 * @param {string} params.units must one of 'standard', 'imperial' or 'metric'
 */
module.exports.getWeatherByZipCode = async (
  { axios, endpoint, apiKey },
  { zipCode, countryCode, lang, units }
) => {
  if (!zipCode) {
    throw new Error("zipCode is missing");
  }
  const result = await axios({
    url: endpoint,
    params: {
      zip: [zipCode, countryCode].filter((item) => item).join(","),
      appid: apiKey,
      lang,
      units,
    },
  });
  return result.data;
};
