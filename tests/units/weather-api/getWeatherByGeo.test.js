const { getWeatherByGeo } = require("../../../src/weather-api/factories");

it('should reject "latitude is missing", when latitude is not passsed', async () => {
  const expectedResult = new Error("latitude is missing");
  await expect(getWeatherByGeo({}, {})).rejects.toEqual(expectedResult);
});
it('should reject "longitude is missing", when longitude is not passsed', async () => {
  const expectedResult = new Error("longitude is missing");
  await expect(getWeatherByGeo({}, { latitude: 37 })).rejects.toEqual(
    expectedResult
  );
});

describe("getWeatherByGeo({axios,endpoint,apiKey},{latitude,longitude})", () => {
  describe("when latitude equals 37 and longitude equals 10", () => {
    const latitude = 37;
    const longitude = 10;
    describe('when endpoint equals "https://api.openweathermap.org/data/2.5/weather"', () => {
      const endpoint = "api.openweathermap.org/data/2.5/weather";
      describe("when apiKey equals key007", () => {
        const apiKey = "key007";
        describe("when axios rejects", () => {
          let axios;
          const axiosResponse = new Error("Something wrong");
          beforeEach(() => {
            axios = jest.fn().mockRejectedValue(axiosResponse);
          });
          describe("getWeatherByGeo({axios,endpoint,apiKey},{latitude})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getWeatherByGeo(
                  { axios, endpoint, apiKey },
                  { latitude, longitude }
                );
              } catch (e) {
                result = e;
              }
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  lat: latitude,
                  lon: longitude,
                  appid: apiKey,
                },
              });
            });
            it("should reject", () => {
              expect(result).toEqual(expectedResult);
            });
          });
        });
        describe("when axios resolves", () => {
          let axios;
          const axiosResponse = {
            data: {
              timezone: 0,
              id: 2643743,
              name: "2172797",
              cod: 200,
            },
          };
          beforeEach(() => {
            axios = jest.fn().mockResolvedValue(axiosResponse);
          });
          describe("getWeatherByGeo({axios,endpoint,apiKey},{latitude})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getWeatherByGeo(
                  { axios, endpoint, apiKey },
                  { latitude, longitude }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  lat: latitude,
                  lon: longitude,
                  appid: apiKey,
                },
              });
            });
            it("should resolve", () => {
              expect(result).toEqual(expectedResult);
            });
          });
        });
      });
    });
  });
});

describe("getWeatherByGeo({axios,endpoint,apiKey},{latitude,longitude,lang})", () => {
  describe("when latitude equals 37 and longitude equals 10", () => {
    const latitude = 37;
    const longitude = 10;
    const lang = "fr";
    describe('when endpoint equals "https://api.openweathermap.org/data/2.5/weather"', () => {
      const endpoint = "api.openweathermap.org/data/2.5/weather";
      describe("when apiKey equals key007", () => {
        const apiKey = "key007";
        describe("when axios rejects", () => {
          let axios;
          const axiosResponse = new Error("Something wrong");
          beforeEach(() => {
            axios = jest.fn().mockRejectedValue(axiosResponse);
          });
          describe("getWeatherByGeo({axios,endpoint,apiKey},{latitude})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getWeatherByGeo(
                  { axios, endpoint, apiKey },
                  { latitude, longitude, lang }
                );
              } catch (e) {
                result = e;
              }
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  lat: latitude,
                  lon: longitude,
                  appid: apiKey,
                  lang,
                },
              });
            });
            it("should reject", () => {
              expect(result).toEqual(expectedResult);
            });
          });
        });
        describe("when axios resolves", () => {
          let axios;
          const axiosResponse = {
            data: {
              timezone: 0,
              id: 2643743,
              name: "2172797",
              cod: 200,
            },
          };
          beforeEach(() => {
            axios = jest.fn().mockResolvedValue(axiosResponse);
          });
          describe("getWeatherByGeo({axios,endpoint,apiKey},{latitude})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getWeatherByGeo(
                  { axios, endpoint, apiKey },
                  { latitude, longitude, lang }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  lat: latitude,
                  lon: longitude,
                  appid: apiKey,
                  lang,
                },
              });
            });
            it("should resolve", () => {
              expect(result).toEqual(expectedResult);
            });
          });
        });
      });
    });
  });
});

