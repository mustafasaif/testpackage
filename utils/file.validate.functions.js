const csv = require("csv-parser");
const fs = require("fs");

checkFileType = (fileExtension) => {
  if (fileExtension.includes(".csv") || fileExtension.includes(".xlsx")) {
    return true;
  }
};
parseFileHeaders = (path) => {
  let results;
  return new Promise((resolve, reject) => {
    fs.createReadStream(path)
      .pipe(csv())
      .on("headers", (Header) => {
        results =
          Header.includes("mob_no") &&
          Header.includes("first_name") &&
          Header.includes("last_name") &&
          Header.includes("email") &&
          Header.includes("address") &&
          Header.includes("city") &&
          Header.includes("country");
        resolve(results);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};
parseFile = (path) => {
  let arrContacts = [];
  return new Promise((resolve, reject) => {
    fs.createReadStream(path)
      .pipe(csv())
      .on("data", (data) => {
        arrContacts.push(data);
        resolve(arrContacts);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};
checkFileHeaders = async (path) => {
  try {
    const data = await parseFileHeaders(path, {});
    return data;
  } catch (error) {}
};
fileContent = async (path) => {
  try {
    const data = await parseFile(path, {});
    return data;
  } catch (error) {}
};

module.exports = { checkFileType, checkFileHeaders, fileContent };
