/**
 * @typedef DefaultDependencies
 * @type {Object}
 * @property {Object} axios - Axios instance
 * @property {string} endpoint - Endpoint
 * @property {string} apiKey - API Key
 * 
 * @typedef GetForecastByCityNameOptions
 * @type {Object}
 * @property {string} cityName - City name
 * @property {string=} stateCode - State code
 * @property {string=} countryCode - Country code
 * @property {string=} lang
 * @property {string=} units - must one of 'standard', 'imperial' or 'metric'
 * 
 * @typedef GetForecastByCityIdOptions
 * @type {Object}
 * @property {number} cityId - City ID List of city ID 'city.list.json.gz' can be downloaded here http://bulk.openweathermap.org/sample/.
 * @property {string=} lang
 * @property {string=} units - must be one of 'standard', 'imperial' or 'metric'
 *
 * @typedef GetForecastByGeoOptions
 * @type {Object}
 * @property {number} latitude - Geographical coordinates (latitude, longitude)
 * @property {number} longitude - Geographical coordinates (latitude, longitude)
 * @property {string=} lang
 * @property {string=} units - must be one of 'standard', 'imperial' or 'metric'
 * 
 * @typedef GetForecastByZipCodeOptions
 * @type {Object}
 * @property {number} zipCode - Zip code
 * @property {string=} countryCode - Country code
 * @property {string=} lang
 * @property {string=} units - must be one of 'standard', 'imperial' or 'metric'
 */

/**
 * Get 5 day forecast by city name
 * @param {DefaultDependencies} deps - Dependencies
 * @param {GetForecastByCityNameOptions} params - Params
 */
module.exports.getForecastByCityName = async (
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
* Get 5 day forecast by city id
* @param {DefaultDependencies} deps - Dependencies
* @param {GetForecastByCityIdOptions} params - Params
*/
module.exports.getForecastByCityId = async (
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
 * Get 5 day forecast by geo
 * @param {DefaultDependencies} deps - Dependencies
 * @param {GetForecastByGeoOptions} params - Params
 */
module.exports.getForecastByGeo = async (
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
 * Get 5 day forecast by zip code
 * @param {DefaultDependencies} deps - Dependencies
 * @param {GetForecastByZipCodeOptions} params - Params
 */
module.exports.getForecastByZipCode = async (
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
