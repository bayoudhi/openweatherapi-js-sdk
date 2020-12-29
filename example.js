const { createForecastAPI } = require('./src/index');

// SET YOUR API KEY HERE
const API_KEY = '';

const forecastAPI = createForecastAPI(API_KEY);

forecastAPI.getForecastByCityName({
    cityName: 'Paris',
    units: 'metric',
    lang: 'fr'
}).then(result => console.log(result)).catch(error => console.error(error));