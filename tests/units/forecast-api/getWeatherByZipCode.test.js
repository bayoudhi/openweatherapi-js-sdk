const { getForecastByZipCode } = require("../../../src/forecast-api/factories");

it('should reject "zipCode is missing", when zipCode is not passsed', async () => {
  const expectedResult = new Error("zipCode is missing");
  await expect(getForecastByZipCode({}, {})).rejects.toEqual(expectedResult);
});

describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode})", () => {
  describe("when zipCode equals London", () => {
    const zipCode = 94040;
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
          describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getForecastByZipCode(
                  { axios, endpoint, apiKey },
                  { zipCode }
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
                  zip: zipCode.toString(),
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
          describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getForecastByZipCode(
                  { axios, endpoint, apiKey },
                  { zipCode }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  zip: zipCode.toString(),
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

describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,lang})", () => {
  describe("when zipCode equals London", () => {
    const zipCode = 94040;
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
          describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,lang})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getForecastByZipCode(
                  { axios, endpoint, apiKey },
                  { zipCode, lang }
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
                  zip: zipCode.toString(),
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
          describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,lang})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getForecastByZipCode(
                  { axios, endpoint, apiKey },
                  { zipCode, lang }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  zip: zipCode.toString(),
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

describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,lang,units})", () => {
  describe("when zipCode equals London", () => {
    const zipCode = 94040;
    const lang = "ar";
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
          describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,lang,units})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getForecastByZipCode(
                  { axios, endpoint, apiKey },
                  { zipCode, lang, units }
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
                  zip: zipCode.toString(),
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
          describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,lang,units})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getForecastByZipCode(
                  { axios, endpoint, apiKey },
                  { zipCode, lang, units }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  zip: zipCode.toString(),
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

describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,units})", () => {
  describe("when zipCode equals London", () => {
    const zipCode = 94040;
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
          describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,units})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getForecastByZipCode(
                  { axios, endpoint, apiKey },
                  { zipCode, units }
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
                  zip: zipCode.toString(),
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
              name: "London",
              cod: 200,
            },
          };
          beforeEach(() => {
            axios = jest.fn().mockResolvedValue(axiosResponse);
          });
          describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,units})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getForecastByZipCode(
                  { axios, endpoint, apiKey },
                  { zipCode, units }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  zip: zipCode.toString(),
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

describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,countryCode})", () => {
  describe("when zipCode equals London", () => {
    const zipCode = 94040;
    const countryCode = "us";
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
          describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,countryCode})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getForecastByZipCode(
                  { axios, endpoint, apiKey },
                  { zipCode, countryCode }
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
                  zip: "94040,us",
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
          describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,countryCode})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getForecastByZipCode(
                  { axios, endpoint, apiKey },
                  { zipCode, countryCode }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  zip: "94040,us",
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

describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,countryCode,lang})", () => {
  describe("when zipCode equals London", () => {
    const zipCode = 94040;
    const countryCode = "us";
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
          describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,lang})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getForecastByZipCode(
                  { axios, endpoint, apiKey },
                  { zipCode, countryCode, lang }
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
                  zip: "94040,us",
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
          describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,lang})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getForecastByZipCode(
                  { axios, endpoint, apiKey },
                  { zipCode, countryCode, lang }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  zip: "94040,us",
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

describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,countryCode,lang,units})", () => {
  describe("when zipCode equals London", () => {
    const zipCode = 94040;
    const countryCode = "us";
    const lang = "ar";
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
          describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,countryCode,lang,units})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getForecastByZipCode(
                  { axios, endpoint, apiKey },
                  { zipCode, countryCode, lang, units }
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
                  zip: "94040,us",
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
          describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,countryCode,lang,units})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getForecastByZipCode(
                  { axios, endpoint, apiKey },
                  { zipCode, countryCode, lang, units }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  zip: "94040,us",
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

describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,countryCode,units})", () => {
  describe("when zipCode equals London", () => {
    const zipCode = 94040;
    const countryCode = "us";
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
          describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,countryCode,units})", () => {
            let result;
            const expectedResult = axiosResponse;
            beforeEach(async () => {
              try {
                await getForecastByZipCode(
                  { axios, endpoint, apiKey },
                  { zipCode, countryCode, units }
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
                  zip: "94040,us",
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
              name: "London",
              cod: 200,
            },
          };
          beforeEach(() => {
            axios = jest.fn().mockResolvedValue(axiosResponse);
          });
          describe("getForecastByZipCode({axios,endpoint,apiKey},{zipCode,countryCode,units})", () => {
            let result;
            const expectedResult = axiosResponse.data;
            beforeEach(async () => {
              try {
                result = await getForecastByZipCode(
                  { axios, endpoint, apiKey },
                  { zipCode, countryCode, units }
                );
              } catch (e) {}
            });
            it("should call axios once with right args", () => {
              expect(axios).toBeCalledTimes(1);
              expect(axios).toBeCalledWith({
                url: endpoint,
                params: {
                  zip: "94040,us",
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
