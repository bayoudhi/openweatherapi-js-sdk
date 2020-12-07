# openweatherapi-js-sdk

Ready-to-use javascript library to consume OpenWeatherMap.org free services.

Request a free api key on http://openweathermap.org/appid.

Typescript supported ✅

# Installation

Using npm:

```javascript
// using npm
npm install openweatherapi-js-sdk --save

// using yarn
yarn add openweatherapi-js-sdk

```

# How to Use

## Weather API

### Instantiation

Import **createWeatherAPI function** from the installed library, and create your api using your existing api key, if you don't have a key, request a free one on http://openweathermap.org/appid.

```javascript
const { createWeatherAPI } = require("openweatherapi-js-sdk");

const weatherAPI = createWeatherAPI("your_api_key");
```



### Get current weather by city name

```javascript
// Short example
weatherAPI
  .getWeatherByCityName({
    cityName: "London", // required
    units: "metric", // optional
  })
  .then((weather) => console.log("Weather object is", weather));

// Full example
weatherAPI
  .getWeatherByCityName({
    cityName: "London", // required
    stateCode: "uk", // optional
    countryCode: "GB", // optional
    lang: "fr", // optional
    units: "metric", // optional
  })
  .then((weather) => console.log("Weather object is", weather));
```

### Get current weather by city id

List of city ID 'city.list.json.gz' can be downloaded from this link http://bulk.openweathermap.org/sample.

```javascript
// Example
weatherAPI
  .getWeatherByCityId({
    cityId: 2172797, // required
    lang: "fr", // optional
    units: "metric", // optional
  })
  .then((weather) => console.log("Weather object is", weather));
```

### Get current weather by geographic coordinates

```javascript
// Example
weatherAPI
  .getWeatherByGeo({
    latitude: 37, // required
    longitude: 10, // required
    lang: "fr", // optional
    units: "metric", // optional
  })
  .then((weather) => console.log("Weather object is", weather));
```

### Get current weather by ZIP code

```javascript
// Example
weatherAPI
  .getWeatherByZipCode({
    zipCode: 94040, // required
    countryCode: "us", // optional
    lang: "fr", // optional
    units: "metric", // optional - standard, metric and imperial units are available.
  })
  .then((weather) => console.log("Weather object is", weather));
```

### Common Options

- **units** - Units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default. [Learn more](https://openweathermap.org/current#data)
- **lang** - You can use this parameter to get the output in your language. [Learn more](https://openweathermap.org/current#multi)

## Test

This package is tested using jest. You can find the tests in the /tests folder. This package is developed using the TDD approach.

Feel free 😊 to enhance it and to add more tests 🧪🧪🧪

# TODO
 Feel free to contribute to this library ❤️
 - Develop the new feature [One Call API](https://openweathermap.org/api/one-call-api)
 - Develop the  [5 day weather forecast API](https://openweathermap.org/forecast5)
 

 Thanks
