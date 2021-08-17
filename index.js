const {
  checkFileType,
  checkFileHeaders,
} = require("./utils/file.validate.functions");

uploadfile = async (filename, done) => {
  try {
    if (filename) {
      fileTypeCheckResults = checkFileType(filename);
      if (fileTypeCheckResults) {
        fileHeadersCheckResults = await checkFileHeaders(filename);
      } else {
        throw Error("Invalid File Extension");
      }
      if (fileHeadersCheckResults) {
        return true;
      } else {
        throw Error("Invalid Header Names");
      }
    } else {
      throw Error("No File Path Defined");
    }
  } catch (error) {
    console.log(error);
  }
};
uploadfile("/home/mustafa/Desktop/data-invalid.sv");

module.exports = uploadfile;
