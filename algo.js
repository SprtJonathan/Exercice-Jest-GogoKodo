function GogoKodo(number) {
  if (number < 1 || number > 100) {
    return number;
  }
  if (Number.isInteger(number / 3) && Number.isInteger(number / 5)) {
    return "GogoKodo";
  }
  if (Number.isInteger(number / 3)) {
    return "Gogo";
  }
  if (Number.isInteger(number / 5)) {
    return "Kodo";
  }
  return number;
}

module.exports = { GogoKodo };
