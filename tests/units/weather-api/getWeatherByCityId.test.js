const { getWeatherByCityId } = require("../../../src/weather-api/factories");

it('should reject "cityId is missing", when cityId is not passsed', async () => {
  const expectedResult = new Error("cityId is missing");
  await expect(getWeatherByCityId({}, {})).rejects.toEqual(expectedResult);
  await expect(getWeatherByCityId({}, { cityId: "" })).rejects.toEqual(
    expectedResult
  );
});

describe("getWeatherByCityId({axios,endpoint,apiKey},{cityId})", () => {
  describe("when cityId equals 2172797", () => {
    const cityId = "2172797";
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
          describe("getWeatherByCityId({axios,endpoint,apiKey},{cityId})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getWeatherByCityId(
                  { axios, endpoint, apiKey },
                  { cityId }
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
                  id: cityId,
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
          describe("getWeatherByCityId({axios,endpoint,apiKey},{cityId})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getWeatherByCityId(
                  { axios, endpoint, apiKey },
                  { cityId }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  id: cityId,
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

describe("getWeatherByCityId({axios,endpoint,apiKey},{cityId,lang})", () => {
  describe("when cityId equals 2172797", () => {
    const cityId = "2172797";
    const lang = "ar";
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
          describe("getWeatherByCityId({axios,endpoint,apiKey},{cityId,lang})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getWeatherByCityId(
                  { axios, endpoint, apiKey },
                  { cityId, lang }
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
                  id: cityId,
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
          describe("getWeatherByCityId({axios,endpoint,apiKey},{cityId,lang})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getWeatherByCityId(
                  { axios, endpoint, apiKey },
                  { cityId, lang }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  id: cityId,
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

describe("getWeatherByCityId({axios,endpoint,apiKey},{cityId,units})", () => {
  describe("when cityId equals 2172797", () => {
    const cityId = "2172797";
    const units = "imperial";
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
          describe("getWeatherByCityId({axios,endpoint,apiKey},{cityId,units})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getWeatherByCityId(
                  { axios, endpoint, apiKey },
                  { cityId, units }
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
                  id: cityId,
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
          describe("getWeatherByCityId({axios,endpoint,apiKey},{cityId,units})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getWeatherByCityId(
                  { axios, endpoint, apiKey },
                  { cityId, units }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  id: cityId,
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

describe("getWeatherByCityId({axios,endpoint,apiKey},{cityId,lang,units})", () => {
  describe("when cityId equals 2172797", () => {
    const cityId = "2172797";
    const lang = "ar";
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
          describe("getWeatherByCityId({axios,endpoint,apiKey},{cityId,lang,units})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getWeatherByCityId(
                  { axios, endpoint, apiKey },
                  { cityId, lang, units }
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
                  id: cityId,
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
          describe("getWeatherByCityId({axios,endpoint,apiKey},{cityId,lang,units})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getWeatherByCityId(
                  { axios, endpoint, apiKey },
                  { cityId, lang, units }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  id: cityId,
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
