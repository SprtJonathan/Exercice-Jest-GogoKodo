const { GogoKodo } = require("./algo.js");

const mockCallback = jest.fn((x) => x);
const fake = jest.fn(() => {
  return "salut";
});

test("The parameter for GogoKodo function should be a number between 1 and 100", () => {
  expect(GogoKodo(1000)).toBe(1000);
});

test("If the parameter is divisible by 3, then Gogo", () => {
  expect(GogoKodo(33)).toBe("Gogo")
});

test("If the parameter is divisible by 5, then Kodo", () => {
  expect(GogoKodo(100)).toBe("Kodo")
});

test("If the parameter is divisible by 3 and 5, then GogoKodo", () => {
  expect(GogoKodo(30)).toBe("GogoKodo")
});
