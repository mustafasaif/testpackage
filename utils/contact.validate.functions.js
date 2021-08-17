/* eslint-disable no-param-reassign */
const { isValidMsisdn, trimMsisdn } = require("./msisdn.util");

const getValidContacts = (arrContacts) =>
  Promise.resolve(
    arrContacts.filter((phone) =>
      [phone].find((mob) =>
        isValidMsisdn(trimMsisdn(mob.mob_no)) ? phone : null
      )
    )
  );

const getInvalidContacts = (arrContacts) =>
  Promise.resolve(
    arrContacts.filter((phone) =>
      [phone].find((mob) =>
        !isValidMsisdn(trimMsisdn(mob.mob_no)) ? phone : null
      )
    )
  );

const getRemoveSpace = (arrContacts) =>
  arrContacts.reduce((acc, item, _) => {
    item.mob_no = trimMsisdn(item.mob_no);
    acc.push(item);
    //console.log(item.mob_no);
    return acc;
  }, []);

// // THESE ARE NEWLY ADDED FUNCTIONS FOR FILTERING

const removeDuplicateContacts = (arrContacts) => {
  const duplicates = this.getDuplicateContacts(arrContacts);
  let withoutDuplicates = arrContacts;
  //console.log(withoutDuplicates);
  duplicates.forEach((duplicate) => {
    const deleteIndex = withoutDuplicates.findIndex(
      (contact) => contact.mob_no === duplicate
    );
    withoutDuplicates.splice(deleteIndex, 1);
  });
  return withoutDuplicates;
};

const getDuplicateContacts = (arrContacts) => {
  const initialArray = arrContacts.map((data) => data.mob_no);
  const sortedArray = initialArray.slice().sort();
  // console.log(sortedArray);
  let finalArray = [];
  for (let index = 0; index < sortedArray.length - 1; index++) {
    if (sortedArray[index + 1] === sortedArray[index]) {
      finalArray = finalArray.concat(sortedArray[index]);
    }
  }
  return finalArray;
};

module.exports = {
  getDuplicateContacts,
  getRemoveSpace,
  getValidContacts,
  removeDuplicateContacts,
  getInvalidContacts,
};
