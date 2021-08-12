const {
  checkFileType,
  checkFileHeaders,
  fileContent,
} = require("./file.validate.functions");
const contactJoiSchemas = require("./utils/file.field.validate");

uploadfile = async (filename) => {
  if (filename) {
    fileTypeCheckResults = await checkFileType(filename);
    console.log({ fileTypeCheckResults });
    if (fileTypeCheckResults) {
      fileHeadersCheckResults = await checkFileHeaders(filename);
      console.log({ fileHeadersCheckResults });
    }
    if (fileHeadersCheckResults) {
      const contacts = await fileContent(filename);
      //console.log(contacts);
      contactJoiSchemas(contacts);
    }
  }
};

uploadfile("/home/mustafa/Desktop/data-2.csv");

module.exports = uploadfile;
