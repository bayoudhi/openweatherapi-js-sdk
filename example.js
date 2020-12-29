const { createAPI } = require('./src/index');

// SET YOUR API KEY HERE
const API_KEY = '';

const api = createAPI(API_KEY);



api.forecast.getForecastByCityName({
    cityName: 'Paris',
    units: 'metric',
    lang: 'fr'
}).then(result => console.log(result)).catch(error => console.error(error));