describe("getWeatherByGeo({axios,endpoint,apiKey},{latitude,longitude,lang,units})", () => {
  describe("when latitude equals 37 and longitude equals 10", () => {
    const latitude = 37;
    const longitude = 10;
    const lang = "fr";
    const units = "metric";
    describe('when endpoint equals "https://api.openweathermap.org/data/2.5/weather"', () => {
      const endpoint = "api.openweathermap.org/data/2.5/weather";
      describe("when apiKey equals key007", () => {
        const apiKey = "key007";
        describe("when axios rejects", () => {
          let axios;
          const axiosResponse = new Error("Something wrong");
          beforeEach(() => {
            axios = jest.fn().mockRejectedValue(axiosResponse);
          });
          describe("getWeatherByGeo({axios,endpoint,apiKey},{latitude,longitude,lang,units})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getWeatherByGeo(
                  { axios, endpoint, apiKey },
                  { latitude, longitude, lang, units }
                );
              } catch (e) {
                result = e;
              }
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  lat: latitude,
                  lon: longitude,
                  appid: apiKey,
                  lang,
                  units,
                },
              });
            });
            it("should reject", () => {
              expect(result).toEqual(expectedResult);
            });
          });
        });
        describe("when axios resolves", () => {
          let axios;
          const axiosResponse = {
            data: {
              timezone: 0,
              id: 2643743,
              name: "2172797",
              cod: 200,
            },
          };
          beforeEach(() => {
            axios = jest.fn().mockResolvedValue(axiosResponse);
          });
          describe("getWeatherByGeo({axios,endpoint,apiKey},{latitude,longitude,lang,units})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getWeatherByGeo(
                  { axios, endpoint, apiKey },
                  { latitude, longitude, lang, units }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  lat: latitude,
                  lon: longitude,
                  appid: apiKey,
                  lang,
                  units,
                },
              });
            });
            it("should resolve", () => {
              expect(result).toEqual(expectedResult);
            });
          });
        });
      });
    });
  });
});

describe("getWeatherByGeo({axios,endpoint,apiKey},{latitude,longitude,units})", () => {
  describe("when latitude equals 37 and longitude equals 10", () => {
    const latitude = 37;
    const longitude = 10;
    const units = "metric";
    describe('when endpoint equals "https://api.openweathermap.org/data/2.5/weather"', () => {
      const endpoint = "api.openweathermap.org/data/2.5/weather";
      describe("when apiKey equals key007", () => {
        const apiKey = "key007";
        describe("when axios rejects", () => {
          let axios;
          const axiosResponse = new Error("Something wrong");
          beforeEach(() => {
            axios = jest.fn().mockRejectedValue(axiosResponse);
          });
          describe("getWeatherByGeo({axios,endpoint,apiKey},{latitude,longitude,lang,units})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getWeatherByGeo(
                  { axios, endpoint, apiKey },
                  { latitude, longitude,  units }
                );
              } catch (e) {
                result = e;
              }
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  lat: latitude,
                  lon: longitude,
                  appid: apiKey,
                  units,
                },
              });
            });
            it("should reject", () => {
              expect(result).toEqual(expectedResult);
            });
          });
        });
        describe("when axios resolves", () => {
          let axios;
          const axiosResponse = {
            data: {
              timezone: 0,
              id: 2643743,
              name: "2172797",
              cod: 200,
            },
          };
          beforeEach(() => {
            axios = jest.fn().mockResolvedValue(axiosResponse);
          });
          describe("getWeatherByGeo({axios,endpoint,apiKey},{latitude,longitude,units})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getWeatherByGeo(
                  { axios, endpoint, apiKey },
                  { latitude, longitude,  units }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  lat: latitude,
                  lon: longitude,
                  appid: apiKey,
                  units,
                },
              });
            });
            it("should resolve", () => {
              expect(result).toEqual(expectedResult);
            });
          });
        });
      });
    });
  });
});
