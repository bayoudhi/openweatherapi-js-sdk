export function createAPI(apiKey: any): {
    weather: {
        getWeatherByCityName: (params: import("./weather-api/factories").GetWeatherByCityNameOptions) => Promise<any>;
        getWeatherByCityId: (params: import("./weather-api/factories").GetWeatherByCityIdOptions) => Promise<any>;
        getWeatherByGeo: (params: import("./forecast-api/factories").GetForecastByGeoOptions) => Promise<any>;
        getWeatherByZipCode: (params: import("./weather-api/factories").GetWeatherByGeoOptions) => Promise<any>;
    };
    forecast: {
        getForecastByCityName: (params: import("./forecast-api/factories").GetForecastByCityNameOptions) => Promise<any>;
        getForecastByCityId: (params: import("./forecast-api/factories").GetForecastByCityIdOptions) => Promise<any>;
        getForecastByGeo: (params: import("./forecast-api/factories").GetForecastByGeoOptions) => Promise<any>;
        getForecastByZipCode: (params: import("./forecast-api/factories").GetForecastByZipCodeOptions) => Promise<any>;
    };
};
import createWeatherAPI_1 = require("./weather-api");
import createWeatherAPI = createWeatherAPI_1.createAPI;
import createForecastAPI_1 = require("./forecast-api");
import createForecastAPI = createForecastAPI_1.createAPI;
export { createWeatherAPI, createForecastAPI };
