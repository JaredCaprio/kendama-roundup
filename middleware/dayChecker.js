const fs = require("fs");

function dayChecker(currentDate) {
  const filePath = "./dataTxtFiles/days.txt";
  let storedDate;
  try {
    storedDate = fs.readFileSync(filePath, "utf-8");
  } catch (err) {
    if (err.code === "ENOENT") {
      fs.writeFileSync(filePath, currentDate, "utf-8");
      console.log("File created with initial date:", currentDate);
      storedDate = currentDate;
    } else {
      throw err;
    }
  }
  if (storedDate !== currentDate) {
    fs.writeFile(filePath, currentDate, (err) => {
      if (err) throw err;
      console.log("file wrote");
    });
    return true;
  } else {
    return false;
  }
}
module.exports = { dayChecker };
