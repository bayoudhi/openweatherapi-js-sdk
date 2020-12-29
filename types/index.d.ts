export function createAPI(apiKey: any): {
    weather: {
        getWeatherByCityName: (params: {
            cityName: string;
            stateCode?: string;
            countryCode?: string;
            lang?: string;
            units?: string;
        }) => Promise<any>;
        getWeatherByCityId: (params: {
            cityId: number;
            lang?: string;
            units?: string;
        }) => Promise<any>;
        getWeatherByGeo: (params: {
            latitude: number;
            longitude: number;
            lang?: string;
            units?: string;
        }) => Promise<any>;
        getWeatherByZipCode: (params: {
            zipCode: number;
            countryCode?: string;
            lang?: string;
            units?: string;
        }) => Promise<any>;
    };
    forecast: {
        getForecastByCityName: (params: {
            cityName: string;
            stateCode?: string;
            countryCode?: string;
            lang?: string;
            units?: string;
        }) => Promise<any>;
        getForecastByCityId: (params: {
            cityId: number;
            lang?: string;
            units?: string;
        }) => Promise<any>;
        getForecastByGeo: (params: {
            latitude: number;
            longitude: number;
            lang?: string;
            units?: string;
        }) => Promise<any>;
        getForecastByZipCode: (params: {
            zipCode: number;
            countryCode?: string;
            lang?: string;
            units?: string;
        }) => Promise<any>;
    };
};
import createWeatherAPI_1 = require("./weather-api");
import createWeatherAPI = createWeatherAPI_1.createAPI;
import createForecastAPI_1 = require("./forecast-api");
import createForecastAPI = createForecastAPI_1.createAPI;
export { createWeatherAPI, createForecastAPI };
