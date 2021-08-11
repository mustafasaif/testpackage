module.exports = checkFileType = (fileExtension) => {
    if (fileExtension.includes("csv") || fileExtension.includes("xlsx")) {
        console.log("True");
        return true;
      
    }
    console.log("INVALID FILE FORMAT");
  };