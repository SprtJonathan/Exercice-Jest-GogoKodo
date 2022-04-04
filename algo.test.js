const { GogoKodo } = require("./algo.js");

describe("We try the different conditions required to pass the tests", () => {
  const watchConsole = jest.spyOn(console, "log");
  GogoKodo();
  test("The number is divisible by 3 and 5", () => {
    for (i = 0; i < 100; i++) {
      if (Number.isInteger((i + 1) / 3) && Number.isInteger((i + 1) / 5)) {
        expect(watchConsole.mock.calls[i][0]).toBe("GogoKodo");
      } else if (Number.isInteger((i + 1) / 3)) {
        expect(watchConsole.mock.calls[i][0]).toBe("Gogo");
      } else if (Number.isInteger((i + 1) / 5)) {
        expect(watchConsole.mock.calls[i][0]).toBe("Kodo");
      } else {
        expect(watchConsole.mock.calls[i][0]).toBe(i + 1);
      }
    }
  });
});
