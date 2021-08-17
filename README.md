# Testpackage
The following NPM package is designed to filter and clean user contact details. 


The package accepts **ONLY** .CSV or .XLSX file type.  


Ensure the headers in the file match the following format.  
* mob_no
* first_name
* last_name
* email
* address
* city
* country

## Install
```bash
npm i testpackage321
```
## Import
```javascript
const uploadfile = require("testpackage321");
const contactJoiSchemas = require("testpackage321/utils/file.field.validate");
const { fileContent } = require("testpackage321/utils/file.validate.functions");
const {
  getDuplicateContacts,
  getValidContacts,
  getInvalidContacts,
  getRemoveSpace,
  removeDuplicateContacts,
} = require("testpackage321/utils/contact.validate.functions");
```
## Usage
```javascript
//Define the file path
const filename = "<FilePath>";
```
```javascript
(async () => {
  let file = await uploadfile(filename);
  if (file === true) {
    let rawContacts = await fileContent(filename);
    let arrcontacts = contactJoiSchemas(rawContacts);
    let duplicate = getDuplicateContacts(arrcontacts);
    let withoutduplicates = await removeDuplicateContacts(
      arrcontacts,
      duplicate
    );
    let withoutspace = await getRemoveSpace(withoutduplicates);
    let validcontacts = await getValidContacts(withoutspace);
    let invalidcontacts = await getInvalidContacts(withoutspace);
     }
})();
```
