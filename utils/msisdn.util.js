/* eslint-disable no-param-reassign */
const { parsePhoneNumberFromString } = require("libphonenumber-js");
// const { db } = require("../models");

/** Get calling prefix for the msisdn. E.g. 255712999888 has a prefix 25571
 *
 * @example
 * ```javascript
 * const msisdn = '255712999888';
 * const prefix = getCallingPrefix(msisdn);
 * assertTrue(prefix === 255, 'Valid prefix');
 * ```
 *
 * @param {String} msisdn phone number passed in.
 * @returns {String} calling prefix
 *
 */
// const getCallingPrefix = (msisdn) => {
//   msisdn = msisdn.toString();
//   const phoneObj = parsePhoneNumberFromString(
//     msisdn.match(/^\+/) ? msisdn : `+${msisdn}`
//   );

//   const prefix = phoneObj.countryCallingCode; //  + msisdn.substring(phoneObj.countryCallingCode.length).substring(0, 2);

//   return prefix;
// };

// const getNetworkPrefix = (msisdn) => {
//   msisdn = msisdn.toString();
//   const callingPrefix = getCallingPrefix(msisdn);
//   const withoutPlus = msisdn
//     .replace("+", "")
//     .substr(callingPrefix.length)
//     .substr(0, 2);
//   return callingPrefix + withoutPlus;
// };

// /**
//  *
//  * @param {u} db
//  * @param {*} user_id
//  */
// const getUserCountryCode = async (db, user_id) => {
//   const { prefix } = await db.mst_vendors.findOne({
//     where: { id: user_id },
//     attributes: ["c_prefix"]
//   });
// };

const trimMsisdn = (msisdn) => {
  if (msisdn !== undefined) {
    msisdn = msisdn
      .toString()
      .replace(/\s+/g, "")
      .replace(/-/g, "")
      .replace(/\^/g, "")
      .replace(/_/g, "")
      .replace(/[#_+-]/g, "")
      .replace(/[()]/g, "");

    const dn = msisdn.match(/^\+/) ? msisdn : `+${msisdn}`;
    const PhoneNumber = parsePhoneNumberFromString(dn);
    if (PhoneNumber) {
      return msisdn;
    }
  }
};

// const appendCountryPrefix = (mobileNumber, prefix) => {
//   // if less than 10digits
//   if (mobileNumber.length < 10) {
//     mobileNumber = prefix + mobileNumber.replace(/^0+/, "");
//   }

//   // if leading 0
//   if (/^0+/.test(mobileNumber)) {
//     mobileNumber = prefix + mobileNumber.replace(/^0+/, "");
//   }

//   return mobileNumber;
// };

/**
 *
 * @param {string} msisdn
 */
const isValidMsisdn = (msisdn) => {
  if (msisdn !== undefined) {
    msisdn = msisdn.toString();
    try {
      const phoneObj = parsePhoneNumberFromString(
        msisdn.match(/^\+/) ? msisdn : `+${msisdn}`
      );
      return phoneObj.isValid();
    } catch (err) {
      return false;
    }
  }
};

module.exports = {
  //getCallingPrefix,
  isValidMsisdn,
  //getNetworkPrefix,
  trimMsisdn,
  //appendCountryPrefix,
};
