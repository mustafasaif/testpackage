const {
  checkFileType,
  checkFileHeaders,
  fileContent,
} = require("./utils/file.validate.functions");
// const { getDuplicateContacts,getRemoveSpace ,getValidContacts} = require("./utils/contact.validate.functions");
// const contactJoiSchemas = require("./utils/file.field.validate");

uploadfile = async (filename) => {
  try {
    if (filename) {
      fileTypeCheckResults = checkFileType(filename);
      console.log({ fileTypeCheckResults });
      if (fileTypeCheckResults) {
        fileHeadersCheckResults = await checkFileHeaders(filename);
        console.log({ fileHeadersCheckResults });
      } else {
        console.log("Invalid File Extension");
      }
      if (fileHeadersCheckResults) {
        //  const contacts = await fileContent(filename);
        //  const gets = await getDuplicateContacts(contacts);
        //  const gets2 = await getRemoveSpace(contacts);
        //  const gets3 = await getValidContacts(contacts);
        //  console.log(gets.length);
        //  console.log(gets3.length);
        // // console.log(contacts);
      } else {
        console.log("Invalid Header Names");
      }
    } else {
      console.log("No File Path Defined");
    }
  } catch (error) {
    console.log(error);
  }
};

 uploadfile("/home/mustafa/Desktop/data-valid.csv");
module.exports = uploadfile;
