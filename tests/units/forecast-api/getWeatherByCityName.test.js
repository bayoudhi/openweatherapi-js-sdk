const { getForecastByCityName } = require("../../../src/forecast-api/factories");

it('should reject "cityName is missing", when cityName is not passsed', async () => {
  const expectedResult = new Error("cityName is missing");
  await expect(getForecastByCityName({}, {})).rejects.toEqual(expectedResult);
  await expect(getForecastByCityName({}, { cityName: "" })).rejects.toEqual(
    expectedResult
  );
});

describe("getForecastByCityName({axios,endpoint,apiKey},{cityName})", () => {
  describe("when cityName equals London", () => {
    const cityName = "London";
    describe('when endpoint equals "https://api.openweathermap.org/data/2.5/forecast"', () => {
      const endpoint = "api.openweathermap.org/data/2.5/forecast";
      describe("when apiKey equals key007", () => {
        const apiKey = "key007";
        describe("when axios rejects", () => {
          let axios;
          const axiosResponse = new Error("Something wrong");
          beforeEach(() => {
            axios = jest.fn().mockRejectedValue(axiosResponse);
          });
          describe("getForecastByCityName({axios,endpoint,apiKey},{cityName})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getForecastByCityName(
                  { axios, endpoint, apiKey },
                  { cityName }
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
                  q: cityName,
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
              name: "London",
              cod: 200,
            },
          };
          beforeEach(() => {
            axios = jest.fn().mockResolvedValue(axiosResponse);
          });
          describe("getForecastByCityName({axios,endpoint,apiKey},{cityName})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getForecastByCityName(
                  { axios, endpoint, apiKey },
                  { cityName }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  q: cityName,
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

describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,stateCode})", () => {
  describe("when cityName equals London", () => {
    const cityName = "London";
    const stateCode = "uk";
    describe('when endpoint equals "https://api.openweathermap.org/data/2.5/forecast"', () => {
      const endpoint = "api.openweathermap.org/data/2.5/forecast";
      describe("when apiKey equals key007", () => {
        const apiKey = "key007";
        describe("when axios rejects", () => {
          let axios;
          const axiosResponse = new Error("Something wrong");
          beforeEach(() => {
            axios = jest.fn().mockRejectedValue(axiosResponse);
          });
          describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,stateCode})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getForecastByCityName(
                  { axios, endpoint, apiKey },
                  { cityName, stateCode }
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
                  q: "London,uk",
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
              name: "London",
              cod: 200,
            },
          };
          beforeEach(() => {
            axios = jest.fn().mockResolvedValue(axiosResponse);
          });
          describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,stateCode})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getForecastByCityName(
                  { axios, endpoint, apiKey },
                  { cityName, stateCode }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  q: "London,uk",
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

describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,stateCode,countryCode})", () => {
  describe("when cityName equals London", () => {
    const cityName = "London";
    const stateCode = "uk";
    const countryCode = "GB";
    describe('when endpoint equals "https://api.openweathermap.org/data/2.5/forecast"', () => {
      const endpoint = "api.openweathermap.org/data/2.5/forecast";
      describe("when apiKey equals key007", () => {
        const apiKey = "key007";
        describe("when axios rejects", () => {
          let axios;
          const axiosResponse = new Error("Something wrong");
          beforeEach(() => {
            axios = jest.fn().mockRejectedValue(axiosResponse);
          });
          describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,stateCode,countryCode})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getForecastByCityName(
                  { axios, endpoint, apiKey },
                  { cityName, stateCode, countryCode }
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
                  q: "London,uk,GB",
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
              name: "London",
              cod: 200,
            },
          };
          beforeEach(() => {
            axios = jest.fn().mockResolvedValue(axiosResponse);
          });
          describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,stateCode,countryCode})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getForecastByCityName(
                  { axios, endpoint, apiKey },
                  { cityName, stateCode, countryCode }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  q: "London,uk,GB",
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

describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,lang})", () => {
  describe("when cityName equals London", () => {
    const cityName = "London";
    const lang = "ar";
    describe('when endpoint equals "https://api.openweathermap.org/data/2.5/forecast"', () => {
      const endpoint = "api.openweathermap.org/data/2.5/forecast";
      describe("when apiKey equals key007", () => {
        const apiKey = "key007";
        describe("when axios rejects", () => {
          let axios;
          const axiosResponse = new Error("Something wrong");
          beforeEach(() => {
            axios = jest.fn().mockRejectedValue(axiosResponse);
          });
          describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,lang})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getForecastByCityName(
                  { axios, endpoint, apiKey },
                  { cityName, lang }
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
                  q: cityName,
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
              name: "London",
              cod: 200,
            },
          };
          beforeEach(() => {
            axios = jest.fn().mockResolvedValue(axiosResponse);
          });
          describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,lang})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getForecastByCityName(
                  { axios, endpoint, apiKey },
                  { cityName, lang }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  q: cityName,
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

describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,lang})", () => {
  describe("when cityName equals London", () => {
    const cityName = "London";
    const lang = "fr";
    describe('when endpoint equals "https://api.openweathermap.org/data/2.5/forecast"', () => {
      const endpoint = "api.openweathermap.org/data/2.5/forecast";
      describe("when apiKey equals key007", () => {
        const apiKey = "key007";
        describe("when axios rejects", () => {
          let axios;
          const axiosResponse = new Error("Something wrong");
          beforeEach(() => {
            axios = jest.fn().mockRejectedValue(axiosResponse);
          });
          describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,lang})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getForecastByCityName(
                  { axios, endpoint, apiKey },
                  { cityName, lang }
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
                  q: cityName,
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
              name: "London",
              cod: 200,
            },
          };
          beforeEach(() => {
            axios = jest.fn().mockResolvedValue(axiosResponse);
          });
          describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,lang})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getForecastByCityName(
                  { axios, endpoint, apiKey },
                  { cityName, lang }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  q: cityName,
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

describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,stateCode,lang})", () => {
  describe("when cityName equals London", () => {
    const cityName = "London";
    const stateCode = "uk";
    const lang = "fr";
    describe('when endpoint equals "https://api.openweathermap.org/data/2.5/forecast"', () => {
      const endpoint = "api.openweathermap.org/data/2.5/forecast";
      describe("when apiKey equals key007", () => {
        const apiKey = "key007";
        describe("when axios rejects", () => {
          let axios;
          const axiosResponse = new Error("Something wrong");
          beforeEach(() => {
            axios = jest.fn().mockRejectedValue(axiosResponse);
          });
          describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,stateCode,lang})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getForecastByCityName(
                  { axios, endpoint, apiKey },
                  { cityName, stateCode, lang }
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
                  q: "London,uk",
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
              name: "London",
              cod: 200,
            },
          };
          beforeEach(() => {
            axios = jest.fn().mockResolvedValue(axiosResponse);
          });
          describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,stateCode,lang})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getForecastByCityName(
                  { axios, endpoint, apiKey },
                  { cityName, stateCode, lang }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  q: "London,uk",
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

describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,stateCode,countryCode,lang})", () => {
  describe("when cityName equals London", () => {
    const cityName = "London";
    const stateCode = "uk";
    const countryCode = "GB";
    const lang = "fr";
    describe('when endpoint equals "https://api.openweathermap.org/data/2.5/forecast"', () => {
      const endpoint = "api.openweathermap.org/data/2.5/forecast";
      describe("when apiKey equals key007", () => {
        const apiKey = "key007";
        describe("when axios rejects", () => {
          let axios;
          const axiosResponse = new Error("Something wrong");
          beforeEach(() => {
            axios = jest.fn().mockRejectedValue(axiosResponse);
          });
          describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,stateCode,countryCode,lang})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getForecastByCityName(
                  { axios, endpoint, apiKey },
                  { cityName, stateCode, countryCode, lang }
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
                  q: "London,uk,GB",
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
              name: "London",
              cod: 200,
            },
          };
          beforeEach(() => {
            axios = jest.fn().mockResolvedValue(axiosResponse);
          });
          describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,stateCode,countryCode,lang})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getForecastByCityName(
                  { axios, endpoint, apiKey },
                  { cityName, stateCode, countryCode, lang }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  q: "London,uk,GB",
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

describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,stateCode,countryCode,lang,units})", () => {
  describe("when cityName equals London", () => {
    const cityName = "London";
    const stateCode = "uk";
    const countryCode = "GB";
    const lang = "fr";
    const units = "metric";
    describe('when endpoint equals "https://api.openweathermap.org/data/2.5/forecast"', () => {
      const endpoint = "api.openweathermap.org/data/2.5/forecast";
      describe("when apiKey equals key007", () => {
        const apiKey = "key007";
        describe("when axios rejects", () => {
          let axios;
          const axiosResponse = new Error("Something wrong");
          beforeEach(() => {
            axios = jest.fn().mockRejectedValue(axiosResponse);
          });
          describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,stateCode,countryCode,lang,units})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getForecastByCityName(
                  { axios, endpoint, apiKey },
                  { cityName, stateCode, countryCode, lang, units }
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
                  q: "London,uk,GB",
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
              name: "London",
              cod: 200,
            },
          };
          beforeEach(() => {
            axios = jest.fn().mockResolvedValue(axiosResponse);
          });
          describe("getForecastByCityName({axios,endpoint,apiKey},{cityName,stateCode,countryCode,lang,units})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getForecastByCityName(
                  { axios, endpoint, apiKey },
                  { cityName, stateCode, countryCode, lang, units }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  q: "London,uk,GB",
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
