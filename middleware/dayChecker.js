const fs = require("fs");

function dayChecker(currentDate, storeName, route) {
  const filePath = "JSONdata/days.JSON";
  let storedDate;
  let runMiner = false;
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8"); //try to see if the file isn't empty
    if (fileContent) {
      let parsedFile = JSON.parse(fileContent);
      if (parsedFile[storeName]) {
        storedDate = parsedFile;

        if (!parsedFile[storeName][route]) {
          console.log("route is not in days file");
          runMiner = true;
          parsedFile[storeName][route] = { date: currentDate };
          fs.writeFileSync(filePath, JSON.stringify(parsedFile), "utf-8");
        }
      } else {
        let appendedData = JSON.stringify({
          [storeName]: { [route]: { date: currentDate } },
          ...parsedFile,
        });
        console.log(appendedData, "route:", route);
        fs.writeFileSync(filePath, appendedData, "utf-8");
        storedDate = JSON.parse(appendedData);
      }
    } else {
      let initialData = JSON.stringify({
        [storeName]: { [route]: { date: currentDate } },
      });
      fs.writeFileSync(filePath, initialData, "utf-8");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }

  //if current date is different then date in days.JSON file, update the date and return true
  if (storedDate && storedDate[storeName][route]?.date !== currentDate) {
    runMiner = true;
    storedDate[storeName][route].date = currentDate;
    fs.writeFile(filePath, JSON.stringify(storedDate), (err) => {
      if (err) throw err;
      console.log("file wrote");
    });
    return runMiner;
  } else {
    return runMiner;
  }
}

module.exports = { dayChecker };
