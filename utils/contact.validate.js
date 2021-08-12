const {
    getDuplicateContacts,
    removeDuplicateContacts,
    getRemoveSpace,
    getValidContacts,
    getInvalidContacts,
  } = require("./contact.validate.functions");
  
  const validatedcontact = async (ArrContacts) => {
    let arrContacts = [];
    arrContacts = ArrContacts;
    console.log("Total contacts: ", arrContacts.length);
    try {
      const duplicates = await getDuplicateContacts(arrContacts);
      console.log("Duplicates: ", duplicates.length);
      const withoutDuplicate = await removeDuplicateContacts(arrContacts);
      console.log("withoutDuplicate: ", withoutDuplicate.length);
      const withoutSpace = await getRemoveSpace(withoutDuplicate);
      console.log("withoutSpace: ", withoutSpace.length);
      const validContacts = await getValidContacts(withoutSpace);
      console.log("ValidContacts: ", validContacts.length);
      const InvalidContacts = await getInvalidContacts(withoutSpace);
      console.log("InvalidContacts: ", InvalidContacts.length);
    } catch (err) {
      console.log(err);
    }
  };
  
  module.exports = validatedcontact;
  