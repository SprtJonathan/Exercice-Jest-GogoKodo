function GogoKodo() {
  for (i = 1; i < 101; i++) {
    if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
      console.log("GogoKodo");
    } else if (Number.isInteger(i / 3)) {
      console.log("Gogo");
    } else if (Number.isInteger(i / 5)) {
      console.log("Kodo");
    } else {
      console.log(i);
    }
  }
}

module.exports = { GogoKodo };
