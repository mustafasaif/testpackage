const Joi = require("joi");
const schema = Joi.object({
  mob_no: Joi.alternatives(
    Joi.string().pattern(/^[0-9\s]+$/, "numbers"),
    Joi.number()
  ).required(),
  first_name: Joi.alternatives(
    Joi.string().allow(null, ""),
    Joi.number().allow(null, "")
  ),
  last_name: Joi.alternatives(
    Joi.string().allow(null, ""),
    Joi.number().allow(null, "")
  ),
  email: Joi.alternatives(
    Joi.string().allow(null, ""),
    Joi.string()
      .allow(null, "")
      .email({ tlds: { allow: false } })
  ),
  address: Joi.alternatives(
    Joi.string().allow(null, ""),
    Joi.number().allow(null, "")
  ),
  city: Joi.alternatives(
    Joi.string().allow(null, ""),
    Joi.number().allow(null, "")
  ),
  country: Joi.alternatives(
    Joi.string().allow(null, ""),
    Joi.number().allow(null, "")
  ),
});
let services = Joi.array().items(schema);
const contactJoiSchemas = (ArrContacts) => {
  let test = services.validate(ArrContacts);
  return test.value;
};
module.exports = contactJoiSchemas;
