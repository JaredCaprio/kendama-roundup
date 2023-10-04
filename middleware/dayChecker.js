const fs = require("fs");

function dayChecker(currentDate, storeName) {
  const filePath = "dataTxtFiles/days.JSON";
  let storedDate;
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8"); //try to see if the file isn't empty
    if (fileContent) {
      let parsedFile = JSON.parse(fileContent);
      if (parsedFile[storeName]) {
        storedDate = parsedFile;
      } else {
        let appendedData = JSON.stringify({
          [storeName]: { date: currentDate },
          ...parsedFile,
        });
        fs.writeFileSync(filePath, appendedData, "utf-8");
        storedDate = appendedData;
      }
    } else {
      let initialData = JSON.stringify({ [storeName]: { date: currentDate } });
      fs.writeFileSync(filePath, initialData, "utf-8");
    }
  } catch (err) {
    throw err;
  }
  if (storedDate && storedDate[storeName]?.date !== currentDate) {
    storedDate[storeName].date = currentDate;
    fs.writeFile(filePath, JSON.stringify(storedDate), (err) => {
      if (err) throw err;
      console.log("file wrote");
    });

    return true;
  } else {
    return false;
  }
}

module.exports = { dayChecker };
