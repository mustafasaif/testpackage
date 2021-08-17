const {
  checkFileType,
  checkFileHeaders,
} = require("./utils/file.validate.functions");

uploadfile = async (filename) => {
  try {
    if (filename) {
      fileTypeCheckResults = checkFileType(filename);
      if (fileTypeCheckResults) {
        fileHeadersCheckResults = await checkFileHeaders(filename);
      } else {
        console.log("Error => Invalid File Extension");
      }
      if (fileHeadersCheckResults) {
        return true;
      } else {
        console.log("Error => Invalid Header Names");
      }
    } else {
      console.log("Error => No File Path Defined");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = uploadfile;
