const {
  checkFileType,
  checkFileHeaders,
  fileContent
} = require("./file.validate.functions");

 uploadfile = async (filename) => {
  if (filename) {
    fileTypeCheckResults = await checkFileType(filename);
    console.log({fileTypeCheckResults});
    if (fileTypeCheckResults) {
      fileHeadersCheckResults = await checkFileHeaders(filename);
      console.log({fileHeadersCheckResults});
    }
    if(fileHeadersCheckResults){
      const contacts = await fileContent(filename)
      console.log(contacts);
    }
  }
};

uploadfile("/home/mustafa/Desktop/data.csv");

//module.exports = checkFileType;
