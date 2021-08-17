const {
  checkFileType,
  checkFileHeaders,
} = require("./utils/file.validate.functions");
//  const { getDuplicateContacts,getRemoveSpace ,getValidContacts, removeDuplicateContacts} = require("./utils/contact.validate.functions");
//  const contactJoiSchemas = require("./utils/file.field.validate");

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

uploadfile("/home/mustafa/Desktop/data-valid.csv");
module.exports = uploadfile;
