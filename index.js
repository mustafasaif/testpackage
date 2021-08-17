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
      //console.log({ fileTypeCheckResults });
      if (fileTypeCheckResults) {
        fileHeadersCheckResults = await checkFileHeaders(filename);
        //console.log({ fileHeadersCheckResults });
      } else {
        return("Invalid File Extension");
      }
      if (fileHeadersCheckResults) {
        //  const contacts = await fileContent(filename);
        //  //console.log(contacts);
        //   const gets = await getDuplicateContacts(contacts);
        //   const gets4 = await removeDuplicateContacts(contacts,gets);
        //   console.log(gets4.length);
        // //  const gets2 = await getRemoveSpace(contacts);
        // //  const gets3 = await getValidContacts(contacts);
        //   console.log(gets.length);
        // //  console.log(gets3.length);
        // // // console.log(contacts);
        return true;
      } else {
        return ("Invalid Header Names");
      }
    } else {
      return("No File Path Defined");
    }
  } catch (error) {
    console.log(error);
  }
};

uploadfile("/home/mustafa/Desktop/data-invalid.csv");
module.exports = uploadfile;
